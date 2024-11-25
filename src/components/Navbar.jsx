import { Link } from 'react-router-dom';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50 border-b-2 border-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link to="/" className="text-white text-xl font-bold">
          Esports Dream League
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
        <Link to="/checkin" className="text-gray-300 hover:text-white transition">
            Check In
          </Link>
          <Link to="/marketplace" className="text-gray-300 hover:text-white transition">
            Marketplace
          </Link>
          <Link to="/battle" className="text-gray-300 hover:text-white transition">
            Battle
          </Link>
          <Link to="/manager" className="text-gray-300 hover:text-white transition">
            Manager
          </Link>
        </div>

        {/* Wallet Button */}
        <div className="flex items-center wallet-button-container">
          <WalletMultiButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
