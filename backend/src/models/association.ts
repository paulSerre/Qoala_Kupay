import TransactionDAO from "./Transaction.model";
import { connection } from "./connection";
import ProductDAO from "./Product.model";
import UserDAO from "./User.model";
import { cipher } from "../utils/aes256";

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

const sequelize = connection.sync({force: true}).then(async () => {

    const newUser = await UserDAO.create({
        name: "Paul Serre",
        email: "paul27000@gmail.com",
        card: 4444444444444444,
        password: cipher.encrypt("test123")
    })

    const newProducts = await ProductDAO.bulkCreate([
        {
            name: "Dress",
            price: 50
        },
        {
            name: "iPhone",
            price: 1000
        }
    ])

    TransactionDAO.create({
        date: new Date(),
        productId: newProducts[0].getDataValue("productId"),
        userId: newUser.getDataValue("userId")
    })

    TransactionDAO.create({
        date: new Date(),
        productId: newProducts[1].getDataValue("productId"),
        userId: newUser.getDataValue("userId")
    })
})

export { sequelize }