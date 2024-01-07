import "../../../_assets/Helper/SequelizeInitializer";
import LogServerStatus from "@shared/Entity/LogServerStatus";
import { NextResponse } from "next/server";
import Status from "@shared/Type/Status";
import { QueryTypes } from "sequelize";
import ApiResponse from "@/monitoring/api/_assets/Type/ApiResponse";
import UpFromApi from "./_interface";
import SequelizeProvider from "@/monitoring/api/_assets/Provider/SequelizeProvider";
import ErrorHelper from "@/monitoring/api/_assets/Helper/ErrorHelper";
import Server from "@shared/Entity/Server";
import NotFoundException from "@/monitoring/api/_assets/Exception/NotFoundException";

const column = {
    createdAt: LogServerStatus.getAttributes().createdAt.field,
    serverId: LogServerStatus.getAttributes().serverId.field,
    status: LogServerStatus.getAttributes().status.field,
};

const QUERY = `
    SELECT ${column.createdAt}
    FROM ${LogServerStatus.tableName}
    WHERE ${column.serverId} = ? AND ${column.createdAt} > (
        (
            SELECT ${column.createdAt}
            FROM ${LogServerStatus.tableName}
            WHERE ${column.serverId} = ? AND ${column.status} = ${Status.error}
            ORDER BY ${column.createdAt} DESC
            LIMIT 1
        )
        UNION
        (
            SELECT 0
        )
        LIMIT 1
    )
    LIMIT 1
`;

type Params = {
    slug: string;
};

export const GET: ApiResponse<UpFromApi.Get.Response, Params> = async (
    _: any,
    { params }: any
) => {
    try {
        const server = await Server.findOne({
            attributes: ["id"],
            where: {
                slug: params.slug,
            },
        });

        if (!server) {
            throw new NotFoundException();
        }

        const queryResult = await SequelizeProvider.monitoring.query<{
            createdAt: string;
        }>(QUERY, {
            replacements: [server.id, server.id],
            type: QueryTypes.SELECT,
        });

        return NextResponse.json(queryResult[0]?.createdAt || "");
    } catch (err) {
        return ErrorHelper.createResponse(err);
    }
};
