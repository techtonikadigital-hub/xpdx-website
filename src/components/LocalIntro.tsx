import React from "react";
import { MapPin, Calendar, CheckCircle } from "lucide-react";
import { assets } from "../data/assets";
import { siteContent } from "../data/content";

export const LocalIntro: React.FC = () => {
  return (
    <section id="local-intro-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-gray-900 tracking-tight leading-tight">
              {siteContent.localIntro.heading}
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              {siteContent.localIntro.description}
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-5 rounded-xl border border-gray-100 bg-[#f9fafb] hover:border-orange-200 transition-all">
                <div className="w-10 h-10 rounded-full bg-orange-100/80 flex items-center justify-center text-[#ff5500] mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Condell Park
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-normal">
                  Conveniently located for quick pickup and drop-off.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-gray-100 bg-[#f9fafb] hover:border-orange-200 transition-all">
                <div className="w-10 h-10 rounded-full bg-orange-100/80 flex items-center justify-center text-[#ff5500] mb-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Flexible Hire
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-normal">
                  Short-term jobs or long-term commercial solutions.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs sm:text-sm font-semibold text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#ff5500]" />
                <span>28 Day Minimum Hire</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#ff5500]" />
                <span>Unlimited Kilometres</span>
              </div>
            </div>
          </div>

          {/* Right Fleet Image Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
              <img
                src={assets.sections.sectionImage1}
                alt="XPDX Rentals Fleet at Condell Park Sydney"
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur-md text-white px-4 py-2 rounded-lg text-xs font-bold border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                <span>16 Irma St, Condell Park Depot</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
