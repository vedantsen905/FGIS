// pages/index.js
'use client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Head>
        <title>Quick Assistance | FG Insurance Services</title>
        <meta name="description" content="Get immediate assistance from FG Insurance Services for all your insurance needs" />
      </Head>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-white">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h1 className="text-3xl md:text-4xl font-bold">Quick Assistance</h1>
            </div>
            <p className="text-center text-emerald-100 text-lg">Your dedicated support team for all insurance needs</p>
          </div>
          
          {/* Main Content */}
          <div className="p-8 space-y-10">
            {/* Introduction */}
            <section className="text-center">
              <div className="inline-flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">How can we help you today?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                At FG Insurance Services, we're your dedicated support team. Whether you need insurance advice, 
                policy information, or claims assistance, we're here to provide professional support during business hours.
              </p>
            </section>

            {/* Contact Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-5">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-50 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-gray-700">Main Helpline</p>
                    <a href="tel:+64800344700" className="text-blue-600 hover:text-blue-800 transition-colors text-lg font-medium">+64 0800 344 700</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-50 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-gray-700">General Enquiries</p>
                    <a href="mailto:admin@fgis.co.nz" className="text-blue-600 hover:text-blue-800 transition-colors">admin@fgis.co.nz</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-50 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-gray-700">Complaints</p>
                    <a href="mailto:complaints@fgis.co.nz" className="text-blue-600 hover:text-blue-800 transition-colors">complaints@fgis.co.nz</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Team Section */}
            <section className="pt-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Dedicated Team</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Contact our specialists directly for personalized assistance</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Admin Contact */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-green-100 p-4 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Administration</h3>
                    <p className="text-emerald-600 font-medium">Vivek Garg</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="bg-gray-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </span>
                      <a href="tel:0272782848" className="text-blue-600 hover:underline">027 278 2848</a>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-gray-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </span>
                      <a href="mailto:vivek@fgis.co.nz" className="text-blue-600 hover:underline">vivek@fgis.co.nz</a>
                    </div>
                  </div>
                </div>
                
                {/* Advisor Contact */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-blue-100 p-4 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Insurance Advisor</h3>
                    <p className="text-blue-600 font-medium">Amit Talwar</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="bg-gray-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </span>
                      <a href="tel:0211872964" className="text-blue-600 hover:underline">021 187 2964</a>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-gray-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </span>
                      <a href="mailto:amit.talwar@fgis.co.nz" className="text-blue-600 hover:underline">amit.talwar@fgis.co.nz</a>
                    </div>
                  </div>
                </div>
                
                {/* Claims Contact */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-purple-100 p-4 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Claims Support</h3>
                    <p className="text-purple-600 font-medium">Sharon Petzer</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="bg-gray-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </span>
                      <a href="tel:02102266913" className="text-blue-600 hover:underline">021 022 66913</a>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-gray-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </span>
                      <a href="mailto:claims@fgis.co.nz" className="text-blue-600 hover:underline">claims@fgis.co.nz</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          {/* Footer Section */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
             
            </div>
          </div>
        
      </main>
      
      <Footer />
    </div>
  );
}