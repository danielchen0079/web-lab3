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

// 💡 定义 virtual 字段 details
ProductSchema.virtual('details', {
    ref: 'ProductDetails',  // 关联的模型名
    localField: '_id',      // Product._id
    foreignField: 'productId', // ProductDetails.productId
    justOne: true           // 只取一条（因为一对一）
});

// 💡 开启 virtual 字段输出到 JSON 和 Object
ProductSchema.set('toObject', { virtuals: true });
ProductSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);
