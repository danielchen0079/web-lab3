const express = require('express');
const router = express.Router();
const {addToCart, getCart, updateCartItem, deleteCartItem} = require('../controllers/cartController');


router.post('/', getCart);
router.post('/add', addToCart);
router.put('/:id', updateCartItem);
router.delete('/:id', deleteCartItem);

module.exports = router;