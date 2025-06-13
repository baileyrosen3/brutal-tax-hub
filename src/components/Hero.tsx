
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, FileText, TrendingUp } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className={`pt-24 pb-16 relative overflow-hidden ${
      theme === 'neobrutalist' 
        ? 'bg-gradient-to-br from-neo-yellow via-white to-neo-blue' 
        : 'bg-gradient-to-br from-slate-50 to-white'
    }`}>
      {/* Background Pattern */}
      {theme === 'neobrutalist' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-neo-pink neo-border rotate-12"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-neo-green neo-border -rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-neo-purple neo-border rotate-45"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-neo-orange neo-border -rotate-12"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-up">
            <div className={`inline-block px-4 py-2 text-sm uppercase tracking-wider mb-6 ${
              theme === 'neobrutalist' 
                ? 'bg-black text-white font-mono neo-border neo-shadow' 
                : 'bg-slate-800 text-white font-medium rounded-full'
            }`}>
              ⚡ PROFESSIONAL TAX SERVICES
            </div>
            
            <h1 className={`leading-tight mb-6 ${
              theme === 'neobrutalist' 
                ? 'font-display font-black text-5xl md:text-7xl' 
                : 'font-bold text-4xl md:text-6xl text-slate-900'
            }`}>
              {theme === 'neobrutalist' ? (
                <>
                  MAXIMIZE YOUR
                  <span className="bg-neo-pink text-white px-2 neo-border neo-shadow inline-block transform rotate-1 mx-2">
                    REFUND
                  </span>
                  MINIMIZE YOUR
                  <span className="bg-neo-green text-black px-2 neo-border neo-shadow inline-block transform -rotate-1 mx-2">
                    STRESS
                  </span>
                </>
              ) : (
                <>
                  Maximize Your{" "}
                  <span className="text-blue-600">Refund</span>,{" "}
                  Minimize Your{" "}
                  <span className="text-green-600">Stress</span>
                </>
              )}
            </h1>
            
            <p className={`mb-8 max-w-lg ${
              theme === 'neobrutalist' 
                ? 'text-xl font-medium' 
                : 'text-xl text-slate-600'
            }`}>
              Get professional tax preparation services that save you time and money. 
              Individual tax expert with <strong>10+ years</strong> of experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className={`text-lg px-8 py-4 ${
                theme === 'neobrutalist' 
                  ? 'neo-btn' 
                  : 'bg-slate-800 text-white hover:bg-slate-700 shadow-lg rounded-lg'
              }`}>
                FILE YOUR TAXES NOW
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className={`text-lg px-8 py-4 ${
                theme === 'neobrutalist' 
                  ? 'neo-border neo-shadow bg-white font-bold hover:bg-neo-blue hover:text-white transition-all' 
                  : 'border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white rounded-lg font-medium transition-all'
              }`}>
                FREE CONSULTATION
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className={`text-3xl ${
                  theme === 'neobrutalist' 
                    ? 'font-display font-black text-neo-blue' 
                    : 'font-bold text-blue-600'
                }`}>500+</div>
                <div className={`text-sm uppercase ${
                  theme === 'neobrutalist' 
                    ? 'font-mono' 
                    : 'text-slate-600 font-medium'
                }`}>Clients Served</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl ${
                  theme === 'neobrutalist' 
                    ? 'font-display font-black text-neo-pink' 
                    : 'font-bold text-green-600'
                }`}>$2M+</div>
                <div className={`text-sm uppercase ${
                  theme === 'neobrutalist' 
                    ? 'font-mono' 
                    : 'text-slate-600 font-medium'
                }`}>Refunds Secured</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl ${
                  theme === 'neobrutalist' 
                    ? 'font-display font-black text-neo-green' 
                    : 'font-bold text-blue-600'
                }`}>99%</div>
                <div className={`text-sm uppercase ${
                  theme === 'neobrutalist' 
                    ? 'font-mono' 
                    : 'text-slate-600 font-medium'
                }`}>Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-bounce-in">
            <div className={`p-8 ${
              theme === 'neobrutalist' 
                ? 'neo-card bg-gradient-to-br from-white to-gray-50' 
                : 'bg-white shadow-xl rounded-xl border border-slate-200'
            }`}>
              <h3 className={`text-2xl mb-6 text-center ${
                theme === 'neobrutalist' 
                  ? 'font-display font-bold' 
                  : 'font-bold text-slate-900'
              }`}>
                QUICK TAX ESTIMATE
              </h3>
              
              <div className="space-y-4">
                <div className={`flex items-center justify-between p-4 ${
                  theme === 'neobrutalist' 
                    ? 'bg-neo-yellow neo-border' 
                    : 'bg-blue-50 border border-blue-200 rounded-lg'
                }`}>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6" />
                    <span className="font-bold">FILING STATUS</span>
                  </div>
                  <span className={theme === 'neobrutalist' ? 'font-mono' : 'font-medium'}>SINGLE</span>
                </div>
                
                <div className={`flex items-center justify-between p-4 text-white ${
                  theme === 'neobrutalist' 
                    ? 'bg-neo-blue neo-border' 
                    : 'bg-slate-800 rounded-lg'
                }`}>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-6 w-6" />
                    <span className="font-bold">INCOME</span>
                  </div>
                  <span className={theme === 'neobrutalist' ? 'font-mono' : 'font-medium'}>$75,000</span>
                </div>
                
                <div className={`flex items-center justify-between p-4 ${
                  theme === 'neobrutalist' 
                    ? 'bg-neo-green neo-border' 
                    : 'bg-green-50 border border-green-200 rounded-lg'
                }`}>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6" />
                    <span className="font-bold">EST. REFUND</span>
                  </div>
                  <span className={`font-black ${
                    theme === 'neobrutalist' ? 'font-mono' : 'text-green-600'
                  }`}>$3,500</span>
                </div>
              </div>
              
              <Button className={`w-full mt-6 ${
                theme === 'neobrutalist' 
                  ? 'neo-btn' 
                  : 'bg-slate-800 text-white hover:bg-slate-700 rounded-lg py-3'
              }`}>
                GET MY REAL ESTIMATE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
