import Order from "../models/Order.js";
import Product from "../models/Product.js";


// place order cod: /api/order/cod
export const placeOrderCOD = async (req, res) => {
    try {
        const {items, address} = req.body;
        const userId = req.userId;
        if (!address || items.length === 0) {
            return res.json({success: true, message: "Invalid Data"});
        }
        // Calculate amount using items
        let amount = await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product)
            return (await acc) + product.offerPrice * item.quantity
        }, 0)

        // Add tax 2%
        amount += Math.floor(amount * 0.02);

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType : "COD",
        })

        return res.json({success: true, message: "Order Placed Successfully"});
    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}

// Get orders by userId: /api/order/user

export const getUserOrders = async (req, res) => {
    try {
        const userId = req.userId;
        const orders = await Order.find({
            userId,
            $or: [{paymentType: "COD"}, {isPaid: true}]

        }).populate("items.product address").sort({createdAt: -1});
        return res.json({success: true, orders});
    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}

// Get all orders (for admin/seller): /api/order/seller
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({
            $or: [{paymentType: "COD"}, {isPaid: true}]

        }).populate("items.product address").sort({createdAt: -1});
        return res.json({success: true, orders});
    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}