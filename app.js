const express = require('express')
const mongoose = require('mongoose')

const createError = require('http-errors');

//db_access
//jrZn6QGWhf9RwXg1
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://mycluster.gakhyll.mongodb.net/', {
    dbName: 'PRODUCT_API',
    user: 'db_access',
    pass: 'jrZn6QGWhf9RwXg1'
}).then(() => {
    console.log('MongoDB HAS CONNECTED....');
})


const ProductRoute = require('./Routes/Product.route');
const { create } = require('./Models/Product.model');
app.use('/products', ProductRoute)

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

app.listen(3000, () =>
{
    console.log('server started on port 3000')
})