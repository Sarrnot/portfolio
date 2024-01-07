"use client";

import useUpFrom from "@/monitoring/_assets/hooks/useUpFrom";
import WidgetConfig from "./WidgetConfig";
import { useEffect, useState } from "react";
import ChartDictionary from "../../helper/ChartDictionary";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
    slug: string;
    config: WidgetConfig<"upFrom">;
};

const UpFromWidget = (props: Props) => {
    const { slug, config } = props;

    const [uptime, setUptime] = useState(0);
    const { data, isLoading, error } = useUpFrom(slug);

    useEffect(() => {
        if (!data) {
            return setUptime(0);
        }

        const calcUptime = (upFrom: Date) =>
            new Date().getTime() - upFrom.getTime();

        setUptime(calcUptime(data));

        const interval = setInterval(() => {
            setUptime(calcUptime(data));
        }, 1_000);

        return () => {
            clearInterval(interval);
        };
    }, [data]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <>Error</>;
    }

    const Chart = ChartDictionary[config.settings.chart];

    return <Chart data={parseTime(uptime)} />;
};

const parseTime = (time: number) => {
    if (time === 0) {
        return "0s";
    }

    const timeStrings: string[] = [];
    let remainingTime = time;
    const types = [
        { symbol: "y", milliseonds: 31_536_000_000 },
        { symbol: "d", milliseonds: 86_400_000 },
        { symbol: "h", milliseonds: 3_600_000 },
        { symbol: "m", milliseonds: 60_000 },
        { symbol: "s", milliseonds: 1000 },
    ];

    types.forEach((type) => {
        if (remainingTime < type.milliseonds) {
            return;
        }

        const typeNum = Math.floor(remainingTime / type.milliseonds);

        timeStrings.push(`${typeNum}${type.symbol}`);
        remainingTime -= typeNum * type.milliseonds;
    });

    return timeStrings.join(" ");
};

export default UpFromWidget;
