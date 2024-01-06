import { AvailableValues } from "@/monitoring/_assets/types/Log";

namespace LogsApi {
    export namespace Get {
        export type Response<T extends AvailableValues> = (Pick<
            {
                [key in T]: string;
            },
            T
        > & {
            createdAt: string;
        })[];
    }
}

export default LogsApi;
