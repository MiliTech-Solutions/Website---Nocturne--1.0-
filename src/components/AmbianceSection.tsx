import React, { useState } from 'react';
import { Flame, Sparkles, Sun, Moon, Eye, Clock, Shield } from 'lucide-react';

interface AmbianceSectionProps {
  currentTheme: 'gold' | 'noir' | 'ember';
  onChangeTheme: (theme: 'gold' | 'noir' | 'ember') => void;
  onOpenReservation: () => void;
}

export const AmbianceSection: React.FC<AmbianceSectionProps> = ({
  currentTheme,
  onChangeTheme,
  onOpenReservation
}) => {
  const [activeTab, setActiveTab] = useState<'hearth' | 'salon' | 'pavilion' | 'cellar'>('salon');

  const spaces = {
    hearth: {
      title: "The Binchotan Hearth Counter",
      subtitle: "Live White Oak Fire & 900°F Charcoal Embers",
      description: "Carved from a solid 14-meter block of Nero Marquina basalt, this 10-seat counter surrounds the open hearth. Diners watch Chef Antoine hand-turn Japanese A5 wagyu and sear diver scallops over radiant white oak coals.",
      kelvin: "1800K Ember Glow",
      soundTone: "Crackling Oak & Searing Iron",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Front-Row Culinary Theatrics", "Acoustic Fire Resonance", "Live Plating Commentary"]
    },
    salon: {
      title: "The Obsidian Grand Salon",
      subtitle: "Hand-Crafted Charcoal Plaster & Velvet Sconces",
      description: "An acoustic oasis where conversations remain intimate. Soft 2200K amber lighting casts golden halos upon Belgian linen tablecloths and brushed brass candle holders.",
      kelvin: "2200K Candlelight Amber",
      soundTone: "Muffled Jazz & Crystal Clinks",
      image: "/src/assets/images/obsidian_grand_salon_1792740423111.jpg",
      highlights: ["Custom Curved Banquettes", "Zero-Glare Tabletop Spotlights", "Acoustically Calibrated Architecture"]
    },
    pavilion: {
      title: "The Greenhouse Star Pavilion",
      subtitle: "Climatized Glass Atrium & 100-Year Olive Trees",
      description: "Surrounded by living botanical moss walls and rare miniature olive trees, the glass ceiling reveals the moon and stars above while copper braziers radiate gentle warmth.",
      kelvin: "2500K Twilight Starlight",
      soundTone: "Botanical Whisper & Subtle Breeze",
      image: "/src/assets/images/greenhouse_pavilion_alt_1792741136876.jpg",
      highlights: ["360° Night Sky Vistas", "Copper Fire Pit Warmth", "Subtle Botanical Aromatherapy"]
    },
    cellar: {
      title: "The Obsidian Vault",
      subtitle: "2,400 Grand Cru Bottles in Temperature Controlled Seclusion",
      description: "Enclosed by architectural black steel and temperature-controlled glass, guests dine amidst historical vintages of Romanée-Conti, Château Margaux, and rare Japanese single malts.",
      kelvin: "2800K Noir Cellar Glow",
      soundTone: "Deep Subterranean Stillness",
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Private Master Sommelier Service", "Custom Decanter Program", "Monogrammed Menus"]
    }
  };

  const currentSpace = spaces[activeTab];

  return (
    <section id="ambiance" className="py-24 relative bg-[#0a0908] overflow-hidden">
      {/* Dynamic Ambient Background Glow based on theme */}
      <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[160px] pointer-events-none transition-all duration-1000 ${
        currentTheme === 'ember'
          ? 'bg-[#e5733c]/15'
          : currentTheme === 'gold'
          ? 'bg-[#d4af37]/15'
          : 'bg-[#8a847a]/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#161412]">
            <Flame className="w-3.5 h-3.5 text-[#e5a93c]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#e5a93c] uppercase">
              The Sanctuary
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-[#f7e7ce]">
            Moody, Minimalist Ambiance
          </h2>

          <p className="font-serif-luxury text-lg sm:text-xl text-[#a8a194] italic">
            Designed around the geometry of darkness, brushed gold accents, and the warm flicker of white oak coals.
          </p>
        </div>

        {/* Ambient Lighting Controller Bar */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-[#141311]/90 border border-[#2a2620] mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#c2bcaf]">
            <Sun className="w-4 h-4 text-[#d4af37]" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">Room Lighting Palette:</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onChangeTheme('gold')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                currentTheme === 'gold'
                  ? 'bg-[#d4af37] text-black font-bold shadow-md shadow-[#d4af37]/30'
                  : 'bg-[#1c1a17] text-[#a39c90] hover:text-[#f7e7ce]'
              }`}
            >
              Candlelight (2200K)
            </button>
            <button
              onClick={() => onChangeTheme('ember')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                currentTheme === 'ember'
                  ? 'bg-[#e5733c] text-black font-bold shadow-md shadow-[#e5733c]/30'
                  : 'bg-[#1c1a17] text-[#a39c90] hover:text-[#f7e7ce]'
              }`}
            >
              Ember Fire (1800K)
            </button>
            <button
              onClick={() => onChangeTheme('noir')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                currentTheme === 'noir'
                  ? 'bg-[#a39c90] text-black font-bold shadow-md'
                  : 'bg-[#1c1a17] text-[#a39c90] hover:text-[#f7e7ce]'
              }`}
            >
              Deep Noir (2800K)
            </button>
          </div>
        </div>

        {/* Space Tab Navigation */}
        <div className="flex justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {[
            { id: 'salon', label: 'Grand Salon' },
            { id: 'hearth', label: 'Chef Hearth Counter' },
            { id: 'pavilion', label: 'Greenhouse Pavilion' },
            { id: 'cellar', label: 'Obsidian Vault' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[#24201a] border border-[#d4af37] text-[#e5a93c] shadow-lg'
                  : 'bg-[#141311] border border-[#24211c] text-[#8a847a] hover:text-[#f7e7ce]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Space Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#12110f] border border-[#26231d] rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-video bg-black border border-[#2f2a22] shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <img
              src={currentSpace.image}
              alt={currentSpace.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/30 to-transparent" />
            
            {/* Kelvin badge on image */}
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-[#141311]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#d4af37]/40 text-xs">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="font-mono text-[#e5a93c] text-[11px]">{currentSpace.kelvin}</span>
            </div>
          </div>

          {/* Space Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold block">
                Atmosphere Profile
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#f7e7ce]">
                {currentSpace.title}
              </h3>
              <p className="font-serif-luxury text-sm text-[#a8a194] italic">
                {currentSpace.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#a39c90] leading-relaxed font-light">
              {currentSpace.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-2 pt-2 border-t border-[#24211c]">
              {currentSpace.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#c2bcaf]">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Reserve this room CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5a93c] text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-[#d4af37]/20 flex items-center gap-2"
              >
                <span>Reserve in {currentSpace.title.split(' ')[1]}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
