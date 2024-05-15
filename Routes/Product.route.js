const express = require('express')
const router = express.Router()

router.get('/', (req,res,next)=>{
    res.send('getting a list of products');
})

router.post('/', (req,res,next)=>{
    res.send('prod created');   
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
