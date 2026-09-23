import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LocalIntro } from "./components/LocalIntro";
import { FleetSection } from "./components/FleetSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { ProcessSection } from "./components/ProcessSection";
import { WhyHireSection } from "./components/WhyHireSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { FAQSection } from "./components/FAQSection";
import { StatsBanner } from "./components/StatsBanner";
import { QuoteFormSection } from "./components/QuoteFormSection";
import { Footer } from "./components/Footer";
import { VehicleDetailView } from "./components/VehicleDetailView";
import { UseCasesView } from "./components/UseCasesView";
import { VanHireOptionsView } from "./components/VanHireOptionsView";
import { BusinessHireView } from "./components/BusinessHireView";
import { ServiceAreaView } from "./components/ServiceAreaView";
import { AboutView } from "./components/AboutView";
import { ContactView } from "./components/ContactView";
import { QuoteModal } from "./components/QuoteModal";
import { vehicles } from "./data/vehicles";
import { ActivePage } from "./types";

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<ActivePage>("home");
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>("2016-mercedes-benz-sprinter-mwb");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Navigate to vehicle detail view
  const handleSelectVehicle = (id: string) => {
    setSelectedVehicleId(id);
    setActivePage("vehicle-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Find currently selected vehicle object
  const currentVehicle = vehicles.find((v) => v.id === selectedVehicleId) || vehicles[0];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#ff5500] selection:text-white">
      {/* Top Header */}
      <Header
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {activePage === "home" && (
          <>
            {/* 1. Hero with Video & Search */}
            <Hero
              onExploreFleet={() => {
                const fleetEl = document.getElementById("fleet-section");
                if (fleetEl) {
                  fleetEl.scrollIntoView({ behavior: "smooth" });
                } else {
                  setActivePage("fleet");
                }
              }}
              onSearch={(query) => {
                setActivePage("fleet");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            {/* 2. Local Intro (Condell Park + Fleet Yard photo) */}
            <LocalIntro />

            {/* 3. Fleet Grid Section (6 Vehicles) */}
            <FleetSection
              vehicles={vehicles}
              onSelectVehicle={handleSelectVehicle}
              onViewAllVans={() => {
                setActivePage("fleet");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            {/* 4. Comparison Section ("Which size do I need?") */}
            <ComparisonSection onSelectVehicle={handleSelectVehicle} />

            {/* 5. Process Section ("Simple 3-step process") */}
            <ProcessSection />

            {/* 6. Why Hire With Us (10 Inclusions) */}
            <WhyHireSection />

            {/* 7. Reviews Section (5.0 Google Average) */}
            <ReviewsSection />

            {/* 8. FAQ Section */}
            <FAQSection />

            {/* 9. Stats Banner (100+ Vans, 24/7 Roadside, 28 Day Minimum) */}
            <StatsBanner />

            {/* 10. Quote Form Section */}
            <QuoteFormSection />
          </>
        )}

        {/* Dedicated Fleet Catalog Page */}
        {activePage === "fleet" && (
          <div className="py-8 bg-[#f9fafb]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Commercial Cargo Van Fleet
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-2 font-normal">
                All vehicles include unlimited kilometres, full commercial insurance, and 24/7 roadside assistance.
              </p>
            </div>
            <FleetSection
              vehicles={vehicles}
              onSelectVehicle={handleSelectVehicle}
              showFilters={true}
            />
            <QuoteFormSection title="Can't find what you need? Enquire about custom fleet orders" />
          </div>
        )}

        {/* Vehicle Detail Page */}
        {activePage === "vehicle-detail" && (
          <VehicleDetailView
            vehicle={currentVehicle}
            allVehicles={vehicles}
            onBack={() => {
              setActivePage("fleet");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onSelectVehicle={handleSelectVehicle}
          />
        )}

        {/* Vehicle Use Cases Page */}
        {activePage === "use-cases" && (
          <UseCasesView
            allVehicles={vehicles}
            onSelectVehicle={handleSelectVehicle}
          />
        )}

        {/* Van Hire Options Page */}
        {activePage === "van-hire" && (
          <VanHireOptionsView
            allVehicles={vehicles}
            onSelectVehicle={handleSelectVehicle}
            onSelectUseCase={() => {
              setActivePage("use-cases");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}

        {/* Business Hire Page */}
        {activePage === "business-hire" && <BusinessHireView />}

        {/* Service Area & Depot Page */}
        {activePage === "service-area" && <ServiceAreaView />}

        {/* About Page */}
        {activePage === "about" && <AboutView />}

        {/* Contact Page */}
        {activePage === "contact" && <ContactView />}
      </main>

      {/* Global Quote Enquiry Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedVehicle={activePage === "vehicle-detail" ? currentVehicle.name : undefined}
      />

      {/* Footer */}
      <Footer
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onExploreFleet={() => {
          setActivePage("fleet");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />
    </div>
  );
};

export default App;
