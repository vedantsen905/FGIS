export default function HomeContents() {
  return (
    <div className="bg-white min-h-screen p-6 md:p-16 space-y-12">

      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
        Home & Contents
      </h1>
    
      {/* What is home & contents insurance? */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-green-600 text-xl md:text-2xl font-semibold mb-4">
          What is home & contents insurance?
        </h2>
        <p className="text-gray-700 mb-4">
          Home insurance is an effective tool for protection against financial risk in case of loss or damage to one’s home. It can additionally cover the home’s contents in case of damage, loss, or theft. Any damage can be expensive to fix, irrespective of the ownership of the house.
        </p>
        <p className="text-gray-700 mb-4">
          When it comes to home insurance, a client can choose to insure the house against sudden, unforeseen, and accidental damage arising from all sorts of contingencies, or choose to seek insurance against certain defined perils such as fire, theft, flood, storm, or earthquake.
        </p>
        <p className="text-gray-700 mb-4">
          Not only the house but also the contents inside need to be insured. In case of loss, theft, or damage, the cost of replacing the contents of the home can quickly add up to prohibitive amounts. Furthermore, some items may hold antique or sentimental value.
        </p>
        <p className="text-gray-700">
          Contents insurance can cover items including, but not limited to, household possessions, furniture, clothes, appliances, and other furnishings. Most contents policies have claims limits, especially for valuables such as jewelry, money, documents, and collections. Restrictions may vary across policies and insurance providers and may also include specific conditions to the cover.
        </p>
      </section>

      {/* Did you know? */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-green-600 text-2xl font-semibold mb-6">
          Did you know?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-green-100 p-6 text-center rounded">
            <p className="text-xl font-semibold">$609,379,099</p>
            <p className="mt-2">
              was paid out in claims for domestic buildings and contents in 2019.
            </p>
            <p className="mt-4 text-sm italic">
              (Insurance Council of New Zealand, Annual Review, 2019)
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-green-200 p-6 text-center rounded">
            <p>
              A very likely increasing trend in days with very high or extreme fire danger was recorded at 6 sites - Napier, Lake Tekapo, Queenstown, Gisborne, Masterton, and Gore for 1997-2019.
            </p>
            <p className="mt-4 text-sm italic">
              (Ministry for the Environment: Climate 2020)
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-green-300 p-6 text-center rounded">
            <p className="text-xl font-semibold">$46,288</p>
            <p className="mt-2">
              7 out of 10 burglaries are residential burglaries.
            </p>
            <p className="mt-4 text-sm italic">
              (New Zealand Police, ‘Crime in New Zealand at a Glance’, September 2020)
            </p>
          </div>
        </div>
      </section>

      {/* What you should consider */}
      <section className="bg-gray-100 p-6 md:p-8 rounded-md max-w-5xl mx-auto">
        <h2 className="text-green-600 text-xl md:text-2xl font-semibold mb-4">
          What you should consider?
        </h2>
        <p className="text-gray-700">
          If your home and its contents were damaged or destroyed in a natural disaster or accident, or all your valuables were stolen, could you afford to replace them?
        </p>
      </section>

      {/* What types of home insurance coverage are available? */}
      <section className="bg-gray-50 p-6 md:p-10 rounded-md max-w-5xl mx-auto">
        <h2 className="text-gray-800 text-2xl font-bold mb-6">
          What types of home insurance coverage are available?
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            <strong>Fixed sum insured:</strong> This is the most common type of coverage available. The insurance provider and the client agree on a total sum insured. In the event of damage or destruction to the property, the insurance company will pay to rebuild the house up to the agreed amount/sum insured.
          </li>
          <li>
            <strong>Indemnity (present-day value):</strong> This type of policy provides coverage that is approximately equal to the depreciated replacement cost of the house (excluding the value of the land), after accounting for its age and condition. However, some older homes may not qualify for indemnity coverage unless they have undergone a certain degree of modernization (applicable year of construction may vary according to local laws and regulations).
          </li>
          <li>
            <strong>Total replacement:</strong> Under this policy, if the house is destroyed, the insurance provider will undertake to rebuild or repair the house up to the total number of square meters under insurance cover, including the professional fees and demolition costs involved in the reconstruction process.
          </li>
        </ul>
      </section>
    </div>
  );
}
