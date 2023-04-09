const { Schema, model } = require('mongoose')

const ProductSchema = Schema({
    name: { type: String, required: [true, "Please enter a product name"] },
    quantity: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true },
    image: { type: String }
}, { timestamps: true })

module.exports = model('Product', ProductSchema)