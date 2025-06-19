import React from "react";

const Partnership = () => {
  return (
    <section id="strategy" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            {/* Placeholder for an image */}
            <div className="bg-gray-700 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">
                Image: "Wedge" product diagram
              </span>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold mb-4">
              The "Wedge & Expand" Strategy
            </h2>
            <p className="text-gray-400 mb-6">
              Our market entry is focused and strategic. We will "wedge" into
              the market with a best-in-class solution to a critical pain point,
              then leverage our modern, API-first platform to expand our
              footprint over time.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Phase 1 (The Wedge):</strong> Launch with a superior
                Member Experience mobile app or an IoT-based Operational ROI
                suite.
              </li>
              <li>
                <strong>Phase 2 (Expansion):</strong> Introduce complementary
                modules like advanced reservations, event management, and GPS
                cart tracking.
              </li>
              <li>
                <strong>Phase 3 (Innovation):</strong> Roll out market-leading
                features like automated irrigation control and dynamic pricing
                engines.
              </li>
              <li>
                <strong>The Foundation:</strong> A unified, API-first platform
                ensures all modules work seamlessly together from day one.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
