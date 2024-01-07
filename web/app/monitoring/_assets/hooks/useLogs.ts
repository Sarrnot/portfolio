import useSWR, { SWRResponse } from "swr";
import Log, { AvailableValues } from "../types/Log";
import LogsApi from "@/monitoring/api/logs/[slug]/[dataType]/_interface";
import LogsParser from "../helper/LogsParser";

const INTERVAL = 3_000;

// TODO: try to use function overloading (useSWR complicates it)

export const useLog = <T extends AvailableValues>(
    slug: string,
    dataType: T,
    limit?: number,
    after?: Date,
    before?: Date
): SWRResponse<Log<T>[], any, any> => {
    const queryParams = new URLSearchParams();

    before && queryParams.set("before", before.toISOString());
    after && queryParams.set("after", after.toISOString());
    limit && queryParams.set("limit", String(limit));

    const url = `/monitoring/api/logs/${slug}/${dataType}?${queryParams.toString()}`;

    return useSWR(
        url,
        (url) =>
            fetch(url, { next: { revalidate: INTERVAL } })
                .then((response) => response.json())
                .then((data: LogsApi.Get.Response<T>) =>
                    LogsParser(data, dataType)
                ),
        { refreshInterval: INTERVAL, refreshWhenOffline: true }
    );
};

export const useLogs = <T extends AvailableValues>(
    slugs: string[] | undefined,
    dataType: T,
    limit?: number
): SWRResponse<Log<T>[][] | undefined, any, any> => {
    const limitParam = limit ? `limit=${limit}` : "";

    const urls = slugs?.map(
        (slug) => `/monitoring/api/logs/${slug}/${dataType}?${limitParam}`
    );

    return useSWR(
        urls,
        (url) => {
            const f = (url: string) =>
                fetch(url, { next: { revalidate: INTERVAL } })
                    .then((response) => response.json())
                    .then((data: LogsApi.Get.Response<T>) =>
                        LogsParser(data, dataType)
                    );

            return urls && Promise.all(urls.map((url) => f(url)));
        },
        { refreshInterval: INTERVAL, refreshWhenOffline: true }
    );
};

export default useLogs;
