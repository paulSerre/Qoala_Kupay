import ProductDAO from "../models/Product.model"
import TransactionDAO from "../models/Transaction.model"
import UserDAO from "../models/User.model"

const findTransactionsByUserId = (id: number) => {
    return TransactionDAO.findAll({
        where: {
            userId: id
        }
    })
}

const buyProduct = (userId: number, productId: number) => {
    return TransactionDAO.create({
        date: new Date(),
        productId,
        userId
    }, {
        include: [ProductDAO, UserDAO]
    })
}

export { findTransactionsByUserId, buyProduct }