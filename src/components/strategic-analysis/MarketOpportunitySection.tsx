import React from "react";
import { motion } from "framer-motion";

const MarketOpportunitySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              2. The Opportunity: An Underserved Market
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              The private golf and country club industry, while seemingly
              traditional, is undergoing a significant technological shift.
              Member expectations, shaped by their experiences with consumer
              technology, are rising. They now demand the same level of
              seamless, personalized, and mobile-first interaction from their
              club as they receive from other high-end service providers.
              However, the current software landscape for clubs is dominated by
              a handful of legacy, all-in-one providers whose products are often
              characterized by clunky interfaces, limited functionality, and a
              lack of true integration. This creates a significant opportunity
              for a new entrant that can deliver a modern, user-centric, and
              fully unified digital experience. The market is not "untouched,"
              but it is "underserved" by providers who have failed to keep pace
              with technological innovation and the evolving demands of the
              modern club member.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketOpportunitySection;
