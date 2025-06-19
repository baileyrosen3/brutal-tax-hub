import React from "react";
import { motion } from "framer-motion";

const CompetitiveLandscapeSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">
          Competitive Landscape Analysis
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="pb-4 text-gray-800 font-semibold">Vendor</th>
                  <th className="pb-4 text-gray-800 font-semibold">
                    Market Position
                  </th>
                  <th className="pb-4 text-gray-800 font-semibold">
                    Key Strengths
                  </th>
                  <th className="pb-4 text-gray-800 font-semibold">
                    Strategic Gaps
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 font-medium text-gray-800">
                    Club Caddie
                  </td>
                  <td className="py-4 text-gray-600">Market Leader</td>
                  <td className="py-4 text-gray-600">Comprehensive suite</td>
                  <td className="py-4 text-gray-600">Legacy architecture</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 font-medium text-gray-800">
                    Lightspeed Golf
                  </td>
                  <td className="py-4 text-gray-600">Strong POS Focus</td>
                  <td className="py-4 text-gray-600">Retail integration</td>
                  <td className="py-4 text-gray-600">
                    Limited club operations
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 font-medium text-gray-800">
                    Golfmanager
                  </td>
                  <td className="py-4 text-gray-600">European Leader</td>
                  <td className="py-4 text-gray-600">Tee time management</td>
                  <td className="py-4 text-gray-600">US market penetration</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-gray-800">
                    Supreme Golf
                  </td>
                  <td className="py-4 text-gray-600">Niche Player</td>
                  <td className="py-4 text-gray-600">Course management</td>
                  <td className="py-4 text-gray-600">Limited scalability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CompetitiveLandscapeSection;
