const { serverError } = require('../../common/helpers/responseHelpers')
const ProductModel = require('../../common/models/product')

class ProductService {
    async getProductList() {
        try {
            const productList = await ProductModel.find()
            return {
                success: true,
                code: 200,
                elements: productList
            }
        } catch (e) {
            console.log(e)
            return serverError('get')
        }
    }

    async getProductItem(id) {
        try {
            const productItem = await ProductModel.findById(id)
            return {
                success: true,
                code: 200,
                elements: [productItem]
            }
        } catch (e) {
            console.log(e)
            return serverError('get')
        }
    }
}

module.exports = new ProductService()