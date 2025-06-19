import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white dark:from-blue-900 dark:to-blue-700 py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Strategic Analysis: A Software Agency for the Private Golf & Country
            Club Market
          </h1>
          <p className="text-lg md:text-xl text-gray-300 dark:text-blue-200 mb-10">
            A comprehensive strategic foundation for a new software agency
            targeting the underserved private golf and country club market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 dark:bg-white dark:text-blue-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              View Full Analysis <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 dark:hover:text-blue-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Partnership Opportunities
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
