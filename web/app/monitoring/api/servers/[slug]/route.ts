import "../../_assets/Helper/SequelizeInitializer";
import Server from "@shared/Entity/Server";
import { NextResponse } from "next/server";
import ErrorHelper from "../../_assets/Helper/ErrorHelper";
import ServersApi from "./_interface";
import ApiResponse from "../../_assets/Type/ApiResponse";
import NotFoundException from "../../_assets/Exception/NotFoundException";

type Params = {
    slug: string;
};

export const GET: ApiResponse<ServersApi.Get.Response, Params> = async (
    _,
    { params }
) => {
    try {
        const server = await Server.findOne({
            attributes: ["name", "slug", "ip"],
            where: {
                slug: params.slug,
            },
        });

        if (!server) {
            throw new NotFoundException();
        }

        return NextResponse.json(server);
    } catch (err) {
        return ErrorHelper.createResponse(err);
    }
};
