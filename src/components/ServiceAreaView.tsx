import React from "react";
import { MapPin, Navigation, Clock, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { suburbs } from "../data/content";
import { assets } from "../data/assets";

export const ServiceAreaView: React.FC = () => {
  return (
    <div id="service-area-page" className="py-12 sm:py-16 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-[#ff5500] text-xs font-bold uppercase tracking-wider">
            SERVICE AREA & DEPOT
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mt-4 tracking-tight">
            Sydney Van Hire Depot in Condell Park
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Conveniently situated right in South-Western Sydney's industrial heartland at 16 Irma Street, Condell Park NSW 2200. Rapid arterial access via the M5 Motorway and Milperra Road.
          </p>
        </div>

        {/* Map & Depot Details Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-8 bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[400px]">
            <iframe
              src={assets.maps.depotLocation}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="XPDX Rentals Condell Park Depot Location"
            />
          </div>

          {/* Depot Details */}
          <div className="lg:col-span-4 bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[#ff5500] text-xs font-bold uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4" />
                <span>Primary Depot Yard</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                16 Irma Street
              </h3>
              <p className="text-sm text-gray-600">Condell Park NSW 2200</p>
            </div>

            <div className="pt-3 border-t border-gray-100 space-y-2 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center justify-between font-semibold">
                <span>Monday - Friday</span>
                <span className="font-mono">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center justify-between font-semibold">
                <span>Saturday</span>
                <span className="font-mono">9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href="https://maps.google.com/?q=16+Irma+Street+Condell+Park+NSW+2200"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#ff5500] hover:bg-[#e04a00] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href="tel:0433418566"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs sm:text-sm font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#ff5500]" />
                <span>0433 418 566</span>
              </a>
            </div>
          </div>

        </div>

        {/* Suburb Proximity Grid */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black text-gray-900 mb-2">
            Drive times from surrounding suburbs
          </h2>
          <p className="text-sm text-gray-600 mb-8 font-normal">
            Our central Condell Park depot enables fast turnaround times for drivers and trades across Sydney.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {suburbs.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-gray-100 bg-[#f9fafb] flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{s.name}</h4>
                  <span className="text-[11px] text-gray-400 font-mono">NSW {s.postcode}</span>
                </div>
                <div className="mt-2 text-xs font-semibold text-[#ff5500] flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{s.driveTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
