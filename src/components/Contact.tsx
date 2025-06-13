
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-neo-blue via-neo-purple to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-neo-yellow text-black px-6 py-3 font-mono text-sm uppercase tracking-wider mb-6 neo-border neo-shadow">
            📞 GET IN TOUCH
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl mb-6">
            READY TO
            <span className="bg-neo-green text-black px-3 py-1 neo-border neo-shadow inline-block transform -rotate-1 mx-3">
              START?
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Get your free consultation today. Let's discuss your tax situation and how I can help you save money.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="neo-card bg-white text-black">
            <h3 className="font-display font-bold text-2xl mb-6">SEND A MESSAGE</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold mb-2 block">FULL NAME *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="neo-border neo-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="font-bold mb-2 block">EMAIL *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="neo-border neo-shadow"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold mb-2 block">PHONE</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="neo-border neo-shadow"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="font-bold mb-2 block">SERVICE NEEDED</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 neo-border neo-shadow font-medium"
                  >
                    <option value="">Select a service</option>
                    <option value="individual">Individual Tax Prep</option>
                    <option value="business">Small Business</option>
                    <option value="planning">Tax Planning</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold mb-2 block">MESSAGE</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="neo-border neo-shadow"
                  placeholder="Tell me about your tax situation or ask any questions..."
                />
              </div>

              <Button type="submit" className="neo-btn w-full text-lg">
                SEND MESSAGE
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="neo-card bg-neo-yellow text-black">
              <h3 className="font-display font-bold text-2xl mb-6">CONTACT INFO</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white p-3 neo-border">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">PHONE</div>
                    <div className="font-mono">(555) 123-4567</div>
                    <div className="text-sm">Call or text anytime</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white p-3 neo-border">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">EMAIL</div>
                    <div className="font-mono">alex@taxforceservices.com</div>
                    <div className="text-sm">24/7 response time</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white p-3 neo-border">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">OFFICE</div>
                    <div className="font-mono">123 Main Street, Suite 200</div>
                    <div className="text-sm">Downtown Business District</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="neo-card bg-neo-green text-black">
              <h3 className="font-display font-bold text-2xl mb-6">OFFICE HOURS</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold">MONDAY - FRIDAY</span>
                  <span className="font-mono">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">SATURDAY</span>
                  <span className="font-mono">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">SUNDAY</span>
                  <span className="font-mono">BY APPOINTMENT</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-black text-white neo-border">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-bold">TAX SEASON HOURS</span>
                </div>
                <div className="text-sm">
                  January 15 - April 15: Extended hours including evenings and weekends
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button className="w-full bg-neo-pink text-white neo-border neo-shadow font-bold py-4 hover:bg-white hover:text-black">
                <Calendar className="mr-2 h-5 w-5" />
                SCHEDULE APPOINTMENT
              </Button>
              <Button className="w-full bg-neo-orange text-white neo-border neo-shadow font-bold py-4 hover:bg-white hover:text-black">
                <Phone className="mr-2 h-5 w-5" />
                CALL NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
