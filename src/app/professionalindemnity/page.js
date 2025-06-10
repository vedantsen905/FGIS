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
        Professional Indemnity Insurance at a glance
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
                What is Professional Indemnity insurance?

            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>Professional Indemnity Insurance is an essential form of protection for businesses and professionals who provide services or advice to clients. It offers financial security and legal protection to these entities in case a client alleges that they have suffered losses due to an error, omission, or negligence on the part of the business or professional.</p>
              <p>The scope of coverage offered by a Professional Indemnity Insurance policy includes legal costs, such as defense costs, court fees, and settlements or compensation awarded to clients. These costs can be substantial and can pose a significant risk to a business's financial health. By having this insurance, businesses and professionals can have peace of mind knowing that they are protected against such risks.</p>
              <p>Professional Indemnity Insurance is not a mandatory form of insurance in New Zealand. However, it is highly recommended for businesses and professionals who provide services or advice to clients, especially in fields such as law, accounting, engineering, architecture, and financial services.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
             What you should consider Professional Indemnity insurance?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
               <p>Professional Indemnity (PI) Insurance is essential for businesses or professions that involve providing services or advice. It offers protection against liability for damages and legal costs incurred while defending against claims arising from errors, omissions, or breach of duty in the course of work.</p>
               <p>Every industry has unique risks that can be addressed through tailored PI policies. PI insurance is mandatory for many professions, including chiropractors, consultants, engineers, architects, real estate agents, and accountants, among others.</p>
             </div>
          </div>
        </section>

        {/* Stats Section with animated counters */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-green-700 text-center">
             Interesting Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-green-600 text-5xl font-bold mb-4 animate-counter" data-target="1030">
                {/* 4740 */}
              </div>
              <p className="text-gray-600 mb-4">
              Professional indemnity insurance is mandatory for contractors working for organizations, including the government, in New Zealand.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700">
                 (NZ Brokers, September 26th, 2019)
                 </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-green-600 text-5xl font-bold mb-4">
                {/* 650K+ */}
              </div>
              <p className="text-gray-600 mb-4">
              In New Zealand, lawyers account for 21% of PI insurance policies, accountants 11%, technology 4%, and miscellaneous professions make up 40%.</p>
                {/* Scams and fraud accounted for $14.5 million (87%) of the total financial loss reported in 2019. </p> */}
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700 italic">
                  (Lockton Brokers Report on the PI Market, May 2019)
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-green-600 text-5xl font-bold mb-4 animate-counter" data-target="20">
                {/* 1934 */}
              </div>
              <p className="text-gray-600 mb-4">
                {/* Phishing and credential harvesting reports, up 25% on 2018.
                 */}
                 Design and construction are the industries with the highest density of written PI insurance policies, accounting for 24% of the non-US market.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700 italic">
                   (Lockton Brokers Report on the PI Market, May 2019)
                </p>
              </div>
            </div>
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
             {/* First-Party Coverage */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
        <div className="flex flex-col h-full">
          <div className="bg-green-100/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
            <svg className="h-7 w-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Civil Liability</h3>
          <ul className="space-y-3 text-gray-700 flex-grow">
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>This indemnifies the Insured for any Civil Liability.</span>
            </li>
           
          </ul>
          <div className="mt-6 pt-4 border-t border-green-100">
             
          </div>
        </div>
      </div>
      

            {/* First-Party Coverage */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
        <div className="flex flex-col h-full">
          <div className="bg-green-100/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
            <svg className="h-7 w-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Costs and Expenses</h3>
          <ul className="space-y-3 text-gray-700 flex-grow">
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span> Cover the Costs and Expenses incurred with the prior written consent in the defense or settlement of any Claim covered by specified section of this Policy.</span>
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
              {/* What Motor Insurance Covers
               */}
               {/* What can be covered under Cyber Liability insurance?
                */}
                What can it cover?

            </h2>
            <p className="text-gray-700 text-lg mb-8">
               Some of the benefits of Professional Indemnity insurance policy may include:
              {/* While exact coverage may vary between insurers, motor insurance generally covers: */}
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

Cover for a consultant's common law liability.
</span>
{/* The costs of a cyber-attack, such as hiring negotiation experts, covering extortion demands, and preventing future threats.</span> */}
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg"> Cover for damages and compensation costs against you.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Cover for Public relations fees.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Corrected: Loss or damage to the client's documents during the provision of the insured's service.</span>
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">	Cover for Legal fees and Defamation.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Cover for Court fees.</span>
               </li>

                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg"> Cover for the cost of investigation.</span>
               </li>

                 <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Claims for compensation resulting from violation of statutory duty.</span>
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
                "Damages to property",
                "Fraud",
                "Accidental injury",
                "Damages from intentional acts",
                "Intentional damages",
                "War or act of terrorism",
                "Claims or legal costs that arise in respect of asbestos",
                "Generally, the insurer will not receive compensation for events that they were aware of prior to the commencement of the policy period.",
                "Claims made against the insured for failing to be properly licensed, registered or accredited to provide their professional service.",
                "Claims arising from occupation, leasing, or ownership of any rental or other property"
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
                <p>An investment firm in Auckland was approached by a client named Sarah for investment advice. The firm provided advice to Sarah, but unfortunately, after implementing the advice, Sarah suffered significant financial losses. She then filed a claim against the investment firm seeking compensation for her losses.</p>
                
                <p>
                    Fortunately, the investment firm had professional indemnity insurance in place. This insurance policy is designed to protect professionals from potential legal action and claims made against them by their clients due to their professional advice, services, or products. In this case, the insurance policy covered the investment firm for the losses suffered by Sarah, and it was able to settle the claim without having to bear the full financial burden on its own.
   
                </p>
   <p>
    Having professional indemnity insurance in place is crucial for businesses that provide professional services to clients, as it can protect them from legal and financial damages that can result from claims of negligence, errors, or omissions in their professional duties
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