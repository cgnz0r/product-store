const Router = require('express')
const controller = require('../controllers/product')

const router = new Router()

router.get('/products', [], controller.getProductList)
router.get('/products/:id', [], controller.getProductItem)

module.exports = router