import LogsApi from "@/monitoring/api/logs/[slug]/[dataType]/_interface";
import Log, { AvailableValues } from "../types/Log";

const LogsParser = <T extends AvailableValues>(
    rawLogs: LogsApi.Get.Response<T>,
    dataType: T
): Log<T>[] => {
    return rawLogs.map(
        (rawLog) =>
            ({
                [dataType]: Number(rawLog[dataType]),
                createdAt: new Date(rawLog.createdAt),
            } as Log<T>) // TODO: remove type assertion
    );
};

export default LogsParser;
