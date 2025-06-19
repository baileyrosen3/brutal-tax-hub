import React from "react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
          Ready to Discuss Strategic Partnership?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with our team to explore how we can transform the private club
          industry together through innovative technology solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
            Schedule Strategy Session
          </button>
          <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors">
            Download Full Analysis
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
