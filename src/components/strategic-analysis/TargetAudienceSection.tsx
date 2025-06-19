import React from "react";
import { motion } from "framer-motion";

const TargetAudienceSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              6. Target Audience & Sales Strategy
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our ideal client is a top-tier private golf or country club that
              is committed to providing its members with a premium experience.
              We will initially target a select group of 10-15 influential clubs
              in key markets, focusing on those with a reputation for innovation
              and excellence. Our sales process will be consultative and
              relationship-driven. We will not employ a traditional sales team;
              instead, our founders and lead engineers will engage directly with
              club managers, board members, and golf professionals. We will
              offer a white-glove onboarding process and ongoing support,
              positioning ourselves as a long-term strategic partner dedicated
              to our clients' success. By focusing on a small number of
              high-value clients, we will ensure that we can deliver an
              unparalleled level of service and build a strong foundation for
              sustainable growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
