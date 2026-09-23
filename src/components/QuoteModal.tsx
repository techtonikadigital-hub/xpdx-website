import React from "react";
import { X } from "lucide-react";
import { QuoteFormSection } from "./QuoteFormSection";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedVehicle?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedVehicle,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl my-8 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="p-2 sm:p-4">
          <QuoteFormSection
            preselectedVehicle={preselectedVehicle}
            title={preselectedVehicle ? `Enquire about ${preselectedVehicle}` : "Get a fast commercial quote"}
          />
        </div>

      </div>
    </div>
  );
};
