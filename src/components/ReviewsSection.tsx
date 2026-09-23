import React from "react";
import { Star, Quote } from "lucide-react";
import { reviews } from "../data/content";

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews-section" className="py-16 sm:py-20 bg-[#f9fafb] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            What our customers say
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-gray-900 text-sm">5.0</span>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">
              average on google
            </span>
          </div>

          <p className="mt-3 text-sm sm:text-base text-gray-600 font-normal">
            Straight from the people who've hired from us — nothing staged, nothing invented.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <Quote className="w-8 h-8 text-[#ff5500]/30 mb-4" />
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{rev.author}</h4>
                  <span className="text-xs text-gray-400">{rev.location || "Sydney"}</span>
                </div>
                <div className="flex items-center text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
