
import { Express } from 'express';
import { getTransactionsForUser } from '../controllers/transaction.controller';

export default (app: Express) => {

    app.get("/transactions", getTransactionsForUser);
}