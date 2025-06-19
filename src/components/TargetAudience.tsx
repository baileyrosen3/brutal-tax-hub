import React, { useState } from "react";

type TabId = "gm" | "board" | "committees";

const TargetAudience = () => {
  const [activeTab, setActiveTab] = useState<TabId>("gm");

  const tabs: { id: TabId; title: string }[] = [
    { id: "gm", title: "The General Manager" },
    { id: "board", title: "The Board of Directors" },
    { id: "committees", title: "The Committees" },
  ];

  const content = {
    gm: {
      title: "Empowering the Operational Champion",
      points: [
        "Position ourselves as a strategic partner to the GM, focusing on solving their most acute operational pains.",
        'Provide the GM with a clear, data-driven business case to "manage up" and advocate for the investment.',
        "Our consultative sales process makes the GM the essential internal champion for digital transformation.",
      ],
    },
    board: {
      title: "Aligning with the Strategic Gatekeepers",
      points: [
        "Present a strategic, data-driven pitch focused on long-term value, ROI, and future-proofing the institution.",
        "Emphasize our industry-leading cybersecurity posture to address a critical and under-served board-level concern.",
        "Demonstrate clear alignment with the club's long-range strategic plan and financial health.",
      ],
    },
    committees: {
      title: "Engaging the Influential Advisors",
      points: [
        "Tailor the message to each committee's specific area of interest (e.g., turf health for Green, ROI for Finance).",
        "Gain endorsements from these influential groups to smooth the path to final board approval.",
        "Provide specialized data and insights that empower committees to make informed recommendations.",
      ],
    },
  };

  const activeContent = content[activeTab];

  return (
    <section id="solutions" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Navigating the Clubhouse: Our Go-to-Market Plan
        </h2>
        <div className="flex justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold rounded-t-lg transition-colors duration-300 ${
                activeTab === tab.id
                  ? "bg-gray-800 text-white"
                  : "bg-gray-700 text-gray-400 hover:bg-gray-600"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="bg-gray-800 p-8 rounded-b-lg rounded-r-lg shadow-xl">
          <h3 className="text-2xl font-bold mb-4">{activeContent.title}</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {activeContent.points.map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
