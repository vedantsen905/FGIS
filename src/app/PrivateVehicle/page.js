import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 animate-gradient-x"></div>
          <div className="relative z-10 py-20 px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Motor Insurance at a Glance
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-green-100 opacity-90 animate-fade-in-up">
                Comprehensive protection for your vehicle with flexible coverage options tailored to your needs
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* What is motor insurance? */}
                 <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              What is motor insurance?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Motor insurance is a type of insurance that provides coverage for vehicles like cars, trucks, motorcycles, and other road plying vehicles against loss and legal liability. This insurance covers damages resulting from physical damage, accidents, theft, and other insurable incidents.
              </p>
              <p>
                The policy holder can choose to insure the vehicle for an agreed amount or the market value of the vehicle. Depending on the type of vehicle, the insurance policy can be tailored to meet the specific needs of the policyholder. For example, if the vehicle is a classic car or a modified vehicle, the policy may need to provide additional coverage.
              </p>
              <p>
                Motor insurance is essential for vehicle owners as it protects them against financial losses resulting from accidents and other insurable incidents. It also helps to cover the costs of repairing or replacing third-party vehicles in accidents where the policyholder is at fault. Overall, having a motor insurance policy provides peace of mind and financial protection for vehicle owners.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              What you should consider?
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Vehicle insurance is not mandatory in New Zealand, but it is recommended to have at least third party insurance to cover the costs of damage to someone else's vehicle in the event of an accident.
              </p>
              <p>
                At FG Insurance, they offer "Agreed Value" coverage for owned vehicles. This means that they will work with the policyholder to determine the real value of their car and price the policy accordingly. This approach differs from other insurance providers who may only provide market value coverage.
              </p>
              <p>
                Comprehensive motor insurance can cover the cost of a stolen vehicle, paying either the agreed value or market value so the policyholder can buy another car. Third party property damage (TPPD) insurance can cover the costs that the policyholder may be liable to pay if they are at fault and damage or write off someone else's car.
              </p>
              <p>
                Overall, it is important to consider getting vehicle insurance to protect oneself from financial losses resulting from accidents, theft, or other insurable incidents. FG Insurance provides tailored insurance policies to meet the specific needs of the policyholder.
              </p>
            </div>
          </div>
        </section>



        {/* Stats Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-green-700 text-center">
            Did you know?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-green-600 text-4xl font-bold mb-4">24,416</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Motor Vehicles</h3>
              <p className="text-gray-600 mb-4">
                In 2019, according to the NZ Police's Crime in New Zealand at a Glance report, 24,416 motor vehicles were stolen or broken into in New Zealand.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block">
                <p className="text-sm font-medium text-green-700">
                  Highlights the need for comprehensive motor insurance
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-green-600 text-4xl font-bold mb-4">36,855</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vehicle Crashes</h3>
              <p className="text-gray-600 mb-4">
                The 2016 Te Manatu Waka Motor Vehicle Crashes in New Zealand report recorded 36,855 vehicle crashes in New Zealand.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block">
                <p className="text-sm font-medium text-green-700 italic">
                  Importance of third-party insurance for accident coverage
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-green-600 text-4xl font-bold mb-4">$1.16B</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">In Claims</h3>
              <p className="text-gray-600 mb-4">
                Insurance companies paid $1,159,798,847 in claims for private and commercial vehicles until September 2020, according to the Insurance Council of New Zealand's Market Data report.
              </p>
              <div className="mt-4 px-4 py-2 bg-green-50 rounded-lg inline-block">
                <p className="text-sm font-medium text-green-700 italic">
                  Financial protection against insurable incidents
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section className="space-y-12">
          <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
              Types of Motor Insurance Covers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Comprehensive */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive</h3>
                <p className="text-gray-700">
                  Covers accidental loss or damage to the insured vehicle, as well as the cost of towing, transportation, and storage of the vehicle. Protects against a wide range of risks, including natural disasters, theft, vandalism, and collisions.
                </p>
              </div>

              {/* Third Party Fire and Theft */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Third Party Fire and Theft</h3>
                <p className="text-gray-700">
                  Covers loss or damage to the insured vehicle caused by fire and theft, as well as third-party property damage. Provides protection between comprehensive and third party only insurance.
                </p>
              </div>

              {/* Third Party Only */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-md">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Third Party Only</h3>
                <p className="text-gray-700">
                  Covers the cost of third-party property damage in the event of an accident caused by the policyholder. Provides the minimum level of coverage required by law in New Zealand and is typically the most affordable option.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Motor Insurance Covers */}
        <section className="space-y-12">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-green-700 mb-8">
              What Motor Insurance Covers
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              While exact coverage may vary between insurers, motor insurance generally covers:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Cover to repair or replace the vehicle if it's damaged or stolen</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Damage to modifications, options, or accessories due to accidental damage, fire, flood, storm, theft, attempted theft, vandalism, or a malicious act</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Cover against damage to third party vehicle or property when the policyholder is at fault, including legal liability and legal costs, generally capped at predetermined levels</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Emergency repairs to the vehicle, covered up to a specified limit</span>
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Choice of preferred repairer or one from a preferred repairer panel</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Cover for towing costs as well as trailer cover</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Option to include hire car cover following an accident or theft</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">Option to include excess-free windscreen repair or replacement</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Exclusions and Additional Info */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Exclusions */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-green-700 mb-8">
              What is usually not covered?
            </h2>
            <ul className="space-y-5 text-gray-700 text-lg">
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-4 mt-1">
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Loss caused by the legal seizure of the vehicle.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-4 mt-1">
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Loss caused by any act of terrorism, war, civil unrest.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-4 mt-1">
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Loss caused by the discharge of any pollutant or contaminant from the vehicle.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-4 mt-1">
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Loss arising from a breach of contract.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-4 mt-1">
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Loss caused by failure to secure the vehicle.</span>
              </li>
            </ul>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-2xl shadow-lg text-white">
            <h2 className="text-3xl font-bold text-white mb-8">
              CASE STUDY 
            </h2>
            <div className="space-y-6 text-green-50 text-lg leading-relaxed">
              <p>
                Mr. Chung was driving on Quarantine Road when he briefly looked away from the traffic ahead. Unfortunately, he looked back just as the car in front of him had come to a sudden stop. Despite his attempts to brake, Mr. Chung's front wheels locked and his car collided with the vehicle in front, causing minor damage to his own car but serious damage to the third party's car.
              </p>
              <p>
                After pulling over, Mr. Chung contacted his insurance broker who quickly arranged for his car to be towed and assessed. The next day, an assessor informed Mr. Chung that his car could be repaired and that his insurance policy would cover the cost.
              </p>
              <p>
                Since his policy also included a rental car, his insurance company helped him arrange for a hire car so he could continue commuting to work while his car was being repaired – and the cost of the rental car was also covered by his policy.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose FG Insurance */}
        <section className="bg-white p-10 rounded-2xl shadow-lg">
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
                <span className="text-gray-700 text-lg">Roadside Assistance</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">Fast and Simple Claim Service - online or by phone</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}