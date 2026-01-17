import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import QrUSD from "../Cart/Qr.jpg";   // USD QR
import QrKHR from "../Cart/Qrkh.jpg"; // KHR QR

const CartPage = ({ isOpen, closeCart }) => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const [currency, setCurrency] = useState("USD"); // <-- add this

  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const handleCheckout = () => setShowCheckout(true);
  const handleCloseModal = () => setShowCheckout(false);

  // select QR image based on currency
  const qrImage = currency === "USD" ? QrUSD : QrKHR;

  return (
    <>
      {/* Cart Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-[250px] md:w-[400px] bg-white shadow-lg z-50
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h1 className="text-2xl font-bold">🛒 My Cart</h1>
          <button
            onClick={closeCart}
            className="text-2xl cursor-pointer font-bold hover:text-red-500"
          >
            &times;
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-6 overflow-y-auto h-[calc(100%-80px)]">
          {cart.length === 0 ? (
            <p className="text-gray-500">No items in cart</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-center mb-4 border-b pb-4"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-contain rounded"
                />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Size: {item.size}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity || 1}</p>
                  <p>Total: ${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))
          )}

          {/* Subtotal, Delivery, Total */}
          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>$1.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${(total + 1.0).toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="w-full mt-4 bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-100 rounded shadow-lg text-center relative w-100 p-4">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mt-2 p-2">Thank you for your order</h2>
            <h5 className="text-lg mb-2">Nice to meet you</h5>

            {/* Currency Selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border rounded p-0 mb-1"
            >
              <option value="USD">USD</option>
              <option value="KHR">៛ KHR</option>
            </select>

            {/* QR Image */}
            <img
              src={qrImage}
              alt={`${currency} QR Code`}
              className="mx-auto w-64 h-64 object-cover p-2"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
