import React, { useState } from 'react';
import { Search, X, Calendar, Clock, Users, Flame, QrCode, CheckCircle2, AlertCircle, Trash2 } from 'lucide-react';
import { Reservation } from '../types';
import { SEATING_ZONES, DINING_EXPERIENCES } from '../data/restaurantData';

interface BookingLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  reservations: Reservation[];
  onCancelReservation: (resId: string) => void;
}

export const BookingLookupModal: React.FC<BookingLookupModalProps> = ({
  isOpen,
  onClose,
  reservations,
  onCancelReservation
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foundReservation, setFoundReservation] = useState<Reservation | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const q = searchQuery.trim().toLowerCase();
    const match = reservations.find(
      (r) =>
        r.referenceCode.toLowerCase() === q ||
        r.phone.replace(/[^0-9]/g, '') === q.replace(/[^0-9]/g, '') ||
        r.email.toLowerCase() === q
    );
    setFoundReservation(match || null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#12110f] border border-[#d4af37]/40 rounded-3xl shadow-2xl p-6 sm:p-8 text-left space-y-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#24211c] pb-4">
          <div className="flex items-center gap-2.5">
            <Search className="w-5 h-5 text-[#d4af37]" />
            <h3 className="font-cinzel text-lg font-bold text-[#f7e7ce]">
              Find Existing Reservation Pass
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#1c1a17] border border-[#332f28] text-[#a39c90] hover:text-[#f7e7ce]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="space-y-3">
          <label className="text-xs uppercase tracking-wider font-semibold text-[#a39c90]">
            Enter Reservation Code (e.g. NOC-88219), Email, or Phone Number
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              required
              placeholder="e.g. NOC-88219 or 555-382-9912"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-[#181614] border border-[#332f28] focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs text-[#f7e7ce] outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e5a93c]"
            >
              Search
            </button>
          </div>
        </form>

        {/* Search Result */}
        {hasSearched && (
          <div className="pt-2">
            {foundReservation ? (
              <div className="p-5 rounded-2xl bg-gradient-to-b from-[#1c1914] to-[#121110] border-2 border-[#d4af37]/60 space-y-4">
                <div className="flex justify-between items-start border-b border-[#2a2620] pb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
                      Confirmed Dining Pass
                    </span>
                    <h4 className="font-cinzel text-base font-bold text-[#f7e7ce]">
                      {foundReservation.guestName}
                    </h4>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#e5a93c] px-2.5 py-1 rounded bg-[#24211c] border border-[#332f28]">
                    {foundReservation.referenceCode}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-[#c2bcaf]">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{foundReservation.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#c2bcaf]">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{foundReservation.timeSlot}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#c2bcaf]">
                    <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{foundReservation.guestCount} Diners</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#c2bcaf]">
                    <Flame className="w-3.5 h-3.5 text-[#e5733c]" />
                    <span>{SEATING_ZONES.find(z => z.id === foundReservation.seatingZone)?.name}</span>
                  </div>
                </div>

                {foundReservation.dietaryAccommodations.length > 0 && (
                  <div className="text-[11px] text-[#a39c90] pt-1">
                    <strong className="text-[#e5a93c]">Dietary Notes: </strong>
                    {foundReservation.dietaryAccommodations.join(', ')}
                  </div>
                )}

                <div className="pt-3 border-t border-[#2a2620] flex items-center justify-between">
                  <span className="text-[10px] text-[#8a847a]">
                    Deposit Hold: Rs. {foundReservation.totalEstimatedDeposit}
                  </span>
                  <button
                    onClick={() => {
                      if (confirm(`Are you sure you wish to cancel reservation ${foundReservation.referenceCode}?`)) {
                        onCancelReservation(foundReservation.id);
                        setFoundReservation(null);
                        setHasSearched(false);
                      }
                    }}
                    className="text-xs text-[#e5733c] hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Cancel Reservation</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-[#181614] border border-[#26231d] text-center text-xs text-[#a39c90] space-y-1">
                <AlertCircle className="w-5 h-5 text-[#e5733c] mx-auto mb-1" />
                <p>No active reservation found matching "{searchQuery}".</p>
                <p className="text-[10px] text-[#6e685f]">Try using the sample code NOC-88219 or search by phone number.</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
