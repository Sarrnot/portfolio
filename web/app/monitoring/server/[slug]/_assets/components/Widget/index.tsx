import LogWidget from "./LogWidget";
import UpFromWidget from "./UpFromWidget";
import WidgetConfig, { DataType } from "./WidgetConfig";

type Props<T extends DataType> = {
    slug: string;
    config: WidgetConfig<T>;
};

const WIDGET_DICTIONARY = {
    status: LogWidget,
    cpu: LogWidget,
    memory: LogWidget,
    storage: LogWidget,
    latency: LogWidget,
    traffic: LogWidget,
    upFrom: UpFromWidget,
};

const SIZE_DICTIONARY = {
    1: "col-span-1",
    2: "col-span-1 sm:col-span-2",
    3: "col-span-1 sm:col-span-2 lg:col-span-3",
};

const ASPECT_RATIO_DICTIONARY = {
    1: "aspect-square",
    2: "aspect-square sm:aspect-[2/1]",
    3: "aspect-square sm:aspect-[2/1] lg:aspect-[3/1]",
};

const Widget = (props: Props<DataType>) => {
    const { slug, config } = props;

    const WidgetType = WIDGET_DICTIONARY[config.type];

    return (
        <div
            className={`bg-surface flex flex-col p-2 gap-2 overflow-hidden ${
                SIZE_DICTIONARY[config.settings.size]
            }`}
        >
            <div className="text-2xl sm:text-lg text-center">{config.name}</div>
            <div
                className={`min-h-0 flex justify-center items-center ${
                    ASPECT_RATIO_DICTIONARY[config.settings.size]
                }`}
            >
                {/* TODO: !!! find a way to narrow type => remove ts-ignore !!! */}
                {/* @ts-ignore */}
                <WidgetType slug={slug} config={config} />
            </div>
        </div>
    );
};

export default Widget;
