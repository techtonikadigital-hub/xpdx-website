import React from "react";
import { ShieldCheck, Users, Wrench, Clock, CheckCircle } from "lucide-react";
import { assets } from "../data/assets";

export const AboutView: React.FC = () => {
  return (
    <div id="about-page" className="py-12 sm:py-16 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-[#ff5500] text-xs font-bold uppercase tracking-wider">
            ABOUT XPDX RENTALS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mt-4 tracking-tight">
            Sydney's reliable commercial van hire specialist.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Family-owned and locally operated from our Condell Park yard. We keep Sydney's couriers, builders, electricians, event producers, and delivery drivers moving with dependable vehicles and zero red tape.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
            <h2 className="text-2xl font-bold text-gray-900">
              Built by operators, for operators.
            </h2>
            <p>
              Traditional rental companies make commercial van hire complicated: strict mileage caps, exorbitant damage excess fees, and slow customer service desks that don't understand job site realities.
            </p>
            <p>
              XPDX Rentals was founded to provide a transparent alternative. By maintaining our own dedicated fleet of over 100+ Toyota HiAce and Mercedes-Benz Sprinter vans, alongside an in-house mechanic workshop, we ensure every vehicle is mechanically bulletproof and immediately available.
            </p>
            <div className="pt-2 flex flex-col gap-2.5 text-xs sm:text-sm font-semibold text-gray-900">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#ff5500]" />
                <span>Dedicated in-house mechanics and servicing bays</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#ff5500]" />
                <span>100% Commercial registration and comprehensive insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#ff5500]" />
                <span>Unlimited kilometres across New South Wales</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src={assets.sections.sectionImage1}
                alt="XPDX Rentals Depot Yard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff5500] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Rates</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              No hidden kilometre charges or booking admin fees. What we quote is what you pay.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff5500] flex items-center justify-center mb-4">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">In-House Mechanics</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Every vehicle undergoes rigorous multi-point safety testing before hitting the road.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff5500] flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Real Human Support</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              When you call 0433 418 566, you speak directly with our Condell Park yard manager.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
