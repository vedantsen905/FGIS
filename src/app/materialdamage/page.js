"use client";
import { useState } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const [activeTab, setActiveTab] = useState('coverage');
  const [expandedExclusion, setExpandedExclusion] = useState(null);

  const toggleExclusion = (index) => {
    setExpandedExclusion(expandedExclusion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* Hero Section */}
        <section className="bg-gray-100 py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Material Damage Insurance at a Glance
            </h1>
          </div>
        </section>

        {/* What is Material Damage Insurance? */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-6">
              What is Material Damage Insurance?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Material damage insurance is part of a business insurance solution that covers physical assets such as buildings, contents, equipment, fit-out, and stock against accidental loss or damage caused by events like fire or theft. The policy includes indemnity and replacement cover and may also cover theft and fraud.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-6">
              What You Should Consider
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Following a fire, flood, burglary, earthquake, or similar event, there may be obvious destruction, loss, or damage to buildings, plant, and stock. Such physical loss or damage is typically insured under a Material Damage policy, which is a modern form of fire and perils insurance.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-[#00AB9D] text-center">
            Did You Know?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-[#00AB9D] text-4xl font-bold mb-4">$239M</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Total Claims Incurred</h3>
              <p className="text-gray-600 mb-4">
                Commercial Material Damage and Business Interruption Net Claims Incurred in New Zealand (12 months to September 2019).
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block">
                <p className="text-sm font-medium text-green-700">
                  (Insurance Council of New Zealand 2019)
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-[#00AB9D] text-4xl font-bold mb-4">52.36%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Loss Ratio</h3>
              <p className="text-gray-600 mb-4">
                Commercial Material Damage and Business Interruption Loss Ratio in New Zealand (12 months to September 2019).
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block">
                <p className="text-sm font-medium text-green-700 italic">
                  (Insurance Council of New Zealand 2019)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section className="space-y-12">
          <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-8 text-center">
              Types of Material Damage Insurance Covers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Replacement Value */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Replacement Value (RV)</h3>
                <p className="text-gray-700">
                  Covers the cost of replacing your property if stolen or destroyed, based on current replacement value.
                </p>
              </div>

              {/* Indemnity Value */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Indemnity Value (IV)</h3>
                <p className="text-gray-700">
                  Pays the value of the item at the time of loss, restoring you to the same financial position before the loss.
                </p>
              </div>

              {/* Stock Coverage */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Stock Coverage</h3>
                <p className="text-gray-700">
                  Provides for the replacement of materials in trade and customers goods in case of damage or loss.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="space-y-12">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-8">
              What Does Material Damage Insurance Cover?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Material damage insurance policy may offer a range of benefits:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Property damages or bodily injury you may have caused</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Coverage for constructive loss</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Alternative residential accommodation after sudden loss</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Accidental loss to docks, piers, wharves, or road bridges</span>
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Indemnity through payment, repair, or replacement</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Burglary cover for theft or attempted theft</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Exclusions and Case Study */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Exclusions */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-8">
              What's Typically Excluded?
            </h2>
            <ul className="space-y-5 text-gray-700 text-lg">
              {[
                "Terrorism",
                "Electronic Data",
                "Building defects",
                "Faulty or defective design, materials or workmanship",
                "Interruption of utility systems",
                "Collapse or cracking of buildings",
                "Larceny",
                "Coastal or river erosion",
                "Willful acts or gross negligence",
                "Cessation of work or delay",
                "War or warlike operations",
                "Nuclear risks"
              ].map((exclusion, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span>{exclusion}</span>
                </li>
              ))}
            </ul>
            <h6 className='text-black font-bold mt-6'>Disclaimer:</h6>
            <p className='text-black'>The above exclusions are indicative in nature. For detailed exclusions, please refer to the policy wordings.</p>
          </div>

          {/* Case Study */}
          <div className="bg-[#00AB9D] p-8 rounded-2xl text-white">
            <h2 className="text-3xl font-bold text-white mb-8">
              CASE STUDY
            </h2>
            <div className="space-y-6 text-green-50 text-lg leading-relaxed">
              <p>
                After the incident, Walter was understandably upset and concerned about the damage to his home. However, having Material Damage insurance gave him peace of mind knowing that the costs of repairing the damage would be covered.
              </p>
              <p>
                A representative from the insurance company promptly visited Walter's home to assess the damage. It was determined that the water ingress had caused damage to the ceiling tiles, roof, and walls. The insurance company covered the cost of repairs, including carpentry work and painting to restore the area.
              </p>
              <p>
                Walter was relieved by the quick and efficient service. Within days, the repairs were completed, and his home was restored to its pre-incident state, thanks to his Material Damage insurance policy.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose FG Insurance */}
        <section className="bg-white p-10 rounded-2xl shadow-lg">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-8">
              Why Choose FG Insurance?
            </h2>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Peace of Mind at Affordable Rates</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Flexible Plans</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18m-7-4v4m0 0H5m2 0h2m5 4a8 8 0 01-8-8 4 4 0 014-4h8a4 4 0 014 4 8 8 0 01-8 8z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">24/7 Claims Assistance</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Fast and Simple Claim Service</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Modern Policy Wordings</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Competitive Pricing</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}