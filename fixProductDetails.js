const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./backend/models/ProductSchema');
const ProductDetails = require('./backend/models/ProductDetailsSchema');

async function fixProductDetails() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const products = await Product.find();
        const details = await ProductDetails.find();

        if (products.length !== details.length) {
            console.error(`Products: ${products.length}, ProductDetails: ${details.length}`);
            return;
        }

        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const detail = details[i];

            detail.productId = product._id;
            await detail.save();
        }

        console.log('🎉 All productDetails updated!');
    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.disconnect();
    }
}

fixProductDetails();
