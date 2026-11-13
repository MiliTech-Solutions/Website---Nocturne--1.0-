import React, { useState } from 'react';
import { GlassWater, Sparkles, Award, Shield, ChevronRight, Check, Plus } from 'lucide-react';
import { SOMMELIER_CELLAR_SELECTIONS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface CellarSectionProps {
  onOpenSommelierAdvisor: () => void;
  onAddToTastingTray?: (item: MenuItem, includeWine: boolean) => void;
  tastingTrayItemIds?: string[];
}

const getBeverageImage = (catIndex: number, itemIndex: number) => {
  const images = [
    [
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop"
    ],
    [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=800&auto=format&fit=crop"
    ],
    [
      "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
    ]
  ];
  return images[catIndex]?.[itemIndex] || "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop";
};

const formatBeverageMenuItem = (
  bottle: { name: string; vintage: string; region: string; price: number; notes: string },
  categoryName: string,
  catIdx: number,
  itemIdx: number
): MenuItem => ({
  id: `cellar-${bottle.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
  name: bottle.name,
  nativeTitle: `${bottle.vintage} • ${bottle.region}`,
  course: 'cocktail',
  category: 'Exquisite Beverages',
  price: bottle.price,
  description: bottle.notes,
  culinaryNotes: `Single-origin cellar craft pour: ${bottle.region} (${bottle.vintage}). Handcrafted and cellar-rested.`,
  ingredients: [
    { name: 'Reserve Botanical Extraction', origin: bottle.region },
    { name: 'Artisan Well Spring Water', origin: 'Hakuba Springs' }
  ],
  dietary: ['V', 'VG', 'GF', 'DF'],
  winePairing: {
    name: bottle.name,
    vintage: bottle.vintage,
    region: bottle.region,
    notes: bottle.notes,
    glassPrice: 0,
    bottlePrice: bottle.price,
    grapeVarietal: 'Zero-Proof Botanical & Estate Reserve'
  },
  prepMethod: bottle.vintage,
  flavorRadar: { umami: 8, richness: 7, smokiness: 6, crispness: 9, aroma: 10 },
  image: getBeverageImage(catIdx, itemIdx),
  isChefSignature: true
});

export const CellarSection: React.FC<CellarSectionProps> = ({
  onOpenSommelierAdvisor,
  onAddToTastingTray,
  tastingTrayItemIds = []
}) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="cellar" className="py-24 relative bg-[#090807] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#d4af37]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#161412]">
            <GlassWater className="w-3.5 h-3.5 text-[#e5a93c]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#e5a93c] uppercase">
              The Liquid Reserve
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-[#f7e7ce]">
            Obsidian Vault
          </h2>

          <p className="font-serif-luxury text-lg sm:text-xl text-[#a8a194] italic">
            Over 120 curated references spanning rare cold-extracted botanicals, single-estate highland teas, aged shrubs, and zero-proof artisanal fermentations — crafted with no wines.
          </p>
        </div>

        {/* Beverage Steward CTA Banner */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#181613] via-[#141210] to-[#181613] border border-[#d4af37]/40 shadow-2xl mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e5a93c]" />
              <span>Personalized Beverage Architecture</span>
            </span>
            <h3 className="font-cinzel text-xl font-bold text-[#f7e7ce]">
              Unsure which artisan elixir to pair with your table?
            </h3>
            <p className="text-xs text-[#a39c90] max-w-lg">
              Consult our AI Beverage Steward to pair specific menu courses with our handcrafted zero-proof botanicals, smoked infusions, and reserve estate teas.
            </p>
          </div>

          <button
            onClick={onOpenSommelierAdvisor}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e5a93c] shadow-lg shadow-[#d4af37]/20 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Open Beverage Steward</span>
          </button>
        </div>

        {/* Cellar Category Tabs */}
        <div className="flex justify-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {SOMMELIER_CELLAR_SELECTIONS.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all ${
                activeCategory === idx
                  ? 'bg-[#24201a] border border-[#d4af37] text-[#e5a93c] shadow-lg'
                  : 'bg-[#141311] border border-[#24211c] text-[#8a847a] hover:text-[#f7e7ce]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Beverage Items Display List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {SOMMELIER_CELLAR_SELECTIONS[activeCategory].items.map((bottle, idx) => {
            const beverageItem = formatBeverageMenuItem(
              bottle,
              SOMMELIER_CELLAR_SELECTIONS[activeCategory].category,
              activeCategory,
              idx
            );
            const isAdded = tastingTrayItemIds.includes(beverageItem.id);

            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#12110f] border border-[#26231d] hover:border-[#d4af37]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-mono">
                      {bottle.vintage}
                    </span>
                    <span className="text-[10px] text-[#8a847a]">• {bottle.region}</span>
                  </div>
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#f7e7ce] group-hover:text-[#e5a93c] transition-colors">
                    {bottle.name}
                  </h4>
                  <p className="font-serif-luxury text-xs text-[#a39c90] italic">
                    "{bottle.notes}"
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0 sm:self-center">
                  <div className="text-right">
                    <span className="font-cinzel text-xl font-bold text-[#f7e7ce]">Rs. {bottle.price}</span>
                    <span className="text-[10px] text-[#8a847a] block">Artisan Carafe</span>
                  </div>

                  {onAddToTastingTray && (
                    <button
                      onClick={() => onAddToTastingTray(beverageItem, false)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer shadow-md active:scale-95 ${
                        isAdded
                          ? 'bg-[#2a2620] text-[#e5a93c] border border-[#d4af37]/50'
                          : 'bg-[#d4af37]/15 text-[#d4af37] hover:bg-[#d4af37] hover:text-black border border-[#d4af37]/40 hover:border-[#d4af37]'
                      }`}
                      title={isAdded ? 'In Tasting Tray' : 'Add to Tasting Tray'}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#e5a93c]" />
                          <span>In Tray</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Tray</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
