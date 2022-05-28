import { findAll } from "../services/product.service";
import { Request, Response } from "express";

const readAll = (req: Request, res: Response) => {
    findAll().then(
        (products: any) => res.status(200).send(products),
        (err: any) => res.status(400).send({
            message: err
        })
    )
};

export { readAll}