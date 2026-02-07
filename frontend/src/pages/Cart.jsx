import { useContext } from "react";
import CartContext from "../context/CartContext";

const Cart = () => {
  const { cart, updateQty, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-light">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-light mb-8">Shopping Cart</h2>

      {cart.map(item => (
        <div
          key={item._id}
          className="flex justify-between items-center bg-white shadow-sm rounded p-4 mb-4"
        >
          <div>
            <h4 className="font-medium">{item.name}</h4>
            <p className="text-gold">₹{item.price}</p>
          </div>

          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) =>
              updateQty(item._id, Number(e.target.value))
            }
            className="w-16 border rounded px-2 py-1"
          />

          <button
            onClick={() => removeFromCart(item._id)}
            className="text-red-500 hover:underline bg-greay"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
