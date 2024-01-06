import "../../../_assets/Helper/SequelizeInitializer";
import Server from "@shared/Entity/Server";
import { Op } from "sequelize";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import ErrorHelper from "../../../_assets/Helper/ErrorHelper";
import LogServerStatus from "@shared/Entity/LogServerStatus";
import NotFoundException from "@/monitoring/api/_assets/Exception/NotFoundException";

type Context = {
    params: {
        slug: string;
        dataType: string;
    };
};

const dateConstraintSchema = z.coerce.date().nullable();
const limitSchema = z.coerce.number().int().nullable();
const dataTypeSchema = z.union([
    z.literal("status"),
    z.literal("cpu"),
    z.literal("latency"),
    z.literal("memory"),
    z.literal("storage"),
    z.literal("traffic"),
]);

export const GET = async (request: NextRequest, { params }: Context) => {
    try {
        const dataType = dataTypeSchema.parse(params.dataType);

        const { searchParams } = request.nextUrl;
        const before = dateConstraintSchema.parse(searchParams.get("before"));
        const after = dateConstraintSchema.parse(searchParams.get("after"));
        const limit = limitSchema.parse(searchParams.get("limit"));

        const server = await Server.findOne({
            attributes: ["id"],
            where: {
                slug: params.slug,
            },
        });

        if (!server) {
            throw new NotFoundException();
        }

        const createdAt =
            before || after
                ? {
                      ...(before && { [Op.lt]: before }),
                      ...(after && { [Op.gt]: after }),
                  }
                : null;

        const logs = await LogServerStatus.findAll({
            attributes: [dataType, "createdAt"],
            where: {
                ...(createdAt && { createdAt }),
                serverId: server.id,
            },
            ...(limit && { limit: Number(limit) }),
            order: [["createdAt", "DESC"]],
        });

        return NextResponse.json(logs);
    } catch (err) {
        return ErrorHelper.createResponse(err);
    }
};
