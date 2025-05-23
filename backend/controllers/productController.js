const Product = require('../models/ProductSchema.js');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRandomProduct = async (req, res) => {
    try{
        const product = await Product.aggregate([
            { $sample: { size: 1 } }
        ]);
        res.json(product[0]);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
};

const searchProduct = async (req, res) => {
    try{
        const keyword = req.query.keyword;
        const products = await Product.find({
            name: {$regex: keyword, $options: 'i'}
        });
        res.json(products);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    getRandomProduct,
    searchProduct
};