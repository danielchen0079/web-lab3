const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
});

ProductSchema.virtual('details', {
    ref: 'ProductDetails', 
    localField: '_id', 
    foreignField: 'productId', 
    justOne: true          
});

ProductSchema.set('toObject', { virtuals: true });
ProductSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);
