import { useEffect, useState } from 'react';
import axios from 'axios';
import { addToCart } from '../utils/cartUtils';
import { toast } from 'react-hot-toast';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState('');

  const fetchProducts = async (searchKeyword = '') => {
    try {
      setLoading(true);
      const url = searchKeyword
        ? `http://localhost:5000/api/products/search?keyword=${searchKeyword}`
        : 'http://localhost:5000/api/products';
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止表单默认刷新行为
    fetchProducts(keyword);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <form className="flex mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered w-full max-w-xs"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              fetchProducts(keyword);
            }
          }}
        />
        <button type="submit" className="btn btn-primary ml-2">Search</button>
      </form>

      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product._id} className="card bg-base-100 shadow-md p-4">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <p className="font-bold">${product.price}</p>
              <button
                className="btn btn-primary mt-2"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
