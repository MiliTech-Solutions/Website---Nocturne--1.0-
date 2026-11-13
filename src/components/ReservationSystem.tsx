import React, { useState, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  Flame,
  Wine,
  CheckCircle2,
  X,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  QrCode,
  Download,
  Share2,
  AlertCircle,
  Search,
  Phone,
  Mail,
  User,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SEATING_ZONES, DINING_EXPERIENCES } from '../data/restaurantData';
import { Reservation, SeatingZone, DiningExperience } from '../types';

interface ReservationSystemProps {
  isOpen: boolean;
  onClose: () => void;
  initialPreset?: {
    date?: string;
    guests?: number;
    zone?: string;
    experienceId?: string;
  };
  onSaveReservation: (reservation: Reservation) => void;
  existingReservations: Reservation[];
}

export const ReservationSystem: React.FC<ReservationSystemProps> = ({
  isOpen,
  onClose,
  initialPreset,
  onSaveReservation,
  existingReservations
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Form State
  const [guestCount, setGuestCount] = useState<number>(initialPreset?.guests || 2);
  const [selectedDate, setSelectedDate] = useState<string>(
    initialPreset?.date || '2026-09-18'
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('20:00');
  const [selectedZone, setSelectedZone] = useState<SeatingZone['id']>(
    (initialPreset?.zone as SeatingZone['id']) || 'hearth'
  );
  const [selectedExperience, setSelectedExperience] = useState<DiningExperience['id']>(
    (initialPreset?.experienceId as DiningExperience['id']) || 'nocturne_7_course'
  );
  const [wineTier, setWineTier] = useState<'none' | 'sommelier_reserve' | 'grand_cru_selection' | 'zero_proof'>('sommelier_reserve');
  
  // Guest Details
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialOccasion, setSpecialOccasion] = useState<Reservation['specialOccasion']>('date_night');
  const [dietaryAccommodations, setDietaryAccommodations] = useState<string[]>([]);
  const [customRequests, setCustomRequests] = useState('');
  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Update if initialPreset changes
  useEffect(() => {
    if (initialPreset?.guests) setGuestCount(initialPreset.guests);
    if (initialPreset?.date) setSelectedDate(initialPreset.date);
    if (initialPreset?.zone) setSelectedZone(initialPreset.zone as SeatingZone['id']);
    if (initialPreset?.experienceId) setSelectedExperience(initialPreset.experienceId as DiningExperience['id']);
  }, [initialPreset]);

  if (!isOpen) return null;

  const timeSlots = [
    { time: '17:30', label: 'Twilight First Sitting (17:30)' },
    { time: '18:45', label: 'Early Evening (18:45)' },
    { time: '20:00', label: 'Prime Candlelight Sitting (20:00)' },
    { time: '21:15', label: 'Late Nocturne (21:15)' },
    { time: '22:30', label: 'Midnight Tasting (22:30)' }
  ];

  const currentZoneObj = SEATING_ZONES.find(z => z.id === selectedZone) || SEATING_ZONES[0];
  const currentExpObj = DINING_EXPERIENCES.find(e => e.id === selectedExperience) || DINING_EXPERIENCES[0];

  const estimatedDeposit = currentZoneObj.depositPerGuest * guestCount;

  const handleDietaryToggle = (item: string) => {
    if (dietaryAccommodations.includes(item)) {
      setDietaryAccommodations(dietaryAccommodations.filter(d => d !== item));
    } else {
      setDietaryAccommodations([...dietaryAccommodations, item]);
    }
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) {
      alert('Please fill out your name, email, and phone number.');
      return;
    }

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newRes: Reservation = {
      id: `res-${Date.now()}`,
      referenceCode: `NOC-${randomNum}`,
      guestName,
      email: guestEmail,
      phone: guestPhone,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      guestCount,
      seatingZone: selectedZone,
      diningExperience: selectedExperience,
      winePairingTier: wineTier,
      specialOccasion,
      dietaryAccommodations,
      customRequests,
      status: 'confirmed',
      totalEstimatedDeposit: estimatedDeposit,
      createdAt: new Date().toISOString()
    };

    onSaveReservation(newRes);
    setConfirmedReservation(newRes);
    setStep(5);

    // Fire luxury celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#e5a93c', '#f7e7ce', '#ffffff']
      });
    } catch {
      // ignore
    }
  };

  const handleCopyPass = () => {
    if (confirmedReservation) {
      navigator.clipboard.writeText(confirmedReservation.referenceCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#12110f] border border-[#d4af37]/40 rounded-3xl shadow-2xl overflow-hidden my-6 text-left animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Header Bar */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#181613] via-[#141311] to-[#181613] border-b border-[#29241d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#e5a93c]" />
            </div>
            <div>
              <h2 className="font-cinzel text-lg sm:text-xl font-bold text-[#f7e7ce]">
                Table Reservation Suite
              </h2>
              <p className="text-[11px] text-[#a39c90]">
                NOCTURNE Haute Cuisine & Sommelier Lounge
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#1c1a17] border border-[#332f28] text-[#a39c90] hover:text-[#f7e7ce] hover:border-[#d4af37] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-Step Progression Indicator */}
        {step < 5 && (
          <div className="bg-[#161412] px-6 py-3 border-b border-[#24211c] flex items-center justify-between">
            <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs uppercase tracking-wider font-semibold">
              <span className={`px-2.5 py-1 rounded-full ${step === 1 ? 'bg-[#d4af37] text-black font-bold' : 'text-[#8a847a]'}`}>
                1. Date & Time
              </span>
              <ChevronRight className="w-3 h-3 text-[#332f28]" />
              <span className={`px-2.5 py-1 rounded-full ${step === 2 ? 'bg-[#d4af37] text-black font-bold' : 'text-[#8a847a]'}`}>
                2. Atmosphere
              </span>
              <ChevronRight className="w-3 h-3 text-[#332f28]" />
              <span className={`px-2.5 py-1 rounded-full ${step === 3 ? 'bg-[#d4af37] text-black font-bold' : 'text-[#8a847a]'}`}>
                3. Tasting Menu
              </span>
              <ChevronRight className="w-3 h-3 text-[#332f28]" />
              <span className={`px-2.5 py-1 rounded-full ${step === 4 ? 'bg-[#d4af37] text-black font-bold' : 'text-[#8a847a]'}`}>
                4. Guest Details
              </span>
            </div>
            <div className="text-[11px] text-[#d4af37] font-serif-luxury italic hidden sm:block">
              Guaranteed Table Seclusion
            </div>
          </div>
        )}

        {/* Step Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">

          {/* STEP 1: PARTY & DATE & TIME */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="font-cinzel text-xl font-bold text-[#f7e7ce]">
                  Select Guests, Date & Sitting
                </h3>
                <p className="text-xs text-[#a39c90] font-light mt-1">
                  Dinner seatings are strictly timed to preserve the synchronized progression of each tasting course.
                </p>
              </div>

              {/* Guest Count Selector */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Number of Guests ({guestCount} Diners)</span>
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {[1, 2, 3, 4, 5, 6, 8, 12].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestCount(num)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                        guestCount === num
                          ? 'bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20 scale-105'
                          : 'bg-[#181614] border border-[#2a2620] text-[#c2bcaf] hover:border-[#d4af37]/50'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>

                {/* Custom Guests Option Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-[#161513] border border-[#26231d]">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold">
                      Custom Party Size:
                    </span>
                    <span className="text-[11px] text-[#8a847a]">
                      (For private salon dining or bespoke group sizes)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      className="w-8 h-8 rounded-lg bg-[#221f1c] border border-[#332f28] text-[#c2bcaf] hover:text-[#f7e7ce] hover:border-[#d4af37] flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
                      title="Decrease guest count"
                    >
                      −
                    </button>

                    <div className="flex items-center gap-1.5">
                      <input
                        type="number"
                        min={1}
                        max={100}
                        value={guestCount}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10);
                          if (!isNaN(val) && val >= 1) {
                            setGuestCount(Math.min(100, val));
                          }
                        }}
                        className="w-16 bg-[#12110f] border border-[#3a352d] focus:border-[#d4af37] rounded-lg px-2 py-1 text-center text-xs font-bold text-[#f7e7ce] outline-none"
                      />
                      <span className="text-xs text-[#a39c90] font-medium">Guests</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.min(100, guestCount + 1))}
                      className="w-8 h-8 rounded-lg bg-[#221f1c] border border-[#332f28] text-[#c2bcaf] hover:text-[#f7e7ce] hover:border-[#d4af37] flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
                      title="Increase guest count"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Date Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37] flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>Reservation Date</span>
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-[#181614] border border-[#332f28] focus:border-[#d4af37] rounded-xl px-4 py-3 text-sm text-[#f7e7ce] outline-none"
                  />
                  <p className="text-[10px] text-[#8a847a]">Reservations open 60 days in advance.</p>
                </div>

                {/* Seating Times */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Sitting Time</span>
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot.time)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold text-left flex items-center justify-between transition-all ${
                          selectedTimeSlot === slot.time
                            ? 'bg-[#2a2620] border border-[#d4af37] text-[#e5a93c]'
                            : 'bg-[#181614] border border-[#2a2620] text-[#a39c90] hover:text-[#f7e7ce]'
                        }`}
                      >
                        <span>{slot.label}</span>
                        {selectedTimeSlot === slot.time && <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Next Button */}
              <div className="pt-4 border-t border-[#24211c] flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5a93c] text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 flex items-center gap-2"
                >
                  <span>Select Atmosphere & Zone</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: ATMOSPHERE & SEATING ZONE */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="font-cinzel text-xl font-bold text-[#f7e7ce]">
                  Choose Your Dining Atmosphere
                </h3>
                <p className="text-xs text-[#a39c90] font-light mt-1">
                  Each zone delivers a distinctive sensory ambiance, from open Binchotan charcoal theatrics to private cellar seclusion.
                </p>
              </div>

              {/* Seating Zone Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SEATING_ZONES.map((zone) => {
                  const isSelected = selectedZone === zone.id;
                  return (
                    <div
                      key={zone.id}
                      onClick={() => setSelectedZone(zone.id)}
                      className={`cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#1c1914] border-2 border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.2)]'
                          : 'bg-[#161412] border-[#2a2620] hover:border-[#d4af37]/40'
                      }`}
                    >
                      <div className="relative h-36 w-full overflow-hidden">
                        <img src={zone.image} alt={zone.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-transparent" />
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-black/80 border border-[#d4af37]/40 text-[#e5a93c]">
                          {zone.ambianceTag}
                        </span>
                        {isSelected && (
                          <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#d4af37] text-black flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      <div className="p-4 space-y-2">
                        <h4 className="font-cinzel text-sm font-bold text-[#f7e7ce]">{zone.name}</h4>
                        <p className="text-[11px] text-[#a39c90] leading-snug">{zone.description}</p>
                        <div className="pt-2 flex items-center justify-between text-[10px] text-[#d4af37]">
                          <span>Capacity: {zone.capacityText}</span>
                          <span>Deposit: Rs. {zone.depositPerGuest}/guest</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <div className="pt-4 border-t border-[#24211c] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl border border-[#332f28] text-xs text-[#a39c90] hover:text-[#f7e7ce] flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5a93c] text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 flex items-center gap-2"
                >
                  <span>Select Tasting Program</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: TASTING MENU & WINE PAIRING */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="font-cinzel text-xl font-bold text-[#f7e7ce]">
                  Select Gastronomic Program & Pairings
                </h3>
                <p className="text-xs text-[#a39c90] font-light mt-1">
                  Tasting menus are served to the entire table to maintain synchronization with our kitchen brigade.
                </p>
              </div>

              {/* Experience Selection Cards */}
              <div className="space-y-3">
                {DINING_EXPERIENCES.map((exp) => {
                  const isSelected = selectedExperience === exp.id;
                  return (
                    <div
                      key={exp.id}
                      onClick={() => setSelectedExperience(exp.id)}
                      className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isSelected
                          ? 'bg-[#1c1914] border-2 border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.18)]'
                          : 'bg-[#161412] border-[#2a2620] hover:border-[#d4af37]/40'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-cinzel text-sm font-bold text-[#f7e7ce]">{exp.name}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#2a2620] text-[#e5a93c]">
                            {exp.coursesCount} Courses
                          </span>
                        </div>
                        <p className="text-xs text-[#a39c90]">{exp.tagline}</p>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <div className="text-right">
                          <div className="font-cinzel text-lg font-bold text-[#f7e7ce]">Rs. {exp.pricePerGuest}</div>
                          <div className="text-[10px] text-[#8a847a]">per diner</div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#d4af37] bg-[#d4af37] text-black' : 'border-[#332f28]'}`}>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cellar Wine Pairing Add-on */}
              <div className="space-y-2 pt-2">
                <label className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37] flex items-center gap-1.5">
                  <Wine className="w-3.5 h-3.5" />
                  <span>Curated Cellar Pairing Tier</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'sommelier_reserve', label: 'Sommelier Reserve Pairing', price: currentExpObj.sommelierPairingPrice, desc: 'Selected rare estate vintages paired with each course' },
                    { id: 'grand_cru_selection', label: 'Grand Cru Prestige Pairing', price: currentExpObj.grandCruPairingPrice, desc: 'Iconic Grand Crus from Burgundy, Bordeaux, and vintage Champagne' },
                    { id: 'zero_proof', label: 'Artisanal Botanical Elixirs', price: 650, desc: 'Clarified wild botanical infusions, smoked dashi teas & fermentations' },
                    { id: 'none', label: 'A La Carte Cellar Selection', price: 0, desc: 'Order bottles tableside from our 2,400-bottle list' }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setWineTier(tier.id as typeof wineTier)}
                      className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                        wineTier === tier.id
                          ? 'bg-[#2a2620] border-[#d4af37] text-[#f7e7ce]'
                          : 'bg-[#181614] border-[#29241d] text-[#8a847a] hover:text-[#e8e4dc]'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-center text-xs font-bold text-[#e5a93c]">
                          <span>{tier.label}</span>
                          <span>{tier.price > 0 ? `+Rs. ${tier.price}` : 'No Pre-charge'}</span>
                        </div>
                        <p className="text-[11px] text-[#a39c90] mt-1">{tier.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="pt-4 border-t border-[#24211c] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 rounded-xl border border-[#332f28] text-xs text-[#a39c90] hover:text-[#f7e7ce] flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5a93c] text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 flex items-center gap-2"
                >
                  <span>Guest Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: GUEST INFORMATION & OCCASION */}
          {step === 4 && (
            <form onSubmit={handleCompleteBooking} className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="font-cinzel text-xl font-bold text-[#f7e7ce]">
                  Guest Contact & Dietary Accommodations
                </h3>
                <p className="text-xs text-[#a39c90] font-light mt-1">
                  Our maître d' will personally review all dietary accommodations with Chef Antoine.
                </p>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#c2bcaf] flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Primary Guest Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lady Victoria Kensington"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#181614] border border-[#332f28] focus:border-[#d4af37] rounded-xl px-3.5 py-2.5 text-xs text-[#f7e7ce] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#c2bcaf] flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. guest@domain.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-[#181614] border border-[#332f28] focus:border-[#d4af37] rounded-xl px-3.5 py-2.5 text-xs text-[#f7e7ce] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#c2bcaf] flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Mobile Number (SMS pass) *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +1 (555) 392-8812"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-[#181614] border border-[#332f28] focus:border-[#d4af37] rounded-xl px-3.5 py-2.5 text-xs text-[#f7e7ce] outline-none"
                  />
                </div>
              </div>

              {/* Special Occasion */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#e5733c]" />
                  <span>Are you celebrating a special occasion?</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { id: 'date_night', label: 'Romantic Date' },
                    { id: 'anniversary', label: 'Anniversary' },
                    { id: 'birthday', label: 'Birthday Celebration' },
                    { id: 'business', label: 'Executive Dinner' },
                    { id: 'celebration', label: 'Culinary Journey' }
                  ].map((occ) => (
                    <button
                      key={occ.id}
                      type="button"
                      onClick={() => setSpecialOccasion(occ.id as Reservation['specialOccasion'])}
                      className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                        specialOccasion === occ.id
                          ? 'bg-[#2a2620] border border-[#d4af37] text-[#e5a93c]'
                          : 'bg-[#181614] border border-[#2a2620] text-[#a39c90]'
                      }`}
                    >
                      {occ.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dietary Allergies & Preferences */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#d4af37]">
                  Dietary Accommodations (Check all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Gluten Allergy', 'Dairy Allergy', 'Shellfish Allergy', 'Nut Allergy', 'Vegetarian', 'Pescatarian', 'No Allium (Garlic/Onion)'].map((diet) => (
                    <button
                      key={diet}
                      type="button"
                      onClick={() => handleDietaryToggle(diet)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        dietaryAccommodations.includes(diet)
                          ? 'bg-[#d4af37] text-black font-bold shadow-md'
                          : 'bg-[#181614] border border-[#2a2620] text-[#a39c90] hover:text-[#f7e7ce]'
                      }`}
                    >
                      {diet}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Concierge Requests */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#c2bcaf]">
                  Special Requests / Sommelier Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Quiet corner table requested, champagne vintage preference, anniversary flower arrangement..."
                  value={customRequests}
                  onChange={(e) => setCustomRequests(e.target.value)}
                  className="w-full bg-[#181614] border border-[#332f28] focus:border-[#d4af37] rounded-xl px-3.5 py-2 text-xs text-[#f7e7ce] outline-none"
                />
              </div>

              {/* Summary of Reservation Deposit */}
              <div className="p-4 rounded-xl bg-[#161412] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[#a39c90]">Estimated Booking Hold Deposit: </span>
                  <span className="font-cinzel text-base font-bold text-[#e5a93c]">
                    Rs. {estimatedDeposit}
                  </span>
                  <span className="text-[10px] text-[#8a847a] block">
                    (Rs. {currentZoneObj.depositPerGuest}/guest • Credited toward your final evening check)
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#d4af37]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Free cancellation up to 48 hours before sitting</span>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 border-t border-[#24211c] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-4 py-2.5 rounded-xl border border-[#332f28] text-xs text-[#a39c90] hover:text-[#f7e7ce] flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  id="confirm-booking-btn"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5a93c] to-[#c59b27] text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-xl shadow-[#d4af37]/25 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm Reservation Pass</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 5: LUXURY CONFIRMATION DIGITAL PASS */}
          {step === 5 && confirmedReservation && (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300 text-center">
              
              {/* Top Luxury Seal */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c59b27] mx-auto flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                <CheckCircle2 className="w-9 h-9 text-black" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
                  Reservation Confirmed & Guaranteed
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#f7e7ce]">
                  Welcome to NOCTURNE, {confirmedReservation.guestName}
                </h3>
                <p className="font-serif-luxury text-sm text-[#a8a194] italic max-w-md mx-auto">
                  Your table has been reserved in our sanctuary. We have dispatched a luxury confirmation pass to your email and SMS.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="max-w-md mx-auto rounded-2xl bg-gradient-to-b from-[#1c1a17] to-[#121110] border-2 border-[#d4af37]/60 p-6 shadow-2xl text-left space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Header of pass */}
                <div className="flex justify-between items-start border-b border-[#2a2620] pb-3">
                  <div>
                    <span className="font-cinzel text-lg font-bold text-[#f7e7ce] tracking-widest block">NOCTURNE</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#d4af37]">Haute Cuisine & Cellar</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-[#8a847a] block">Pass Reference</span>
                    <span className="font-cinzel text-sm font-bold text-[#e5a93c]">
                      {confirmedReservation.referenceCode}
                    </span>
                  </div>
                </div>

                {/* Reservation Key Details */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-[#8a847a] block">Date & Time</span>
                    <span className="font-semibold text-[#f7e7ce]">{confirmedReservation.date} at {confirmedReservation.timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#8a847a] block">Party Size</span>
                    <span className="font-semibold text-[#f7e7ce]">{confirmedReservation.guestCount} Guests</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#8a847a] block">Atmosphere Zone</span>
                    <span className="font-semibold text-[#e5a93c]">
                      {SEATING_ZONES.find(z => z.id === confirmedReservation.seatingZone)?.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#8a847a] block">Tasting Program</span>
                    <span className="font-semibold text-[#f7e7ce]">
                      {DINING_EXPERIENCES.find(e => e.id === confirmedReservation.diningExperience)?.name}
                    </span>
                  </div>
                </div>

                {/* QR Code Simulation */}
                <div className="pt-3 border-t border-[#2a2620] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-black/80 border border-[#332f28]">
                      <QrCode className="w-7 h-7 text-[#d4af37]" />
                    </div>
                    <span className="text-[10px] text-[#8a847a]">
                      Present digital pass to Maître d' upon arrival
                    </span>
                  </div>
                  <button
                    onClick={handleCopyPass}
                    className="px-3 py-1.5 rounded-lg bg-[#24211c] border border-[#332f28] hover:border-[#d4af37] text-[11px] text-[#e5a93c] transition-colors"
                  >
                    {copiedCode ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Dinner at NOCTURNE (${confirmedReservation.referenceCode})`)}&dates=${confirmedReservation.date.replace(/-/g, '')}T${confirmedReservation.timeSlot.replace(':', '')}00Z/${confirmedReservation.date.replace(/-/g, '')}T${(parseInt(confirmedReservation.timeSlot) + 2).toString().padStart(2, '0')}0000Z&details=${encodeURIComponent(`Reservation Code: ${confirmedReservation.referenceCode}\nZone: ${confirmedReservation.seatingZone}\nGuests: ${confirmedReservation.guestCount}`)}&location=${encodeURIComponent('NOCTURNE Haute Cuisine, 450 Post St, San Francisco, CA')}`;
                    window.open(googleCalUrl, '_blank');
                  }}
                  className="px-4 py-2.5 rounded-xl border border-[#d4af37]/40 bg-[#181614] text-xs text-[#d4af37] hover:bg-[#201d18] flex items-center gap-2"
                >
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>Add to Google Calendar</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e5a93c]"
                >
                  Return to Sanctuary
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
