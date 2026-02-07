import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-wide text-gold">
          Naksh Jewels
        </h1>

        <div className="space-x-6">
          <Link to="/" className="hover:text-gold">Home</Link>
          <Link to="/cart" className="hover:text-gold">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
