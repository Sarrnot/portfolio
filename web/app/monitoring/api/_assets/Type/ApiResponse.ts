import { NextRequest, NextResponse } from "next/server";
import { ErrorResponse } from "../Helper/ErrorHelper";

type Params = Record<string, string>;

type ApiResponse<T, U extends Params | undefined = undefined> = (
    request: NextRequest,
    context: {
        params: U;
    }
) => Promise<NextResponse<T> | ErrorResponse>;

export default ApiResponse;
