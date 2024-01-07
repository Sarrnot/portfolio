import GaugeChart from "../components/Chart/GaugeChart";
import LineChartWidget from "../components/Chart/LineChart";
import SingleValue from "../components/Chart/SingleValue";

const ChartDictionary = {
    line: LineChartWidget,
    "single value": SingleValue,
    gauge: GaugeChart,
};

export default ChartDictionary;
