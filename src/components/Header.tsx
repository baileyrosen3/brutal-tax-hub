
import { Button } from "@/components/ui/button";
import { Calculator, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className={`fixed top-0 w-full z-50 ${
      theme === 'neobrutalist' 
        ? 'bg-white neo-border border-t-0 border-l-0 border-r-0 neo-shadow' 
        : 'bg-white shadow-md border-b border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`p-2 ${
              theme === 'neobrutalist' 
                ? 'bg-neo-blue neo-border neo-shadow' 
                : 'bg-slate-800 rounded-lg shadow-md'
            }`}>
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className={`text-2xl ${
                theme === 'neobrutalist' 
                  ? 'font-display font-black' 
                  : 'font-bold text-slate-800'
              }`}>TAX FORCE</h1>
              <p className={`text-xs uppercase tracking-wider ${
                theme === 'neobrutalist' 
                  ? 'font-mono' 
                  : 'text-slate-600 font-medium'
              }`}>Tax Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`transition-colors ${
              theme === 'neobrutalist' 
                ? 'font-display font-bold hover:text-neo-blue' 
                : 'font-medium text-slate-700 hover:text-slate-900'
            }`}>
              SERVICES
            </a>
            <a href="#about" className={`transition-colors ${
              theme === 'neobrutalist' 
                ? 'font-display font-bold hover:text-neo-blue' 
                : 'font-medium text-slate-700 hover:text-slate-900'
            }`}>
              ABOUT
            </a>
            <a href="#testimonials" className={`transition-colors ${
              theme === 'neobrutalist' 
                ? 'font-display font-bold hover:text-neo-blue' 
                : 'font-medium text-slate-700 hover:text-slate-900'
            }`}>
              REVIEWS
            </a>
            <a href="#contact" className={`transition-colors ${
              theme === 'neobrutalist' 
                ? 'font-display font-bold hover:text-neo-blue' 
                : 'font-medium text-slate-700 hover:text-slate-900'
            }`}>
              CONTACT
            </a>
            <Button className={theme === 'neobrutalist' ? 'neo-btn' : 'professional-btn'}>
              GET STARTED
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${
              theme === 'neobrutalist' 
                ? 'neo-border neo-shadow bg-neo-yellow' 
                : 'bg-slate-100 rounded-md hover:bg-slate-200 transition-colors'
            }`}
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
                className={`text-lg p-2 transition-colors ${
                  theme === 'neobrutalist' 
                    ? 'font-display font-bold hover:bg-neo-yellow' 
                    : 'font-medium text-slate-700 hover:bg-slate-100 rounded-md'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </a>
              <a 
                href="#about" 
                className={`text-lg p-2 transition-colors ${
                  theme === 'neobrutalist' 
                    ? 'font-display font-bold hover:bg-neo-yellow' 
                    : 'font-medium text-slate-700 hover:bg-slate-100 rounded-md'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </a>
              <a 
                href="#testimonials" 
                className={`text-lg p-2 transition-colors ${
                  theme === 'neobrutalist' 
                    ? 'font-display font-bold hover:bg-neo-yellow' 
                    : 'font-medium text-slate-700 hover:bg-slate-100 rounded-md'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                REVIEWS
              </a>
              <a 
                href="#contact" 
                className={`text-lg p-2 transition-colors ${
                  theme === 'neobrutalist' 
                    ? 'font-display font-bold hover:bg-neo-yellow' 
                    : 'font-medium text-slate-700 hover:bg-slate-100 rounded-md'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </a>
              <Button className={`w-full ${theme === 'neobrutalist' ? 'neo-btn' : 'professional-btn'}`}>
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
