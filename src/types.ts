export type DietaryType = 'GF' | 'DF' | 'V' | 'VG' | 'NF' | 'P';

export interface WinePairing {
  name: string;
  vintage: string;
  region: string;
  notes: string;
  glassPrice: number;
  bottlePrice: number;
  grapeVarietal: string;
}

export interface FlavorProfile {
  umami: number; // 1-10
  richness: number; // 1-10
  smokiness: number; // 1-10
  crispness: number; // 1-10
  aroma: number; // 1-10
}

export interface MenuItem {
  id: string;
  name: string;
  nativeTitle: string;
  course: 'amuse' | 'starter' | 'main' | 'hearth' | 'dessert' | 'cocktail' | 'wine';
  category: string;
  price: number;
  description: string;
  culinaryNotes: string;
  ingredients: { name: string; origin: string }[];
  dietary: DietaryType[];
  winePairing: WinePairing;
  prepMethod: string;
  flavorRadar: FlavorProfile;
  image: string;
  isChefSignature?: boolean;
  servingTemperature?: string;
  pairingPhilosophy?: string;
}

export interface SeatingZone {
  id: 'hearth' | 'grand_salon' | 'terrace' | 'vault';
  name: string;
  subtitle: string;
  description: string;
  ambianceTag: string;
  capacityText: string;
  minGuests: number;
  maxGuests: number;
  depositPerGuest: number;
  image: string;
  features: string[];
}

export interface DiningExperience {
  id: 'nocturne_7_course' | 'heritage_5_course' | 'a_la_carte';
  name: string;
  tagline: string;
  coursesCount: number;
  pricePerGuest: number;
  description: string;
  highlights: string[];
  sommelierPairingPrice: number;
  grandCruPairingPrice: number;
  durationMinutes: number;
}

export interface Reservation {
  id: string;
  referenceCode: string;
  guestName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  guestCount: number;
  seatingZone: 'hearth' | 'grand_salon' | 'terrace' | 'vault';
  diningExperience: 'nocturne_7_course' | 'heritage_5_course' | 'a_la_carte';
  winePairingTier: 'none' | 'sommelier_reserve' | 'grand_cru_selection' | 'zero_proof';
  specialOccasion: 'none' | 'anniversary' | 'birthday' | 'business' | 'date_night' | 'celebration';
  dietaryAccommodations: string[];
  customRequests?: string;
  status: 'confirmed' | 'cancelled';
  totalEstimatedDeposit: number;
  createdAt: string;
}

export interface CartTastingItem {
  item: MenuItem;
  quantity: number;
  includeWinePairing: boolean;
}
