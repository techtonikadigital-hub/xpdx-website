import React from "react";
import {
  Gauge,
  ShieldCheck,
  PhoneCall,
  Wrench,
  CalendarDays,
  Zap,
  Users,
  Receipt,
  Headphones,
  Cog
} from "lucide-react";
import { siteContent } from "../data/content";

export const WhyHireSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Gauge,
    ShieldCheck,
    PhoneCall,
    Wrench,
    CalendarDays,
    Zap,
    Users,
    Receipt,
    Headphones,
    Cog
  };

  return (
    <section id="why-hire-section" className="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Title Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                {siteContent.whyHire.heading}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                {siteContent.whyHire.subheading}
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-orange-50 border border-orange-100 hidden lg:block">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500] block mb-1">
                  100% Commercial Standard
                </span>
                <p className="text-xs text-gray-700 leading-normal">
                  All inclusions are contracted in writing. No hidden excess surcharges, no mileage metering, and no surprise admin fees.
                </p>
              </div>
            </div>
          </div>

          {/* Right 10-Item Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteContent.whyHire.features.map((feature, idx) => {
                const IconComponent = iconMap[feature.icon] || ShieldCheck;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl border border-gray-200 bg-[#ffffff] hover:border-orange-300 hover:shadow-sm transition-all flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-orange-50 text-[#ff5500] flex items-center justify-center shrink-0 group-hover:bg-[#ff5500] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-gray-800 text-sm sm:text-[15px] group-hover:text-gray-900 leading-snug">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
