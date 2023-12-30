import "../_assets/Helper/SequelizeInitializer";
import Server from "@shared/Entity/Server";
import { NextResponse } from "next/server";
import ErrorHelper from "../_assets/Helper/ErrorHelper";
import ServersApi from "./_interface";
import ApiResponse from "../_assets/Type/ApiResponse";

export const GET: ApiResponse<ServersApi.Get.Response> = async () => {
    try {
        const servers = await Server.findAll({
            attributes: ["name", "slug", "ip"],
        });

        return NextResponse.json(servers);
    } catch (err) {
        return ErrorHelper.createResponse(err);
    }
};
