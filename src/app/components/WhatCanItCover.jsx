  export default function WhatCanItCover() {
    return (
      <div className="bg-white px-6 py-12 md:px-16">
        <h2 className="text-3xl font-bold text-green-600 mb-4">What can it cover?</h2>
        <p className="text-gray-700 mb-6 max-w-4xl">
          Home and contents insurance can provide extensive protection against possible loss or damage – with a choice of options, spanning different levels of cover and inclusions.
        </p>

        <div className="bg-green-600 text-white px-6 py-3 font-semibold text-lg rounded-md max-w-4xl">
          Some of the benefits of a <em>home and contents insurance policy</em> may include:
        </div>

        <div className="mt-6 divide-y divide-gray-300 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 py-4">
            <p>Cover against physical loss or damage during the policy term.</p>
            <p>Cover for alternative accommodation in case the home is inaccessible due to an emergency in the area or if the home becomes uninhabitable.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 py-4">
            <p>Damage caused by natural disasters such as earthquakes, landslides, volcanic eruptions, hydrothermal activity, tsunamis, and wildfires.</p>
            <p>Cover for the cost of replacing keys or locks that can provide unauthorized access to the house following theft, loss or illegal/unsanctioned duplication of your keys.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 py-4">
            <p>Liability cover for injury or loss of life to a third party or loss of a third party's property on a building the client occupies or owns.</p>
            <p>Access to approved repairers, in addition to a client's preferred choices.</p>
          </div>
        </div>
      </div>
    );
  }