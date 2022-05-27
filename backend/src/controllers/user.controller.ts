import UserDAO from "../models/User.model";
import { Request, Response } from "express";

const findAll = (_req: Request, res: Response) => {
    UserDAO.findAll()
    .then(
        (users: any) => res.status(200).send(users),
        (err: any) => res.status(400).send({
            message: err
        })
    )
};

const create = (req: Request, res: Response) => {
    console.log(req.body)
    UserDAO.create(req.body)
    .then(
        (user: any) => res.status(200).send(user),
        (err: any) => res.status(400).send({
            message: err
        })
    )
}

export { findAll, create };