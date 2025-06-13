
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Calculator, Users, Building2, Briefcase, Sparkles, Zap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Services = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: FileText,
      title: "INDIVIDUAL TAX PREP",
      description: "Complete tax preparation for individuals with all forms and schedules",
      price: "$150",
      features: ["All Tax Forms", "E-Filing Included", "Audit Support", "Prior Year Returns"],
      bgColor: theme === 'neobrutalist' ? "bg-neo-yellow" : "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: theme === 'neobrutalist' ? "text-black" : "text-blue-600",
      popular: false
    },
    {
      icon: Calculator,
      title: "TAX PLANNING",
      description: "Strategic tax planning to minimize your tax burden year-round",
      price: "$200",
      features: ["Tax Strategy", "Quarterly Reviews", "Deduction Optimization", "Retirement Planning"],
      bgColor: theme === 'neobrutalist' ? "bg-neo-blue" : "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "text-white",
      popular: true
    },
    {
      icon: Building2,
      title: "SMALL BUSINESS",
      description: "Complete business tax services for small businesses and self-employed",
      price: "$300",
      features: ["Business Returns", "Payroll Support", "Bookkeeping", "Entity Formation"],
      bgColor: theme === 'neobrutalist' ? "bg-neo-pink" : "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: theme === 'neobrutalist' ? "text-white" : "text-green-600",
      popular: false
    },
    {
      icon: Users,
      title: "FAMILY PACKAGES",
      description: "Comprehensive tax services for families with multiple returns",
      price: "$250",
      features: ["Multiple Returns", "Family Discounts", "Dependent Optimization", "Education Credits"],
      bgColor: theme === 'neobrutalist' ? "bg-neo-green" : "bg-gradient-to-br from-amber-50 to-amber-100",
      iconColor: theme === 'neobrutalist' ? "text-black" : "text-amber-600",
      popular: false
    },
    {
      icon: Briefcase,
      title: "CONSULTATION",
      description: "Professional tax consultation and advice for complex situations",
      price: "$100/hr",
      features: ["Expert Advice", "Tax Questions", "IRS Issues", "Amendment Services"],
      bgColor: theme === 'neobrutalist' ? "bg-neo-purple" : "bg-gradient-to-br from-indigo-50 to-indigo-100",
      iconColor: theme === 'neobrutalist' ? "text-white" : "text-indigo-600",
      popular: false
    }
  ];

  return (
    <section id="services" className={theme === 'neobrutalist' ? 'py-20 bg-white' : 'py-20 professional-gradient-bg'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${theme === 'professional' ? 'animate-fadeInUp' : ''}`}>
          <div className={`inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-wider mb-6 ${
            theme === 'neobrutalist' 
              ? 'bg-neo-orange text-white font-mono neo-border neo-shadow' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg'
          }`}>
            {theme === 'professional' && <Briefcase className="w-4 h-4" />}
            💼 PROFESSIONAL SERVICES
          </div>
          <h2 className={`mb-6 ${
            theme === 'neobrutalist' 
              ? 'font-display font-black text-4xl md:text-6xl' 
              : 'font-inter font-bold text-4xl md:text-6xl text-slate-900'
          }`}>
            {theme === 'neobrutalist' ? (
              <>
                TAX SERVICES THAT
                <span className="bg-black text-white px-3 py-1 neo-border neo-shadow inline-block transform rotate-1 mx-3">
                  DELIVER
                </span>
              </>
            ) : (
              <>
                Tax Services That <span className="professional-accent-text">Deliver Results</span>
              </>
            )}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'neobrutalist' ? '' : 'text-slate-600 font-medium'
          }`}>
            Professional tax preparation and planning services designed to maximize your refund and minimize your tax liability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group transition-all duration-500 relative ${
                theme === 'neobrutalist' 
                  ? 'neo-card hover:transform hover:translate-y-2' 
                  : 'prof-service-card hover:shadow-2xl hover:-translate-y-2'
              } ${theme === 'professional' ? 'animate-fadeInUp' : ''}`}
              style={theme === 'professional' ? {animationDelay: `${index * 0.1}s`} : {}}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className={`absolute -top-3 -right-3 px-4 py-2 text-xs font-bold uppercase tracking-wider ${
                  theme === 'neobrutalist' 
                    ? 'bg-neo-pink text-white neo-border neo-shadow rotate-12' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg'
                }`}>
                  {theme === 'professional' && <Sparkles className="w-3 h-3 inline mr-1" />}
                  POPULAR
                </div>
              )}

              <div className={`p-4 mb-6 flex items-center justify-center ${
                service.bgColor
              } ${
                service.iconColor
              } ${
                theme === 'neobrutalist' ? 'neo-border' : 'rounded-2xl shadow-lg'
              }`}>
                <service.icon className="h-12 w-12" />
              </div>
              
              <h3 className={`text-xl mb-3 ${
                theme === 'neobrutalist' 
                  ? 'font-display font-bold' 
                  : 'font-inter font-bold text-slate-900'
              }`}>
                {service.title}
              </h3>
              
              <p className={`mb-6 ${
                theme === 'neobrutalist' ? 'text-gray-600' : 'text-slate-600'
              }`}>
                {service.description}
              </p>
              
              <div className="mb-6">
                <div className="flex items-baseline mb-4">
                  <span className={`text-3xl ${
                    theme === 'neobrutalist' 
                      ? 'font-display font-black' 
                      : 'font-inter font-bold professional-accent-text'
                  }`}>{service.price}</span>
                  {service.price.includes('/hr') ? null : <span className="text-gray-500 ml-1">/return</span>}
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className={`h-5 w-5 flex-shrink-0 ${
                        theme === 'neobrutalist' ? 'text-neo-green' : 'text-green-500'
                      }`} />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button className={`w-full group ${
                theme === 'neobrutalist' 
                  ? 'neo-btn group-hover:bg-neo-blue group-hover:text-white' 
                  : service.popular ? 'professional-btn-primary' : 'professional-btn'
              }`}>
                GET STARTED
                {theme === 'professional' && <Zap className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />}
              </Button>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center p-12 text-white relative overflow-hidden ${
          theme === 'neobrutalist' 
            ? 'neo-card bg-gradient-to-r from-neo-blue to-neo-purple' 
            : 'bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-2xl shadow-2xl'
        }`}>
          {/* Background Effect for Professional Theme */}
          {theme === 'professional' && (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              <div className="absolute top-4 right-4 w-24 h-24 bg-blue-500 rounded-full blur-xl opacity-20 professional-floating-element"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-purple-500 rounded-full blur-xl opacity-20 professional-floating-element" style={{animationDelay: '2s'}}></div>
            </>
          )}
          
          <div className="relative">
            <h3 className={`mb-4 ${
              theme === 'neobrutalist' 
                ? 'font-display font-black text-3xl md:text-4xl' 
                : 'font-inter font-bold text-3xl md:text-4xl'
            }`}>
              NOT SURE WHICH SERVICE YOU NEED?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get a free 15-minute consultation to discuss your tax situation and discover how much you could save
            </p>
            <Button className={`group ${
              theme === 'neobrutalist' 
                ? 'neo-btn bg-neo-yellow text-black hover:bg-white' 
                : 'bg-white text-slate-800 hover:bg-slate-100 font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
            }`}>
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              FREE CONSULTATION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
