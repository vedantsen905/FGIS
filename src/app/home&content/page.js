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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-r from-green-600 to-green-800 animate-gradient-x">
          <div className="absolute inset-0 bg-noise opacity-10"></div>
          <div className="relative z-10 py-24 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Home & Contents Insurance
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-green-100/90 animate-fade-in-up">
                Comprehensive protection for your home with tailored coverage options
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50/80 to-transparent"></div>
        </section>

        {/* What is Home Insurance */}
        <section className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-full flex flex-col">
              <h2 className="text-3xl font-bold text-green-700 mb-6">
                What is home & contents insurance?
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed flex-grow">
                <p>Home insurance is an effective tool for protection against financial risk in case of loss or damage to one's home. It can additionally cover the home's contents in case of damage, loss, or theft.</p>
                <p>When it comes to home insurance, a client can choose to insure the house against sudden, unforeseen, and accidental damage arising from all sorts of contingencies, or choose to seek insurance against certain defined perils such as fire, theft, flood, storm, or earthquake.</p>
                <p>Contents insurance can cover items including household possessions, furniture, clothes, appliances, and other furnishings. Most contents policies have claims limits, especially for valuables such as jewelry, money, documents, and collections.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-3xl shadow-xl text-white">
            <div className="h-full flex flex-col">
              <h2 className="text-3xl font-bold text-white mb-6">
                What you should consider
              </h2>
              <div className="space-y-6 text-green-50 text-lg leading-relaxed flex-grow">
                <p className="text-xl font-medium">If your home and its contents were damaged or destroyed in a natural disaster or accident, or all your valuables were stolen, could you afford to replace them?</p>
                <div className="mt-6 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <p className="font-medium">Key considerations:</p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-200 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Replacement value vs market value</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-200 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Specific coverage for high-value items</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-200 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Additional living expenses coverage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-green-700 text-center">
            Did you know?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100 overflow-hidden">
              <div className="relative">
                <div className="absolute -top-6 -right-6 h-24 w-24 bg-green-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="text-green-600 text-4xl font-bold mb-3 relative">
                  $609,379,099
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-lg">
                was paid out in claims for domestic buildings and contents in 2019.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700">
                  (Insurance Council of New Zealand, Annual Review, 2019)
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100 overflow-hidden">
              <div className="relative">
                <div className="absolute -top-6 -right-6 h-24 w-24 bg-green-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <p className="text-gray-600 mb-4 text-lg">
                  A very likely increasing trend in days with very high or extreme fire danger was recorded at 6 sites - Napier, Lake Tekapo, Queenstown, Gisborne, Masterton, and Gore for 1997-2019.
                </p>
              </div>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700 italic">
                  (Ministry for the Environment: Climate 2020)
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100 overflow-hidden">
              <div className="relative">
                <div className="absolute -top-6 -right-6 h-24 w-24 bg-green-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="text-green-600 text-4xl font-bold mb-3 relative">
                  $46,288
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-lg">
                7 out of 10 burglaries are residential burglaries.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700 italic">
                  (New Zealand Police, 'Crime in New Zealand at a Glance', September 2020)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              What are the types of covers available?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Choose the right protection for your home with our flexible coverage options
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Fixed Sum Insured */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100/80 w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <span className="text-green-700 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Fixed sum insured</h3>
                </div>
                <div className="text-gray-700 leading-relaxed flex-grow">
                  <p>This is the most common type of coverage available. The insurance provider and the client agree on a total sum insured. In the event of damage or destruction to the property, the insurance company will pay to rebuild the house up to the agreed amount/sum insured.</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-sm font-medium text-green-700">
                     
                  </div>
                </div>
              </div>
            </div>

            {/* Indemnity */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100/80 w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <span className="text-green-700 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Indemnity (present-day value)</h3>
                </div>
                <div className="text-gray-700 leading-relaxed flex-grow">
                  <p>This type of policy provides coverage that is approximately equal to the depreciated replacement cost of the house (excluding the value of the land), after accounting for its age and condition. Some older homes may not qualify unless they have undergone modernization.</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-sm font-medium text-green-700">
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Total Replacement */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100/80 w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <span className="text-green-700 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Total replacement</h3>
                </div>
                <div className="text-gray-700 leading-relaxed flex-grow">
                  <p>Under this policy, if the house is destroyed, the insurance provider will undertake to rebuild or repair the house up to the total number of square meters under insurance cover, including the professional fees and demolition costs involved in the reconstruction process.</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-sm font-medium text-green-700">
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="space-y-12">
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
                What can it cover?
              </h2>
              <p className="text-gray-700 text-lg mb-8 text-center">
                Home and contents insurance can provide extensive protection against possible loss or damage – with a choice of options, spanning different levels of cover and inclusions.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-4">
                  <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                    <div className="bg-green-100 p-1.5 rounded-full mr-4 mt-1 flex-shrink-0">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Cover against physical loss or damage during the policy term.
                    </span>
                  </li>
                  <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                    <div className="bg-green-100 p-1.5 rounded-full mr-4 mt-1 flex-shrink-0">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Damage caused by natural disasters such as earthquakes, landslides, volcanic eruptions, hydrothermal activity, tsunamis, and wildfires.
                    </span>
                  </li>
                  <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                    <div className="bg-green-100 p-1.5 rounded-full mr-4 mt-1 flex-shrink-0">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Liability cover for injury or loss of life to a third party or loss of a third party's property on a building the client occupies or owns.
                    </span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                    <div className="bg-green-100 p-1.5 rounded-full mr-4 mt-1 flex-shrink-0">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Cover for alternative accommodation in case the home is inaccessible due to an emergency in the area or if the home becomes uninhabitable.
                    </span>
                  </li>
                  <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                    <div className="bg-green-100 p-1.5 rounded-full mr-4 mt-1 flex-shrink-0">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Cover for the cost of replacing keys or locks that can provide unauthorized access to the house following theft, loss or illegal/unsanctioned duplication of your keys.
                    </span>
                  </li>
                  <li className="flex items-start p-4 bg-gray-50 rounded-xl">
                    <div className="bg-green-100 p-1.5 rounded-full mr-4 mt-1 flex-shrink-0">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Access to approved repairers, in addition to a client's preferred choices.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusions and Case Study */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Exclusions */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              What is usually not covered?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Although the terms of a policy may vary across insurance providers and the type of policy, in general, a client may not be covered in the following situations:
            </p>
            
            <div className="space-y-4">
              {[
                "If the home is unoccupied for more than 60 continuous days.",
                "Rust, corrosion, gradual deterioration, depreciation or wear and tear.",
                "Damage caused by rats, mice or insects."
              ].map((exclusion, index) => (
                <div key={index} className="flex items-start p-4 bg-red-50/50 rounded-xl border border-red-100">
                  <div className="bg-red-100 p-1.5 rounded-full mr-4 mt-1 flex-shrink-0">
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

          {/* Case Study */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-green-600 to-green-800">
            <div className="absolute inset-0 bg-noise opacity-10"></div>
            <div className="relative p-8 text-white h-full">
              <div className="flex flex-col h-full">
                <div>
                  <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">CASE STUDY</span>
                  <h2 className="text-3xl font-bold mb-6">When Insurance Made All The Difference</h2>
                </div>
                <div className="space-y-4 text-green-50 text-lg leading-relaxed flex-grow">
                  <p>In 2020, John returned home after a severe storm and discovered pools of water on his kitchen countertop and floor. Upon further investigation, he found that water was leaking through the ceiling light fixture.</p>
                  <p>After investigating the issue, he discovered that a blockage in the roof's drain area had caused water to accumulate, leading to the leak through the butyl membrane and into the ceiling. Luckily, John had taken out a home and contents insurance policy to protect against such events.</p>
                  <p>Thanks to his insurance policy, John was covered for the costs of repairing the damage to his property and for replacing his furniture and belongings.</p>
                </div>
                <div className="mt-6 pt-6 border-t border-green-500/30">
                  <div className="text-green-200 text-sm">
                    *Actual claim scenario (details modified for privacy)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose FG Insurance */}
        <section className="bg-white p-10 rounded-3xl shadow-xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Why choose FG Insurance?
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                We provide comprehensive protection tailored to your specific needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                <div className="bg-green-100 p-3 rounded-lg mr-5 flex-shrink-0">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Area Based Replacement Cover</h3>
                  <p className="text-gray-700">
                    For non-natural disaster damage, we offer cover based on square-footage and will rebuild/repair the house based on the square meters listed on policy schedule – irrespective of the cost involved.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                <div className="bg-green-100 p-3 rounded-lg mr-5 flex-shrink-0">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Built-In Price Surge Cover</h3>
                  <p className="text-gray-700">
                    Policies come with a built-in price surge cover to provide an extra layer of protection in case an area-wide disaster results in escalation of building costs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                <div className="bg-green-100 p-3 rounded-lg mr-5 flex-shrink-0">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18m-7-4v4m0 0H5m2 0h2m5 4a8 8 0 01-8-8 4 4 0 014-4h8a4 4 0 014 4 8 8 0 01-8 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Cover Options</h3>
                  <p className="text-gray-700">
                    The policy options provide flexibility to adapt cover limits and add optional cover, if required, to suit diverse needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                <div className="bg-green-100 p-3 rounded-lg mr-5 flex-shrink-0">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Adjustable Cover Limits</h3>
                  <p className="text-gray-700">
                    One size does not fit all. We provide adjustable cover limits for landscaping and retaining walls to account for differences in size of properties across clients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                <div className="bg-green-100 p-3 rounded-lg mr-5 flex-shrink-0">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Optional Cover Add-ons</h3>
                  <p className="text-gray-700">
                    Option to customize home insurance policy to include additional cover, like excess-free glass replacement which provides protection against excess payment for the accidental breakage of glass or sanitary fixtures.
                  </p>
                </div>
              </div>
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
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.20'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
} 