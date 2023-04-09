const productModel = require('../models/product')

class AdminProductController {
    async getAllProducts(req, res) {
        try {
            res.json({ message: 'admin :: getAllProducts : success' })
        } catch (e) {
            console.log(e)
        }
    }

    async createProduct(req, res) {
        try {
            res.json({ message: 'admin :: createProduct : success' })
        } catch (e) {
            console.log(e)
        }
    }

    async updateProduct(req, res) {
        try {
            res.json({ message: 'admin :: updateProduct : success' })
        } catch (e) {
            console.log(e)
        }
    }

    async removeProduct(req, res) {
        try {
            res.json({ message: 'admin :: removeProduct : success' })
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new AdminProductController()