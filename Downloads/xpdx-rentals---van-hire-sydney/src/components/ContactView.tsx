import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Navigation } from "lucide-react";
import { assets } from "../data/assets";
import { QuoteFormSection } from "./QuoteFormSection";

export const ContactView: React.FC = () => {
  return (
    <div id="contact-page" className="py-12 sm:py-16 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-[#ff5500] text-xs font-bold uppercase tracking-wider">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mt-4 tracking-tight">
            Contact XPDX Rentals Condell Park
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Need to book a van, extend your commercial hire, or inspect our fleet? Reach out via phone, WhatsApp, or drop by our depot.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff5500] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Direct Phone</h3>
              <p className="text-xs text-gray-500 mb-3">Speak with depot operations directly</p>
              <a
                href="tel:0433418566"
                className="text-xl font-bold font-mono text-gray-900 hover:text-[#ff5500] transition-colors"
              >
                0433 418 566
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <a
                href="https://wa.me/61433418566"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366]"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff5500] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Condell Park Yard</h3>
              <p className="text-xs text-gray-500 mb-2">Fleet pickup & drop-off</p>
              <p className="text-sm font-semibold text-gray-900">
                16 Irma Street, Condell Park NSW 2200
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <a
                href="https://maps.google.com/?q=16+Irma+Street+Condell+Park+NSW+2200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff5500]"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get directions</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff5500] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Depot Hours</h3>
              <div className="space-y-1 text-xs text-gray-700 mt-2">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="font-bold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-bold">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
              After-hours drop box available for keys.
            </div>
          </div>
        </div>

        {/* Map & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6 bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[480px]">
            <iframe
              src={assets.maps.depotLocation}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="XPDX Rentals Condell Park"
            />
          </div>

          <div className="lg:col-span-6">
            <QuoteFormSection title="Send an enquiry" />
          </div>
        </div>

      </div>
    </div>
  );
};
