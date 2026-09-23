import React, { useState } from "react";
import { CheckCircle2, Shield, Clock, Send } from "lucide-react";
import { QuoteFormData } from "../types";

interface QuoteFormSectionProps {
  preselectedVehicle?: string;
  title?: string;
}

export const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({
  preselectedVehicle,
  title = "Get a fast quote",
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    duration: "28-days",
    preferredStart: "",
    notes: "",
    agree: true,
    vehicleModel: preselectedVehicle || "Any available van"
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.agree) {
      alert("Please complete the required fields (Name, Phone, Email, and Agree to Terms).");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="quote-form" className="py-16 sm:py-20 bg-[#f9fafb] border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reassurance Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-gray-600 mb-8 sm:mb-10">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
            <span>No obligation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#ff5500]" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#ff5500]" />
            <span>Usually same-day response</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Enquiry Received!
              </h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>. Our Condell Park depot team will call you at <span className="font-mono font-semibold">{formData.phone}</span> shortly with your quote and availability.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors cursor-pointer"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-left mb-6">
                <h3 className="text-2xl font-black text-gray-900">
                  {title}
                </h3>
                {preselectedVehicle && (
                  <p className="text-xs sm:text-sm font-semibold text-[#ff5500] mt-1">
                    Enquiring about: {preselectedVehicle}
                  </p>
                )}
              </div>

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-2">
                    Your name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Miller"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5500] focus:ring-2 focus:ring-[#ff5500]/20 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0400 000 000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5500] focus:ring-2 focus:ring-[#ff5500]/20 text-sm outline-none transition-all font-mono"
                  />
                </div>
              </div>

              {/* Row 2: Email & Suburb */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5500] focus:ring-2 focus:ring-[#ff5500]/20 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-2">
                    Suburb <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.suburb}
                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                    placeholder="e.g. Condell Park, Bankstown, Auburn"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5500] focus:ring-2 focus:ring-[#ff5500]/20 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 3: How long do you need it? & Preferred start date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs sm:text-sm font-bold text-gray-800">
                      How long do you need it? *
                    </label>
                    <span className="text-[11px] text-gray-500 font-medium">
                      28 day minimum hire.
                    </span>
                  </div>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5500] focus:ring-2 focus:ring-[#ff5500]/20 text-sm outline-none bg-white transition-all font-medium"
                  >
                    <option value="28-days">28 days (1 month)</option>
                    <option value="2-months">2 - 3 months</option>
                    <option value="3-6-months">3 - 6 months (5% discount)</option>
                    <option value="6-12-months">6 - 12 months (10% discount)</option>
                    <option value="12-plus">12+ months ongoing fleet hire</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-2">
                    Preferred start <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="date"
                    value={formData.preferredStart}
                    onChange={(e) => setFormData({ ...formData, preferredStart: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5500] focus:ring-2 focus:ring-[#ff5500]/20 text-sm outline-none bg-white transition-all"
                  />
                </div>
              </div>

              {/* Row 4: Notes */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-2">
                  Anything else? <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="What you'll be carrying, or anything we should know."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff5500] focus:ring-2 focus:ring-[#ff5500]/20 text-sm outline-none transition-all resize-y"
                />
              </div>

              {/* Agreement Checkbox */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="agree-terms"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#ff5500] focus:ring-[#ff5500]"
                />
                <label htmlFor="agree-terms" className="text-xs sm:text-sm text-gray-600 cursor-pointer">
                  I agree to XPDX Rentals contacting me about this enquiry.
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#ff5500] hover:bg-[#e04a00] text-white font-bold text-base py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Submitting enquiry...</span>
                  ) : (
                    <>
                      <span>Get a quote</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
