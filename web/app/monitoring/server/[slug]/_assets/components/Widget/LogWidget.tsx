"use client";

import { AvailableValues } from "@/monitoring/_assets/types/Log";
import WidgetConfig from "./WidgetConfig";
import { useLog } from "@/monitoring/_assets/hooks/useLogs";
import GaugeChart from "../Chart/GaugeChart";
import SingleValue from "../Chart/SingleValue";
import LineChartWidget from "../Chart/LineChart";
import LoadingSpinner from "./LoadingSpinner";

type Props<T extends AvailableValues> = {
    slug: string;
    config: WidgetConfig<T>;
};
const LogWidget = <T extends AvailableValues>(props: Props<T>) => {
    const { slug, config } = props;
    const { limit, after, before, chart } = config.settings;

    const { data, isLoading, error } = useLog(
        slug,
        config.type,
        limit,
        after,
        before
    ); // TODO: !!! optimize data fetching (cache already known data)

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error || !data) {
        return <>Error</>;
    }

    // TODO: try to use ChartDictionary
    if (chart === "line") {
        return (
            <LineChartWidget
                data={data}
                type={config.type}
                name={config.name}
            />
        );
    }

    const lastEntry = data[0][config.type];

    if (chart === "gauge") {
        return <GaugeChart data={lastEntry} />;
    }

    return <SingleValue data={String(lastEntry)} />;
};

export default LogWidget;
