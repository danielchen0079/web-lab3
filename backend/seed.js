const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/ProductSchema');
const connectDB = require('./connectDB/connectDB');

dotenv.config();

const seedProducts = [
  {
    name: 'Laptop',
    description: 'High-performance laptop for professionals.',
    price: 999,
    quantity: 4,
  },
  {
    name: 'Smartphone',
    description: 'Latest smartphone with advanced features.',
    price: 799,
    quantity: 5,
  },
  {
    name: 'Headphones',
    description: 'Noise-cancelling over-ear headphones.',
    price: 199,
    quantity: 10,
  },
  {
    name: 'Keyboard',
    description: 'Mechanical keyboard with RGB lighting.',
    price: 89,
    quantity: 8,
  },
  {
    name: 'Mouse',
    description: 'Wireless ergonomic mouse for office use.',
    price: 49,
    quantity: 12,
  }
];

const importData = async () => {
  try {
    await connectDB();
    await Product.deleteMany(); // 清空旧数据
    await Product.insertMany(seedProducts); // 插入样本数据
    console.log('✅ Sample data inserted!');
    process.exit();
  } catch (error) {
    console.error('❌ Failed to insert data:', error.message);
    process.exit(1);
  }
};

importData();
