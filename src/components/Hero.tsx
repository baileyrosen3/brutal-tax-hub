
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, FileText, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-neo-yellow via-white to-neo-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neo-pink neo-border rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-neo-green neo-border -rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-neo-purple neo-border rotate-45"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-neo-orange neo-border -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-up">
            <div className="inline-block bg-black text-white px-4 py-2 font-mono text-sm uppercase tracking-wider mb-6 neo-border neo-shadow">
              ⚡ PROFESSIONAL TAX SERVICES
            </div>
            
            <h1 className="font-display font-black text-5xl md:text-7xl leading-tight mb-6">
              MAXIMIZE YOUR
              <span className="bg-neo-pink text-white px-2 neo-border neo-shadow inline-block transform rotate-1 mx-2">
                REFUND
              </span>
              MINIMIZE YOUR
              <span className="bg-neo-green text-black px-2 neo-border neo-shadow inline-block transform -rotate-1 mx-2">
                STRESS
              </span>
            </h1>
            
            <p className="text-xl font-medium mb-8 max-w-lg">
              Get professional tax preparation services that save you time and money. 
              Individual tax expert with <strong>10+ years</strong> of experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="neo-btn text-lg px-8 py-4">
                FILE YOUR TAXES NOW
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="neo-border neo-shadow bg-white font-bold text-lg px-8 py-4 hover:bg-neo-blue hover:text-white transition-all">
                FREE CONSULTATION
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-display font-black text-3xl text-neo-blue">500+</div>
                <div className="font-mono text-sm uppercase">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="font-display font-black text-3xl text-neo-pink">$2M+</div>
                <div className="font-mono text-sm uppercase">Refunds Secured</div>
              </div>
              <div className="text-center">
                <div className="font-display font-black text-3xl text-neo-green">99%</div>
                <div className="font-mono text-sm uppercase">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-bounce-in">
            <div className="neo-card bg-gradient-to-br from-white to-gray-50 p-8">
              <h3 className="font-display font-bold text-2xl mb-6 text-center">
                QUICK TAX ESTIMATE
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neo-yellow neo-border">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6" />
                    <span className="font-bold">FILING STATUS</span>
                  </div>
                  <span className="font-mono">SINGLE</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-neo-blue text-white neo-border">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-6 w-6" />
                    <span className="font-bold">INCOME</span>
                  </div>
                  <span className="font-mono">$75,000</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-neo-green neo-border">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6" />
                    <span className="font-bold">EST. REFUND</span>
                  </div>
                  <span className="font-mono font-black">$3,500</span>
                </div>
              </div>
              
              <Button className="w-full neo-btn mt-6">
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
