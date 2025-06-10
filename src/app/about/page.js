import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Fixed Navbar at the top */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* FGIS Heading positioned below navbar with proper spacing */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">FGIS</h1>
        </div>
      </header>

      {/* Main Content with adjusted top spacing */}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 space-y-16 md:space-y-20 mt-0">
        {/* Section 1 */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-green-600 text-2xl md:text-3xl font-semibold mb-6">
            Insure. Business. Confidence.
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              Since our inception in 2017, FG Insurance Services has been at the forefront of providing expert insurance solutions.
              Our commitment is to empower businesses like yours with specialized coverage options, ensuring your path to prosperity and foster confidence.
            </p>
            <p>
              With years of dedicated service, FG Insurance Services has honed its understanding of the distinct insurance needs of businesses.
              Our journey has been marked by crafting personalized strategies that offer the assurance you need to flourish.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-green-600 text-2xl md:text-3xl font-semibold mb-6">
            Customized Solutions
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              Drawing on our deep-rooted understanding of the New Zealand business landscape, we curate bespoke insurance solutions 
              designed to safeguard your enterprise and grant you a sense of tranquility. Our commitment goes beyond the transactional 
              – we're here to establish a foundation of trust. From your very first consultation to the intricate process of managing 
              claims, our service stands as a testament to our unwavering dedication.
            </p>
            <p>
              We provide exceptional trust-based service from the initial consultation to claims processing and management.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-green-600 text-2xl md:text-3xl font-semibold mb-6">
            Expert Support
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              We understand the complexities of dealing with insurance companies, which is why we're here to simplify the process for you. 
              In the event of a claim, we provide comprehensive support to ensure you receive the full benefits of your insurance program.
            </p>
            <p>
              Our experienced team is passionate about serving as your trusted insurance advisors and supporting your business every step of the way.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}