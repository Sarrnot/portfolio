import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import InferSchema from "../Type/InferSchema";

const definition: InferSchema<Server> = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: false, unique: true },
    ip: { type: DataTypes.STRING(15), allowNull: false },
};

class Server extends Model<
    InferAttributes<Server>,
    InferCreationAttributes<Server>
> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare slug: string;
    declare ip: string;

    static definition = definition;
}

export default Server;
