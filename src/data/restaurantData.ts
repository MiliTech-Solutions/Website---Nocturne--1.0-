import { MenuItem, SeatingZone, DiningExperience, Reservation } from '../types';
import { EXPANDED_MENU_ITEMS } from './expandedMenuItems';

export const SEATING_ZONES: SeatingZone[] = [
  {
    id: 'hearth',
    name: "The Chef's Hearth Counter",
    subtitle: "Front-row interactive omakase & open-fire grill",
    description: "An intimate 10-seat black granite counter facing the open Binchotan charcoal hearth. Direct interaction with Executive Chef Antoine Laurent and live fire culinary theatrics.",
    ambianceTag: "Glowing Embers & Intimate",
    capacityText: "1–4 Guests",
    minGuests: 1,
    maxGuests: 4,
    depositPerGuest: 750,
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    features: ["Direct Chef Conversation", "Custom Fire Courses", "Exclusive Cellar Pours", "Charcoal Aroma Immersion"]
  },
  {
    id: 'grand_salon',
    name: "The Obsidian Grand Salon",
    subtitle: "Candlelit luxury dining tables & velvet booths",
    description: "Our centerpiece dining room framed with hand-plastered charcoal walls, brushed brass sconces, and custom circular velvet banquettes under soft 2200K ambient illumination.",
    ambianceTag: "Romantic Candlelight & Velvet",
    capacityText: "2–8 Guests",
    minGuests: 2,
    maxGuests: 8,
    depositPerGuest: 500,
    image: "/src/assets/images/obsidian_grand_salon_1792740423111.jpg",
    features: ["Acoustic Privacy", "Full A La Carte & Tasting", "Dedicated Table Sommelier", "Soft Velvet Banquettes"]
  },
  {
    id: 'terrace',
    name: "The Greenhouse Star Pavilion",
    subtitle: "Enclosed glass botanical terrace under ambient starlight",
    description: "A climatized glass sanctuary enveloped in rare olive trees and living moss walls. Features glowing copper fire pits and views of the moonlit night sky.",
    ambianceTag: "Botanical Night & Starlight",
    capacityText: "2–6 Guests",
    minGuests: 2,
    maxGuests: 6,
    depositPerGuest: 600,
    image: "/src/assets/images/greenhouse_pavilion_alt_1792741136876.jpg",
    features: ["Botanical Garden Vibe", "Copper Fire Pit Warmth", "Glass Roof Star Views", "Zero-Noise Sanctuary"]
  },
  {
    id: 'vault',
    name: "The Private Obsidian Vault",
    subtitle: "Exclusive VIP private dining room with wine wall",
    description: "A subterranean private sanctuary enclosed by our 2,400-bottle temperature-controlled wine cellar. Includes private sommelier, bespoke menu cards, and dedicated service brigade.",
    ambianceTag: "Private Grandeur & Vintage Cellar",
    capacityText: "6–16 Guests",
    minGuests: 6,
    maxGuests: 16,
    depositPerGuest: 1000,
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop",
    features: ["Complete Seclusion", "Custom Monogrammed Menus", "Private Sommelier & Waitstaff", "Rare Vintage Access"]
  }
];

