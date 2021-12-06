// Lets import Tables

const db = require("../models");

const Op = db.Sequelize.Op;

const ProductTableReference = db.product
const VariantTableReference = db.variant


function makeProductList(products, sizes, colors, patterns){
    // let products = ["T-Shirt"]
    // let sizes = ["S", "M", "L"]
    // let colors = ["Red", "Black", "Blue"]
    // let patterns = ["Half Sleave", "Full Sleave"]

    productList = []

    for (product in products){
        for (size in sizes) {
            for (color in colors){
                for(pattern in patterns){
                    productList.push(`${products[product] ? products[product] : ""} - ${sizes[size] ? sizes[size] : ""} - ${colors[color] ? colors[color] : ""} - ${patterns[pattern] ? patterns[pattern] : ""}`);
                }
            }
        } 
    }
    return productList;
}


//Lets define controller for product
exports.listProduct = (req, res) => {
    //Lets assume, we get parameters in body 
    //Validate request, that if body is empty...
    if(!req.body.products && !req.body.sizes && !req.body.colors && !req.body.patterns){
        res.status(400).send("Please Provide atleast one input")
    }
    
    products = req.body.products,
    sizes = req.body.sizes ? req.body.sizes : "",
    colors = req.body.colors ? req.body.colors : "",
    patterns = req.body.patterns ? req.body.patterns : ""
    
    productList = makeProductList(products, sizes, colors, patterns)
    res.status(200).send(productList)
}

//List all products
exports.getAllProducts = (req, res) => {
    ProductTableReference.findAll()
    .then((data) => {
        res.status(200).send(data)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}

//List all sizes
exports.getAllSizes = (req, res) => {
    VariantTableReference.findAll({attributes : ["variant_size"]})
    .then((data) => {
        res.status(200).send(data)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}

//List all color
exports.getAllColor = (req, res) => {
    VariantTableReference.findAll({attributes : ["variant_color"]})
    .then((data) => {
        res.status(200).send(data)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}

//List all Pattern
exports.getAllPattern = (req, res) => {
    VariantTableReference.findAll({attributes : ["variant_pattern"]})
    .then((data) => {
        res.status(200).send(data)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}
