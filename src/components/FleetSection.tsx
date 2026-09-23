import React, { useState } from "react";
import { ArrowRight, Check, Search, Filter } from "lucide-react";
import { Vehicle } from "../types";

interface FleetSectionProps {
  vehicles: Vehicle[];
  onSelectVehicle: (id: string) => void;
  onViewAllVans?: () => void;
  showFilters?: boolean;
}

export const FleetSection: React.FC<FleetSectionProps> = ({
  vehicles,
  onSelectVehicle,
  onViewAllVans,
  showFilters = false,
}) => {
  const [filterMake, setFilterMake] = useState<string>("all");
  const [filterRoof, setFilterRoof] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredVehicles = vehicles.filter((v) => {
    const matchesMake = filterMake === "all" || v.make.toLowerCase() === filterMake.toLowerCase();
    const matchesRoof = filterRoof === "all" || v.roofType.toLowerCase() === filterRoof.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMake && matchesRoof && matchesSearch;
  });

  return (
    <section id="fleet-section" className="py-16 sm:py-20 bg-[#f9fafb] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Our vans
            </h2>
            <p className="mt-2 text-base text-gray-600 max-w-2xl font-normal">
              Six cargo vans, from a HiAce for courier rounds to a long-wheelbase high-roof Sprinter.
            </p>
          </div>

          {onViewAllVans && (
            <button
              onClick={onViewAllVans}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#ff5500] hover:text-[#e04a00] transition-colors group cursor-pointer"
            >
              <span>View all vans</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>

        {/* Optional Filter Controls (for dedicated Fleet Page or toggle) */}
        {showFilters && (
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter:
              </span>
              <button
                onClick={() => setFilterMake("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  filterMake === "all"
                    ? "bg-[#ff5500] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Makes
              </button>
              <button
                onClick={() => setFilterMake("Toyota")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  filterMake === "Toyota"
                    ? "bg-[#ff5500] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Toyota HiAce
              </button>
              <button
                onClick={() => setFilterMake("Mercedes-Benz")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  filterMake === "Mercedes-Benz"
                    ? "bg-[#ff5500] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Mercedes Sprinter
              </button>

              <div className="h-4 w-px bg-gray-200 mx-1 hidden sm:block" />

              <button
                onClick={() => setFilterRoof("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  filterRoof === "all"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Roofs
              </button>
              <button
                onClick={() => setFilterRoof("High roof")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  filterRoof === "High roof"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                High Roof
              </button>
              <button
                onClick={() => setFilterRoof("Standard roof")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  filterRoof === "Standard roof"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Standard Roof (&lt;2m)
              </button>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ff5500]"
              />
            </div>
          </div>
        )}

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              id={`vehicle-card-${vehicle.id}`}
              onClick={() => onSelectVehicle(vehicle.id)}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Vehicle Image Container */}
              <div className="relative aspect-[16/10] bg-gray-50 overflow-hidden p-3 flex items-center justify-center">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-gray-700 border border-gray-200">
                  {vehicle.roofType}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#ff5500] transition-colors leading-snug">
                    {vehicle.name}
                  </h3>

                  <p className="text-xs text-gray-500 font-medium mt-1">
                    {vehicle.badge}
                  </p>

                  {/* Dimensions Specs Row */}
                  <div className="flex items-center gap-6 mt-4 py-2.5 border-y border-gray-100 text-xs text-gray-600 font-mono">
                    <div>
                      <span className="text-gray-400 font-sans mr-1">L</span>
                      <span className="font-bold text-gray-800">{vehicle.specs.length}</span>
                    </div>
                    <div className="w-px h-3 bg-gray-200" />
                    <div>
                      <span className="text-gray-400 font-sans mr-1">H</span>
                      <span className="font-bold text-gray-800">{vehicle.specs.height}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & CTA */}
                <div className="mt-5 pt-2 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500 block font-normal">From</span>
                    <span className="text-xl sm:text-2xl font-black text-gray-900">
                      ${vehicle.priceWeekly}
                    </span>
                    <span className="text-xs text-gray-500 font-normal">/week</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectVehicle(vehicle.id);
                    }}
                    className="bg-[#ff5500] group-hover:bg-[#e04a00] text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                  >
                    <span>View van</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
