import { getCart, removeFromCart, updateCartItem } from '../utils/cartUtils';
import { useState, useEffect } from 'react';

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    updateCartItem(id, quantity);
    setCart(getCart());
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="card bg-base-100 shadow-md p-4 flex justify-between items-center">
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p>${item.price} × {item.quantity}</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                  className="input input-sm w-16"
                />
                <button className="btn btn-sm btn-error" onClick={() => handleRemove(item._id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
