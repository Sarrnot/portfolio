import Status from "@local/shared/Type/Status";
import PercentageGenerator from "./PercentageGenerator";

class CriticalPercentageGenerator extends PercentageGenerator {
    private _isCritical: boolean;

    constructor(
        min: number,
        max: number,
        increment: number,
        private criticalMin: number,
        private criticalMax: number,
        private chanceToGoCritical: number,
        private chanceToRecover: number
    ) {
        super(min, max, increment);
        this._isCritical = false;
    }

    override generate(status: Status) {
        if (status === Status.error || status === Status.notResponding) {
            return null;
        }

        if (!this._isCritical && Math.random() <= this.chanceToGoCritical) {
            this._isCritical = true;
            this.usage =
                Math.random() * (this.criticalMax - this.criticalMin) +
                this.criticalMin;
            return this.usage;
        } else if (this._isCritical && Math.random() <= this.chanceToRecover) {
            this._isCritical = false;
            this.usage = Math.random() * (this.max - this.min) + this.min;
            return this.usage;
        }

        const currentMin = !this._isCritical ? this.min : this.criticalMin;
        const currentMax = !this._isCritical ? this.max : this.criticalMax;

        const newValue =
            (this.usage ?? this.min) +
            Math.random() * this.increment * 2 -
            this.increment;

        if (newValue > currentMax) {
            this.usage = currentMax;
        } else if (newValue < currentMin) {
            this.usage = currentMin;
        } else {
            this.usage = newValue;
        }

        return this.usage;
    }

    public get isCritical() {
        return this._isCritical;
    }
}

export default CriticalPercentageGenerator;
