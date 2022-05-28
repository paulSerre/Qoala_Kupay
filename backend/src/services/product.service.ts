import ProductDAO from "../models/Product.model"

const findAll = () => {
    return ProductDAO.findAll()
}

export { findAll }