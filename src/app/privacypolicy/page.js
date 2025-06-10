'use client';
import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function PrivacyPolicy() {
  return (
  <div className="min-h-screen flex flex-col bg-white text-[#202020] font-sans">
  {/* Fixed Navbar */}
  <div className="sticky top-0 z-50 bg-white shadow-sm">
    <Navbar />
  </div>

  {/* Main Content with proper spacing below navbar */}
  <main className="flex-grow pt-30 pb-12 px-4 md:px-16"> {/* Increased pt-4 to pt-20 */}
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-600 mb-2">Version 2.0 - 24 July 2024</h2>
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {/* Introduction */}
        <section className="prose max-w-none">
          <p>
            FTIB//TA FG Insurance Services ("FGIS") is committed to protecting the privacy of individuals
            who interact with our brokerage. "Personal Information" is information that can identify an
            individual. This Privacy Policy outlines how we collect, use, disclose, and protect your
            personal information in accordance with the Privacy Act 2020 (New Zealand) and other
            applicable laws. This includes information that we collect both through our website and through
            other means (for example, from application and claim forms, telephone calls, e-mails and other
            communications with us, from claim investigators, witnesses or other third parties involved in
            our business dealings with an individual).
          </p>
        </section>
            {/* Contact Information */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Whom to Contact About your Personal Information</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our use of your Personal Information you
                can e-mail:{" "}
                <a
                  href="mailto:compliance@fgis.co.nz"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  compliance@fgis.co.nz
                </a>{" "}
                or write to:
              </p>
              <address className="not-italic text-gray-800 leading-6">
                The Compliance Officer<br />
                FG Insurance Services<br />
                430 Ulster Street<br />
                Hamilton 3200<br />
                New Zealand
              </address>
            </section>

            {/* Collection of Personal Information */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Collection of Personal Information</h2>
              <p className="mb-4">
                Depending on your relationship with us (for example, as a consumer policyholder; non-policyholder
                insured or claimant; witness; commercial broker or appointed representative; or other person
                relating to our business), Personal Information collected about you and your dependants may in
                certain circumstances include:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-800 pl-4">
                <li>
                  General identification and contact information: Name; address; e-mail and telephone details;
                  gender; marital status; family status; date of birth; passwords; educational background;
                  physical attributes; activity records, such as driving records; photos; employment history,
                  skills and experience; professional licences and affiliations; relationship to the policyholder,
                  insured or claimant; and date and cause of death, injury or disability.
                </li>
                <li>
                  Identification numbers issued by government bodies or agencies: Passport number; tax
                  identification number; or other licence number.
                </li>
                <li>
                  Financial information and account details: Payment card number; bank account number and account details; credit history and credit score; assets; income; and other relevant and required financial information.
                </li>
                <li>
                  Other sensitive information: In certain cases, we may receive sensitive information about the individual, and may also get access to an individual's criminal record or civil litigation history in the process of preventing, detecting and investigating fraud.
                </li>
                <li>
                  Telephone recordings: Recordings of telephone calls to our representatives and call centres.
                </li>
                <li>
                  Information enabling us to provide products and services: Location and identification of property insured (for example, property address, vehicle licence plate or identification number); travel plans; policy and claim numbers; coverage/peril details; cause of loss; prior accident or loss history; status as director or partner, ownership or management interest in an organisation; and other insurance held.
                </li>
                <li>
                  Marketing preferences and customer feedback: We may also get access to information through an individual's marketing preferences, contests, other sales promotion activities, voluntary customer satisfaction surveys etc. We collect this information directly from you or from third parties such as insurers, other brokers, or service providers.
                </li>
              </ul>
            </section>

            {/* Use of Personal Information */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Use of Personal Information</h2>
              <p className="mb-4">
                We will only use your Personal Information for the purpose for which it is obtained, subject to certain exceptions set out in the Privacy Act 2020. Depending on the purpose for which the Personal Information was obtained and on the specific circumstances, we may use your Personal Information to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-800 pl-4">
                <li>Communicate with you and others as part of our business.</li>
                <li>
                  Send you important information regarding changes to our policies, other terms and conditions, the website and other administrative information.
                </li>
                <li>
                  Make decisions about whether to provide insurance and assistance services, including claim assessment, processing and settlement; and, where applicable, manage claim disputes.
                </li>
                <li>
                  Assess your eligibility for payment plans and process your premium and other payments.
                </li>
                <li>
                  Provide improved quality, training and security.
                </li>
                <li>
                  Prevent, detect and investigate crime, including fraud and money laundering, and analyse and manage other commercial risks.
                </li>
                <li>
                  Carry out market research and analysis, including satisfaction surveys.
                </li>
                <li>
                  Provide marketing information (including information about other products and services offered by selected third-party partners) in accordance with preferences you have expressed.
                </li>
                <li>
                  Personalise your experience on the website by presenting individually tailored information and advertisements.
                </li>
                <li>
                  Identify you to the recipient of your messages through the website.
                </li>
                <li>
                  Allow participation in and to administer prize draws and similar promotions. Some of these activities have additional terms and conditions that you must read carefully.
                </li>
                <li>
                  Manage our infrastructure and business operations, and comply with internal policies and procedures, including those relating to auditing; finance and accounting; billing and collections; IT systems; data and website hosting; business continuity; and records, document and print management.
                </li>
                <li>
                  Resolve complaints, and handle requests for data access or correction.
                </li>
                <li>
                  Comply with applicable laws and regulatory obligations (including domestic and foreign), such as those relating to anti-money laundering and anti-terrorism; comply with legal process; and respond to requests from public and governmental authorities (including those outside your country of residence). Establish and defend legal rights; protect own operations or those of our group companies, insurance business partners, rights, privacy, safety or property and pursue available remedies or limit our damages.
                </li>
              </ul>
            </section>

            {/* Disclosure of Personal Information */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Disclosure of Personal Information</h2>
              <h3 className="text-lg font-semibold mb-3">International Transfer of Personal Information</h3>
              <p className="mb-4">
                For the purposes set out above, we:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-800 pl-4">
                <li>
                  may need to transfer personal information to parties located in other countries (including the countries that have a different data protection regime than is found in New Zealand). For example, in order to process international travel insurance claims and provide emergency medical assistance services when the insured party is travelling abroad.
                </li>
                <li>
                  may transfer information internationally to our group companies, service providers, business partners and governmental or public authorities.
                </li>
              </ul>
              <p className="mt-4">
                In all such cases, we will endeavour to ensure that your personal information continues to be held, used and sufficiently protected by the overseas recipient in accordance with the requirements of the Privacy Act 2020 and any other applicable laws or regulations.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Sharing of Personal Information</h3>
              <p className="mb-4">
                Subject to continuing to comply with the requirements of the Privacy Act 2020, FG Insurance Services may make Personal Information available to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-800 pl-4">
                <li>
                  Our group companies: The Compliance Officer is responsible for the management and security of jointly used Personal Information. Access to Personal Information within FGIS is restricted on a need-to-know basis.
                </li>
                <li>
                  Other insurance and distribution parties: In the course of marketing and providing insurance, and processing claims, FGIS may make Personal Information available to third parties such as other insurers; reinsurers; insurance and reinsurance brokers and other intermediaries and agents; appointed representatives; distributors; affinity marketing partners; and financial institutions, securities firms and other business partners.
                </li>
                <li>
                  Our service providers: External third-party service providers, such as, accountants, actuaries, auditors, experts, lawyers and other outside professional advisors; travel and medical assistance providers; call centre service providers; IT systems, support and hosting service providers; printing, advertising, marketing and market research and analysis service providers; banks and financial institutions that service our accounts; third-party claim administrators; document and records management providers; claim investigators and adjusters; construction consultants; engineers; examiners; jury consultants; translators; and similar third-party vendors and outsourced service providers that assist us in carrying out business activities.
                </li>
                <li>
                  Governmental authorities and third parties involved in court action: FGIS may also share Personal Information with governmental or other public authorities (including workers' compensation boards, courts, law enforcement, tax authorities and criminal investigations agencies); third-party civil legal process participants and their accountants, auditors, lawyers and other advisors and representatives; and any other party to whom the insured authorises us to release Personal Information.
                </li>
                <li>
                  Other third parties: We may share Personal Information with payees; emergency providers (fire, police and medical emergency services); retailers; medical networks, organisations and providers; travel carriers; credit bureaus; credit reporting agencies; and other people involved in an incident that is the subject of a claim; as well as other parties in any actual or proposed reorganisation, merger, sale or other transaction relating to all or any portion of our business, assets or stock. Personal Information shared by you on message boards, chat, profile pages and blogs, and other services on the website. Please note that any information you post or disclose through these services will become public information and may be available to visitors to the website and to the general public.
                </li>
              </ul>
              <p className="mt-4">
                We do not sell or rent your personal information to third parties for marketing purposes.
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Security</h2>
              <p className="mb-4">
                FGIS will take necessary measures required to keep all Personal Information secure and comply with the Information Privacy Principles under the Privacy Act 2020. We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. We have implemented physical, electronic, and managerial procedures to safeguard and secure the information we collect. If you have reason to believe that your interaction with us is no longer secure or that the security of any Personal Information has been compromised, please immediately notify us. In case FGIS provides Personal Information to a service provider, the said service provider will be selected carefully and will be required to use appropriate measures to protect the confidentiality and security of the Personal Information.
              </p>
            </section>

            {/* Retention of Personal Information */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Retention of Personal Information</h2>
              <p className="mb-4">
                FGIS will retain Personal Information in accordance with the Privacy Act 2020 and we will not keep any Personal Information for longer than is required for the purpose for which such information may be lawfully used.
              </p>
            </section>

            {/* Personal Information of Other Individuals */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Personal Information of Other Individuals</h2>
              <p className="mb-4">
                If you provide Personal Information regarding other individuals, you agree:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-800 pl-4">
                <li>(a) to inform the individual about the content of this Privacy Policy; and</li>
                <li>
                  (b) to obtain any legally required consent for the collection, use, disclosure, and transfer (including cross-border transfer) of Personal Information about the individual in accordance with this Privacy Policy.
                </li>
              </ul>
            </section>

            {/* Marketing Preferences */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Marketing Preferences</h2>
              <p className="mb-4">
                If you have insurance cover with FGIS, we may provide you with opportunities to tell us your marketing preferences, including in our communications to you. Subject to certain exceptions, we will not send you marketing-related emails unless we have obtained your express consent to do so. We will also allow you to opt-out from receiving any marketing-related e-mails from FGIS in accordance with the Unsolicited Electronic Messages Act 2007.
              </p>
            </section>

            {/* Accessing and Correcting Your Personal Information */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Accessing and Correcting Your Personal Information</h2>
              <p className="mb-4">
                You have the right to request access to and or correction of the personal information that we hold about you. You may gain access to or request correction of your Personal Information by writing to:
              </p>
              <address className="mb-4 not-italic bg-gray-50 p-4 rounded-lg">
                The Compliance Officer<br />
                FG Insurance Services<br />
                430 Ulster Street<br />
                Hamilton 3200<br />
                New Zealand<br />
                or email us at: compliance@fgis.co.nz
              </address>
              <p className='mb-4'>
                While access to this personal information may generally be provided free of charge, we reserve the right to charge for access requests in some limited circumstances. If you believe that any information we hold is inaccurate, please contact us to update your information.
              </p>
            </section>

            {/* Other Information we may collect through the Website */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Other Information we may collect through the Website</h2>
              <p className="mb-4">
                "Other Information" is any information that does not reveal your specific identity, such as: Browser information; Information collected through cookies, pixel tags and other technologies; Demographic information and other information provided by you; and Aggregated information. We and our third-party service providers may collect Other Information in a variety of ways, including:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-800 pl-4">
                <li>
                  Through your internet browser: Certain information is collected by most websites, such as your IP address, screen resolution, operating system type and version, internet browser type and version, time of the visit and the page(s) visited. We use this information for purposes such as calculating website usage levels, helping diagnose server problems, and administering the website.
                </li>
                <li>
                  Using cookies: Cookies are pieces of information stored directly on the computer you are using. We may use the information for security purposes, to facilitate navigation, to display information more effectively, to personalise your experience while visiting the website, or to gather statistical information about the usage of the website.
                </li>
                <li>
                  Using pixel tags, web beacons, clear GIFs or other similar technologies: These may be used in connection with some website pages and HTML-formatted e-mail messages to track the actions of website users and e-mail recipients, measure the success of our marketing campaigns and compile statistics about website usage and response rates.
                </li>
                <li>
                  From you: Some information is collected when you voluntarily provide it. Unless combined with Personal Information, this information does not personally identify you. Please note that we may use and disclose Other Information for any purpose, except where we are required to do otherwise under applicable law. If we are required to treat Other Information as Personal Information under applicable law, then, in addition to the uses listed in the "Other Information We Collect" section above, we may use and disclose Other Information for all the purposes for which we use and disclose Personal Information.
                </li>
              </ul>
              <p className="mt-4">
                How long we keep your information: FGIS will retain your Personal Data for only as long as is required to perform the service or for the purposes for which the data was collected, depending on the legal basis for which that data was obtained. Where such Personal Data is required to comply with contractual or other legal requirements, failure to provide this information may mean that FGIS will not be able to provide certain services.
              </p>
              <p className="mt-4">
                Additional use of Personal Data: Additional use of your Personal Data that is not described in this Privacy Policy will only take place as required by statute or when we have obtained your consent.
              </p>
            </section>

            {/* Third Party Websites */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Third Party Websites</h2>
              <p className="mb-4">
                This Privacy Policy does not address, and we are not responsible for, the privacy, information or other practices of any third parties, including any third party operating any site to which this website contains a link.
              </p>
            </section>

            {/* Use of Website by Minors */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Use of Website by Minors</h2>
              <p className='mb-4'>
                The website is not directed to individuals under the age of sixteen (16), and we request that these individuals do not provide Personal Information through the website.
              </p>
            </section>

            {/* Changes to this Privacy Policy */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Changes to this Privacy Policy</h2>
              <p className="mb-4">
                We review this Privacy Policy regularly and reserve the right to make changes at any time to take account of changes in our business and legal requirements. We will place updates on our website. Please take a look at the "Version Date" date at the top of this Privacy Policy to see when it was last revised.
              </p>
            </section>

            {/* Consent Acknowledgement */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Consent Acknowledgement</h2>
              <p className="mb-4">
                By completing Personal Information with FGIS, you consent to the use of your Personal Information and that of any other person insured by us as stated in this Privacy Policy. We will direct you to our privacy policy when collecting your information from yourself, or our website.
              </p>
            </section>

            {/* Contact Us */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className='mb-4'>
                If you have any questions about this Privacy Policy or our practices regarding your personal information, please contact us at:
              </p>
              <address className="not-italic">
                The Compliance Officer<br />
                FG Insurance Services<br />
                430 Ulster Street<br />
                Hamilton 3200<br />
                New Zealand<br />
                or email us at: compliance@fgis.co.nz
              </address>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}