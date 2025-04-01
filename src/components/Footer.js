import { FaFacebook } from 'react-icons/fa';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Slogan */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center mb-4 w-full">
              <img 
                src={logo} 
                alt="Corlican Pet Motel" 
                className="h-16 w-auto mb-4"
              />
              <h3 className="text-2xl font-display font-bold text-white">Corlican Pet Motel</h3>
            </div>
            <p className="text-light">Your pets home away from home</p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation" className="text-center">
            <h4 className="text-lg font-display font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-light hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-light hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="text-light hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#booking" className="text-light hover:text-primary transition-colors">Book Now</a></li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-lg font-display font-bold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://facebook.com" 
                className="text-light hover:text-primary transition-colors text-2xl"
                aria-label="Visit our Facebook page"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-light">&copy; {new Date().getFullYear()} Corlican Pet Motel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 