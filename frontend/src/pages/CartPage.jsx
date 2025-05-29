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

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="mt-4 text-gray-500 dark:text-gray-400">Your cart is empty.</p>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-3 xl:grid-cols-4">
            <div className="lg:col-span-2 xl:col-span-3">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item._id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                    <div className="flex items-center gap-4">
                      <img className="h-20 w-20 rounded" src={item.image} alt={item.name} />

                      <div className="flex-1">
                        <h3 className="text-base font-medium text-gray-900 dark:text-white">{item.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">${item.price} × {item.quantity}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700"
                        >
                          –
                        </button>
                        <input
                          type="number"
                          className="w-12 text-center bg-transparent border-0 text-sm font-medium text-gray-900 dark:text-white"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                          min="1"
                        />
                        <button
                          onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-end w-24">
                        <p className="text-base font-bold text-gray-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>

                      <button
                        onClick={() => handleRemove(item._id)}
                        className="ml-4 inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">${getTotal().toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-normal text-gray-500 dark:text-gray-400">Shipping</span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">$0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">$0</span>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-2 dark:border-gray-700">
                  <span className="text-base font-bold text-gray-900 dark:text-white">Total</span>
                  <span className="text-base font-bold text-gray-900 dark:text-white">${getTotal().toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700">
                Proceed to Checkout
              </button>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                <a href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
