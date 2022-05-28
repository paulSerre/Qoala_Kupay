import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import {connection} from "./connection";

const config = {
    tableName: 'Product',
    sequelize: connection,
  };

export interface Product {
    productId?: number;
    name: string;
    price: number;
}

class ProductDAO extends Model<InferAttributes<ProductDAO>, InferCreationAttributes<ProductDAO>> {
    public productId!: number;
    public name!: string;
    public price!: number;
}

ProductDAO.init(
    {
        productId: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true
        },
    },
    config
)


export default ProductDAO;