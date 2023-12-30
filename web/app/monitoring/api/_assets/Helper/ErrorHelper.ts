import { ZodError } from "zod";
import AbstractHttpException from "../Exception/AbstractHttpException";
import { NextResponse } from "next/server";

class ErrorHelper {
    public static createResponse(error: unknown): NextResponse<string> {
        if (error instanceof ZodError) {
            return new NextResponse("400: Bad Request. Invalid data format.", {
                status: 400,
            });
        }
        if (error instanceof AbstractHttpException) {
            return new NextResponse(error.message, { status: error.status });
        }

        return new NextResponse("500: Internal Server Error", { status: 500 });
    }
}

export type ErrorResponse = ReturnType<(typeof ErrorHelper)["createResponse"]>;

export default ErrorHelper;
