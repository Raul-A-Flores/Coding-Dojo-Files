const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title:   String,
    price:  String,
    description: String

}, { timestamps: true });

const Product = mongoose.model('Proudct', ProductSchema);
module.exports = Product;