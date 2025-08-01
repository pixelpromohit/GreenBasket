import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true, ref: 'user'},
    items: [{
        product: {type: String, required: true, ref: 'user'},
        quantity: {type: String, required: true}
    }],
    amount: {type: Number, required: true},
    adress: {type: String, required: true, ref: 'address'},
    status: {type: String, default: 'Order Placed'},
    payment: {type: String, required: true},
    isPaid: {type: Boolean, required: true, default: false},
}, {timestamps: true})

const Order = mongoose.models.order || mongoose.model('order', orderSchema)

export default Order;