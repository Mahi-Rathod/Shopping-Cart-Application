import { useCart } from "../context/CartContext.jsx";
import { useProduct } from "../context/ProductContext.jsx";


export default function ProductsPage() {
  const { addToCart } = useCart();
  const { products } = useProduct();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-left">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-sm shadow-md bg-white hover:shadow-gray-400 cursor-grab">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">₹{product.price}</p>
            <button
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}