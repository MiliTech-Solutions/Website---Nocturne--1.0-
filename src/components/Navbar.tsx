import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, ShoppingBag, Search, Menu as MenuIcon, X, Wine } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenLookup: () => void;
  onOpenTastingTray: () => void;
  onOpenSommelier: () => void;
  tastingTrayCount: number;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  onOpenLookup,
  onOpenTastingTray,
  onOpenSommelier,
  tastingTrayCount,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Signatures', href: '#signatures' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Ambiance', href: '#ambiance' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Accolades', href: '#accolades' }
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0c0b0a]/90 backdrop-blur-xl border-b border-[#d4af37]/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#0c0b0a]/90 via-[#0c0b0a]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Crest & Logo in Calligraphy / Gold Script Style */}
        <a href="#" className="flex items-center gap-3 group text-left">
          <div className="flex flex-col">
            <span className="font-script text-3xl sm:text-4xl text-[#e5a93c] group-hover:text-[#f7e7ce] transition-colors leading-none tracking-wide drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
              Nocturne
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 hover:text-[#f7e7ce] ${
                activeSection === link.href.replace('#', '')
                  ? 'text-[#e5a93c]'
                  : 'text-[#a39c90]'
              }`}
            >
              {link.label}
              {activeSection === link.href.replace('#', '') && (
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Reserve CTA with Vertical Secondary Controls anchored right below it */}
          <div className="relative flex items-center">
            {/* Primary CTA: Reserve Table - parallel with the navigation bar */}
            <button
              id="nav-reserve-cta"
              onClick={onOpenReservation}
              className="flex items-center justify-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5a93c] to-[#c59b27] text-black font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve</span>
            </button>

            {/* Vertical Steward & Cart Buttons right-aligned directly below Reserve */}
            <div className="absolute top-full right-0 mt-3.5 flex flex-col items-end gap-2">
              {/* Sommelier Pairing Advisor Button */}
              <button
                id="nav-sommelier-btn"
                onClick={onOpenSommelier}
                className="p-1.5 sm:p-2 rounded-full border border-[#332f28] bg-[#141311]/90 backdrop-blur-md hover:border-[#d4af37]/60 text-[#e8e4dc] hover:text-[#d4af37] shadow-lg transition-all shrink-0 cursor-pointer"
                title="Sommelier AI Pairing Advisor"
              >
                <Wine className="w-3.5 h-3.5" />
              </button>

              {/* Tasting Journey Tray Cart */}
              <button
                id="nav-tasting-tray-btn"
                onClick={onOpenTastingTray}
                className="relative p-1.5 sm:p-2 rounded-full border border-[#332f28] bg-[#141311]/90 backdrop-blur-md hover:border-[#d4af37]/60 text-[#e8e4dc] shadow-lg transition-all shrink-0 cursor-pointer"
                title="Curated Tasting Tray"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                {tastingTrayCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#d4af37] text-black font-bold text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center animate-bounce">
                    {tastingTrayCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#a39c90] hover:text-[#e8e4dc] lg:hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#100f0d] border-b border-[#2a2620] px-6 py-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-[#c2bcaf] hover:text-[#e5a93c] py-1 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#24211c] flex flex-wrap gap-3">
            <button
              onClick={() => { onOpenSommelier(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#d4af37]/40 bg-[#181614] text-[#d4af37] text-xs font-semibold uppercase tracking-wider"
            >
              <Wine className="w-4 h-4" />
              Sommelier AI Advisor
            </button>
            <button
              onClick={() => { onOpenLookup(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#332f28] bg-[#141311] text-[#a39c90] text-xs font-semibold uppercase tracking-wider"
            >
              <Search className="w-4 h-4" />
              Look Up Existing Reservation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
