const Product = require("../models/product")

exports.createProduct = async function (req, res, next) {
    try {
        const adminId = req.body.id;
        const title = req.body.title;
        const price = req.body.price;
        const image = req.body.image;
        const product = new Product(undefined,adminId, title, price, image)
        await product.save();
        return res.send({ message: "product create successfully" });
    } catch (error) {
        console.log(error)
    }
}

exports.getProducts = async function (req, res, next) {
    try {
        const products = await Product.fetchAll();
        return res.send(products.rows)
    } catch (error) {
        console.log(error)
    }
}

exports.getProductById = async function (req, res, next) {
    try {
        const productId = req.body.id
        const product = await Product.fetchProductById(productId)
        return res.send(product.rows)
    } catch (error) { console.log(error) }
}

exports.getProductsByAdminId = async function (req, res, next) {
    try {
        const adminId = req.body.id
        const products = await Product.fetchProductsByAdminId(adminId)
        return res.send(products.rows)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteProduct = async function (req, res, next) {
    try {
        const adminId = req.body.id
        const productId = req.body.id
        const product = await Product.deleteProductById(productId, adminId);
    } catch (error) {
        console.log(error)
    }
}