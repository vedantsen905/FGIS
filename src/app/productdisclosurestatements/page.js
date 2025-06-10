import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PublicDisclosure() {
  return (
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Fixed Navbar at the top */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Spacer to push content below navbar */}
      <div className="pt-16"> {/* Adjust this value based on your navbar height */}
        
        {/* Page Header - Now properly visible below navbar */}
        <header className="bg-white shadow-sm py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700">Public Disclosure</h1>
          </div>
        </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 space-y-10">
        {/* Licensing Information */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-green-600 font-semibold text-xl md:text-2xl mb-4">
            Licensing Information and Terms
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              FTIB LIMITED (FSP587428), operating as FG Insurance Services (referred to as FG Insurance, we, our, or us),
              is a registered "financial advice provider" licensed by the Financial Markets Authority to offer financial advice.
            </p>
            <p>
              As a condition of our license, we, along with any representative providing advice on our behalf, are solely
              authorized to provide guidance on general insurance products.
            </p>
          </div>
        </section>

        {/* Nature and Scope */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-green-600 font-semibold text-xl md:text-2xl mb-4">
            Nature and Scope of Our Financial Advice Services
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              We work with a team of financial advisers who provide expert guidance on general insurance products on our behalf.
              Our policies are designed to help protect your personal or business assets, as well as safeguard you, your business assets and liabilities.
            </p>
            <p>
              While we do not offer advice on personal income protection or investment policies, we can refer you to licensed
              associates who can provide this type of guidance. We have access to most insurance markets in New Zealand, excluding
              direct insurers, as well as overseas markets if needed.
            </p>
          </div>
        </section>

        {/* Fees */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-green-600 font-semibold text-xl md:text-2xl mb-4">
            Fees, Expenses, and Other Amounts Payable
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              We may charge a fee for the financial advice we provide and for implementing that advice. If a fee is applicable,
              it will be based on the amount of work and time required to offer and implement our advice, and it will be shown on
              your invoice, payable when you pay your premium. We will disclose the amount of any fee either when we understand the
              scope and nature of the advice required or when we provide our advice to you. In either case, we will document the fee
              structure and keep you informed of any fees before implementing any advice.
            </p>
          </div>
        </section>

        {/* Premium Funding */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-green-600 font-semibold text-xl md:text-2xl mb-4">
            Premium Funding
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              Premium funding products allow you to pay your insurance premium over the term of your policy through instalments,
              rather than a lump sum. However, premium funders charge interest and take a power of attorney over your insurance
              policy. This essentially means that they have the ability to cancel your insurance policy if you fail to pay an instalment.
            </p>
          </div>
        </section>

        {/* Commissions and Other Incentives */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-green-600 font-semibold text-xl md:text-2xl mb-4">
            Commissions and Other Incentives
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              If you decide to enter into a premium funding arrangement, the commission will be paid directly to us by the premium
              funder as a percentage of the amount they fund. The amount of this commission will be disclosed to you when we know
              the scope and nature of the advice required and whether you intend to use the services of a particular premium funder.
            </p>
            <p>
              We are a member of Steadfast NZ Limited, which provides technology platforms, management, marketing, professional,
              technical, and buying benefits and services to support us in offering financial advice services.
            </p>
            <p>
              Steadfast has arrangements with insurance companies under which it receives a professional services fee of up to 1.5% 
              of the premium paid for each policy arranged by us with those insurers. Steadfast may also receive a fee of 0.5% - 1.0% 
              of any amount a customer has funded through a premium funder. These payments are used to operate Steadfast.
            </p>
            <p>
              We will receive a proportion of the professional services fee paid to Steadfast, which is 35% of that fee. Steadfast
              pays this to us at the end of each financial year.
            </p>
            <p>
              We maintain a register of any gifts and other incentives that we may receive. We review our compliance program annually.
            </p>
          </div>
        </section>

        {/* Conflicts of Interest */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-green-600 font-semibold text-xl md:text-2xl mb-4">
            Conflicts of Interest
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              A financial adviser may have a conflict of interest in circumstances where financial advice has been provided to
              two clients who later have a dispute, including in respect of liability. In this case, the adviser will clearly disclose
              the conflict of interest to the clients and refer one of these clients to another of our financial advisers for further
              advice and assistance.
            </p>
            <p>
              We manage all conflicts of interest and ensure our financial advisers prioritize your interests above their own by
              following an advice process that ensures our recommendations are made based on your needs and circumstances. All our
              financial advisers complete mandatory training to understand and manage possible conflicts of interest. We maintain a
              register of any conflicts of interests and review our compliance program annually.
            </p>
          </div>
        </section>

        {/* Duties */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-green-600 font-semibold text-xl md:text-2xl mb-4">
            Duties
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              FG Insurance Services and our financial advisers are bound by the following duties under the Financial Markets
              Conduct Act 2013 to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                Meet the standards of competence, knowledge, and skill set out in the Code of Professional Conduct for Financial
                Advice Services (Code of Conduct), which form part of the wider regulatory regime for financial advice and ensure we
                have the expertise necessary to provide you with advice.
              </li>
              <li>
                Give priority to your interests by taking all reasonable steps to ensure that the advice given to you is not materially influenced by our own interests or the interests of any other person connected with the giving of advice.
              </li>
              <li>
                Exercise care, diligence, and skill that a prudent person engaged in the occupation of giving related financial advice would in the same circumstances.
              </li>
              <li>
                Meet the standards of ethical behaviour, conduct, and client care set out in the Code of Conduct, to treat you as we should and to provide you with suitable advice.
              </li>
            </ul>
          </div>
        </section>

        {/* Complaints */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-green-600 font-semibold text-xl md:text-2xl mb-4">Complaints</h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              If you are unhappy with our financial advice service, please contact your financial adviser so they can try to put things right.
            </p>
            <p>
              If you wish to make a complaint or do not feel comfortable discussing your concerns with your adviser, you can contact us in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Call us at <strong className="text-green-700">0800 347 257</strong> between the hours of 9-5 Monday – Friday.</li>
              <li>Email us at <a href="mailto:complaints@fgis.co.nz" className="text-green-600 underline hover:text-green-800">complaints@fgis.co.nz</a>.</li>
              <li>Write to us addressing your letter to the attention of <span className="font-semibold text-green-600">Compliance Officer</span>.</li>
            </ul>
          </div>
        </section>

        {/* Complaint Handling Process */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-green-600 font-semibold text-xl md:text-2xl mb-4">Complaint Handling Process</h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              If you have a complaint, your adviser will try to resolve it with you immediately. If the issue cannot be resolved,
              the complaint will be escalated to their manager, and an acknowledgment of your complaint will be sent to you within
              five working days. The acknowledgment letter will include a timeline for our response and the name of the manager
              handling your complaint. The manager will investigate the matter and contact you to try to resolve the complaint to
              your satisfaction. It is important to provide them with all relevant information.
            </p>
            <p>
              We will provide you with a written update within 20 working days of receiving your complaint. If we are unable to provide
              a full response, we will explain why and inform you of the next steps. After 40 working days, we will issue a final resolution.
              If we need more time, we will inform you of the reason for the delay and the required timeframe to provide a full response.
              If you are not satisfied with the delay, you may redirect your complaint to our external dispute resolution service provider,
              whose details are provided below.
            </p>
          </div>
        </section>

        {/* If We Cannot Resolve Your Complaint */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-green-600 font-semibold text-xl md:text-2xl mb-4">If We Cannot Resolve Your Complaint</h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              If you feel your complaints has not been appropriately considered, you may submit further information for our review.
              If we cannot resolve your complaint despite our best efforts, you may contact our external dispute resolution scheme
              for a free and independent dispute resolution service. Please find the contact details for our external dispute
              resolution service provider below:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <h3 className="font-semibold text-lg text-green-700 mb-2">Financial Services Complaints Limited</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Address:</p>
                  <p>Level 4, Sybase House, 101 Lambton Quay, Wellington 6011</p>
                </div>
                <div>
                  <p className="font-medium">Postal Address:</p>
                  <p>PO Box 5967, Wellington 6140</p>
                </div>
                <div>
                  <p className="font-medium">Telephone:</p>
                  <p>0800 347 257<br />+64 4 472 3725</p>
                </div>
                <div>
                  <p className="font-medium">Email:</p>
                  <p>info@fscl.org.nz<br />complaints@fscl.org.nz</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-medium">Website:</p>
                  <p>http://www.fscl.org.nz</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Contact Details */}
        <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-green-600 font-semibold text-xl md:text-2xl mb-4">Our Contact details:</h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              FTIB LIMITED (FSP587428), trading as FG Insurance Services is a Financial Advice Provider. You can contact us using the following details:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-green-700 mb-2">Admin FGIS</h3>
              <p>430 Ulster Street Beerescourt</p>
              <p>Hamilton</p>
              <p>3200</p>
              <p>New Zealand</p>
              <p>Email: admin@fgis.co.nz</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
        </div>
  );
}