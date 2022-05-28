import TransactionDAO from "../models/Transaction.model"

const findTransactionsByUserId = (id: number) => {
    return TransactionDAO.findAll({
        where: {
            userId: id
        }
    })
}

export { findTransactionsByUserId }