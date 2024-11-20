import { Link } from 'react-router-dom';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link to="/" className="text-white text-xl font-bold">
          Esports Dream League
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link to="/buy" className="text-gray-300 hover:text-white transition">
            Buy
          </Link>
          <Link to="/checkin" className="text-gray-300 hover:text-white transition">
            Check In
          </Link>
          <Link to="/battle" className="text-gray-300 hover:text-white transition">
            Battle
          </Link>
          <Link to="/manager" className="text-gray-300 hover:text-white transition">
            Manager
          </Link>
        </div>

        {/* Wallet Button */}
        <div className="flex items-center">
          <WalletMultiButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
