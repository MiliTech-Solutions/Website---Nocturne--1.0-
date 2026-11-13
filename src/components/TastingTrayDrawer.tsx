import React from 'react';
import { ShoppingBag, X, Trash2, Wine, Plus, Minus, ChevronRight, Sparkles, Utensils } from 'lucide-react';
import { CartTastingItem, MenuItem } from '../types';

interface TastingTrayDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartTastingItem[];
  onUpdateQuantity: (dishId: string, quantity: number) => void;
  onToggleWine: (dishId: string) => void;
  onRemoveItem: (dishId: string) => void;
  onClearTray: () => void;
  onProceedToReservation: () => void;
}

export const TastingTrayDrawer: React.FC<TastingTrayDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onToggleWine,
  onRemoveItem,
  onClearTray,
  onProceedToReservation
}) => {
  if (!isOpen) return null;

  const totalFoodPrice = items.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const totalWinePrice = items.reduce((acc, curr) => {
    if (curr.includeWinePairing && curr.item.winePairing) {
      return acc + curr.item.winePairing.glassPrice * curr.quantity;
    }
    return acc;
  }, 0);
  const grandTotal = totalFoodPrice + totalWinePrice;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#12110f] border-l border-[#d4af37]/30 h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-6 bg-gradient-to-r from-[#181613] to-[#141210] border-b border-[#26231d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#e5a93c]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold text-[#f7e7ce]">
                Your Tasting Tray
              </h3>
              <p className="text-[11px] text-[#a39c90]">
                {items.length} Course Selection{items.length === 1 ? '' : 's'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#1c1a17] border border-[#332f28] text-[#a39c90] hover:text-[#f7e7ce] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body Items List */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20 space-y-3">
              <Utensils className="w-10 h-10 text-[#524b40] mx-auto" />
              <h4 className="font-cinzel text-base text-[#c2bcaf]">Your Tray Is Empty</h4>
              <p className="text-xs text-[#8a847a] max-w-xs mx-auto">
                Explore our interactive digital menu to curate your custom multi-course culinary journey.
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center text-xs pb-2 border-b border-[#24211c]">
                <span className="text-[#a39c90] uppercase tracking-wider">Curated Course Items</span>
                <button
                  onClick={onClearTray}
                  className="text-[#e5733c] hover:underline flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear All</span>
                </button>
              </div>

              <div className="space-y-3">
                {items.map(({ item, quantity, includeWinePairing }) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-[#181614] border border-[#29241d] space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover border border-[#332f28] shrink-0"
                        />
                        <div className="text-left">
                          <span className="text-[9px] uppercase tracking-wider text-[#d4af37] font-semibold block">
                            {item.category}
                          </span>
                          <h4 className="font-cinzel text-xs font-bold text-[#f7e7ce] leading-snug">
                            {item.name}
                          </h4>
                          <span className="text-xs font-bold text-[#e5a93c]">
                            Rs. {item.price}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#8a847a] hover:text-[#e5733c] p-1"
                        title="Remove Course"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Wine Pairing Option */}
                    {item.winePairing && (
                      <div className="pt-2 border-t border-[#24211c] flex items-center justify-between text-xs">
                        <label className="flex items-center gap-2 cursor-pointer text-[#c2bcaf]">
                          <input
                            type="checkbox"
                            checked={includeWinePairing}
                            onChange={() => onToggleWine(item.id)}
                            className="rounded border-[#332f28] text-[#d4af37] focus:ring-[#d4af37]"
                          />
                          <span className="text-[11px] flex items-center gap-1">
                            <Wine className="w-3 h-3 text-[#d4af37]" />
                            <span>Paired Wine (+Rs. {item.winePairing.glassPrice})</span>
                          </span>
                        </label>
                      </div>
                    )}

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-[11px] text-[#8a847a]">Servings</span>
                      <div className="flex items-center gap-2 bg-[#201d18] px-2 py-1 rounded-lg border border-[#332f28]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, quantity - 1))}
                          className="text-[#a39c90] hover:text-[#f7e7ce]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-[#f7e7ce] px-1">{quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                          className="text-[#a39c90] hover:text-[#f7e7ce]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer & Total */}
        {items.length > 0 && (
          <div className="p-6 bg-[#161412] border-t border-[#26231d] space-y-4">
            <div className="space-y-1.5 text-xs text-left">
              <div className="flex justify-between text-[#a39c90]">
                <span>Gastronomy Subtotal</span>
                <span>Rs. {totalFoodPrice}</span>
              </div>
              {totalWinePrice > 0 && (
                <div className="flex justify-between text-[#a39c90]">
                  <span>Sommelier Wine Pairings</span>
                  <span>+Rs. {totalWinePrice}</span>
                </div>
              )}
              <div className="pt-2 border-t border-[#24211c] flex justify-between font-cinzel text-base font-bold text-[#f7e7ce]">
                <span>Estimated Experience Total</span>
                <span className="text-[#e5a93c]">Rs. {grandTotal}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedToReservation();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5a93c] to-[#c59b27] text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-xl shadow-[#d4af37]/25 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Table With This Menu</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
