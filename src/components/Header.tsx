
import { Button } from "@/components/ui/button";
import { Calculator, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white neo-border border-t-0 border-l-0 border-r-0 neo-shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-neo-blue p-2 neo-border neo-shadow">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="font-display font-black text-2xl">TAX FORCE</h1>
              <p className="font-mono text-xs uppercase tracking-wider">Tax Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-display font-bold hover:text-neo-blue transition-colors">
              SERVICES
            </a>
            <a href="#about" className="font-display font-bold hover:text-neo-blue transition-colors">
              ABOUT
            </a>
            <a href="#testimonials" className="font-display font-bold hover:text-neo-blue transition-colors">
              REVIEWS
            </a>
            <a href="#contact" className="font-display font-bold hover:text-neo-blue transition-colors">
              CONTACT
            </a>
            <Button className="neo-btn">
              GET STARTED
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 neo-border neo-shadow bg-neo-yellow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="font-display font-bold text-lg p-2 hover:bg-neo-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </a>
              <a 
                href="#about" 
                className="font-display font-bold text-lg p-2 hover:bg-neo-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </a>
              <a 
                href="#testimonials" 
                className="font-display font-bold text-lg p-2 hover:bg-neo-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                REVIEWS
              </a>
              <a 
                href="#contact" 
                className="font-display font-bold text-lg p-2 hover:bg-neo-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </a>
              <Button className="neo-btn w-full">
                GET STARTED
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
