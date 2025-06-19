import React from "react";
import { motion } from "framer-motion";

const GoToMarketSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            5. Go-to-Market Strategy: Wedge & Expand
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Our market entry will be surgical and strategic. We will employ a
            "wedge and expand" strategy, focusing on a single, high-impact area
            of club operations: tournament management. The existing solutions
            for tournament management are notoriously complex and inadequate,
            providing a clear point of entry.
          </p>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                The Wedge
              </h3>
              <p className="text-gray-600 text-lg">
                We will develop the industry's most elegant and intuitive
                tournament management system. It will be offered as a standalone
                product, allowing us to gain a foothold in target clubs without
                requiring them to rip and replace their entire operational
                software.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                The Expansion
              </h3>
              <p className="text-gray-600 text-lg">
                Once we have demonstrated the superiority of our tournament
                product and built trust with our initial clients, we will
                introduce a full suite of seamlessly integrated modules,
                including tee sheet management, POS, member billing, and a
                custom-branded member app. Our goal is to become the club's sole
                digital partner, replacing the incumbent legacy systems piece by
                piece.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GoToMarketSection;
