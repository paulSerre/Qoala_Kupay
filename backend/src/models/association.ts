import TransactionDAO from "./Transaction.model";
import { connection } from "./connection";
import ProductDAO from "./Product.model";
import UserDAO from "./User.model";

UserDAO.hasMany(
    TransactionDAO,
    {
        as: "transaction"
    }
);
TransactionDAO.belongsTo(UserDAO, { foreignKey: "userId", as: "user"});

ProductDAO.hasMany(
    TransactionDAO, { as: "transaction" }
);
TransactionDAO.belongsTo(ProductDAO, { foreignKey: "productId", as: "product"});

const sequelize = connection.sync({force: true})

export { sequelize }