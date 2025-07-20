"use client";
import { useState } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* Hero Section */}
        <section className="bg-gray-100 py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Corporate Travel Insurance at a Glance
            </h1>
          </div>
        </section>

        {/* What is Corporate Travel Insurance? */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-6">
              Corporate Travel Insurance: Protect Your Business and Employees
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Corporate Travel Insurance is essential for protecting your business and employees when travelling for work, whether intrastate, interstate, or abroad. It provides financial protection in case of serious accidents, illness, and travel delays that could disrupt your business operations. Additionally, Corporate Travel Insurance also covers business owners and their families when travelling together on personal trips.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-6">
              Who Needs Corporate Travel Insurance?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                New Zealand is renowned for its adventure sports, including bungee jumping, whitewater rafting, skiing, and snowboarding. Accidents and injuries are common, particularly on the ski slopes, and on mountainous roads due to snow, ice, fog, and strong winds. Therefore, anyone travelling for business in New Zealand, or any other location, should consider Corporate Travel Insurance to help cover the costs of accidents, injuries, or other unexpected events.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-[#00AB9D] text-center">
            Interesting Facts about Corporate Travel Insurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-[#00AB9D] text-4xl font-bold mb-4">2.8M</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Overseas Trips</h3>
              <p className="text-gray-600 mb-4">
                Kiwis made almost 2.8 million overseas trips in 2017, which is almost quadruple the number of trips made in 1988.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block">
                <p className="text-sm font-medium text-green-700">
                  (Stats NZ, Overseas Trips by Kiwis Almost Quadruple Since 1988, Aug 2017)
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-[#00AB9D] text-4xl font-bold mb-4">1.2M</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trips to Australia</h3>
              <p className="text-gray-600 mb-4">
                In July 2017, Kiwis made over 1.2 million overseas trips to Australia.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block">
                <p className="text-sm font-medium text-green-700 italic">
                  (Overseas Trips by Kiwis Almost Quadruple Since 1988, Stats NZ, Aug 2017)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section className="space-y-12">
          <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-8 text-center">
              Types of Corporate Travel Insurance Covers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic International Cover */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic International Cover</h3>
                <p className="text-gray-700">
                  Provides value for those on a budget, covering overseas medical and dental expenses, as well as death or disability.
                </p>
              </div>

              {/* International Comprehensive Travel Insurance */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">International Comprehensive Travel Insurance</h3>
                <p className="text-gray-700">
                  Offers additional coverage for adventure sports, such as ballooning, abseiling, bungee jumping, horse riding, paragliding, parasailing, white water rafting, and trekking.
                </p>
              </div>

              {/* Life Insurance */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-[#00AB9D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Life Insurance</h3>
                <p className="text-gray-700">
                  Covers Accidental Death for the entire trip, Air Flight Accident, which covers the flight. And Common Carrier coverage pays in the event of death or dismemberment while you are traveling on any form of public transport.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="space-y-12">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-8">
              What does Corporate Travel Insurance Cover?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Corporate travel insurance policy can provide a range of benefits for businesses and their employees:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Coverage for property damages you may have caused or been responsible for, or bodily damage where you are at fault.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Cover the excess on a damaged or stolen rental vehicle.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Baggage and Personal Items Loss. This coverage provides reimbursement for lost, stolen, or damaged baggage and other personal items.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">The prohibitive costs incurred of covering staff for medical and evacuation costs if they become seriously ill or injured during a business trip.</span>
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">The cost of having to employ new staff to replace an employee who is injured or becomes seriously ill during work travel.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Reimburses deposits on accommodation, flights, or conferences if you or your staff member's trip is canceled due to an accident or illness</span>
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
              What is usually not covered?
            </h2>
            <ul className="space-y-5 text-gray-700 text-lg">
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-4 mt-1">
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Some pre-existing conditions may not be covered (your broker can explain these).</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-4 mt-1">
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Refunds if your travel provider becomes insolvent may not be covered.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-4 mt-1">
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span> Pregnancy may not be covered.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-4 mt-1">
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Traveling against medical advice. In addition, there is usually a deductible (or excess) and limits of liability (or sum insured).</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-4 mt-1">
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>You may have to pay an excess, and there are coverage limits</span>
              </li>
            </ul>
            {/* <h6 className='text-black font-bold mt-6'>Disclaimer:</h6>
            <p className='text-black'>The above exclusions are indicative in nature. For detailed exclusions, please refer to the policy wordings.</p> */}
          </div>

          {/* Case Study */}
          <div className="bg-[#00AB9D] p-8 rounded-2xl text-white">
            <h2 className="text-3xl font-bold text-white mb-8">
              CASE STUDY
            </h2>
            <div className="space-y-6 text-green-50 text-lg leading-relaxed">
              <p>George runs a food packing machinery manufacturing business in Hamilton. One day, while traveling to Chile for technical work on a customer's machine on site, his jewelry went missing. He lost a 10K Yellow Gold Chain, 55cm / 22" long, and a Gold Ring.</p>
              <p>Fortunately, George was insured with Corporate Travel Insurance which covered the cost of his losses.</p>

            </div>
          </div>
        </section>

        {/* Why Choose FG Insurance */}
        <section className="bg-white p-10 rounded-2xl shadow-lg">
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
                <span className="text-gray-700 text-lg">Fast and Simple Claim Service - online or by phone</span>
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