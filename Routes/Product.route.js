const express = require('express')
const router = express.Router()

const Product = require('../Models/Product.model')

router.get('/', (req,res,next)=>{
    res.send('getting a list of products');
})

router.post('/', async (req,res,next)=>{
    try {
        const product = new Product(req.body);
        const result = await product.save();
        res.send(result);
    } catch(error) {
        console.log(error.message);
    }
    
})

router.get('/:id', (req,res,next)=>{
    res.send('prod get'); 
})

router.patch('/:id', (req,res,next)=>{
    res.send('prod patch'); 
})

router.delete('/:id', (req,res,next)=>{
    res.send('prod delete'); 
})

module.exports = router;
