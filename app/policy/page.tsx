'use client'

import CancellationPolicy from "@/components/shared/CancellationPolicy";
import PrivacyPolicy from "@/components/shared/PrivacyPolicy";
import ShippingDeliveryPolicy from "@/components/shared/ShippingDiliveryPolicy";
import TermsAndConditions from "@/components/shared/TermsAndConditions";
import { useState } from "react";


const tabs = [
  "Privacy Policy",
  "Shipping and Delivery Policy",
  "Cancellation and Refund Policy",
  "Terms and Conditions",
] as const;

type TabType = (typeof tabs)[number];

const Policy = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Privacy Policy");

  const renderContent = () => {
    switch (activeTab) {
      case "Privacy Policy":
        return <PrivacyPolicy />;
      case "Shipping and Delivery Policy":
        return <ShippingDeliveryPolicy />;
      case "Cancellation and Refund Policy":
        return <CancellationPolicy />;
      case "Terms and Conditions":
        return <TermsAndConditions />;
      default:
        return null;
    }
  };

  return (
    <main className="w-full mt-20">
      {/* ================= POLICY TABS ================= */}
      <section className="pt-28 pb-10 bg-white grid grid-cols-8">
        <div className="col-span-1" />

        <div className="col-span-6 flex gap-12 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 transition text-sm ${
                activeTab === tab
                  ? "text-black after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-6 after:h-[3px] after:bg-yellow-400 after:rounded-full"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="col-span-1" />
      </section>

      {/* ================= POLICY CONTENT ================= */}
      <section className="bg-[#fff7e6] py-16 grid grid-cols-8">
        <div className="col-span-1" />

        <div className="col-span-6 text-sm text-gray-800 leading-relaxed">
          {renderContent()}
        </div>

        <div className="col-span-1" />
      </section>
    </main>
  );
};

export default Policy;
