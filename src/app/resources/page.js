'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ResourcesPage() {
  const resources = [
    "Are You Underinsured",
    "Business",
    "Business Interruption",
    "Confused about business insurance",
    "Corporate Travel",
    "Cyber Protection",
    "Event",
    "Get the right cover for your business",
    "Home and Contents",
    "Make sense of the insurance market",
    "Marine",
    "Motor",
    "Professional Indemnity",
    "The importance of a policy review",
    "The Steadfast Difference",
    "What to expect from your broker",
    "Your personal claims advocate"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Resources</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of valuable resources to help you make informed decisions.
          </p>
        </div>

        {/* Resources List */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {resources.map((item, index) => (
              <li key={index} className="p-6 hover:bg-gray-50 transition-colors duration-150">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">
                    {item}
                  </h2>
                  <a 
                    href="#" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                  >
                    View Resource
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}