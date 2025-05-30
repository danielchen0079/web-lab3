const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  getRandomProduct,
  searchProduct,
  getAllProductDetails
} = require('../controllers/productController');


router.get('/search', searchProduct);
router.get('/random', getRandomProduct);
router.get('/details/all', getAllProductDetails);
router.get('/', getAllProducts);
router.get('/:id', getProductById);

module.exports = router;
