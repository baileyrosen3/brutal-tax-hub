import type { ReactNode } from "react";
import React from "react";

// Placeholder icons - we can replace these with actual icons later
const FeatureIcon = ({ children }: { children: ReactNode }) => (
  <div className="bg-gray-800 p-4 rounded-full mb-4 inline-block">
    {children}
  </div>
);

const FeatureCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center h-full">
    <FeatureIcon>
      <svg
        className="w-8 h-8 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    </FeatureIcon>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Golf Software Agency?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard title="The Confluence of Crises">
            Clubs face escalating costs, critical labor shortages, and
            environmental pressures, creating a clear mandate for technological
            innovation.
          </FeatureCard>
          <FeatureCard title="The Shifting Member">
            A new generation of members demands a modern, seamless digital
            experience, creating a gap between expectations and reality at most
            clubs.
          </FeatureCard>
          <FeatureCard title="The 'All-In-One' Illusion">
            Incumbent software is often a patchwork of outdated, poorly
            integrated systems, leaving significant gaps in functionality and
            user experience.
          </FeatureCard>
          <FeatureCard title="The Strategic Opportunity">
            Key weaknesses in the market—lack of unification, dated UX, slow
            tech adoption, and poor cybersecurity—create a clear opening for a
            disruptive new platform.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
