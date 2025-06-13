
import { Award, BookOpen, Users, Clock } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: Award,
      title: "CERTIFIED TAX PROFESSIONAL",
      description: "Licensed tax preparer with advanced certifications"
    },
    {
      icon: BookOpen,
      title: "10+ YEARS EXPERIENCE",
      description: "Decade of experience in individual and business tax preparation"
    },
    {
      icon: Users,
      title: "500+ HAPPY CLIENTS",
      description: "Hundreds of satisfied clients with maximized refunds"
    },
    {
      icon: Clock,
      title: "YEAR-ROUND SUPPORT",
      description: "Available for tax questions and planning throughout the year"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-block bg-neo-green text-black px-6 py-3 font-mono text-sm uppercase tracking-wider mb-6 neo-border neo-shadow">
              👨‍💼 ABOUT ME
            </div>
            
            <h2 className="font-display font-black text-4xl md:text-5xl mb-6">
              YOUR TRUSTED
              <span className="bg-neo-yellow text-black px-3 py-1 neo-border neo-shadow inline-block transform -rotate-1 mx-3">
                TAX EXPERT
              </span>
            </h2>
            
            <p className="text-lg mb-6">
              Hi, I'm <strong>Alex Johnson</strong>, a certified tax professional dedicated to helping individuals and small businesses navigate the complex world of taxes. With over a decade of experience, I've helped hundreds of clients maximize their refunds and minimize their tax burden.
            </p>
            
            <p className="text-lg mb-8">
              My approach is simple: <strong>personalized service</strong>, <strong>maximum accuracy</strong>, and <strong>year-round support</strong>. I stay up-to-date with the latest tax laws and regulations to ensure you get every deduction and credit you deserve.
            </p>

            {/* Why Choose Me */}
            <div className="neo-card bg-neo-blue text-white p-6 mb-8">
              <h3 className="font-display font-bold text-xl mb-4">WHY CHOOSE ME?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="bg-neo-yellow text-black px-2 py-1 font-bold text-sm">✓</span>
                  <span>Personal attention to every return - no cookie-cutter approach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-neo-yellow text-black px-2 py-1 font-bold text-sm">✓</span>
                  <span>Guaranteed accuracy with audit support included</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-neo-yellow text-black px-2 py-1 font-bold text-sm">✓</span>
                  <span>Fast turnaround - most returns completed within 48 hours</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-neo-yellow text-black px-2 py-1 font-bold text-sm">✓</span>
                  <span>Transparent pricing with no hidden fees</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Credentials */}
          <div className="space-y-6">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="neo-card hover:transform hover:translate-x-2 transition-all duration-300 bg-white"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-neo-pink text-white p-3 neo-border neo-shadow flex-shrink-0">
                    <credential.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">
                      {credential.title}
                    </h3>
                    <p className="text-gray-600">
                      {credential.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info Card */}
            <div className="neo-card bg-gradient-to-br from-neo-yellow to-neo-orange p-6">
              <h3 className="font-display font-black text-xl mb-4">
                📍 SERVING THE LOCAL COMMUNITY
              </h3>
              <p className="font-medium mb-4">
                Based in <strong>Downtown</strong>, serving clients throughout the metro area with both in-person and virtual services.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                <div>
                  <div className="font-bold">OFFICE HOURS:</div>
                  <div>Mon-Fri 9AM-6PM</div>
                  <div>Sat 10AM-4PM</div>
                </div>
                <div>
                  <div className="font-bold">TAX SEASON:</div>
                  <div>Extended Hours</div>
                  <div>Weekend Appts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
