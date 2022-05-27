const { DataTypes } = require("sequelize");
import { Model } from "sequelize/types";
import {connection} from "./connection";

export interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
}

const UserDAO = connection.define<Model<User>, any>("User", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default UserDAO;