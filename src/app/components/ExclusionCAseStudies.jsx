export default function ExclusionsAndCaseStudy() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* What is usually not covered */}
        <div className="bg-gray-50 p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            What is usually not covered?
          </h2>
          <p className="text-gray-800 mb-4">
            Although the terms of a policy may vary across insurance providers and the type of policy, in general, a client may not be covered in the following situations:
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>If the home is unoccupied for more than 60 continuous days.</li>
            <li>Rust, corrosion, gradual deterioration, depreciation or wear and tear.</li>
            <li>Damage caused by rats, mice or insects.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            *Other specific exclusions are generally outlined by the broker during policy discussions.
          </p>
        </div>

        {/* Case Study */}
        <div className="bg-green-600 text-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">CASE STUDY</h2>
          <p className="mb-4">
            In 2020, John returned home after a severe storm and discovered pools of water on his kitchen countertop and floor. Upon further investigation, he found that water was leaking through the ceiling light fixture. After investigating the issue, he discovered that a blockage in the roof's drain area had caused water to accumulate, leading to the leak through the butyl membrane and into the ceiling. Luckily, John had taken out a home and contents insurance policy to protect against such events.
          </p>
          <p>
            Thanks to his insurance policy, John was covered for the costs of repairing the damage to his property and for replacing his furniture and belongings.
          </p>
        </div>
      </div>

      {/* Why choose FG Insurance */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-green-600 mb-6">
          Why choose FG Insurance?
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-4">
          <li>
            <span className="font-bold">
              Area Based Replacement Cover for Non-Natural Disaster Damage
            </span>{" "}
            If the house sustains damage due to causes other than natural disasters, FG insurance offers cover based on square-footage and will rebuild/repair the house based on the square meters listed on policy schedule – irrespective of the cost involved. If the house suffers damage due to a natural disaster like an earthquake, rebuild and repair is limited to the value of sum insured.
          </li>
          <li>
            <span className="font-bold">Built-In Price Surge Cover</span> Policies come with a built-in price surge cover to provide an extra layer of protection in case an area-wide disaster results in escalation of building costs.
          </li>
          <li>
            <span className="font-bold">Custom Cover to Suit Diverse Needs</span> The policy options provide flexibility to adapt cover limits and add optional cover, if required.
          </li>
          <li>
            <span className="font-bold">Adjustable Cover Limits</span> One size does not fit all. FG Insurance provides adjustable cover limits for landscaping and retaining walls to account for differences in size of properties across clients.
          </li>
          <li>
            <span className="font-bold">Optional Cover</span> Option to customize home insurance policy to include additional cover, like excess-free glass replacement which provides protection against excess payment for the accidental breakage of glass or sanitary fixtures.
          </li>
        </ul>
      </div>
    </div>
  );
}