'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const tabs = [
  { name: 'Personal Insurance', icon: '🛡️' },
  { name: 'Rural Insurance', icon: '🌾' },
  { name: 'Specialist Insurance', icon: '🏢' },
  { name: 'Business', icon: '💼' },
];

const tabContent = {
  'Personal Insurance': {
    title: 'Personal Insurance',
    heading: 'We know you\'re unique and your insurance advice should be too.',
    description:
      'FGIS will work with you to get the best insurance solutions to meet your needs. When it comes to protecting your most precious assets you can count on us for personal service and quality advice.\n\nWe\'ll stand by your claims. All our branches have dedicated Claims Advisers to help you through your entire claims process. We\'ll work as your advocate to get the best possible outcome for you.',
    links: [
      {
        name: 'Home & Content',
        href: '/home&content',
        desc: 'Covers damage to your home and personal belongings from a range of risks, ensuring your property and possessions are protected.',
        icon: '🏠',   
      },
      {
        name: 'Private Motor',
      href: '/PrivateVehicle',
        desc: 'Provides protection for your personal vehicle against damage, theft, and liability.',
        icon: '🚗',
      },
      {
        name: 'Private Hull',
        href: '/pleasurehull',
        desc: 'Gives you peace of mind to know you would be able to repair or replace your belongings.',
        icon: '🛥️',
      },
    ],
  },
  'Rural Insurance': {
    title: 'Rural Insurance',
    heading: 'We know you\'re unique and your insurance advice should be too.',
    description:
      'FGIS will work with you to get the best insurance solutions to meet your needs. When it comes to protecting your most precious assets, you can count on us for personal service and quality advice.\n\nWe\'ll stand by your claims. All our branches have dedicated Claims Advisers to help you through your entire claims process. We\'ll work as your advocate to get the best possible outcome for you.',
    links: [],
    image: '/RuralInsurance.jpeg',
  },
  'Specialist Insurance': {
    title: 'Specialist Insurance',
    heading: 'We know you\'re unique and your insurance advice should be too.',
    description:
      'FGIS will work with you to get the best insurance solutions to meet your needs. When it comes to protecting your most precious assets you can count on us for personal service and quality advice.\n\nWe\'ll stand by your claims. All our branches have dedicated Claims Advisers to help you through your entire claims process. We\'ll work as your advocate to get the best possible outcome for you.',
    links: [
      {
        name: 'Body Corporates',
        href: '/bodycorporate',
        desc: 'Protects what is likely your most expensive asset.',
        icon: '🏘️',
      },
      {
        name: 'Industrial Property',
        href: '/industrialproperty',
        desc: 'Protects what is likely your most expensive asset.',
        icon: '🏭',
      },
    ],
    image: '/IndustrialInsurance.jpeg',
  },
  'Business': {
    title: 'Business Insurance',
    heading: 'We know you’re unique and your insurance advice should be too.',
    description:
    "FGIS will work with you to get the best insurance solutions to meet your needs. When it comes to protecting your most precious assets you can count on us for personal service and quality advice. We’ll stand by your claims. All our branches have dedicated Claims Advisers to help you through your entire claims process. We’ll work as your advocate to get the best possible outcome for you.",
      
    // 'Our commercial insurance plans protect businesses of all sizes from a variety of risks and liabilities.',
    links: [
      {
        name: 'Business Interruption',
        href: '/businessinterruption',
        desc:  "Covers loss of income due to unexpected disruptions in your business operations.",
        icon: '🏢',
      },
      {
        name: 'Heavy/Fleet Motor',
        href: '/heavyfleetmotor',
        desc: "Covers your fleet or heavy vehicles, protecting against various risks.",
        icon: '🚛',
        
      },
      {
        name: 'Corporate Travel',
        href: '/corporatetravel',
        desc:  "Provides protection for your business trips, covering risks associated with travel abroad.",
        icon: '🔐',

      },

      {
        name: 'General Liability',
        href: '/generalliability',
      desc:"Covers legal and financial liability for injury or damage caused by your business operations.",
        icon: '⚖️',
      },
      {
        name: 'Professional Indemnity',
        href: '/professionalindemnity',
        desc: "Shields you from claims arising from professional mistakes or negligence.",
        icon: '🛡️',
      },

      {
        name : "Management Liability",
        href: '/managementliability',
        desc: "Protects directors and officers from claims related to their managerial decisions and actions.",
        icon: '👔',
      }
      ,
      {
        name:"Cyber Liability",
        href: '/cyberliablility',
        desc:"Safeguards your business against losses from cyberattacks and data breaches",
        icon: '💻',
      },

      {
        name:"Material Damage",
        href : '/materialdamage',
        desc:"Provides coverage for physical damage to your property or assets due to unforeseen events.",
        icon: '🏗️',
      }

    ],
  },
};

export default function InsuranceTabs() {
  const [activeTab, setActiveTab] = useState('Personal Insurance');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Hero Section - now light and simple */}
        <section className="bg-gray-100 py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Our Insurance Products</h1>
            <p className="text-xl text-gray-700 opacity-90">Comprehensive protection tailored to your unique needs</p>
          </div>
        </section>
        {/* Main Content */}
        <section className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64">
            <div className="sticky top-24 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#00bfa5] ${
                    activeTab === tab.name
                      ? 'bg-white text-[#00bfa5] font-semibold border-[#00bfa5] shadow-md'
                      : 'text-gray-700 bg-gray-50'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Content Panel */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="mb-8">
                <span className="inline-block bg-[#00bfa5] text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {tabContent[activeTab].title}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#00bfa5] mb-4">
                  {tabContent[activeTab].heading}
                </h2>
                <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                  {tabContent[activeTab].description}
                </div>
              </div>
              {/* Links Grid */}
              {tabContent[activeTab].links.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Available Coverages
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {tabContent[activeTab].links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="group block border border-gray-200 rounded-xl p-5 bg-white hover:border-[#00bfa5] transition-all duration-200 hover:shadow-md shadow-sm"
                      >
                        <div className="flex items-start gap-4">
                          <span className="text-2xl mt-1 text-[#00bfa5]">{link.icon}</span>
                          <div>
                            <h4 className="text-lg font-semibold text-[#00bfa5] group-hover:text-gray-900 mb-2">
                              {link.name}
                            </h4>
                            <p className="text-gray-700">{link.desc}</p>
                            <div className="mt-3 text-[#00bfa5] font-medium flex items-center group-hover:text-gray-900">
                              Learn more
                              <svg
                                className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {/* Image */}
              {tabContent[activeTab].image && (
                <div className="mt-8">
                  <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-100 border border-gray-200 shadow">
                    <Image
                      src={tabContent[activeTab].image}
                      alt={tabContent[activeTab].title}
                      className="absolute inset-0 w-full h-full object-cover"
                      fill
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}