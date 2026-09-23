import React, { useState } from "react";
import {
  Truck,
  HardHat,
  ThermometerSnowflake,
  Users,
  Camera,
  Home,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ShieldCheck,
  Zap,
  Phone,
  MessageSquare
} from "lucide-react";
import { useCases } from "../data/content";
import { UseCase, Vehicle } from "../types";
import { QuoteFormSection } from "./QuoteFormSection";

interface UseCasesViewProps {
  allVehicles: Vehicle[];
  onSelectVehicle: (id: string) => void;
}

export const UseCasesView: React.FC<UseCasesViewProps> = ({
  allVehicles,
  onSelectVehicle,
}) => {
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Truck,
    HardHat,
    ThermometerSnowflake,
    Users,
    Camera,
    Home
  };

  if (selectedUseCase) {
    const suggestedVans = allVehicles.filter((v) =>
      selectedUseCase.suggestedVehicleIds.includes(v.id)
    );

    return (
      <div id="use-case-detail" className="py-10 sm:py-16 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <button
            onClick={() => setSelectedUseCase(null)}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#ff5500] hover:text-[#e04a00] mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Vehicle Use Cases</span>
          </button>

          {/* Heading */}
          <div className="max-w-3xl mb-12">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-[#ff5500] text-xs font-bold uppercase tracking-wider">
              {selectedUseCase.badgeCount}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mt-4 tracking-tight">
              {selectedUseCase.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              {selectedUseCase.description}
            </p>
          </div>

          {/* What Matters For This Job */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              What matters for this job
            </h2>
            <div className="space-y-4">
              {selectedUseCase.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-[#ff5500] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Suitable Vans */}
          <div className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-6">
              Recommended vans for {selectedUseCase.title.toLowerCase()}
            </h2>

            {suggestedVans.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {suggestedVans.map((v) => (
                  <div
                    key={v.id}
                    onClick={() => onSelectVehicle(v.id)}
                    className="bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all p-5 flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="aspect-[16/10] bg-gray-50 rounded-lg p-2 mb-3 flex items-center justify-center">
                        <img src={v.image} alt={v.name} className="w-full h-full object-contain" />
                      </div>
                      <h3 className="font-bold text-base text-gray-900 group-hover:text-[#ff5500] transition-colors">
                        {v.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">{v.badge}</p>
                      <div className="mt-3 py-2 border-y border-gray-100 flex items-center gap-4 text-xs font-mono text-gray-600">
                        <span>L: {v.specs.length}</span>
                        <span>H: {v.specs.height}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-2 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-400">From</span>
                        <span className="text-lg font-black text-gray-900 ml-1">${v.priceWeekly}/wk</span>
                      </div>
                      <span className="text-xs font-bold text-[#ff5500] flex items-center gap-1">
                        <span>View van</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-xl bg-white border border-gray-200 text-center">
                <p className="text-gray-600 text-sm">
                  We currently do not hold this specific configuration in active stock, but can source custom conversions for 12+ month contracts.
                </p>
                <a
                  href="tel:0433418566"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#ff5500]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 0433 418 566 to enquire</span>
                </a>
              </div>
            )}
          </div>

          <QuoteFormSection
            preselectedVehicle={`Use Case: ${selectedUseCase.title}`}
            title={`Get a quote for ${selectedUseCase.title}`}
          />

        </div>
      </div>
    );
  }

  return (
    <div id="use-cases-page" className="py-12 sm:py-16 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#ff5500] text-xs font-bold tracking-wider uppercase mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>VEHICLE USE CASES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Find the right van for your job.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Whether you're doing parcel runs, carrying trade tools, transporting production gear, or moving apartments, our fleet matches every payload requirement.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-gray-700">
            <span className="px-3 py-1.5 rounded-lg bg-white border border-gray-200">
              Unlimited kilometres
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-gray-200">
              Comprehensive insurance
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-gray-200">
              Automatic transmissions
            </span>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {useCases.map((uc) => {
            const IconComponent = iconMap[uc.iconName] || Truck;
            return (
              <div
                key={uc.id}
                onClick={() => {
                  setSelectedUseCase(uc);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-white p-7 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#ff5500] flex items-center justify-center group-hover:bg-[#ff5500] group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                      {uc.badgeCount}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#ff5500] transition-colors mb-2">
                    {uc.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {uc.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#ff5500]">
                  <span>VIEW FLEET OPTIONS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
