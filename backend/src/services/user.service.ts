import UserDAO, { User } from "../models/User.model"
import { cipher } from "../utils/aes256"
import { findProductById } from "./product.service"

const findAll = () => {
    return UserDAO.findAll()
}

const create = (newUser: UserDAO) => {
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

const buyProduct = async (productId: number) => {
    const product = await findProductById(productId);
    if (!product) return null;
    
}

export { findAll, create, findByEmail, findById }