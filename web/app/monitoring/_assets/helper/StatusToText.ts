import Status from "@shared/Type/Status";

const StatusToText = (status: Status) => {
    switch (status) {
        case Status.ok:
            return "OK";
        case Status.error:
            return "Error";
        case Status.notResponding:
            return "Not responding";
        case Status.warning:
            return "Warning";
    }
};

export default StatusToText;
