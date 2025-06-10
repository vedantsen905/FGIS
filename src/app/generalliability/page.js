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
               General Liability Insurance at a Glance
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-green-100 opacity-90 animate-fade-in-up">
                {/* Comprehensive protection for your watercraft with tailored coverage options */}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* What is Pleasure Hull insurance? */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
               What is General Liability Insurance?

            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              {/* <p>Cyber Liability Insurance provides coverage for financial loss and expenses that businesses may suffer due to a Cyber Event, including cyber-attacks from malware or other invasive software, cyber extortion, and social engineering. Cyber insurance generally covers your business' liability for a data breach involving sensitive customer information, such as Social Security numbers, credit card numbers, account numbers, driver's license numbers, and health records.</p> */}
          {/* <p>Motor fleet insurance is a cover purchased for cars, trucks, and other road vehicles which provides protection against physical damage resulting from traffic collisions and against liability that could also arise there-from. Policy is designed for medium to large enterprises looking to insure 10 vehicles or more.</p> */}
<p>General Liability Insurance protects your company's assets by providing coverage for liability claims against your business. This can include claims that arise from injuries or property damage that occur on your business property or those that are caused by you or your employees while doing business.</p>

       <p>Also known as Public and Products Liability Insurance, General Liability Insurance helps protect you if you become liable to pay compensation or legal settlements for injury to third parties or damage to their property during your work. It can also cover the cost of your reasonable legal fees incurred from defending a claim against you.</p>

          {/* <p>The policy provides coverage against loss or damage caused to the automobile or its parts due to natural calamities and man-made causes, along with accident cover for individual owners of the vehicle while driving and for third party legal liability.</p> */}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              What you should consider?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>If you interact with the public as part of running your business, there is always a risk that an accident could happen. If a customer trips on an item at your business premises, or an employee damages customer property, you could be legally liable to pay the costs. This could include the cost of third-party compensation or expenses, in addition to the cost of funding your own legal defense.</p>
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
                39.14%
              </div>
              <p className="text-gray-600 mb-4">
               Is the Loss Ratio of all liability lines of business in New Zealand 2019.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700">
             (Insurance Council of New Zealand)
                 </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-green-600 text-5xl font-bold mb-4">
              147,256,363
              </div>
              <p className="text-gray-600 mb-4">
             Is the total number of claims incurred in 2019 which includes all liability lines of business.</p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700 italic">
                    (Insurance Council of New Zealand)
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            {/* <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-green-600 text-5xl font-bold mb-4 animate-counter" data-target="20">
                 $ 1,159,798,847
              </div>
              <p className="text-gray-600 mb-4">
                 
                 Claims were paid from Jan-2019 till Sep-2020 for private and commercial vehicles.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700 italic">
                  (Insurance Council of New Zealand, Market Data, 2020)
                </p>
              </div>
            </div> */}
          </div>
        </section>

        {/* Coverage Types with tabs */}
         {/* Coverage Types with modern cards */}
