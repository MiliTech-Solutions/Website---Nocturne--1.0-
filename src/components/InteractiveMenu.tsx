import React, { useState, useMemo, useEffect } from 'react';
import { Sparkles, Wine, Flame, Eye, Plus, Check, Filter, Utensils, Star, Info, ChevronRight, ChevronDown, X } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem, DietaryType } from '../types';

interface InteractiveMenuProps {
  onAddToTastingTray: (item: MenuItem, includeWine: boolean) => void;
  onOpenReservation: (preset?: { experienceId?: string }) => void;
  tastingTrayItemIds: string[];
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({
  onAddToTastingTray,
  onOpenReservation,
  tastingTrayItemIds
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedDietary, setSelectedDietary] = useState<DietaryType | 'all' | 'signature'>('all');
  const [selectedDishModal, setSelectedDishModal] = useState<MenuItem | null>(null);
  const [addWineInModal, setAddWineInModal] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState<number>(18);

  const categories = [
    'All',
    'Food Arts',
    'Sea Foods',
    'Grills & BBQs',
    'Greens & Salads',
    'Sweet Nocturne',
    'Exquisite Beverages'
  ];

  const dietaryFilters: { label: string; value: DietaryType | 'all' | 'signature' }[] = [
    { label: 'All Dishes', value: 'all' },
    { label: 'Signatures', value: 'signature' },
    { label: 'Gluten-Free', value: 'GF' },
    { label: 'Dairy-Free', value: 'DF' },
    { label: 'Nut-Free', value: 'NF' },
    { label: 'Vegetarian', value: 'V' },
    { label: 'Pescatarian', value: 'P' }
  ];

  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((dish) => {
      // Category match
      const matchCategory = activeCategory === 'All' || dish.category === activeCategory;
      
      // Dietary match
      let matchDietary = true;
      if (selectedDietary === 'signature') {
        matchDietary = !!dish.isChefSignature;
      } else if (selectedDietary !== 'all') {
        matchDietary = dish.dietary.includes(selectedDietary);
      }

      // Search query
      const matchSearch = searchQuery === '' || 
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.ingredients.some(ing => ing.name.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchDietary && matchSearch;
    });
  }, [activeCategory, selectedDietary, searchQuery]);

  // Reset pagination when category, dietary filter, or search changes
  useEffect(() => {
    setVisibleCount(18);
  }, [activeCategory, selectedDietary, searchQuery]);

  const displayedDishes = useMemo(() => {
    return filteredDishes.slice(0, visibleCount);
  }, [filteredDishes, visibleCount]);

  const hasMoreDishes = visibleCount < filteredDishes.length;

  return (
    <section id="menu" className="py-24 relative overflow-hidden bg-[#0c0b0a]">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#e5733c]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#161412]">
            <Utensils className="w-3.5 h-3.5 text-[#e5a93c]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#e5a93c] uppercase">
              Seasonal Cuisines
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-[#f7e7ce]">
            Our Menu
          </h2>

          <p className="font-serif-luxury text-lg sm:text-xl text-[#a8a194] italic">
            Each creation is a harmonic balance of Binchotan white oak embers, oceanic salinity, and biodynamic Culinaries.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20 font-bold'
                  : 'bg-[#161412] text-[#a39c90] hover:text-[#f7e7ce] border border-[#2a2620] hover:border-[#d4af37]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dietary & Search Filters Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#141311]/90 border border-[#26231d] mb-10">
          {/* Dietary Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <Filter className="w-3.5 h-3.5 text-[#d4af37] ml-2 mr-1 shrink-0" />
            {dietaryFilters.map((df) => (
              <button
                key={df.value}
                onClick={() => setSelectedDietary(df.value)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-wider whitespace-nowrap transition-all ${
                  selectedDietary === df.value
                    ? 'bg-[#2a2620] text-[#e5a93c] border border-[#d4af37]/50'
                    : 'text-[#8a847a] hover:text-[#e8e4dc] hover:bg-[#1a1816]'
                }`}
              >
                {df.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search truffle, wagyu, caviar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1a1816] border border-[#332f28] focus:border-[#d4af37] rounded-lg px-3 py-1.5 text-xs text-[#f7e7ce] outline-none placeholder:text-[#6e685f]"
            />
          </div>
        </div>

        {/* Dish Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-[#141311] rounded-2xl border border-[#26231d]">
            <p className="text-[#a39c90] text-sm">No dishes match your active filter criteria.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSelectedDietary('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-[#d4af37] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedDishes.map((dish) => {
              const isAdded = tastingTrayItemIds.includes(dish.id);
              return (
                <div
                  key={dish.id}
                  id={`dish-card-${dish.id}`}
                  className="group relative rounded-2xl overflow-hidden bg-[#121110] border border-[#2a2620] hover:border-[#d4af37]/50 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]"
                >
                  <div>
                    {/* Dish Image Container */}
                    <div className="relative h-56 w-full overflow-hidden bg-black">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/20 to-transparent" />

                      {/* Chef Signature Badge */}
                      {dish.isChefSignature && (
                        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0c0b0a]/85 border border-[#d4af37]/60 text-[10px] font-bold text-[#e5a93c] uppercase tracking-wider backdrop-blur-md">
                          <Star className="w-2.5 h-2.5 fill-[#e5a93c]" />
                          <span>Signature</span>
                        </div>
                      )}

                      {/* Price Badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="font-cinzel text-sm font-bold text-[#f7e7ce] px-3 py-1 rounded-full bg-[#1a1816]/90 border border-[#d4af37]/40 shadow-lg backdrop-blur-md">
                          Rs. {dish.price}
                        </span>
                      </div>

                      {/* Quick Inspect Overlay Button */}
                      <button
                        onClick={() => setSelectedDishModal(dish)}
                        className="absolute bottom-3 right-3 p-2 rounded-full bg-[#181614]/90 border border-[#332f28] hover:border-[#d4af37] text-[#e8e4dc] hover:text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
                        title="Inspect Ingredients & Technique"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Dish Content Body */}
                    <div className="p-5 space-y-3 text-left">
                      <div>
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37] font-semibold block">
                          {dish.category}
                        </span>
                        <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#f7e7ce] group-hover:text-[#e5a93c] transition-colors leading-snug">
                          {dish.name}
                        </h3>
                        <p className="font-serif-luxury text-xs text-[#8a847a] italic mt-0.5">
                          {dish.nativeTitle}
                        </p>
                      </div>

