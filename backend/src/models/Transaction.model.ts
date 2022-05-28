import { DataTypes, ForeignKey, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, InferAttributes, InferCreationAttributes, Model, NonAttribute } from 'sequelize';
import {connection} from "./connection";
import ProductDAO from './Product.model';

const config = {
    tableName: 'Transaction',
    sequelize: connection,
  };

class TransactionDAO extends Model<InferAttributes<TransactionDAO>, InferCreationAttributes<TransactionDAO>> {
    declare transactionId?: number;
    declare date: Date
    declare userId?: ForeignKey<number>
    declare productId?: ForeignKey<number>
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
        },
    },
    config
)

export default TransactionDAO;