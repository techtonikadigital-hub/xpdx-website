import React, { useState } from "react";
import { Search, MapPin, Truck, Phone, MessageSquare, ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { suburbs, useCases } from "../data/content";
import { Vehicle } from "../types";

interface VanHireOptionsViewProps {
  allVehicles: Vehicle[];
  onSelectVehicle: (id: string) => void;
  onSelectUseCase: () => void;
}

export const VanHireOptionsView: React.FC<VanHireOptionsViewProps> = ({
  allVehicles,
  onSelectVehicle,
  onSelectUseCase,
}) => {
  const [suburbSearch, setSuburbSearch] = useState("");

  const filteredSuburbs = suburbs.filter(
    (s) =>
      s.name.toLowerCase().includes(suburbSearch.toLowerCase()) ||
      s.postcode.includes(suburbSearch)
  );

  return (
    <div id="van-hire-options-page" className="py-12 sm:py-16 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-[#ff5500] text-xs font-bold uppercase tracking-wider">
            VAN HIRE OPTIONS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mt-4 tracking-tight">
            Van hire by vehicle, suburb, or job.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 font-normal">
            Three ways to find what you're looking for across Sydney.
          </p>

          {/* Quick anchor pills */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a
              href="#by-vehicle"
              className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-xs font-bold text-gray-800 hover:border-[#ff5500] hover:text-[#ff5500] transition-colors"
            >
              BY VEHICLE (3)
            </a>
            <a
              href="#by-suburb"
              className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-xs font-bold text-gray-800 hover:border-[#ff5500] hover:text-[#ff5500] transition-colors"
            >
              BY SUBURB (30)
            </a>
            <a
              href="#by-job"
              className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-xs font-bold text-gray-800 hover:border-[#ff5500] hover:text-[#ff5500] transition-colors"
            >
              BY JOB (6)
            </a>
          </div>
        </div>

        {/* Section 1: By Vehicle Type */}
        <div id="by-vehicle" className="mb-16 scroll-mt-24">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900">Hire by vehicle type</h2>
              <p className="text-sm text-gray-500">Pick based on height, volume and transmission.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              onClick={() => onSelectVehicle("2009-toyota-hiace-lwb")}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff5500] flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#ff5500] transition-colors">
                Cargo Van Hire
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Standard clearance (&lt;2.0m) vans engineered for underground carparks, CBD courier multi-drops, and inner-city jobs.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#ff5500]">
                <span>Toyota HiAce series</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div
              onClick={() => onSelectVehicle("2016-mercedes-benz-sprinter-mwb")}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff5500] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#ff5500] transition-colors">
                Long-Term Commercial Hire
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                28+ day terms with volume discounts at 3 and 6 months. Unlimited kms and full scheduled maintenance covered.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#ff5500]">
                <span>Fleet solutions</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div
              onClick={() => onSelectVehicle("2014-mercedes-benz-sprinter-mwb-std")}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff5500] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#ff5500] transition-colors">
                High-Roof Van Hire
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Full standing height inside the cargo bay (up to 2,705 mm). Perfect for tall furniture, event rigging, and mobile workshops.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#ff5500]">
                <span>Mercedes Sprinter series</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: By Suburb */}
        <div id="by-suburb" className="mb-16 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900">Hire by suburb</h2>
              <p className="text-sm text-gray-500">Pick up from our Condell Park yard. Fast access from all South-West and Greater Sydney suburbs.</p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={suburbSearch}
                onChange={(e) => setSuburbSearch(e.target.value)}
                placeholder="Search suburb or postcode..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ff5500]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredSuburbs.map((sub, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{sub.name}</h4>
                  <span className="text-[11px] text-gray-400 font-mono">NSW {sub.postcode}</span>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-50 flex items-center gap-1 text-[11px] font-semibold text-[#ff5500]">
                  <MapPin className="w-3 h-3" />
                  <span>{sub.driveTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: By Job */}
        <div id="by-job" className="mb-16 scroll-mt-24">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900">Hire by job</h2>
              <p className="text-sm text-gray-500">Optimised vehicle configurations for specific commercial applications.</p>
            </div>
            <button
              onClick={onSelectUseCase}
              className="text-xs font-bold text-[#ff5500] hover:underline flex items-center gap-1"
            >
              <span>See all use cases</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc) => (
              <div
                key={uc.id}
                onClick={onSelectUseCase}
                className="bg-white p-5 rounded-xl border border-gray-200 hover:border-orange-300 transition-all cursor-pointer flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{uc.title}</h4>
                  <span className="text-xs text-gray-500">{uc.badgeCount}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Not sure which van you need?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              Give us a call or drop us a WhatsApp message and we'll tell you which van fits your load, team, and job site.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:0433418566"
              className="bg-[#ff5500] hover:bg-[#e04a00] text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call 0433 418 566</span>
            </a>

            <a
              href="https://wa.me/61433418566"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-lg flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
