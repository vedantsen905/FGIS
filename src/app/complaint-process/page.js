'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ComplaintProcess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Main Complaint Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8 mb-10">
          <h1 className="text-3xl font-bold text-green-700 text-center mb-8">Complaint Process</h1>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-6">
              We're committed to delivering services that meet your expectations. We acknowledge that all clients have the right to express dissatisfaction and to have their complaints heard in a fair and prompt manner. Complaints, though undesirable, also offer us an opportunity to improve our operations, build a stronger relationship with you, and show you that as a client your opinions and needs are important to us.
            </p>
            <p className="mb-6">
              If however, we have let you down, we want to hear about it. Complaints may be received verbally either in person or by telephone, or in written and email form.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mb-4">What to Expect When You Make a Complaint</h2>
            <p className="mb-6">
              We are committed to dealing with complaints efficiently and positively. When a complaint is received, we will listen to you with patience and understanding and promise to be courteous. We will work with you to obtain a satisfactory resolution, keeping your best interest in mind.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mb-4">How to Make a Complaint</h2>
            <p className="mb-6">
              Each complaint, regardless of the way it was received, will be recorded and retained in our Complaints Register. You can let us know about your concern in any of the following ways:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>A quick chat to your advisor or one of our staff either telephonically or in person. This is often enough to sort out your concern.</li>
            </ul>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-green-700 mb-1">Call us on:</p>
                <p className="text-gray-700">0800 344 700</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-green-700 mb-1">Visit us at:</p>
                <p className="text-gray-700">430 Ulster Street Beerescourt Hamilton 3200</p>
              </div>
            </div>

            <p className="mb-6">
              Alternatively, you can send an email or letter. A representative will endeavour to reach out to you within 24 hours of receiving a written complaint (or within 48 hours if received outside of working hours on a weekend).
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-green-700 mb-1">Send an email to:</p>
                <a href="mailto:complaints@fgis.co.nz" className="text-blue-600 hover:underline break-all">complaints@fgis.co.nz</a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-green-700 mb-1">Send a letter to:</p>
                <p className="text-gray-700">PO Box 21017 Rototuna Hamilton 3256</p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8 space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2">
              <Image 
                src="/c1.jpeg"
                alt="Identify the Issues"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">1</div>
                <h2 className="text-xl font-semibold text-green-700">Identify the Issues</h2>
              </div>
              <div className="prose text-gray-700">
                <p>
                  We will go through a process to identify the exact issues you as the client have raised. We will work with you to identify why you believe it is an issue and the impact of the issue on yourself or your business. From there, we will be able to identify what outcome(s) you are seeking. An attempt to find an outcome that is agreeable to all parties concerned will then be made.
                </p>
                <p className="mt-4">
                  Should your complaint be against the insurance provider, we will instruct you of your right to submit a complaint directly to them and provide the relevant contact information in order for you to do so.
                </p>
                <p className="mt-4">
                  We will further act as the middleman to try to come to an agreeable outcome for all parties concerned.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
            <div className="w-full lg:w-1/2">
              <Image 
                src="/c2.jpeg"
                alt="Senior Manager Involvement"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">2</div>
                <h2 className="text-xl font-semibold text-green-700">Senior Manager Involvement</h2>
              </div>
              <p className="text-gray-700">
                If we can't resolve the issue together, you'll be referred to a senior manager who will aim to investigate and resolve your complaint within two working weeks.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-green-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">3</div>
              <h2 className="text-xl font-semibold text-green-700">Independent Dispute Resolution</h2>
            </div>
            <div className="prose text-gray-700">
              <p>
                If after working with a senior manager we still haven't been able to resolve the issue, you will be directed to escalate your case to our independent dispute resolution provider.
              </p>
              <p className="font-semibold text-green-700 mt-4">
                We have appointed Financial Services Complaints Limited as our independent dispute resolution provider.
              </p>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-green-700 mb-1">FSCL - Financial Services Complaints Limited</p>
                <p className="mb-1"><span className="font-semibold">Call:</span> 0800 347 257</p>
                <p className="mb-1">
                  <span className="font-semibold">Email:</span>{' '}
                  <a href="mailto:complaints@fscl.org.nz" className="text-blue-600 hover:underline">complaints@fscl.org.nz</a>
                </p>
                <p><span className="font-semibold">Address:</span> PO Box 5967, Wellington 6140</p>
              </div>
              <p className="mt-4">
                If a complaint is escalated to FSCL, information will be gathered from both parties. FSCL will then enter into an investigation and/or mediation stage which may involve meetings or video/telephone conference calls with the representative of FSCL acting as a mediator. The goal of mediation is to reach an agreement. If this doesn't happen, FSCL will recommend a settlement based on the information available. Should the proposed settlement not be accepted, FSCL will impose a final decision that is binding.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">4</div>
              <h2 className="text-xl font-semibold text-green-700">Further Escalation</h2>
            </div>
            <p className="text-gray-700 mb-8">
              Should FSCL's decision be disputed, the parties have the option to progress to a dispute tribunal or to the appropriate court of law.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mb-4">What Constitutes a Complaint</h2>
            <p className="text-gray-700">
              A complaint is an expression of dissatisfaction communicated by a client who has received financial advice about a product or service through us and there is a request to remedy the situation.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComplaintProcess;