import React, { useState } from "react";
import { Star, ShieldCheck, CheckCircle2, TrendingUp, Users, Calculator, ArrowRight } from "lucide-react";
import { QuoteFormSection } from "./QuoteFormSection";

export const BusinessHireView: React.FC = () => {
  const [vanCount, setVanCount] = useState<number>(2);
  const [durationMonths, setDurationMonths] = useState<number>(6);

  // Approximate commercial calculation with volume discounts
  const baseWeeklyPerVan = 380;
  const discount = durationMonths >= 6 ? 0.1 : durationMonths >= 3 ? 0.05 : 0;
  const discountedWeekly = baseWeeklyPerVan * (1 - discount);
  const totalWeekly = Math.round(discountedWeekly * vanCount);
  const totalMonthly = Math.round(totalWeekly * 4.33);

  return (
    <div id="business-hire-page" className="py-12 sm:py-16 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
              5.0 GOOGLE AVERAGE RATING
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            One van or a whole fleet, on terms that flex with the work.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Long-term commercial van hire for Sydney businesses. 28-day minimum terms, unlimited kilometres, and fully tax-deductible operational expenditure without capital lockup.
          </p>
        </div>

        {/* 2 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#ff5500] flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              One predictable weekly cost
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              All commercial comprehensive insurance, scheduled servicing, maintenance, tyre replacement, and 24/7 roadside assistance are consolidated into one straightforward tax invoice.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
                <span>Zero balance sheet debt / liability</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
                <span>100% Tax deductible business expense</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
                <span>Immediate vehicle replacement if off road</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#ff5500] flex items-center justify-center mb-5">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Drivers & streamlined paperwork
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Register multiple employees on a single commercial account. Switch drivers effortlessly as rosters change without paying additional driver penalty fees.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
                <span>Multiple authorised drivers covered</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
                <span>Company ABN invoicing with 7-day terms</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
                <span>Fleet GPS tracking telemetry option</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Interactive Fleet Estimator Tool */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 sm:p-10 mb-16 shadow-xl border border-gray-800">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff5500] mb-2">
              <Calculator className="w-4 h-4" />
              <span>Commercial Fleet Estimator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              Calculate your corporate weekly rate
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Adjust vehicle quantity and contract duration to preview tier discounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Sliders */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>Number of Vans:</span>
                  <span className="text-[#ff5500] text-base">{vanCount} {vanCount === 1 ? 'van' : 'vans'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={vanCount}
                  onChange={(e) => setVanCount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#ff5500]"
                />
                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                  <span>1 van</span>
                  <span>5 vans</span>
                  <span>10+ vans</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>Hire Duration:</span>
                  <span className="text-[#ff5500] text-base">{durationMonths} months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#ff5500]"
                />
                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                  <span>1 mo (28 days)</span>
                  <span>6 mo (10% off)</span>
                  <span>12 mo</span>
                </div>
              </div>

              {discount > 0 && (
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-orange-300 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
                  <span>{discount * 100}% Long-term corporate discount applied!</span>
                </div>
              )}
            </div>

            {/* Result Box */}
            <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <span className="text-xs uppercase text-gray-400 font-bold block mb-1">
                Estimated Commercial Total
              </span>
              <div className="text-3xl sm:text-4xl font-black text-[#ff5500]">
                ${totalWeekly}
                <span className="text-xs text-gray-400 font-normal"> /week + GST</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Approx. ${totalMonthly}/month (all inclusions covered)
              </p>

              <a
                href="#quote-form"
                className="mt-5 w-full bg-[#ff5500] hover:bg-[#e04a00] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <span>Lock in this fleet rate</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

        <QuoteFormSection
          preselectedVehicle={`Commercial Fleet (${vanCount} Vans - ${durationMonths} Months)`}
          title="Request a commercial fleet quote"
        />

      </div>
    </div>
  );
};
