const ProductService = require('../services/product')

class AdminProductController {
    async createProduct(req, res) {
        try {
            const { name, quantity, price, image } = req.body
            const result = await ProductService.createProduct({ name, quantity, price, image })
            return res.status(result.code).json({ message: result.message })
        } catch (e) {
            console.log(e)
        }
    }

    async updateProduct(req, res) {
        try {
            const id = req.params.id
            const { name, quantity, price, image } = req.body
            const result = await ProductService.updateProduct(id, { name, quantity, price, image })
            return res.status(result.code).json({ message: result.message })
        } catch (e) {
            console.log(e)
        }
    }

    async deleteProduct(req, res) {
        try {
            const id = req.params.id
            const result = await ProductService.deleteProduct(id)
            return res.status(result.code).json({ message: result.message })
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new AdminProductController()