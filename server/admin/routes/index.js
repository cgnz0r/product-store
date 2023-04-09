const Router = require('express')
const controller = require('../controllers/product')

const router = new Router()

router.get(
    '/products', 
    [
        // validation
    ], 
    controller.getAllProducts
)

router.post(
    '/products', 
    [
        // validation
    ], 
    controller.createProduct
)

router.put(
    '/products/:id', 
    [
        // validation
    ], 
    controller.updateProduct
)

router.delete(
    '/products/:id',
    [
        // validation
    ], 
    controller.removeProduct
)

module.exports = router