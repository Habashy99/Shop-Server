const express = require("express")
const router = express.Router()
const shopController = require("../controllers/shop")

router.get("/products", shopController.getProducts)
router.use("/product/id", shopController.getProductById)
router.use("/products/admin-id", shopController.getProductsByAdminId)
router.use("/add-product", shopController.createProduct)
router.use("/product/delete", shopController.deleteProduct)
module.exports = router;