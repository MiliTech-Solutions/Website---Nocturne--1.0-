import React from 'react';
import { Star, Award, Quote, CheckCircle } from 'lucide-react';
import { CRITIC_REVIEWS } from '../data/restaurantData';

export const ReviewsAccolades: React.FC = () => {
  return (
    <section id="accolades" className="py-24 relative bg-[#090807] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#d4af37]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#161412]">
            <Award className="w-3.5 h-3.5 text-[#e5a93c]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#e5a93c] uppercase">
              Critic Accolades
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-[#f7e7ce]">
            Unforgettable Experiences
          </h2>

          <p className="font-serif-luxury text-lg sm:text-xl text-[#a8a194] italic">
            Recognized by the world's most discerning culinary critics and cherished by our regular patrons.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CRITIC_REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-[#12110f] border border-[#2a2620] hover:border-[#d4af37]/50 transition-all flex flex-col justify-between text-left relative group hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
            >
              <Quote className="w-8 h-8 text-[#d4af37]/20 absolute top-6 right-6 group-hover:text-[#d4af37]/40 transition-colors" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#e5a93c]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e5a93c]" />
                  ))}
                </div>

                <p className="font-serif-luxury text-sm sm:text-base text-[#e8e4dc] italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-6 mt-6 border-t border-[#24211c] space-y-1">
                <span className="font-cinzel text-xs font-bold text-[#f7e7ce] block">
                  {rev.source}
                </span>
                <div className="flex items-center justify-between text-[11px] text-[#8a847a]">
                  <span>{rev.critic}</span>
                  <span className="text-[#e5a93c]">{rev.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Rating Score Callout */}
        <div className="mt-16 max-w-xl mx-auto p-6 rounded-2xl bg-[#141311] border border-[#26231d] flex items-center justify-around text-center">
          <div>
            <span className="font-cinzel text-3xl font-bold text-[#f7e7ce] block">4.97 / 5</span>
            <span className="text-[10px] text-[#8a847a] uppercase tracking-wider">Patron Satisfaction</span>
          </div>
          <div className="h-8 w-[1px] bg-[#2a2620]" />
          <div>
            <span className="font-cinzel text-3xl font-bold text-[#e5a93c] block">#14</span>
            <span className="text-[10px] text-[#8a847a] uppercase tracking-wider">Pakistan's Boutique Restaurant</span>
          </div>
          <div className="h-8 w-[1px] bg-[#2a2620]" />
          <div>
            <span className="font-cinzel text-3xl font-bold text-[#f7e7ce] block">3 Stars</span>
            <span className="text-[10px] text-[#8a847a] uppercase tracking-wider">Michelin Guide Distinction</span>
          </div>
        </div>

      </div>
    </section>
  );
};
