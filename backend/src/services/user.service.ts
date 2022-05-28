import UserDAO, { User } from "../models/User.model"
import { cipher } from "../utils/aes256"

const findAll = () => {
    return UserDAO.findAll()
}

const create = (newUser: UserDAO) => {
    console.log(cipher.decrypt(cipher.encrypt(newUser.card.toString())))
    return UserDAO.create({
        ...newUser,
        password: cipher.encrypt(newUser.password),
        card: cipher.encrypt(newUser.card.toString())
    })
}

const findByEmail = (email: string) => {
    return UserDAO.findOne({
        where: {
            email
        }
    })
}

const findById = (id: number) => {
    return UserDAO.findByPk(id);
}

export { findAll, create, findByEmail, findById }