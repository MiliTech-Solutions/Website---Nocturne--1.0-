import React, { useState } from 'react';
import { Wine, Sparkles, X, ChevronRight, GlassWater, Award, Search, MessageSquare, Bot } from 'lucide-react';
import { MENU_ITEMS, SOMMELIER_CELLAR_SELECTIONS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface SommelierConciergeProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDishPairing: (dish: MenuItem) => void;
}

export const SommelierConcierge: React.FC<SommelierConciergeProps> = ({
  isOpen,
  onClose,
  onSelectDishPairing
}) => {
  const [activeMood, setActiveMood] = useState<'tannic' | 'crisp' | 'smoky' | 'velvet' | 'botanical'>('velvet');
  const [customQuestion, setCustomQuestion] = useState('');
  const [aiAnswers, setAiAnswers] = useState<{ query: string; answer: string; recommendations: string[] }[]>([]);
  const [isConsulting, setIsConsulting] = useState(false);

  if (!isOpen) return null;

  const moodRecommendations = {
    velvet: {
      title: "Silky, Forest Floor & Burgundy Terroir",
      description: "Delicate yet profound profiles driven by ancient limestone soils, gentle extraction, and wild raspberry undertones.",
      wines: [
        { name: "Domaine Dujac Morey-Saint-Denis 2019", region: "Côte de Nuits, Burgundy", price: "Rs. 480 / glass • Rs. 3900 / bottle", match: "Pairs with Smoked Rohan Duck Breast" },
        { name: "Gaja Barbaresco DOCG 2018", region: "Piedmont, Italy", price: "Rs. 550 / glass • Rs. 4800 / bottle", match: "Pairs with Handmade Tagliolini with Truffle" }
      ]
    },
    tannic: {
      title: "Structured, Powerful & Deep Obsidian",
      description: "Muscular Cabernet Sauvignon and Nebbiolo vintages with architectural tannins, blackcurrant, graphite, and toasted cedar.",
      wines: [
        { name: "Château Margaux Premier Grand Cru Classé 2015", region: "Bordeaux, France", price: "Rs. 750 / glass • Rs. 7200 / bottle", match: "Supreme match with A5 Miyazaki Wagyu" },
        { name: "Opus One Proprietary Red 2019", region: "Napa Valley, CA", price: "Rs. 650 / glass • Rs. 5900 / bottle", match: "Matches Binchotan Charcoal Meats" }
      ]
    },
    crisp: {
      title: "Crystalline, Saline & Grand Cru Bubbles",
      description: "Piercing chalk minerality, lemon curd, toasted brioche, and electric vertical acidity.",
      wines: [
        { name: "Dom Pérignon Vintage Brut 2013", region: "Épernay, Champagne", price: "Rs. 480 / glass • Rs. 3800 / bottle", match: "Divine with Imperial Oscietra Caviar" },
        { name: "Domaine Leflaive Puligny-Montrachet 2020", region: "Burgundy, France", price: "Rs. 380 / glass • Rs. 2900 / bottle", match: "Sublime with Hiramasa Kingfish" }
      ]
    },
    smoky: {
      title: "Peaty, Charred Cedar & High-Proof Alchemies",
      description: "Artisanal single malts, charred barrel botanicals, and hand-smoked cocktail elixirs.",
      wines: [
        { name: "The Nocturne Old Fashioned No. IV", region: "Hakushu 12-yr Single Malt & Cedar", price: "Rs. 340", match: "Aromatic accompaniment to Dark Chocolate Dome" },
        { name: "Taylor Fladgate 30-Year Tawny Port", region: "Douro Valley, Portugal", price: "Rs. 360 / glass", match: "Pairs with 24K Gold Smoked Chocolate" }
      ]
    },
    botanical: {
      title: "Zero-Proof Wild Foraged Elixirs",
      description: "Clarified elderflower, smoked pine needle infusions, fermented verjus, and sparkling cold-brew oolong.",
      wines: [
        { name: "Smoked Pine & Verjus Sparkling Spritz", region: "House Botanical Lab", price: "Rs. 180", match: "Harmonizes with Wild Salsify & Chanterelles" },
        { name: "Kyoto Roasted Houjicha & Yuzu Essence", region: "Artisanal Single-Estate", price: "Rs. 160", match: "Accompanying all fire hearth courses" }
      ]
    }
  };

  const handleAskSommelier = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    setIsConsulting(true);
    const q = customQuestion;
    setCustomQuestion('');

    setTimeout(() => {
      let advice = "";
      let recs: string[] = [];

      const lower = q.toLowerCase();
      if (lower.includes('wagyu') || lower.includes('steak') || lower.includes('beef')) {
        advice = "For our A5 Miyazaki Wagyu, our Head Sommelier strongly recommends the Château Margaux 2015 Premier Grand Cru or Gaja Barbaresco 2018. The intense marbling of the BMS 11 beef demands the structured tannins and cedar aromatics of aged Left Bank Bordeaux to dissolve the unctuous fat.";
        recs = ["Château Margaux 2015", "Gaja Barbaresco DOCG 2018", "Opus One 2019"];
      } else if (lower.includes('caviar') || lower.includes('seafood') || lower.includes('scallop') || lower.includes('salmon')) {
        advice = "To elevate the delicate oceanic salinity of our Oscietra Caviar and Hand-Dived Scallops, we suggest opening with Dom Pérignon Vintage Brut 2013 or Domaine Leflaive Puligny-Montrachet. The chalk minerality and brioche toast provide a crystalline backdrop.";
        recs = ["Dom Pérignon 2013", "Puligny-Montrachet 2020", "Meursault Premier Cru 2019"];
      } else if (lower.includes('truffle') || lower.includes('pasta')) {
        advice = "Périgord black truffles contain over 50 volatile aromatic esters that pair heavenly with aged Nebbiolo from Piedmont or Meursault Premier Cru 'Les Charmes'. The buttery Vacche Rosse emulsion bridges the earthy truffle perfumes seamlessly.";
        recs = ["Gaja Barbaresco 2018", "Meursault Premier Cru 'Les Charmes'"];
      } else if (lower.includes('non-alcoholic') || lower.includes('alcohol') || lower.includes('mocktail')) {
        advice = "Our Head Alchemist prepares custom fermented botanical extractions, including smoked pine needle verjus and chilled high-altitude Taiwan oolong tea to provide matching complexity and mouthfeel without alcohol.";
        recs = ["Smoked Pine & Verjus Spritz", "Clarified Shiso Blossom Tonic"];
      } else {
        advice = "For your bespoke inquiry, Head Sommelier Julien recommends starting with a glass of 2013 Dom Pérignon Champagne before transitioning into our 7-course Sommelier Reserve Flight, where each vintage is uncorked 45 minutes prior at cellar temperature.";
        recs = ["Sommelier Reserve Tasting Flight", "Dom Pérignon Vintage 2013"];
      }

      setAiAnswers(prev => [{ query: q, answer: advice, recommendations: recs }, ...prev]);
      setIsConsulting(false);
    }, 600);
  };

  const currentSelection = moodRecommendations[activeMood];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#12110f] border border-[#d4af37]/40 rounded-3xl shadow-2xl overflow-hidden my-6 text-left animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#1a1713] via-[#141210] to-[#1a1713] border-b border-[#29241d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center">
              <Wine className="w-5 h-5 text-[#e5a93c]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-cinzel text-lg sm:text-xl font-bold text-[#f7e7ce]">
                  Sommelier AI Pairing Concierge
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#e5a93c] text-[9px] font-bold uppercase tracking-wider border border-[#d4af37]/30">
                  Live Cellar Sync
                </span>
              </div>
              <p className="text-xs text-[#a39c90]">
                Curated by Head Sommelier Julien Mercier • 2,400+ Cellar Bottles
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Mood Palettes selector */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37]">
              Explore by Palate & Terroir Mood
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'velvet', label: 'Silky Burgundy & Rose' },
                { id: 'tannic', label: 'Structured Bordeaux' },
                { id: 'crisp', label: 'Champagne & Minerality' },
                { id: 'smoky', label: 'Peat & Smoky Elixirs' },
                { id: 'botanical', label: 'Zero-Proof Botanicals' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMood(m.id as typeof activeMood)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                    activeMood === m.id
                      ? 'bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20 font-bold'
                      : 'bg-[#181614] border border-[#2a2620] text-[#a39c90] hover:text-[#f7e7ce] hover:border-[#d4af37]/40'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Mood Details Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#181614] to-[#100f0d] border border-[#d4af37]/30 space-y-4">
            <div>
              <h3 className="font-cinzel text-lg font-bold text-[#f7e7ce]">
                {currentSelection.title}
              </h3>
              <p className="text-xs text-[#a39c90] mt-1 font-light leading-relaxed">
                {currentSelection.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block">
                Featured Cellar Selections
              </span>
              {currentSelection.wines.map((wine, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#141311] border border-[#29241d] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-xs text-[#f7e7ce]">{wine.name}</h4>
                    <p className="text-[11px] text-[#8a847a]">{wine.region}</p>
                    <p className="text-[11px] text-[#d4af37] font-serif-luxury italic mt-0.5">{wine.match}</p>
                  </div>
                  <span className="font-cinzel text-xs font-bold text-[#e5a93c] shrink-0">
                    {wine.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Sommelier Question Prompt */}
          <div className="space-y-3 pt-2">
            <label className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37] flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5" />
              <span>Ask Our Sommelier Any Pairing Question</span>
            </label>
            <form onSubmit={handleAskSommelier} className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. Which wine pairs with Wagyu? What vintage champagne for anniversary?"
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                className="flex-1 bg-[#181614] border border-[#332f28] focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs text-[#f7e7ce] outline-none"
              />
              <button
                type="submit"
                disabled={isConsulting}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e5a93c] text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 disabled:opacity-50 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Consult</span>
              </button>
            </form>
          </div>

          {/* AI Advisor Response Cards */}
          {aiAnswers.length > 0 && (
            <div className="space-y-3">
              {aiAnswers.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#161412] border border-[#d4af37]/40 space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 text-[11px] text-[#e5a93c] font-semibold">
                    <MessageSquare className="w-3 h-3" />
                    <span>Inquiry: "{item.query}"</span>
                  </div>
                  <p className="text-xs text-[#c2bcaf] leading-relaxed font-light">
                    {item.answer}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.recommendations.map((rec, rIdx) => (
                      <span key={rIdx} className="px-2.5 py-1 rounded bg-[#24211c] text-[10px] text-[#d4af37] border border-[#332f28]">
                        ✦ {rec}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#141311] border-t border-[#24211c] flex items-center justify-between text-xs text-[#8a847a]">
          <span>Cellar temperature maintained at strict 13°C / 55°F</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#24211c] text-[#f7e7ce] hover:bg-[#d4af37] hover:text-black font-semibold uppercase text-[11px] tracking-wider transition-colors"
          >
            Close Advisor
          </button>
        </div>

      </div>
    </div>
  );
};
