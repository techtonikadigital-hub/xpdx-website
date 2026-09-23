import React from "react";
import { ArrowRight } from "lucide-react";
import { allComparisonVans } from "../data/vehicles";
import { assets } from "../data/assets";

interface ComparisonSectionProps {
  onSelectVehicle: (id: string) => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  onSelectVehicle,
}) => {
  return (
    <section id="comparison-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Which size do I need?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Every van is measured the same way you'd measure a job — length, height, and what it costs to have it for the week.
          </p>
        </div>

        {/* Feature Hero Image with Delivery Driver */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-10 max-h-[380px]">
          <img
            src={assets.sections.sectionImage2}
            alt="Commercial van delivery Sydney"
            className="w-full h-full object-cover max-h-[380px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <p className="text-white text-sm sm:text-base font-semibold max-w-xl">
              From courier parcel multi-drops to heavy trade machinery and home moves, choose the exact cargo volume your operation requires.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">
                <th className="py-4 px-4 sm:px-6">VAN</th>
                <th className="py-4 px-4 sm:px-6">LENGTH</th>
                <th className="py-4 px-4 sm:px-6">HEIGHT</th>
                <th className="py-4 px-4 sm:px-6">FROM</th>
                <th className="py-4 px-4 sm:px-6 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {allComparisonVans.map((van, index) => (
                <tr
                  key={index}
                  onClick={() => onSelectVehicle(van.id)}
                  className="hover:bg-orange-50/50 transition-colors cursor-pointer group"
                >
                  <td className="py-4 px-4 sm:px-6 font-semibold text-gray-900 group-hover:text-[#ff5500] transition-colors">
                    {van.name}
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-mono text-gray-600">
                    {van.length}
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-mono text-gray-600">
                    {van.height}
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-bold text-gray-900">
                    {van.price}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ff5500] group-hover:text-[#e04a00] group-hover:translate-x-0.5 transition-all">
                      <span>View</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
