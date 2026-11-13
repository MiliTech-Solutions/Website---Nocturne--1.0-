import React, { useState } from 'react';
import { ChevronDown, Check, Plus, Sparkles, Utensils, Info, X, Wine } from 'lucide-react';
import { MenuItem } from '../types';

export const SIGNATURE_DISHES: MenuItem[] = [
  {
    id: 'sig-angus-steak',
    name: 'Grilled Angus Steak',
    nativeTitle: 'Bifteck d’Angus Grillé aux Herbes',
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 3000,
    description: 'Perfectly grilled premium beef with herb butter and seasonal vegetables.',
    culinaryNotes: 'Charcoal-seared over white Binchotan embers at 500°C to lock in savory marrow juices, basted tableside with cultured truffle herb butter.',
    ingredients: [
      { name: 'Prime Black Angus Beef', origin: 'Nebraska Reserve' },
      { name: 'Normandy Cultured Herb Butter', origin: 'Isigny-sur-Mer, France' },
      { name: 'Heirloom Carrots & Zucchini', origin: 'Organic Farm' }
    ],
    dietary: ['GF', 'NF'],
    winePairing: {
      name: 'Château Margaux Premier Grand Cru',
      vintage: '2016',
      region: 'Bordeaux, France',
      notes: 'Blackberry, cedarwood, crushed gravel, and velvet tannins.',
      glassPrice: 280,
      bottlePrice: 2400,
      grapeVarietal: 'Cabernet Sauvignon'
    },
    prepMethod: 'Two-zone Binchotan ember sear & warm herb butter glaze',
    flavorRadar: { umami: 9, richness: 9, smokiness: 8, crispness: 7, aroma: 9 },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
    isChefSignature: true
  },
  {
    id: 'sig-truffle-pasta',
    name: 'Truffle Cream Pasta',
    nativeTitle: 'Pâtes Crémeuses à la Truffe Noire',
    course: 'main',
    category: 'Food Arts',
    price: 2100,
    description: 'Silky pasta tossed in a rich truffle cream sauce with parmesan.',
    culinaryNotes: 'Handmade fresh egg yolk tagliolini tossed in emulsified 30-month Parmigiano-Reggiano cream and generous hand-shaved black winter truffle.',
    ingredients: [
      { name: 'Handcrafted Tagliolini', origin: 'House Pasta Lab' },
      { name: 'Black Winter Périgord Truffle', origin: 'Norcia, Italy' },
      { name: 'Vacche Rosse Parmigiano 30 Mo', origin: 'Parma, Italy' }
    ],
    dietary: ['V', 'NF'],
    winePairing: {
      name: 'Gaja Barbaresco DOCG',
      vintage: '2018',
      region: 'Piedmont, Italy',
      notes: 'Rose petals, forest soil, tart red cherry, and noble grip.',
      glassPrice: 210,
      bottlePrice: 1900,
      grapeVarietal: '100% Nebbiolo'
    },
    prepMethod: 'Tableside wheel emulsion & fresh truffle shavings',
    flavorRadar: { umami: 10, richness: 9, smokiness: 4, crispness: 5, aroma: 10 },
    image: '/src/assets/images/tagliolini_black_truffle_1792569137234.jpg',
    isChefSignature: true
  },
  {
    id: 'sig-chicken-burger',
    name: 'Crispy Chicken Burger',
    nativeTitle: 'Burger Gastronomique de Poulet Croustillant',
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 1500,
    description: 'Golden crispy chicken, fresh lettuce, cheddar cheese, and our signature house sauce.',
    culinaryNotes: 'Buttermilk-brined free-range chicken breast double-crusted in heritage spices, served on toasted brioche with farmhouse cheddar and smoked aioli.',
    ingredients: [
      { name: 'Pasture-Raised Chicken Breast', origin: 'Heritage Poultry' },
      { name: 'Aged Farmhouse Cheddar', origin: 'Somerset, UK' },
      { name: 'Smoked Pepper Aioli', origin: 'House Smokehouse' }
    ],
    dietary: ['NF'],
    winePairing: {
      name: 'Billecart-Salmon Brut Réserve',
      vintage: 'NV',
      region: 'Champagne, France',
      notes: 'Warm brioche, crisp golden apple, and refreshing effervescence.',
      glassPrice: 150,
      bottlePrice: 1200,
      grapeVarietal: 'Chardonnay & Pinot Noir'
    },
    prepMethod: '24-hour buttermilk brine & flash golden crust',
    flavorRadar: { umami: 8, richness: 8, smokiness: 6, crispness: 10, aroma: 8 },
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop',
    isChefSignature: true
  },
  {
    id: 'sig-seafood-risotto',
    name: 'Seafood Risotto',
    nativeTitle: 'Risotto aux Fruits de Mer et Émulsion Safran',
    course: 'main',
    category: 'Sea Foods',
    price: 2700,
    description: 'Creamy arborio rice finished with fresh shrimp, mussels, and herbs.',
    culinaryNotes: 'Acquerello aged carnaroli rice simmered in slow-reduced crustacean fumet, crowned with sweet Atlantic tiger prawns, diver scallops, and wild sea herbs.',
    ingredients: [
      { name: 'Carnaroli Acquerello Aged Rice', origin: 'Vercelli, Italy' },
      { name: 'Wild Atlantic Tiger Prawns', origin: 'Brittany Coast' },
      { name: 'Fresh Diver Scallops', origin: 'Hokkaido, Japan' }
    ],
    dietary: ['GF', 'NF', 'P'],
    winePairing: {
      name: 'Domaine William Fèvre Chablis Grand Cru',
      vintage: '2020',
      region: 'Chablis, Burgundy',
      notes: 'Steely minerality, crushed lemon peel, and vibrant salinity.',
      glassPrice: 240,
      bottlePrice: 2100,
      grapeVarietal: '100% Chardonnay'
    },
    prepMethod: 'Gentle copper pot mantecatura with sea butter',
    flavorRadar: { umami: 9, richness: 8, smokiness: 4, crispness: 6, aroma: 9 },
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=1000&auto=format&fit=crop',
    isChefSignature: true
  }
];

