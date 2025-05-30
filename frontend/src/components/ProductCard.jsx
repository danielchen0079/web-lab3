import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
    return(
        <Link to={`/products/${product._id}`}>
            <div className="card bg-base-100 w-96 shadow-sm hover:shadow-lg transition">
                <figure>
                <img 
    src={product.details?.image || product.image} 
    alt={product.name} 
    className="rounded-xl h-48 w-full object-cover" 
    onError={(e) => {
        e.target.src = '/images/placeholder.png';
        e.target.onError = null;
    }}
/>

                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    {/* <div className="flex justify-between items-center mt-2">
                        <button
                            className="btn btn-primary"
                            onClick={() => onAddToCart(product)}
                        >
                            Add to cart
                        </button>
                    </div> */}
                </div>
            </div>
        </Link>
    );
}