import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import {connection} from "./connection";

const config = {
    tableName: 'Transaction',
    sequelize: connection,
  };

export interface Transaction {
    transactionId?: number;
    date: Date;
}
class TransactionDAO extends Model<InferAttributes<TransactionDAO>, InferCreationAttributes<TransactionDAO>> {
    public transactionId!: number;
    public date!: Date
    public userId!: ForeignKey<number>
}

TransactionDAO.init(
    {
        transactionId: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            unique: true
        },
    },
    config
)

export default TransactionDAO;