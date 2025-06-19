import React from "react";
import { motion } from "framer-motion";

const CompetitiveAnalysis: React.FC = () => {
  const vendors = [
    {
      name: "Club Caddie",
      teeSheet: "Native",
      pos: "Native",
      billing: "Native",
      security: "Limited",
    },
    {
      name: "Lightspeed Golf",
      teeSheet: "Native",
      pos: "Native",
      billing: "Native",
      security: "Limited",
    },
    {
      name: "Golfmanager",
      teeSheet: "Native",
      pos: "Native",
      billing: "Native",
      security: "High",
    },
    {
      name: "Club Prophet",
      teeSheet: "Native",
      pos: "Native",
      billing: "Native",
      security: "Limited",
    },
    {
      name: "foreUP",
      teeSheet: "Native",
      pos: "Native",
      billing: "Native",
      security: "Limited",
    },
    {
      name: "Northstar",
      teeSheet: "Native",
      pos: "Native",
      billing: "Native",
      security: "Limited",
    },
  ];

  const gaps = [
    {
      title: "Lack of True Unification",
      description:
        "The most significant weakness is the absence of a truly unified platform built on a single database with a modern, open API architecture.",
    },
    {
      title: "Dated User Experience (UX)",
      description:
        "Many incumbent systems, while functional, suffer from clunky, unintuitive interfaces that feel a decade old.",
    },
    {
      title: "Slow Adoption of Emerging Technology",
      description:
        "The core platforms have been slow to natively integrate next-generation technologies like AI and advanced analytics.",
    },
    {
      title: "Cybersecurity as an Afterthought",
      description:
        "In an era where data breaches are a major liability, a platform that prioritizes robust, built-in security would address a critical, underserved need.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Incumbent Technology Stack
            </h1>
            <p className="text-lg text-gray-600">
              An analysis of the current golf management software market.
            </p>
          </motion.div>

          <div className="space-y-16 max-w-5xl mx-auto">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                The "All-In-One" Illusion
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                The assertion that the private club software market is
                "untouched" is not entirely accurate; a more precise
                characterization is that it is underserved and ripe for
                disruption. The landscape is dominated by a handful of
                established "all-in-one" vendors, but their market penetration
                has created a veneer of comprehensiveness that masks significant
                weaknesses in integration, user experience, and technological
                innovation. The existence of a vibrant and fragmented ecosystem
                of niche vendors serves as the most compelling evidence that the
                incumbent platforms are failing to meet the full spectrum of
                modern club needs.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8 text-center">
                Competitive Analysis
              </h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Vendor
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Tee Sheet
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          POS
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Billing
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Security
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {vendors.map((vendor, index) => (
                        <tr
                          key={vendor.name}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                            {vendor.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {vendor.teeSheet}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {vendor.pos}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {vendor.billing}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                vendor.security === "High"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {vendor.security}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                The Niche Vendor Ecosystem
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                The most compelling evidence of the incumbents' shortcomings is
                the proliferation of specialized, best-in-class vendors that
                have built entire businesses by filling the functional gaps left
                by the major platforms. A club's need to contract with multiple
                software providers to create a complete solution exposes the
                "all-in-one" promise as an illusion.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8 text-center">
                Identifying the Strategic Gaps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gaps.map((gap, index) => (
                  <motion.div
                    key={gap.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500"
                  >
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      {gap.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{gap.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompetitiveAnalysis;
