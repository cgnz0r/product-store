const { serverError } = require('../../common/helpers/responseHelpers')
const ProductModel = require('../../common/models/product')

class ProductService {
    async createProduct(body) {
        try {
            const { name } = body
            const existingProduct = await ProductModel.findOne({name: new RegExp('^'+name+'$', "i")})
            if (existingProduct) {
                return {
                    success: false,
                    code: 409,
                    message: `Product with name '${name}' is already exists.`
                }
            }
            const product = new ProductModel(body)
            await product.save()
            return {
                success: true,
                code: 201,
                message: `Product with name '${name}' has been successfully created.`
            }
        } catch (e) {
            console.log(e)
            return serverError('create')
        }
    }

    async updateProduct(id, body) {
        try {
            const { name } = body
            const product = await ProductModel.findByIdAndUpdate(id, body)
            if (!product) {
                return {
                    success: false,
                    code: 404,
                    message: 'Unable to find the product.'
                }
            }
            return {
                success: true,
                code: 200,
                message: `Product with name '${name}' has been successfully updated.`
            }
        } catch (e) {
            console.log(e)
            return serverError('update')
        }
    }

    async deleteProduct(id) {
        try {
            const product = await ProductModel.findByIdAndDelete(id)
            if (!product) {
                return {
                    success: false,
                    code: 404,
                    message: 'Unable to find the product.'
                }
            }
            return {
                success: true,
                code: 200,
                message: `Product with id '${id}' has been successfully deleted.`
            }
        } catch (e) {
            console.log(e)
            return serverError('delete')
        }
    }
}

module.exports = new ProductService()