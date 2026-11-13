import React from 'react';
import { Sparkles, Wine, Clock, Award, CheckCircle2, ChevronRight, Utensils } from 'lucide-react';
import { DINING_EXPERIENCES } from '../data/restaurantData';
import { DiningExperience } from '../types';

interface DiningExperiencesProps {
  onSelectExperience: (experienceId: DiningExperience['id']) => void;
}

export const DiningExperiences: React.FC<DiningExperiencesProps> = ({ onSelectExperience }) => {
  return (
    <section id="experiences" className="py-24 relative bg-[#090807] overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#d4af37]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#161412]">
            <Award className="w-3.5 h-3.5 text-[#e5a93c]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#e5a93c] uppercase">
              Gastronomic Programs
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-[#f7e7ce]">
            Tasting Experiences
          </h2>

          <p className="font-serif-luxury text-lg sm:text-xl text-[#a8a194] italic">
            Curated journeys through the seasons, guided by white oak smoke, wild coast foraging, and rare European cuisines.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {DINING_EXPERIENCES.map((exp, index) => {
            const isFeatured = exp.id === 'nocturne_7_course';
            return (
              <div
                key={exp.id}
                id={`experience-card-${exp.id}`}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 text-left ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#181613] via-[#12110f] to-[#0c0b0a] border-2 border-[#d4af37] shadow-[0_0_50px_rgba(212,175,55,0.22)] lg:-translate-y-3'
                    : 'bg-[#121110] border border-[#2a2620] hover:border-[#d4af37]/50'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e5a93c] text-black text-[10px] font-bold uppercase tracking-widest shadow-md">
                    Most Celebrated Experience
                  </div>
                )}

                <div className="space-y-6">
                  {/* Top Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-cinzel font-semibold tracking-widest text-[#d4af37] uppercase">
                        {exp.coursesCount} Courses
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-[#8a847a]">
                        <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>~{exp.durationMinutes} mins</span>
                      </div>
                    </div>

                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#f7e7ce] leading-snug">
                      {exp.name}
                    </h3>
                    <p className="font-serif-luxury text-xs text-[#a8a194] italic">
                      {exp.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="pt-2 pb-4 border-b border-[#26231d] flex items-baseline gap-2">
                    <span className="font-cinzel text-4xl font-bold text-[#f7e7ce]">
                      Rs. {exp.pricePerGuest}
                    </span>
                    <span className="text-xs text-[#8a847a] tracking-wider uppercase">/ per guest</span>
                  </div>

                  {/* Narrative description */}
                  <p className="text-xs text-[#a39c90] leading-relaxed font-light">
                    {exp.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block">
                      Course Highlights
                    </span>
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#c2bcaf]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Wine Pairing options note */}
                  <div className="p-3.5 rounded-xl bg-[#181614] border border-[#26231d] space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 text-[#e5a93c] font-semibold">
                      <Wine className="w-3.5 h-3.5" />
                      <span>Optional Cellar Pairings</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-[#a39c90]">
                      <span>Sommelier Reserve Pairing</span>
                      <span className="font-medium text-[#f7e7ce]">+Rs. {exp.sommelierPairingPrice}</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-[#a39c90]">
                      <span>Grand Cru Prestige Pairing</span>
                      <span className="font-medium text-[#f7e7ce]">+Rs. {exp.grandCruPairingPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-[#26231d]">
                  <button
                    onClick={() => onSelectExperience(exp.id)}
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#d4af37] via-[#e5a93c] to-[#c59b27] text-black shadow-lg shadow-[#d4af37]/25 hover:shadow-[#d4af37]/45 hover:scale-[1.02]'
                        : 'bg-[#181614] text-[#e8e4dc] hover:bg-[#d4af37] hover:text-black border border-[#332f28] hover:border-[#d4af37]'
                    }`}
                  >
                    <span>Reserve {exp.name.split(' ')[1]}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
