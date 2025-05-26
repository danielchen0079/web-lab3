const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/ProductSchema');
const connectDB = require('./connectDB/connectDB');

dotenv.config();

const seedProducts = [
  {
      name: "Apple Watch Series 9",
      brand: "Apple",
      category: "Smartwatch",
      description: "Apple 最新款智能手表，健康监测、运动追踪。",
      price: 499,
      discountPrice: 459,
      rating: 4.8,
      quantity: 25,
      image: "https://www.apple.com/v/apple-watch-series-10/d/images/overview/finishes-aluminum/gallery/finish_alum_black_02__cfbupf7b9rte_xlarge_2x.jpg"
  },
  {
      name: "Samsung Galaxy Watch 6",
      brand: "Samsung",
      category: "Smartwatch",
      description: "三星智能手表，支持健康与健身应用。",
      price: 399,
      discountPrice: 359,
      rating: 4.5,
      quantity: 30,
      image: "https://images.samsung.com/is/image/samsung/p6pim/nz/galaxy-watch6"
  },
  {
      name: "Huawei Watch GT 4",
      brand: "Huawei",
      category: "Smartwatch",
      description: "华为超长续航智能手表。",
      price: 299,
      discountPrice: 269,
      rating: 4.3,
      quantity: 40,
      image: "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt4"
  },
  {
      name: "Garmin Forerunner 265",
      brand: "Garmin",
      category: "Smartwatch",
      description: "Garmin 高级运动智能手表。",
      price: 499,
      discountPrice: 449,
      rating: 4.7,
      quantity: 20,
      image: "https://static.garmincdn.com/en/products/forerunner-265.jpg"
  },
  {
      name: "Fitbit Versa 4",
      brand: "Fitbit",
      category: "Smartwatch",
      description: "Fitbit 轻量运动手表，支持健康监测。",
      price: 229,
      discountPrice: 199,
      rating: 4.2,
      quantity: 35,
      image: "https://images.fitbit.com/versa-4.jpg"
  },
  {
      name: "Amazfit GTR 4",
      brand: "Amazfit",
      category: "Smartwatch",
      description: "高性价比智能手表，支持多项运动模式。",
      price: 199,
      discountPrice: 179,
      rating: 4.1,
      quantity: 50,
      image: "https://www.amazfit.com/gtr-4.jpg"
  },
  {
      name: "Suunto 9 Peak Pro",
      brand: "Suunto",
      category: "Smartwatch",
      description: "专业级运动手表，超长续航。",
      price: 499,
      discountPrice: 479,
      rating: 4.4,
      quantity: 15,
      image: "https://www.suunto.com/9-peak-pro.jpg"
  },
  {
      name: "TicWatch Pro 5",
      brand: "TicWatch",
      category: "Smartwatch",
      description: "WearOS 智能手表，双屏设计。",
      price: 349,
      discountPrice: 329,
      rating: 4.0,
      quantity: 25,
      image: "https://www.mobvoi.com/ticwatch-pro-5.jpg"
  },
  {
      name: "Fossil Gen 6",
      brand: "Fossil",
      category: "Smartwatch",
      description: "经典设计与现代智能结合。",
      price: 299,
      discountPrice: 279,
      rating: 4.2,
      quantity: 22,
      image: "https://www.fossil.com/gen6.jpg"
  },
  {
      name: "Polar Vantage V2",
      brand: "Polar",
      category: "Smartwatch",
      description: "精准的心率与训练分析。",
      price: 599,
      discountPrice: 569,
      rating: 4.6,
      quantity: 12,
      image: "https://www.polar.com/vantage-v2.jpg"
  },

  // （其他类别继续，用 quantity 替换 stock）

  // Example for Smartphone:
  {
      name: "iPhone 15 Pro",
      brand: "Apple",
      category: "Smartphone",
      description: "Apple 顶级旗舰手机。",
      price: 1199,
      discountPrice: 1099,
      rating: 4.9,
      quantity: 40,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro"
  },
  {
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      category: "Smartphone",
      description: "三星超强旗舰手机。",
      price: 1099,
      discountPrice: 999,
      rating: 4.8,
      quantity: 35,
      image: "https://images.samsung.com/is/image/samsung/p6pim/nz/smartphones/galaxy-s24-ultra"
  },
  // ……（其余智能手机、平板、笔记本数据继续）

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
