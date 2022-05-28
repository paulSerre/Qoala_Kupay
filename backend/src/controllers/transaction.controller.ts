import { buyProduct, findTransactionsByUserId } from "../services/transaction.service";
import { Request, Response } from "express";

const getTransactionsForUser = (req: Request, res: Response) => {
    //Always false because of authMiddleware
    //@ts-ignore
    if (!req.user || req.user.userId) return res.status(401).send()
    //@ts-ignore
    findTransactionsByUserId(req.user.userId).then(
        (products: any) => res.status(200).send(products),
        (err: any) => res.status(400).send({
            message: err
        })
    )
};

const buy = async (req: Request, res: Response) => {
    //@ts-ignore
    const transaction = await buyProduct(req.user.id, req.params.productId);
    if (!transaction) return res.status(400).send({message: "Error when trying to buy product"})
    return res.status(200).send(transaction);
}

export { getTransactionsForUser, buy }