<section className="space-y-12">
  <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-3xl shadow-xl">
    <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">
       What are the types of covers available?
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* First-Party Coverage */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
        <div className="flex flex-col h-full">
          <div className="bg-green-100/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
            <svg className="h-7 w-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Bodily Injury and Property Damage Liability</h3>
          <ul className="space-y-3 text-gray-700 flex-grow">
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>This type of coverage protects a business from liability for physical injury to a client or customer or potential damage to their property. In the event of such physical injury to body or damage to property, money damages could be awarded against the insured to compensate the injured party. A General Liability Insurance policy will provide funds to pay the damages, as well as provide a defense to any lawsuit.</span>
              {/* <span>This covers the accidental loss or any damage to the insured vehicles as well as the cost of towing, transport & storage of vehicle after accident.</span> */}
            </li>
           
          </ul>
          
        </div>
      </div>

      {/* Crisis Management */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
        <div className="flex flex-col h-full">
          <div className="bg-green-100/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
            <svg className="h-7 w-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Injury Liability</h3>
          <ul className="space-y-3 text-gray-700 flex-grow">
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Coverage includes claims such as libel, slander, and defamation of character. The policy will provide protection for claims of damage to a party's reputation.</span>
              {/* <span>This covers the loss or damage to the insured vehicle caused by fire and theft and also covers damage to third-party property.</span> */}
            </li>
            
          </ul>
           
        </div>
      </div>

      {/* Third-Party Liability */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
        <div className="flex flex-col h-full">
          <div className="bg-green-100/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
            <svg className="h-7 w-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4"> Medical Payments</h3>
          <ul className="space-y-3 text-gray-700 flex-grow">
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
             <span>This coverage is designed to pay for an individual's medical expenses as a result of an accident at the business premises. This coverage supplements the Bodily Injury and Property Damage coverage.</span>
              {/* <span>This covers the cost of damage to third-party property which may be caused by the insured party.</span> */}
            </li>
      
          </ul>
          
        </div>
      </div>

       <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
        <div className="flex flex-col h-full">
          <div className="bg-green-100/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
            <svg className="h-7 w-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Tenants Legal Liability</h3>
          <ul className="space-y-3 text-gray-700 flex-grow">
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>This type of coverage provides protection in the event of damage to the leased premises. This coverage only pays for damage to the leased premises and does not cover the personal property or inventory of the business.</span>
            </li>
      
          </ul>
          
        </div>
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
            Some of the potential benefits of General Liability insurance policy may include:
            {/* Although the exact level of cover available differs between insurers, Motor fleet insurance will generally cover the following events: */}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">
 
Injury to, and associated medical costs incurred by, members of the public at your business premises or in relation to your business activity.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Damage to someone else's property, whether it is a physical premise (such as a building) or an item they own.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Bodily injury or property damage that result from faulty products or completed operations (work performed by your business).</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Other third-party expenses awarded against you e.g., legal fees.</span>
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Negligent actions of independent contractors and subcontractors that you hire.</span>
                </li>
             
              </ul>
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
                 "Damage to a third party's property in your care, custody, or control, unless otherwise specified.",
                 "Contractual Liability: any liability assumed under a contract that requires you to affect insurance over property or to be liable regardless of fault.",
                 "Professional advice: If you provide professional services or advice, Public Liability Insurance does not cover you for errors, omissions, or negligence in relation to those services.",
                 "Faulty workmanship: Damage to property that must be repaired or replaced as a result of incorrect work performed by you or on your behalf, or the use of materials or equipment proven to be defective or inadequate in connection with such work.",
                 "Any liability caused by asbestos or any asbestos contained in other materials regardless of the form and quantity of asbestos.",
                 "Fines or financial penalties, punitive, exemplary, liquidated, aggravated or multiple damages whether imposed through a court of law, legislation or under a contractual arrangement or otherwise.",
                 "Liability for injury or illness to employees caused as a result of their work may be covered under a standalone Workers Compensation Insurance product which is not available under the Small Business Advantage Pack."

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
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800"></div>
            <div className="relative p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">
                CASE STUDY
              </h2>
              <div className="space-y-6 text-green-50 text-lg leading-relaxed">
                 <p>Robin lives in Washington and owns a construction company. A customer visits the construction company to look at sample flats of its newly constructed residential project. During the visit, the customer trips on loose flooring and suffers a leg injury.</p>
                 <p>Robin's commercial general liability policy, taken out by the construction company, covers the loss caused due to the medical expenses of the bodily injury of the customer.

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
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Peace of Mind at Affordable Rates</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Flexible Plans</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18m-7-4v4m0 0H5m2 0h2m5 4a8 8 0 01-8-8 4 4 0 014-4h8a4 4 0 014 4 8 8 0 01-8 8z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">24/7 Roadside Assistance</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Fast and Simple Claim Service - online or by phone</span>
              </li>

               <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Modern Policy Wordings</span>
              </li>

              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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