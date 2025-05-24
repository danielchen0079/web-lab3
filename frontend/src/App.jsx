import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MePage from './pages/MePage';

export default function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <nav className="navbar bg-base-100 mb-4">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Shopping Cart</Link>
        </div>
        <div className="flex-none gap-2">
          <Link to="/products" className="btn btn-sm">Products</Link>
          <Link to="/cart" className="btn btn-sm">Cart</Link>
          {isLoggedIn ? (
            <>
              <Link to="/me" className="btn btn-sm">Profile</Link>
              <button onClick={handleLogout} className="btn btn-sm btn-error">Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn btn-sm">Login</Link>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/me" element={<MePage />} />
      </Routes>
    </div>
  );
}
