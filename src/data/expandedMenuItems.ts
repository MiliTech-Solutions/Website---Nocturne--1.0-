import { MenuItem } from '../types';

export const EXPANDED_MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. FOOD ARTS (10 New Dishes)
  // ==========================================
  {
    id: 'food-art-1',
    name: "A5 Kagyu Carpaccio & Cured Smoked Egg Yolk",
    nativeTitle: "Carpaccio de Bœuf Wagyu A5 et Jaune d'Œuf Fumé",
    course: 'starter',
    category: 'Food Arts',
    price: 720,
    description: "Paper-thin slices of A5 Kagoshima Wagyu beef kissed with white truffle oil, house-cured smoked golden yolk pearls, pickled shallot petals, and micro-sorrel on a chilled volcanic slate.",
    culinaryNotes: "Beef lightly brushed with rendered bone marrow fat and dry-aged soy, yielding a velvet-like texture that melts on contact with the palate.",
    ingredients: [
      { name: "A5 Kagoshima Wagyu Tenderloin", origin: "Kyushu, Japan" },
      { name: "Cold-Smoked Golden Egg Yolk", origin: "Pasture Farms, Brittany" },
      { name: "Alba White Truffle Oil", origin: "Piedmont, Italy" },
      { name: "French Chive & Micro Sorrel", origin: "Nocturne Rooftop Terrace" }
    ],
    dietary: ['GF', 'DF', 'NF'],
    winePairing: {
      name: "Domaine de la Romanée-Conti Échezeaux",
      vintage: "2018",
      region: "Côte de Nuits, Burgundy",
      notes: "Crushed violets, forest floor, wild raspberry, and silky refined tannins.",
      glassPrice: 750,
      bottlePrice: 6200,
      grapeVarietal: "100% Pinot Noir"
    },
    prepMethod: "Razor slicing at -2°C & tableside warm marrow brushing",
    flavorRadar: { umami: 10, richness: 9, smokiness: 6, crispness: 5, aroma: 9 },
    image: "/assets/images/wagyu_carpaccio_1794293521144.jpg",
    isChefSignature: true,
    servingTemperature: "Chilled on black granite"
  },
  {
    id: 'food-art-2',
    name: "Roasted Veal Bone Marrow & Burgundy Escargots",
    nativeTitle: "Os à Moelle Rôti aux Escargots de Bourgogne",
    course: 'starter',
    category: 'Food Arts',
    price: 580,
    description: "Split canoe-cut veal bone marrow blistered over oak embers, topped with wild Burgundy snails tossed in garlic-parsley butter, caper crisps, and charred sourdough soldiers.",
    culinaryNotes: "Wild-harvested Helix pomatia snails braised for 6 hours in court-bouillon before meeting bubbling, caramelized bone marrow.",
    ingredients: [
      { name: "Canoe-Cut Milk Veal Marrow Bone", origin: "Limousin, France" },
      { name: "Wild Helix Pomatia Snails", origin: "Burgundy, France" },
      { name: "Echire Garlic-Herb Butter", origin: "Poitou, France" },
      { name: "Levain Sourdough Soldiers", origin: "House Artisanal Bakery" }
    ],
    dietary: ['NF'],
    winePairing: {
      name: "Domaine Drouhin Chablis Grand Cru 'Les Clos'",
      vintage: "2020",
      region: "Chablis, France",
      notes: "Piercing gunflint minerality, citrus zest, and electric acidity cutting the unctuous marrow.",
      glassPrice: 380,
      bottlePrice: 2900,
      grapeVarietal: "100% Chardonnay"
    },
    prepMethod: "Open-fire ember blister with tableside herb butter sizzle",
    flavorRadar: { umami: 10, richness: 10, smokiness: 8, crispness: 8, aroma: 9 },
    image: "/assets/images/veal_bone_marrow_1794293522029.jpg",
    isChefSignature: false,
    servingTemperature: "Sizzling Hot"
  },
  {
    id: 'food-art-3',
    name: "Dry-Aged Royal Squab & Roasted Cocoa Nibs",
    nativeTitle: "Pigeonneau Royal Rôti au Cacao Cru et Betterave",
    course: 'main',
    category: 'Food Arts',
    price: 790,
    description: "Anjou royal pigeon roasted pink on the crown, served with beet glass ribbons, raw roasted Venezuelan cocoa nib crust, parsnip emulsion, and salmis sauce made from aged pigeon bones.",
    culinaryNotes: "Aged in beeswax wrap for 10 days to produce extraordinarily concentrated game depth with silky, ruby-red flesh.",
    ingredients: [
      { name: "Anjou Royal Squab", origin: "Loire Valley, France" },
      { name: "Criollo Raw Cocoa Nibs", origin: "Barlovento, Venezuela" },
      { name: "Heirloom Bull's Blood Beet", origin: "Green String Farm" },
      { name: "Salmis Reduction Jus", origin: "Nocturne Reserve Stock" }
    ],
    dietary: ['GF', 'DF', 'NF'],
    winePairing: {
      name: "Château Rayas Châteauneuf-du-Pape",
      vintage: "2014",
      region: "Rhône Valley, France",
      notes: "Kirsch, wild scrub herbs, orange peel, and intoxicating sweet spice.",
      glassPrice: 650,
      bottlePrice: 5400,
      grapeVarietal: "100% Grenache"
    },
    prepMethod: "Beeswax age & butter-basted copper pan roast",
    flavorRadar: { umami: 9, richness: 8, smokiness: 7, crispness: 8, aroma: 10 },
    image: "/assets/images/royal_squab_1794293522849.jpg",
    isChefSignature: true,
    servingTemperature: "Warm"
  },
  {
    id: 'food-art-4',
    name: "Glazed Sweetbreads & Vin Jaune Morel Sauce",
    nativeTitle: "Ris de Veau Dorés au Vin Jaune du Jura et Morilles",
    course: 'main',
    category: 'Food Arts',
    price: 820,
    description: "Crispy caramelized milk-fed veal sweetbreads basted in thyme-infused butter, surrounded by fresh mountain morels simmered in 2012 Arbois Vin Jaune and crème fraîche.",
    culinaryNotes: "Blanched, pressed overnight between oak boards, then seared slowly until shatteringly crisp outside while remaining luscious and custardy within.",
    ingredients: [
      { name: "Heart Veal Sweetbreads", origin: "Corrèze, France" },
      { name: "Spring Black Morels", origin: "Jura Mountains, France" },
      { name: "Arbois Vin Jaune Reserve 2012", origin: "Jura, France" },
      { name: "Normandy Heavy Farm Cream", origin: "Isigny-sur-Mer, France" }
    ],
    dietary: ['GF', 'NF'],
    winePairing: {
      name: "Domaine Macle Château-Chalon",
      vintage: "2015",
      region: "Jura, France",
      notes: "Green walnut, curry spice, dried apricot, and endless oxidative complexity.",
      glassPrice: 490,
      bottlePrice: 3900,
      grapeVarietal: "100% Savagnin"
    },
    prepMethod: "Slow clarified butter crusting with tableside Vin Jaune nap",
    flavorRadar: { umami: 10, richness: 9, smokiness: 4, crispness: 9, aroma: 10 },
    image: "/assets/images/glazed_sweetbreads_1794293523439.jpg",
    isChefSignature: true,
    servingTemperature: "Hot"
  },
  {
    id: 'food-art-5',
    name: "Terrine of Guinea Fowl, Pistachio & Armagnac Prunes",
    nativeTitle: "Terrine de Pintade Fermière aux Pistaches et Pruneaux",
    course: 'starter',
    category: 'Food Arts',
    price: 520,
    description: "Rustic layered terrine of free-range guinea fowl, duck liver, toasted Sicilian bronte pistachios, and prunes macerated in 1985 Bas-Armagnac, served with pickled mustard seed pearls.",
    culinaryNotes: "Cold-pressed in cast-iron molds for 48 hours to blend poultry nuances with rich spirit fruitiness.",
    ingredients: [
      { name: "Free-Range Landes Guinea Fowl", origin: "Landes, France" },
      { name: "DOP Bronte Pistachios", origin: "Sicily, Italy" },
      { name: "Agen Prunes steeped in Bas-Armagnac", origin: "Gascony, France" },
      { name: "Pickled Yellow Mustard Seed", origin: "House Pantry" }
    ],
    dietary: ['DF'],
    winePairing: {
      name: "Domaine de Trévallon Rouge",
      vintage: "2017",
      region: "Alpilles, Provence",
      notes: "Black olive tapenade, wild rosemary, cassis, and iron minerality.",
      glassPrice: 420,
      bottlePrice: 3400,
      grapeVarietal: "Cabernet Sauvignon & Syrah"
    },
    prepMethod: "48-hour cold press & tableside brioche slicing",
    flavorRadar: { umami: 8, richness: 8, smokiness: 3, crispness: 6, aroma: 9 },
    image: "/assets/images/guinea_fowl_terrine_1794293523832.jpg",
    isChefSignature: false,
    servingTemperature: "Cool"
  },
  {
    id: 'food-art-6',
    name: "Truffle Tortellini in 36-Month Smoked Capon Brodo",
    nativeTitle: "Tortellini à la Truffe et Consommé de Chapon Fumé",
    course: 'starter',
    category: 'Food Arts',
    price: 610,
    description: "Delicate hand-pinched egg yolk tortellini stuffed with 36-month Vacche Rosse Parmigiano-Reggiano and black winter truffle, swimming in crystal-clear clarified smoked capon bouillon.",
    culinaryNotes: "Pasta rolled to 0.4mm thickness using heritage Italian semolina and 40 egg yolks per kilo of flour. Broth triple-clarified with free-range egg whites.",
    ingredients: [
      { name: "Vacche Rosse Parmigiano 36 Mo", origin: "Reggio Emilia, Italy" },
      { name: "Black Winter Périgord Truffle", origin: "Dordogne, France" },
      { name: "Smoked Bresse Capon Consommé", origin: "Bresse, France" },
      { name: "Farmhouse Pasture Yolks", origin: "Heritage Organic" }
    ],
    dietary: ['NF'],
    winePairing: {
      name: "Gaja Barbaresco DOCG",
      vintage: "2018",
      region: "Piedmont, Italy",
      notes: "Dried rose petals, cedar wood, tart red cherry, and noble structured grip.",
      glassPrice: 680,
      bottlePrice: 5800,
      grapeVarietal: "100% Nebbiolo"
    },
    prepMethod: "Tableside crystal carafe bouillon pour",
    flavorRadar: { umami: 10, richness: 7, smokiness: 7, crispness: 4, aroma: 10 },
    image: "/assets/images/truffle_tortellini_1794293523853.jpg",
    isChefSignature: false,
    servingTemperature: "Piping Hot"
  },
  {
    id: 'food-art-7',
    name: "Smoked Eel & Foie Gras Napoleon",
    nativeTitle: "Mille-Feuille d'Anguille Fumée et Foie Gras Poêlé",
    course: 'starter',
    category: 'Food Arts',
    price: 640,
    description: "Alternating crisp ribbons of caramelized granny smith apple, warm seared duck liver, and applewood-smoked river eel, dressed with compressed shiso leaf reduction.",
    culinaryNotes: "Wild IJsselmeer eel smoked over damp beechwood logs, creating an intense savory counterweight to sweet caramelized apple.",
    ingredients: [
      { name: "Wild Dutch River Eel", origin: "IJsselmeer, Netherlands" },
      { name: "Artisanal Duck Foie Gras", origin: "Landes, France" },
      { name: "Crisp Granny Smith Ribbons", origin: "Normandy Orchards" },
      { name: "Purple Shiso Glaze", origin: "Nocturne Living Wall" }
    ],
    dietary: ['DF', 'NF', 'P'],
    winePairing: {
      name: "Egon Müller Scharzhofberger Riesling Spätlese",
      vintage: "2019",
      region: "Mosel, Germany",
      notes: "Electric slate acidity, white peach nectar, lime cordial, and lingering salinity.",
      glassPrice: 560,
      bottlePrice: 4700,
      grapeVarietal: "100% Riesling"
    },
    prepMethod: "Layered hot-and-cold geometry plating",
    flavorRadar: { umami: 9, richness: 10, smokiness: 8, crispness: 8, aroma: 9 },
    image: "/assets/images/eel_foie_gras_1794293525631.jpg",
    isChefSignature: true,
    servingTemperature: "Dual Temp: Warm foie gras & chilled eel"
  },
  {
    id: 'food-art-8',
    name: "Wagyu Hand-Cut Tartare & Golden Oscietra",
    nativeTitle: "Tartare de Bœuf Wagyu au Couteau et Caviar d'Or",
    course: 'starter',
    category: 'Food Arts',
    price: 690,
    description: "Knife-diced Miyazaki A5 strip loin seasoned with smoked tallow, shallot brunoise, cured quail yolk, and a 15-gram crown of golden Imperial Oscietra caviar on toasted seaweed nori tuile.",
    culinaryNotes: "Hand-chopped to order right before plating to prevent cellular oxidation and retain the glistening ruby shimmer of marbled beef.",
    ingredients: [
      { name: "A5 Miyazaki Wagyu Strip Loin", origin: "Miyazaki, Japan" },
      { name: "Golden Imperial Oscietra Caviar", origin: "Caspian Sea Reserve" },
      { name: "Smoked Beef Tallow", origin: "House Wood Hearth" },
      { name: "Crisp Nori Seaweed Tuile", origin: "Ariake Bay, Japan" }
    ],
    dietary: ['GF', 'DF', 'NF', 'P'],
    winePairing: {
      name: "Krug Grande Cuvée 170ème Édition",
      vintage: "NV",
      region: "Reims, Champagne, France",
      notes: "Toasted hazelnut, candied citrus peel, gingerbread, and magnificent bubble finesse.",
      glassPrice: 620,
      bottlePrice: 5100,
      grapeVarietal: "Pinot Noir, Chardonnay & Meunier"
    },
    prepMethod: "Hand-chopped to order & mother-of-pearl caviar spooning",
    flavorRadar: { umami: 10, richness: 9, smokiness: 5, crispness: 7, aroma: 9 },
    image: "/assets/images/wagyu_tartare_1794293526006.jpg",
    isChefSignature: true,
    servingTemperature: "Chilled at 6°C"
  },
  {
    id: 'food-art-9',
    name: "Roasted Porcini-Stuffed Quail & Lardo di Colonnata",
    nativeTitle: "Caille Farcie aux Cèpes et Lardo di Colonnata",
    course: 'main',
    category: 'Food Arts',
    price: 760,
    description: "Boneless French quail stuffed with wild mountain cèpes and brioche stuffing, wrapped in translucent ribbons of herb-cured Lardo di Colonnata, served with pine needle jus.",
    culinaryNotes: "The Tuscan pork lard melts into the delicate quail breast during roasting, basting the lean game bird from within and without.",
    ingredients: [
      { name: "Semi-Boneless French Quail", origin: "Vendée, France" },
      { name: "Wild Porcini / Cèpes", origin: "Bordeaux Forest, France" },
      { name: "IGP Lardo di Colonnata", origin: "Carrara, Tuscany" },
      { name: "Smoked Pine Needle Jus", origin: "House Extraction" }
    ],
    dietary: ['NF'],
    winePairing: {
      name: "Château Pontet-Canet Grand Cru",
      vintage: "2015",
      region: "Pauillac, Bordeaux",
      notes: "Blackcurrant, graphite pencil lead, sweet cedar, and aristocratic mineral spine.",
      glassPrice: 540,
      bottlePrice: 4600,
      grapeVarietal: "Cabernet Sauvignon & Merlot"
    },
    prepMethod: "Rotisserie ember roasted & basted with lardo drippings",
    flavorRadar: { umami: 9, richness: 9, smokiness: 7, crispness: 8, aroma: 10 },
    image: "/assets/images/roasted_quail_1794293526606.jpg",
    isChefSignature: false,
    servingTemperature: "Hot"
  },
  {
    id: 'food-art-10',
    name: "Highland Venison Loin & Juniper Ash Crust",
    nativeTitle: "Filet de Cerf des Highlands en Croûte de Genièvre",
    course: 'main',
    category: 'Food Arts',
    price: 880,
    description: "Scottish red deer loin crusted in charred juniper ash and crushed coriander, glazed with wild lingonberry and bitter dark chocolate reduction, accompanied by glazed salsify batons.",
    culinaryNotes: "Wild-harvested highland venison, seared rare over white Binchotan embers to preserve the vibrant mineral iron notes.",
    ingredients: [
      { name: "Wild Red Deer Loin", origin: "Scottish Highlands" },
      { name: "Alpine Juniper Ash", origin: "Tyrol, Austria" },
      { name: "Wild Lingonberry Coulis", origin: "Lapland, Sweden" },
      { name: "Valrhona Guanaja 70% Jus", origin: "France" }
    ],
    dietary: ['GF', 'DF', 'NF'],
    winePairing: {
      name: "Tenuta San Guido Sassicaia Bolgheri",
      vintage: "2016",
      region: "Tuscany, Italy",
      notes: "Wild blackberry, cypress pine needles, crushed gravel, and aristocratic length.",
      glassPrice: 710,
      bottlePrice: 5900,
      grapeVarietal: "Cabernet Sauvignon & Cabernet Franc"
    },
    prepMethod: "Charcoal ash crusting & flash ember sear",
    flavorRadar: { umami: 9, richness: 8, smokiness: 9, crispness: 6, aroma: 10 },
    image: "/assets/images/venison_loin_1794293526213.jpg",
    isChefSignature: true,
    servingTemperature: "Warm, cooked medium-rare"
  },

  // ==========================================
  // 2. SEA FOODS (10 New Dishes)
  // ==========================================
  {
    id: 'sea-food-1',
    name: "Gillardeau No. 2 Oysters & Champagne Snow",
    nativeTitle: "Huîtres Gillardeau Spéciales et Neige de Champagne",
    course: 'starter',
    category: 'Sea Foods',
    price: 490,
    description: "Six Speciales Gillardeau oysters on the half shell crowned with flash-frozen Champagne mignonette snow, coastal sea succulents, and candied finger lime beads.",
    culinaryNotes: "Known as the 'Rolls Royce of oysters', Gillardeau bivalves spend 4 years in nutrient-rich oceanic currents to develop their iconic hazelnut sweetness.",
    ingredients: [
      { name: "Gillardeau No. 2 Speciales", origin: "Marennes-Oléron, France" },
      { name: "Krug Rosé Champagne Granita", origin: "Reims, France" },
      { name: "Coastal Samphire & Sea Purslane", origin: "Brittany Coast" },
      { name: "Australian Finger Lime", origin: "Queensland" }
    ],
    dietary: ['GF', 'DF', 'NF', 'P'],
    winePairing: {
      name: "Billecart-Salmon Brut Rosé",
      vintage: "NV",
      region: "Mareuil-sur-Aÿ, Champagne",
      notes: "Wild strawberry, orange blossom, chalky limestone, and razor freshness.",
      glassPrice: 380,
      bottlePrice: 3100,
      grapeVarietal: "Chardonnay, Pinot Noir & Meunier"
    },
    prepMethod: "Shucked to order on hand-carved ice with nitrogen snow",
    flavorRadar: { umami: 8, richness: 4, smokiness: 1, crispness: 10, aroma: 8 },
    image: "/assets/images/gillardeau_oysters_1794293543697.jpg",
    isChefSignature: true,
    servingTemperature: "Ice cold (2°C)"
  },
  {
    id: 'sea-food-2',
    name: "Charred Spanish Scarlet Carabineros & Smoked Coral",
    nativeTitle: "Carabineros Grillés à la Flamme et Corail Émulsionné",
    course: 'main',
    category: 'Sea Foods',
    price: 890,
    description: "Jumbo deep-sea scarlet prawns grilled head-on over burning almond wood, drizzled with garlic emulsion whipped with the prawn's own roasted head coral and smoked pimentón oil.",
    culinaryNotes: "Wild-caught at 800m depth off the southern coast of Spain. The head holds unmatched oceanic nectar that is pressed tableside.",
    ingredients: [
      { name: "Wild Scarlet Carabineros Prawns", origin: "Huelva, Spain" },
      { name: "De la Vera Smoked Sweet Paprika", origin: "Extremadura, Spain" },
      { name: "Black Garlic Aioli", origin: "Castilla, Spain" },
      { name: "Fleur de Sel de Guérande", origin: "Brittany, France" }
    ],
    dietary: ['GF', 'DF', 'NF', 'P'],
    winePairing: {
      name: "López de Heredia Viña Tondonia Blanco Reserva",
      vintage: "2012",
      region: "Rioja, Spain",
      notes: "Dried beeswax, chamomile flowers, toasted almond, and crystalline salty acidity.",
      glassPrice: 420,
      bottlePrice: 3400,
      grapeVarietal: "Viura & Malvasía"
    },
    prepMethod: "Flash-blistered over almond wood with tableside coral press",
    flavorRadar: { umami: 10, richness: 9, smokiness: 9, crispness: 7, aroma: 10 },
    image: "/assets/images/charred_carabineros_1794293544465.jpg",
    isChefSignature: true,
    servingTemperature: "Hot"
  },
  {
    id: 'sea-food-3',
    name: "Wild Atlantic Turbot Poached in Verbena Milk",
    nativeTitle: "Turbot Sauvage Poché au Lait de Verveine Citronnée",
    course: 'main',
    category: 'Sea Foods',
    price: 850,
    description: "Thick fillet of line-caught Breton turbot gently submerged in lemon verbena infusion and sea butter, served with glazed baby leeks, fennel pollen, and fish fumet reduction.",
    culinaryNotes: "Poached gently at 58°C so the turbot gelatin retains its supple, pearlescent bounce without losing natural moisture.",
    ingredients: [
      { name: "Wild Line-Caught Turbot", origin: "Gulf of Morbihan, Brittany" },
      { name: "Fresh Lemon Verbena Leaves", origin: "Nocturne Rooftop" },
      { name: "Wild Fennel Pollen", origin: "Tuscany, Italy" },
      { name: "Confit Baby Leeks", origin: "Loire Valley, France" }
    ],
    dietary: ['GF', 'NF', 'P'],
    winePairing: {
      name: "Domaine François Raveneau Chablis 1er Cru 'Butteaux'",
      vintage: "2019",
      region: "Chablis, Burgundy",
      notes: "Steely oyster shell minerality, crushed lemon oil, and laser-like precision.",
      glassPrice: 580,
      bottlePrice: 4800,
      grapeVarietal: "100% Chardonnay"
    },
    prepMethod: "Gentle 58°C milk poach with aromatic herb broth pour",
    flavorRadar: { umami: 8, richness: 7, smokiness: 2, crispness: 5, aroma: 9 },
    image: "/assets/images/poached_turbot_1794293545716.jpg",
    isChefSignature: false,
    servingTemperature: "Warm"
  },
  {
    id: 'sea-food-4',
    name: "Glazed Chilean Sea Bass & Yuzu Kosho Broth",
    nativeTitle: "Légine Australe Glacée au Miso et Bouillon Yuzu Kosho",
    course: 'main',
    category: 'Sea Foods',
    price: 880,
    description: "Thick cut of deep-sea Patagonian toothfish marinated 48 hours in Kyoto saikyo white miso and aged mirin, fire-glazed over glowing coals, rested in green yuzu kosho dashi broth.",
    culinaryNotes: "Rich in natural omega-3 oils, the fish flakes apart into buttery, translucent segments beneath a deeply caramelized crust.",
    ingredients: [
      { name: "Certified Patagonian Toothfish", origin: "Ross Sea Reserve" },
      { name: "Kyoto Saikyo White Miso", origin: "Kyoto, Japan" },
      { name: "Green Yuzu Kosho Pepper", origin: "Oita, Japan" },
      { name: "Charred Baby Bok Choy", origin: "Nocturne Gardens" }
    ],
    dietary: ['GF', 'DF', 'NF', 'P'],
    winePairing: {
      name: "Domaine Zind-Humbrecht Pinot Gris Rangen de Thann",
      vintage: "2018",
      region: "Alsace Grand Cru, France",
      notes: "Smoky flint, baked pear, cardamom, and opulent volcanic richness.",
      glassPrice: 450,
      bottlePrice: 3600,
      grapeVarietal: "100% Pinot Gris"
    },
    prepMethod: "Binchotan charcoal glaze & warm dashi bath",
    flavorRadar: { umami: 10, richness: 9, smokiness: 8, crispness: 7, aroma: 9 },
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=1000&auto=format&fit=crop",
    isChefSignature: true,
    servingTemperature: "Hot"
  },
  {
    id: 'sea-food-5',
    name: "Brittany Blue Lobster Tail & Coral Butter",
    nativeTitle: "Queue de Homard Bleu Rôtie au Beurre de Corail",
    course: 'main',
    category: 'Sea Foods',
    price: 980,
    description: "Whole Breton blue lobster tail roasted gently in sea kelp butter, claw tempura with shiso batter, glazed baby Romanesco, and lobster bisque reduction infused with Armagnac.",
    culinaryNotes: "Brittany blue lobsters feature sweet, firm meat with a distinct iodine minerality unmatched by warm-water varieties.",
    ingredients: [
      { name: "Breton Blue Lobster (Homard Bleu)", origin: "Roscoff, Brittany" },
      { name: "Atlantic Kombu Butter", origin: "Saint-Malo, France" },
      { name: "Fine Hors d'Age Armagnac", origin: "Gascony, France" },
      { name: "Crispy Shiso Leaves", origin: "Living Wall" }
    ],
    dietary: ['NF', 'P'],
    winePairing: {
      name: "Bâtard-Montrachet Grand Cru Domaine Etienne Sauzet",
      vintage: "2018",
      region: "Côte de Beaune, Burgundy",
      notes: "Meyer lemon curd, toasted brioche, white truffle, and profound aristocratic resonance.",
      glassPrice: 780,
      bottlePrice: 6500,
      grapeVarietal: "100% Chardonnay"
    },
    prepMethod: "Pan-basted in copper sauteuse with flambéed bisque finish",
    flavorRadar: { umami: 10, richness: 9, smokiness: 4, crispness: 7, aroma: 10 },
    image: "/assets/images/blue_lobster_tail_1794293546521.jpg",
    isChefSignature: true,
    servingTemperature: "Hot"
  },
  {
    id: 'sea-food-6',
    name: "Charred Mediterranean Octopus & Smoked Romesco",
    nativeTitle: "Poulpe de Méditerranée Rôti et Sauce Romesco Fumée",
    course: 'starter',
    category: 'Sea Foods',
    price: 540,
    description: "Slow-tenderized Mediterranean octopus tentacle grilled over binchotan coals until deeply crisped, served over smoked Marcona almond Romesco, fingerling potatoes, and caperberry glaze.",
    culinaryNotes: "Simmered 3 hours in red wine cork court-bouillon before hitting 450°C charcoal grates to achieve a crunchy crust with marshmallow-soft interior.",
    ingredients: [
      { name: "Wild Rock Octopus", origin: "Aegean Sea, Greece" },
      { name: "Smoked Marcona Almond Romesco", origin: "Catalonia, Spain" },
      { name: "Confit Fingerling Potatoes", origin: "Brittany, France" },
      { name: "Spanish Smoked Pimentón Oil", origin: "La Vera, Spain" }
    ],
    dietary: ['GF', 'DF', 'P'],
    winePairing: {
      name: "Pétalos del Bierzo Descendientes de J. Palacios",
      vintage: "2020",
      region: "Bierzo, Spain",
      notes: "Wild thyme, graphite minerality, sour cherry, and refreshing mountain acid.",
      glassPrice: 310,
      bottlePrice: 2200,
      grapeVarietal: "100% Mencía"
    },
    prepMethod: "Binchotan coal blister with tableside herb oil drizzle",
    flavorRadar: { umami: 9, richness: 7, smokiness: 9, crispness: 9, aroma: 9 },
    image: "/assets/images/charred_octopus_1794293548235.jpg",
    isChefSignature: false,
    servingTemperature: "Warm"
  },
  {
    id: 'sea-food-7',
    name: "Torched Ora King Salmon Belly & Ponzu Pearls",
    nativeTitle: "Ventrèche de Saumon Ora King Brûlée et Perles de Ponzu",
    course: 'starter',
    category: 'Sea Foods',
    price: 480,
    description: "Marbled New Zealand Ora King salmon belly gently blowtorched with cherry wood smoke, aged dashi-ponzu caviar pearls, shaved fresh wasabi, and puffed wild rice crisp.",
    culinaryNotes: "Often called 'the Wagyu of the sea' with over 25% natural healthy fat content that instantly liquefies under gentle flame.",
    ingredients: [
      { name: "Ora King Salmon Belly", origin: "Marlborough Sounds, New Zealand" },
      { name: "Fresh Shizuoka Wasabi", origin: "Shizuoka, Japan" },
      { name: "Yuzu Ponzu Molecular Pearls", origin: "House Lab" },
      { name: "Puffed Himalayan Black Rice", origin: "Nepal" }
    ],
    dietary: ['GF', 'DF', 'NF', 'P'],
    winePairing: {
      name: "Domaine Tempier Bandol Rosé",
      vintage: "2021",
      region: "Provence, France",
      notes: "Blood orange, crushed Mediterranean garrigue, white peach, and saline snap.",
      glassPrice: 340,
      bottlePrice: 2500,
      grapeVarietal: "Mourvèdre, Grenache & Cinsault"
    },
    prepMethod: "Cherry wood blowtorch sear & nitrogen caviar plating",
    flavorRadar: { umami: 9, richness: 9, smokiness: 6, crispness: 8, aroma: 8 },
    image: "/assets/images/torched_salmon_belly_1794293548903.jpg",
    isChefSignature: false,
    servingTemperature: "Warm sear with cold pearls"
  },
  {
    id: 'sea-food-8',
    name: "Alaskan Red King Crab & Brown Butter Dashi",
    nativeTitle: "Pattes de Crabe Royal d'Alaska au Beurre Noisette et Dashi",
    course: 'main',
    category: 'Sea Foods',
    price: 940,
    description: "Whole steamed merus section of colossal wild Alaskan red king crab, basted in nutty cultured brown butter, served with charred scallion emulsion and aged black vinegar dashi reduction.",
    culinaryNotes: "Wild-harvested in the icy Bering Sea. Steamed over sea rocks and kelp smoke to concentrate pure oceanic sweetness.",
    ingredients: [
      { name: "Wild Alaskan Red King Crab", origin: "Bering Sea, Alaska" },
      { name: "Cultured Alpine Brown Butter", origin: "Haute-Savoie, France" },
      { name: "Aged Chinkiang Black Vinegar", origin: "Zhenjiang" },
      { name: "Charred Green Spring Scallions", origin: "Organic Gardens" }
    ],
    dietary: ['GF', 'NF', 'P'],
    winePairing: {
      name: "Chassagne-Montrachet 1er Cru Domaine Blain-Gagnard",
      vintage: "2019",
      region: "Côte de Beaune, Burgundy",
      notes: "Hazelnut cream, yellow orchard fruit, lime blossom, and rich mineral length.",
      glassPrice: 480,
      bottlePrice: 3800,
      grapeVarietal: "100% Chardonnay"
    },
    prepMethod: "Kelp steam & tableside warm brown butter pour",
    flavorRadar: { umami: 10, richness: 8, smokiness: 5, crispness: 6, aroma: 9 },
    image: "/assets/images/king_crab_dashi_1794293548900.jpg",
    isChefSignature: true,
    servingTemperature: "Hot"
  },
  {
    id: 'sea-food-9',
    name: "Pan-Seared Red Mullet & Saffron Bouillabaisse Essence",
    nativeTitle: "Rouget Barbet Poêlé et Réduction de Bouillabaisse au Safran",
    course: 'main',
    category: 'Sea Foods',
    price: 740,
    description: "Crispy-skinned Mediterranean red mullet fillets seared on cast iron, set in an intense golden bouillabaisse reduction scented with Iranian Sargol saffron, sea fennel, and garlic rouille tuiles.",
    culinaryNotes: "Red mullet possesses an unmistakably assertive, rich liver and shellfish character that stands up to profound Mediterranean saffron broth.",
    ingredients: [
      { name: "Line-Caught Mediterranean Rouget", origin: "Marseille, France" },
      { name: "Sargol Grade Saffron", origin: "Khorasan, Iran" },
      { name: "Rockfish Bouillabaisse Glaze", origin: "House 36-hr Simmer" },
      { name: "Sourdough Rouille Crisp", origin: "House Pastry" }
    ],
    dietary: ['GF', 'DF', 'NF', 'P'],
    winePairing: {
      name: "Château Simone Palette Blanc",
      vintage: "2018",
      region: "Provence, France",
      notes: "Dried pine needles, white peach, garrigue honey, and chalky Mediterranean minerality.",
      glassPrice: 410,
      bottlePrice: 3200,
      grapeVarietal: "Clairette, Grenache Blanc & Bourboulenc"
    },
    prepMethod: "High-heat skin crackle & tableside saffron broth pour",
    flavorRadar: { umami: 9, richness: 8, smokiness: 4, crispness: 9, aroma: 10 },
    image: "/assets/images/red_mullet_bouillabaisse_1794293548988.jpg",
    isChefSignature: false,
    servingTemperature: "Hot"
  },
  {
    id: 'sea-food-10',
    name: "Hokkaido Scallop Crudo & Calamansi Kosho",
    nativeTitle: "Crudo de Coquilles Saint-Jacques de Hokkaido au Calamansi",
    course: 'starter',
    category: 'Sea Foods',
    price: 460,
    description: "Sashimi-sliced giant Hokkaido sea scallops, calamansi citrus juice, white soy reduction, pickled kohlrabi disc, and a touch of Royal Oscietra caviar with fragrant coriander blossoms.",
    culinaryNotes: "Wild-harvested in the frigid waters of northern Japan, renowned for crystalline sweetness and clean oceanic crispness.",
    ingredients: [
      { name: "Fresh Hokkaido Diver Scallops", origin: "Okhotsk Sea, Japan" },
      { name: "Cold-Pressed Calamansi Citrus", origin: "Mindanao, Philippines" },
      { name: "Shikoku White Soy Sauce", origin: "Aichi, Japan" },
      { name: "Imperial Oscietra Caviar", origin: "Caspian Reserve" }
    ],
    dietary: ['GF', 'DF', 'NF', 'P'],
    winePairing: {
      name: "Domaine Sigalas Santorini Assyrtiko",
      vintage: "2021",
      region: "Santorini, Greece",
      notes: "Volcanic ash, saline sea spray, green citrus, and electric dry finish.",
      glassPrice: 320,
      bottlePrice: 2400,
      grapeVarietal: "100% Assyrtiko"
    },
    prepMethod: "Chilled precision crudo slicing with cold citrus cure",
    flavorRadar: { umami: 8, richness: 4, smokiness: 1, crispness: 9, aroma: 9 },
    image: "/assets/images/scallop_crudo_1794293549565.jpg",
    isChefSignature: false,
    servingTemperature: "Chilled at 5°C"
  },

  // ==========================================
  // 3. GRILLS & BBQS (10 New Dishes)
  // ==========================================
  {
    id: 'grill-bbq-1',
    name: "45-Day Dry-Aged Prime Tomahawk & Marrow Butter",
    nativeTitle: "Côte de Bœuf Tomahawk Maturée 45 Jours aux Braises",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 1450,
    description: "1.2kg USDA Prime bone-in ribeye dry-aged 45 days in Himalayan pink salt chambers, charred over applewood and Binchotan coals, basted with whipped marrow herb butter and fleur de sel.",
    culinaryNotes: "Dry-aging breaks down muscle fibers into nutty blue-cheese umami notes. Carved tableside with crispy charred fat cap.",
    ingredients: [
      { name: "45-Day Himalayan Salt Dry-Aged Beef", origin: "Black Angus Reserve, Nebraska" },
      { name: "Roasted Bone Marrow Butter", origin: "House Hearth" },
      { name: "Maldon Smoked Sea Salt", origin: "Essex, UK" },
      { name: "Fresh Rosemary & Thyme Brushes", origin: "Nocturne Terrace" }
    ],
    dietary: ['GF', 'NF'],
    winePairing: {
      name: "Château Montrose 2ème Grand Cru Classé",
      vintage: "2010",
      region: "Saint-Estèphe, Bordeaux",
      notes: "Cigar box, black currant liqueur, leather, and immense monolithic tannic depth.",
      glassPrice: 720,
      bottlePrice: 5900,
      grapeVarietal: "Cabernet Sauvignon & Merlot"
    },
    prepMethod: "Two-zone wood hearth sear & tableside bone carving",
    flavorRadar: { umami: 10, richness: 10, smokiness: 10, crispness: 9, aroma: 10 },
    image: "/assets/images/prime_tomahawk_1794293567758.jpg",
    isChefSignature: true,
    servingTemperature: "Hot & Rested to 54°C Medium-Rare"
  },
  {
    id: 'grill-bbq-2',
    name: "72-Hour Smoked Short Rib & Black Garlic Glaze",
    nativeTitle: "Plat de Côtes Fumé 72 Heures à l'Ail Noir et Poire",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 920,
    description: "Prime beef short rib slow-smoked for 18 hours over hickory wood, followed by 54 hours sous-vide tenderization, lacquered with fermented black garlic, Korean shingo pear, and aged bourbon glaze.",
    culinaryNotes: "Renders so unctuously soft it can be divided with a soup spoon, while the sticky dark lacquer yields deep balsamic-molasses sweet notes.",
    ingredients: [
      { name: "Prime Black Angus Beef Short Rib", origin: "Creekstone Farms, Kansas" },
      { name: "Fermented Black Garlic Puree", origin: "Aomori, Japan" },
      { name: "Wild Shingo Pear Reduction", origin: "Nagano, Japan" },
      { name: "10-Year Kentucky Straight Bourbon", origin: "Bardstown, Kentucky" }
    ],
    dietary: ['DF', 'NF'],
    winePairing: {
      name: "Caymus Vineyards Special Selection Cabernet",
      vintage: "2017",
      region: "Napa Valley, California",
      notes: "Cacao, ripe blackberry compote, warm French vanilla, and decadent plush texture.",
      glassPrice: 620,
      bottlePrice: 4900,
      grapeVarietal: "100% Cabernet Sauvignon"
    },
    prepMethod: "Hickory smoke & multi-day low temp glazing",
    flavorRadar: { umami: 10, richness: 10, smokiness: 9, crispness: 6, aroma: 9 },
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1000&auto=format&fit=crop",
    isChefSignature: true,
    servingTemperature: "Glazed Piping Hot"
  },
  {
    id: 'grill-bbq-3',
    name: "Australian Wagyu Picanha & Charred Chimichurri",
    nativeTitle: "Picanha de Wagyu Australien et Chimichurri Fumé",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 860,
    description: "Thick sirloin cap skewered and slow-turned over glowing Binchotan embers, rendered until golden crispy skin forms, served with fire-charred herb chimichurri and smoked sea salt.",
    culinaryNotes: "Marble score 8+ crossbreed Wagyu. The fat cap bastes the interior meat continuously as it rotates above the charcoal bed.",
    ingredients: [
      { name: "Westholme Wagyu MS8 Picanha", origin: "Queensland, Australia" },
      { name: "Wood-Fired Oregano & Parsley", origin: "Terrace Garden" },
      { name: "Smoked Jalapeño & Garlic Oil", origin: "House Smokehouse" },
      { name: "Red Wine Vinegar Reserva", origin: "Jerez, Spain" }
    ],
    dietary: ['GF', 'DF', 'NF'],
    winePairing: {
      name: "Catena Zapata Malbec Argentino",
      vintage: "2019",
      region: "Mendoza, Argentina",
      notes: "Dark plum, crushed violet, roasted coffee bean, and smooth mountain freshness.",
      glassPrice: 440,
      bottlePrice: 3500,
      grapeVarietal: "100% Malbec"
    },
    prepMethod: "Rotisserie charcoal turn & direct ember flash-crust",
    flavorRadar: { umami: 9, richness: 9, smokiness: 9, crispness: 9, aroma: 8 },
    image: "/assets/images/wagyu_picanha_1794293568734.jpg",
    isChefSignature: false,
    servingTemperature: "Hot"
  },
  {
    id: 'grill-bbq-4',
    name: "Ibérico Pork Secreto & Smoked White Peach",
    nativeTitle: "Secreto Ibérico Bellota Grillé et Pêche Blanche Fumée",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 840,
    description: "The 'hidden cut' of acorn-fed 100% Ibérico Bellota pork grilled intensely over oak charcoal, accompanied by caramelized smoked white peaches, pickled mustard caviar, and natural pork jus.",
    culinaryNotes: "Extensive acorn (bellota) diet infuses the intramuscular fat with high oleic acid, giving the meat a distinct hazelnut aroma and melting quality.",
    ingredients: [
      { name: "100% Ibérico de Bellota Secreto", origin: "Jabugo, Spain" },
      { name: "Organic White Peaches", origin: "Rhône Valley, France" },
      { name: "Stone-Ground Mustard Seeds", origin: "Dijon, France" },
      { name: "Jerez Sherry Vinegar Reduction", origin: "Andalusia, Spain" }
    ],
    dietary: ['GF', 'DF', 'NF'],
    winePairing: {
      name: "Bodegas Vega Sicilia Valbuena 5°",
      vintage: "2017",
      region: "Ribera del Duero, Spain",
      notes: "Black cherry compote, sandalwood, cedar spices, and structured velvety depth.",
      glassPrice: 580,
      bottlePrice: 4600,
      grapeVarietal: "Tempranillo & Merlot"
    },
    prepMethod: "Flash charcoal blistering & wood-smoke peach caramelization",
    flavorRadar: { umami: 9, richness: 9, smokiness: 8, crispness: 8, aroma: 9 },
    image: "/assets/images/iberico_secreto_1794293569477.jpg",
    isChefSignature: true,
    servingTemperature: "Hot"
  },
  {
    id: 'grill-bbq-5',
    name: "Wood-Fired Venison Chops & Wild Elderberry Glaze",
    nativeTitle: "Côtes de Cerf Grillées au Feu de Bois et Sureau Sauvage",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 890,
    description: "Double-cut venison rib chops smoked over dried pine needles and white oak embers, glazed with tart wild elderberry syrup and crushed green juniper, served with roasted chanterelles.",
    culinaryNotes: "Lean red deer chops seared at high fire to develop a deeply caramelized, savory crust while maintaining a tender ruby center.",
    ingredients: [
      { name: "Double-Cut Venison Rib Chops", origin: "Inverness, Scotland" },
      { name: "Wild Alpine Elderberry Reduction", origin: "Swiss Alps" },
      { name: "Dried Pine Needles & Rosemary", origin: "Terrace Gardens" },
      { name: "Wild Chanterelle Mushrooms", origin: "Black Forest, Germany" }
    ],
    dietary: ['GF', 'DF', 'NF'],
    winePairing: {
      name: "Guigal Côte-Rôtie 'Brune et Blonde'",
      vintage: "2018",
      region: "Northern Rhône, France",
      notes: "Smoked bacon, black pepper, black olives, and velvety wild blackberry.",
      glassPrice: 520,
      bottlePrice: 4200,
      grapeVarietal: "Syrah & Viognier"
    },
    prepMethod: "Pine needle smoke flare & cast-iron butter sear",
    flavorRadar: { umami: 9, richness: 7, smokiness: 9, crispness: 8, aroma: 10 },
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=1000&auto=format&fit=crop",
    isChefSignature: false,
    servingTemperature: "Warm"
  },
  {
    id: 'grill-bbq-6',
    name: "Kurobuta Berkshire Pork Belly & Smoked Bourbon Glaze",
    nativeTitle: "Poitrine de Porc Kurobuta Croustillante au Bourbon Fumé",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 780,
    description: "Crispy Berkshire pork belly braised 12 hours in spiced dashi, pressed, wood-fired until skin crackles like glass, glazed with smoked maple and small-batch Kentucky bourbon.",
    culinaryNotes: "Purebred heritage Kurobuta pig known for unmatched tenderness, sweet fat, and fine marbling.",
    ingredients: [
      { name: "Heritage Kurobuta Pork Belly", origin: "Berkshire, UK" },
      { name: "Vermont Grade A Dark Maple Syrup", origin: "Vermont, USA" },
      { name: "Woodford Reserve Bourbon", origin: "Versailles, Kentucky" },
      { name: "Fermented Apple Cider Vinegar", origin: "Normandy, France" }
    ],
    dietary: ['DF', 'NF'],
    winePairing: {
      name: "Domaine Huet Vouvray Moelleux 'Le Mont'",
      vintage: "2016",
      region: "Loire Valley, France",
      notes: "Golden quince, beeswax, dried pineapple, and piercing vibrant acidity.",
      glassPrice: 380,
      bottlePrice: 2900,
      grapeVarietal: "100% Chenin Blanc"
    },
    prepMethod: "12-hr braise & direct high-fire skin crackle",
    flavorRadar: { umami: 9, richness: 10, smokiness: 8, crispness: 10, aroma: 9 },
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1000&auto=format&fit=crop",
    isChefSignature: false,
    servingTemperature: "Hot & Crackling"
  },
  {
    id: 'grill-bbq-7',
    name: "Binchotan Charcoal Guinea Hen & Burnt Leek Ash",
    nativeTitle: "Pintade aux Braises de Binchotan et Cendres de Poireaux",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 810,
    description: "Breast and crispy leg of pasture-raised French pintade roasted over burning white oak coals, dusted with burnt leek ash, served with vin jaune emulsion and roasted maitake mushrooms.",
    culinaryNotes: "Guinea hen possesses deeper, gamier aromatics than chicken, perfectly heightened by direct wood embers and mineral allium ash.",
    ingredients: [
      { name: "Pasture-Raised Landes Pintade", origin: "Nouvelle-Aquitaine, France" },
      { name: "Charred Leek Stem Ash", origin: "Nocturne Hearth" },
      { name: "Wild Hen-of-the-Woods (Maitake)", origin: "Nagano, Japan" },
      { name: "Vin Jaune Savagnin Sauce", origin: "Jura, France" }
    ],
    dietary: ['GF', 'NF'],
    winePairing: {
      name: "Château de Beaucastel Châteauneuf-du-Pape Blanc",
      vintage: "2019",
      region: "Rhône Valley, France",
      notes: "White peach, dried herbs, toasted brioche, and smoky mineral richness.",
      glassPrice: 460,
      bottlePrice: 3700,
      grapeVarietal: "Roussanne, Grenache Blanc & Clairette"
    },
    prepMethod: "Rotisserie hearth roasting & aromatic ash dusting",
    flavorRadar: { umami: 9, richness: 8, smokiness: 9, crispness: 8, aroma: 9 },
    image: "/assets/images/charcoal_guinea_hen_1794293570414.jpg",
    isChefSignature: false,
    servingTemperature: "Hot"
  },
  {
    id: 'grill-bbq-8',
    name: "Wood-Roasted Côte de Bœuf & Smoked Béarnaise",
    nativeTitle: "Côte de Bœuf Rôtie au Feu de Bois et Béarnaise Fumée",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 1250,
    description: "Thick 60-day dry-aged Charolais rib steak roasted on the bone over red-hot coals, paired with cold-smoked tarragon béarnaise whipped tableside and confit garlic cloves.",
    culinaryNotes: "Sourced from heritage French Charolais cattle, aged until fat transforms into sweet tallow cream with deeply roasted hazelnut aromatics.",
    ingredients: [
      { name: "60-Day Dry-Aged Charolais Beef", origin: "Burgundy, France" },
      { name: "Smoked French Tarragon Butter", origin: "Isigny-sur-Mer" },
      { name: "Aged Champagne Vinegar", origin: "Reims, France" },
      { name: "Confit Purple Garlic Bulbs", origin: "Lautrec, France" }
    ],
    dietary: ['GF', 'NF'],
    winePairing: {
      name: "Château Léoville Las Cases 2ème Grand Cru",
      vintage: "2014",
      region: "Saint-Julien, Bordeaux",
      notes: "Crushed gravel, cassis, cigar ash, and immense aristocratic structure.",
      glassPrice: 690,
      bottlePrice: 5600,
      grapeVarietal: "Cabernet Sauvignon & Merlot"
    },
    prepMethod: "Open-flame cast-iron sear with warm siphon béarnaise",
    flavorRadar: { umami: 10, richness: 9, smokiness: 9, crispness: 8, aroma: 10 },
    image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?q=80&w=1000&auto=format&fit=crop",
    isChefSignature: true,
    servingTemperature: "Hot"
  },
  {
    id: 'grill-bbq-9',
    name: "Pomegranate Molasses Glazed Lamb Ribs",
    nativeTitle: "Travers d'Agneau Glacés à la Grenade et Pistaches Fumées",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 760,
    description: "Tender milk-fed lamb ribs slow-smoked over grapevine cuttings, glazed with wild pomegranate molasses and Aleppo chili pepper, finished with crushed smoked Bronte pistachios.",
    culinaryNotes: "Smoked over dried vines from Bordeaux vineyards, infusing a delicate sweet fruity smoke that compliments the grassy sweetness of milk-fed lamb.",
    ingredients: [
      { name: "Pyrenean Milk-Fed Lamb Ribs", origin: "Pyrénées, France" },
      { name: "Sun-Dried Pomegranate Molasses", origin: "Lebanon" },
      { name: "Crushed Aleppo Pepper Flakes", origin: "Aleppo, Syria" },
      { name: "Smoked Sicilian Bronte Pistachios", origin: "Sicily, Italy" }
    ],
    dietary: ['GF', 'DF'],
    winePairing: {
      name: "Domaine Jean-Louis Chave Saint-Joseph Rouge",
      vintage: "2019",
      region: "Rhône Valley, France",
      notes: "Black pepper, smoked meat, wild bramble, and fine stony minerality.",
      glassPrice: 420,
      bottlePrice: 3400,
      grapeVarietal: "100% Syrah"
    },
    prepMethod: "Vineyard grapevine smoke & high-sugar caramelization",
    flavorRadar: { umami: 9, richness: 8, smokiness: 9, crispness: 8, aroma: 9 },
    image: "/assets/images/glazed_lamb_ribs_1794293570841.jpg",
    isChefSignature: false,
    servingTemperature: "Hot"
  },
  {
    id: 'grill-bbq-10',
    name: "Crispy Duck Leg Confit & Spiced Cherry Ember Glaze",
    nativeTitle: "Cuisse de Canard Confite Croustillante aux Cerises Noires",
    course: 'hearth',
    category: 'Grills & BBQs',
    price: 790,
    description: "Mulard duck leg slow-cured in sea salt and mountain herbs, poached 10 hours in its own duck fat, crisped over glowing cherry wood coals, drizzled with sour black cherry star anise glaze.",
    culinaryNotes: "Achieves an unforgettable contrast between paper-crisp golden skin and meltingly succulent strands of dark duck meat.",
    ingredients: [
      { name: "Free-Range Mulard Duck Leg", origin: "Southwest France" },
      { name: "Rendered Duck Fat (Graisse de Canard)", origin: "House Rendered" },
      { name: "Wild Griotte Black Cherries", origin: "Alsace, France" },
      { name: "Whole Star Anise & Cinnamon", origin: "Saigon, Vietnam" }
    ],
    dietary: ['GF', 'DF', 'NF'],
    winePairing: {
      name: "Alain Graillot Crozes-Hermitage Rouge",
      vintage: "2020",
      region: "Rhône Valley, France",
      notes: "Black tapenade, violets, wild raspberry, and savory bacon smoke.",
      glassPrice: 350,
      bottlePrice: 2700,
      grapeVarietal: "100% Syrah"
    },
    prepMethod: "10-hour fat confit & high-heat woodfire crusting",
    flavorRadar: { umami: 9, richness: 9, smokiness: 8, crispness: 10, aroma: 9 },
    image: "/assets/images/duck_leg_confit_1794293570757.jpg",
    isChefSignature: false,
    servingTemperature: "Hot & Crackling"
  },

  // ==========================================
  // 4. GREENS & SALADS (10 New Dishes)
  // ==========================================
  {
    id: 'green-salad-1',
    name: "Smoked Heirloom Beet Tartare & Horseradish Pearls",
    nativeTitle: "Tartare de Betteraves Fumées et Perles de Raifort",
    course: 'starter',
    category: 'Greens & Salads',
    price: 430,
    description: "Salt-baked golden and ruby beets smoked over hickory wood, hand-diced with cornichons and shallots, crowned with horseradish cream pearls, crispy buckwheat groats, and dill oil.",
    culinaryNotes: "Baking in sea salt crust concentrates natural sugars before gentle smoke imparts savory barbecue-like complexity to the earthy root.",
    ingredients: [
      { name: "Heritage Chioggia & Golden Beets", origin: "Organic Farm, Petaluma" },
      { name: "Fresh Alsatian Horseradish", origin: "Alsace, France" },
      { name: "Toasted Organic Buckwheat", origin: "Brittany, France" },
      { name: "Cold-Pressed Wild Dill Oil", origin: "House Extraction" }
    ],
    dietary: ['GF', 'V', 'NF'],
    winePairing: {
      name: "Domaine Ott Château de Selle Rosé",
      vintage: "2021",
      region: "Côtes de Provence, France",
      notes: "White peach, red berry crispness, dried herbs, and stony minerality.",
      glassPrice: 320,
      bottlePrice: 2400,
      grapeVarietal: "Grenache, Cinsault & Syrah"
    },
    prepMethod: "Salt-crust bake & cold hickory smoke infusion",
    flavorRadar: { umami: 7, richness: 5, smokiness: 7, crispness: 8, aroma: 8 },
    image: "/assets/images/beet_tartare_1794293588115.jpg",
    isChefSignature: false,
    servingTemperature: "Chilled"
  },
  {
    id: 'green-salad-2',
    name: "Shaved Fennel & Blood Orange Crudo Salad",
    nativeTitle: "Salade de Fenouil Croquant et Orange Sanguine de Sicile",
    course: 'starter',
    category: 'Greens & Salads',
    price: 420,
    description: "Razor-thin ribbons of wild Florence fennel, Sicilian Tarocco blood orange supreme fillets, candied green olives, toasted Marcona almond dust, and Meyer lemon emulsion.",
    culinaryNotes: "Crisped in ice water with fresh mint to accentuate the cold anise snap against sweet, berry-scented blood orange juices.",
    ingredients: [
      { name: "Florence Bulb Fennel", origin: "Heritage Farm, Sonoma" },
      { name: "IGP Sicilian Tarocco Blood Oranges", origin: "Catania, Sicily" },
      { name: "Castelvetrano Green Olives", origin: "Sicily, Italy" },
      { name: "Spanish Marcona Almonds", origin: "Alicante, Spain" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG'],
    winePairing: {
      name: "Tormaresca Pietrabianca Chardonnay/Fiano",
      vintage: "2020",
      region: "Puglia, Italy",
      notes: "Orange blossom, green apple, white peach, and salty Mediterranean breeze.",
      glassPrice: 280,
      bottlePrice: 2100,
      grapeVarietal: "Chardonnay & Fiano"
    },
    prepMethod: "Mandoline shaved into ice bath & cold citrus toss",
    flavorRadar: { umami: 5, richness: 4, smokiness: 2, crispness: 10, aroma: 9 },
    image: "/assets/images/fennel_blood_orange_1794293588988.jpg",
    isChefSignature: false,
    servingTemperature: "Ice-Cold"
  },
  {
    id: 'green-salad-3',
    name: "Wood-Charred Baby Gem & Truffle Caesar",
    nativeTitle: "Cœurs de Sucrine Braisés et Vinaigrette César à la Truffe",
    course: 'starter',
    category: 'Greens & Salads',
    price: 450,
    description: "Baby gem lettuce hearts kissed by white-hot charcoal embers, tossed in emulsified black winter truffle Caesar dressing, 30-month Parmigiano shards, and crispy sourdough charcoal crisps.",
    culinaryNotes: "Charred for only 15 seconds on blazing coals to achieve smoky blackened tips while retaining a juicy, refreshing heart.",
    ingredients: [
      { name: "Crisp Organic Baby Gem Sucrine", origin: "Capay Valley Farms" },
      { name: "Black Winter Truffle Puree", origin: "Norcia, Italy" },
      { name: "Parmigiano-Reggiano 30 Mo", origin: "Parma, Italy" },
      { name: "House Charcoal Breadcrumbs", origin: "House Bakery" }
    ],
    dietary: ['NF'],
    winePairing: {
      name: "Domaine Leflaive Mâcon-Verzé",
      vintage: "2021",
      region: "Burgundy, France",
      notes: "Crisp green pear, hazelnut butter, and brisk limestone minerality.",
      glassPrice: 340,
      bottlePrice: 2600,
      grapeVarietal: "100% Chardonnay"
    },
    prepMethod: "15-second ember flash-char & tableside cheese shaving",
    flavorRadar: { umami: 9, richness: 7, smokiness: 8, crispness: 9, aroma: 9 },
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1000&auto=format&fit=crop",
    isChefSignature: true,
    servingTemperature: "Warm Charred Leaf on Chilled Plate"
  },
  {
    id: 'green-salad-4',
    name: "Charred Romanesco & Smoked Bagna Càuda",
    nativeTitle: "Romanesco Brûlé aux Braises et Bagna Càuda Fumée",
    course: 'starter',
    category: 'Greens & Salads',
    price: 440,
    description: "Fractal Romanesco florets caramelized over red-hot coals, served over a warm Piedmontese bagna càuda emulsion of garlic, olive oil, and Cantabrian anchovy, finished with toasted hazelnuts.",
    culinaryNotes: "Brings nutty, brassica sweetness to the forefront through high-heat blistering, offset by savory garlic-anchovy warmth.",
    ingredients: [
      { name: "Organic Heirloom Romanesco", origin: "Salinas Valley, California" },
      { name: "Cantabrian Reserve Anchovies", origin: "Santona, Spain" },
      { name: "IGP Piedmont Hazelnuts", origin: "Langhe, Italy" },
      { name: "First Cold-Pressed Ligurian Olive Oil", origin: "Liguria, Italy" }
    ],
    dietary: ['GF', 'DF', 'P'],
    winePairing: {
      name: "Roero Arneis Bruno Giacosa",
      vintage: "2021",
      region: "Piedmont, Italy",
      notes: "Ripe pear, apricot kernel, chamomile flowers, and vibrant almond finish.",
      glassPrice: 310,
      bottlePrice: 2300,
      grapeVarietal: "100% Arneis"
    },
    prepMethod: "Direct charcoal grill & warm emulsion pooling",
    flavorRadar: { umami: 9, richness: 7, smokiness: 8, crispness: 8, aroma: 9 },
    image: "/assets/images/charred_romanesco_1794293589294.jpg",
    isChefSignature: false,
    servingTemperature: "Warm"
  },
  {
    id: 'green-salad-5',
    name: "Wild Morel & Golden Chanterelle Fricassee",
    nativeTitle: "Fricassée de Morilles et Girolles des Forêts à l'Œuf Parfait",
    course: 'starter',
    category: 'Greens & Salads',
    price: 560,
    description: "Pan-roasted wild forest morels and Oregon chanterelles basted in thyme butter, resting over a 63°C slow-poached farm egg, crispy shallot strings, and white truffle emulsion.",
    culinaryNotes: "Wild-harvested after spring rainfalls. Breaking the slow-cooked egg yolk creates a velvety natural sauce with the buttered mushroom pan juices.",
    ingredients: [
      { name: "Fresh Spring Morel Mushrooms", origin: "Auvergne, France" },
      { name: "Golden Pine Chanterelles", origin: "Pacific Northwest" },
      { name: "63°C Pasture Hen Egg", origin: "Organic Local Farm" },
      { name: "White Truffle Infused Butter", origin: "Alba, Italy" }
    ],
    dietary: ['GF', 'V', 'NF'],
    winePairing: {
      name: "Domaine de Montille Volnay 1er Cru 'Les Champans'",
      vintage: "2017",
      region: "Côte de Beaune, Burgundy",
      notes: "Wild cherry, damp forest earth, dried rose, and silky lingering grip.",
      glassPrice: 510,
      bottlePrice: 4100,
      grapeVarietal: "100% Pinot Noir"
    },
    prepMethod: "Copper pan sauté & tableside egg piercing",
    flavorRadar: { umami: 10, richness: 8, smokiness: 5, crispness: 7, aroma: 10 },
    image: "/assets/images/morel_chanterelle_fricassee_1794293590407.jpg",
    isChefSignature: true,
    servingTemperature: "Warm"
  },
  {
    id: 'green-salad-6',
    name: "Smoked Burrata & Heirloom Tomato Water",
    nativeTitle: "Burrata Fumée au Foin et Eau de Tomate Clarifiée",
    course: 'starter',
    category: 'Greens & Salads',
    price: 470,
    description: "Whole Pugliese burrata lightly cold-smoked with sweet mountain hay, placed in a crystal moat of clarified heirloom tomato water, dressed with basil chlorophyll oil and 25-year balsamico.",
    culinaryNotes: "Smoked over dried organic alpine hay for 12 minutes to impart subtle herbal sweetness to the fresh stracciatella core.",
    ingredients: [
      { name: "Artisanal Burrata di Andria IGP", origin: "Puglia, Italy" },
      { name: "Clarified Green Zebra Tomato Water", origin: "Heritage Farm" },
      { name: "Genovese Basil Hydrosol", origin: "Nocturne Rooftop" },
      { name: "Aceto Balsamico Tradizionale 25yr", origin: "Modena, Italy" }
    ],
    dietary: ['GF', 'V', 'NF'],
    winePairing: {
      name: "Tormaresca Calafuria Rosato",
      vintage: "2021",
      region: "Salento, Puglia",
      notes: "Pink grapefruit, pomegranate seeds, jasmine florals, and salty Mediterranean snap.",
      glassPrice: 270,
      bottlePrice: 1950,
      grapeVarietal: "100% Negroamaro"
    },
    prepMethod: "Alpine hay smoke chamber & tableside clarified broth pour",
    flavorRadar: { umami: 8, richness: 9, smokiness: 6, crispness: 6, aroma: 10 },
    image: "/assets/images/smoked_burrata_1794293590632.jpg",
    isChefSignature: false,
    servingTemperature: "Cool"
  },
  {
    id: 'green-salad-7',
    name: "Braised Baby Artichokes Barigoule & Lemon Thyme",
    nativeTitle: "Petits Artichauts Poivrade à la Barigoule et Thym Citron",
    course: 'starter',
    category: 'Greens & Salads',
    price: 460,
    description: "Tender purple Poivrade baby artichokes slow-braised in dry white wine, olive oil, sweet baby carrots, shallots, and fresh lemon thyme, garnished with crispy artichoke chips.",
    culinaryNotes: "Classic Provençal preparation where artichoke hearts absorb the rich, reduced aromatic broth while retaining pleasant al dente tooth.",
    ingredients: [
      { name: "Baby Purple Poivrade Artichokes", origin: "Provence, France" },
      { name: "Châteauneuf-du-Pape Blanc Broth", origin: "Rhône Valley" },
      { name: "Heirloom Nantes Carrots", origin: "Loire, France" },
      { name: "Fresh Lemon Thyme", origin: "Nocturne Greenhouse" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Domaine de Terrebrune Bandol Blanc",
      vintage: "2020",
      region: "Bandol, Provence",
      notes: "White peach, dried garrigue herbs, crushed sea stones, and crystalline tension.",
      glassPrice: 350,
      bottlePrice: 2700,
      grapeVarietal: "Clairette & Ugni Blanc"
    },
    prepMethod: "Slow cartouche braise & flash-fried crisp chips",
    flavorRadar: { umami: 7, richness: 6, smokiness: 3, crispness: 8, aroma: 9 },
    image: "/assets/images/artichokes_barigoule_1794293590309.jpg",
    isChefSignature: false,
    servingTemperature: "Warm"
  },
  {
    id: 'green-salad-8',
    name: "Wood-Roasted King Oyster Mushrooms & Tare Glaze",
    nativeTitle: "Pleurotes Eryngii Grillés au Tare Japonais et Furikake",
    course: 'starter',
    category: 'Greens & Salads',
    price: 450,
    description: "Thick scored cylinders of King Oyster mushrooms grilled over Binchotan coals, lacquered with aged tare reduction, crowned with sesame furikake, shiso blossom, and ginger emulsion.",
    culinaryNotes: "Scored in micro-diamonds to soak up the umami glaze. The firm flesh mirrors the succulent bite of diver scallops.",
    ingredients: [
      { name: "Organic King Oyster (Eryngii)", origin: "Kyoto, Japan" },
      { name: "10-Year Aged House Tare Glaze", origin: "Nocturne Hearth" },
      { name: "Toasted Black Sesame Furikake", origin: "Shizuoka, Japan" },
      { name: "Cold-Pressed Sesame Oil", origin: "Kyoto, Japan" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Domaine Dujac Morey-Saint-Denis Blanc",
      vintage: "2019",
      region: "Burgundy, France",
      notes: "Toasted almond, flint smoke, green orchard fruit, and laser focus.",
      glassPrice: 420,
      bottlePrice: 3300,
      grapeVarietal: "100% Chardonnay"
    },
    prepMethod: "Precision cross-hatch scoring & coal fire glazing",
    flavorRadar: { umami: 10, richness: 7, smokiness: 8, crispness: 7, aroma: 8 },
    image: "/assets/images/king_oyster_tare_1794293591537.jpg",
    isChefSignature: false,
    servingTemperature: "Hot"
  },
  {
    id: 'green-salad-9',
    name: "Crispy Sunchoke Velouté & Autumn Truffle Pearls",
    nativeTitle: "Velouté de Topinambour Croustillant aux Perles de Truffe",
    course: 'starter',
    category: 'Greens & Salads',
    price: 480,
    description: "Velvety puréed Jerusalem artichoke soup enriched with browned butter, topped with crispy sunchoke skin chips, Umbrian autumn truffle spheres, and cold-pressed hazelnut oil.",
    culinaryNotes: "Sunchokes are roasted in their skins until caramelized before being simmered in vegetable dashi and blended to silk.",
    ingredients: [
      { name: "Organic Jerusalem Artichokes", origin: "Petaluma Organic Farm" },
      { name: "Autumn Black Truffle", origin: "Umbria, Italy" },
      { name: "Cultured Alpine Brown Butter", origin: "France" },
      { name: "Cold-Pressed Piedmont Hazelnut Oil", origin: "Langhe, Italy" }
    ],
    dietary: ['GF', 'V'],
    winePairing: {
      name: "Meursault Domaine des Comtes Lafon",
      vintage: "2018",
      region: "Côte de Beaune, France",
      notes: "Hazelnut cream, smoky matchstick, ripe yellow apple, and boundless opulent depth.",
      glassPrice: 620,
      bottlePrice: 5100,
      grapeVarietal: "100% Chardonnay"
    },
    prepMethod: "Copper tureen service with tableside hazelnut oil swirl",
    flavorRadar: { umami: 9, richness: 8, smokiness: 4, crispness: 8, aroma: 10 },
    image: "/assets/images/sunchoke_veloute_1794293592885.jpg",
    isChefSignature: true,
    servingTemperature: "Warm"
  },
  {
    id: 'green-salad-10',
    name: "Winter Chicory, Treviso & Blood Orange Salad",
    nativeTitle: "Chicorée de Trévise aux Noix Torréfiées et Gorgonzola Dolce",
    course: 'starter',
    category: 'Greens & Salads',
    price: 430,
    description: "Crimson leaves of Treviso radicchio, Castelfranco chicory, and Belgian endive tossed with creamy Gorgonzola Dolce mousse, roasted candied pecans, and aged pomegranate vinaigrette.",
    culinaryNotes: "Bittersweet radicchio leaves are gently charred at the stem, providing dynamic contrast to rich Italian blue cheese cream.",
    ingredients: [
      { name: "Radicchio Rosso di Treviso IGP", origin: "Veneto, Italy" },
      { name: "Castelfranco Variegated Chicory", origin: "Treviso, Italy" },
      { name: "Gorgonzola Dolce DOP", origin: "Lombardy, Italy" },
      { name: "Smoked Georgia Pecans", origin: "Savannah, Georgia" }
    ],
    dietary: ['GF', 'V'],
    winePairing: {
      name: "Masi Costasera Amarone della Valpolicella Classico",
      vintage: "2016",
      region: "Veneto, Italy",
      notes: "Dried fig, dark cocoa, baked plum, and velvety sweet-savory warmth.",
      glassPrice: 460,
      bottlePrice: 3600,
      grapeVarietal: "Corvina, Rondinella & Molinara"
    },
    prepMethod: "Charred root tips & tableside cheese mousse dollop",
    flavorRadar: { umami: 8, richness: 8, smokiness: 4, crispness: 10, aroma: 9 },
    image: "/assets/images/chicory_treviso_salad_1794293592690.jpg",
    isChefSignature: false,
    servingTemperature: "Cool"
  },

  // ==========================================
  // 5. SWEET NOCTURNE (10 New Dishes)
  // ==========================================
  {
    id: 'sweet-nocturne-1',
    name: "Molten Guanaja Chocolate Fondant & Smoked Tonka",
    nativeTitle: "Fondant Coulant au Chocolat Guanaja et Fève Tonka Fumée",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 370,
    description: "70% Valrhona Guanaja dark chocolate cake with warm molten center, perfumed with grated Brazilian tonka bean, accompanied by house-churned smoked vanilla bean ice cream.",
    culinaryNotes: "Baked precisely 9 minutes so the outer shell forms a crisp crust while the core flows like warm satin ganache.",
    ingredients: [
      { name: "Valrhona Guanaja 70% Dark Chocolate", origin: "Tain-l'Hermitage, France" },
      { name: "Wild Amazonian Tonka Beans", origin: "Pará, Brazil" },
      { name: "Cold-Smoked Tahitian Vanilla Gelato", origin: "House Gelateria" },
      { name: "Fleur de Sel de Guérande", origin: "Brittany, France" }
    ],
    dietary: ['V', 'NF'],
    winePairing: {
      name: "Blandy's 10-Year Old Malmsey Madeira",
      vintage: "10-Yr",
      region: "Madeira, Portugal",
      notes: "Rich toffee, dark raisin, toasted coffee, and searing balancing acidity.",
      glassPrice: 340,
      bottlePrice: 2600,
      grapeVarietal: "100% Malvasia"
    },
    prepMethod: "Baked to order in copper ramekin with hot liquid heart",
    flavorRadar: { umami: 6, richness: 10, smokiness: 6, crispness: 6, aroma: 10 },
    image: "/assets/images/molten_guanaja_fondant_1794293633131.jpg",
    isChefSignature: true,
    servingTemperature: "Hot cake with chilled ice cream"
  },
  {
    id: 'sweet-nocturne-2',
    name: "Spiced Pinot Noir Poached Bosc Pear & Mascarpone",
    nativeTitle: "Poire Confite au Pinot Noir Épicé et Mousse de Mascarpone",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 340,
    description: "Whole Bosc pear slow-poached in spiced Gevrey-Chambertin Pinot Noir, star anise, and orange peel, served with whipped vanilla mascarpone espuma and spiced wine reduction caramel.",
    culinaryNotes: "Poached for 3 hours at 82°C until glowing ruby red to the core while retaining its tender pear silhouette.",
    ingredients: [
      { name: "Organic Bosc Pears", origin: "Hood River Valley, Oregon" },
      { name: "Burgundy Pinot Noir Infusion", origin: "Gevrey-Chambertin, France" },
      { name: "Artisanal Mascarpone", origin: "Lombardy, Italy" },
      { name: "Cinnamon Quills & Star Anise", origin: "Sri Lanka & Vietnam" }
    ],
    dietary: ['GF', 'V', 'NF'],
    winePairing: {
      name: "Château Coutet 1er Grand Cru Classé",
      vintage: "2015",
      region: "Barsac, Bordeaux",
      notes: "Orange blossom, beeswax, dried apricot, and piercing mineral lift.",
      glassPrice: 380,
      bottlePrice: 2900,
      grapeVarietal: "Sémillon & Sauvignon Blanc"
    },
    prepMethod: "Low-temperature wine infusion & siphon mascarpone foam",
    flavorRadar: { umami: 4, richness: 7, smokiness: 3, crispness: 5, aroma: 10 },
    image: "/assets/images/poached_bosc_pear_1794293633554.jpg",
    isChefSignature: false,
    servingTemperature: "Warm pear with cool mascarpone"
  },
  {
    id: 'sweet-nocturne-3',
    name: "Yuzu & Bergamot Tart & Torched Italian Meringue",
    nativeTitle: "Tartelette Yuzu et Bergamote à la Meringue Brûlée",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 330,
    description: "Buttery sweet sablé tart shell filled with tart Kochi yuzu and Calabrian bergamot curd, topped with glossy Italian meringue scorched by open fire, sprinkled with candied lime zest.",
    culinaryNotes: "The electrifying acidity of Japanese yuzu cuts through rich cultured French butter curd, crowned by pillowy caramel meringue.",
    ingredients: [
      { name: "Fresh Kochi Yuzu Juice", origin: "Shikoku, Japan" },
      { name: "Calabrian Bergamot Essence", origin: "Calabria, Italy" },
      { name: "AOC Poitou-Charentes Butter", origin: "France" },
      { name: "Organic Pasture Egg Meringue", origin: "House Pastry" }
    ],
    dietary: ['V', 'NF'],
    winePairing: {
      name: "Kracher Cuvée Beerenauslese",
      vintage: "2018",
      region: "Burgenland, Austria",
      notes: "Candied grapefruit, passion fruit, lime honey, and crystalline vibration.",
      glassPrice: 360,
      bottlePrice: 2700,
      grapeVarietal: "Welschriesling & Chardonnay"
    },
    prepMethod: "Fresh tart shell baking & tableside flame blowtorch scorch",
    flavorRadar: { umami: 3, richness: 7, smokiness: 4, crispness: 9, aroma: 10 },
    image: "/assets/images/yuzu_bergamot_tart_1794293634670.jpg",
    isChefSignature: false,
    servingTemperature: "Cool with warm meringue surface"
  },
  {
    id: 'sweet-nocturne-4',
    name: "Traditional Canelés de Bordeaux & Bourbon Sabayon",
    nativeTitle: "Canelés Croustillants de Bordeaux et Sabayon au Bourbon",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 320,
    description: "Trio of copper-mold baked canelés with mahogany beeswax crust and custardy rum center, accompanied by warm whipped bourbon vanilla sabayon and smoked sea salt caramel.",
    culinaryNotes: "Baked in genuine fluted copper molds coated with pure beeswax and clarified butter for supreme caramel crunch.",
    ingredients: [
      { name: "Dark Martinique Rhum Agricole", origin: "Martinique" },
      { name: "Grand Cru Bourbon Vanilla", origin: "Madagascar" },
      { name: "Local Organic Beeswax", origin: "Provence Apiaries" },
      { name: "Bourbon Barrel Aged Sabayon", origin: "House Pastry" }
    ],
    dietary: ['V', 'NF'],
    winePairing: {
      name: "Henriques & Henriques 15-Year Verdelho",
      vintage: "15-Yr",
      region: "Madeira, Portugal",
      notes: "Dried orange peel, roasted walnut, smoky caramel, and bracing dry acidity.",
      glassPrice: 350,
      bottlePrice: 2800,
      grapeVarietal: "100% Verdelho"
    },
    prepMethod: "Copper mold beeswax bake & tableside sabayon whisking",
    flavorRadar: { umami: 4, richness: 8, smokiness: 5, crispness: 10, aroma: 9 },
    image: "/assets/images/caneles_de_bordeaux_1794293635186.jpg",
    isChefSignature: false,
    servingTemperature: "Warm"
  },
  {
    id: 'sweet-nocturne-5',
    name: "Black Forest Nocturne Cylinder & Griotte Cherries",
    nativeTitle: "Cylindre Forêt-Noire aux Cerises Griottes et Kirsch Vieux",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 360,
    description: "Flourless dark chocolate biscuit rolled with Morello cherry confit, 72% Araguani chocolate mousse, steeped in aged Schwarzwald Kirschwasser, encased in edible chocolate glass.",
    culinaryNotes: "A dramatic contemporary reconstruction of the Black Forest classic featuring intense dark cocoa and wild sour cherry fruitiness.",
    ingredients: [
      { name: "Valrhona Araguani 72% Chocolate", origin: "Venezuela" },
      { name: "Wild Griotte Morello Cherries", origin: "Schwarzwald, Germany" },
      { name: "Vintage Reserve Kirschwasser", origin: "Black Forest, Germany" },
      { name: "Vanilla Bean Chantilly Cream", origin: "Normandy, France" }
    ],
    dietary: ['GF', 'V', 'NF'],
    winePairing: {
      name: "Dow's 20-Year Old Tawny Port",
      vintage: "NV",
      region: "Douro Valley, Portugal",
      notes: "Fig compote, toasted almond, chocolate toffee, and warming spirit finish.",
      glassPrice: 390,
      bottlePrice: 3100,
      grapeVarietal: "Touriga Nacional & Franca"
    },
    prepMethod: "Chocolate tempering & nitrogen-sprayed velvet flocking",
    flavorRadar: { umami: 5, richness: 9, smokiness: 3, crispness: 7, aroma: 10 },
    image: "/assets/images/black_forest_cylinder_1794293635223.jpg",
    isChefSignature: true,
    servingTemperature: "Chilled"
  },
  {
    id: 'sweet-nocturne-6',
    name: "Fig & Goat Cheese Panna Cotta & Lavender Honey",
    nativeTitle: "Panna Cotta au Chèvre Frais, Figues et Miel de Lavande",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 330,
    description: "Silky panna cotta infused with fresh Provençal goat cheese, topped with caramelized Black Mission fig compote, wild lavender honey syrup, and crisp walnut tuile.",
    culinaryNotes: "Balances gentle lactic goat cheese acidity against floral Provence lavender honey and jammy wood-roasted figs.",
    ingredients: [
      { name: "Artisanal Fresh Chèvre", origin: "Banone, Provence" },
      { name: "Black Mission Figs", origin: "Sonoma Valley" },
      { name: "Wild Lavender Blossom Honey", origin: "Valensole Plateau, France" },
      { name: "Grenoble Walnut Tuile", origin: "Grenoble, France" }
    ],
    dietary: ['GF', 'V'],
    winePairing: {
      name: "Château Doisy-Daëne Barsac 2ème Cru",
      vintage: "2016",
      region: "Bordeaux, France",
      notes: "Acacia blossom, lemon curd, candied ginger, and refreshing racy acid.",
      glassPrice: 370,
      bottlePrice: 2800,
      grapeVarietal: "Sémillon & Sauvignon Blanc"
    },
    prepMethod: "Slow gelatin setting & warm fig syrup drizzle",
    flavorRadar: { umami: 5, richness: 8, smokiness: 3, crispness: 6, aroma: 10 },
    image: "/assets/images/fig_panna_cotta_1794293649783.jpg",
    isChefSignature: false,
    servingTemperature: "Chilled with warm compote"
  },
  {
    id: 'sweet-nocturne-7',
    name: "Uji Matcha Soufflé Glacé & White Peach Gelée",
    nativeTitle: "Soufflé Glacé au Matcha d'Uji et Gelée de Pêche Blanche",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 350,
    description: "Frozen soufflé made with first-flush ceremonial Kyoto matcha, centered with molten white chocolate ganache, set upon a crystal layer of Yamanashi white peach gelée.",
    culinaryNotes: "Whipped pâte à bombe frozen at -18°C gives the sensation of a hot soufflé that instantly melts into creamy green tea sweetness.",
    ingredients: [
      { name: "Ceremonial First-Flush Uji Matcha", origin: "Kyoto, Japan" },
      { name: "Yamanashi White Peaches", origin: "Yamanashi, Japan" },
      { name: "Valrhona Ivoire White Chocolate", origin: "France" },
      { name: "Edible Gold Leaf Flecks", origin: "Kanazawa, Japan" }
    ],
    dietary: ['GF', 'V', 'NF'],
    winePairing: {
      name: "Umeshu Aged 10-Yr Single Cask",
      vintage: "10-Yr",
      region: "Wakayama, Japan",
      notes: "Ripe green plum, apricot kernel, almond blossom, and sweet-tart harmony.",
      glassPrice: 320,
      bottlePrice: 2300,
      grapeVarietal: "Nankou Ume Plum"
    },
    prepMethod: "Pâte à bombe blast freeze & mirror peach glaze",
    flavorRadar: { umami: 6, richness: 8, smokiness: 2, crispness: 6, aroma: 9 },
    image: "/assets/images/matcha_souffle_glace_1794293649591.jpg",
    isChefSignature: false,
    servingTemperature: "Frozen (-12°C)"
  },
  {
    id: 'sweet-nocturne-8',
    name: "Chestnut Mont Blanc & Smoked Truffle Gelato",
    nativeTitle: "Mont-Blanc aux Marrons d'Ardèche et Glace Truffée Fumée",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 360,
    description: "Delicate vermicelli strands of Ardèche chestnut purée piped over airy French meringue and black currant coulis, served with a scoop of smoked black truffle cream gelato.",
    culinaryNotes: "Wild sweet chestnuts from the mountainous Ardèche region provide a rich, earthy pastry texture balanced by tangy cassis reduction.",
    ingredients: [
      { name: "AOC Ardèche Chestnuts", origin: "Ardèche, France" },
      { name: "Black Winter Périgord Truffle", origin: "Dordogne, France" },
      { name: "Black Currant (Cassis) Reduction", origin: "Burgundy, France" },
      { name: "French Meringue Core", origin: "House Pastry" }
    ],
    dietary: ['GF', 'V', 'NF'],
    winePairing: {
      name: "Château de Fargues Sauternes",
      vintage: "2015",
      region: "Bordeaux, France",
      notes: "Honeycomb, saffron, caramelized quince, and monumental endless finish.",
      glassPrice: 520,
      bottlePrice: 4200,
      grapeVarietal: "80% Sémillon, 20% Sauvignon Blanc"
    },
    prepMethod: "Tableside chestnut vermicelli pressing & truffle gelato quenelle",
    flavorRadar: { umami: 7, richness: 9, smokiness: 5, crispness: 8, aroma: 10 },
    image: "/assets/images/chestnut_mont_blanc_1794293650900.jpg",
    isChefSignature: true,
    servingTemperature: "Chilled with cold gelato"
  },
  {
    id: 'sweet-nocturne-9',
    name: "Passionfruit & Coconut Vacherin & Crisp Meringue",
    nativeTitle: "Vacherin Exotique au Fruit de la Passion et Noix de Coco",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 330,
    description: "Crystalline shards of lime-dusted French meringue encasing tangy passionfruit sorbet, roasted coconut milk gelato, fresh mango cubes, and aromatic kaffir lime leaf snow.",
    culinaryNotes: "Ultralight dessert architecture that shatters delicately on the spoon, releasing bright tropical acidity to cleanse the palate.",
    ingredients: [
      { name: "Purple Passionfruit Coulis", origin: "Réunion Island" },
      { name: "Roasted Coconut Milk Gelato", origin: "House Gelateria" },
      { name: "Fresh Kaffir Lime Leaves", origin: "Greenhouse" },
      { name: "Crispy Lime Meringue Shards", origin: "Pastry Kitchen" }
    ],
    dietary: ['GF', 'V', 'NF'],
    winePairing: {
      name: "Moscato d'Asti Vietti 'Cascinetta'",
      vintage: "2021",
      region: "Piedmont, Italy",
      notes: "White peach, fresh orange blossom, gentle sparkle, and refreshing low-alcohol sweetness.",
      glassPrice: 260,
      bottlePrice: 1900,
      grapeVarietal: "100% Moscato Bianco"
    },
    prepMethod: "Assembled architectural shards & frozen nitrogen lime snow",
    flavorRadar: { umami: 2, richness: 6, smokiness: 1, crispness: 10, aroma: 10 },
    image: "/assets/images/passionfruit_vacherin_1794293651068.jpg",
    isChefSignature: false,
    servingTemperature: "Ice-Cold"
  },
  {
    id: 'sweet-nocturne-10',
    name: "Smoked Apple Tarte Tatin & Calvados Crème",
    nativeTitle: "Tarte Tatin Fumée aux Pommes et Crème au Calvados",
    course: 'dessert',
    category: 'Sweet Nocturne',
    price: 350,
    description: "Slow-caramelized Reinette apples smoked over applewood embers, inverted over crisp flaky puff pastry, served with warm Calvados apple brandy crème anglaise and smoked fleur de sel.",
    culinaryNotes: "Apples baked for 4 hours until deep mahogany translucent jewels, soaking up butter caramel before flash-smoking.",
    ingredients: [
      { name: "Heritage Reinette Apples", origin: "Normandy, France" },
      { name: "Calvados Pays d'Auge Hors d'Âge", origin: "Normandy, France" },
      { name: "AOC Normandy Cultured Butter", origin: "Isigny-sur-Mer" },
      { name: "Maldon Smoked Sea Salt", origin: "Essex, UK" }
    ],
    dietary: ['V', 'NF'],
    winePairing: {
      name: "Domaine Huet Vouvray Demi-Sec 'Clos du Bourg'",
      vintage: "2018",
      region: "Loire Valley, France",
      notes: "Baked golden apple, candied ginger, dried quince, and mineral honeycomb.",
      glassPrice: 390,
      bottlePrice: 3000,
      grapeVarietal: "100% Chenin Blanc"
    },
    prepMethod: "Cast-iron copper pan caramelization & tableside Calvados flambé",
    flavorRadar: { umami: 4, richness: 9, smokiness: 6, crispness: 8, aroma: 10 },
    image: "/assets/images/apple_tarte_tatin_1794293651351.jpg",
    isChefSignature: true,
    servingTemperature: "Warm tarte with cool Calvados cream"
  },

  // ==========================================
  // 6. EXQUISITE BEVERAGES (10 New Items)
  // ==========================================
  {
    id: 'exquisite-bev-1',
    name: "Smoked Cedar & Aged Plum Manhattan",
    nativeTitle: "Manhattan au Bois de Cèdre Fumé et Prune Umeboshi",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 330,
    description: "Nikka Coffey Grain Japanese Whisky, Antica Formula sweet vermouth, smoked Japanese umeboshi cordial, and cedar bitters, presented inside a smoke-filled cloche with brandied cherries.",
    culinaryNotes: "Smoked for 90 seconds under cherrywood smoke inside a hand-blown crystal cloche lifted tableside.",
    ingredients: [
      { name: "Nikka Coffey Grain Whisky", origin: "Miyagikyo, Japan" },
      { name: "Carpano Antica Formula Vermouth", origin: "Turin, Italy" },
      { name: "Aged Umeboshi Plum Cordial", origin: "Wakayama, Japan" },
      { name: "Japanese Cedar Smoke", origin: "Yoshino Cedar" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Spirit Reserve Pour",
      vintage: "Single Barrel",
      region: "Japan & Italy",
      notes: "Warm toffee, dark stone fruit, fragrant cedar smoke, and herbal complexity.",
      glassPrice: 330,
      bottlePrice: 2800,
      grapeVarietal: "Distilled Grain & Botanicals"
    },
    prepMethod: "Stirred over diamond ice & cloche smoke release",
    flavorRadar: { umami: 7, richness: 8, smokiness: 10, crispness: 6, aroma: 10 },
    image: "/assets/images/aged_plum_manhattan_1794293666403.jpg",
    isChefSignature: true,
    servingTemperature: "Chilled with aromatic cedar smoke"
  },
  {
    id: 'exquisite-bev-2',
    name: "Clarified Kyoto Matcha & Coconut Highball",
    nativeTitle: "Highball Clarifié au Matcha de Kyoto et Eau de Coco",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 290,
    description: "Milk-clarified highball of ceremonial Uji matcha, Ki No Bi Kyoto dry gin, roasted coconut water, yuzu citrus cordial, and charged sparkling mountain water over hand-cut ice pillar.",
    culinaryNotes: "Clarified through agar-agar filtration to create a crystal-clear jade glow with silky mouthfeel and zero powdery tannin.",
    ingredients: [
      { name: "Ki No Bi Artisanal Kyoto Gin", origin: "Kyoto, Japan" },
      { name: "First Flush Ceremonial Matcha", origin: "Uji, Japan" },
      { name: "Clarified Coconut Water", origin: "Thailand" },
      { name: "Fresh Kochi Yuzu Cordial", origin: "Shikoku, Japan" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Botanical Cocktail Reserve",
      vintage: "House Batch",
      region: "Kyoto",
      notes: "Ethereal green tea umami, crisp citrus sparkle, and smooth velvety finish.",
      glassPrice: 290,
      bottlePrice: 2100,
      grapeVarietal: "Botanical Gin & Tea"
    },
    prepMethod: "Milk clarification & hand-cut crystal pillar ice",
    flavorRadar: { umami: 7, richness: 5, smokiness: 2, crispness: 10, aroma: 9 },
    image: "/assets/images/matcha_coconut_highball_1794293667520.jpg",
    isChefSignature: false,
    servingTemperature: "Ice Cold"
  },
  {
    id: 'exquisite-bev-3',
    name: "Blood Orange & Wild Hibiscus Sparkling Aperitif",
    nativeTitle: "Apéritif Pétillant à l'Orange Sanguine et Hibiscus Sauvage",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 280,
    description: "Cold-pressed Sicilian Tarocco blood orange, Egyptian wild hibiscus flower nectar, French bitter gentian root, topped with vintage Grand Cru Champagne and edible red rose petals.",
    culinaryNotes: "Vibrant ruby-red effervescence pairing tart floral brightness with structured European bitter roots.",
    ingredients: [
      { name: "Tarocco Blood Orange Juice", origin: "Mount Etna, Sicily" },
      { name: "Organic Wild Hibiscus Calyx", origin: "Aswan, Egypt" },
      { name: "French Gentian Herbal Elixir", origin: "Auvergne, France" },
      { name: "Grand Cru Brut Champagne", origin: "Épernay, France" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Champagne Royale Cocktail Pour",
      vintage: "Brut NV",
      region: "Champagne",
      notes: "Ruby citrus sparkle, tart cranberry, wild florals, and persistent bubbles.",
      glassPrice: 280,
      bottlePrice: 2200,
      grapeVarietal: "Chardonnay & Pinot Noir"
    },
    prepMethod: "Shaken over ice & topped tableside with bubbly Champagne",
    flavorRadar: { umami: 3, richness: 4, smokiness: 1, crispness: 10, aroma: 10 },
    image: "/assets/images/blood_orange_aperitif_1794293667652.jpg",
    isChefSignature: false,
    servingTemperature: "Chilled in tall crystal flute"
  },
  {
    id: 'exquisite-bev-4',
    name: "Charred Rosemary & Ruby Grapefruit Mezcalita",
    nativeTitle: "Mezcalita Artisanale au Romarin Brûlé et Pamplemousse Rose",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 320,
    description: "Artisanal Oaxacan wild Tobalá Mezcal, fresh ruby red grapefruit juice, lime acid, organic agave nectar, and a smoking branch of botanical garden rosemary stamped with volcanic black salt.",
    culinaryNotes: "Tobalá wild agave roasted 5 days in underground volcanic rock pits gives deep flinty earthiness against citrus oil.",
    ingredients: [
      { name: "Wild Tobalá Artisanal Mezcal", origin: "Oaxaca, Mexico" },
      { name: "Fresh Ruby Red Grapefruit", origin: "Rio Grande, Texas" },
      { name: "Black Volcanic Lava Salt", origin: "Hawaii" },
      { name: "Torched Herb Rosemary Branch", origin: "Nocturne Terrace" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Agave Distillate Reserve",
      vintage: "Single Village",
      region: "Oaxaca",
      notes: "Smoked stone, grapefruit oil, herbal brushfire, and mineral salinity.",
      glassPrice: 320,
      bottlePrice: 2500,
      grapeVarietal: "Wild Tobalá Agave"
    },
    prepMethod: "Hand-shaken with tableside rosemary torching",
    flavorRadar: { umami: 6, richness: 6, smokiness: 10, crispness: 9, aroma: 10 },
    image: "/assets/images/rosemary_mezcalita_1794293667699.jpg",
    isChefSignature: true,
    servingTemperature: "On the rocks with smoke rim"
  },
  {
    id: 'exquisite-bev-5',
    name: "Espresso & Roasted Hojicha Smoked Martini",
    nativeTitle: "Martini au Café Espresso Fumé et Thé Hojicha Torréfié",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 310,
    description: "Double ristretto extracted from single-estate Ethiopian Yirgacheffe beans, Kyusu-roasted Kyoto Hojicha green tea liqueur, Grey Goose vodka, and Madagascar vanilla bean mist.",
    culinaryNotes: "Cold-infused hojicha brings toasted barley and nut aromas that soften the bright floral acidity of Ethiopian espresso.",
    ingredients: [
      { name: "Single-Estate Ethiopian Yirgacheffe", origin: "Gedeo Zone, Ethiopia" },
      { name: "House Roasted Hojicha Liqueur", origin: "Kyoto, Japan" },
      { name: "Grey Goose Vodka", origin: "Cognac, France" },
      { name: "Tahitian Vanilla Hydrosol", origin: "French Polynesia" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Digestif Reserve Martini",
      vintage: "House Blend",
      region: "Nocturne Bar",
      notes: "Dark roasted cacao, nutty hazelnut foam, and warming spirit finish.",
      glassPrice: 310,
      bottlePrice: 2400,
      grapeVarietal: "Distilled Spirits & Roasted Botanicals"
    },
    prepMethod: "Hard shake with nitro foam & cold vanilla mist",
    flavorRadar: { umami: 7, richness: 8, smokiness: 7, crispness: 6, aroma: 10 },
    image: "/assets/images/espresso_hojicha_martini_1794293681633.jpg",
    isChefSignature: false,
    servingTemperature: "Frost-cold in chilled coupe"
  },
  {
    id: 'exquisite-bev-6',
    name: "French Alpine Génépi & Wild Pine Needle Mist",
    nativeTitle: "Élixir des Alpes au Génépi Sauvage et Brume de Pin",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 340,
    description: "Wild-foraged French Alpine Artemisia génépi liqueur, Chartreuse Green VEP, lemon balm cordial, and soda, spritzed tableside with atomized Swiss stone pine hydrosol.",
    culinaryNotes: "Hand-picked above 2,200m elevation in the Savoy Alps. Delivers rare alpine herbal freshness and medicinal chamomile sweetness.",
    ingredients: [
      { name: "Wild Mountain Génépi des Alpes", origin: "Savoie, France" },
      { name: "Chartreuse Verte V.E.P. (Aged in Oak)", origin: "Voiron, France" },
      { name: "Stone Pine (Arolla) Hydrosol", origin: "Swiss Alps" },
      { name: "Sparkling Mountain Aquifer Water", origin: "Evian, France" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Alpine Monastic Herbal Reserve",
      vintage: "VEP Oak Aged",
      region: "Savoy Alps",
      notes: "Alpine meadow flowers, spearmint, damp forest pine, and licorice honey.",
      glassPrice: 340,
      bottlePrice: 3600,
      grapeVarietal: "130 Secret Monastic Herbs"
    },
    prepMethod: "Crystal mixing glass stir & tableside atomized pine spray",
    flavorRadar: { umami: 5, richness: 6, smokiness: 3, crispness: 9, aroma: 10 },
    image: "/assets/images/alpine_genepi_cocktail_1794293682300.jpg",
    isChefSignature: true,
    servingTemperature: "Chilled over hand-carved ice sphere"
  },
  {
    id: 'exquisite-bev-7',
    name: "Shiso & Green Apple Zero-Proof Hydrosol Fizz",
    nativeTitle: "Pétillant Botanique au Shiso Vert et Pomme Granny Smith",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 260,
    description: "Cold-distilled green shiso leaves, clarified crisp Granny Smith apple juice, elderflower essence, sudachi citrus acid, charged with carbonated spring water and shiso sugar rim.",
    culinaryNotes: "Rotary vacuum evaporation isolates delicate minty, basil-like shiso volatile oils without heating or alcohol.",
    ingredients: [
      { name: "Green Shiso Leaf Hydrosol", origin: "House Rotary Evaporator" },
      { name: "Clarified Granny Smith Apple", origin: "Normandy, France" },
      { name: "Tokushima Sudachi Citrus", origin: "Shikoku, Japan" },
      { name: "Wild Elderflower Cordial", origin: "Styria, Austria" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Zero-Proof Botanical Reserve",
      vintage: "Spring Batch",
      region: "Nocturne Lab",
      notes: "Crisp green orchard crunch, cooling herbal mint, and sparkling lively citrus.",
      glassPrice: 260,
      bottlePrice: 1800,
      grapeVarietal: "Distilled Botanicals"
    },
    prepMethod: "Rotovap cold vacuum distillation & carbonation fountain",
    flavorRadar: { umami: 4, richness: 3, smokiness: 1, crispness: 10, aroma: 9 },
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=1000&auto=format&fit=crop",
    isChefSignature: false,
    servingTemperature: "Ice Cold"
  },
  {
    id: 'exquisite-bev-8',
    name: "Black Truffle Old Fashioned & Maple Smoke",
    nativeTitle: "Old Fashioned à la Truffe Noire et Fumée d'Érable",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 360,
    description: "Michter's 10-Year Single Barrel Rye whiskey fat-washed with winter Périgord black truffle butter, barrel-aged maple syrup, charred aromatic bitters, served with a carved 24K gold ice block.",
    culinaryNotes: "Cold fat-washing traps the intoxicating fungal umami of black truffle into Kentucky rye without altering spirit clarity.",
    ingredients: [
      { name: "Michter's 10-Yr Single Barrel Rye", origin: "Louisville, Kentucky" },
      { name: "Périgord Black Truffle Fat-Wash", origin: "House Laboratory" },
      { name: "Wood-Fired Amber Maple Syrup", origin: "Quebec, Canada" },
      { name: "24-Karat Edible Gold Leaf", origin: "Kanazawa, Japan" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Prestige Single Barrel Pour",
      vintage: "10-Year Cask",
      region: "Kentucky",
      notes: "Earthy winter truffle, spicy rye grain, toasted vanilla maple, and campfire warmth.",
      glassPrice: 360,
      bottlePrice: 3400,
      grapeVarietal: "Rye & Corn Mash"
    },
    prepMethod: "Fat-washing & sugar maple wood smoking under cloche",
    flavorRadar: { umami: 9, richness: 8, smokiness: 9, crispness: 5, aroma: 10 },
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000&auto=format&fit=crop",
    isChefSignature: true,
    servingTemperature: "Chilled on hand-stamped crystal ice"
  },
  {
    id: 'exquisite-bev-9',
    name: "Yuzu & Sparkling Junmai Daiginjo Bellini",
    nativeTitle: "Bellini Impérial au Yuzu et Saké Pétillant Junmai Daiginjo",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 320,
    description: "Sparkling Junmai Daiginjo sake naturally bottle-fermented, stirred with white peach purée, Kochi yuzu zest, elderflower liqueur, and dusted with edible gold flakes.",
    culinaryNotes: "Made from Yamada Nishiki rice polished to 35%, yielding notes of cantaloupe melon, white floral blossom, and gentle fine natural bubbles.",
    ingredients: [
      { name: "Sparkling Junmai Daiginjo Sake", origin: "Yamaguchi, Japan" },
      { name: "White Peach Puree", origin: "Nagano, Japan" },
      { name: "Fresh Kochi Yuzu Peel", origin: "Shikoku, Japan" },
      { name: "Pure Edible 24K Gold Leaf", origin: "Japan" }
    ],
    dietary: ['GF', 'DF', 'V', 'VG', 'NF'],
    winePairing: {
      name: "Sake Grand Cru Selection",
      vintage: "Spring Ferment",
      region: "Yamaguchi",
      notes: "Sweet white melon, delicate effervescence, crystalline rice purity, and citrus snap.",
      glassPrice: 320,
      bottlePrice: 2600,
      grapeVarietal: "Yamada Nishiki Rice"
    },
    prepMethod: "Gentle folding in chilled crystal flute with gold flake suspension",
    flavorRadar: { umami: 6, richness: 4, smokiness: 1, crispness: 10, aroma: 9 },
    image: "/assets/images/yuzu_daiginjo_bellini_1794293682364.jpg",
    isChefSignature: false,
    servingTemperature: "Ice-Cold"
  },
  {
    id: 'exquisite-bev-10',
    name: "Vintage Pu-erh & Bitter Orange Smoked Toddy",
    nativeTitle: "Infusion Fumée au Thé Pu-erh Millésimé et Orange Amère",
    course: 'cocktail',
    category: 'Exquisite Beverages',
    price: 280,
    description: "20-year aged Yunnan wild arbor Pu-erh tea simmered with charred Seville bitter orange peel, wild mountain honey, star anise, smoked clove, and a splash of vintage Calvados.",
    culinaryNotes: "Served warm in hand-thrown black ceramic bowls, enveloping the guest in soothing forest-floor aromatics and rich caramelized citrus oils.",
    ingredients: [
      { name: "2004 Aged Wild Arbor Pu-erh", origin: "Yunnan, China" },
      { name: "Seville Bitter Orange Peels", origin: "Andalusia, Spain" },
      { name: "Wild Heather Honey", origin: "Scottish Highlands" },
      { name: "Calvados Pays d'Auge", origin: "Normandy, France" }
    ],
    dietary: ['GF', 'DF', 'V', 'NF'],
    winePairing: {
      name: "Aged Tea & Spirit Elixir",
      vintage: "20-Yr Aged",
      region: "Yunnan & Normandy",
      notes: "Damp petrichor, dark plum compote, toasted cedar, and comforting honey warmth.",
      glassPrice: 280,
      bottlePrice: 2200,
      grapeVarietal: "Camellia Sinensis & Cider Apples"
    },
    prepMethod: "Clay pot simmer & tableside ceramic bowl pour",
    flavorRadar: { umami: 8, richness: 7, smokiness: 8, crispness: 4, aroma: 10 },
    image: "/assets/images/smoked_puerh_toddy_1794293682903.jpg",
    isChefSignature: false,
    servingTemperature: "Warm in ceramic bowl"
  }
];