                      <p className="text-xs text-[#a39c90] line-clamp-2 leading-relaxed font-light">
                        {dish.description}
                      </p>

                      {/* Dietary Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {dish.dietary.map((dt) => (
                          <span
                            key={dt}
                            className="px-2 py-0.5 rounded text-[9px] font-semibold tracking-wider bg-[#1c1a17] text-[#c2bcaf] border border-[#2f2b24]"
                          >
                            {dt}
                          </span>
                        ))}
                      </div>

                      {/* Wine Pairing Mini-Card */}
                      {dish.winePairing && (
                        <div className="p-2.5 rounded-xl bg-[#161412] border border-[#29241d] space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-[#e5a93c] font-semibold flex items-center gap-1">
                              <Wine className="w-3 h-3 text-[#d4af37]" />
                              <span>Sommelier Pairing</span>
                            </span>
                            <span className="text-[#a39c90] text-[10px]">+Rs. {dish.winePairing.glassPrice}/gl</span>
                          </div>
                          <p className="text-[11px] text-[#e8e4dc] font-medium truncate">
                            {dish.winePairing.name} ({dish.winePairing.vintage})
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="p-5 pt-0 border-t border-[#1c1a17] mt-3 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedDishModal(dish)}
                      className="text-xs text-[#d4af37] hover:text-[#f7e7ce] font-medium flex items-center gap-1 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Details & Origin</span>
                    </button>

                    <button
                      onClick={() => onAddToTastingTray(dish, true)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all ${
                        isAdded
                          ? 'bg-[#2a2620] text-[#e5a93c] border border-[#d4af37]/40'
                          : 'bg-[#d4af37]/15 text-[#d4af37] hover:bg-[#d4af37] hover:text-black border border-[#d4af37]/40'
                      }`}
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
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination & More Dishes Button */}
        {hasMoreDishes && (
          <div className="mt-14 flex flex-col items-center justify-center gap-3">
            <button
              onClick={() => setVisibleCount((prev) => prev + 18)}
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1c1916] via-[#24201a] to-[#1c1916] hover:from-[#24201a] hover:to-[#24201a] border border-[#d4af37]/60 hover:border-[#d4af37] text-[#f7e7ce] hover:text-[#d4af37] font-cinzel text-xs font-bold tracking-[0.2em] uppercase shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <span>View More</span>
              <ChevronDown className="w-4 h-4 text-[#d4af37] group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>
            <p className="text-xs font-serif-luxury italic text-[#8a847a]">
              Showing {displayedDishes.length} of {filteredDishes.length} dishes in queue
            </p>
          </div>
        )}

        {!hasMoreDishes && filteredDishes.length > 18 && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161412] border border-[#2a2620] text-xs text-[#a39c90]">
              <Check className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>All {filteredDishes.length} dishes in this collection displayed</span>
            </div>
          </div>
        )}

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
                  referrerPolicy="no-referrer"
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
                <p className="text-[11px] text-[#a39c90]">
                  <span className="text-[#c2bcaf]">{selectedDishModal.winePairing.region}</span> ({selectedDishModal.winePairing.grapeVarietal})
                </p>
                <p className="text-xs text-[#d4af37]/90 font-serif-luxury italic">
                  "{selectedDishModal.winePairing.notes}"
                </p>

                <label className="flex items-center gap-2 text-xs text-[#e8e4dc] pt-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addWineInModal}
                    onChange={(e) => setAddWineInModal(e.target.checked)}
                    className="rounded border-[#332f28] text-[#d4af37] focus:ring-[#d4af37]"
                  />
                  <span>Include paired wine glass with this course (+Rs. {selectedDishModal.winePairing.glassPrice})</span>
                </label>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#8a847a]">
                Serving: <span className="text-[#f7e7ce]">{selectedDishModal.servingTemperature || 'Chef temperature'}</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedDishModal(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-[#332f28] text-xs text-[#a39c90] hover:text-[#f7e7ce]"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onAddToTastingTray(selectedDishModal, addWineInModal);
                    setSelectedDishModal(null);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#e5a93c] to-[#c59b27] text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add To Tasting Tray</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
