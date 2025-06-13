
import { Calculator, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-neo-blue p-2 neo-border neo-shadow">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-display font-black text-2xl">TAX FORCE</h3>
                <p className="font-mono text-xs uppercase tracking-wider text-gray-400">Tax Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Professional tax preparation and planning services that maximize your refund and minimize your stress.
            </p>
            <div className="flex space-x-4">
              <div className="bg-neo-blue p-2 neo-border neo-shadow hover:bg-neo-yellow hover:text-black transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="bg-neo-blue p-2 neo-border neo-shadow hover:bg-neo-yellow hover:text-black transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="bg-neo-blue p-2 neo-border neo-shadow hover:bg-neo-yellow hover:text-black transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-neo-yellow">SERVICES</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#services" className="hover:text-neo-yellow transition-colors">Individual Tax Prep</a></li>
              <li><a href="#services" className="hover:text-neo-yellow transition-colors">Small Business Taxes</a></li>
              <li><a href="#services" className="hover:text-neo-yellow transition-colors">Tax Planning</a></li>
              <li><a href="#services" className="hover:text-neo-yellow transition-colors">Tax Consultation</a></li>
              <li><a href="#services" className="hover:text-neo-yellow transition-colors">Audit Support</a></li>
              <li><a href="#services" className="hover:text-neo-yellow transition-colors">Prior Year Returns</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-neo-green">QUICK LINKS</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#about" className="hover:text-neo-green transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-neo-green transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-neo-green transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-neo-green transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-neo-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-neo-green transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-neo-pink">CONTACT</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-neo-pink" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-neo-pink" />
                <span>alex@taxforceservices.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-neo-pink mt-1" />
                <div>
                  <div>123 Main Street, Suite 200</div>
                  <div>Downtown Business District</div>
                  <div>City, ST 12345</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Tax Force Services. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <span>Licensed Tax Preparer</span>
            <span>•</span>
            <span>Bonded & Insured</span>
            <span>•</span>
            <span>IRS Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
