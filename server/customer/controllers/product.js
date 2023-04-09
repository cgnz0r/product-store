const ProductService = require('../services/product')

class CustomerProductController {
    async getProductList(req, res) {
        try {
            const result = await ProductService.getProductList()
            return res.status(result.code).json(result.elements)
        } catch (e) {
            console.log(e)
        }
    }

    async getProductItem(req, res) {
        try {
            const result = await ProductService.getProductItem(req.params.id)
            return res.status(result.code).json(result.elements)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new CustomerProductController()