
import { Award, BookOpen, Users, Clock } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const About = () => {
  const { theme } = useTheme();

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
    <section id="about" className={`py-20 ${
      theme === 'neobrutalist' 
        ? 'bg-gradient-to-br from-gray-50 to-white' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className={`inline-block px-6 py-3 text-sm uppercase tracking-wider mb-6 ${
              theme === 'neobrutalist' 
                ? 'bg-neo-green text-black font-mono neo-border neo-shadow' 
                : 'bg-green-100 text-green-800 font-medium rounded-full'
            }`}>
              👨‍💼 ABOUT ME
            </div>
            
            <h2 className={`mb-6 ${
              theme === 'neobrutalist' 
                ? 'font-display font-black text-4xl md:text-5xl' 
                : 'font-bold text-4xl md:text-5xl text-slate-900'
            }`}>
              {theme === 'neobrutalist' ? (
                <>
                  YOUR TRUSTED
                  <span className="bg-neo-yellow text-black px-3 py-1 neo-border neo-shadow inline-block transform -rotate-1 mx-3">
                    TAX EXPERT
                  </span>
                </>
              ) : (
                <>
                  Your Trusted <span className="text-blue-600">Tax Expert</span>
                </>
              )}
            </h2>
            
            <p className={`text-lg mb-6 ${
              theme === 'neobrutalist' ? '' : 'text-slate-600'
            }`}>
              Hi, I'm <strong>Alex Johnson</strong>, a certified tax professional dedicated to helping individuals and small businesses navigate the complex world of taxes. With over a decade of experience, I've helped hundreds of clients maximize their refunds and minimize their tax burden.
            </p>
            
            <p className={`text-lg mb-8 ${
              theme === 'neobrutalist' ? '' : 'text-slate-600'
            }`}>
              My approach is simple: <strong>personalized service</strong>, <strong>maximum accuracy</strong>, and <strong>year-round support</strong>. I stay up-to-date with the latest tax laws and regulations to ensure you get every deduction and credit you deserve.
            </p>

            {/* Why Choose Me */}
            <div className={`p-6 mb-8 text-white ${
              theme === 'neobrutalist' 
                ? 'neo-card bg-neo-blue' 
                : 'bg-slate-800 rounded-xl shadow-lg'
            }`}>
              <h3 className={`text-xl mb-4 ${
                theme === 'neobrutalist' ? 'font-display font-bold' : 'font-bold'
              }`}>WHY CHOOSE ME?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className={`px-2 py-1 font-bold text-sm ${
                    theme === 'neobrutalist' 
                      ? 'bg-neo-yellow text-black' 
                      : 'bg-green-500 text-white rounded'
                  }`}>✓</span>
                  <span>Personal attention to every return - no cookie-cutter approach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className={`px-2 py-1 font-bold text-sm ${
                    theme === 'neobrutalist' 
                      ? 'bg-neo-yellow text-black' 
                      : 'bg-green-500 text-white rounded'
                  }`}>✓</span>
                  <span>Guaranteed accuracy with audit support included</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className={`px-2 py-1 font-bold text-sm ${
                    theme === 'neobrutalist' 
                      ? 'bg-neo-yellow text-black' 
                      : 'bg-green-500 text-white rounded'
                  }`}>✓</span>
                  <span>Fast turnaround - most returns completed within 48 hours</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className={`px-2 py-1 font-bold text-sm ${
                    theme === 'neobrutalist' 
                      ? 'bg-neo-yellow text-black' 
                      : 'bg-green-500 text-white rounded'
                  }`}>✓</span>
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
                className={`transition-all duration-300 ${
                  theme === 'neobrutalist' 
                    ? 'neo-card hover:transform hover:translate-x-2 bg-white' 
                    : 'bg-white shadow-lg rounded-xl border border-slate-200 p-6 hover:shadow-xl hover:translate-x-2'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 flex-shrink-0 ${
                    theme === 'neobrutalist' 
                      ? 'bg-neo-pink text-white neo-border neo-shadow' 
                      : 'bg-blue-100 text-blue-600 rounded-lg'
                  }`}>
                    <credential.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className={`text-lg mb-2 ${
                      theme === 'neobrutalist' 
                        ? 'font-display font-bold' 
                        : 'font-bold text-slate-900'
                    }`}>
                      {credential.title}
                    </h3>
                    <p className={theme === 'neobrutalist' ? 'text-gray-600' : 'text-slate-600'}>
                      {credential.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info Card */}
            <div className={`p-6 ${
              theme === 'neobrutalist' 
                ? 'neo-card bg-gradient-to-br from-neo-yellow to-neo-orange' 
                : 'bg-gradient-to-br from-blue-50 to-green-50 rounded-xl border border-slate-200'
            }`}>
              <h3 className={`text-xl mb-4 ${
                theme === 'neobrutalist' 
                  ? 'font-display font-black' 
                  : 'font-bold text-slate-900'
              }`}>
                📍 SERVING THE LOCAL COMMUNITY
              </h3>
              <p className={`font-medium mb-4 ${
                theme === 'neobrutalist' ? '' : 'text-slate-700'
              }`}>
                Based in <strong>Downtown</strong>, serving clients throughout the metro area with both in-person and virtual services.
              </p>
              <div className={`grid grid-cols-2 gap-4 text-sm ${
                theme === 'neobrutalist' ? 'font-mono' : 'font-medium text-slate-600'
              }`}>
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
