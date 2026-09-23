import React, { useState } from "react";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
import { faqs } from "../data/content";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#ff5500] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Common questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 bg-white hover:bg-gray-50 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-gray-900 text-base sm:text-[17px]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-orange-100 text-[#ff5500]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed font-normal bg-white border-t border-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom link */}
        <div className="mt-8 text-center">
          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#ff5500] hover:text-[#e04a00] transition-colors"
          >
            <span>Read all frequently asked questions</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
