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
              Body Corporate Insurance
            </h1>
          </div>
        </section>

        {/* What is Body Corporate insurance? */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-6">
              What is Body Corporate insurance?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>Body Corporate insurance is an essential type of insurance coverage designed for property owners of residential and commercial buildings managed by a Body Corporate or a Sectional Title Body. This insurance covers not only the building but also the fixtures, fittings, and common areas within the complex.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-6">
              What you should consider?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>As owners of units within the complex are represented by the Body Corporate or Sectional Title Body in managing and maintaining the property, it is imperative that they consider taking out Body Corporate insurance to protect their investment and ensure they have adequate coverage in the event of damage or loss.</p>
              <p>Therefore, if you own or are considering purchasing a property that is managed by a Body Corporate or Sectional Title Body, you should seriously consider obtaining Body Corporate insurance to safeguard your investment.</p>
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
              <div className="text-[#00AB9D] text-5xl font-bold mb-4 animate-counter" data-target="1030">
                1,030
              </div>
              <p className="text-gray-600 mb-4">
                If you own a unit in a unit title development, you are a member of the body corporate.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-[#00AB9D]">
                  (New Zealand stuff.co.nz/national/crime July 2019)
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-[#00AB9D] text-5xl font-bold mb-4">
                1,771,300
              </div>
              <p className="text-gray-600 mb-4">
                Estimates there were NZ households at the end of June 2020.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-[#00AB9D] italic">
                  (Statistics NZ 2020)
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-[#00AB9D] text-5xl font-bold mb-4 animate-counter" data-target="15400">
                15,400
              </div>
              <p className="text-gray-600 mb-4">
                Total number of households renting their homes increased by in the year to June 2020.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-[#00AB9D] italic">
                  (Statistics NZ 2020)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types with modern cards */}
        <section className="space-y-12">
          <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-8 text-center">
              Types of Body Corporate Insurance Covers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Fixed sum insured */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md group">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fixed sum insured</h3>
                <p className="text-gray-700">
                  This is the most common type of coverage available. The insurance provider and the client agree on a total sum insured, and in case of damage or destruction to the property, the insurance company will pay to rebuild the house up to the agreed amount.
                </p>
              </div>

              {/* Indemnity (present day value) */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md group">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Indemnity (present day value)</h3>
                <p className="text-gray-700">
                  This type of policy provides coverage that is approximately equal to the depreciated replacement cost of the house (excluding the value of the land) after accounting for its age and condition. However, some older homes may not qualify for this type of cover unless they have undergone a certain degree of modernization, which may vary according to local laws and regulations.
                </p>
              </div>

              {/* Total replacement */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md group">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Total replacement</h3>
                <p className="text-gray-700">
                  Under this policy, the insurance provider undertakes to rebuild or repair the residential or commercial property up to the total number of square meters under insurance cover, including the professional fees and demolition costs involved in the reconstruction process, in case the house is destroyed.
                </p>
              </div>

              {/* Deductibles and limits of liability */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md group">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Deductibles and limits of liability</h3>
                <p className="text-gray-700">
                  Regardless of the type of coverage a client chooses, there are deductibles and limits of liability (or sum insured) applicable to the payout value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Details with interactive tabs */}
        <section className="space-y-12">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-8">
              What can it cover?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Some of the benefits a body corporate insurance policy may include:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-[#00AB9D] text-white text-left text-lg">
                    <th className="py-4 px-6 font-semibold">Coverage Type</th>
                    <th className="py-4 px-6 font-semibold"> Description</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 text-md">
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Accidental loss or damage to building and common area contents
                    </td>
                    <td className="py-4 px-6">
                      Protects against accidental loss or damage to common areas such as floors, walls, ceilings, balconies, gardens, lifts, car parks, pools, spas, and tennis courts, as well as building contents.
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Improvements installed by lot/unit owners
                    </td>
                    <td className="py-4 px-6">
                      Covers accidental loss or damage to improvements made by lot/unit owners that were not included in the building valuation.
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Natural disasters and catastrophic events
                    </td>
                    <td className="py-4 px-6">
                      Provides cover against damage caused by natural disasters such as earthquakes, landslides, volcanic eruptions, hydrothermal activity, tsunamis, and wildfires. It also covers sudden escalation of building costs following a declared catastrophic event.
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold"> Legal liability</td>
                    <td className="py-4 px-6">
                      Indemnifies the Body Corporate as common property owners against legal liability for personal injury or property damage.
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold"> Protection for office bearers and committee members</td>
                    <td className="py-4 px-6">
                      Protects office bearers and committee members against legal liability to pay compensation for wrongful acts, errors, or omissions.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold"> Body Corporate machinery</td>
                    <td className="py-4 px-6">
                      Covers unforeseen damage to Body Corporate machinery such as garage motors, air conditioning plant, lifts, etc.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">  Professional costs and legal expenses</td>
                    <td className="py-4 px-6">
                      Provides cover for professional costs and legal expenses.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">Loss of income for volunteers</td>
                    <td className="py-4 px-6">
                      Covers loss of income for volunteers who sustain bodily injury while working on behalf of the Body Corporate.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">  Fraudulent misappropriation</td>
                    <td className="py-4 px-6">
                      Provides protection against fraudulent misappropriation of Body Corporate funds or property.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold"> Workers compensation</td>
                    <td className="py-4 px-6">
                      Covers workers compensation wherever required or permitted by state law.
                    </td>
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
                "Domestic appliances",
                "Carpets, blinds, and curtains",
                "Removable fixtures",
                "Furniture such as couches, fridges etc.",
                "Temporary floors or floating floors",
                "Single unit air conditioners",
                "Dishwashers",
                "Ceiling coverings",
                "Carpet underlay",
                "Temporary walls",
                "Single unit hot water systems",
                "Loss of rent by tenant default"
              ].map((exclusion, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    {exclusion}
                  </span>
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
                <p>Mr. Lee is a resident of Wellington and part of a residential body corporate that represents 120 residential units, including owner-occupied and rented units. Recently, one of his tenants caused damage to the wall and main door due to an altercation with his girlfriend and also broke the bed base. Additionally, the tenant had not paid rent for eight weeks and when they vacated the property, Mr. Lee discovered that some appliances were missing.</p>
                <p>Fortunately, Mr. Lee had taken out a Body Corporate insurance policy that covered all the damages caused by the tenant, as well as the costs of missing appliances and loss of rent. The policy also covered the cost of replacing Mr. Lee's furniture.</p>
                <p>Thanks to his insurance policy, Mr. Lee was able to recover all the costs and damages and quickly prepare the unit for a new tenant.</p>
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
                <span className="text-gray-700 text-lg">Area Based Replacement Cover for Non-Natural Disaster Damage</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Built-In Price Surge Cover</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18m-7-4v4m0 0H5m2 0h2m5 4a8 8 0 01-8-8 4 4 0 014-4h8a4 4 0 014 4 8 8 0 01-8 8z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Custom Cover to Suit Diverse Needs</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Adjustable Cover Limits</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Optional Cover</span>
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