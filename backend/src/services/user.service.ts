import UserDAO, { User } from "../models/User.model"

const findAll = () => {
    return UserDAO.findAll()
}

const create = (newUser: User) => {
    return UserDAO.create(newUser)
}

export { findAll, create }