const { json } = require('express');
const Product = require('../models/ProductSchema.js');
let cart = [];

const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (quantity > product.quantity) {
            return res.status(400).json({ message: 'Quantity exceeds available stock' });
        }

        const existing = cart.find(item => item.productId === productId);
        if (existing) {
            if (existing.quantity + quantity > product.quantity) {
                return res.status(400).json({ message: 'Quantity exceeds available stock' });
            }
            existing.quantity += quantity;
        } else {
            cart.push({ productId, name: product.name, price: product.price, quantity });
        }

        res.status(200).json({ message: 'Product added to cart' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getCart = (req, res) => {
    res.json(cart);
};

const updateCartItem = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    const index = cart.findIndex(item => item.productId === id);
    if (index === -1) return res.status(404).json({ message: 'Product not found in cart' });

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (quantity > product.quantity) return res.status(400).json({ message: 'Quantity exceeds available stock' });

    cart[index].quantity = quantity;
    res.json({ message: 'Cart item updated' });
};

const deleteCartItem = (req, res) => {
    const { id } = req.params;
    cart = cart.filter(item => item.productId !== id);
    res.json({ message: 'Cart item deleted' });
};

module.exports = { addToCart, getCart, updateCartItem, deleteCartItem };
