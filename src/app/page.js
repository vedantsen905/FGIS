'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
// import InsuranceHelpSection from './components/InsuranceHelpSection';
import AuthorisedBodiesSection from './components/AuthorisedBodiesSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden text-white">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/man.png"
            alt="Man under umbrella"
            fill
            priority
            className="object-cover object-center"
            style={{ objectPosition: 'right center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-20 flex items-center h-full px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-emerald-400">Insurance</span>
              <br />
              for when
              <br />
              <span className="text-white">Life Happens!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-lg">
              Protect Your Home, Protect Your Family
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 transition-all rounded-xl shadow-lg text-white font-semibold text-lg"
            >
              Get Started →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 space-y-24 bg-white text-gray-800">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden aspect-video"
          >
            <Image
              src="/section1.jpeg"
              alt="House and person"
              fill
              className="object-cover w-full h-full"
            />
          </motion.div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Just one of the ways FGIS can help get you the insurance protection you need.
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                FG understands the impact of weather disasters on communities. With frequent
                extreme weather events caused by climate change, having the right insurance
                coverage to protect your home and family is crucial.
              </p>
              <p>
                As a trusted broker, we can help you get the protection you need. We will work
                with you to customize a policy that fits your unique needs.
              </p>
              <p>
                Let us help you to cover and protect your most valuable assets.{' '}
                <a href="#" className="text-emerald-600 font-semibold hover:underline underline-offset-4">
                  Contact us today
                </a>{' '}
                for a free consultation and take the first step towards peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {['team.png', 'family1.png', 'family2.png', 'car.png'].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden aspect-square"
              >
                <Image
                  src={`/${img}`}
                  alt={`Image ${idx + 1}`}
                  fill
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold leading-snug">
              Step out with confidence – we've got you covered!
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Kia ora everyone, hope you're all doing well! It was a wild ride navigating the
                post-pandemic era, but we at FG want to assure you that we're still here for you
                every step of the way.
              </p>
              <p>
                As an insurance broker, our top priority has always been to make sure you're
                protected, and that hasn't changed one bit. We know that these past couple of
                years have been tough, which is why we're committed to providing you with expert
                advice, personalized service, and the peace of mind that comes with knowing
                you're covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <AuthorisedBodiesSection />
      <Footer />
    </div>
  );
}