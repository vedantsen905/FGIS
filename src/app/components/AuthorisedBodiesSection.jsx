'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AuthorisedBodiesSection() {
  return (
    <section className="bg-gray-8 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side text content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">
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
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <a href="https://www.lcfg.co.nz" target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl">
              <Image
                src="/Lifecycle.png"
                alt="Lifecycle Fire and General"
                width={600}
                height={400}
                className="w-full max-w-md object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}