'use client';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const partners = [
  {
    name: 'NZI Insurance',
    logo: '/nz.png',
    link: 'https://www.nzi.co.nz/',
  },
  {
    name: 'Lumley Insurance',
    logo: '/lumley.png',
    link: 'https://www.lumley.co.nz/',
  },
  {
    name: 'ANDO Insurance',
    logo: '/ando.jpg',
    link: 'https://www.ando.co.nz/',
  },
  {
    name: 'AIG Insurance',
    logo: '/aig.jpg',
    link: 'https://www.aig.co.nz/',
  },
  {
    name: 'CHUBB Insurance',
    logo: '/chubb.jpg',
    link: 'https://www.chubb.com/nz-en/',
  },
  {
    name: 'QBE Insurance',
    logo: '/qbe.png',
    link: 'https://www.qbe.com/nz',
  },
  {
    name: 'VERO Insurance',
    logo: '/vero.jpg',
    link: 'https://www.vero.co.nz/',
  },
  {
    name: 'VERO Marine Insurance',
    logo: '/vero m.jpg',
    link: 'https://www.vero.co.nz/marine.html',
  },
  {
    name: 'VERO Liability',
    logo: '/vero l.png',
    link: "https://www.veroliability.co.nz/"
  },
  {
    name: 'DUAL Insurance',
    logo: '/dual.jpg',
    link: "https://www.dualnewzealand.co.nz/"
  },
  {
    name: 'Delta Insurance',
    logo: '/delta.png',
    link: "https://deltainsurance.co.nz/"
  },
  {
    name: 'Rosser UnderWriting',
    logo: '/rosser.png',
    link: "https://rosser.co.nz/"
  },
  {
    name: 'Protecsure UnderWriting',
    logo: '/prote.png',
    link: "http://www.protecsure.co.nz/"
  },
  {
    name: 'Star Insurance Specialists',
    logo: '/star.png',
    link: "https://starinsure.co.nz/"
  },
];

export default function InsurancePartners() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Insurance Partners
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with New Zealand's leading insurance providers to bring you the best coverage options.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative w-full h-32 mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-center font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}