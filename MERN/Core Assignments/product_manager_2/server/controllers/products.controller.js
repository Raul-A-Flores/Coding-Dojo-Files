const Product = require("../models/product.model");


const addNewProduct = (req,res) =>{
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => console.log(err))
};

const getAllProducts =(req,res)=>{
    Product.find()
    .then((allProducts) =>res.json(allProducts))
    .catch((err) => (console.log(err)));
}

const getProductbyID =(req,res) =>{
    Product.findOne({id: req.params._id})
    .then(queriedProduct=> res.json(queriedProduct))
    .catch((err)=> console.log(err));
}

module.exports = {
    addNewProduct,
    getAllProducts, 
    getProductbyID
};