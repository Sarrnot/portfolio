import Status from "../../Type/Status";

class PercentageGenerator {
    usage: number | null;

    constructor(
        protected min: number,
        protected max: number,
        protected increment: number
    ) {
        this.usage = this.min;
    }

    generate(status: Status) {
        if (status === Status.error || status === Status.notResponding) {
            return null;
        }

        const newValue =
            (this.usage ?? this.min) +
            Math.random() * this.increment * 2 -
            this.increment;

        if (newValue > this.max) {
            this.usage = this.max;
        } else if (newValue < this.min) {
            this.usage = this.min;
        } else {
            this.usage = newValue;
        }

        return this.usage;
    }
}

export default PercentageGenerator;
