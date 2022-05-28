
import { Express } from 'express';
import { buy, getTransactionsForUser } from '../controllers/transaction.controller';

export default (app: Express) => {

    app.post("/transactions/:productId", buy)

    app.get("/transactions", getTransactionsForUser);
}