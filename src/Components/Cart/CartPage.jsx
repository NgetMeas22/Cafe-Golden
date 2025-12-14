import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartPage = ({ isOpen, closeCart }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`
        fixed top-0 right-0 h-screen w-[300px] bg-white shadow-lg z-50
        transform transition-transform duration-500
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* Header */}
      <div className="flex justify-between p-4 border-b">
        <h2 className="text-xl font-bold">🛒 My Cart</h2>
        <button onClick={closeCart} className="text-2xl">&times;</button>
      </div>

      {/* Items */}
      <div className="p-4">
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="flex gap-3 mb-4 border-b pb-3">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p>Size: {item.size}</p>
                <p>Qty: {item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))
        )}

        <h3 className="font-bold mt-4">
          Total: ${total.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default CartPage;
