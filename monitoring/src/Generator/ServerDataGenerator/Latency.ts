import Status from "../../Type/Status";

const INCREMENT = 3;

class Latency {
    value: number | null;
    min: number;
    max: number;
    timer: Date | null;

    constructor() {
        this.min = Math.round(Math.random() * 40) + 20;
        this.max = Math.round(Math.random() * 20) + 10 + this.min;
        this.value = this.min;
        this.timer = null;
    }

    generate(status: Status) {
        if (status === Status.error) {
            if (this.timer) {
                const now = new Date();
                this.value = now.getTime() - this.timer.getTime();
                this.timer = null;
                return this.value;
            }

            return null;
        }

        if (status === Status.notResponding) {
            if (!this.timer) {
                this.timer = new Date();
                return this.value;
            }

            const now = new Date();
            this.value = now.getTime() - this.timer.getTime();
            return this.value;
        }

        const newValue =
            (this.value ?? this.min) +
            Math.round(Math.random() * INCREMENT * 2) -
            INCREMENT;

        if (newValue > this.max) {
            this.value = this.max;
        } else if (newValue < this.min) {
            this.value = this.min;
        } else {
            this.value = newValue;
        }

        return this.value;
    }
}

export default Latency;
