const Product = require('../models/ProductSchema');
const ProductDetails = require('../models/ProductDetailsSchema');

const getAllProducts = async (req, res) => {
  try {
      const products = await Product.find().populate('details').lean();
      res.json(products);
  } catch (error) {
      res.status(500).json({ message: 'Failed to fetch products', error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('details').lean();
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('getProductById error:', error);
    res.status(500).json({ message: error.message });
  }
};

const getRandomProduct = async (req, res) => {
  try {
    const product = await Product.aggregate([{ $sample: { size: 1 } }]);
    res.json(product[0]);
  } catch (error) {
    console.error('getRandomProduct error:', error);
    res.status(500).json({ message: error.message });
  }
};

const searchProduct = async (req, res) => {
  try {
    const keyword = req.query.keyword || '';
    console.log('Received keyword:', keyword);

    const regex = new RegExp(keyword, 'i');  

    const products = await Product.find({
      name: { $regex: regex }
    });

    console.log('Matched products:', products);
    res.json(products);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: error.message });
  }
};



const getAllProductDetails = async (req, res) => {
  try {
    const details = await ProductDetails.find().populate('productId');
    res.json(details);
  } catch (error) {
    console.error('getAllProductDetails error:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  getRandomProduct,
  searchProduct,
  getAllProductDetails
};
