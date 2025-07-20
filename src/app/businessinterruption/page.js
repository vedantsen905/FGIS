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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Hero Section with simple background */}
        <section className="bg-gray-100 py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Business Interruption Insurance
            </h1>
          </div>
        </section>

        {/* What is Business Interruption insurance? */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-6">
              What is Business Interruption insurance?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>Business Interruption Insurance covers the loss of gross profit caused by the interruption of your business from an insured event. It can help you pay ongoing costs of the business and protects profit margins until the business is back on its feet trading again at the same profit level as before the interruption.</p>
              <p>It can cover such things as wages for business owners, staff as well as ongoing expenses such as leases on equipment. Sometimes even more importantly it can cover for costs incurred to relocate the business (including temporary hire of equipment and rent for additional premises).</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-6">
              What you should consider?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="font-medium">
                This insurance can save your business from ruin and it can be easily added on to your Office or Shop Insurance, so why do so many companies not have it?
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#00AB9D] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Insure your gross annual income and select an indemnity period suitable for your business</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#00AB9D] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Consider additional costs of working and how portable your business is</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stats Section with animated counters */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-[#00AB9D] text-center">
            Did you know?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-[#00AB9D] text-5xl font-bold mb-4 animate-counter" data-target="226000000">
                $226m
              </div>
              <p className="text-gray-600 mb-4 text-lg">
                New Zealand incurred $266,340,393 in material damage and business interruption claims in 2017.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-[#00AB9D]">
                  (Insurance Council of New Zealand, Understanding Insurance, 2018)
                </p>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-[#00AB9D] text-5xl font-bold mb-4 animate-counter" data-target="120000000">
                $120m
              </div>
              <p className="text-gray-600 mb-4 text-lg">
                Insured New Zealand businesses have claimed $120 million over 10 years to 2018 as a result of damages from floods.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-[#00AB9D] italic">
                  (New Zealand Climate Change Research Institute, Estimating financial costs of climate change in New Zealand, 2018)
                </p>
              </div>
            </div>
            {/* Stat 3 - leave blank or add a relevant stat if available */}
          </div>
        </section>

        {/* Coverage Types with modern cards */}
        <section className="space-y-12">
          <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-8 text-center">
              Types of Business Interruption Insurance Covers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Property damage cover */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md group">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-[#00AB9D] font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Property damage cover</h3>
                <p className="text-gray-700">
                  This covers the financial costs of a temporary shutdown, rather than the material costs. Commercial property insurance typically covers property damage, and it's included in a business owner's policy.
                </p>
              </div>
              {/* Ship repairer's liability */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md group">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-[#00AB9D] font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ship repairer's liability</h3>
                <p className="text-gray-700">
                  This cover is designed for businesses that won't lose revenue following an insured loss but will incur additional costs to continue operating. This may include relocation expenses, overtime for staff, redirecting phones and internet, and advertising the change of address to customers.
                </p>
              </div>
              {/* Traditional cover */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md group">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-[#00AB9D] font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Traditional cover</h3>
                <p className="text-gray-700">
                  This includes Consequential Loss of Profits (ISR policy), Gross Profit, Annual Gross Profit, Annual Income, or Gross Income.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Details with interactive tabs */}
        <section className="space-y-12">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-8 text-center">
              What can it cover?
            </h2>
            <p className="text-gray-700 text-lg mb-8 text-center">
              Some of the benefits of a Business Interruption insurance policy may include:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-[#00AB9D] text-white text-left text-lg">
                    <th className="py-4 px-6 font-semibold">Coverage Type</th>
                    <th className="py-4 px-6 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 text-md">
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">Fixed costs</td>
                    <td className="py-4 px-6">Covers operating expenses and other costs still being incurred by the property (based on historical costs).</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">Civil authority ingress/egress</td>
                    <td className="py-4 px-6">Covers the government-mandated closure of business premises that directly causes loss of revenue such as street closures.</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">Revenue/income</td>
                    <td className="py-4 px-6">Covers the revenue/income that would have been earned during the period the business cannot operate.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">Extra expenses</td>
                    <td className="py-4 px-6">Reimburses for reasonable expenses (beyond the fixed costs) that allow the business to continue operating while the property is being repaired.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Exclusions and Case Study */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Exclusions with accordion */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-8">
              What is usually not covered?
            </h2>
            <div className="space-y-3">
              {[
                "Third Party Claims",
                "Fines and Penalties :  Does not cover fines and penalties payable due to delayed fulfilment or cancellation of a sale/service contract.",
                "Loss of Market : Does not cover loss of market.",
                "War and nuclear perils : Does not cover war and nuclear perils.",
                "Loss of goodwill : Does not cover loss of goodwill.",
                "Failure to recover book debts : Does not cover failure to recover book debts owing to destruction of records."
              ].map((exclusion, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{exclusion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study with animation */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <div className="absolute inset-0 bg-[#00AB9D]"></div>
            <div className="relative p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">
                CASE STUDY
              </h2>
              <div className="space-y-6 text-green-50 text-lg leading-relaxed">
                <p>Cara, a bakery shop owner from Invercargill, experienced an unexpected power outage one night that caused damage to their ovens. Luckily, with the help of business interruption insurance, the cost of repairs and replacements were fully covered, allowing Cara to quickly get back to serving their customers without any major financial setback.</p>
                <p>In addition to covering the cost of repairs and replacements, business interruption insurance can also provide financial support for the loss of income and ongoing expenses that occur during the interruption period. For Cara, this meant that they were able to keep their bakery running smoothly and maintain their loyal customer base, even during a difficult and unexpected event. Having the right insurance coverage in place can make all the difference in keeping a business afloat during challenging times.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose FG Insurance with animation */}
        <section className="bg-white p-10 rounded-2xl shadow-lg transform transition-all hover:scale-[1.005]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-8">
              Why choose FG Insurance?
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
                <span className="text-gray-700 text-lg">24/7 Roadside Assistance</span>
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

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-counter {
          transition: all 1s ease-out;
        }
      `}</style>
    </div>
  );
}
