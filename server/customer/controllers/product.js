class CustomerProductController {
    async getAllProducts(req, res) {
        try {
            res.json({ message: 'customer :: getAllProducts : success' })
        } catch (e) {
            console.log(e)
        }
    }

    async getProduct(req, res) {
        try {
            res.json({ message: 'customer :: getProduct : success' })
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new CustomerProductController()