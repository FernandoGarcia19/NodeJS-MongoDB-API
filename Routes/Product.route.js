const express = require('express')

const router = express.Router()

const ProductController = require('../Controllers/Product.Controller')

//CRUD operation handling through product controller
router.get('/', ProductController.getAllProducts);

router.post('/', ProductController.createNewProduct);

router.get('/:id', ProductController.getProductById);

router.patch('/:id', ProductController.updateProduct);

router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
