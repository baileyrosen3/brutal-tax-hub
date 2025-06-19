import React from "react";
import { motion } from "framer-motion";

const DigitalConciergeSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            3. Our Persona: The Digital Concierge
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We are not a software company; we are a digital concierge. Our brand
            will be built on the pillars of exclusivity, sophistication, and
            unparalleled service. We will be the "Brioni" or "Hermès" of club
            software—a name synonymous with quality, craftsmanship, and a deep
            understanding of the luxury market. Our visual identity will be
            clean, minimalist, and elegant, eschewing the cluttered, corporate
            look of our competitors. Our communication will be refined and
            personal, reflecting our commitment to building long-term, strategic
            partnerships with our clients. We will be selective in our client
            acquisition, focusing on clubs that share our vision and commitment
            to excellence. This persona will permeate every aspect of our
            business, from our product design to our sales and support
            processes.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default DigitalConciergeSection;
