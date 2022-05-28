import TransactionDAO from "../models/Transaction.model"

const findTransactionsByUserId = (id: number) => {
    return TransactionDAO.findAll({
        where: {
            userId: id
        },
        include: ["product"]
    })
}

const buyProduct = (userId: number, productId: number) => {
    return TransactionDAO.create({
        date: new Date(),
        productId,
        userId
    }, {
        include: ["product", "user"]
    })
}

export { findTransactionsByUserId, buyProduct }