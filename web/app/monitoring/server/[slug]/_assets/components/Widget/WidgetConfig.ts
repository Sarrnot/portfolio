import { AvailableValues } from "@/monitoring/_assets/types/Log";

export type DataType = AvailableValues | "upFrom";

type ChartDictionary = {
    status: "line" | "single value";
    traffic: "line" | "single value";
    latency: "line" | "single value";
    cpu: "line" | "single value" | "gauge";
    storage: "line" | "single value" | "gauge";
    memory: "line" | "single value" | "gauge";
    upFrom: "single value";
};

type WidgetConfig<T extends DataType> = {
    name: string;
    type: T;
    slug: string;
    settings: {
        aggregation: "none";
        chart: ChartDictionary[T];
        size: 1 | 2 | 3;
        limit?: number;
        before?: Date;
        after?: Date;
    };
};

export default WidgetConfig;
