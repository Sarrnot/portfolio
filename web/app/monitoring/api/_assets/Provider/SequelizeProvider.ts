import { Sequelize } from "sequelize";
import env from "../constants/env";
import mariadb from "mariadb";

const monitoring = new Sequelize(
    "monitoring",
    env.MARIADB_USER,
    env.MARIADB_PASSWORD,
    {
        host: env.MARIADB_HOST,
        dialect: "mariadb",
        dialectModule: mariadb,
    }
);

export default { monitoring };
