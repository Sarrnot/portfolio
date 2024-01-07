import { CSSProperties } from "react";

type Props = {
    data: number | null;
};

const GaugeChart = (props: Props) => {
    const { data } = props;

    const formattedData = data !== null ? `${(data * 100).toFixed(1)}%` : "?";

    return (
        <div className="relative w-[90%] h-[90%] flex justify-center items-end">
            <div className="absolute w-full h-full top-[30%]">
                <Semicircle className="border-4 rotate-[-45deg] border-ok" />
                <Semicircle className="border-4 rotate-[81deg] border-warning" />
                <Semicircle className="border-4 rotate-[117deg] border-error" />
            </div>
            <div className="absolute w-[87.5%] h-[87.5%] top-[36%]">
                {data !== null ? (
                    <Semicircle
                        className={`border-[3rem] ${displayType(
                            data
                        )} transition-transform duration-1000`}
                        style={{
                            transform: `rotate(${-180 * (1 - data) - 45}deg)`,
                        }}
                    />
                ) : (
                    ""
                )}
            </div>
            <div className="text-3xl relative bottom-[12%]">
                {formattedData}
            </div>
        </div>
    );
};

type SemicircleProps = { className?: string; style?: CSSProperties };

const Semicircle = (props: SemicircleProps) => {
    const { className, style } = props;

    return (
        <div className="absolute w-full h-[50%] top-0 overflow-hidden">
            <div
                className={`w-full aspect-square top-0 rounded-full border-l-transparent border-b-transparent ${className}`}
                style={style}
            ></div>
        </div>
    );
};

const displayType = (value: number) => {
    if (value >= 0.9) {
        return "border-error";
    } else if (value >= 0.7) {
        return "border-warning";
    } else {
        return "border-ok";
    }
};

export default GaugeChart;
