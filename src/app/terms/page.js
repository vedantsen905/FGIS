import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Make sure to import Footer

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 sm:p-10 lg:p-12">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
                Terms & Conditions
              </h1>
              
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-6">
                  By accessing the FG Insurance Services Website/s ("Website"), you agree to be bound by the terms and conditions set out below. The domain name for the Website is owned by FGIS Limited. The Website/s, content and information available through the Website/s are owned and operated by FG Insurance Services.
                </p>

                <p className="mb-6">
                  FGIS has taken all reasonable care to ensure the accuracy of the information available on or through the Website. However, it is of a general nature and does not take into account any individual's particular circumstances. FG Insurance Services makes no warranty, express or implied for accuracy, correctness, completeness or use of information that is available on or through the Website.
                </p>

                <p className="mb-6">
                  FG Insurance Services will take action to correct any error or inaccuracy which is brought to its attention, within a reasonable time.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                  Amendments
                </h2>
                <p className="mb-6">
                  FG Insurance Services may amend these terms of use from time to time so you should check and read these terms of use regularly. By continuing to use this site after any such amendment, you are deemed to have agreed to the amended terms of use.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                  Jurisdiction and governing law
                </h2>
                <p className="mb-6">
                  This site and content has been prepared in accordance with the requirements of New Zealand law. These terms and any matters or disputes connected with this site will be governed by New Zealand laws and will be dealt with by New Zealand courts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;