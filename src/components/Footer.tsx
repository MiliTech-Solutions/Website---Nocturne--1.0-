import React, { useState } from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#070605] border-t border-[#24211c] pt-20 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-[#1c1a17]">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-[#141311]">
                <span className="font-cinzel text-sm text-[#e5a93c] font-bold">N</span>
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-[#f7e7ce]">NOCTURNE</span>
                <span className="text-[9px] tracking-[0.25em] text-[#d4af37] block">HAUTE CUISINE</span>
              </div>
            </div>
            <p className="text-xs text-[#a39c90] leading-relaxed font-light">
              A boutique gastronomic sanctuary uniting Japanese Binchotan open-fire cooking, biodynamic Culinaries, and grand beverage vaults under warm amber ambient candlelight.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#8a847a] pt-1">
              <span className="px-2.5 py-1 rounded bg-[#141311] border border-[#26231d] text-[#e5a93c] text-[10px] uppercase tracking-wider">
                Michelin 3-Star 2026
              </span>
            </div>
          </div>

          {/* Col 2: Hours & Sitting Sittings */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-[#f7e7ce] flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Service Hours</span>
            </h4>
            <div className="space-y-2 text-xs text-[#a39c90]">
              <div>
                <span className="text-[#f7e7ce] font-medium block">Monday — Sunday</span>
                <span className="text-[11px] block">Brunch - 10:00 to 12:00</span>
                <span className="text-[11px] block">Lunch  - 01:00 to 04:00</span>
                <span className="text-[11px] block">Grand Nocturne: 08:00 to 10:00</span>
              </div>
              <div className="pt-2">
                <span className="text-[#f7e7ce] font-medium block">Obsidian Vault</span>
                <span className="text-[11px]">Bar - 05:00 to 10:00</span>
              </div>
              <p className="text-[10px] text-[#6e685f] italic pt-1">
                Open daily. Advance reservations recommended.
              </p>
            </div>
          </div>

          {/* Col 3: Location & Dress Policy */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-[#f7e7ce] flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Sanctuary & Valet</span>
            </h4>
            <div className="space-y-2 text-xs text-[#a39c90]">
              <p className="text-[#f7e7ce]">450 Post Street, Union Square</p>
              <p>Square Plaza, Markaz, DHA 4, Islamabad</p>
              <p className="text-[11px] text-[#d4af37]">Complimentary Valet at Main Portico</p>
              <div className="pt-2 border-t border-[#1c1a17]">
                <span className="text-[10px] uppercase tracking-wider text-[#e5a93c] font-semibold block">Dress Policy</span>
                <p className="text-[11px] text-[#8a847a]">Smart Casual / Smart Elegant. NO Sleepwear</p>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter & Private Salons */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-[#f7e7ce] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Private Gazette</span>
            </h4>
            <p className="text-xs text-[#a39c90] leading-relaxed">
              Receive private invitations to seasonal menu reveals and winemaker estate dinners.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#181614] border border-[#d4af37]/50 text-xs text-[#e5a93c] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>You are on our private guestlist.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#141311] border border-[#2a2620] focus:border-[#d4af37] rounded-xl px-3 py-2 text-xs text-[#f7e7ce] outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5a93c] text-black font-bold text-xs uppercase tracking-wider hover:opacity-95"
                >
                  Join Gazette
                </button>
              </form>
            )}

            <div className="pt-2 text-[11px] text-[#8a847a]">
              <span>Private Events: </span>
              <a href="mailto:concierge@nocturnehaute.com" className="text-[#d4af37] underline">
                concierge@nocturnehaute.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col items-center justify-center text-center text-xs text-[#6e685f] gap-1.5">
          <p className="text-center">© 2026 NOCTURNE Haute Cuisine & Reserve Lounge. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px]">
            <span className="hover:text-[#a39c90] cursor-pointer">Privacy & Terroir Charter</span>
            <span className="hover:text-[#a39c90] cursor-pointer">Accessibility</span>
            <span className="hover:text-[#a39c90] cursor-pointer">Wine Cellar Protocol</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
