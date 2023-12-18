import Status from "../Type/Status";
import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import InferSchema from "../Type/InferSchema";
import Server from "./Server";

const definition: InferSchema<LogServerStatus> = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    server_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: Server,
            key: "id",
        },
        allowNull: false,
    },
    status: {
        type: DataTypes.INTEGER({ length: 1 }).UNSIGNED,
        allowNull: false,
    },
    traffic: DataTypes.DECIMAL(5, 1).UNSIGNED,
    latency: DataTypes.INTEGER({ length: 6 }),
    cpu: DataTypes.DECIMAL(4, 3).UNSIGNED,
    storage: DataTypes.DECIMAL(4, 3).UNSIGNED,
    memory: DataTypes.DECIMAL(4, 3).UNSIGNED,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
};

class LogServerStatus extends Model<
    InferAttributes<LogServerStatus>,
    InferCreationAttributes<LogServerStatus>
> {
    declare id: CreationOptional<number>;
    declare server_id: number;
    declare status: Status;
    declare traffic: number | null;
    declare latency: number | null;
    declare cpu: number | null;
    declare storage: number | null;
    declare memory: number | null;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    static definition = definition;
}

export default LogServerStatus;