export const DINING_EXPERIENCES: DiningExperience[] = [
  {
    id: 'nocturne_7_course',
    name: "The Nocturne Signature Journey",
    tagline: "Our master 7-course multi-sensory culinary exploration",
    coursesCount: 7,
    pricePerGuest: 2450,
    description: "A progressive gastronomic tribute to fire, earth, and ocean. Each course is crafted with ultra-rare seasonal ingredients from our partnered biodynamic farms and coastal divers.",
    highlights: [
      "Amuse: Caviar & Smoked Bone Marrow Tartlet",
      "Hokkaido Sea Urchin & Yuzu Kosho Chawanmushi",
      "Dry-Aged A5 Miyazaki Wagyu over Binchotan Coal",
      "Perigord Black Truffle & 36-Month Parmesan Emulsion",
      "Gold Leaf Smoked Dark Chocolate Sphere"
    ],
    sommelierPairingPrice: 1350,
    grandCruPairingPrice: 2200,
    durationMinutes: 150
  },
  {
    id: 'heritage_5_course',
    name: "The Terroir Heritage Tasting",
    tagline: "A concise 5-course exploration of modern classic gastronomy",
    coursesCount: 5,
    pricePerGuest: 1850,
    description: "A harmonious balance of land and sea showcasing time-honored slow reduction techniques, cured botanical aromatics, and pristine seafood.",
    highlights: [
      "Hiramasa Kingfish Carpaccio with Smoked Dashi Gelée",
      "Pan-Seared Brittany Diver Scallops with Sunchoke Cream",
      "Wood-Fired Dry-Aged Duck Breast with Spiced Fig Glaze",
      "Meyer Lemon & Verbena Pre-Dessert Palette Cleanser",
      "Smoked Vanilla Bean & Burnt Honey Soufflé"
    ],
    sommelierPairingPrice: 950,
    grandCruPairingPrice: 1650,
    durationMinutes: 110
  },
  {
    id: 'a_la_carte',
    name: "A La Carte & Hearth Selection",
    tagline: "Curate your own dining path from our daily seasonal repertoire",
    coursesCount: 3,
    pricePerGuest: 1200,
    description: "Choose freely across our seasonal small plates, wood-fired mains, dry-aged steaks, and artisanal pastry collections. Minimum spend Rs. 1000 per guest.",
    highlights: [
      "Full freedom across entire menu catalog",
      "Tableside carving and sauce finishes",
      "Access to cellar by-the-glass reserve program",
      "Vegetarian & Pescatarian tailored selections"
    ],
    sommelierPairingPrice: 850,
    grandCruPairingPrice: 1400,
    durationMinutes: 90
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS & AMUSE
  {
    id: 'dish-1',
    name: "Imperial Oscietra Caviar & Smoked Brioche",
    nativeTitle: "Caviar Impérial et Moelle Fumée",
    course: 'starter',
    category: 'Food Arts',
    price: 680,
    description: "Royal Oscietra Caviar nestled atop charcoal-toasted brioche, whipped bone marrow emulsion, chive oil, and crème fraîche pearls.",
    culinaryNotes: "Harvested from mature sturgeon raised in pristine glacier water. The salinity perfectly cuts the velvety richness of wood-smoked marrow.",
    ingredients: [
      { name: "Royal Oscietra Caviar (30g)", origin: "Caspian Sea Reserve" },
      { name: "Charcoal Brioche", origin: "House Bakery" },
      { name: "Wagyu Bone Marrow", origin: "Kagoshima, Japan" },
      { name: "Crème Fraîche", origin: "Normandy, France" }
    ],
    dietary: ['P', 'NF'],
    winePairing: {
      name: "Dom Pérignon Vintage Brut",
      vintage: "2013",
      region: "Épernay, Champagne, France",
      notes: "Crisp minerality, toasted hazelnut, and refined brioche notes that elevate the caviar salinity.",
      glassPrice: 480,
      bottlePrice: 3800,
      grapeVarietal: "Chardonnay & Pinot Noir"
    },
    prepMethod: "Charcoal toast with nitrogen-flash cream pearls",
    flavorRadar: { umami: 10, richness: 9, smokiness: 6, crispness: 8, aroma: 9 },
    image: "/src/assets/images/caviar_brioche_1794293424373.jpg",
    isChefSignature: true,
    servingTemperature: "Chilled on black stone ice bed"
  },
  {
    id: 'dish-2',
    name: "Hiramasa Kingfish & Smoked Dashi Gelée",
    nativeTitle: "Tartare de Hiramasa et Gelée de Dashi",
    course: 'starter',
    category: 'Sea Foods',
    price: 420,
    description: "Sashimi-grade Kingfish cured in salted sakura blossom, white soy, finger lime caviar, crisp pickled radish, and clear amber dashi broth.",
    culinaryNotes: "Cold-smoked for 8 minutes over wild cherry wood chips to preserve the delicate translucent texture of raw kingfish.",
    ingredients: [
      { name: "Wild Hiramasa Kingfish", origin: "Spencer Gulf, South Australia" },
      { name: "Finger Lime Pearls", origin: "Byron Bay, Australia" },
      { name: "Katsuobushi Dashi Gelée", origin: "House 24-hr brew" },
      { name: "Shiso Blossom", origin: "Rooftop Hydroponic Garden" }
    ],
    dietary: ['GF', 'DF', 'P', 'NF'],
    winePairing: {
      name: "Domaine Leflaive Puligny-Montrachet",
      vintage: "2020",
      region: "Burgundy, France",
      notes: "Flinty wet stone, white peach, and crystalline acidity that cuts through kingfish oil.",
      glassPrice: 380,
      bottlePrice: 2900,
      grapeVarietal: "100% Chardonnay"
    },
    prepMethod: "Sakura salt cure & cold smoke infusion",
    flavorRadar: { umami: 8, richness: 5, smokiness: 5, crispness: 9, aroma: 8 },
    image: "/src/assets/images/kingfish_crudo_1794293482307.jpg",
    isChefSignature: false,
    servingTemperature: "8°C"
  },
  {
    id: 'dish-3',
    name: "Hand-Dived Brittany Scallops in Truffle Cream",
    nativeTitle: "Coquilles Saint-Jacques Rôties aux Truffes",
    course: 'starter',
    category: 'Sea Foods',
    price: 520,
    description: "Caramelized Saint-Jacques scallops seared in cultured brown butter, sunchoke velouté, shavings of winter Périgord truffle, and crispy caper crisps.",
    culinaryNotes: "Sourced exclusively by free-divers off the Brittany coast. The sear lasts precisely 45 seconds on high cast iron to leave the center sweet and translucent.",
    ingredients: [
      { name: "XXL Live Diver Scallops", origin: "Saint-Brieuc, Brittany" },
      { name: "Black Winter Truffle", origin: "Périgord, France" },
      { name: "Cultured Butter", origin: "Isigny Sainte-Mère" },
      { name: "Jerusalem Artichoke", origin: "Heritage Farm, Sonoma" }
    ],
    dietary: ['GF', 'P', 'NF'],
    winePairing: {
      name: "Meursault Premier Cru 'Les Charmes'",
      vintage: "2019",
      region: "Côte de Beaune, France",
      notes: "Toasted hazelnut, buttery richness, and warm amber honeycomb profile.",
      glassPrice: 420,
      bottlePrice: 3200,
      grapeVarietal: "Chardonnay"
    },
    prepMethod: "Brown butter high-sear with tableside truffle shaving",
    flavorRadar: { umami: 9, richness: 9, smokiness: 4, crispness: 7, aroma: 10 },
    image: "/src/assets/images/brittany_scallops_1794293482539.jpg",
    isChefSignature: true,
    servingTemperature: "Warm"
  },

  // HEARTH & MAINS
  {
    id: 'dish-4',
    name: "A5 Miyazaki Wagyu Ribeye & Smoked Bone Glaze",
    nativeTitle: "Bœuf Wagyu A5 au Feu de Binchotan",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 1350,
    description: "Center-cut A5 Japanese black cattle ribeye grilled over white oak Binchotan, glazed with 72-hour charred marrow demi-glace, wasabi stem relish, and black garlic cream.",
    culinaryNotes: "Miyazaki BMS 11 certification. Rendered fat melts at body temperature (25°C), creating an unforgettable buttery explosion accompanied by deep charcoal crust.",
    ingredients: [
      { name: "A5 Ribeye BMS 11", origin: "Miyazaki Prefecture, Japan" },
      { name: "Fresh Grated Wasabi", origin: "Shizuoka, Japan" },
      { name: "Black Garlic Essence", origin: "House 60-day fermentation" },
      { name: "Fleur de Sel de Guérande", origin: "Brittany, France" }
    ],
    dietary: ['GF', 'DF', 'NF'],
    winePairing: {
      name: "Château Margaux Premier Grand Cru Classé",
      vintage: "2015",
      region: "Bordeaux, France",
      notes: "Deep cassis, velvety cedar, crushed violets, and structured tannins that complement the rich wagyu marbling.",
      glassPrice: 750,
      bottlePrice: 7200,
      grapeVarietal: "Cabernet Sauvignon & Merlot blend"
    },
    prepMethod: "Binchotan charcoal 900°F sear & 10-minute wood rest",
    flavorRadar: { umami: 10, richness: 10, smokiness: 9, crispness: 8, aroma: 10 },
    image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1000&auto=format&fit=crop",
    isChefSignature: true,
    servingTemperature: "Hot on warm slate slab"
  },
  {
    id: 'dish-5',
    name: "Glazed Scottish Wild Salmon & Crispy Skin",
    nativeTitle: "Saumon Sauvage Laqué au Miso et Braise",
    course: 'main',
    category: 'Sea Foods',
    price: 780,
    description: "Pan-crisped wild salmon fillet basted with smoked acacia honey & Kyoto white miso glaze, served with sautéed morel mushrooms and charred Romanesco.",
    culinaryNotes: "Slow-roasted at gentle heat over applewood embers before finishing under intense broiler flame to achieve paper-crisp skin and melt-in-mouth pink center.",
    ingredients: [
      { name: "Scottish Wild Loch Salmon", origin: "Highlands, Scotland" },
      { name: "Wild Morel Mushrooms", origin: "Pacific Northwest" },
      { name: "Saikyo White Miso", origin: "Kyoto, Japan" },
      { name: "Acacia Honey", origin: "Piedmont, Italy" }
    ],
    dietary: ['GF', 'DF', 'P', 'NF'],
    winePairing: {
      name: "Louis Latour Corton-Charlemagne Grand Cru",
      vintage: "2020",
      region: "Burgundy, France",
      notes: "Smoky oak undertones, toasted almond, and ripe citrus fruit finish.",
      glassPrice: 450,
      bottlePrice: 3400,
      grapeVarietal: "Chardonnay"
    },
    prepMethod: "Applewood ember roast & tableside warm dashi pour",
    flavorRadar: { umami: 9, richness: 8, smokiness: 7, crispness: 9, aroma: 8 },
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop",
    isChefSignature: false,
    servingTemperature: "Hot"
  },
  {
    id: 'dish-6',
    name: "Handmade Tagliolini with Périgord Black Truffle",
    nativeTitle: "Tagliolini Fatti a Mano al Tartufo Nero",
    course: 'main',
    category: 'Greens & Salads',
    price: 650,
    description: "Egg yolk ribbon pasta extruded fresh daily, tossed in 36-month aged Vacche Rosse Parmigiano butter sauce, topped with 8 grams of freshly shaved winter truffle.",
    culinaryNotes: "Prepared using 40 organic egg yolks per kilo of Italian double-zero flour. Emulsified tableside inside a carved wheel of warm aged Parmesan.",
    ingredients: [
      { name: "Heritage Egg Yolk Tagliolini", origin: "House Extruded" },
      { name: "Vacche Rosse Parmigiano 36mo", origin: "Reggio Emilia, Italy" },
      { name: "Black Winter Truffle", origin: "Périgord, France" },
      { name: "AOC Mountain Churned Butter", origin: "Beurre Bordier, France" }
    ],
    dietary: ['V', 'NF'],
    winePairing: {
      name: "Gaja Barbaresco DOCG",
      vintage: "2018",
      region: "Piedmont, Italy",
      notes: "Truffle earthy aromatics, dried rose petals, and subtle leather tannins.",
      glassPrice: 550,
      bottlePrice: 4800,
      grapeVarietal: "100% Nebbiolo"
    },
    prepMethod: "Tableside cheese wheel emulsion & live truffle shaving",
    flavorRadar: { umami: 10, richness: 9, smokiness: 3, crispness: 4, aroma: 10 },
    image: "/src/assets/images/tagliolini_black_truffle_1792569137234.jpg",
    isChefSignature: true,
    servingTemperature: "Hot"
  },
  {
    id: 'dish-7',
    name: "Smoked Rohan Duck Breast & Spiced Fig Reduction",
    nativeTitle: "Magret de Canard Fumé aux Figues",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 840,
    description: "Dry-aged Rohan duck breast roasted on rosemary branches, lavender wildflower glaze, charred Mission figs, parsnip mousseline, and duck jus.",
    culinaryNotes: "Aged 14 days in our Himalayan salt dry-aging room to concentrate game notes and crisp the skin into golden crackling.",
    ingredients: [
      { name: "14-Day Dry-Aged Rohan Duck", origin: "Hudson Valley, New York" },
      { name: "Black Mission Figs", origin: "Sonoma Valley, California" },
      { name: "Lavender Wildflower Honey", origin: "Provence, France" },
      { name: "Organic Parsnip", origin: "Green String Farm" }
    ],
    dietary: ['GF', 'DF', 'NF'],
    winePairing: {
      name: "Domaine Dujac Morey-Saint-Denis",
      vintage: "2019",
      region: "Côte de Nuits, Burgundy",
      notes: "Dark bramble fruit, forest floor, and silky, persistent finish.",
      glassPrice: 480,
      bottlePrice: 3900,
      grapeVarietal: "Pinot Noir"
    },
    prepMethod: "Rosemary branch smoke & rendered skin sear",
    flavorRadar: { umami: 9, richness: 8, smokiness: 8, crispness: 7, aroma: 9 },
    image: "/src/assets/images/duck_breast_fig_1792568911075.jpg",
    isChefSignature: false,
    servingTemperature: "Hot"
  },
  {
    id: 'dish-8',
    name: "Charred Heirloom Salsify & Wild Foraged Chanterelles",
    nativeTitle: "Salsifis Rôtis et Girolles des Bois",
    course: 'main',
    category: 'Greens & Salads',
    price: 540,
    description: "Binchotan-caramelized white salsify, pan-roasted wild golden chanterelles, hazelnut milk foam, roasted pine oil, and crispy sage crisps.",
    culinaryNotes: "A plant-forward masterpiece celebrating autumn woodland foraging. Salsify is simmered in kombu broth before receiving high-fire charcoal blistering.",
    ingredients: [
      { name: "Heirloom White Salsify", origin: "Capay Valley Organic" },
      { name: "Wild Foraged Golden Chanterelles", origin: "Oregon Coast" },
      { name: "Piedmont Hazelnut Milk", origin: "Langhe, Italy" },
      { name: "Cold-Pressed Pine Needle Oil", origin: "House Extraction" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG'],
    winePairing: {
      name: "Domaine Huet Vouvray 'Le Haut-Lieu' Sec",
      vintage: "2021",
      region: "Loire Valley, France",
      notes: "Quince, honeyed citrus, wet chalk minerality, and vibrant acidity.",
      glassPrice: 320,
      bottlePrice: 1950,
      grapeVarietal: "Chenin Blanc"
    },
    prepMethod: "Kombu poach & charcoal crusting with warm foam",
    flavorRadar: { umami: 8, richness: 6, smokiness: 7, crispness: 8, aroma: 9 },
    image: "/src/assets/images/salsify_chanterelles_1794293498530.jpg",
    isChefSignature: false,
    servingTemperature: "Warm"
  },

  // ARTISANAL DESSERTS
  {
    id: 'dish-9',
    name: "24K Gold Smoked Dark Chocolate Sphere",
    nativeTitle: "Sphère de Chocolat Noir Fumé et Feuille d'Or",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 380,
    description: "70% Valrhona Guanaja dark chocolate dome leafed in 24-karat edible gold. Melted tableside with hot salted caramel Bourbon ganache over smoked vanilla bean gelato.",
    culinaryNotes: "Tableside presentation with billowing smoked oak aromatics trapped beneath a hand-blown glass cloche.",
    ingredients: [
      { name: "Valrhona Guanaja 70%", origin: "Tain-l'Hermitage, France" },
      { name: "24-Karat Edible Gold Leaf", origin: "Kanazawa, Japan" },
      { name: "Bourbon Barrel Vanilla Gelato", origin: "Tahitian Vanilla Reserve" },
      { name: "Smoked Maldon Sea Salt", origin: "Essex, UK" }
    ],
    dietary: ['V', 'NF'],
    winePairing: {
      name: "Taylor Fladgate 30-Year Old Tawny Port",
      vintage: "NV",
      region: "Douro Valley, Portugal",
      notes: "Dried fig, butterscotch, toasted walnut, and velvety dark caramel.",
      glassPrice: 360,
      bottlePrice: 2800,
      grapeVarietal: "Touriga Nacional blend"
    },
    prepMethod: "Tableside cloche unsealing & hot ganache pour",
    flavorRadar: { umami: 6, richness: 10, smokiness: 8, crispness: 6, aroma: 10 },
    image: "/src/assets/images/gold_chocolate_sphere_1794293498940.jpg",
    isChefSignature: true,
    servingTemperature: "Cold gelato with hot ganache cascade"
  },
  {
    id: 'dish-10',
    name: "Smoked Honey & Verbena Soufflé",
    nativeTitle: "Soufflé au Miel de Forêt et Verveine",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 320,
    description: "Airy, cloud-like soufflé infused with wild forest honey and lemon verbena, pierced tableside with white truffle anglaise cream.",
    culinaryNotes: "Baked to order in copper cocottes. Rises 2.5 inches above rim with a delicate caramelized crust.",
    ingredients: [
      { name: "Wild Forest Raw Honey", origin: "Vosges Mountains, France" },
      { name: "Fresh Lemon Verbena", origin: "Nocturne Rooftop Terrace" },
      { name: "White Alba Truffle Infused Cream", origin: "Piedmont, Italy" }
    ],
    dietary: ['V', 'NF'],
    winePairing: {
      name: "Château d'Yquem Premier Cru Supérieur",
      vintage: "2016",
      region: "Sauternes, Bordeaux",
      notes: "Saffron, candied apricot, white flowers, and endless golden finish.",
      glassPrice: 700,
      bottlePrice: 6500,
      grapeVarietal: "Sémillon & Sauvignon Blanc"
    },
    prepMethod: "Baked-to-order (18 mins) in copper cocotte",
    flavorRadar: { umami: 4, richness: 8, smokiness: 4, crispness: 5, aroma: 10 },
    image: "/src/assets/images/honey_verbena_souffle_1794293499554.jpg",
    isChefSignature: false,
    servingTemperature: "Piping Hot"
  },

  // COCKTAILS & RESERVE CELLAR
  {
    id: 'cocktail-1',
    name: "The Nocturne Old Fashioned No. IV",
    nativeTitle: "Élixir d'Ambre au Bois Fumé",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 340,
    description: "Japanese Hakushu 12-yr Single Malt whiskey, roasted tonka bean syrup, smoked charred cedar bitters, stamped with pure crystal ice cube and 24K gold foil.",
    culinaryNotes: "Infused inside a glass smoke chamber with charred Japanese cedar for 3 minutes before serving.",
    ingredients: [
      { name: "Hakushu 12-yr Single Malt", origin: "Mount Kaikoma, Japan" },
      { name: "Amazonian Tonka Bean", origin: "Wild Harvest, Brazil" },
      { name: "Cedar Smoked Bitters", origin: "House Alchemist Blend" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Served Neat / On Hand-Carved Crystal Ice",
      vintage: "Single Malt",
      region: "Japan",
      notes: "Peaty smoke, crisp green apple, and smooth malt warmth.",
      glassPrice: 340,
      bottlePrice: 3200,
      grapeVarietal: "Malted Barley"
    },
    prepMethod: "Glass smoke chamber presentation",
    flavorRadar: { umami: 6, richness: 8, smokiness: 10, crispness: 6, aroma: 10 },
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
    isChefSignature: true,
    servingTemperature: "Ice-cold with aromatic smoke"
  },
  {
    id: 'cocktail-2',
    name: "Yuzu & White Truffle French 75",
    nativeTitle: "Champagne Royale au Yuzu et Truffe Blanche",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 300,
    description: "Kavalan Gin infused with white truffle botanicals, fresh Kochi yuzu juice, organic cane essence, crowned with vintage Brut Champagne.",
    culinaryNotes: "Subtle earthy aromatics balanced by the piercing citrus brightness of fresh Japanese yuzu.",
    ingredients: [
      { name: "Artisanal Botanical Gin", origin: "Taiwan" },
      { name: "Fresh Kochi Yuzu Juice", origin: "Shikoku, Japan" },
      { name: "Vintage Champagne Float", origin: "Reims, France" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Ruinart Blanc de Blancs",
      vintage: "NV",
      region: "Champagne, France",
      notes: "White citrus, jasmine blossom, and tight energetic bubbles.",
      glassPrice: 300,
      bottlePrice: 2400,
      grapeVarietal: "100% Chardonnay"
    },
    prepMethod: "Shaken over diamond ice & topped tableside",
    flavorRadar: { umami: 7, richness: 5, smokiness: 2, crispness: 10, aroma: 9 },
    image: "/src/assets/images/french75_cocktail_1794293500821.jpg",
    isChefSignature: false,
    servingTemperature: "Chilled in gold-rimmed crystal flute"
  },
  {
    id: 'dish-11',
    name: "Torched Foie Gras Torchon & Smoked Quince",
    nativeTitle: "Torchon de Foie Gras Poêlé au Coing Fumé",
    course: 'starter',
    category: 'Food Arts',
    price: 620,
    description: "Hudson Valley duck foie gras poached in vintage Sauternes, caramelized tableside with smoking binchotan ember, spiced quince gelée, and toasted sourdough pain d'épices.",
    culinaryNotes: "Cold-cured with armagnac, white pepper, and wild thyme before being wrapped in organic linen and poached at 56°C for supreme silkiness.",
    ingredients: [
      { name: "Grade A Duck Foie Gras", origin: "Hudson Valley, New York" },
      { name: "Spiced Quince Conserve", origin: "Provence, France" },
      { name: "Artisanal Pain d'Épices", origin: "House Bakery" },
      { name: "Vintage Armagnac 1995", origin: "Gascony, France" }
    ],
    dietary: ['NF'],
    winePairing: {
      name: "Château Suduiraut Premier Cru Classé",
      vintage: "2015",
      region: "Sauternes, Bordeaux",
      notes: "Candied ginger, caramelized pineapple, and honeyed saffron with bright balancing acid.",
      glassPrice: 460,
      bottlePrice: 3600,
      grapeVarietal: "90% Sémillon, 10% Sauvignon Blanc"
    },
    prepMethod: "Low-temp water bath & tableside ember crusting",
    flavorRadar: { umami: 9, richness: 10, smokiness: 6, crispness: 7, aroma: 10 },
    image: "/src/assets/images/foie_gras_torchon_1792741637817.jpg",
    isChefSignature: true,
    servingTemperature: "Chilled torchon with warm brioche"
  },
  {
    id: 'dish-12',
    name: "Hokkaido Uni & White Truffle Chawanmushi",
    nativeTitle: "Chawanmushi d'Oursin et Truffe Blanche",
    course: 'amuse',
    category: 'Food Arts',
    price: 580,
    description: "Velvety steamed egg custard infused with Rishiri kombu dashi, crowned with pristine sweet Hokkaido sea urchin, shavings of Alba white truffle, and yuzu foam.",
    culinaryNotes: "Steamed gently at 82°C inside lidded ceramic vessels to yield a porcelain texture that dissolves effortlessly on the tongue.",
    ingredients: [
      { name: "Fresh Bafun Sea Urchin", origin: "Hokkaido, Japan" },
      { name: "White Alba Truffle", origin: "Piedmont, Italy" },
      { name: "Organic Jidori Egg Yolk", origin: "Kagoshima, Japan" },
      { name: "Aged Rishiri Kombu", origin: "Hokkaido, Japan" }
    ],
    dietary: ['GF', 'P', 'NF'],
    winePairing: {
      name: "Domaine de Chevalier Blanc Grand Cru Classé",
      vintage: "2018",
      region: "Pessac-Léognan, Bordeaux",
      notes: "Smoky gunflint, ripe grapefruit pith, and mineral tension.",
      glassPrice: 440,
      bottlePrice: 3500,
      grapeVarietal: "Sauvignon Blanc & Sémillon"
    },
    prepMethod: "Gentle ceramic steam bath with tableside unmasking",
    flavorRadar: { umami: 10, richness: 8, smokiness: 3, crispness: 4, aroma: 10 },
    image: "/src/assets/images/uni_chawanmushi_1792741639050.jpg",
    isChefSignature: true,
    servingTemperature: "Warm in stone vessel"
  },
  {
    id: 'dish-13',
    name: "Glacier 51 Toothfish in Brown Butter Kombu",
    nativeTitle: "Légine Australe Rôtie au Beurre Kombu",
    course: 'main',
    category: 'Sea Foods',
    price: 820,
    description: "Sub-Antarctic Patagonian Toothfish caramelized in burnt kombu butter, served over sweet braised baby leeks, sea grape pearls, and smoked clam reduction.",
    culinaryNotes: "Wild-caught at depths of 2,000 meters in the freezing sub-Antarctic waters. Pristine white flakes laced with natural Omega-3 richness.",
    ingredients: [
      { name: "Certified Glacier 51 Toothfish", origin: "Heard Island, Sub-Antarctic" },
      { name: "Kombu Cultured Butter", origin: "Brittany, France" },
      { name: "Okinawan Sea Grapes (Umibudo)", origin: "Okinawa, Japan" },
      { name: "Geoduck Clam Essence", origin: "Puget Sound, Washington" }
    ],
    dietary: ['GF', 'P', 'NF'],
    winePairing: {
      name: "Chassagne-Montrachet Premier Cru 'Morgeot'",
      vintage: "2019",
      region: "Côte de Beaune, France",
      notes: "Toasted brioche, white flowers, and deep saline persistence.",
      glassPrice: 490,
      bottlePrice: 3900,
      grapeVarietal: "Chardonnay"
    },
    prepMethod: "Cast-iron sear with continuous cultured butter basting",
    flavorRadar: { umami: 9, richness: 9, smokiness: 5, crispness: 8, aroma: 9 },
    image: "/src/assets/images/toothfish_kombu_1792741639380.jpg",
    isChefSignature: false,
    servingTemperature: "Hot"
  },
  {
    id: 'dish-14',
    name: "Spanish Carabineros Prawns over Binchotan Coals",
    nativeTitle: "Carabineros Grillés aux Herbes Marines",
    course: 'starter',
    category: 'Sea Foods',
    price: 760,
    description: "Giant scarlet deep-sea Mediterranean prawns flash-grilled over white oak embers, brushed with smoked coral butter, sea fennel, and Maldon smoked salt.",
    culinaryNotes: "Renowned for their intense crimson shells and luscious head nectar, grilled intact for precisely 90 seconds to lock in sea sweet succulence.",
    ingredients: [
      { name: "Wild Scarlet Carabineros Prawns", origin: "Huelva, Spain" },
      { name: "Foraged Coastal Sea Fennel", origin: "Cornwall, UK" },
      { name: "Smoked Coral Butter", origin: "House Reduction" },
      { name: "Guérande Grey Salt", origin: "Guérande, France" }
    ],
    dietary: ['GF', 'P', 'NF'],
    winePairing: {
      name: "Viña Tondonia Blanco Reserva",
      vintage: "2012",
      region: "Rioja Alta, Spain",
      notes: "Dried chamomile, beeswax, toasted almonds, and vibrant maritime salinity.",
      glassPrice: 390,
      bottlePrice: 3100,
      grapeVarietal: "Viura & Malvasía"
    },
    prepMethod: "Open-coal skewer sear with head-butter emulsion",
    flavorRadar: { umami: 10, richness: 9, smokiness: 8, crispness: 7, aroma: 10 },
    image: "/src/assets/images/carabineros_prawns_1792741639799.jpg",
    isChefSignature: true,
    servingTemperature: "Piping hot on lava stone"
  },
  {
    id: 'dish-15',
    name: "Dry-Aged Iberian Pluma with Smoked Piquillo Emulsion",
    nativeTitle: "Pluma Ibérique Bellota Rôtie au Feu de Bois",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 790,
    description: "Pure acorn-fed 100% Ibérico de Bellota pluma cut, char-grilled with smoked almond wood, served with fire-blistered piquillo emulsion and charred shallot jus.",
    culinaryNotes: "Cut from the shoulder end of the loin with extensive intramembranous marbling. Served medium-rare with a dark, crackling caramelized crust.",
    ingredients: [
      { name: "100% Bellota Ibérico Pluma", origin: "Jabugo, Spain" },
      { name: "Navarra Piquillo Peppers", origin: "Lodosa, Spain" },
      { name: "Aged Sherry Vinegar 50yr", origin: "Jerez, Spain" },
      { name: "Wild Mountain Oregano", origin: "Andalusia, Spain" }
    ],
    dietary: ['GF', 'DF', 'NF'],
    winePairing: {
      name: "Vega Sicilia Valbuena 5°",
      vintage: "2017",
      region: "Ribera del Duero, Spain",
      notes: "Blackberry liqueur, cedarwood, subtle cigar box, and supple tannins.",
      glassPrice: 580,
      bottlePrice: 4700,
      grapeVarietal: "Tempranillo & Merlot"
    },
    prepMethod: "Almond-wood high fire grill with ember rest",
    flavorRadar: { umami: 9, richness: 9, smokiness: 9, crispness: 8, aroma: 9 },
    image: "/src/assets/images/iberian_pluma_1792741640682.jpg",
    isChefSignature: false,
    servingTemperature: "Hot on cast iron"
  },
  {
    id: 'dish-16',
    name: "Charcoal-Roasted Milk-Fed Lamb Saddle with Black Rosemary",
    nativeTitle: "Selle d'Agneau de Lait Rôtie au Romarin Fumé",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 890,
    description: "Pyrenean milk-fed lamb saddle rolled with savory farfalle herbs, slow-roasted over burning rosemary branches, accompanied by glazed morels and pomme mousseline.",
    culinaryNotes: "Exclusively fed on mountain ewe milk, producing extraordinarily delicate, melt-in-the-mouth rosy meat without gamey astringency.",
    ingredients: [
      { name: "Pyrenean Milk-Fed Lamb Saddle", origin: "Pyrénées, France" },
      { name: "Charred Black Rosemary", origin: "Nocturne Botanical Terrace" },
      { name: "Fresh Spring Morel Mushrooms", origin: "Auvergne, France" },
      { name: "Ratte Potato Puree", origin: "Touraine, France" }
    ],
    dietary: ['GF', 'NF'],
    winePairing: {
      name: "Château Pichon Longueville Comtesse de Lalande",
      vintage: "2016",
      region: "Pauillac, Bordeaux",
      notes: "Dark plum, roasted espresso, graphite minerality, and aristocratic velvet finish.",
      glassPrice: 620,
      bottlePrice: 5100,
      grapeVarietal: "Cabernet Sauvignon, Merlot & Cabernet Franc"
    },
    prepMethod: "Rotisserie ember roast basted with rendered lard & wild herbs",
    flavorRadar: { umami: 9, richness: 9, smokiness: 8, crispness: 7, aroma: 10 },
    image: "/src/assets/images/lamb_saddle_1792741641533.jpg",
    isChefSignature: true,
    servingTemperature: "Hot"
  },
  {
    id: 'dish-17',
    name: "Charred Broccolini & Smoked Pine Nut Cream",
    nativeTitle: "Broccolini Braisé et Crème de Pignons Fumée",
    course: 'starter',
    category: 'Greens & Salads',
    price: 460,
    description: "Fire-blistered baby broccolini tossed with Meyer lemon vinaigrette, whipped smoked pine nut purée, crispy shallot strands, and shaved preserved summer truffle.",
    culinaryNotes: "Quickly charred on red-hot coals to maintain crisp crunch, dressed with citrus acidity that cuts through the velvety nut cream.",
    ingredients: [
      { name: "Heirloom Baby Broccolini", origin: "Green String Farm, Petaluma" },
      { name: "Stone-Ground Italian Pine Nuts", origin: "Tuscany, Italy" },
      { name: "Cured Meyer Lemon Vinaigrette", origin: "House Aged" },
      { name: "Summer Black Truffle", origin: "Umbria, Italy" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG'],
    winePairing: {
      name: "Domaine Vacheron Sancerre Blanc",
      vintage: "2022",
      region: "Loire Valley, France",
      notes: "Flinty chalk, gooseberry, cut grass, and crisp lively acidity.",
      glassPrice: 280,
      bottlePrice: 2100,
      grapeVarietal: "100% Sauvignon Blanc"
    },
    prepMethod: "White-hot charcoal blister & cold emulsion plating",
    flavorRadar: { umami: 7, richness: 6, smokiness: 7, crispness: 10, aroma: 8 },
    image: "/src/assets/images/charred_broccolini_1792741642945.jpg",
    isChefSignature: false,
    servingTemperature: "Warm greens on chilled cream"
  },
  {
    id: 'dish-18',
    name: "Roasted Delicata Squash & Whipped Black Truffle Ricotta",
    nativeTitle: "Courge Delicata Rôtie et Ricotta à la Truffe",
    course: 'main',
    category: 'Greens & Salads',
    price: 480,
    description: "Thick rings of caramelized Delicata squash basted in brown butter and sage, placed over hand-dipped sheep's milk ricotta, pumpkin seed brittle, and aged saba glaze.",
    culinaryNotes: "The edible scalloped skin develops a delicate caramel crunch while the interior turns creamy like sweet roasted chestnut.",
    ingredients: [
      { name: "Organic Delicata Squash", origin: "Capay Valley Farms" },
      { name: "Hand-Dipped Sheep's Milk Ricotta", origin: "Pienza, Tuscany" },
      { name: "Winter Black Truffle Paste", origin: "Norcia, Italy" },
      { name: "Aceto Balsamico Tradizionale 25yr", origin: "Modena, Italy" }
    ],
    dietary: ['GF', 'V', 'NF'],
    winePairing: {
      name: "Planeta Chardonnay Sicilia DOC",
      vintage: "2020",
      region: "Sicily, Italy",
      notes: "Ripe yellow peach, toasted brioche, vanilla spice, and Mediterranean freshness.",
      glassPrice: 310,
      bottlePrice: 2300,
      grapeVarietal: "100% Chardonnay"
    },
    prepMethod: "Slow wood-oven roast with tableside saba drizzle",
    flavorRadar: { umami: 8, richness: 8, smokiness: 5, crispness: 7, aroma: 9 },
    image: "/src/assets/images/delicata_squash_1792741641189.jpg",
    isChefSignature: false,
    servingTemperature: "Warm"
  },
  {
    id: 'dish-19',
    name: "Kyoto Ceremonial Matcha & Black Sesame Tart",
    nativeTitle: "Tartelette au Matcha Cérémonial et Sésame Noir",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 340,
    description: "Crispy charcoal sable shell layered with roasted black sesame praline, molten ceremonial grade Uji matcha ganache, and yuzu candied citrus gel.",
    culinaryNotes: "Stone-ground first-flush ceremonial matcha from Uji produces an intense emerald hue and profound vegetal sweetness with zero bitterness.",
    ingredients: [
      { name: "Ceremonial Uji Matcha", origin: "Kyoto, Japan" },
      { name: "Slow-Roasted Black Sesame", origin: "Hyogo, Japan" },
      { name: "Valrhona Opalys 33% White Chocolate", origin: "France" },
      { name: "Bamboo Charcoal Tart Shell", origin: "House Pastry Lab" }
    ],
    dietary: ['V', 'NF'],
    winePairing: {
      name: "Château Guiraud 1er Grand Cru Classé",
      vintage: "2017",
      region: "Sauternes, Bordeaux",
      notes: "Orange blossom, beeswax, acacia honey, and vibrant candied lime zest.",
      glassPrice: 380,
      bottlePrice: 2800,
      grapeVarietal: "Sémillon & Sauvignon Blanc"
    },
    prepMethod: "Dual-temperature layer piping with mirror glaze finish",
    flavorRadar: { umami: 6, richness: 8, smokiness: 4, crispness: 9, aroma: 9 },
    image: "/src/assets/images/matcha_sesame_tart_1792741643866.jpg",
    isChefSignature: false,
    servingTemperature: "Chilled"
  },
  {
    id: 'dish-20',
    name: "Smoked Madagascar Vanilla Bean Mille-Feuille",
    nativeTitle: "Mille-Feuille Croustillant à la Vanille Fumée",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 360,
    description: "Caramelized inverted puff pastry leaves layered with cold-smoked Madagascar bourbon vanilla mousseline, salted fleur de sel caramel, and crispy hazelnut feuilletine.",
    culinaryNotes: "Puff pastry inverted 6 times with AOC Charentes-Poitou butter, baked under heavy iron plates for razor-sharp micro-flakiness.",
    ingredients: [
      { name: "Grand Cru Bourbon Vanilla Beans", origin: "Sava Region, Madagascar" },
      { name: "AOC Charentes-Poitou Butter", origin: "Poitou, France" },
      { name: "Smoked Sea Salt Caramel", origin: "House Confectionery" },
      { name: "Piedmont Hazelnut Praline", origin: "Langhe, Italy" }
    ],
    dietary: ['V'],
    winePairing: {
      name: "Disznókő Tokaji Aszú 5 Puttonyos",
      vintage: "2015",
      region: "Tokaj, Hungary",
      notes: "Apricot jam, dried orange peel, smoky honey, and piercing noble acidity.",
      glassPrice: 420,
      bottlePrice: 3100,
      grapeVarietal: "Furmint & Hárslevelű"
    },
    prepMethod: "Baked under weights & assembled tableside to guarantee crispness",
    flavorRadar: { umami: 5, richness: 9, smokiness: 6, crispness: 10, aroma: 10 },
    image: "/src/assets/images/vanilla_mille_feuille_1792741643429.jpg",
    isChefSignature: true,
    servingTemperature: "Room temperature pastry with cool cream"
  },
  {
    id: 'cocktail-3',
    name: "Smoked Black Truffle & Shiso Botanical Elixir",
    nativeTitle: "Élixir Botanique Truffé au Shiso",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 290,
    description: "Non-alcoholic cold-distilled juniper and angelica root, steeped with green shiso leaves, black winter truffle hydrosol, clarified lime acid, and smoked sea salt mist.",
    culinaryNotes: "A zero-proof masterwork engineered on our rotary evaporator to capture crisp pine and deep forest floor aromatics without alcohol.",
    ingredients: [
      { name: "Cold-Distilled Forest Botanicals", origin: "House Rotary Evaporator" },
      { name: "Fresh Purple and Green Shiso", origin: "Nocturne Living Wall" },
      { name: "Black Winter Truffle Hydrosol", origin: "Périgord, France" },
      { name: "Clarified Sudachi Citrus", origin: "Tokushima, Japan" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Zero-Proof Reserve Botanical Pour",
      vintage: "Batch No. 8",
      region: "Nocturne Laboratory",
      notes: "Vibrant herbal brightness, savory woodland depth, and refreshing citrus snap.",
      glassPrice: 290,
      bottlePrice: 1900,
      grapeVarietal: "Distilled Botanicals"
    },
    prepMethod: "Rotovap cold vacuum distillation & atomized truffle mist",
    flavorRadar: { umami: 8, richness: 5, smokiness: 7, crispness: 9, aroma: 10 },
    image: "/src/assets/images/shiso_botanical_elixir_1794293500184.jpg",
    isChefSignature: true,
    servingTemperature: "Chilled over hand-cut diamond ice"
  },
  {
    id: 'cocktail-4',
    name: "Nocturne Reserve Cold-Brew Oolong & Smoked Plum",
    nativeTitle: "Thé Oolong Fumé et Infusion de Prune Noire",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 270,
    description: "24-hour cold-extracted Taiwan high-mountain Da Hong Pao oolong tea, infused with smoked Japanese umeboshi plum cordial, roasted barley, and ginger blossom.",
    culinaryNotes: "Slow cold extraction pulls out rich orchid florals, amber honey, and roasted mineral notes without any astringent tannins.",
    ingredients: [
      { name: "Da Hong Pao Reserve Oolong", origin: "Wuyi Mountains, Fujian" },
      { name: "Charred Umeboshi Plum Cordial", origin: "Wakayama, Japan" },
      { name: "Roasted Golden Barley", origin: "Niigata, Japan" },
      { name: "Wild Ginger Blossom Spray", origin: "Nocturne Greenhouse" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Estate Highland Tea Pour",
      vintage: "Spring Harvest",
      region: "Wuyi Cliffs",
      notes: "Roasted hazelnut, dried wild plum, amber incense, and mineral finish.",
      glassPrice: 270,
      bottlePrice: 1700,
      grapeVarietal: "Camellia Sinensis"
    },
    prepMethod: "Slow drip cold-drip tower with aromatic citrus twist",
    flavorRadar: { umami: 7, richness: 6, smokiness: 8, crispness: 8, aroma: 9 },
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1000&auto=format&fit=crop",
    isChefSignature: false,
    servingTemperature: "Chilled in crystal tumbler"
  },
  ...EXPANDED_MENU_ITEMS
];

export const SOMMELIER_CELLAR_SELECTIONS = [
  {
    category: "Botanical Distillates & Smoked Elixirs",
    items: [
      { name: "Aged Pine Needle & Smoked Juniper Distillate", vintage: "Cask Reserve", region: "Kyoto Forest Highlands", price: 3800, notes: "Charred Japanese cedar smoke, alpine juniper berries, dried gentian root, cold-pressed bergamot mist." },
      { name: "Wild Himalayan Cordyceps & Reishi Adaptogen Nectar", vintage: "Slow Maceration", region: "High Himalayas", price: 4500, notes: "Ancient forest adaptogens, roasted dandelion root, single-estate dark cacao nib, velvety resinous finish." },
      { name: "Smoked Lapsang Souchong & Black Cardamom Elixir", vintage: "Clay Pot Infusion", region: "Mount Wuyi", price: 3200, notes: "Pine-smoked black tea reduction, crushed green cardamom pods, Meyer lemon hydrosol, toasted coriander." }
    ]
  },
  {
    category: "Rare Mountain Single-Origin Teas & Cold Drops",
    items: [
      { name: "Vintage 1998 Aged Gukan Pu-erh Grand Reserve", vintage: "28-Yr Aged", region: "Yunnan Ancient Arbor", price: 6800, notes: "Ancient wild arbor trees, subterranean petrichor, dried dark plum compote, velvety leather persistence." },
      { name: "Imperial Uji Gyokuro Shizuku Droplet Extraction", vintage: "18-Hr Drip", region: "Kyoto Heritage Shaded Terroir", price: 4200, notes: "Profound crystalline umami, sweet shaded chlorophyll, Atlantic sea mist, emerald green jade liquor." },
      { name: "Charcoal-Roasted Cliff Oolong Da Hong Pao", vintage: "Spring Flush", region: "Wuyi Cliff Rocks", price: 5400, notes: "Fired over binchotan embers, toasted hazelnut cream, wild orchid florals, liquid silk texture." }
    ]
  },
  {
    category: "Live Fermented Tonics, Shrubs & Sparklers",
    items: [
      { name: "Sparkling Koji Fermented Yuzu & Green Sansho", vintage: "Live Ferment", region: "Shikoku Mountains", price: 2900, notes: "Wild Aspergillus oryzae fermentation, prickly mountain sansho pepper, explosive aromatic citrus fizz." },
      { name: "Aged Mirabelle Plum & Purple Shiso Shrub", vintage: "Oak Aged 12 Mo", region: "Lorraine Orchards", price: 3100, notes: "Heritage stone fruit maceration, purple perilla vinegar, sparkling mountain aquifer water." },
      { name: "Clarified Roasted Pear & Smoked Dashi Nectar", vintage: "Hand-Clarified", region: "Nagano Valley", price: 3600, notes: "Charred winter pear, clarified Hokkaido kombu broth, fleur de sel, delicate effervescence." }
    ]
  }
];

export const CRITIC_REVIEWS = [
  {
    source: "Michelin Guide Review 2026",
    stars: 3,
    quote: "At NOCTURNE, Antoine Laurent achieves a rare state of sensory poise. The mastery of fire, the reverence for oceanic purity, and the ambient dark intimacy make this one of the world's truly transcendental dining temples.",
    critic: "Inspectors' Special Selection",
    year: "2026 Edition"
  },
  {
    source: "World's 50 Best Discovery",
    stars: 5,
    quote: "A sultry masterclass in moody minimalism. Every dish arrives like a glowing artifact out of the darkness, framed in warm gold light and unforgettable depth.",
    critic: "International Culinary Academy",
    year: "Gold Award"
  },
  {
    source: "Le Figaro Gastronomie",
    stars: 5,
    quote: "The tableside truffle wheel emulsion and the A5 Wagyu over Binchotan coals represent the absolute apex of contemporary luxury hospitality.",
    critic: "François-Régis Gaudry",
    year: "Trophy of Excellence"
  }
];

export const SAMPLE_RESERVATIONS: Reservation[] = [
  {
    id: "res-88219",
    referenceCode: "NOC-88219",
    guestName: "Lady Victoria Kensington",
    email: "victoria@kensington.uk",
    phone: "+1 (555) 382-9912",
    date: "2026-09-12",
    timeSlot: "20:00",
    guestCount: 2,
    seatingZone: "vault",
    diningExperience: "nocturne_7_course",
    winePairingTier: "grand_cru_selection",
    specialOccasion: "anniversary",
    dietaryAccommodations: ["Nut Allergy"],
    customRequests: "Prefers corner banquette with soft candlelight. Anniversary champagne presentation requested.",
    status: "confirmed",
    totalEstimatedDeposit: 2000,
    createdAt: "2026-08-20T14:20:00Z"
  }
];
