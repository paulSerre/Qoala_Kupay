import { Request, Response } from "express";
import { create } from "../services/user.service";

const signin = (req: Request, res: Response) => {
    res.status(200).send();
}

const signup = async (req: Request, res: Response) => {
    if (req.body) {
        const newUser = await create(req.body)
        if (newUser) res.status(200).send();
    }
    res.status(400).send()
}

const loginstate = (req: Request, res: Response) => {
    if (req.user) {
        res.send(req.user)
    } else {
        res.status(401).send({message: "User not logged"});
    }
}

export { signin, signup, loginstate }