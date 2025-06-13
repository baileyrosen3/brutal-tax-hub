
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Small Business Owner",
      content: "Alex saved me over $3,000 in taxes this year! His attention to detail and knowledge of small business deductions is incredible. Best tax preparer I've ever worked with!",
      rating: 5,
      bgColor: "bg-neo-yellow"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content: "Finally found a tax professional who actually cares about maximizing my refund. Alex found deductions I didn't even know existed. Highly recommend!",
      rating: 5,
      bgColor: "bg-neo-blue"
    },
    {
      name: "Jennifer Rodriguez",
      role: "Working Mom",
      content: "Alex made tax season stress-free for our family. He handled multiple returns and found every possible credit. Professional, fast, and reasonably priced!",
      rating: 5,
      bgColor: "bg-neo-pink"
    },
    {
      name: "David Thompson",
      role: "Freelance Designer",
      content: "As a freelancer, my taxes are complicated. Alex organized everything perfectly and explained all my deductions. My refund was 40% higher than last year!",
      rating: 5,
      bgColor: "bg-neo-green"
    },
    {
      name: "Lisa Park",
      role: "Retired Teacher",
      content: "Alex has been doing my taxes for 5 years. Always accurate, always on time, and always finds ways to save me money. Couldn't ask for better service!",
      rating: 5,
      bgColor: "bg-neo-purple"
    },
    {
      name: "Robert Kim",
      role: "Restaurant Owner",
      content: "My business taxes were a nightmare until I found Alex. He cleaned up years of messy records and set up a system that saves me thousands annually.",
      rating: 5,
      bgColor: "bg-neo-orange"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 bg-neo-yellow neo-border rotate-45"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-neo-blue neo-border -rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-neo-pink neo-border rotate-45"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-neo-green neo-border -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-neo-green text-black px-6 py-3 font-mono text-sm uppercase tracking-wider mb-6 neo-border neo-shadow">
            ⭐ CLIENT REVIEWS
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl mb-6">
            WHAT CLIENTS
            <span className="bg-neo-yellow text-black px-3 py-1 neo-border neo-shadow inline-block transform rotate-1 mx-3">
              SAY
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Don't just take my word for it. Here's what real clients say about their experience working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="neo-card bg-white text-black hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className={`${testimonial.bgColor} p-3 neo-border inline-flex mb-4`}>
                <Quote className="h-6 w-6" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-neo-yellow text-neo-yellow" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t pt-4">
                <div className="font-display font-bold text-lg">
                  {testimonial.name}
                </div>
                <div className="font-mono text-sm text-gray-500 uppercase tracking-wider">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="neo-card bg-neo-yellow text-black">
            <div className="font-display font-black text-4xl mb-2">500+</div>
            <div className="font-mono text-sm uppercase">Happy Clients</div>
          </div>
          <div className="neo-card bg-neo-blue text-white">
            <div className="font-display font-black text-4xl mb-2">99%</div>
            <div className="font-mono text-sm uppercase">Accuracy Rate</div>
          </div>
          <div className="neo-card bg-neo-pink text-white">
            <div className="font-display font-black text-4xl mb-2">$2M+</div>
            <div className="font-mono text-sm uppercase">Refunds Secured</div>
          </div>
          <div className="neo-card bg-neo-green text-black">
            <div className="font-display font-black text-4xl mb-2">10+</div>
            <div className="font-mono text-sm uppercase">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
