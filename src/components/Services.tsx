
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Calculator, Users, Building2, Briefcase } from "lucide-react";
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
      bgColor: theme === 'neobrutalist' ? "bg-neo-yellow" : "bg-blue-50",
      textColor: theme === 'neobrutalist' ? "text-black" : "text-blue-600"
    },
    {
      icon: Calculator,
      title: "TAX PLANNING",
      description: "Strategic tax planning to minimize your tax burden year-round",
      price: "$200",
      features: ["Tax Strategy", "Quarterly Reviews", "Deduction Optimization", "Retirement Planning"],
      bgColor: theme === 'neobrutalist' ? "bg-neo-blue" : "bg-slate-100",
      textColor: "text-white"
    },
    {
      icon: Building2,
      title: "SMALL BUSINESS",
      description: "Complete business tax services for small businesses and self-employed",
      price: "$300",
      features: ["Business Returns", "Payroll Support", "Bookkeeping", "Entity Formation"],
      bgColor: theme === 'neobrutalist' ? "bg-neo-pink" : "bg-green-50",
      textColor: theme === 'neobrutalist' ? "text-white" : "text-green-600"
    },
    {
      icon: Users,
      title: "FAMILY PACKAGES",
      description: "Comprehensive tax services for families with multiple returns",
      price: "$250",
      features: ["Multiple Returns", "Family Discounts", "Dependent Optimization", "Education Credits"],
      bgColor: theme === 'neobrutalist' ? "bg-neo-green" : "bg-amber-50",
      textColor: theme === 'neobrutalist' ? "text-black" : "text-amber-600"
    },
    {
      icon: Briefcase,
      title: "CONSULTATION",
      description: "Professional tax consultation and advice for complex situations",
      price: "$100/hr",
      features: ["Expert Advice", "Tax Questions", "IRS Issues", "Amendment Services"],
      bgColor: theme === 'neobrutalist' ? "bg-neo-purple" : "bg-purple-50",
      textColor: theme === 'neobrutalist' ? "text-white" : "text-purple-600"
    }
  ];

  return (
    <section id="services" className={theme === 'neobrutalist' ? 'py-20 bg-white' : 'py-20 bg-slate-50'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-block px-6 py-3 text-sm uppercase tracking-wider mb-6 ${
            theme === 'neobrutalist' 
              ? 'bg-neo-orange text-white font-mono neo-border neo-shadow' 
              : 'bg-slate-800 text-white font-medium rounded-full'
          }`}>
            💼 PROFESSIONAL SERVICES
          </div>
          <h2 className={`mb-6 ${
            theme === 'neobrutalist' 
              ? 'font-display font-black text-4xl md:text-6xl' 
              : 'font-bold text-4xl md:text-5xl text-slate-900'
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
                Tax Services That <span className="text-blue-600">Deliver Results</span>
              </>
            )}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'neobrutalist' ? '' : 'text-slate-600'
          }`}>
            Professional tax preparation and planning services designed to maximize your refund and minimize your tax liability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group transition-all duration-300 ${
                theme === 'neobrutalist' 
                  ? 'neo-card hover:transform hover:translate-y-2' 
                  : 'bg-white shadow-lg rounded-xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              <div className={`p-4 mb-6 flex items-center justify-center ${
                service.bgColor
              } ${
                service.textColor
              } ${
                theme === 'neobrutalist' ? 'neo-border' : 'rounded-lg'
              }`}>
                <service.icon className="h-12 w-12" />
              </div>
              
              <h3 className={`text-xl mb-3 ${
                theme === 'neobrutalist' 
                  ? 'font-display font-bold' 
                  : 'font-bold text-slate-900'
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
                      : 'font-bold text-slate-900'
                  }`}>{service.price}</span>
                  {service.price.includes('/hr') ? null : <span className="text-gray-500 ml-1">/return</span>}
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className={`h-5 w-5 ${
                        theme === 'neobrutalist' ? 'text-neo-green' : 'text-green-500'
                      }`} />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button className={`w-full ${
                theme === 'neobrutalist' 
                  ? 'neo-btn group-hover:bg-neo-blue group-hover:text-white' 
                  : 'bg-slate-800 text-white hover:bg-slate-700 rounded-lg py-3'
              }`}>
                GET STARTED
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center p-12 text-white ${
          theme === 'neobrutalist' 
            ? 'neo-card bg-gradient-to-r from-neo-blue to-neo-purple' 
            : 'bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl shadow-xl'
        }`}>
          <h3 className={`mb-4 ${
            theme === 'neobrutalist' 
              ? 'font-display font-black text-3xl md:text-4xl' 
              : 'font-bold text-3xl md:text-4xl'
          }`}>
            NOT SURE WHICH SERVICE YOU NEED?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Get a free 15-minute consultation to discuss your tax situation
          </p>
          <Button className={theme === 'neobrutalist' 
            ? 'neo-btn bg-neo-yellow text-black hover:bg-white' 
            : 'bg-white text-slate-800 hover:bg-slate-100 font-bold px-8 py-3 rounded-lg'
          }>
            FREE CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
