import LogServerStatus from "@local/shared/Entity/LogServerStatus";

import ServerGenerator from "./ServerGenerator";
import LogServerStatusGenerator from "../Generator/LogServerStatusGenerator";
import Server from "@local/shared/Entity/Server";
import { Op } from "sequelize";

const SERVER_COUNT = 16;

class GeneratorManager {
    private serverStatusGenerators: LogServerStatusGenerator[];
    private isRunning: boolean;

    constructor() {
        this.serverStatusGenerators = [];
        this.isRunning = false;
    }

    public async start() {
        if (this.isRunning) {
            return;
        }

        this.isRunning = true;
        let servers = await Server.findAll();

        if (servers.length === 0) {
            const generatedServers = [];

            for (let i = 1; i <= SERVER_COUNT; i++) {
                const server = ServerGenerator.generate();
                generatedServers.push(server);
            }

            servers = await Server.bulkCreate(generatedServers);
        }

        this.serverStatusGenerators = servers.map(
            (server) => new LogServerStatusGenerator(server.id)
        );

        setInterval(() => {
            this.generate();
        }, 3000);

        // TODO: Temporary hotfix
        setInterval(() => {
            this.removeOlderThanHour();
        }, 60_000);
    }

    private generate() {
        const newEntities = this.serverStatusGenerators.map((serverGenerator) =>
            serverGenerator.generate()
        );

        LogServerStatus.bulkCreate(newEntities);
    }

    // TODO: Temporary hotfix
    private removeOlderThanHour() {
        LogServerStatus.destroy({
            where: {
                createdAt: {
                    [Op.lt]: new Date(new Date().valueOf() - 60 * 60 * 1000),
                },
            },
        });
    }
}

export default GeneratorManager;
