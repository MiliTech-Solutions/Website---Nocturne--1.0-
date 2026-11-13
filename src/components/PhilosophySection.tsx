import React from 'react';
import { Sparkles, Flame, ShieldCheck, Heart, Award, ArrowUpRight } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 relative bg-[#0c0b0a] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#d4af37]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#161412]">
            <Flame className="w-3.5 h-3.5 text-[#e5a93c]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#e5a93c] uppercase">
              Culinary Manifesto
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-[#f7e7ce]">
            Passion in Every Flame
          </h2>

          <p className="font-serif-luxury text-lg sm:text-xl text-[#a8a194] italic">
            "We do not merely cook with heat. We listen to the wood, we honor the harvest, and we allow darkness to awaken the palate."
          </p>
        </div>

        {/* Main Grid: Chef Narrative & Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Chef Images Collage (Inspired by Maison Savour chef plating screenshot) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#2a2620] aspect-[3/4] bg-black">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
                  alt="Executive Chef Plating with Fine Precision"
                  className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 rounded-xl bg-[#141311] border border-[#26231d] text-left">
                <span className="font-cinzel text-sm font-bold text-[#e5a93c] block">Chef Antoine Laurent</span>
                <span className="text-[10px] text-[#8a847a] uppercase tracking-wider">Executive Chef & Patron</span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden border border-[#2a2620] aspect-[3/4] bg-black">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
                  alt="Live Fire Cooking at Nocturne"
                  className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 rounded-xl bg-[#141311] border border-[#26231d] text-left">
                <div className="flex items-center gap-1 text-[#e5a93c] text-xs font-bold font-cinzel">
                  <span>14+ Years</span>
                </div>
                <span className="text-[10px] text-[#8a847a] uppercase tracking-wider">Three-Star Pedigree</span>
              </div>
            </div>
          </div>

          {/* Manifesto Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#f7e7ce]">
                The Three Elemental Tenets
              </h3>
              <p className="text-sm text-[#a39c90] leading-relaxed font-light">
                Founded on the belief that modern haute cuisine should be an intimate, multi-sensory retreat away from sensory overload.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#141311] border border-[#26231d] space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-cinzel text-xs font-bold text-[#d4af37]">I. Binchotan & Charcoal Embers</span>
                </div>
                <p className="text-xs text-[#a39c90] leading-relaxed">
                  We use pure Kishu Binchotan white oak coals burning smokelessly at 900°F. The radiant far-infrared heat seals proteins instantly without masking their delicate natural sweetness.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141311] border border-[#26231d] space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-cinzel text-xs font-bold text-[#d4af37]">II. Hyper-Seasonal Micro-Terroir</span>
                </div>
                <p className="text-xs text-[#a39c90] leading-relaxed">
                  92% of our botanical harvest is picked within 6 hours of dinner service from our partnered biodynamic farms in Sonoma Valley and rooftop Japanese herb glasshouse.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141311] border border-[#26231d] space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-cinzel text-xs font-bold text-[#d4af37]">III. Acoustic & Light Seclusion</span>
                </div>
                <p className="text-xs text-[#a39c90] leading-relaxed">
                  Our dining room features acoustically damped basalt stone and 2200K optical candlelight lenses, providing an aura of complete privacy for every party.
                </p>
              </div>
            </div>

            {/* Sourcing badges */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#c2bcaf]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                100% Traceable Sourcing
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#e5733c]" />
                Zero Single-Use Plastics
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
