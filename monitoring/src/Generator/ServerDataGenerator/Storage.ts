import PercentageGenerator from "../BaseGenerator/PercentageGenerator";

const INCREMENT = 0.001;

class Storage extends PercentageGenerator {
    constructor() {
        const min = Math.random() * 0.45 + 0.005;
        const max = Math.random() * 0.1 + 0.05 + min;

        super(min, max, INCREMENT);
    }
}

export default Storage;
