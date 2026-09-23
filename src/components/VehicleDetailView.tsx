import React, { useState } from "react";
import { ArrowLeft, Phone, MessageSquare, Check, ShieldCheck, Calendar, Info } from "lucide-react";
import { Vehicle } from "../types";
import { QuoteFormSection } from "./QuoteFormSection";

interface VehicleDetailViewProps {
  vehicle: Vehicle;
  allVehicles: Vehicle[];
  onBack: () => void;
  onSelectVehicle: (id: string) => void;
}

export const VehicleDetailView: React.FC<VehicleDetailViewProps> = ({
  vehicle,
  allVehicles,
  onBack,
  onSelectVehicle,
}) => {
  const [activeImage, setActiveImage] = useState<string>(vehicle.gallery[0] || vehicle.image);

  const relatedVehicles = allVehicles
    .filter((v) => v.id !== vehicle.id)
    .slice(0, 3);

  return (
    <div id="vehicle-detail-page" className="bg-[#f9fafb] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6">
          <button
            onClick={onBack}
            className="hover:text-[#ff5500] font-semibold flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Our Fleet</span>
          </button>
          <span>/</span>
          <span className="text-gray-900 font-bold truncate">{vehicle.name}</span>
        </div>

        {/* Top Split Layout: Gallery & Quick Rates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Left: Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-[16/10] bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm p-4 flex items-center justify-center">
              <img
                src={activeImage}
                alt={vehicle.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {vehicle.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 bg-white shrink-0 p-1 cursor-pointer transition-all ${
                    activeImage === img ? "border-[#ff5500] shadow-sm" : "border-gray-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Pricing, Badges & Quick Action (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-[#ff5500] text-xs font-bold tracking-wide uppercase mb-3">
                {vehicle.badge}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                {vehicle.name}
              </h1>
            </div>

            {/* Rates Box */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-gray-900">
                  ${vehicle.priceWeekly}
                </span>
                <span className="text-sm font-semibold text-gray-500">/ week</span>
              </div>

              <div className="text-sm font-bold text-gray-700">
                Or from <span className="text-gray-900">${vehicle.priceMonthly}/month</span>
              </div>

              <p className="text-xs text-gray-500 font-medium pt-1 border-t border-gray-100">
                {vehicle.minimumDays} day minimum hire. Discounts at 3 and 6 months.
              </p>

              {/* Action Buttons: Phone & WhatsApp */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:0433418566"
                  className="bg-gray-900 hover:bg-black text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#ff5500]" />
                  <span>Call 0433 418 566</span>
                </a>

                <a
                  href="https://wa.me/61433418566?text=Hi%20XPDX,%20I'm%20interested%20in%20hiring%20the%202016%20Mercedes%20Sprinter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Inclusions summary pill */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 text-xs text-gray-700 space-y-2">
              <div className="flex items-center gap-2 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#ff5500]" />
                <span>Commercial Insurance Included</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Calendar className="w-4 h-4 text-[#ff5500]" />
                <span>100% Unlimited Kilometres Across NSW</span>
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Specifications Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Info className="w-5 h-5 text-[#ff5500]" />
            <span>Vehicle Specifications</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 text-center">
            <div className="p-3">
              <span className="text-xs text-gray-400 uppercase font-bold block mb-1">Length</span>
              <span className="text-base font-bold text-gray-900 font-mono">{vehicle.specs.length}</span>
            </div>
            <div className="p-3">
              <span className="text-xs text-gray-400 uppercase font-bold block mb-1">Height</span>
              <span className="text-base font-bold text-gray-900 font-mono">{vehicle.specs.height}</span>
            </div>
            <div className="p-3">
              <span className="text-xs text-gray-400 uppercase font-bold block mb-1">Width</span>
              <span className="text-base font-bold text-gray-900 font-mono">{vehicle.specs.width}</span>
            </div>
            <div className="p-3">
              <span className="text-xs text-gray-400 uppercase font-bold block mb-1">Wheelbase</span>
              <span className="text-base font-bold text-gray-900 font-mono">{vehicle.specs.wheelbase}</span>
            </div>
            <div className="p-3">
              <span className="text-xs text-gray-400 uppercase font-bold block mb-1">Load Volume</span>
              <span className="text-base font-bold text-gray-900 font-mono">{vehicle.specs.loadVolume}</span>
            </div>
            <div className="p-3">
              <span className="text-xs text-gray-400 uppercase font-bold block mb-1">Seats</span>
              <span className="text-base font-bold text-gray-900 font-mono">{vehicle.specs.seats}</span>
            </div>
          </div>
        </div>

        {/* About this van & Inclusions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              About this van
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-normal mb-4">
              {vehicle.description}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed font-normal">
              All vehicles are thoroughly mechanically inspected and serviced by our in-house workshop at Condell Park prior to customer collection.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              What's included in every hire
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {vehicle.includedFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                  <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Embedded Enquiry Form for This Specific Vehicle */}
        <QuoteFormSection
          preselectedVehicle={vehicle.name}
          title={`Enquire about the ${vehicle.name}`}
        />

        {/* Related Vans Comparison */}
        <div className="mt-14">
          <h3 className="text-xl font-black text-gray-900 mb-6">
            Other vans you might consider
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedVehicles.map((v) => (
              <div
                key={v.id}
                onClick={() => {
                  onSelectVehicle(v.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-white p-5 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="aspect-[16/10] bg-gray-50 rounded-lg p-2 mb-3">
                  <img src={v.image} alt={v.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{v.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{v.badge}</p>
                </div>
                <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-900">
                  <span>From ${v.priceWeekly}/wk</span>
                  <span className="text-[#ff5500]">View details →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
