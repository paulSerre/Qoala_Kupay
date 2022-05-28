import ProductDAO from "../models/Product.model"

const findAll = () => {
    return ProductDAO.findAll()
}

const findProductById = (productId: number) => {
    return ProductDAO.findByPk(productId)
}

export { findAll, findProductById }