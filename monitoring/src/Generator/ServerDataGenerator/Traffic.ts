import Status from "../../Type/Status";

const INCREMENT = 10;

class Traffic {
    value: number | null;
    min: number;
    max: number;

    constructor() {
        this.min = Math.round(Math.random() * 200) / 10 + 0.5;
        this.max = Math.round(Math.random() * 4000) / 10 + 20 + this.min;
        this.value = this.min;
    }

    generate(status: Status) {
        if (status === Status.error || status === Status.notResponding) {
            this.value = this.min;
            return null;
        }

        const newValue =
            (this.value ?? this.min) +
            Math.round(Math.random() * INCREMENT * 10 * 2) / 10 -
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

export default Traffic;