interface SignaturesSectionProps {
  onAddToTastingTray: (dish: MenuItem, includeWine: boolean) => void;
  onExploreMenu: () => void;
  tastingTrayItemIds: string[];
}

export const SignaturesSection: React.FC<SignaturesSectionProps> = ({
  onAddToTastingTray,
  onExploreMenu,
  tastingTrayItemIds
}) => {
  const [selectedDishModal, setSelectedDishModal] = useState<MenuItem | null>(null);
  const [addWineInModal, setAddWineInModal] = useState(true);

  return (
    <section id="signatures" className="py-20 relative bg-[#0c0b0a] overflow-hidden text-left">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#f97316]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Row with Overline and Premium Experience Tag */}
        <div className="relative mb-12">
          {/* Top Right Tag */}
          <div className="hidden sm:block absolute top-0 right-0">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#d97706] uppercase">
              PREMIUM EXPERIENCE
            </span>
          </div>

          {/* Centered Heading Block */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            {/* Overline with decorative lines */}
            <div className="flex items-center justify-center gap-3">
              <span className="w-10 h-[1px] bg-[#f97316]/60"></span>
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.25em] text-[#f97316] uppercase">
                CHEF'S FAVORITES
              </span>
              <span className="w-10 h-[1px] bg-[#f97316]/60"></span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
              Signature <span className="text-[#f97316]">Collection</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-[#9ca3af] leading-relaxed max-w-2xl mx-auto pt-1 font-light">
              Handpicked favorites from our menu, crafted with passion and designed to leave a lasting impression.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SIGNATURE_DISHES.map((dish, idx) => {
            const isAdded = tastingTrayItemIds.includes(dish.id);
            return (
              <div
                key={dish.id}
                className={`group rounded-2xl bg-[#161513] p-4 flex flex-col justify-between transition-all duration-300 relative border ${
                  idx === 0
                    ? 'border-[#f97316]/60 shadow-[0_0_25px_rgba(249,115,22,0.12)]'
                    : 'border-[#292521] hover:border-[#f97316]/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.1)]'
                }`}
              >
                <div>
                  {/* Dish Image */}
                  <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-black mb-4 relative">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161513]/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Dish Name */}
                  <h3 className="font-semibold text-base sm:text-lg text-[#f97316] mb-1.5 transition-colors">
                    {dish.name}
                  </h3>

                  {/* Dish Description */}
                  <p className="text-xs text-[#9ca3af] leading-relaxed mb-4 line-clamp-3 font-light">
                    {dish.description}
                  </p>
                </div>

                {/* Bottom Row: Details & Origin Button, Price & Action Button */}
                <div className="pt-3 border-t border-[#24211d] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedDishModal(dish)}
                    className="text-xs text-[#f97316] hover:text-[#fb923c] font-medium flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#f97316]" />
                    <span className="text-[#f97316]">Details</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Rs. {dish.price}
                    </span>

                    <button
                      onClick={() => onAddToTastingTray(dish, true)}
                      title={isAdded ? 'In Tasting Tray' : 'Add to Tasting Tray'}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                        isAdded
                          ? 'bg-[#f97316] text-black shadow-md shadow-[#f97316]/30'
                          : 'bg-[#24211e] border border-[#3a352d] text-[#9ca3af] hover:text-white hover:border-[#f97316] hover:bg-[#2e2a26]'
                      }`}
                    >
                      {isAdded ? (
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Utensils className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Menu CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onExploreMenu}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[#3b362f] bg-[#161513] hover:bg-[#1f1d1a] hover:border-[#f97316] text-[#e5e7eb] hover:text-[#f97316] text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
          >
            <span>VIEW FULL MENU</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Dish Detailed Inspector Modal */}
      {selectedDishModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#141311] border border-[#d4af37]/40 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left space-y-6 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedDishModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#1c1a17] border border-[#332f28] text-[#a39c90] hover:text-[#f7e7ce] hover:border-[#d4af37] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-full sm:w-44 h-36 rounded-xl overflow-hidden shrink-0 border border-[#332f28]">
                <img
                  src={selectedDishModal.image}
                  alt={selectedDishModal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
                    {selectedDishModal.category}
                  </span>
                  {selectedDishModal.isChefSignature && (
                    <span className="px-2 py-0.5 rounded bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#e5a93c] text-[9px] font-bold uppercase tracking-wider">
                      Signature Creation
                    </span>
                  )}
                </div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#f7e7ce]">
                  {selectedDishModal.name}
                </h3>
                <p className="font-serif-luxury text-sm text-[#a8a194] italic">
                  {selectedDishModal.nativeTitle}
                </p>
                <p className="font-cinzel text-lg font-bold text-[#e5a93c] pt-1">
                  Rs. {selectedDishModal.price}
                </p>
              </div>
            </div>

            {/* Description & Culinary Technique */}
            <div className="space-y-3 bg-[#181614] p-4 rounded-xl border border-[#26231d]">
              <p className="text-xs sm:text-sm text-[#c2bcaf] leading-relaxed">
                {selectedDishModal.description}
              </p>
              <div className="pt-2 border-t border-[#24211c] text-xs text-[#a39c90]">
                <strong className="text-[#e5a93c]">Culinary Technique: </strong>
                {selectedDishModal.culinaryNotes}
              </div>
              <div className="text-xs text-[#a39c90]">
                <strong className="text-[#e5a93c]">Preparation: </strong>
                {selectedDishModal.prepMethod}
              </div>
            </div>

            {/* Sourced Ingredients Provenance */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f7e7ce]">
                Ingredient Provenance & Culinaries
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedDishModal.ingredients.map((ing, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#181614] border border-[#29241d] flex items-center justify-between text-xs">
                    <span className="font-medium text-[#e8e4dc]">{ing.name}</span>
                    <span className="text-[10px] text-[#d4af37] tracking-wider">{ing.origin}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Flavor Radar Metric Bars */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f7e7ce]">
                Flavor Profile Radar
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                {Object.entries(selectedDishModal.flavorRadar).map(([key, val]) => {
                  const numVal = Number(val);
                  return (
                    <div key={key} className="p-2.5 rounded-xl bg-[#181614] border border-[#29241d]">
                      <span className="text-[10px] uppercase tracking-wider text-[#a39c90] block mb-1">
                        {key}
                      </span>
                      <div className="w-full bg-[#24211c] h-1.5 rounded-full overflow-hidden mb-1">
                        <div
                          className="bg-gradient-to-r from-[#d4af37] to-[#e5733c] h-full rounded-full"
                          style={{ width: `${numVal * 10}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-[#e5a93c]">{numVal}/10</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Curated Wine Pairing Card */}
            {selectedDishModal.winePairing && (
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#1c1914] to-[#121110] border border-[#d4af37]/40 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wine className="w-4 h-4 text-[#d4af37]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f7e7ce]">
                      Sommelier Pairing Recommendation
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#e5a93c]">
                    +Rs. {selectedDishModal.winePairing.glassPrice}/glass
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#f7e7ce]">
                  {selectedDishModal.winePairing.name} • {selectedDishModal.winePairing.vintage}
                </p>
                <p className="text-xs text-[#a39c90] italic">
                  "{selectedDishModal.winePairing.notes}" — {selectedDishModal.winePairing.region} ({selectedDishModal.winePairing.grapeVarietal})
                </p>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#26231d] flex flex-col sm:flex-row items-center justify-between gap-4">
              <label className="flex items-center gap-2.5 text-xs text-[#c2bcaf] cursor-pointer">
                <input
                  type="checkbox"
                  checked={addWineInModal}
                  onChange={(e) => setAddWineInModal(e.target.checked)}
                  className="rounded border-[#443e34] text-[#d4af37] focus:ring-0 focus:ring-offset-0 bg-[#1c1a17]"
                />
                <span>Include Recommended Sommelier Wine Pairing (+Rs. {selectedDishModal.winePairing.glassPrice})</span>
              </label>

              <button
                onClick={() => {
                  onAddToTastingTray(selectedDishModal, addWineInModal);
                  setSelectedDishModal(null);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#e5a93c] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add To Tasting Tray</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
