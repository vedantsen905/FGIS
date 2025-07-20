import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PublicDisclosure() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Page Header */}
        <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">Public Disclosure</h1>
        </div>
      </header>

        {/* Section Template */}
        {[
          {
            title: "Licensing Information and Terms",
            content: (
              <>
                <p>
                  FTIB LIMITED (FSP587428), operating as FG Insurance Services (referred to as FG Insurance, we, our, or us),
                  is a registered "financial advice provider" licensed by the Financial Markets Authority to offer financial advice.
                </p>
                <p>
                  As a condition of our license, we, along with any representative providing advice on our behalf, are solely
                  authorized to provide guidance on general insurance products.
                </p>
              </>
            ),
          },
          {
            title: "Nature and Scope of Our Financial Advice Services",
            content: (
              <>
                <p>
                  We work with a team of financial advisers who provide expert guidance on general insurance products on our behalf.
                  Our policies are designed to help protect your personal or business assets, as well as safeguard you, your business assets and liabilities.
                </p>
                <p>
                  While we do not offer advice on personal income protection or investment policies, we can refer you to licensed
                  associates who can provide this type of guidance. We have access to most insurance markets in New Zealand, excluding
                  direct insurers, as well as overseas markets if needed.
                </p>
              </>
            ),
          },
          {
            title: "Fees, Expenses, and Other Amounts Payable",
            content: (
              <p>
                We may charge a fee for the financial advice we provide and for implementing that advice. If a fee is applicable,
                it will be based on the amount of work and time required to offer and implement our advice, and it will be shown on
                your invoice, payable when you pay your premium...
              </p>
            ),
          },
          {
            title: "Premium Funding",
            content: (
              <p>
                Premium funding products allow you to pay your insurance premium over the term of your policy through instalments...
              </p>
            ),
          },
          {
            title: "Commissions and Other Incentives",
            content: (
              <>
                <p>
                  If you decide to enter into a premium funding arrangement, the commission will be paid directly to us...
                </p>
                <p>
                  We are a member of Steadfast NZ Limited, which provides technology platforms...
                </p>
                <p>
                  Steadfast has arrangements with insurance companies under which it receives a professional services fee...
                </p>
                <p>
                  We will receive a proportion of the professional services fee paid to Steadfast...
                </p>
                <p>
                  We maintain a register of any gifts and other incentives that we may receive...
                </p>
              </>
            ),
          },
          {
            title: "Conflicts of Interest",
            content: (
              <>
                <p>
                  A financial adviser may have a conflict of interest in circumstances where financial advice has been provided...
                </p>
                <p>
                  We manage all conflicts of interest and ensure our financial advisers prioritize your interests above their own...
                </p>
              </>
            ),
          },
          {
            title: "Duties",
            content: (
              <>
                <p>
                  FG Insurance Services and our financial advisers are bound by the following duties...
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-left">
                  <li>Meet the standards of competence, knowledge, and skill set out in the Code of Professional Conduct...</li>
                  <li>Give priority to your interests...</li>
                  <li>Exercise care, diligence, and skill...</li>
                  <li>Meet the standards of ethical behaviour...</li>
                </ul>
              </>
            ),
          },
          {
            title: "Complaints",
            content: (
              <>
                <p>
                  If you are unhappy with our financial advice service, please contact your financial adviser...
                </p>
                <p>
                  If you wish to make a complaint or do not feel comfortable discussing your concerns...
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-left">
                  <li>Call us at <strong className="text-[#00AB9D]">0800 347 257</strong></li>
                  <li>Email: <a href="mailto:complaints@fgis.co.nz" className="text-[#00AB9D] underline hover:text-green-800">complaints@fgis.co.nz</a></li>
                  <li>Write to us addressing your letter to the attention of <span className="font-semibold">Compliance Officer</span></li>
                </ul>
              </>
            ),
          },
          {
            title: "Complaint Handling Process",
            content: (
              <>
                <p>
                  If you have a complaint, your adviser will try to resolve it with you immediately...
                </p>
                <p>
                  We will provide you with a written update within 20 working days...
                </p>
              </>
            ),
          },
          {
            title: "If We Cannot Resolve Your Complaint",
            content: (
              <>
                <p>
                  If you feel your complaints has not been appropriately considered...
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4 text-left">
                  <h3 className="font-semibold text-lg text-[#00AB9D] mb-2">Financial Services Complaints Limited</h3>
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
              </>
            ),
          },
          {
            title: "Our Contact details:",
            content: (
              <>
                <p>
                  FTIB LIMITED (FSP587428), trading as FG Insurance Services is a Financial Advice Provider...
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-left">
                  <h3 className="font-semibold text-lg text-[#00AB9D] mb-2">Admin FGIS</h3>
                  <p>430 Ulster Street Beerescourt</p>
                  <p>Hamilton</p>
                  <p>3200</p>
                  <p>New Zealand</p>
                  <p>Email: admin@fgis.co.nz</p>
                </div>
              </>
            ),
          },
        ].map((section, idx) => (
          <section key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-[#00AB9D] mb-8 text-left">{section.title}</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed text-left">{section.content}</div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
