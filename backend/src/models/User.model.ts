import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import {connection} from "./connection";

const config = {
    tableName: 'User',
    sequelize: connection,
  };

export interface User {
    userId?: number;
    name: string;
    email: string;
    password: string;
    card: number;
}
class UserDAO extends Model<InferAttributes<UserDAO>, InferCreationAttributes<UserDAO>> {
    public userId?: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public card!: number;
}

UserDAO.init(
    {
            userId: {
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
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            card: {
                type: DataTypes.BIGINT,
                allowNull: false
            }
    },
    config
)

export default UserDAO;