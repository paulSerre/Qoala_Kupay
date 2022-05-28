
import { Express } from 'express';
import { buy, getTransactionsForUser } from '../controllers/transaction.controller';

export default (app: Express) => {

    app.get("/transactions", getTransactionsForUser);

    app.post("/transactions/:id", buy)
}