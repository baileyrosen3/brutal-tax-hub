
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Calculator, Users, Building2, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "INDIVIDUAL TAX PREP",
      description: "Complete tax preparation for individuals with all forms and schedules",
      price: "$150",
      features: ["All Tax Forms", "E-Filing Included", "Audit Support", "Prior Year Returns"],
      bgColor: "bg-neo-yellow",
      textColor: "text-black"
    },
    {
      icon: Calculator,
      title: "TAX PLANNING",
      description: "Strategic tax planning to minimize your tax burden year-round",
      price: "$200",
      features: ["Tax Strategy", "Quarterly Reviews", "Deduction Optimization", "Retirement Planning"],
      bgColor: "bg-neo-blue",
      textColor: "text-white"
    },
    {
      icon: Building2,
      title: "SMALL BUSINESS",
      description: "Complete business tax services for small businesses and self-employed",
      price: "$300",
      features: ["Business Returns", "Payroll Support", "Bookkeeping", "Entity Formation"],
      bgColor: "bg-neo-pink",
      textColor: "text-white"
    },
    {
      icon: Users,
      title: "FAMILY PACKAGES",
      description: "Comprehensive tax services for families with multiple returns",
      price: "$250",
      features: ["Multiple Returns", "Family Discounts", "Dependent Optimization", "Education Credits"],
      bgColor: "bg-neo-green",
      textColor: "text-black"
    },
    {
      icon: Briefcase,
      title: "CONSULTATION",
      description: "Professional tax consultation and advice for complex situations",
      price: "$100/hr",
      features: ["Expert Advice", "Tax Questions", "IRS Issues", "Amendment Services"],
      bgColor: "bg-neo-purple",
      textColor: "text-white"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-neo-orange text-white px-6 py-3 font-mono text-sm uppercase tracking-wider mb-6 neo-border neo-shadow">
            💼 PROFESSIONAL SERVICES
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl mb-6">
            TAX SERVICES THAT
            <span className="bg-black text-white px-3 py-1 neo-border neo-shadow inline-block transform rotate-1 mx-3">
              DELIVER
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Professional tax preparation and planning services designed to maximize your refund and minimize your tax liability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="neo-card hover:transform hover:translate-y-2 transition-all duration-300 group"
            >
              <div className={`${service.bgColor} ${service.textColor} p-4 neo-border mb-6 flex items-center justify-center`}>
                <service.icon className="h-12 w-12" />
              </div>
              
              <h3 className="font-display font-bold text-xl mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <div className="mb-6">
                <div className="flex items-baseline mb-4">
                  <span className="font-display font-black text-3xl">{service.price}</span>
                  {service.price.includes('/hr') ? null : <span className="text-gray-500 ml-1">/return</span>}
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-neo-green" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button className="w-full neo-btn group-hover:bg-neo-blue group-hover:text-white">
                GET STARTED
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center neo-card bg-gradient-to-r from-neo-blue to-neo-purple text-white p-12">
          <h3 className="font-display font-black text-3xl md:text-4xl mb-4">
            NOT SURE WHICH SERVICE YOU NEED?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Get a free 15-minute consultation to discuss your tax situation
          </p>
          <Button className="neo-btn bg-neo-yellow text-black hover:bg-white">
            FREE CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
