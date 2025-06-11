'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import AuthorisedBodiesSection from './components/AuthorisedBodiesSection';
import Footer from './components/Footer';

export default function Home() {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const navOptions = [
    { name: 'Home Insurance', icon: '🏠', link: '/home-insurance' },
    { name: 'Car Insurance', icon: '🚗', link: '/car-insurance' },
    { name: 'Life Insurance', icon: '🛡️', link: '/life-insurance' },
    { name: 'Business Insurance', icon: '🏢', link: '/business-insurance' },
    { name: 'Travel Insurance', icon: '✈️', link: '/travel-insurance' },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50 overflow-x-hidden">
      <Navbar />

      {/* Floating blob background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-300/20 rounded-full filter blur-3xl opacity-20 animate-float1"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-300/20 rounded-full filter blur-3xl opacity-20 animate-float2"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-300/20 rounded-full filter blur-3xl opacity-20 animate-float3"></div>
      </div>

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
              <motion.span 
                className="text-emerald-400 inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Insurance
              </motion.span>
              <br />
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                for when
              </motion.span>
              <br />
              <motion.span 
                className="text-white inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Life Happens!
              </motion.span>
            </h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-100 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Protect Your Home, Protect Your Family
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="relative"
              ref={optionsRef}
            >
               
              <AnimatePresence>
                {showOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl overflow-hidden z-30"
                  >
                    {navOptions.map((option, index) => (
                      <motion.a
                        key={option.name}
                        href={option.link}
                        className="flex items-center px-4 py-3 text-gray-800 hover:bg-emerald-50 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-xl mr-3">{option.icon}</span>
                        <span>{option.name}</span>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated floating elements */}
        <motion.div 
          className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-40 w-10 h-10 bg-emerald-400/20 rounded-full backdrop-blur-sm border border-emerald-400/30"
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </section>

      {/* Info Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 space-y-24 bg-white text-gray-800 relative z-10">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden aspect-video shadow-2xl hover:shadow-3xl transition-shadow"
          >
            <Image
              src="/section1.jpeg"
              alt="House and person"
              fill
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold leading-snug bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Just one of the ways FGIS can help get you the insurance protection you need.
            </motion.h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                FG understands the impact of weather disasters on communities. With frequent
                extreme weather events caused by climate change, having the right insurance
                coverage to protect your home and family is crucial.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                As a trusted broker, we can help you get the protection you need. We will work
                with you to customize a policy that fits your unique needs.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                Let us help you to cover and protect your most valuable assets.{' '}
                <a href="/contact" className="text-emerald-600 font-semibold hover:underline underline-offset-4 transition-all hover:text-emerald-700">
                  Contact us today
                </a>{' '}
                for a free consultation and take the first step towards peace of mind.
              </motion.p>
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
                viewport={{ once: true, margin: "-50px" }}
                className="relative rounded-xl overflow-hidden aspect-square shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={`/${img}`}
                  alt={`Image ${idx + 1}`}
                  fill
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </motion.div>
            ))}
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold leading-snug bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Step out with confidence – we've got you covered!
            </motion.h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Kia ora everyone, hope you're all doing well! It was a wild ride navigating the
                post-pandemic era, but we at FG want to assure you that we're still here for you
                every step of the way.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                As an insurance broker, our top priority has always been to make sure you're
                protected, and that hasn't changed one bit. We know that these past couple of
                years have been tough, which is why we're committed to providing you with expert
                advice, personalized service, and the peace of mind that comes with knowing
                you're covered.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Authorised Bodies Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-300/10 rounded-full filter blur-3xl opacity-20 animate-float1"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-300/10 rounded-full filter blur-3xl opacity-20 animate-float2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          {/* Left side text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Discover our authorised bodies! 
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you're seeking protection for your personal assets, securing your business ventures, or insuring unique industries, we've got you covered.
            </p>
            
          </motion.div>
  
          {/* Right side with image (logo + family) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 flex justify-center"
          >
            <a href="https://www.lcfg.co.nz" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl bg-white p-6">
                <Image
                  src="/Lifecycle.png"
                  alt="Lifecycle Fire and General"
                  width={600}
                  height={400}
                  className="w-full max-w-md object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}