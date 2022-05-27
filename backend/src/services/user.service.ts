import UserDAO, { User } from "../models/User.model"

const findAll = () => {
    return UserDAO.findAll()
}

const create = (newUser: User) => {
    return UserDAO.create(newUser)
}

const findOne = (name: string) => {
    return UserDAO.findOne({
        where: {
            name
        }
    })
}

export { findAll, create, findOne }