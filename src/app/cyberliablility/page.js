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
              Cyber Liability Insurance at a Glance
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
               What is Cyber Liability Insurance?

            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>Cyber Liability Insurance provides coverage for financial loss and expenses that businesses may suffer due to a Cyber Event, including cyber-attacks from malware or other invasive software, cyber extortion, and social engineering. Cyber insurance generally covers your business' liability for a data breach involving sensitive customer information, such as Social Security numbers, credit card numbers, account numbers, driver's license numbers, and health records.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
             What you should consider Cyber Liability Insurance?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>Businesses that handle sensitive customer information, finance, banking, healthcare service providers, and IT services must take a dedicated cyber risk insurance policy.

With cyber hacks and data breaches dominating the headlines every day, business leaders are becoming more concerned than ever about hackers and other data security breaches. This global threat is twice as troublesome for accounting firm leaders, who face the twofold challenge of not only safeguarding their own information as a business but also protecting their clients' information.

Any security breach in your business's technology can set you back financially, and even worse, you could suffer from mental disturbance. Therefore, it's always prudent to protect your business with the best cyber risk insurance policies to deal with all the consequences that may occur due to any malfunction in technological security issues.</p>
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
                4740
              </div>
              <p className="text-gray-600 mb-4">
               4740 cyber security incidents were reported in 2019.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700">
                 (Cert NZ, 2019 Summary)
                 </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-green-600 text-5xl font-bold mb-4">
                {/* 650K+ */}
              </div>
              <p className="text-gray-600 mb-4">
                Scams and fraud accounted for $14.5 million (87%) of the total financial loss reported in 2019. </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700 italic">
                  (Cert NZ, 2019 Summary)
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-green-600 text-5xl font-bold mb-4 animate-counter" data-target="20">
                1934
              </div>
              <p className="text-gray-600 mb-4">
                Phishing and credential harvesting reports, up 25% on 2018.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
                <p className="text-sm font-medium text-green-700 italic">
                   (Cert NZ, 2019 Summary)
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
      Comprehensive Cyber Liability Coverage Options
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">First-Party Coverage</h3>
          <ul className="space-y-3 text-gray-700 flex-grow">
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Data breach/privacy crises</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Legal costs & regulatory fines</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Cyber extortion & ransom</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Business interruption losses</span>
            </li>
          </ul>
          <div className="mt-6 pt-4 border-t border-green-100">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
              Direct Protection
            </span>
          </div>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Crisis Management</h3>
          <ul className="space-y-3 text-gray-700 flex-grow">
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Forensic investigation costs</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Customer notification expenses</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Credit monitoring services</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>PR & reputation management</span>
            </li>
          </ul>
          <div className="mt-6 pt-4 border-t border-green-100">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
              Rapid Response
            </span>
          </div>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Liability</h3>
          <ul className="space-y-3 text-gray-700 flex-grow">
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Network security liability</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Regulatory defense coverage</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Media liability protection</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-0.5 rounded-full mr-3 mt-1">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Intellectual property claims</span>
            </li>
          </ul>
          <div className="mt-6 pt-4 border-t border-green-100">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
              Legal Protection
            </span>
          </div>
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
               What can be covered under Cyber Liability insurance?

            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Some of the potential benefits of Cyber Liability insurance policies include:
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
The costs of a cyber-attack, such as hiring negotiation experts, covering extortion demands, and preventing future threats.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg"> Coverage for financial loss you may suffer as a result of a cyber-attack.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Coverage for the legal costs of defending claims.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">The costs of recovering or replacing your records and other business data.</span>
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Coverage for damages to your reputation resulting from data breaches, such as loss of third-party data held on your system.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">	Covers legal expenses and fines arising from investigation by a government regulator.</span>
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
            <p className='text-xl text-black'>Just like any other insurance policies, cyber risk insurance plans also come with several exclusions. This means that the policy will not offer coverage under certain specified circumstances. Some typical exclusions under cyber risk insurance include: </p>
            <br></br>
            <div className="space-y-3">
              {[
                "Data transfer to HR vendors for the purpose of payroll.",
                "Data stored on external servers that are not controlled by you.",
                "Copyright infringement."
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
                <p>
                    Your employee opens an infected email attachment that triggers a ransomware virus, causing your systems and data to be blocked. Rather than paying the ransom, you hire IT consultants to recover your data and upgrade your antivirus software. It takes a week to apply these fixes, during which you have to close your business, losing revenue and damaging your reputation with clients. One client threatens to sue you for the delay and financial loss.
                </p>
               <p>Thankfully, you have a Cyber Protection Insurance policy that helps you recover some of the costs incurred during this incident. Depending on your policy, you may be able to make a claim for losses caused by the interruption to your business, the costs of recovering your data and upgrading your software, and ongoing crisis management expenses. This policy can provide much-needed financial relief in the aftermath of a cyber attack, allowing you to focus on getting your business back on track.</p>
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