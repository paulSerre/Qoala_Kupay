import UserDAO, { User } from "../models/User.model"

const findAll = () => {
    return UserDAO.findAll()
}

const create = (newUser: User) => {
    return UserDAO.create(newUser)
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