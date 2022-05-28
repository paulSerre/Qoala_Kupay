
import { Express } from 'express';
import { readAll } from '../controllers/product.controller';

export default (app: Express) => {

    app.get("/product", readAll);

}