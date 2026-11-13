import React, { useState } from 'react';
import { Sparkles, Calendar, ChevronRight, Flame, Utensils, Star, Award, Wine, Play, Clock, ArrowDown, Search } from 'lucide-react';
import heroCulinaryPlate from '../assets/images/hero_culinary_plate_1787837234741.jpg';
import { SEATING_ZONES } from '../data/restaurantData';

interface HeroSectionProps {
  onOpenReservation: (preset?: { date?: string; guests?: number; zone?: string }) => void;
  onExploreMenu: () => void;
  onOpenSommelier: () => void;
  onOpenLookup?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReservation,
  onExploreMenu,
  onOpenSommelier,
  onOpenLookup
}) => {
  const [quickDate, setQuickDate] = useState('2026-09-15');
  const [quickGuests, setQuickGuests] = useState(2);
  const [quickZone, setQuickZone] = useState('hearth');
  const [showQuickBook, setShowQuickBook] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenReservation({
      date: quickDate,
      guests: quickGuests,
      zone: quickZone
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center pt-24 pb-12 overflow-hidden bg-[#0a0908]"
    >
      {/* Background Culinary Photograph (matching the exact aesthetic of the uploaded reference) */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCulinaryPlate}
          alt="Where Taste Meets Elegance - Haute Cuisine Dish"
          className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.08] scale-[1.02] animate-in fade-in duration-1000"
        />

        {/* Ambient Dark & Warm Vignette Overlays for pristine typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-[#090807]/35 to-[#090807]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090807]/75 via-transparent to-[#090807]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#090807_95%)] opacity-80" />

        {/* Warm Golden Bokeh & Candle Glow Aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[450px] bg-gradient-to-b from-[#e5733c]/15 via-[#d4af37]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Top Space Filler for Fixed Navbar alignment */}
      <div className="w-full h-4 sm:h-8" />

      {/* Main Center Stage: Headline & Signature Glowing Action Button */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto py-8">
        
        {/* Subtle Top Pill / Accolade */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#12100d]/80 backdrop-blur-md mb-6 shadow-xl animate-in fade-in slide-in-from-bottom-3 duration-700">
          <Sparkles className="w-3.5 h-3.5 text-[#e5a93c]" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] text-[#f7e7ce] uppercase font-sans-clean">
            Mitchelin 3 - Star
          </span>
        </div>

        {/* Headline matching user reference image: "Where Taste Meets Elegance." */}
        <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#ffffff] tracking-tight leading-[1.08] mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] max-w-4xl animate-in fade-in zoom-in-95 duration-700">
          Where Taste <br className="hidden sm:inline" />
          <span className="text-[#ffffff]">Meets Elegance.</span>
        </h1>

        {/* Poetic Subtitle */}
        <p className="font-serif-luxury text-lg sm:text-2xl text-[#f5ebd9]/90 italic max-w-2xl mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] font-light">
          "A sanctuary of fire, seasonal terroir, and Grand Cru vintages."
        </p>

        {/* Center Golden/Amber Glowing Pill Button (Inspired directly by user reference image) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <button
            id="hero-order-food-btn"
            onClick={onExploreMenu}
            className="group relative px-9 sm:px-12 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#d97706] via-[#ea580c] to-[#f59e0b] text-white font-bold text-xs sm:text-sm tracking-[0.25em] uppercase shadow-[0_0_35px_rgba(234,88,12,0.65)] hover:shadow-[0_0_55px_rgba(245,158,11,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 border border-[#fbbf24]/50"
          >
            <Utensils className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
            <span>ORDER FOOD</span>
            <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-reserve-table-btn"
            onClick={() => onOpenReservation()}
            className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#161412]/85 hover:bg-[#221e19] text-[#f7e7ce] hover:text-white border border-[#d4af37]/50 hover:border-[#d4af37] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase backdrop-blur-md shadow-xl transition-all duration-300 flex items-center gap-2.5 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#e5a93c]" />
            <span>RESERVE TABLE</span>
          </button>
        </div>

        {/* Quick Table Availability Toggle trigger */}
        <div className="mt-8">
          <button
            onClick={() => setShowQuickBook(!showQuickBook)}
            className="text-xs text-[#d4af37] hover:text-[#f7e7ce] uppercase tracking-[0.2em] font-medium flex items-center gap-2 bg-[#141210]/70 backdrop-blur-md px-4 py-2 rounded-full border border-[#332f28] hover:border-[#d4af37]/40 transition-all"
          >
            <Clock className="w-3.5 h-3.5 text-[#e5a93c]" />
            <span>{showQuickBook ? 'Hide Quick Booking Bar' : 'Instant Table Availability Check'}</span>
            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showQuickBook ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Expandable Quick Instant Reservation Bar */}
        {showQuickBook && (
          <div className="mt-4 w-full max-w-3xl rounded-2xl bg-[#12110f]/95 backdrop-blur-2xl border border-[#d4af37]/40 p-4 sm:p-5 shadow-2xl shadow-black animate-in fade-in zoom-in-95 duration-200 text-left">
            <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
              
              {/* Date Field */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#a39c90] font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-[#d4af37]" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  value={quickDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setQuickDate(e.target.value)}
                  className="w-full bg-[#1c1a17] border border-[#332f28] focus:border-[#d4af37] rounded-lg px-3 py-2 text-xs text-[#f7e7ce] outline-none"
                />
              </div>

              {/* Guests Field */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#a39c90] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Party Size</span>
                </label>
                <select
                  value={quickGuests}
                  onChange={(e) => setQuickGuests(Number(e.target.value))}
                  className="w-full bg-[#1c1a17] border border-[#332f28] focus:border-[#d4af37] rounded-lg px-3 py-2 text-xs text-[#f7e7ce] outline-none"
                >
                  <option value={1}>1 Guest (Tasting Counter)</option>
                  <option value={2}>2 Guests (Candlelit Table)</option>
                  <option value={4}>4 Guests (Salon Booth)</option>
                  <option value={6}>6 Guests (Pavilion)</option>
                  <option value={8}>8+ Guests (Vault VIP)</option>
                </select>
              </div>

              {/* Atmosphere Zone */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#a39c90] font-semibold flex items-center gap-1.5">
                  <Flame className="w-3 h-3 text-[#e5733c]" />
                  <span>Sanctuary</span>
                </label>
                <select
                  value={quickZone}
                  onChange={(e) => setQuickZone(e.target.value)}
                  className="w-full bg-[#1c1a17] border border-[#332f28] focus:border-[#d4af37] rounded-lg px-3 py-2 text-xs text-[#f7e7ce] outline-none"
                >
                  {SEATING_ZONES.map((zone) => (
                    <option key={zone.id} value={zone.id}>
                      {zone.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#e5a93c] text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md shadow-[#d4af37]/20 flex items-center justify-center gap-1.5"
                >
                  <span>Book Now</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          </div>
        )}

      </div>

      {/* Bottom Footer Bar on Hero with Accolades and Discover cues */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2a2620]/60 pt-4 text-xs text-[#a39c90]">
          
          {/* Left Highlights */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5733c] animate-pulse" />
              <span className="text-[#f7e7ce] font-medium tracking-wide">DHA 4, Islamabad</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Wine className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>2,400 References</span>
            </div>
          </div>

          {/* Center Scroll Prompt */}
          <button
            onClick={onExploreMenu}
            className="flex items-center gap-2 text-[#d4af37] hover:text-[#f7e7ce] transition-colors uppercase tracking-[0.2em] text-[11px]"
          >
            <span>Explore Menu</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>

          {/* Right Highlights & Search Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSommelier}
              className="text-[#e5a93c] hover:underline flex items-center gap-1.5 text-[11px] tracking-wider uppercase font-semibold"
            >
              <Wine className="w-3.5 h-3.5" />
              <span>Sommelier AI Concierge</span>
            </button>

            {onOpenLookup && (
              <button
                id="hero-lookup-btn"
                onClick={onOpenLookup}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#332f28] bg-[#141311]/90 hover:border-[#d4af37]/60 text-[#a39c90] hover:text-[#f7e7ce] transition-all text-[11px] uppercase tracking-wider shadow-md hover:bg-[#1c1a17]"
                title="Lookup Existing Booking"
              >
                <Search className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="hidden sm:inline">Lookup</span>
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Ambiance Film Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-[#141311] border border-[#d4af37]/40 rounded-2xl p-6 shadow-2xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 text-[#a39c90] hover:text-[#f7e7ce] text-xl font-bold p-2"
            >
              ✕
            </button>
            <div className="text-left space-y-2 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
                Atmosphere & Ambiance Experience
              </span>
              <h3 className="font-cinzel text-xl text-[#f7e7ce]">Fire, Earth & Golden Amber Sanctuary</h3>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                alt="Atmosphere at Nocturne"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-left">
                <p className="font-serif-luxury text-lg text-[#f7e7ce] italic">
                  "Step into an acoustic sanctuary where 2200K golden candlelight flickers against black basalt stone and Binchotan charcoal embers."
                </p>
                <p className="text-xs text-[#d4af37] mt-2 uppercase tracking-widest">
                  NOCTURNE • San Francisco & Paris
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
