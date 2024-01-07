import { AvailableValues } from "@/monitoring/_assets/types/Log";
import WidgetConfig from "../components/Widget/WidgetConfig";

const configs = (slug: string): WidgetConfig<AvailableValues | "upFrom">[] => [
    {
        name: "CPU",
        type: "cpu",
        slug,
        settings: {
            size: 1,
            aggregation: "none",
            chart: "gauge",
            limit: 1,
        },
    },
    {
        name: "Memory",
        type: "memory",
        slug,
        settings: {
            size: 1,
            aggregation: "none",
            chart: "gauge",
            limit: 1,
        },
    },
    {
        name: "Storage",
        type: "storage",
        slug,
        settings: {
            size: 1,
            aggregation: "none",
            chart: "gauge",
            limit: 1,
        },
    },
    {
        name: "Uptime",
        type: "upFrom",
        slug,
        settings: {
            size: 1,
            aggregation: "none",
            chart: "single value",
            limit: 1,
        },
    },
    {
        name: "Latency",
        type: "latency",
        slug,
        settings: {
            size: 2,
            aggregation: "none",
            chart: "line",
            limit: 100,
        },
    },
    {
        name: "Traffic",
        type: "traffic",
        slug,
        settings: {
            size: 3,
            aggregation: "none",
            chart: "line",
            limit: 100,
        },
    },
];

export default configs;
