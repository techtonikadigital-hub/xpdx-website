import React, { useRef, useEffect } from "react";
import { siteContent } from "../data/content";
import { assets } from "../data/assets";

export const StatsBanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set DOM properties for strict browser autoplay compliance
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const attemptPlay = () => {
      video.play().catch(() => {
        // Autoplay may wait for user gesture in restrictive contexts
      });
    };

    attemptPlay();

    const handleInteraction = () => {
      if (video.paused) {
        attemptPlay();
      }
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("scroll", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  return (
    <section id="stats-banner" className="relative overflow-hidden py-14 sm:py-20 bg-gray-950 border-y border-gray-800">
      {/* Background Video using Centralized Asset System */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        >
          <source src={assets.statsVideo || assets.heroVideo} type="video/mp4" />
        </video>
        {/* Semi-transparent dark overlay to keep stats typography distinct and accessible */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/80 to-gray-950/90" />
      </div>

      {/* Stats Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800/80">
          {siteContent.stats.map((stat, idx) => (
            <div key={idx} className="pt-6 md:pt-0 first:pt-0 px-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#ff5500] tracking-tight drop-shadow-sm">
                {stat.number}
              </div>
              <div className="mt-2 text-lg sm:text-xl font-bold text-white tracking-wide">
                {stat.label}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-gray-300 font-medium">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
