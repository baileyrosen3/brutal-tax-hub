import React from "react";

const DecisionMaking: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Navigating the Clubhouse
            </h1>
            <p className="text-lg text-gray-600">
              Understanding the private club's technology adoption and
              decision-making process.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                The Challenge of Club Governance
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Successfully selling software to a private country club requires
                a nuanced understanding of its unique governance structure and
                culture. Unlike a typical B2B sales process, the path to
                adoption is not linear and involves navigating a complex
                interplay between a volunteer board, professional management,
                and influential member committees. A failure to appreciate these
                dynamics is a primary reason why technology initiatives stall or
                fail. An effective strategy must be tailored to the distinct
                roles and motivations of each key stakeholder.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
                The Power Triangle: Board, GM, and Committees
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Decision-making power in a private club is distributed among
                three key entities. A successful sales process requires securing
                buy-in from all three.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-500">
                  <div className="text-center mb-4">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                      📋
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Board of Directors
                    </h3>
                    <p className="text-sm text-blue-600 font-medium">
                      The Strategic Gatekeepers
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Role & Motivation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Operates at the 30,000-foot level, focused on
                        governance, long-term financial health, and strategic
                        vision. Motivated by initiatives that increase club
                        value and ensure relevance.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Selling Strategy
                      </h4>
                      <p className="text-sm text-gray-600">
                        Strategic, data-driven pitch focused on ROI, cost
                        savings, revenue growth, and alignment with long-range
                        strategic plans. Facts and figures, not just features.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-green-500">
                  <div className="text-center mb-4">
                    <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                      🎯
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      General Manager
                    </h3>
                    <p className="text-sm text-green-600 font-medium">
                      The Operational Champion
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Role & Motivation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Central bridge between board strategy and daily
                        operations. Feels the pain of inefficient processes,
                        labor shortages, and member complaints from antiquated
                        systems.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Selling Strategy
                      </h4>
                      <p className="text-sm text-gray-600">
                        Consultative approach solving specific operational
                        headaches. Provide compelling business case they can use
                        to advocate internally. Essential internal champion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-purple-500">
                  <div className="text-center mb-4">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                      👥
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Committees
                    </h3>
                    <p className="text-sm text-purple-600 font-medium">
                      The Influential Advisors
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Role & Motivation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Member-led groups (Green, House, Finance, Long-Range
                        Planning) that are passionate about specific areas.
                        Often training ground for future board members.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Selling Strategy
                      </h4>
                      <p className="text-sm text-gray-600">
                        Tailor message to each committee's focus. Green
                        Committee: turf health. Finance Committee: ROI and
                        savings. Gain endorsements to smooth board approval.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                The Purchasing and Adoption Lifecycle
              </h2>

              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  The process of purchasing and implementing new technology in a
                  club environment is methodical and often lengthy. It typically
                  follows a structured path from identification to
                  implementation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                    1
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Identify Need
                  </h4>
                  <p className="text-xs text-gray-600">
                    GM or department head recognizes operational challenge
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 text-green-800 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                    2
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Research & Build Case
                  </h4>
                  <p className="text-xs text-gray-600">
                    Vet vendors and develop business justification
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                    3
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Committee Review
                  </h4>
                  <p className="text-xs text-gray-600">
                    Socialize with relevant committees for feedback
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 text-orange-800 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                    4
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Board Approval
                  </h4>
                  <p className="text-xs text-gray-600">
                    Finance Committee and full Board capital approval
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">
                  ⚠️ Common Barriers
                </h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>
                    • Natural resistance to change in traditional club
                    environments
                  </li>
                  <li>
                    • Need for demonstrably better and easy-to-use solutions
                  </li>
                  <li>• Wide range of user comfort levels with technology</li>
                  <li>
                    • Requirement for comprehensive training and ongoing support
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-gradient-to-r from-green-50 to-blue-50 p-6 md:p-8 rounded-lg border border-green-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                The Strategic Opportunity
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    The Challenge
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Most clubs lack a formal "Technology Committee," creating a
                    structural gap in tech-focused advocacy and decision-making.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    The Opportunity
                  </h3>
                  <p className="text-gray-600 text-sm">
                    This elevates the GM's role as the de facto Chief Technology
                    Advocate, making them the critical strategic partner for any
                    software agency.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Success Strategy
                </h4>
                <p className="text-gray-600 text-sm">
                  Position as a strategic partner to the GM, providing
                  educational materials, ROI calculators, case studies, and
                  frameworks needed to build consensus and lead digital
                  transformation.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DecisionMaking;
