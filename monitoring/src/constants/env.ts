import dotenv from "dotenv";

dotenv.config();

const { MARIADB_HOST, MARIADB_USER, MARIADB_PASSWORD, MARIADB_DATABASE } =
    process.env;

if (!MARIADB_HOST || !MARIADB_USER || !MARIADB_PASSWORD || !MARIADB_DATABASE) {
    throw new Error("Missing required environment variable(s).");
}

export default {
    MARIADB_HOST,
    MARIADB_USER,
    MARIADB_PASSWORD,
    MARIADB_DATABASE,
};
