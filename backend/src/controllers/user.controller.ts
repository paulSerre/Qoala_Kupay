import {findAll, create} from "../services/user.service"
import { Request, Response } from "express";

const readAll = (req: Request, res: Response) => {
    findAll().then(
        (users: any) => res.status(200).send(users),
        (err: any) => res.status(400).send({
            message: err
        })
    )
};

const createUser = (req: Request, res: Response) => {
    create(req.body).then(
        (user: any) => res.status(200).send(user),
        (err: any) => res.status(400).send({
            message: err
        })
    )
}

export { readAll, createUser };