import React from "react";
import { RefreshCw, Search, ShieldCheck, Car } from "lucide-react";
import { siteContent } from "../data/content";

export const ProcessSection: React.FC = () => {
  const icons = [Search, ShieldCheck, Car];

  return (
    <section id="process-section" className="py-16 sm:py-20 bg-[#f9fafb] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Process pill */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#ff5500] text-xs font-bold uppercase tracking-wider mb-3">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{siteContent.process.pill}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            {siteContent.process.heading}
          </h2>

          <p className="mt-3 text-base text-gray-600 font-normal leading-relaxed">
            {siteContent.process.subheading}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {siteContent.process.steps.map((step, idx) => {
            const IconComponent = icons[idx];
            return (
              <div
                key={idx}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ff5500] mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 font-mono font-semibold">
                  <span>STEP 0{step.number}</span>
                  <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
