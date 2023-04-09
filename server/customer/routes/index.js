const Router = require('express')
const controller = require('../controllers/product')

const router = new Router()

router.get(
    '/products', 
    [
        // validations
    ], 
    controller.getAllProducts
)

router.get(
    '/product/:id', 
    [
        // validations
    ], 
    controller.getProduct
)

module.exports = router