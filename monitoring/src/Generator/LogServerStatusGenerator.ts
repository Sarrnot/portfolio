import { CreationAttributes } from "sequelize";
import LogServerStatus from "@local/shared/Entity/LogServerStatus";
import Status from "@local/shared/Type/Status";

import Cpu from "./ServerDataGenerator/Cpu";
import Latency from "./ServerDataGenerator/Latency";
import Memory from "./ServerDataGenerator/Memory";
import Storage from "./ServerDataGenerator/Storage";
import Traffic from "./ServerDataGenerator/Traffic";

const TIMEOUT_THRESHOLD = 10_000;
const CHANCE_TO_BREAK = 1 / 96;
const CHANCE_TO_RECOVER = 1 / 16;

class LogServerStatusGenerator {
    private serverId: number;
    private status: Status;
    private traffic: Traffic;
    private latency: Latency;
    private cpu: Cpu;
    private storage: Storage;
    private memory: Memory;

    constructor(serverId: number) {
        this.serverId = serverId;
        this.status = Status.ok;
        this.traffic = new Traffic();
        this.latency = new Latency();
        this.cpu = new Cpu();
        this.storage = new Storage();
        this.memory = new Memory();
    }

    public generate(): CreationAttributes<LogServerStatus> {
        this.generateFailure();

        const cpu = this.cpu.generate(this.status);
        const memory = this.memory.generate(this.status);
        const storage = this.storage.generate(this.status);
        const latency = this.latency.generate(this.status);
        const traffic = this.traffic.generate(this.status);

        const isCritical = this.cpu.isCritical || this.memory.isCritical; // TODO: rethink and potentially refactor status assessement

        if (this.status === Status.ok && isCritical) {
            this.status = Status.warning;
        } else if (this.status === Status.warning && !isCritical) {
            this.status = Status.ok;
        }

        return {
            serverId: this.serverId,
            status: this.status,
            cpu,
            memory,
            storage,
            latency,
            traffic,
        };
    }

    private generateFailure() {
        if (
            (this.status === Status.ok || this.status === Status.warning) &&
            Math.random() <= CHANCE_TO_BREAK
        ) {
            this.status = Status.notResponding;
            setTimeout(() => {
                this.status = Status.error;
            }, TIMEOUT_THRESHOLD);
        } else if (
            this.status === Status.error &&
            Math.random() <= CHANCE_TO_RECOVER
        ) {
            this.status = Status.ok;
        }

        return this.status;
    }
}

export default LogServerStatusGenerator;
