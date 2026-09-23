import React from "react";
import { Phone, MapPin, Clock, ArrowRight, ShieldCheck, ExternalLink } from "lucide-react";
import { assets } from "../data/assets";
import { siteContent } from "../data/content";
import { ActivePage } from "../types";

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onExploreFleet: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActivePage,
  onExploreFleet,
  onOpenQuote,
}) => {
  const handleNav = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="main-footer" className="bg-gray-950 text-white border-t border-gray-900">
      
      {/* Top CTA Banner */}
      <div className="border-b border-gray-800/80 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span>{siteContent.footer.badge}</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ready to get to work?
          </h3>

          <p className="mt-3 text-sm sm:text-base text-gray-400 font-normal">
            Get in touch today to hire a commercial van for your business. Unlimited kilometres and comprehensive insurance included.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExploreFleet}
              className="bg-[#ff5500] hover:bg-[#e04a00] text-white font-bold text-sm px-6 py-3 rounded-lg shadow transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Explore Fleet</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:0433418566"
              className="bg-white/10 hover:bg-white/15 text-white font-bold text-sm px-6 py-3 rounded-lg border border-white/10 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#ff5500]" />
              <span className="font-mono">0433 418 566</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <img
              src={assets.logo}
              alt="XPDX Rentals"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-xs uppercase tracking-widest text-[#ff5500] font-black">
              {siteContent.footer.tagline}
            </p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {siteContent.footer.description}
            </p>

            <div className="pt-2 space-y-2 text-xs sm:text-sm text-gray-300">
              <a
                href="tel:0433418566"
                className="flex items-center gap-2.5 hover:text-[#ff5500] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#ff5500]" />
                <span className="font-mono">{siteContent.footer.phone}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <span>{siteContent.footer.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <button
                  onClick={() => handleNav("fleet")}
                  className="hover:text-white transition-colors"
                >
                  Our Fleet
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("van-hire")}
                  className="hover:text-white transition-colors"
                >
                  Van Hire Options
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("business-hire")}
                  className="hover:text-white transition-colors"
                >
                  Business Van Hire
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("use-cases")}
                  className="hover:text-white transition-colors"
                >
                  Use Cases & Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("service-area")}
                  className="hover:text-white transition-colors"
                >
                  Service Area (Condell Park)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("about")}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact & Depot
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li>Condell Park (Depot)</li>
              <li>Bankstown (6 min)</li>
              <li>Milperra (5 min)</li>
              <li>Revesby (8 min)</li>
              <li>Padstow (9 min)</li>
              <li>Yagoona (8 min)</li>
              <li>Punchbowl (11 min)</li>
              <li>Riverwood (12 min)</li>
              <li>Auburn (18 min)</li>
              <li>Strathfield (20 min)</li>
            </ul>
          </div>

          {/* Column 4: Hours & Depot Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200">
              Depot Hours
            </h4>
            <div className="text-xs text-gray-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>{siteContent.footer.openingHours.weekday}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>{siteContent.footer.openingHours.saturday}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gray-600" />
                <span>{siteContent.footer.openingHours.sunday}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=16+Irma+Street+Condell+Park+NSW+2200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#ff5500] hover:text-white transition-colors font-semibold"
              >
                <span>Get directions to yard</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900 bg-black/60 py-6 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 XPDX Rentals. All rights reserved.</p>
          <p className="text-gray-400">
            Website by <span className="text-gray-300 font-medium">Tradie Digital Agency</span>
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav("about")} className="hover:text-gray-300">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => handleNav("about")} className="hover:text-gray-300">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
