import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency, axios, user } = useAppContext();

  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const { data } = await axios.get('/api/order/user');
        if (data.success) {
          setMyOrders(data.orders);
        }
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    if (user) {
      fetchMyOrders();
    }
  }, [user]);

  if (!user) {
    return (
      <div className="mt-16 pb-16 text-center">
        <p className="text-xl text-gray-600">Please log in to view your orders.</p>
      </div>
    );
  }

  if (myOrders.length === 0) {
    return (
      <div className="mt-16 pb-16 text-center">
        <p className="text-xl text-gray-600">You haven't placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="mt-16 pb-16">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My Orders</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      {myOrders.map((order, orderIndex) => (
        <div
          key={orderIndex}
          className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
        >
          <p className="flex justify-between md:items-center text-gray-400 font-medium max-md:flex-col gap-2">
            <span>Order ID: {order._id}</span>
            <span>Payment: {order.paymentType}</span>
            <span>Total: {currency}{order.amount}</span>
          </p>

          {order.items.map((item, itemIndex) => {
            const product = item.product;
            if (!product) return null; // skip items with no product data

            return (
              <div
                key={itemIndex}
                className={`relative bg-white text-gray-500/70 ${
                  order.items.length !== itemIndex + 1 ? 'border-b' : ''
                } border-gray-300 flex flex-col md:flex-row md:items-center justify-between py-5 md:gap-16 w-full`}
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <img
                      src={product.image?.[0] || '/placeholder.jpg'}
                      alt={product.name || 'Product Image'}
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-medium text-gray-800">
                      {product.name || 'Unnamed Product'}
                    </h2>
                    <p>Category: {product.category || 'N/A'}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0">
                  <p>Quantity: {item.quantity || 1}</p>
                  <p>Status: {order.status || 'Unknown'}</p>
                  <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>

                <p className="text-primary text-lg font-medium">
                  Amount: {currency}
                  {(product.offerPrice || 0) * (item.quantity || 1)}
                </p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
