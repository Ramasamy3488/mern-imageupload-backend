const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// POST: Create product with image
router.post("/addProduct", productController.uploadImage, productController.createProduct);

// GET: List all products
router.get("/readAllProducts", productController.getProducts);

// GET: Single product by ID
router.get("/readProduct/:id", productController.getProductById);

// GET: Update product by ID
router.put("/updateProduct/:id", productController.uploadImage, productController.updateProduct);

// DELETE: Delete product by ID
router.delete("/deleteProduct/:id", productController.deleteProduct);

module.exports = router;
