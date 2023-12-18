import { Sequelize } from "sequelize";
import LogServerStatus from "../Entity/LogServerStatus";
import Server from "../Entity/Server";

class MonitoringDatabase {
    constructor(private sequelize: Sequelize) {
        Server.init(Server.definition, { sequelize });
        LogServerStatus.init(LogServerStatus.definition, { sequelize });
    }

    async sync() {
        return this.sequelize.sync();
    }
}

export default MonitoringDatabase;
