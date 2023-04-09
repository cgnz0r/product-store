const Router = require('express')
const controller = require('../controllers/product')

const router = new Router()

router.post('/products', [], controller.createProduct)
router.put('/products/:id',  [], controller.updateProduct)
router.delete('/products/:id', [], controller.deleteProduct)

module.exports = router