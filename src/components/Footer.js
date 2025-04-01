import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Slogan */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Corlican Pet Motel</h3>
            <p className="text-light">Where your pets feel at home</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-4">Contact Us</h4>
            <address className="not-italic">
              <p className="text-light mb-2">123 Pet Haven Lane</p>
              <p className="text-light mb-2">Brisbane, QLD 4000</p>
              <p className="text-light mb-2">
                <a href="tel:0712345678" className="hover:text-primary transition-colors">
                  Phone: (07) 1234 5678
                </a>
              </p>
              <p className="text-light">
                <a href="mailto:info@corlicanpetmotel.com.au" className="hover:text-primary transition-colors">
                  Email: info@corlicanpetmotel.com.au
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation">
            <h4 className="text-lg font-display font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-light hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-light hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="text-light hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#booking" className="text-light hover:text-primary transition-colors">Book Now</a></li>
            </ul>
          </nav>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
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