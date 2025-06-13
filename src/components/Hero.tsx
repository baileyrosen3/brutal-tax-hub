
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, FileText, TrendingUp, Sparkles, Shield, Clock } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className={`pt-24 pb-16 relative overflow-hidden ${
      theme === 'neobrutalist' 
        ? 'bg-gradient-to-br from-neo-yellow via-white to-neo-blue' 
        : 'professional-hero-bg min-h-screen flex items-center'
    }`}>
      {/* Background Pattern */}
      {theme === 'neobrutalist' ? (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-neo-pink neo-border rotate-12"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-neo-green neo-border -rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-neo-purple neo-border rotate-45"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-neo-orange neo-border -rotate-12"></div>
        </div>
      ) : (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full professional-floating-element" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-500 rounded-full professional-floating-element" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-amber-500 rounded-full professional-floating-element" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-purple-500 rounded-full professional-floating-element" style={{animationDelay: '1s'}}></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={theme === 'neobrutalist' ? 'animate-slide-up' : 'animate-fadeInUp'}>
            <div className={`inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-wider mb-8 ${
              theme === 'neobrutalist' 
                ? 'bg-black text-white font-mono neo-border neo-shadow' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg'
            }`}>
              {theme === 'professional' && <Sparkles className="w-4 h-4" />}
              ⚡ PROFESSIONAL TAX SERVICES
            </div>
            
            <h1 className={`leading-tight mb-8 ${
              theme === 'neobrutalist' 
                ? 'font-display font-black text-5xl md:text-7xl' 
                : 'font-inter font-bold text-5xl md:text-7xl text-slate-900'
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
                  <span className="professional-accent-text">Refund</span>,{" "}
                  Minimize Your{" "}
                  <span className="professional-gold-accent">Stress</span>
                </>
              )}
            </h1>
            
            <p className={`mb-10 max-w-lg text-xl leading-relaxed ${
              theme === 'neobrutalist' 
                ? 'font-medium' 
                : 'text-slate-600 font-medium'
            }`}>
              Get professional tax preparation services that save you time and money. 
              Individual tax expert with <strong className={theme === 'professional' ? 'professional-accent-text' : ''}>10+ years</strong> of experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button className={`text-lg px-10 py-5 group relative overflow-hidden ${
                theme === 'neobrutalist' 
                  ? 'neo-btn' 
                  : 'professional-btn-primary text-white font-semibold'
              }`}>
                {theme === 'professional' && <div className="absolute inset-0 professional-shimmer"></div>}
                FILE YOUR TAXES NOW
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className={`text-lg px-10 py-5 group ${
                theme === 'neobrutalist' 
                  ? 'neo-border neo-shadow bg-white font-bold hover:bg-neo-blue hover:text-white transition-all' 
                  : 'professional-btn-outline'
              }`}>
                <Shield className="mr-2 h-5 w-5" />
                FREE CONSULTATION
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: '500+', label: 'Clients Served', color: theme === 'neobrutalist' ? 'text-neo-blue' : 'text-blue-600' },
                { value: '$2M+', label: 'Refunds Secured', color: theme === 'neobrutalist' ? 'text-neo-pink' : 'text-green-600' },
                { value: '99%', label: 'Accuracy Rate', color: theme === 'neobrutalist' ? 'text-neo-green' : 'text-purple-600' }
              ].map((stat, index) => (
                <div key={index} className={`text-center ${theme === 'professional' ? 'prof-stat-card professional-pulse' : ''}`} style={{animationDelay: `${index * 0.2}s`}}>
                  <div className={`text-4xl font-black mb-2 ${
                    theme === 'neobrutalist' 
                      ? `font-display ${stat.color}` 
                      : `font-inter ${stat.color}`
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm uppercase font-semibold ${
                    theme === 'neobrutalist' 
                      ? 'font-mono' 
                      : 'text-slate-600 tracking-wider'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced Visual */}
          <div className={`relative ${theme === 'neobrutalist' ? 'animate-bounce-in' : 'animate-slideInRight'}`}>
            <div className={`p-8 relative ${
              theme === 'neobrutalist' 
                ? 'neo-card bg-gradient-to-br from-white to-gray-50' 
                : 'professional-card professional-shimmer'
            }`}>
              {/* Background Glow Effect for Professional Theme */}
              {theme === 'professional' && (
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-20"></div>
              )}
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-2xl font-bold ${
                    theme === 'neobrutalist' 
                      ? 'font-display' 
                      : 'font-inter text-slate-900'
                  }`}>
                    QUICK TAX ESTIMATE
                  </h3>
                  {theme === 'professional' && <Clock className="w-6 h-6 text-blue-600" />}
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: FileText, label: 'FILING STATUS', value: 'SINGLE', color: theme === 'neobrutalist' ? 'bg-neo-yellow' : 'prof-feature-icon text-white' },
                    { icon: DollarSign, label: 'INCOME', value: '$75,000', color: theme === 'neobrutalist' ? 'bg-neo-blue text-white' : 'prof-feature-icon text-white' },
                    { icon: TrendingUp, label: 'EST. REFUND', value: '$3,500', color: theme === 'neobrutalist' ? 'bg-neo-green' : 'prof-feature-icon text-white' }
                  ].map((item, index) => (
                    <div key={index} className={`flex items-center justify-between p-6 transition-all duration-300 hover:scale-105 ${
                      theme === 'neobrutalist' 
                        ? `${item.color} neo-border` 
                        : 'bg-white rounded-xl shadow-lg border border-slate-100'
                    }`}>
                      <div className="flex items-center space-x-4">
                        <div className={theme === 'neobrutalist' ? 'p-2' : item.color}>
                          <item.icon className="h-6 w-6" />
                        </div>
                        <span className={`font-bold ${theme === 'professional' ? 'text-slate-800' : ''}`}>{item.label}</span>
                      </div>
                      <span className={`font-black text-lg ${
                        theme === 'neobrutalist' ? 'font-mono' : 'professional-accent-text font-inter'
                      }`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button className={`w-full mt-8 text-lg py-4 group ${
                  theme === 'neobrutalist' 
                    ? 'neo-btn' 
                    : 'professional-btn'
                }`}>
                  GET MY REAL ESTIMATE
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
