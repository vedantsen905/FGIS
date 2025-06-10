import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
        
      <Navbar />
      {/* Header with spacing to avoid navbar overlap */}
      <div className="pt-20 pb-10 bg-gradient-to-r from-green-50 to-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-green-700 text-center">Claims Process</h1>
        </div>
      </div>
 

      {/* Main content container */}
      <div className="container mx-auto px-6 py-10 space-y-24 max-w-7xl">
        {/* Section 1: Claims Process Intro */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/cl1.jpeg" 
              alt="Claims Process" 
              width={700} 
              height={500} 
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="prose lg:prose-xl text-gray-700">
              <p>
                FGIS understands that a claim incident can be daunting which is why we have implemented an internal in-depth
                claim process in order for us to effectively offer end-to-end assistance in your claim process. As part of our
                service to you as our clients, our dedicated claims team endeavors to assist and guide you in your claim process
                every step of the way. We handle your claim from start to finish, providing continuity, expertise, and advocating
                on your behalf with the providers. We'll not only save you time, but strive to make it as simple and hassle-free
                as possible for you.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Claim Incident Notification */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="prose lg:prose-xl text-gray-700">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Claim Incident Notification</h2>
              <p className="mb-4">
                Claim incident notification can be done either verbally by contacting our claims team over the phone in which
                case our friendly claims handler will discuss the claim incident with you and advise you of the next steps or
                alternatively a claim incident notification can be done via email to the claims team. A friendly claims team
                handler will then contact you and advise you of the next steps.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-medium text-green-800"><span className="font-semibold">Claim Team Contact:</span> 021 022 66913</p>
                <p className="font-medium text-green-800">
                  <span className="font-semibold">Claim Team Email:</span>{' '}
                  <a href="mailto:claims@fgis.co.nz" className="text-blue-600 hover:text-blue-800 transition-colors">claims@fgis.co.nz</a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/cl2.jpeg" 
              alt="Claim Incident" 
              width={700} 
              height={500} 
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        {/* Section 3: Completion of Claim Form */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/cl3.jpeg" 
              alt="Claim Form" 
              width={700} 
              height={500} 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="prose lg:prose-xl text-gray-700">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Completion of Claim Form</h2>
              <p>
                A claim form will be sent to you with concise instructions and relevant requirements for completion as well as
                contact details for our claims team should you have any queries or require assistance in completing the claim
                form. Once you have returned the completed claim form back to our dedicated claims team, we will submit your
                claim to the relevant insurance provider. You have the option of submitting a claim directly through to the
                insurance provider skipping us the broker – FGIS. In this instance unless you or the insurance provider notifies
                our claims team of this action, there is no way for our claims team to follow up on nor will we be aware that a
                claim exists. Should we, however, be made aware, then the claims process will continue as stipulated.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Claim Settlements */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="prose lg:prose-xl text-gray-700">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Claim Settlements and Finalization</h2>
              <p>
                Settlement offers are advised towards the end of the claim process. This will generally include a breakdown of
                the offer. We will always enquire as to your acceptance of the settlement offer and we will advocate on your
                behalf with the insurance providers for the best possible outcome.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/cl4.jpeg" 
              alt="Claim Settlement" 
              width={700} 
              height={500} 
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        {/* Section 5: Claim Follow Up */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/cl5.jpeg" 
              alt="Claim Follow Up" 
              width={700} 
              height={500} 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="prose lg:prose-xl text-gray-700">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Claim Follow Up</h2>
              <p>
                Claim follow ups are actioned throughout a particular claim's lifespan. Follow ups will always include claim
                acknowledgement, claim reference number and claim status. Requirement requests, status update requests and/or
                general updates are attended to as promptly as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Meet the Team</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          {/* Claims Manager */}
          <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto mb-16 text-center border border-green-100">
            <h3 className="text-xl font-bold text-green-800 mb-2">Claims Manager</h3>
            <p className="text-gray-700 mb-1">Sharon Petzer</p>
            <p className="text-gray-700 mb-1"><span className="font-semibold text-green-800">Contact:</span> 021 022 66913</p>
            <p className="text-gray-700 mb-1"><span className="font-semibold text-green-800">Hours:</span> Between 8am and 5pm Monday to Friday</p>
            <p className="text-gray-700">
              <span className="font-semibold text-green-800">Email:</span>{' '}
              <a href="mailto:claims@fgis.co.nz" className="text-blue-600 hover:text-blue-800 transition-colors">claims@fgis.co.nz</a>
            </p>
          </div>

          {/* Claims Teams */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Property Claims */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center border border-green-100 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-green-800 mb-2">Property Claims team</h4>
              <p className="text-gray-700 mb-1">Farha Sayed</p>
              <p className="text-gray-700 mb-1"><span className="font-semibold text-green-800">Hours:</span> Between 1pm and 10pm Monday to Friday</p>
              <p className="text-gray-700">
                <span className="font-semibold text-green-800">Email:</span>{' '}
                <a href="mailto:claims@fgis.co.nz" className="text-blue-600 hover:text-blue-800 transition-colors">claims@fgis.co.nz</a>
              </p>
            </div>

            {/* Motor Claims */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center border border-green-100 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-green-800 mb-2">Motor Claims team</h4>
              <p className="text-gray-700 mb-1">Neeraj Dobriyal</p>
              <p className="text-gray-700 mb-1"><span className="font-semibold text-green-800">Hours:</span> Between 1pm and 10pm Monday to Friday</p>
              <p className="text-gray-700">
                <span className="font-semibold text-green-800">Email:</span>{' '}
                <a href="mailto:claims@fgis.co.nz" className="text-blue-600 hover:text-blue-800 transition-colors">claims@fgis.co.nz</a>
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}