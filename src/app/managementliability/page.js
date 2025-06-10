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
              Management Liability Insurance at a Glance
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
                What is Management Liability Insurance?

            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
             <p>Management Liability insurance protects businesses and their leaders from a range of risks related to managing and operating a company. It covers exposures related to governance, finance, benefits, and management activities, including D&O liability insurance, EPL insurance, fiduciary liability insurance, and special crime insurance. These coverages can be purchased separately or as part of a single "package" policy, and protect against claims of mismanagement.</p>
             <p>This insurance is important for any business, regardless of size or industry, as all management decisions and relationships involve some level of risk. By transferring that risk to an insurance policy, companies and executives can protect their finances and personal assets from potential litigation and legal disputes.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              What you should consider?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
               <p>Everyday management decisions and business relationships involve inherent risks. Litigation against a company, its executive team, and board of directors can affect businesses of all sizes and industries. Management liability insurance is a cost-effective tool that all companies and executives should understand to transfer these risks. It provides protection for both the company balance sheet and the personal assets of the management team.</p>
                {/* <p>If you interact with the public as part of running your business, there is always a risk that an accident could happen. If a customer trips on an item at your business premises, or an employee damages customer property, you could be legally liable to pay the costs. This could include the cost of third-party compensation or expenses, in addition to the cost of funding your own legal defense.</p> */}
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
                76%
              </div>
              <p className="text-gray-600 mb-4">
               According to the IoD�s 2018 Directors� Fees Report, 76% of organisations provide directors with liability insurance.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700">
            (Minter Ellison Rudd Watts, Marsh and the Institute of Directors in New Zealand 2018)
                 </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-green-600 text-5xl font-bold mb-4">
              147,256,363
              </div>
              <p className="text-gray-600 mb-4">
            From 2018 to September 2019, there were 147,256,363 claims related to liability defamation, directors and officers, public product, and others.</p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700 italic">
                    (Insurance Council of New Zealand 2020)
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-green-600 text-5xl font-bold mb-4 animate-counter" data-target="20">
                 {/* $ 1,159,798,847 */}
              </div>
              <p className="text-gray-600 mb-4">
                 
                 The Mainzeal judgment of the High Court of New Zealand held company directors jointly and severally liable for damages of NZ$36 million, highlighting the risks faced by board members in jurisdictions not renowned for hostile litigation environments.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
 <p>
    (Willis Towers Watson New Zealand insurance market report 2019)
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
      <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
        <div className="flex flex-col h-full">
          <div className="bg-green-100/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
            <svg className="h-7 w-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Directors & Officers Liability</h3>
          <ul className="space-y-3 text-gray-700 flex-grow">
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
               <span>This policy covers legal liability and expenses related to defending claims against directors and officers for alleged wrongful acts in their capacity as corporate leaders. It also protects the personal assets of the individuals and the assets of the corporation. </span>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4"> Comprehensive Coverage</h3>
          <ul className="space-y-3 text-gray-700 flex-grow">
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>This policy provides a range of coverage options for private companies, including Directors & Officers Liability, Entity Liability, Employment Practices Liability, Fidelity, Kidnap, Ransom, and Extortion (including cyber extortion), Statutory Liability, Employer's Liability, General Liability, and Umbrella Defense Costs.</span>
            </li>
            
          </ul>
           
        </div>
      </div>

      {/* Third-Party Liability */}
       

       
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
     Some of the benefits of Management Liability insurance policy may include:
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
 Cover for investigations, inquiries, and prosecutions.
 </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg"> Cover for libel and slander.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Loss of documents.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">	Outside Directorship extension available.</span>
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Advancement of defense costs.</span>
                </li>

                  <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Cover the cost of investigating, defending, and settling claims by a third party.</span>
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
                  "D&O coverage commonly excludes intentional illegal acts and insured vs insured lawsuits.",
                  "Intentional and dishonest acts, as well as violations of various compliance regulations, are often excluded from coverage."

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
                A software startup in New Zealand sought outside investment based on a healthy 35% growth projection in topline revenue for the next year provided by the CFO. Encouraged by this forecast, investors buy in, and the company successfully closes its funding round. However, the growth projection does not materialize, and investors sue the company and its directors for misrepresenting the company's revenues. Fortunately, the company has management liability insurance, which provides Directors & Officers coverage for legal costs or settlements.
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