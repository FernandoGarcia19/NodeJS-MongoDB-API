
//dependencies
const express = require('express')
const mongoose = require('mongoose')
const createError = require('http-errors');
const app = express()
//parsing
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//mongodb connection
mongoose.connect('mongodb+srv://mycluster.gakhyll.mongodb.net/', {
    dbName: 'PRODUCT_API',
    user: 'db_access',
    pass: 'jrZn6QGWhf9RwXg1'
}).then(() => {
    console.log('MongoDB HAS CONNECTED....');
})

//route and product connection
const ProductRoute = require('./Routes/Product.route');
const { create } = require('./Models/Product.model');
app.use('/products', ProductRoute)

//eror handling: 404 not found
app.use((req, res, next) =>{
    next(createError(404, "Not Found"));
});

//Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

//listening to localhost on port 3000
app.listen(3000, () =>
{
    console.log('server started on port 3000')
})