const mongoose = require('mongoose');

const ProductDetailsSchema = new mongoose.Schema({
    productId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    discountPrice: {
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }, 
},{
        timestamps: true,
});

module.exports = mongoose.models.ProductDetails || mongoose.model('ProductDetails', ProductDetailsSchema);