import React from "react";
import { motion } from "framer-motion";

const ExecutiveSummarySection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            1. Executive Summary
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            This document outlines the strategic foundation for a new software
            agency targeting the underserved private golf and country club
            market. We will adopt the persona of an exclusive, high-end "digital
            concierge," offering bespoke, seamlessly integrated technology
            solutions that elevate the member experience and streamline club
            operations. Our go-to-market strategy is a "wedge and expand"
            approach, beginning with a specialized, best-in-class tournament
            management system and leveraging its success to introduce a full
            suite of integrated products. We will bypass the traditional sales
            model, instead focusing on building deep relationships with a select
            group of influential clubs, positioning ourselves as long-term
            strategic partners rather than mere vendors. This approach, combined
            with a commitment to superior design and cutting-edge technology,
            will establish us as the premier digital provider for the elite club
            market.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ExecutiveSummarySection;
