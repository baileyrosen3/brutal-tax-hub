import React from "react";
import { motion } from "framer-motion";

const PartnershipOpportunitiesSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Strategic Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Technology Partners
              </h3>
              <p className="text-blue-200">
                Integration specialists, cloud providers, and AI/ML technology
                partners to enhance our platform capabilities
              </p>
            </div>

            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Industry Partners</h3>
              <p className="text-blue-200">
                Golf industry associations, club management consultants, and
                equipment vendors for market access and credibility
              </p>
            </div>

            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Investment Partners
              </h3>
              <p className="text-blue-200">
                Strategic investors, venture capital, and private equity focused
                on B2B SaaS and luxury market segments
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipOpportunitiesSection;
