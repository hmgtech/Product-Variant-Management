module.exports = (app, version) => {
    const ProductVariantManagementController = require("../controller/productVariantManagementController");
    var router = require("express").Router()

    router.route("/listProduct").post(ProductVariantManagementController.listProduct);
    router.route("/getProducts").get(ProductVariantManagementController.getAllProducts);
    router.route("/getColors").get(ProductVariantManagementController.getAllColor);
    router.route("/getSizes").get(ProductVariantManagementController.getAllSizes);
    router.route("/getPatterns").get(ProductVariantManagementController.getAllPattern);   
    

    app.use(`/${version}/api/productvariantmanagement`, router)
}