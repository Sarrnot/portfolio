import CriticalPercentageGenerator from "../BaseGenerator/CriticalPercentageGenerator";

const CHANCE_TO_GO_CRITICAL = 1 / 96;
const CHANCE_TO_RECOVER = 1 / 8;
const INCREMENT = 0.003;

class Cpu extends CriticalPercentageGenerator {
    constructor() {
        const min = Math.random() * 0.2 + 0.005;
        const max = Math.random() * 0.3 + 0.1 + min;
        const criticalMin = Math.random() * 0.2 + 0.75;
        const criticalMax =
            criticalMin + 0.15 > 1
                ? 1
                : Math.random() * 0.1 + 0.05 + criticalMin;

        super(
            min,
            max,
            INCREMENT,
            criticalMin,
            criticalMax,
            CHANCE_TO_GO_CRITICAL,
            CHANCE_TO_RECOVER
        );
    }
}

export default Cpu;
