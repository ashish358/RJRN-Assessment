import { useEffect, useState, useContext } from "react";
import CartContext from "../context/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
fetch(`${import.meta.env.VITE_API_URL}/products`)

      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-light mb-10 text-center">
        Our Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map(p => (
          <div
            key={p._id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 text-center"
          >
<div className="w-full aspect-square overflow-hidden rounded mb-4 bg-gray-100">
  <img
    src={p.image}
    alt={p.name}
    className="w-full h-full object-cover"
  />
</div>




            <h3 className="text-lg font-medium">{p.name}</h3>
            <p className="text-gold font-semibold mt-2">
              ₹{p.price}
            </p>

            <button
              onClick={() => addToCart(p)}
              className="mt-4 bg-black hover:bg-gray-800 text-white w-full border border-gold text-gold py-2 rounded hover:bg-gold hover:text-gray-200 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
