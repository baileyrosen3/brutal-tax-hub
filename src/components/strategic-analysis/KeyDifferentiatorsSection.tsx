import React from "react";
import { motion } from "framer-motion";

const KeyDifferentiatorsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">
            4. Key Differentiators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Uncompromising Design
              </h3>
              <p className="text-gray-600 text-lg">
                We will deliver a consumer-grade user experience (UX) that is
                both beautiful and intuitive. Every interface will be designed
                with the care of a high-end consumer product.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Seamless Integration
              </h3>
              <p className="text-gray-600 text-lg">
                Our platform's modern, API-first architecture ensures all
                modules are truly unified, providing a single source of truth
                for all operational data.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                AI-Powered Insights
              </h3>
              <p className="text-gray-600 text-lg">
                We leverage AI and machine learning to provide actionable
                insights into member behavior and operational efficiency,
                enabling data-driven decisions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Proactive Cybersecurity
              </h3>
              <p className="text-gray-600 text-lg">
                Security is a core tenet. We offer robust, built-in features and
                proactive monitoring to protect sensitive client data, a key
                competitive advantage.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyDifferentiatorsSection;
