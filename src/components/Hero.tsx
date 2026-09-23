import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Phone, Key, ShieldCheck, TrendingUp, Search, Play, Pause } from "lucide-react";
import { assets } from "../data/assets";
import { siteContent } from "../data/content";

interface HeroProps {
  onExploreFleet: () => void;
  onSearch: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFleet, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Robust Autoplay handling for all browsers & iframe restrictions
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Browser autoplay policy requires DOM properties to be explicitly set
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const attemptPlay = () => {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Autoplay waiting for user interaction:", err);
        setIsPlaying(false);
      });
    };

    attemptPlay();

    // Interaction fallback: if autoplay was blocked by browser iframe policy,
    // immediately start playing on first user gesture
    const handleFirstGesture = () => {
      if (video.paused) {
        attemptPlay();
      }
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("scroll", handleFirstGesture);
      window.removeEventListener("keydown", handleFirstGesture);
    };

    window.addEventListener("click", handleFirstGesture);
    window.addEventListener("touchstart", handleFirstGesture);
    window.addEventListener("scroll", handleFirstGesture);
    window.addEventListener("keydown", handleFirstGesture);

    return () => {
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("scroll", handleFirstGesture);
      window.removeEventListener("keydown", handleFirstGesture);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    } else {
      onExploreFleet();
    }
  };

  return (
    <section id="hero-section" className="relative w-full bg-gray-950 overflow-hidden">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={assets.heroImage}
          className="w-full h-full object-cover object-center opacity-85 transition-opacity duration-700"
        >
          <source src={assets.heroVideo} type="video/mp4" />
          <img
            src={assets.heroImage}
            alt="XPDX Commercial Fleet Sydney"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Cinematic Dark Gradient Overlay: high contrast on the left for text, open on the right for video motion */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/65 to-gray-950/25 pointer-events-none" />

        {/* Video Play/Pause Control indicator */}
        <button
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/10 text-white/80 hover:text-white text-xs font-semibold transition-all cursor-pointer"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span>Pause Video</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current text-[#ff5500]" />
              <span>Play Video</span>
            </>
          )}
        </button>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-28">
        <div className="max-w-2xl text-left">
          
          {/* Badge: LONG-TERM VAN HIRE - SYDNEY */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
            <span>{siteContent.hero.badge}</span>
          </div>

          {/* Large Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-white tracking-tight leading-[1.05] mb-6">
            <span>{siteContent.hero.titleLine1}</span>
            <br />
            <span>{siteContent.hero.titleLine2}</span>
            <br />
            <span className="text-[#ff5500] underline decoration-[#ff5500]/40 decoration-4 underline-offset-8">
              {siteContent.hero.titleLine3}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-200 font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl">
            {siteContent.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              id="hero-explore-btn"
              onClick={onExploreFleet}
              className="bg-[#ff5500] hover:bg-[#e04a00] text-white font-bold text-base px-7 py-3.5 rounded-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-200 cursor-pointer flex items-center gap-2 group"
            >
              <span>{siteContent.hero.primaryCta}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              id="hero-phone-cta"
              href={`tel:${siteContent.hero.phoneCta.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2.5 text-white hover:text-[#ff5500] font-bold text-base tracking-wide transition-colors py-3.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#ff5500]" />
              <span className="font-mono">{siteContent.hero.phoneCta}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Sub-Hero Bar: RENT. DRIVE. THRIVE. & Search overlay */}
      <div className="relative z-20 bg-gray-950 border-t border-gray-800 text-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Ticker items */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-8 text-xs sm:text-sm font-bold tracking-wide">
            <span className="text-[#ff5500] font-black text-sm tracking-wider">
              {siteContent.subHeroTicker.tagline}
            </span>
            <div className="hidden sm:block w-px h-4 bg-gray-800" />
            <div className="flex items-center gap-2 text-gray-300">
              <Key className="w-4 h-4 text-[#ff5500]" />
              <span>Get the van.</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <ShieldCheck className="w-4 h-4 text-[#ff5500]" />
              <span>Get to work.</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <TrendingUp className="w-4 h-4 text-[#ff5500]" />
              <span>Grow your business.</span>
            </div>
          </div>

          {/* Quick Search Input */}
          <form
            onSubmit={handleSearchSubmit}
            className="w-full md:w-auto flex-1 max-w-md relative"
          >
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="FIND A VAN — Search by model, feature..."
                className="w-full bg-white text-gray-900 text-xs sm:text-sm rounded-full pl-5 pr-12 py-2.5 shadow-md border-0 focus:ring-2 focus:ring-[#ff5500] placeholder-gray-500 font-medium"
              />
              <button
                type="submit"
                aria-label="Search vans"
                className="absolute right-1 w-9 h-9 bg-[#ff5500] hover:bg-[#e04a00] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};
