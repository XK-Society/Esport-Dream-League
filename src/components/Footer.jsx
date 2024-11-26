import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-gray-900/70 border-t border-gray-800/50 relative z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <span className="text-xl">𝕏</span>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <span className="text-xl">🌐</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2024 ESFL. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 