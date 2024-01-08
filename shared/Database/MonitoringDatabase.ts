import { Sequelize } from "sequelize";
import LogServerStatus from "../Entity/LogServerStatus";
import Server from "../Entity/Server";

class MonitoringDatabase {
    constructor(private sequelize: Sequelize) {
        Server.init(Server.definition, {
            sequelize,
            tableName: "Servers",
        });
        LogServerStatus.init(LogServerStatus.definition, {
            sequelize,
            tableName: "LogServerStatuses",
        });
    }

    async sync() {
        return this.sequelize.sync();
    }
}

export default MonitoringDatabase;
