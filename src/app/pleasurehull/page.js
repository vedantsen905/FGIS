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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* Hero Section with animated gradient */}
        <section className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 animate-gradient-x"></div>
          <div className="relative z-10 py-20 px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Pleasure Hull Insurance at a Glance
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-green-100 opacity-90 animate-fade-in-up">
                Comprehensive protection for your watercraft with tailored coverage options
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* What is Pleasure Hull insurance? */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              What is Pleasure Hull Insurance?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                A hull means the body of the vessel and that is exactly what is covered by this insurance policy. Pleasure Hull insurance policy specifically designed to provide coverage to water vehicles like a boat, ship, yacht, fishing boat, steamer, etc. FG insurance provides financial protection in case of any damage to the vessel's body (hull) and the machinery due to risks covered by the policy. It covers the owners of watercraft or aircraft against loss resulting from damage to their craft.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              What you should consider?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Ships can be damaged at any time, if you own or operate a ship, the owner surely suffers great financial loss if working without the insurance. This covers all types of vessels operating into the oceans, lakes or rivers like bulk carrier, fishing boats, ships, tankers, cruises, yachts, jetties, and wharfs. The policy plays a great role by helping boat owners to secure their vehicles against machinery damage and destructions of hull, fitting, liabilities etc.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section with animated counters */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-green-700 text-center">
            Did you know?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-green-600 text-5xl font-bold mb-4 animate-counter" data-target="1030">
                0
              </div>
              <p className="text-gray-600 mb-4">
                Boats reported as stolen to police between 2015 and 2019.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700">
                  (New Zealand stuff.co.nz/national/crime July 2019)
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-green-600 text-5xl font-bold mb-4">
                650K+
              </div>
              <p className="text-gray-600 mb-4">
                Estimated the total number of boats in New Zealand according to the Marine Industry Association.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700 italic">
                  (New Zealand stuff.co.nz/national/crime July 2019)
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-green-600 text-5xl font-bold mb-4 animate-counter" data-target="20">
                0%
              </div>
              <p className="text-gray-600 mb-4">
                The recovery rate for stolen boats.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700 italic">
                  (New Zealand stuff.co.nz/national/crime July 2019)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types with tabs */}
        <section className="space-y-12">
          <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
              Types of Pleasure Hull Insurance Covers
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Vessels insurance */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md group">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Vessels insurance</h3>
                <p className="text-gray-700">
                  This covers accidental loss or damage to the vessel anywhere in the agreed navigational limits set by the policy.
                </p>
              </div>

              {/* Ship repairer's liability */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md group">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ship repairer's liability</h3>
                <p className="text-gray-700">
                  This can cover the legal liability ship repairers face for loss and damage occurring while a vessel or craft is in their care, custody, or control.
                </p>
              </div>

              {/* Third Party Liability */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md group">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Third Party Liability</h3>
                <p className="text-gray-700">
                  This covers third party liability such as cover for losses or damages caused by your vessels to other ships or boats or injury to the ship workers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Details with interactive tabs */}
        <section className="space-y-12">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-green-700 mb-8">
              What can it cover?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              There are different types of marine-related insurance policies – the choice of policy will vary based on the specific needs of the insured. Depending on the type of policy, Pleasure Hull insurance policies can cover:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-green-600 text-white text-left text-lg">
                    <th className="py-4 px-6 font-semibold">Type of Cover</th>
                    <th className="py-4 px-6 font-semibold">Potential benefits</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 text-md">
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Damage to the hull of the ship or vessel, including its machinery and equipment.
                    </td>
                    <td className="py-4 px-6">
                      Coverage for damage or loss to the ship due to fire, burglary and/or theft.
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Explosion and lightning
                    </td>
                    <td className="py-4 px-6">
                      Cover for explosion and lightning may or may not be covered under the more common coverage for fire.
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Malicious damage
                    </td>
                    <td className="py-4 px-6">
                      Damage caused by Malicious acts, vandalism, and sabotage by third parties.
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">Insured events</td>
                    <td className="py-4 px-6">
                      Covers only the specific events as defined by the insurer. Common examples include, but are not limited to fire, collision and/or overturning.
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">Collision</td>
                    <td className="py-4 px-6">
                      Damage caused due to the collision of the carrying vehicle, vessel, train, airplane.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">Damage during loading and unloading</td>
                    <td className="py-4 px-6">
                      Caused by droppage if this is not an excluded event listed under a specified risks policy.
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
            <h2 className="text-3xl font-bold text-green-700 mb-8">
              What is usually not covered?
            </h2>
            <div className="space-y-3">
              {[
                "Loss or damage due to willful negligence and misconduct.",
                "Loss or damage due to delay.",
                "Financial default or insolvency.",
                "Loss or damage due to wire, strike, riot, and civil commotion.",
                "Loss or damage arising from the use of nuclear fission, weapon, or any other radioactive force.",
                "1/4th of collision damage.",
                "Removal of wreck.",
                "Contamination due to radioactive rays.",
                "Attack or damage from biological, biochemical, chemical, or electromagnetic weapons.",
                "Damage done by the crew members under the influence of alcohol.",
                "Intentional damage to vessel.",
                "Damage done to the vessel due to terrorist activities.",
                "Involvement in dangerous activities which may lead to hull damage.",
                "Sailing the vessel in a sea storm after issuance of warming."
              ] .map((exclusion, index) => (
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
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800"></div>
            <div className="relative p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">
                CASE STUDY
              </h2>
              <div className="space-y-6 text-green-50 text-lg leading-relaxed">
                <p>
                  Nicola's private boat was his pride and joy. He loved nothing more than spending time on the water with his family and friends, exploring the beautiful coastline and fishing for his favorite catch. One day, while on a fishing trip, disaster struck. Another boat's controls malfunctioned, and it collided with Nicola's boat, causing significant damage to the fiberglass and paint.
                </p>
                <p>
                  Nicola was devastated. His beloved boat was his sanctuary, and he couldn't bear the thought of losing it. However, he had the foresight to obtain Pleasure Hull insurance, which covered the losses, damages, and cost of repairs resulting from the accident. Thanks to his insurance coverage, Nicola was able to get his boat repaired quickly and return to enjoying his time on the water with his loved ones.
                </p>
                <p>
                  Fortunately, his insurance policy covered the costs of repairing the property damage caused by the leak, including repairing the ceiling and the roof drain. Additionally, it also covered the cost of replacing John's furniture and other belongings that were damaged due to water exposure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose FG Insurance with animation */}
        <section className="bg-white p-10 rounded-2xl shadow-lg transform transition-all hover:scale-[1.005]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-green-700 mb-8">
              Why choose FG Insurance?
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              At FG Insurance, we offer the clients an option to include several extras to their basic marine insurance. These include, but are not limited to sports equipment, cover against costs associated with an oil spill from the craft, coverage for any other driver or a berth holders liability event.
            </p>
            <div className="mt-8">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-105">
                Get a Free Quote
              </button>
            </div>
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