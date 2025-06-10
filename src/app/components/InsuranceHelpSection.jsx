'use client';
// import { Button } from "@/components/ui/button";

export default function InsuranceHelpSection() {
  return (
    <section className="px-6 py-12 md:flex md:items-start md:justify-between gap-10">
      <div className="md:w-1/2">
        <img src="/images/insurance-house.png" alt="Insurance house" className="rounded-xl shadow-md w-full" />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">Just one of the ways FGIS can help get you the insurance protection you need.</h2>
        <p className="mb-4">
          FGIS understands the impact of weather disasters on communities...
          We will work with you to customize a policy that fits your unique needs.
        </p>
        <p className="mb-4">
          Let us help you to cover and protect your most valuable assets.
          <a href="/contact" className="text-green-600 underline ml-1">Contact us today</a> for a free consultation.
        </p>
      </div>
    </section>
  );
}
