import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Slogan */}
          <div className="text-center md:text-left">
            <a href="/" className="text-2xl font-display mb-4 block">
              Corlican Pet Motel
            </a>
            <p className="text-gray-400">
              Your pets home away from home!
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <p>Corlican, Killurin, </p>
              <p>Enniscorthy, Wexford, Y21 T6X5</p>
              <p>Assumpta: +353 (86) 223 2100</p>
              <p>Mary: +353 (86) 355 1132</p>
              <p>Email: corlicanpetmotel@hotmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com/corlicanpetmotel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Corlican Pet Motel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 