import { FaBox, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
export default function Navbar() {
  const { cart } = useCart();
  console.log(cart.length)
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center shadow-lg">
      <div className="text-white text-xl font-bold">Vistora</div>
      <div className="flex gap-4">
        <NavLink
            to="/"
          className="text-white text-2xl hover:text-gray-200"
        >
          <FaBox />
        </NavLink>
        <NavLink
            to="/cart"
          className="text-white text-2xl hover:text-gray-200 flex relative"
        >
          <FaShoppingCart />
            <p className="text-sm bg-yellow-200 border-none absolute left-3 -top-2  rounded-full w-5 h-5 text-red-600 font-semibold">{cart.length}</p>
        </NavLink>
      </div>
    </nav>
  );
}
