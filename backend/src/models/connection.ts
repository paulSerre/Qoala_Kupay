import { dbConfig } from "../config/db.config";
import { Sequelize } from "sequelize";

const connection: Sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: "mysql"
});

export { connection };