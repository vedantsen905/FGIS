'use client';

import { FiX } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-green-200 pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">Terms of Business</h1>
          <button 
            className="text-gray-400 hover:text-green-700 transition p-2 -mr-2"
            aria-label="Close"
          >
            <FiX size={28} />
          </button>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-10">
          {/* Agreement Section */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">1. Agreement</h2>
            <ol className="list-decimal space-y-4 pl-6">
              <li className="text-gray-700 leading-relaxed">You have appointed <span className="font-semibold text-green-700">FG Insurance Services</span> ("we, us") as your broker in accordance with the terms of this agreement. By allowing us to continue to act as your broker, you agree to be bound by the terms of this agreement.</li>
              <li className="text-gray-700 leading-relaxed">This agreement sets out the terms and conditions ("the terms") on which we will provide all services to you, unless we agree otherwise, in writing.</li>
              <li className="text-gray-700 leading-relaxed">As your insurance broker, we act as your representative in arranging insurance on your behalf. In addition, if requested, we may make recommendations and provide you with our opinion regarding potential insurers based on your requirements. However, the final selection of insurer and the insurance product will remain your choice and responsibility.</li>
              <li className="text-gray-700 leading-relaxed">These terms apply until they are varied, by agreement, in writing between us, or until our appointment is cancelled. We may vary the services we provide you from time to time, on providing notice to you.</li>
              <li className="text-gray-700 leading-relaxed">These terms are in addition to any other terms we may agree on, from time to time. In the event of any inconsistency between these terms and such additional terms, the additional terms will prevail over these terms.</li>
              <li className="text-gray-700 leading-relaxed">You will be taken to have accepted the terms of this agreement by continuing to instruct us, unless we otherwise agree in writing.</li>
            </ol>
          </section>

          {/* Services Section */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">2. Services</h2>
            <ol className="list-decimal space-y-4 pl-6">
              <li className="text-gray-700 leading-relaxed">We are members of:
                <ol className="list-decimal space-y-2 pl-6 mt-2">
                  <li className="text-gray-700 leading-relaxed">The Insurance Brokers Association of New Zealand Inc. (IBANZ), a professional body representing the interests of member insurance brokers, and subscribe to the IBANZ Code of Practice which can be found at www.ibanz.org.nz</li>
                  <li className="text-gray-700 leading-relaxed">Steadfast NZ Limited (Steadfast), which provides us with technology platforms, management, marketing, professional, technical and buying benefits and services support.</li>
                </ol>
              </li>
              <li className="text-gray-700 leading-relaxed">Our services are limited to the provision of insurance broking, risk management and financial advice. We do not act as an insurer or offer safety inspections, valuations, or advice on all risks.</li>
              <li className="text-gray-700 leading-relaxed">We cannot guarantee that all risks to your assets, person or business will be covered by any insurance we arrange on your behalf. You should carefully read all policies, and other documentation, we issue so you understand what is or is not covered.</li>
              <li className="text-gray-700 leading-relaxed">While we will make recommendations regarding insurers based on your requirements, the final choice of the insurer will remain your responsibility.</li>
              <li className="text-gray-700 leading-relaxed">We will perform our services with reasonable care, diligence and skill, based on the needs that you have expressly advised us of along with the information you have provided.</li>
              <li className="text-gray-700 leading-relaxed">We may provide you with assistance in placing and servicing overseas insurance, or the management of overseas risk and may engage the services of a third-party consultant to assist us with the provision of such services.</li>
              <li className="text-gray-700 leading-relaxed">We make no representation or warranty concerning the solvency or ability of any insurer to pay claims. In New Zealand, insurers are required to comply with the provisions of the Insurance (Prudential Supervision) Act 2010 Financial Strength Rating. We will inform you of such ratings and the rating scale.</li>
              <li className="text-gray-700 leading-relaxed">We will negotiate with insurers on your behalf and will use our best endeavours to ensure that policies and endorsements for insurance we place on your behalf are issued by your insurers promptly and correctly. These documents detail the precise terms and conditions relating to the insurance we have arranged for you and the information contained in them is important. You should carefully read these documents to confirm they meet your requirements and store these documents safely.</li>
              <li className="text-gray-700 leading-relaxed">Upon our receipt of premiums and related statutory charges from you, we will arrange for their timely disbursement to the relevant insurers.</li>
            </ol>
          </section>

          {/* Remuneration Section */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">3. Remuneration</h2>
            <ol className="list-decimal space-y-4 pl-6">
              <li className="text-gray-700 leading-relaxed">We will be remunerated by way of commission received from the insurer we place your policy with (this includes renewals and some variations). We may also charge you a fee for implementing any advice we provide</li>
              <li className="text-gray-700 leading-relaxed">The commission we receive is a percentage of the premium payable by you (excluding government charges, levies and taxes). Some insurers may pay us more than others. The rate of commission can vary according to the type of insurance and cover provided and the way the transaction is arranged.</li>
              <li className="text-gray-700 leading-relaxed">Where we arrange the placing and servicing of insurance overseas, our overseas representatives may also receive remuneration from the relevant insurer.</li>
              <li className="text-gray-700 leading-relaxed">If you wish us to provide services in addition to those already agreed, we may charge you an additional fee. Such additional fees will be mutually agreed, prior to us undertaking those services.</li>
              <li className="text-gray-700 leading-relaxed">We may pay a referral fee to any party who has referred you to us. This will be paid out of the commission received by us from the insurer and any fee you pay us. We may also receive a referral fee if we refer you to another party that performs additional services for you.</li>
              <li className="text-gray-700 leading-relaxed">If we, on instruction, arrange premium funding for you, we may earn a commission from the premium funder. This is usually calculated as a percentage of the amount funded. The details of your premium funding arrangement will be set out in a separate agreement between you and the premium funder.</li>
              <li className="text-gray-700 leading-relaxed">We reserve the right to set off any outstanding sums that you owe us, in connection to any policy of insurance, from any money we receive on your behalf, in relation to that insurance.</li>
              <li className="text-gray-700 leading-relaxed">We reserve the right to make an administration charge for issuing replacement policies, certificates, copy policies or certificates requested by other parties.</li>
              <li className="text-gray-700 leading-relaxed">In the event of a policy being cancelled mid-term, and not replaced by another policy, we will refund the returned premium we receive from the insurer, subject to any cancellation or administrative fee imposed by that insurer. In these circumstances we do not refund any proportion of any commission, brokerage or fee we have received.</li>
            </ol>
          </section>

          {/* Your Responsibilities Section */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">4. Your Responsibilities</h2>
            <ol className="list-decimal space-y-4 pl-6">
              <li className="text-gray-700 leading-relaxed">In respect of the services we provide under this agreement, you are responsible as follows:
                <ol className="list-decimal space-y-2 pl-6 mt-2">
                  <li className="text-gray-700 leading-relaxed">Your policy documents contain the terms and conditions of your insurance cover and impose obligations on you. You should carefully read and understand this information, ensuring the insurance cover satisfies your needs and that you understand your obligations. If you have not received or have misplaced your policy document, please ask us for a duplicate copy.</li>
                  <li className="text-gray-700 leading-relaxed">Before taking out an insurance policy, and at the time of renewing any policy, you must provide us with accurate, complete and timely information, including all information which may be material to an insurer's assessment of any risk for which you have asked us to arrange insurance cover. This includes any material or relevant change of circumstance during the term of your policy and on renewal. We are not responsible for checking the accuracy or completeness of any information you provide to us or any insurer. We will not be responsible for any consequence resulting from a failure by you to disclose all material facts to an insurer (including, without limitation, the possibility of your insurance policies being rendered void or limited).</li>
                  <li className="text-gray-700 leading-relaxed">You must advise us, as soon as practicable, on becoming aware of any event or circumstance that may give rise to you making a claim under your insurance policy(ies). Failure to advise an insurer of such an event or circumstance could prejudice your rights under your insurance policy. If you fail to disclose or misrepresent any relevant information, this could invalidate your policy and mean that any claims under your policy may not be paid to you. We will advise you if you need to complete a claim form or produce documentation to support your claim.</li>
                  <li className="text-gray-700 leading-relaxed">After receiving your insurance documents from us, you must check them and advise us promptly of anything that does not meet your requirements. Any errors should be notified to us immediately.</li>
                  <li className="text-gray-700 leading-relaxed">You must pay the premium(s) any statutory charges, government levies (including the EQC and Fire and Emergency levies), taxes, GST and fees) as detailed in our invoice(s), unless premium funding has been arranged, in which case you will have a separate arrangement to pay with the premium funder. On request, we can provide you with information about premium payment options when we provide our quotation.</li>
                  <li className="text-gray-700 leading-relaxed">It is your obligation to ensure payment of premiums and other relevant charges on time. Your insurer has the right to cancel your policy if premiums are not paid on time and you will lose the insurance coverage. The insurer may also charge a short-term premium for the time they have insured the risk. You may be charged interest and/or fines and penalties for late payment of any government or statutory charges as previously referred to.</li>
                  <li className="text-gray-700 leading-relaxed">We will comply with our obligations under the Health and Safety at Work Act and expect you to assist us in doing so, ensuring, as reasonably practical, that the safety of our people is not put at risk when they may visit.</li>
                  <li className="text-gray-700 leading-relaxed">We have no obligation to fund any premium, taxes or fees (if applicable) on your behalf and we will have no responsibility for any loss you may suffer as a result of insurers cancelling your policy or taking action as a result of late payment. Please contact us immediately if you are unable to make any premium payment.</li>
                  <li className="text-gray-700 leading-relaxed">We hold file material and correspondence regarding the services provided to you for at least 7 years, after which we may destroy your file without notice. It may be possible that you need to make a claim against a policy after this period. You remain responsible for your paperwork and correspondence and should keep your policy documents in a safe place.</li>
                </ol>
              </li>
            </ol>
          </section>

          {/* Conflicts of Interest Section */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">5. Conflicts of Interest</h2>
            <ol className="list-decimal space-y-4 pl-6">
              <li className="text-gray-700 leading-relaxed">Should a situation arise where a potential conflict of interest could arise, either between ourselves, one of our clients, or one of our service or product providers and the services we provide to you, we will contact you and work together with you to find a suitable solution.</li>
              <li className="text-gray-700 leading-relaxed">We are a member of Steadfast. Steadfast has arrangements with insurers and premium funders, under which Steadfast receives a professional services fee for each insurance policy arranged by us with those insurers or funded through premium funders. These payments are used to operate Steadfast. We may receive a proportion of this professional services fee at the end of each financial year</li>
            </ol>
          </section>

          {/* Your Information Section */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">6. Your Information</h2>
            <ol className="list-decimal space-y-4 pl-6">
              <li className="text-gray-700 leading-relaxed">We will hold any personal information that you provide to us in accordance with the Privacy Act 2020. Any such information that we request from you will be used pursuant to the provision of the services.</li>
              <li className="text-gray-700 leading-relaxed">It may be necessary for us to pass your information on to insurers and other product or service providers which may provide us with additional support in connection with our provision of the services.</li>
              <li className="text-gray-700 leading-relaxed">Unless you instruct us not to do so, we may also contact you in connection with other products or services that we feel may be of interest or benefit to you.</li>
              <li className="text-gray-700 leading-relaxed">You have the right to access and correct any of your personal information that we hold. Such information is held by us at 430 Ulster Street Beerescourt Hamilton-3200</li>
              <li className="text-gray-700 leading-relaxed">You can access our Privacy Policy on our website www.fgis.co.nz</li>
            </ol>
          </section>

          {/* Electronic Communications Section */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">7. Electronic Communications</h2>
            <ol className="list-decimal space-y-4 pl-6">
              <li className="text-gray-700 leading-relaxed">We may correspond with you by electronic means unless you instruct us not to. We are not response for any risks associated with electronic communication, including loss of data.</li>
            </ol>
          </section>

          {/* Complaints and Disputes Section */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">8. Complaints and Disputes</h2>
            <ol className="list-decimal space-y-4 pl-6">
              <li className="text-gray-700 leading-relaxed">As a financial advice provider, we are required to have an internal dispute resolution scheme. We are also a member of Financial Services Complaints Ltd, an independent dispute resolution service. This is a requirement of our licence as a financial advice provider.</li>
              <li className="text-gray-700 leading-relaxed">Our Disputes Process is explained in full on our web site at www.fgis.co.nz. If you do not have access to the internet please ask us and we will provide you with a hard copy of our complaints policy.</li>
            </ol>
          </section>

          {/* Termination Section */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">9. Termination</h2>
            <ol className="list-decimal space-y-4 pl-6">
              <li className="text-gray-700 leading-relaxed">Either party can terminate this agreement by providing the other party one month's written notice of termination. Upon such termination notice being issued or received by us, at the end of the notice period we will cease providing you services and will:
                <ol className="list-decimal space-y-2 pl-6 mt-2">
                  <li className="text-gray-700 leading-relaxed">withdraw from any negotiations in progress, including, without limitation, any claims or policy renewals;</li>
                  <li className="text-gray-700 leading-relaxed">pay any premiums we have received from you, but have not yet been disbursed, to your insurer unless agreed by the insurer in writing; and upon request, deliver to you copies of relevant correspondence we have had with your insurer in respect of any current claim.</li>
                </ol>
              </li>
              <li className="text-gray-700 leading-relaxed">If a contract of insurance is cancelled before the expiry of the period of insurance, we may refund the net premium we receive from your insurers(s). In no circumstances will we refund our fees, commissions or brokerage charged when the policy was arranged.</li>
              <li className="text-gray-700 leading-relaxed">This agreement may be terminated with immediate effect by either party in the event of: (a) Insolvency of the other party; or (b) In respect of breach of any regulatory requirements, laws or rules.</li>
              <li className="text-gray-700 leading-relaxed">We may terminate this agreement with immediate effect on dishonest or fraudulent acts or omissions committed by you, or behaviour that, in our opinion, is unreasonable or threatening.</li>
              <li className="text-gray-700 leading-relaxed">We will not cancel your contract of insurance without your written instruction. Some insurance contracts contain a non-cancellation clause or cancellation penalties which, for the avoidance of doubt, you will be responsible for paying.</li>
              <li className="text-gray-700 leading-relaxed">We will keep all information you provide us about your business confidential and only disclose it in the normal course of negotiating, arranging and administering your insurance and, except where disclosure is required by law or where the information is already in the public domain.</li>
              <li className="text-gray-700 leading-relaxed">You consent to being entered into our marketing database and, for the purposes of the Unsolicited Electronic Messages Act 2007, you expressly consent to receiving email communications from us with regard to our business or the insurance industry. You may revoke such consent at any time, and we will remove you from our marketing database.</li>
              <li className="text-gray-700 leading-relaxed">Any failure by us to enforce any right or obligation under these terms, will not in any way limit or waive our right to subsequently enforce such right or obligation.</li>
              <li className="text-gray-700 leading-relaxed">If any part of these terms becomes invalid or unenforceable for any reason whatsoever, the remaining terms will continue to apply subject to any modifications as is necessary to continue to give them effect.</li>
              <li className="text-gray-700 leading-relaxed">We accept no liability for instructions received until we acknowledge receipt and acceptance of the instructions to you in writing.</li>
              <li className="text-gray-700 leading-relaxed">No cover or action by us shall be deemed to be taken or given until confirmed by us in writing.</li>
              <li className="text-gray-700 leading-relaxed">We shall be entitled to rely on all written instructions without further enquiry, including email instructions.</li>
              <li className="text-gray-700 leading-relaxed">Termination of this agreement will not, unless otherwise provided, affect the provisions relating to limitation of liability and confidentiality contained in this agreement.</li>
            </ol>
          </section>

          {/* Jurisdiction Section */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">10. Jurisdiction</h2>
            <ol className="list-decimal space-y-4 pl-6">
              <li className="text-gray-700 leading-relaxed">This Agreement is governed by New Zealand law and the New Zealand courts have exclusive jurisdiction.</li>
              <li className="text-gray-700 leading-relaxed">If you have any queries about our services please contact us on compliance@fgis.co.nz or 0800344700.</li>
            </ol>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}