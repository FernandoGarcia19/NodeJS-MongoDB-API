//dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Product Schema definition 
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

//'product' turns into plural 'products' so it gets added to the products collection in the database
const Product = mongoose.model('product', ProductSchema);

//Export product for usage
module.exports = Product;