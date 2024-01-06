import Status from "@shared/Type/Status";

type Props = {
    status: Status;
    message: string | number;
    inactive?: boolean;
};

const STYLES = {
    pingAnimation: (color: string) =>
        `before:absolute before:w-full before:h-full before:-z-10 before:rounded-full before:${color} before:animate-customPing`,
    container:
        "rounded-full w-28 h-28 sm:w-36 sm:h-36 flex justify-center items-center relative text-center text-primaryDark m-8 sm:m-11 text-2xl sm:text-3xl font-bold z-10",
    statusDictionary: {
        [Status.ok]: "bg-ok", // before:bg-ok
        [Status.warning]: "bg-warning", // before:bg-warning
        [Status.error]: "bg-error", // before:bg-error
        [Status.notResponding]: "bg-error",
    },
};

const StatusIndicator = (props: Props) => {
    const { status, message, inactive = false } = props;

    const background = inactive
        ? "bg-primaryLight"
        : `${STYLES.statusDictionary[status]}`;

    return (
        <div
            className={`${background} ${STYLES.container} ${
                !inactive && STYLES.pingAnimation(background)
            }`}
        >
            {message}
        </div>
    );
};

export default StatusIndicator;
