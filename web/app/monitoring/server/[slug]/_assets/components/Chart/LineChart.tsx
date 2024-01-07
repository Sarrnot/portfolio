import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    ResponsiveContainer,
} from "recharts";

import Log, { AvailableValues } from "@/monitoring/_assets/types/Log";

type Props<T extends AvailableValues> = {
    data: Log<T>[];
    type: T;
    name: string;
};

const LineChartWidget = <T extends AvailableValues>(props: Props<T>) => {
    const { data, type, name } = props;

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="createdAt"
                    reversed={true}
                    tickFormatter={timeToString}
                />
                <YAxis />
                <Tooltip />
                <Line
                    dataKey={type}
                    name={name}
                    stroke="#8884d8"
                    isAnimationActive={false}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

const timeToString = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
        minute: "2-digit",
        hour: "2-digit",
        hour12: false,
    });
};

export default LineChartWidget;
