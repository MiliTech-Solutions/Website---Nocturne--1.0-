import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveMenu } from './components/InteractiveMenu';
import { SignaturesSection } from './components/SignaturesSection';
import { DiningExperiences } from './components/DiningExperiences';
import { AmbianceSection } from './components/AmbianceSection';
import { CellarSection } from './components/CellarSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ReviewsAccolades } from './components/ReviewsAccolades';
import { Footer } from './components/Footer';
import { ReservationSystem } from './components/ReservationSystem';
import { TastingTrayDrawer } from './components/TastingTrayDrawer';
import { SommelierConcierge } from './components/SommelierConcierge';
import { BookingLookupModal } from './components/BookingLookupModal';
import { MenuItem, CartTastingItem, Reservation, DiningExperience } from './types';
import { SAMPLE_RESERVATIONS } from './data/restaurantData';
import { ambientSoundEngine } from './utils/soundAndTheme';

export default function App() {
  // Modal & Drawer visibility
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [reservationPreset, setReservationPreset] = useState<{
    date?: string;
    guests?: number;
    zone?: string;
    experienceId?: string;
  } | undefined>(undefined);

  const [isTastingTrayOpen, setIsTastingTrayOpen] = useState(false);
  const [isSommelierOpen, setIsSommelierOpen] = useState(false);
  const [isLookupOpen, setIsLookupOpen] = useState(false);

  // Ambiance Lighting Theme state
  const [lightingTheme, setLightingTheme] = useState<'gold' | 'noir' | 'ember'>('gold');

  // Active section tracking for navbar
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Tasting Tray Cart items
  const [tastingTrayItems, setTastingTrayItems] = useState<CartTastingItem[]>([]);

  // Reservation list
  const [reservations, setReservations] = useState<Reservation[]>(SAMPLE_RESERVATIONS);

  // Initialize ambient hearth soundscape by default on load & user interaction
  useEffect(() => {
    ambientSoundEngine.initAutoPlay();
  }, []);

  // Section Observer for active header highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'menu', 'signatures', 'experiences', 'cellar', 'ambiance', 'philosophy', 'accolades'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handlers for Tasting Tray
  const handleAddToTastingTray = (item: MenuItem, includeWine: boolean) => {
    setTastingTrayItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id
            ? { ...i, quantity: i.quantity + 1, includeWinePairing: includeWine }
            : i
        );
      }
      return [...prev, { item, quantity: 1, includeWinePairing: includeWine }];
    });
    setIsTastingTrayOpen(true);
  };

  const handleUpdateQuantity = (dishId: string, quantity: number) => {
    setTastingTrayItems((prev) =>
      prev.map((i) => (i.item.id === dishId ? { ...i, quantity } : i))
    );
  };

  const handleToggleWine = (dishId: string) => {
    setTastingTrayItems((prev) =>
      prev.map((i) =>
        i.item.id === dishId ? { ...i, includeWinePairing: !i.includeWinePairing } : i
      )
    );
  };

  const handleRemoveItem = (dishId: string) => {
    setTastingTrayItems((prev) => prev.filter((i) => i.item.id !== dishId));
  };

  const handleClearTray = () => {
    setTastingTrayItems([]);
  };

  // Open reservation with preset
  const handleOpenReservation = (preset?: {
    date?: string;
    guests?: number;
    zone?: string;
    experienceId?: string;
  }) => {
    setReservationPreset(preset);
    setIsReservationOpen(true);
  };

  const handleSelectExperience = (expId: DiningExperience['id']) => {
    handleOpenReservation({ experienceId: expId });
  };

  const handleSaveReservation = (newRes: Reservation) => {
    setReservations((prev) => [newRes, ...prev]);
  };

  const handleCancelReservation = (resId: string) => {
    setReservations((prev) => prev.filter((r) => r.id !== resId));
  };

  // Dynamic ambient container class
  const themeClasses = {
    gold: 'bg-[#0c0b0a] text-[#e8e4dc]',
    noir: 'bg-[#080808] text-[#d6d2c9]',
    ember: 'bg-[#0e0a08] text-[#ebdcd3]'
  }[lightingTheme];

  return (
    <div className={`min-h-screen transition-colors duration-700 ${themeClasses} relative font-sans antialiased selection:bg-[#d4af37]/30 selection:text-[#f7e7ce]`}>
      
      {/* Global Ambient Glow Overlays */}
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 z-0 ${
        lightingTheme === 'ember'
          ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e5733c]/8 via-transparent to-transparent opacity-80'
          : lightingTheme === 'gold'
          ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/8 via-transparent to-transparent opacity-80'
          : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8a847a]/5 via-transparent to-transparent opacity-50'
      }`} />

      {/* Navigation Bar */}
      <Navbar
        onOpenReservation={() => handleOpenReservation()}
        onOpenLookup={() => setIsLookupOpen(true)}
        onOpenTastingTray={() => setIsTastingTrayOpen(true)}
        onOpenSommelier={() => setIsSommelierOpen(true)}
        tastingTrayCount={tastingTrayItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          onOpenReservation={handleOpenReservation}
          onExploreMenu={() => {
            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenSommelier={() => setIsSommelierOpen(true)}
          onOpenLookup={() => setIsLookupOpen(true)}
        />

        <InteractiveMenu
          onAddToTastingTray={handleAddToTastingTray}
          onOpenReservation={handleOpenReservation}
          tastingTrayItemIds={tastingTrayItems.map((i) => i.item.id)}
        />

        <SignaturesSection
          onAddToTastingTray={handleAddToTastingTray}
          onExploreMenu={() => {
            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
          }}
          tastingTrayItemIds={tastingTrayItems.map((i) => i.item.id)}
        />

        <DiningExperiences
          onSelectExperience={handleSelectExperience}
        />

        <CellarSection
          onOpenSommelierAdvisor={() => setIsSommelierOpen(true)}
          onAddToTastingTray={handleAddToTastingTray}
          tastingTrayItemIds={tastingTrayItems.map((i) => i.item.id)}
        />

        <AmbianceSection
          currentTheme={lightingTheme}
          onChangeTheme={setLightingTheme}
          onOpenReservation={() => handleOpenReservation()}
        />

        <PhilosophySection />

        <ReviewsAccolades />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-outs */}
      <ReservationSystem
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        initialPreset={reservationPreset}
        onSaveReservation={handleSaveReservation}
        existingReservations={reservations}
      />

      <TastingTrayDrawer
        isOpen={isTastingTrayOpen}
        onClose={() => setIsTastingTrayOpen(false)}
        items={tastingTrayItems}
        onUpdateQuantity={handleUpdateQuantity}
        onToggleWine={handleToggleWine}
        onRemoveItem={handleRemoveItem}
        onClearTray={handleClearTray}
        onProceedToReservation={() => handleOpenReservation()}
      />

      <SommelierConcierge
        isOpen={isSommelierOpen}
        onClose={() => setIsSommelierOpen(false)}
        onSelectDishPairing={(dish) => handleAddToTastingTray(dish, true)}
      />

      <BookingLookupModal
        isOpen={isLookupOpen}
        onClose={() => setIsLookupOpen(false)}
        reservations={reservations}
        onCancelReservation={handleCancelReservation}
      />

    </div>
  );
}
