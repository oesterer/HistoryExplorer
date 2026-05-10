const TIMELINE_START = -2000;
const TIMELINE_END = 2026;
const EVENT_WINDOW_YEARS = 75;
const EVENT_MARKER_WINDOW_YEARS = 1;
const VOYAGE_WINDOW_YEARS = 75;
const BOUNDARY_WINDOW_YEARS = 8;
const MAX_VISIBLE_EVENTS = 20;

const SOURCE_CATALOG = {
  britannicaWorldMaps: "Britannica: A Timeline of the World in 8 Maps",
  britannicaWorld: "Britannica: World History portal",
  britannicaTechnology: "Britannica: History of Technology Timeline",
  britannicaWwi: "Britannica: World War I Timeline",
  britannicaWwii: "Britannica: Timeline of World War II",
  britannicaColdWar: "Britannica: Cold War",
  britannicaJapan: "Britannica: History of Japan",
  britannicaChina: "Britannica: History of China",
  britannicaAustralia: "Britannica: History of Australia",
  britannicaNativeAmerican: "Britannica: Native American history",
  britannicaSwitzerland: "Britannica: History of Switzerland",
  wikidata: "Wikidata",
  worldHistoryCivilization: "World History Encyclopedia: Civilization timeline",
  worldHistoryScience: "World History Encyclopedia: Science timeline",
  historyWorld: "HISTORY: World History topics",
};

const EVENTS = [
  {
    id: "middle-kingdom-egypt",
    title: "Middle Kingdom Egypt",
    year: -2000,
    lat: 29.9792,
    lng: 31.1342,
    category: "politics",
    summary: "Egypt's Middle Kingdom consolidates royal power and expands influence along the Nile.",
    source: "britannicaWorldMaps",
  },
  {
    id: "babylonian-rise",
    title: "Rise of Babylon",
    year: -1894,
    lat: 32.5364,
    lng: 44.4209,
    category: "politics",
    summary: "Babylon emerges as a major Mesopotamian power under Amorite dynasties.",
    source: "britannicaWorld",
  },
  {
    id: "hammurabi",
    title: "Hammurabi rules Babylon",
    year: -1792,
    lat: 32.5364,
    lng: 44.4209,
    category: "people",
    summary: "Hammurabi's reign produces one of the ancient world's best-known legal codes.",
    source: "britannicaWorld",
  },
  {
    id: "hittite-empire",
    title: "Hittite Old Kingdom",
    year: -1650,
    lat: 40.0197,
    lng: 34.6153,
    category: "politics",
    summary: "The Hittites build a powerful Anatolian kingdom that later contests Egypt and Mitanni.",
    source: "britannicaWorld",
  },
  {
    id: "shang-dynasty",
    title: "Shang dynasty ascends",
    year: -1600,
    lat: 35.2397,
    lng: 113.2331,
    category: "politics",
    summary: "The Shang dynasty develops bronze-working, writing, and royal centers in northern China.",
    source: "britannicaWorldMaps",
  },
  {
    id: "minoan-civilization",
    title: "Minoan civilization flourishes",
    year: -1450,
    lat: 35.2401,
    lng: 24.8093,
    category: "politics",
    summary: "Minoan palace culture on Crete reaches a peak before later Mycenaean dominance.",
    source: "worldHistoryCivilization",
  },
  {
    id: "trojan-war-tradition",
    title: "Traditional era of the Trojan War",
    year: -1200,
    lat: 39.9577,
    lng: 26.2389,
    category: "conflict",
    summary: "Later Greek traditions place the Trojan War around the Late Bronze Age collapse.",
    source: "britannicaWorld",
  },
  {
    id: "olmec-civilization",
    title: "Olmec civilization flourishes",
    year: -1200,
    lat: 17.4847,
    lng: -92.0469,
    category: "politics",
    summary: "The Olmec become an influential early Mesoamerican civilization around the Gulf Coast.",
    source: "worldHistoryCivilization",
  },
  {
    id: "iron-age-technology",
    title: "Iron technology spreads",
    year: -1200,
    lat: 39.9,
    lng: 35.3,
    category: "people",
    summary: "Ironworking becomes increasingly important across parts of Eurasia and Africa.",
    source: "britannicaTechnology",
  },
  {
    id: "chavin-civilization",
    title: "Chavin civilization rises",
    year: -900,
    lat: -9.5928,
    lng: -77.1783,
    category: "politics",
    summary: "The Chavin culture becomes a major religious and artistic center in the central Andes.",
    source: "worldHistoryCivilization",
  },
  {
    id: "rome-founded",
    title: "Traditional founding of Rome",
    year: -753,
    lat: 41.9028,
    lng: 12.4964,
    category: "politics",
    summary: "Roman tradition dates the city's founding to 753 BC.",
    source: "britannicaWorld",
  },
  {
    id: "ashurbanipal-library",
    title: "Ashurbanipal's library at Nineveh",
    year: -650,
    lat: 36.3594,
    lng: 43.1529,
    category: "people",
    summary: "A major collection of clay tablets is assembled at Nineveh, preserving Mesopotamian scholarship.",
    source: "worldHistoryScience",
  },
  {
    id: "persian-empire",
    title: "Achaemenid Persian Empire",
    year: -550,
    lat: 30.1939,
    lng: 53.1676,
    category: "politics",
    summary: "Cyrus the Great begins building one of the largest empires of the ancient world.",
    source: "britannicaWorld",
  },
  {
    id: "thales-eclipse",
    title: "Eclipse associated with Thales",
    year: -585,
    lat: 39.8,
    lng: 35.0,
    category: "people",
    summary: "A solar eclipse is linked by tradition to the end of a battle between Media and Lydia.",
    source: "worldHistoryScience",
  },
  {
    id: "athenian-democracy",
    title: "Cleisthenes reforms Athens",
    year: -508,
    lat: 37.9838,
    lng: 23.7275,
    category: "politics",
    summary: "Political reforms in Athens help establish institutions associated with ancient democracy.",
    source: "britannicaWorld",
  },
  {
    id: "marathon",
    title: "Battle of Marathon",
    year: -490,
    lat: 38.1536,
    lng: 23.9628,
    category: "conflict",
    summary: "Athens and Plataea defeat a Persian invasion force in mainland Greece.",
    source: "britannicaWorld",
  },
  {
    id: "alexander",
    title: "Alexander enters Asia",
    year: -334,
    lat: 40.1885,
    lng: 26.3606,
    category: "people",
    summary: "Alexander III of Macedon begins his campaign against the Persian Empire.",
    source: "britannicaWorld",
  },
  {
    id: "maurya-empire",
    title: "Maurya Empire founded",
    year: -322,
    lat: 25.5941,
    lng: 85.1376,
    category: "politics",
    summary: "Chandragupta Maurya establishes a major empire across northern India.",
    source: "britannicaWorld",
  },
  {
    id: "qin-unification",
    title: "Qin unifies China",
    year: -221,
    lat: 34.3416,
    lng: 108.9398,
    category: "politics",
    summary: "Qin Shi Huang unifies major warring states and becomes China's first emperor.",
    source: "britannicaWorld",
  },
  {
    id: "han-dynasty",
    title: "Han dynasty begins",
    year: -202,
    lat: 34.3416,
    lng: 108.9398,
    category: "politics",
    summary: "The Han dynasty begins a long period of imperial consolidation in China.",
    source: "britannicaWorld",
  },
  {
    id: "caesar",
    title: "Julius Caesar assassinated",
    year: -44,
    lat: 41.8955,
    lng: 12.4823,
    category: "people",
    summary: "Caesar's assassination accelerates the end of the Roman Republic.",
    source: "britannicaWorld",
  },
  {
    id: "roman-empire",
    title: "Roman Empire established",
    year: -27,
    lat: 41.9028,
    lng: 12.4964,
    category: "politics",
    summary: "Octavian becomes Augustus, marking the start of imperial rule in Rome.",
    source: "britannicaWorld",
  },
  {
    id: "pompeii-eruption",
    title: "Vesuvius buries Pompeii",
    year: 79,
    lat: 40.7497,
    lng: 14.4869,
    category: "people",
    summary: "The eruption of Mount Vesuvius destroys Pompeii and Herculaneum.",
    source: "britannicaWorld",
  },
  {
    id: "edict-of-milan",
    title: "Edict of Milan",
    year: 313,
    lat: 45.4642,
    lng: 9.19,
    category: "politics",
    summary: "Constantine and Licinius proclaim toleration for Christianity in the Roman Empire.",
    source: "britannicaWorldMaps",
  },
  {
    id: "constantinople",
    title: "Constantinople founded",
    year: 330,
    lat: 41.0082,
    lng: 28.9784,
    category: "politics",
    summary: "Constantine refounds Byzantium as Constantinople, a new imperial capital.",
    source: "britannicaWorldMaps",
  },
  {
    id: "western-rome-falls",
    title: "Western Roman Empire falls",
    year: 476,
    lat: 45.4384,
    lng: 12.3185,
    category: "politics",
    summary: "The deposition of Romulus Augustulus becomes a conventional marker for the fall of the Western Roman Empire.",
    source: "britannicaWorld",
  },
  {
    id: "chichen-itza-settled",
    title: "Chichen Itza grows",
    year: 500,
    lat: 20.6843,
    lng: -88.5678,
    category: "politics",
    summary: "Chichen Itza develops into a major Maya center in the Yucatan.",
    source: "britannicaWorldMaps",
  },
  {
    id: "islamic-calendar",
    title: "Hijra",
    year: 622,
    lat: 24.47,
    lng: 39.61,
    category: "people",
    summary: "Muhammad's migration from Mecca to Medina becomes the starting point of the Islamic calendar.",
    source: "britannicaWorldMaps",
  },
  {
    id: "ghana-empire",
    title: "Ghana Empire trading power",
    year: 800,
    lat: 15.5,
    lng: -8.0,
    category: "politics",
    summary: "Ghana becomes an influential West African trading empire.",
    source: "britannicaWorldMaps",
  },
  {
    id: "gunpowder",
    title: "Gunpowder appears in China",
    year: 850,
    lat: 34.3416,
    lng: 108.9398,
    category: "people",
    summary: "Gunpowder emerges as one of the most consequential technologies in world history.",
    source: "britannicaTechnology",
  },
  {
    id: "battle-of-hastings",
    title: "Battle of Hastings",
    year: 1066,
    lat: 50.9119,
    lng: 0.4871,
    category: "conflict",
    summary: "Norman victory transforms English politics, landholding, and culture.",
    source: "britannicaWorldMaps",
  },
  {
    id: "angkor-wat",
    title: "Angkor Wat constructed",
    year: 1120,
    lat: 13.4125,
    lng: 103.867,
    category: "politics",
    summary: "The Khmer Empire builds Angkor Wat, one of the world's largest religious monuments.",
    source: "britannicaWorldMaps",
  },
  {
    id: "magna-carta",
    title: "Magna Carta sealed",
    year: 1215,
    lat: 51.4446,
    lng: -0.5653,
    category: "politics",
    summary: "English barons force King John to accept limits on royal power at Runnymede.",
    source: "britannicaWorld",
  },
  {
    id: "great-zimbabwe",
    title: "Great Zimbabwe flourishes",
    year: 1250,
    lat: -20.2675,
    lng: 30.9338,
    category: "politics",
    summary: "Great Zimbabwe becomes a major stone-built center connected to regional trade.",
    source: "britannicaWorldMaps",
  },
  {
    id: "baghdad-1258",
    title: "Mongols sack Baghdad",
    year: 1258,
    lat: 33.3152,
    lng: 44.3661,
    category: "conflict",
    summary: "The Mongol capture of Baghdad ends the Abbasid caliphate's rule from the city.",
    source: "historyWorld",
  },
  {
    id: "black-death",
    title: "Black Death reaches Europe",
    year: 1347,
    lat: 45.4408,
    lng: 12.3155,
    category: "people",
    summary: "Pandemic plague spreads through Europe after devastating parts of Asia and the Mediterranean.",
    source: "historyWorld",
  },
  {
    id: "gutenberg-printing",
    title: "Gutenberg printing press",
    year: 1455,
    lat: 49.9929,
    lng: 8.2473,
    category: "people",
    summary: "Movable-type printing accelerates the spread of books and ideas in Europe.",
    source: "britannicaTechnology",
  },
  {
    id: "constantinople-falls",
    title: "Fall of Constantinople",
    year: 1453,
    lat: 41.0082,
    lng: 28.9784,
    category: "conflict",
    summary: "The Ottoman conquest ends the Byzantine Empire.",
    source: "britannicaWorld",
  },
  {
    id: "columbus",
    title: "Columbus reaches the Caribbean",
    year: 1492,
    lat: 24.0466,
    lng: -74.5249,
    category: "voyage",
    summary: "The 1492 Atlantic crossing intensifies sustained contact between Europe and the Americas.",
    source: "historyWorld",
  },
  {
    id: "protestant-reformation",
    title: "Protestant Reformation begins",
    year: 1517,
    lat: 51.8661,
    lng: 12.6484,
    category: "politics",
    summary: "Martin Luther's challenge to church authority helps launch the Protestant Reformation.",
    source: "historyWorld",
  },
  {
    id: "copernicus",
    title: "Copernicus publishes heliocentric model",
    year: 1543,
    lat: 54.352,
    lng: 18.6466,
    category: "people",
    summary: "Copernicus's work helps transform European astronomy and natural philosophy.",
    source: "historyWorld",
  },
  {
    id: "jamestown",
    title: "Jamestown founded",
    year: 1607,
    lat: 37.2116,
    lng: -76.7752,
    category: "politics",
    summary: "English colonists establish Jamestown, the first permanent English settlement in North America.",
    source: "historyWorld",
  },
  {
    id: "thirty-years-war",
    title: "Thirty Years' War begins",
    year: 1618,
    lat: 50.0755,
    lng: 14.4378,
    category: "conflict",
    summary: "War begins in central Europe and expands into a destructive continental conflict.",
    source: "britannicaWorld",
  },
  {
    id: "glorious-revolution",
    title: "Glorious Revolution",
    year: 1688,
    lat: 51.5072,
    lng: -0.1276,
    category: "politics",
    summary: "The replacement of James II reshapes constitutional monarchy in England.",
    source: "britannicaWorld",
  },
  {
    id: "steam-engine",
    title: "Watt steam engine",
    year: 1765,
    lat: 55.8642,
    lng: -4.2518,
    category: "people",
    summary: "James Watt's steam engine improvements become central to industrialization.",
    source: "britannicaTechnology",
  },
  {
    id: "american-independence",
    title: "United States declares independence",
    year: 1776,
    lat: 39.9526,
    lng: -75.1652,
    category: "politics",
    summary: "The Continental Congress adopts the Declaration of Independence in Philadelphia.",
    source: "historyWorld",
  },
  {
    id: "french-revolution",
    title: "French Revolution begins",
    year: 1789,
    lat: 48.8566,
    lng: 2.3522,
    category: "politics",
    summary: "Revolution in France transforms European politics and ideas of citizenship.",
    source: "britannicaWorld",
  },
  {
    id: "haitian-revolution",
    title: "Haitian Revolution begins",
    year: 1791,
    lat: 19.7599,
    lng: -72.2,
    category: "politics",
    summary: "Revolution in Saint-Domingue leads to the abolition of slavery and Haitian independence.",
    source: "britannicaWorld",
  },
  {
    id: "morse-telegraph",
    title: "First Morse telegraph message",
    year: 1844,
    lat: 39.2904,
    lng: -76.6122,
    category: "people",
    summary: "Samuel Morse sends a long-distance telegraph message between Washington and Baltimore.",
    source: "britannicaTechnology",
  },
  {
    id: "meiji-restoration",
    title: "Meiji Restoration",
    year: 1868,
    lat: 35.6762,
    lng: 139.6503,
    category: "politics",
    summary: "Japan restores imperial rule and begins rapid state-led modernization.",
    source: "britannicaWorld",
  },
  {
    id: "berlin-conference",
    title: "Berlin Conference",
    year: 1884,
    lat: 52.52,
    lng: 13.405,
    category: "politics",
    summary: "European powers formalize rules for colonial claims in Africa.",
    source: "historyWorld",
  },
  {
    id: "wwi",
    title: "World War I begins",
    year: 1914,
    lat: 43.8563,
    lng: 18.4131,
    category: "conflict",
    summary: "The assassination in Sarajevo helps trigger a global war among major powers.",
    source: "britannicaWwi",
  },
  {
    id: "russian-revolution",
    title: "Russian Revolution",
    year: 1917,
    lat: 59.9311,
    lng: 30.3609,
    category: "politics",
    summary: "Revolutionary upheaval topples the Romanov monarchy and brings the Bolsheviks to power.",
    source: "historyWorld",
  },
  {
    id: "wwii",
    title: "World War II begins in Europe",
    year: 1939,
    lat: 52.2297,
    lng: 21.0122,
    category: "conflict",
    summary: "Germany invades Poland, beginning the European phase of World War II.",
    source: "britannicaWwii",
  },
  {
    id: "india-independence",
    title: "India becomes independent",
    year: 1947,
    lat: 28.6139,
    lng: 77.209,
    category: "politics",
    summary: "British India is partitioned as India and Pakistan become independent states.",
    source: "historyWorld",
  },
  {
    id: "prc-founded",
    title: "People's Republic of China founded",
    year: 1949,
    lat: 39.9042,
    lng: 116.4074,
    category: "politics",
    summary: "Mao Zedong proclaims the People's Republic of China in Beijing.",
    source: "britannicaColdWar",
  },
  {
    id: "sputnik",
    title: "Sputnik 1 launched",
    year: 1957,
    lat: 45.965,
    lng: 63.305,
    category: "people",
    summary: "The Soviet Union launches the first artificial satellite, opening the space age.",
    source: "britannicaTechnology",
  },
  {
    id: "moon-landing",
    title: "Apollo 11 Moon landing",
    year: 1969,
    lat: 28.5729,
    lng: -80.649,
    category: "people",
    summary: "Apollo 11 launches from Florida and lands the first humans on the Moon.",
    source: "historyWorld",
  },
  {
    id: "berlin-wall-falls",
    title: "Berlin Wall falls",
    year: 1989,
    lat: 52.5163,
    lng: 13.3777,
    category: "politics",
    summary: "The opening of the Berlin Wall becomes a defining moment in the end of the Cold War.",
    source: "britannicaColdWar",
  },
  {
    id: "soviet-union-dissolves",
    title: "Soviet Union dissolves",
    year: 1991,
    lat: 55.7558,
    lng: 37.6173,
    category: "politics",
    summary: "The Soviet Union breaks apart, ending the Cold War geopolitical order.",
    source: "britannicaColdWar",
  },
  {
    id: "mycenaean-civilization",
    title: "Mycenaean civilization flourishes",
    year: -1400,
    lat: 37.7309,
    lng: 22.7564,
    category: "politics",
    summary: "Mycenaean palace states dominate parts of mainland Greece and the Aegean.",
    source: "worldHistoryCivilization",
  },
  {
    id: "phoenician-expansion",
    title: "Phoenician maritime expansion",
    year: -1000,
    lat: 33.8938,
    lng: 35.5018,
    category: "voyage",
    summary: "Phoenician cities expand trade networks around the Mediterranean.",
    source: "britannicaWorld",
  },
  {
    id: "neo-assyrian-empire",
    title: "Neo-Assyrian Empire expands",
    year: -911,
    lat: 36.3594,
    lng: 43.1529,
    category: "conflict",
    summary: "Assyria becomes a dominant imperial power in the ancient Near East.",
    source: "britannicaWorld",
  },
  {
    id: "buddha-life",
    title: "Life of the Buddha",
    year: -500,
    lat: 27.6792,
    lng: 83.507,
    category: "people",
    summary: "Siddhartha Gautama's teachings become the foundation of Buddhism.",
    source: "britannicaWorld",
  },
  {
    id: "peloponnesian-war",
    title: "Peloponnesian War begins",
    year: -431,
    lat: 37.9838,
    lng: 23.7275,
    category: "conflict",
    summary: "Athens and Sparta enter a long war that reshapes the Greek world.",
    source: "britannicaWorld",
  },
  {
    id: "alexandria-founded",
    title: "Alexandria founded",
    year: -331,
    lat: 31.2001,
    lng: 29.9187,
    category: "politics",
    summary: "Alexander founds Alexandria, which becomes a major Hellenistic center of learning and trade.",
    source: "britannicaWorld",
  },
  {
    id: "punic-wars-begin",
    title: "First Punic War begins",
    year: -264,
    lat: 38.1157,
    lng: 13.3615,
    category: "conflict",
    summary: "Rome and Carthage begin a series of wars for control of the western Mediterranean.",
    source: "britannicaWorld",
  },
  {
    id: "silk-road-han",
    title: "Han diplomacy opens Silk Road",
    year: -130,
    lat: 34.3416,
    lng: 108.9398,
    category: "voyage",
    summary: "Han envoys and trade links help connect China with Central Asia and farther west.",
    source: "britannicaWorld",
  },
  {
    id: "teotihuacan",
    title: "Teotihuacan flourishes",
    year: 200,
    lat: 19.6925,
    lng: -98.8438,
    category: "politics",
    summary: "Teotihuacan grows into one of the largest and most influential cities in the Americas.",
    source: "historyWorld",
  },
  {
    id: "council-of-nicaea",
    title: "Council of Nicaea",
    year: 325,
    lat: 40.4286,
    lng: 29.7193,
    category: "politics",
    summary: "Christian bishops meet under Constantine to address doctrine and church unity.",
    source: "britannicaWorld",
  },
  {
    id: "justinian-plague",
    title: "Plague of Justinian",
    year: 541,
    lat: 41.0082,
    lng: 28.9784,
    category: "people",
    summary: "Pandemic plague strikes the Byzantine Empire and wider Mediterranean world.",
    source: "historyWorld",
  },
  {
    id: "tang-dynasty",
    title: "Tang dynasty begins",
    year: 618,
    lat: 34.3416,
    lng: 108.9398,
    category: "politics",
    summary: "The Tang dynasty begins a period of imperial expansion and cosmopolitan culture in China.",
    source: "britannicaWorld",
  },
  {
    id: "carolingian-coronation",
    title: "Charlemagne crowned emperor",
    year: 800,
    lat: 41.9028,
    lng: 12.4964,
    category: "politics",
    summary: "Charlemagne's imperial coronation links Frankish power with Roman imperial tradition.",
    source: "britannicaWorld",
  },
  {
    id: "viking-raid-lindisfarne",
    title: "Viking raid on Lindisfarne",
    year: 793,
    lat: 55.669,
    lng: -1.802,
    category: "conflict",
    summary: "The raid on Lindisfarne becomes a conventional marker for the Viking Age in western Europe.",
    source: "historyWorld",
  },
  {
    id: "seljuk-manzikert",
    title: "Battle of Manzikert",
    year: 1071,
    lat: 39.1458,
    lng: 42.5401,
    category: "conflict",
    summary: "Seljuk victory over Byzantium opens Anatolia to deeper Turkish influence.",
    source: "britannicaWorld",
  },
  {
    id: "first-crusade",
    title: "First Crusade captures Jerusalem",
    year: 1099,
    lat: 31.7683,
    lng: 35.2137,
    category: "conflict",
    summary: "Crusader armies capture Jerusalem and establish Latin states in the Levant.",
    source: "historyWorld",
  },
  {
    id: "mongol-empire",
    title: "Genghis Khan unites Mongol tribes",
    year: 1206,
    lat: 47.8864,
    lng: 106.9057,
    category: "politics",
    summary: "Temujin becomes Genghis Khan, launching the expansion of the Mongol Empire.",
    source: "britannicaWorld",
  },
  {
    id: "aztec-tenochtitlan",
    title: "Tenochtitlan founded",
    year: 1325,
    lat: 19.4326,
    lng: -99.1332,
    category: "politics",
    summary: "The Mexica found Tenochtitlan, later the center of the Aztec Empire.",
    source: "worldHistoryCivilization",
  },
  {
    id: "inca-empire",
    title: "Inca Empire expands",
    year: 1438,
    lat: -13.5319,
    lng: -71.9675,
    category: "politics",
    summary: "Pachacuti's reign begins major Inca imperial expansion in the Andes.",
    source: "worldHistoryCivilization",
  },
  {
    id: "machu-picchu",
    title: "Machu Picchu built",
    year: 1450,
    lat: -13.1631,
    lng: -72.545,
    category: "politics",
    summary: "The Inca construct the royal estate now known as Machu Picchu.",
    source: "britannicaWorldMaps",
  },
  {
    id: "aztec-conquest",
    title: "Spanish conquest of Tenochtitlan",
    year: 1521,
    lat: 19.4326,
    lng: -99.1332,
    category: "conflict",
    summary: "Spanish and Indigenous allied forces capture Tenochtitlan, ending the Aztec Empire.",
    source: "historyWorld",
  },
  {
    id: "mughal-empire",
    title: "Mughal Empire founded",
    year: 1526,
    lat: 29.3909,
    lng: 76.9635,
    category: "politics",
    summary: "Babur's victory at Panipat begins Mughal rule in northern India.",
    source: "britannicaWorld",
  },
  {
    id: "inca-conquest",
    title: "Spanish conquest of the Inca",
    year: 1532,
    lat: -7.1617,
    lng: -78.5128,
    category: "conflict",
    summary: "Pizarro captures Atahualpa at Cajamarca during the Spanish conquest of the Inca Empire.",
    source: "historyWorld",
  },
  {
    id: "qing-dynasty",
    title: "Qing dynasty begins",
    year: 1644,
    lat: 39.9042,
    lng: 116.4074,
    category: "politics",
    summary: "Manchu forces enter Beijing and establish Qing rule over China.",
    source: "britannicaWorld",
  },
  {
    id: "newton-principia",
    title: "Newton publishes Principia",
    year: 1687,
    lat: 52.2053,
    lng: 0.1218,
    category: "people",
    summary: "Newton's Principia formulates laws of motion and universal gravitation.",
    source: "historyWorld",
  },
  {
    id: "seven-years-war",
    title: "Seven Years' War begins",
    year: 1756,
    lat: 50.0755,
    lng: 14.4378,
    category: "conflict",
    summary: "A global conflict begins among European powers and their colonial empires.",
    source: "britannicaWorld",
  },
  {
    id: "railways",
    title: "Railway technology develops",
    year: 1804,
    lat: 51.7465,
    lng: -3.378,
    category: "people",
    summary: "Early steam railway development marks a major change in transport technology.",
    source: "britannicaTechnology",
  },
  {
    id: "latin-american-independence",
    title: "Latin American independence wars",
    year: 1810,
    lat: 4.711,
    lng: -74.0721,
    category: "politics",
    summary: "Independence movements spread across Spanish America in the early nineteenth century.",
    source: "historyWorld",
  },
  {
    id: "photography",
    title: "Photography invented",
    year: 1826,
    lat: 46.782,
    lng: 4.853,
    category: "people",
    summary: "Early photographic processes create durable images and transform visual documentation.",
    source: "britannicaTechnology",
  },
  {
    id: "revolutions-1848",
    title: "Revolutions of 1848",
    year: 1848,
    lat: 48.8566,
    lng: 2.3522,
    category: "politics",
    summary: "Revolutionary movements sweep across much of Europe.",
    source: "britannicaWorld",
  },
  {
    id: "american-civil-war",
    title: "American Civil War begins",
    year: 1861,
    lat: 32.7523,
    lng: -79.8747,
    category: "conflict",
    summary: "Confederate forces fire on Fort Sumter, beginning the U.S. Civil War.",
    source: "historyWorld",
  },
  {
    id: "telephone",
    title: "First telephone call",
    year: 1876,
    lat: 42.3601,
    lng: -71.0589,
    category: "people",
    summary: "Alexander Graham Bell demonstrates practical voice transmission by telephone.",
    source: "britannicaTechnology",
  },
  {
    id: "electric-light",
    title: "Practical electric light",
    year: 1879,
    lat: 40.5684,
    lng: -74.4247,
    category: "people",
    summary: "Electric lighting becomes a transformative technology of modern urban life.",
    source: "britannicaTechnology",
  },
  {
    id: "boxer-rebellion",
    title: "Boxer Rebellion",
    year: 1900,
    lat: 39.9042,
    lng: 116.4074,
    category: "conflict",
    summary: "Anti-foreign uprising and international intervention convulse Qing China.",
    source: "historyWorld",
  },
  {
    id: "first-airplane",
    title: "Wright brothers fly",
    year: 1903,
    lat: 36.0163,
    lng: -75.6699,
    category: "people",
    summary: "The Wright brothers make controlled powered flights at Kitty Hawk.",
    source: "britannicaTechnology",
  },
  {
    id: "mexican-revolution",
    title: "Mexican Revolution begins",
    year: 1910,
    lat: 19.4326,
    lng: -99.1332,
    category: "politics",
    summary: "A revolutionary struggle begins against Porfirio Diaz's long rule.",
    source: "britannicaWorld",
  },
  {
    id: "ypres-gas",
    title: "Second Battle of Ypres",
    year: 1915,
    lat: 50.8514,
    lng: 2.8857,
    category: "conflict",
    summary: "Germany uses chlorine gas on a large scale, marking a new phase of chemical warfare.",
    source: "britannicaWwi",
  },
  {
    id: "treaty-versailles",
    title: "Treaty of Versailles signed",
    year: 1919,
    lat: 48.8049,
    lng: 2.1204,
    category: "politics",
    summary: "The peace treaty with Germany formally ends World War I and reshapes Europe.",
    source: "britannicaWwi",
  },
  {
    id: "great-depression",
    title: "Great Depression begins",
    year: 1929,
    lat: 40.7128,
    lng: -74.006,
    category: "people",
    summary: "A financial crash helps trigger a worldwide economic depression.",
    source: "historyWorld",
  },
  {
    id: "pearl-harbor",
    title: "Attack on Pearl Harbor",
    year: 1941,
    lat: 21.3445,
    lng: -157.9749,
    category: "conflict",
    summary: "Japan attacks Pearl Harbor, bringing the United States into World War II.",
    source: "britannicaWwii",
  },
  {
    id: "un-founded",
    title: "United Nations founded",
    year: 1945,
    lat: 37.7749,
    lng: -122.4194,
    category: "politics",
    summary: "The United Nations Charter enters into force after World War II.",
    source: "historyWorld",
  },
  {
    id: "atomic-bomb",
    title: "Atomic bombing of Hiroshima",
    year: 1945.6,
    lat: 34.3853,
    lng: 132.4553,
    category: "conflict",
    summary: "The United States uses an atomic bomb against Hiroshima near the end of World War II.",
    source: "britannicaWwii",
  },
  {
    id: "nato-founded",
    title: "NATO founded",
    year: 1949,
    lat: 38.9072,
    lng: -77.0369,
    category: "politics",
    summary: "Western allies form the North Atlantic Treaty Organization during the early Cold War.",
    source: "britannicaColdWar",
  },
  {
    id: "korean-war",
    title: "Korean War begins",
    year: 1950,
    lat: 37.5665,
    lng: 126.978,
    category: "conflict",
    summary: "North Korea invades South Korea, triggering a major Cold War conflict.",
    source: "britannicaColdWar",
  },
  {
    id: "warsaw-pact",
    title: "Warsaw Pact formed",
    year: 1955,
    lat: 52.2297,
    lng: 21.0122,
    category: "politics",
    summary: "The Soviet Union and allied states form a military alliance in eastern Europe.",
    source: "britannicaColdWar",
  },
  {
    id: "cuban-missile-crisis",
    title: "Cuban Missile Crisis",
    year: 1962,
    lat: 23.1136,
    lng: -82.3666,
    category: "politics",
    summary: "The United States and Soviet Union confront each other over missiles in Cuba.",
    source: "britannicaColdWar",
  },
  {
    id: "prague-spring",
    title: "Prague Spring crushed",
    year: 1968,
    lat: 50.0755,
    lng: 14.4378,
    category: "politics",
    summary: "Warsaw Pact forces invade Czechoslovakia to halt reform efforts.",
    source: "britannicaColdWar",
  },
  {
    id: "internet-origin",
    title: "Internet technology emerges",
    year: 1974,
    lat: 37.4419,
    lng: -122.143,
    category: "people",
    summary: "Networking research helps establish protocols that underpin the modern Internet.",
    source: "britannicaTechnology",
  },
  {
    id: "iranian-revolution",
    title: "Iranian Revolution",
    year: 1979,
    lat: 35.6892,
    lng: 51.389,
    category: "politics",
    summary: "Revolution topples Iran's monarchy and establishes the Islamic Republic.",
    source: "historyWorld",
  },
  {
    id: "tiananmen",
    title: "Tiananmen Square protests",
    year: 1989,
    lat: 39.9042,
    lng: 116.4074,
    category: "politics",
    summary: "Chinese authorities suppress pro-democracy demonstrations in Beijing.",
    source: "historyWorld",
  },
  {
    id: "gulf-war",
    title: "Gulf War begins",
    year: 1991,
    lat: 29.3759,
    lng: 47.9774,
    category: "conflict",
    summary: "A U.S.-led coalition fights Iraq after the invasion of Kuwait.",
    source: "historyWorld",
  },
  {
    id: "rwandan-genocide",
    title: "Rwandan genocide",
    year: 1994,
    lat: -1.9441,
    lng: 30.0619,
    category: "conflict",
    summary: "Genocide in Rwanda kills hundreds of thousands of people in a matter of months.",
    source: "historyWorld",
  },
  {
    id: "hong-kong-handover",
    title: "Hong Kong handover",
    year: 1997,
    lat: 22.3193,
    lng: 114.1694,
    category: "politics",
    summary: "The United Kingdom transfers Hong Kong to China under the one country, two systems framework.",
    source: "historyWorld",
  },
  {
    id: "sumerian-civilization",
    title: "Sumerian civilization flourishes",
    year: -2000,
    lat: 31.3222,
    lng: 45.6366,
    category: "politics",
    summary: "Sumerian city-states anchor one of the earliest urban civilizations in Mesopotamia.",
    source: "worldHistoryCivilization",
  },
  {
    id: "indus-valley-civilization",
    title: "Indus Valley civilization",
    year: -2000,
    lat: 27.3294,
    lng: 68.1389,
    category: "politics",
    summary: "Harappan urban centers such as Mohenjo-daro flourish across the Indus region.",
    source: "worldHistoryCivilization",
  },
  {
    id: "norte-chico",
    title: "Norte Chico civilization",
    year: -2000,
    lat: -10.8933,
    lng: -77.5206,
    category: "politics",
    summary: "Large ceremonial centers in coastal Peru mark one of the Americas' earliest complex societies.",
    source: "britannicaWorldMaps",
  },
  {
    id: "lapita-expansion",
    title: "Lapita expansion across Oceania",
    year: -1500,
    lat: -17.7134,
    lng: 178.065,
    category: "voyage",
    summary: "Austronesian voyagers associated with Lapita pottery expand through the western Pacific.",
    source: "britannicaWorld",
  },
  {
    id: "jomon-japan",
    title: "Jomon culture in Japan",
    year: -1000,
    lat: 35.6762,
    lng: 139.6503,
    category: "people",
    summary: "Jomon communities in the Japanese archipelago sustain long-running pottery and hunter-gatherer traditions.",
    source: "britannicaJapan",
  },
  {
    id: "mississippian-culture",
    title: "Mississippian culture emerges",
    year: 900,
    lat: 38.6556,
    lng: -90.0618,
    category: "politics",
    summary: "Mound-building societies develop large towns and regional networks in eastern North America.",
    source: "britannicaNativeAmerican",
  },
  {
    id: "cahokia-peak",
    title: "Cahokia reaches its peak",
    year: 1100,
    lat: 38.6556,
    lng: -90.0618,
    category: "politics",
    summary: "Cahokia becomes one of the largest urban centers north of Mexico before European contact.",
    source: "britannicaNativeAmerican",
  },
  {
    id: "iroquois-confederacy",
    title: "Haudenosaunee Confederacy forms",
    year: 1450,
    lat: 43.0481,
    lng: -76.1474,
    category: "politics",
    summary: "The Haudenosaunee political alliance joins multiple nations in what is now the northeastern United States.",
    source: "britannicaNativeAmerican",
  },
  {
    id: "swiss-confederation-1291",
    title: "Swiss Confederation tradition",
    year: 1291,
    lat: 46.8797,
    lng: 8.6386,
    category: "politics",
    summary: "Uri, Schwyz, and Unterwalden become associated with the founding tradition of the Swiss Confederation.",
    source: "britannicaSwitzerland",
  },
  {
    id: "battle-morgarten",
    title: "Battle of Morgarten",
    year: 1315,
    lat: 47.102,
    lng: 8.641,
    category: "conflict",
    summary: "Swiss forces defeat a Habsburg army, strengthening the early confederation's reputation.",
    source: "britannicaSwitzerland",
  },
  {
    id: "basel-university",
    title: "University of Basel founded",
    year: 1460,
    lat: 47.5596,
    lng: 7.5886,
    category: "people",
    summary: "Basel becomes an important Swiss center of learning and printing in the Renaissance.",
    source: "britannicaSwitzerland",
  },
  {
    id: "marignano-swiss",
    title: "Battle of Marignano",
    year: 1515,
    lat: 45.3167,
    lng: 9.3333,
    category: "conflict",
    summary: "Swiss defeat near Milan checks the confederation's expansion as a military power.",
    source: "britannicaSwitzerland",
  },
  {
    id: "zwingli-reformation",
    title: "Zwingli's Zurich Reformation",
    year: 1519,
    lat: 47.3769,
    lng: 8.5417,
    category: "politics",
    summary: "Huldrych Zwingli's preaching helps make Zurich a center of the Swiss Reformation.",
    source: "britannicaSwitzerland",
  },
  {
    id: "swiss-westphalia",
    title: "Swiss independence recognized",
    year: 1648,
    lat: 47.5596,
    lng: 7.5886,
    category: "politics",
    summary: "The Peace of Westphalia recognizes Swiss exemption from the Holy Roman Empire.",
    source: "britannicaSwitzerland",
  },
  {
    id: "swiss-neutrality-1815",
    title: "Swiss neutrality guaranteed",
    year: 1815,
    lat: 46.948,
    lng: 7.4474,
    category: "politics",
    summary: "European powers recognize and guarantee Switzerland's perpetual neutrality after the Napoleonic Wars.",
    source: "britannicaSwitzerland",
  },
  {
    id: "swiss-constitution-1848",
    title: "Swiss federal constitution",
    year: 1848,
    lat: 46.948,
    lng: 7.4474,
    category: "politics",
    summary: "Switzerland adopts a modern federal constitution with liberal political principles.",
    source: "britannicaSwitzerland",
  },
  {
    id: "yayoi-japan",
    title: "Yayoi culture spreads in Japan",
    year: -300,
    lat: 33.5904,
    lng: 130.4017,
    category: "people",
    summary: "Wet-rice agriculture and new social forms spread through parts of the Japanese archipelago.",
    source: "britannicaJapan",
  },
  {
    id: "yamato-japan",
    title: "Yamato state consolidates",
    year: 400,
    lat: 34.6851,
    lng: 135.8048,
    category: "politics",
    summary: "The Yamato court becomes a central power in early Japanese state formation.",
    source: "britannicaJapan",
  },
  {
    id: "taika-reforms",
    title: "Taika reforms",
    year: 645,
    lat: 34.6851,
    lng: 135.8048,
    category: "politics",
    summary: "Court reforms strengthen centralized institutions in early Japan.",
    source: "britannicaJapan",
  },
  {
    id: "heian-capital",
    title: "Heian-kyo becomes capital",
    year: 794,
    lat: 35.0116,
    lng: 135.7681,
    category: "politics",
    summary: "Japan's imperial capital moves to Heian-kyo, later Kyoto.",
    source: "britannicaJapan",
  },
  {
    id: "kamakura-shogunate",
    title: "Kamakura shogunate begins",
    year: 1192,
    lat: 35.3192,
    lng: 139.5467,
    category: "politics",
    summary: "Minamoto Yoritomo establishes Japan's first durable warrior government.",
    source: "britannicaJapan",
  },
  {
    id: "mongol-invasion-japan",
    title: "Mongol invasion of Japan repelled",
    year: 1281,
    lat: 33.5904,
    lng: 130.4017,
    category: "conflict",
    summary: "Japanese defenders and storms defeat a second Mongol invasion attempt.",
    source: "britannicaJapan",
  },
  {
    id: "tokugawa-shogunate",
    title: "Tokugawa shogunate begins",
    year: 1603,
    lat: 35.6762,
    lng: 139.6503,
    category: "politics",
    summary: "Tokugawa Ieyasu establishes a shogunate that governs Japan for more than two centuries.",
    source: "britannicaJapan",
  },
  {
    id: "sankin-kotai",
    title: "Alternate attendance in Tokugawa Japan",
    year: 1635,
    lat: 35.6762,
    lng: 139.6503,
    category: "politics",
    summary: "The Tokugawa regime formalizes daimyo attendance in Edo, reinforcing central control.",
    source: "britannicaJapan",
  },
  {
    id: "perry-japan",
    title: "Perry expedition reaches Japan",
    year: 1853,
    lat: 35.2813,
    lng: 139.6722,
    category: "voyage",
    summary: "U.S. Commodore Matthew Perry's arrival pressures Japan to open treaty relations.",
    source: "britannicaJapan",
  },
  {
    id: "sino-japanese-war",
    title: "First Sino-Japanese War",
    year: 1894,
    lat: 37.5665,
    lng: 126.978,
    category: "conflict",
    summary: "Japan defeats Qing China in a war over influence in Korea.",
    source: "britannicaJapan",
  },
  {
    id: "russo-japanese-war",
    title: "Russo-Japanese War begins",
    year: 1904,
    lat: 38.8,
    lng: 121.2667,
    category: "conflict",
    summary: "Japan and Russia fight over influence in Manchuria and Korea.",
    source: "britannicaJapan",
  },
  {
    id: "manchurian-incident",
    title: "Manchurian Incident",
    year: 1931,
    lat: 41.8057,
    lng: 123.4315,
    category: "conflict",
    summary: "Japanese military action in Manchuria leads to occupation and the state of Manchukuo.",
    source: "britannicaJapan",
  },
  {
    id: "postwar-japan-constitution",
    title: "Japan's postwar constitution",
    year: 1947,
    lat: 35.6762,
    lng: 139.6503,
    category: "politics",
    summary: "Japan's new constitution establishes parliamentary democracy and renounces war.",
    source: "britannicaJapan",
  },
  {
    id: "zhou-dynasty",
    title: "Zhou dynasty begins",
    year: -1046,
    lat: 34.3416,
    lng: 108.9398,
    category: "politics",
    summary: "The Zhou overthrow the Shang and begin China's longest-lasting dynasty.",
    source: "britannicaChina",
  },
  {
    id: "confucius",
    title: "Life of Confucius",
    year: -551,
    lat: 35.5967,
    lng: 116.9911,
    category: "people",
    summary: "Confucius's teachings become foundational to later Chinese political and ethical thought.",
    source: "britannicaChina",
  },
  {
    id: "sui-dynasty",
    title: "Sui dynasty reunifies China",
    year: 589,
    lat: 34.3416,
    lng: 108.9398,
    category: "politics",
    summary: "The Sui reunify China after centuries of division.",
    source: "britannicaChina",
  },
  {
    id: "song-dynasty",
    title: "Song dynasty begins",
    year: 960,
    lat: 34.7973,
    lng: 114.3076,
    category: "politics",
    summary: "The Song dynasty begins a period of economic growth and technological innovation.",
    source: "britannicaChina",
  },
  {
    id: "yuan-dynasty",
    title: "Yuan dynasty established",
    year: 1271,
    lat: 39.9042,
    lng: 116.4074,
    category: "politics",
    summary: "Kublai Khan proclaims the Yuan dynasty in China under Mongol rule.",
    source: "britannicaChina",
  },
  {
    id: "ming-dynasty",
    title: "Ming dynasty begins",
    year: 1368,
    lat: 32.0603,
    lng: 118.7969,
    category: "politics",
    summary: "The Ming dynasty replaces Yuan rule and restores Han Chinese imperial government.",
    source: "britannicaChina",
  },
  {
    id: "opium-war",
    title: "First Opium War begins",
    year: 1839,
    lat: 23.1291,
    lng: 113.2644,
    category: "conflict",
    summary: "Conflict between Qing China and Britain begins over trade, sovereignty, and opium.",
    source: "britannicaChina",
  },
  {
    id: "taiping-rebellion",
    title: "Taiping Rebellion begins",
    year: 1850,
    lat: 23.1115,
    lng: 109.6096,
    category: "conflict",
    summary: "A massive civil war erupts in Qing China under the Taiping movement.",
    source: "britannicaChina",
  },
  {
    id: "xinhai-revolution",
    title: "Xinhai Revolution",
    year: 1911,
    lat: 30.5928,
    lng: 114.3055,
    category: "politics",
    summary: "Revolution topples the Qing dynasty and leads to the Republic of China.",
    source: "britannicaChina",
  },
  {
    id: "long-march",
    title: "Long March",
    year: 1934,
    lat: 26.6533,
    lng: 106.6302,
    category: "politics",
    summary: "Chinese Communist forces retreat across China, reshaping party leadership and mythology.",
    source: "britannicaChina",
  },
  {
    id: "cultural-revolution",
    title: "Cultural Revolution begins",
    year: 1966,
    lat: 39.9042,
    lng: 116.4074,
    category: "politics",
    summary: "Mao launches a mass political campaign that disrupts Chinese society and institutions.",
    source: "britannicaChina",
  },
  {
    id: "deng-reforms",
    title: "Deng Xiaoping reforms begin",
    year: 1978,
    lat: 39.9042,
    lng: 116.4074,
    category: "politics",
    summary: "China begins market-oriented reforms and opening policies under Deng Xiaoping.",
    source: "britannicaChina",
  },
  {
    id: "aboriginal-australia",
    title: "Aboriginal cultures in Australia",
    year: -2000,
    lat: -23.698,
    lng: 133.8807,
    category: "people",
    summary: "Aboriginal peoples maintain diverse cultures, knowledge systems, and ties to Country across Australia.",
    source: "britannicaAustralia",
  },
  {
    id: "makassar-contact",
    title: "Makassarese contact with northern Australia",
    year: 1700,
    lat: -12.4634,
    lng: 130.8456,
    category: "voyage",
    summary: "Makassarese sailors trade and fish along parts of northern Australia before British colonization.",
    source: "britannicaAustralia",
  },
  {
    id: "cook-australia-east-coast",
    title: "Cook charts eastern Australia",
    year: 1770,
    lat: -33.8688,
    lng: 151.2093,
    category: "voyage",
    summary: "James Cook charts the east coast of Australia during the Endeavour voyage.",
    source: "britannicaAustralia",
  },
  {
    id: "first-fleet",
    title: "First Fleet arrives at Sydney Cove",
    year: 1788,
    lat: -33.8568,
    lng: 151.2153,
    category: "politics",
    summary: "British colonization begins with the arrival of the First Fleet at Sydney Cove.",
    source: "britannicaAustralia",
  },
  {
    id: "australian-gold-rush",
    title: "Australian gold rushes",
    year: 1851,
    lat: -37.5622,
    lng: 143.8503,
    category: "people",
    summary: "Gold discoveries transform colonial Australian society, migration, and politics.",
    source: "britannicaAustralia",
  },
  {
    id: "australia-federation",
    title: "Federation of Australia",
    year: 1901,
    lat: -35.2809,
    lng: 149.13,
    category: "politics",
    summary: "The Australian colonies federate as the Commonwealth of Australia.",
    source: "britannicaAustralia",
  },
  {
    id: "australia-referendum-1967",
    title: "Australian referendum on Aboriginal people",
    year: 1967,
    lat: -35.2809,
    lng: 149.13,
    category: "politics",
    summary: "Australians vote to amend the constitution concerning Aboriginal people and federal powers.",
    source: "britannicaAustralia",
  },
  {
    id: "mabo-decision",
    title: "Mabo decision",
    year: 1992,
    lat: -27.4705,
    lng: 153.026,
    category: "politics",
    summary: "Australia's High Court recognizes native title and rejects terra nullius.",
    source: "britannicaAustralia",
  },
  {
    id: "anasazi-pueblo",
    title: "Ancestral Pueblo cliff dwellings",
    year: 1200,
    lat: 37.2309,
    lng: -108.4618,
    category: "politics",
    summary: "Ancestral Pueblo communities build major settlements in the Four Corners region.",
    source: "britannicaNativeAmerican",
  },
  {
    id: "powhatan-english-contact",
    title: "Powhatan-English contact",
    year: 1607,
    lat: 37.2116,
    lng: -76.7752,
    category: "politics",
    summary: "The Powhatan paramount chiefdom confronts expanding English settlement at Jamestown.",
    source: "britannicaNativeAmerican",
  },
  {
    id: "king-philips-war",
    title: "King Philip's War",
    year: 1675,
    lat: 41.7,
    lng: -71.2,
    category: "conflict",
    summary: "A devastating war erupts between Indigenous nations and English colonists in New England.",
    source: "britannicaNativeAmerican",
  },
  {
    id: "pueblo-revolt",
    title: "Pueblo Revolt",
    year: 1680,
    lat: 35.687,
    lng: -105.9378,
    category: "conflict",
    summary: "Pueblo peoples drive Spanish colonists from New Mexico for more than a decade.",
    source: "britannicaNativeAmerican",
  },
  {
    id: "trail-of-tears",
    title: "Trail of Tears",
    year: 1838,
    lat: 35.4676,
    lng: -97.5164,
    category: "conflict",
    summary: "Forced removal of Cherokee people to Indian Territory causes widespread death and trauma.",
    source: "britannicaNativeAmerican",
  },
  {
    id: "little-bighorn",
    title: "Battle of the Little Bighorn",
    year: 1876,
    lat: 45.5708,
    lng: -107.4275,
    category: "conflict",
    summary: "Lakota, Northern Cheyenne, and Arapaho forces defeat Custer's command.",
    source: "britannicaNativeAmerican",
  },
  {
    id: "wounded-knee",
    title: "Wounded Knee massacre",
    year: 1890,
    lat: 43.1425,
    lng: -102.3657,
    category: "conflict",
    summary: "U.S. troops kill Lakota people at Wounded Knee in South Dakota.",
    source: "britannicaNativeAmerican",
  },
  {
    id: "caral-peru",
    title: "Caral ceremonial center",
    year: -2000,
    lat: -10.8933,
    lng: -77.5206,
    category: "politics",
    summary: "Caral becomes one of the oldest known urban ceremonial centers in the Americas.",
    source: "britannicaWorldMaps",
  },
  {
    id: "moche-civilization",
    title: "Moche civilization flourishes",
    year: 200,
    lat: -8.1116,
    lng: -79.0291,
    category: "politics",
    summary: "The Moche develop complex irrigation, art, and ceremonial centers on Peru's north coast.",
    source: "worldHistoryCivilization",
  },
  {
    id: "nazca-lines",
    title: "Nazca culture and geoglyphs",
    year: 500,
    lat: -14.739,
    lng: -75.13,
    category: "people",
    summary: "Nazca communities create large desert geoglyphs and distinctive ceramics in southern Peru.",
    source: "worldHistoryCivilization",
  },
  {
    id: "tiwanaku",
    title: "Tiwanaku flourishes",
    year: 700,
    lat: -16.5547,
    lng: -68.6733,
    category: "politics",
    summary: "Tiwanaku becomes a major highland Andean political and ceremonial center.",
    source: "historyWorld",
  },
  {
    id: "chimu-kingdom",
    title: "Chimu kingdom flourishes",
    year: 1200,
    lat: -8.1116,
    lng: -79.0291,
    category: "politics",
    summary: "The Chimu build Chan Chan and dominate parts of Peru's north coast before Inca expansion.",
    source: "worldHistoryCivilization",
  },
  {
    id: "mapuche-resistance",
    title: "Mapuche resistance in Arauco War",
    year: 1550,
    lat: -37.4713,
    lng: -72.3537,
    category: "conflict",
    summary: "Mapuche communities resist Spanish conquest in southern Chile for generations.",
    source: "historyWorld",
  },
  {
    id: "tupac-amaru-rebellion",
    title: "Tupac Amaru II rebellion",
    year: 1780,
    lat: -14.101,
    lng: -71.431,
    category: "conflict",
    summary: "A major Indigenous-led uprising challenges Spanish colonial rule in the Andes.",
    source: "historyWorld",
  },
  {
    id: "old-babylonian-kingdom",
    title: "Old Babylonian kingdom founded",
    year: -1894,
    lat: 32.5364,
    lng: 44.4209,
    category: "politics",
    summary: "An Amorite dynasty establishes Babylon as a kingdom in Mesopotamia.",
    source: "britannicaWorld",
  },
  {
    id: "israelite-kingdom",
    title: "United Monarchy of Israel tradition",
    year: -1000,
    lat: 31.7683,
    lng: 35.2137,
    category: "politics",
    summary: "Biblical tradition places a united Israelite monarchy around the early first millennium BC.",
    source: "britannicaWorld",
  },
  {
    id: "sparta-polis",
    title: "Sparta emerges as a Greek polis",
    year: -800,
    lat: 37.0745,
    lng: 22.4303,
    category: "politics",
    summary: "Sparta develops into a powerful Greek city-state with a distinctive militarized social order.",
    source: "britannicaWorld",
  },
  {
    id: "athens-polis",
    title: "Athens emerges as a Greek polis",
    year: -700,
    lat: 37.9838,
    lng: 23.7275,
    category: "politics",
    summary: "Athens grows into a major Greek city-state before later democratic reforms.",
    source: "britannicaWorld",
  },
  {
    id: "roman-republic",
    title: "Roman Republic founded",
    year: -509,
    lat: 41.9028,
    lng: 12.4964,
    category: "politics",
    summary: "Roman tradition dates the overthrow of the monarchy and start of the Republic to 509 BC.",
    source: "britannicaWorld",
  },
  {
    id: "achaemenid-egypt",
    title: "Persian conquest of Egypt",
    year: -525,
    lat: 30.0444,
    lng: 31.2357,
    category: "politics",
    summary: "Achaemenid Persia conquers Egypt, making it part of a vast imperial system.",
    source: "britannicaWorld",
  },
  {
    id: "ptolemaic-egypt",
    title: "Ptolemaic Egypt begins",
    year: -305,
    lat: 31.2001,
    lng: 29.9187,
    category: "politics",
    summary: "Ptolemy I establishes a Hellenistic dynasty ruling Egypt from Alexandria.",
    source: "britannicaWorld",
  },
  {
    id: "seleucid-empire",
    title: "Seleucid Empire founded",
    year: -312,
    lat: 33.3152,
    lng: 44.3661,
    category: "politics",
    summary: "Seleucus I establishes a major Hellenistic state across western Asia.",
    source: "britannicaWorld",
  },
  {
    id: "parthian-empire",
    title: "Parthian Empire rises",
    year: -247,
    lat: 37.9601,
    lng: 58.3261,
    category: "politics",
    summary: "The Parthians establish a durable Iranian empire between Rome and Central Asia.",
    source: "britannicaWorld",
  },
  {
    id: "sasanian-empire",
    title: "Sasanian Empire founded",
    year: 224,
    lat: 29.5918,
    lng: 52.5837,
    category: "politics",
    summary: "Ardashir I overthrows Parthian rule and founds the Sasanian Empire.",
    source: "britannicaWorld",
  },
  {
    id: "jin-china",
    title: "Jin dynasty unifies China",
    year: 280,
    lat: 34.6197,
    lng: 112.454,
    category: "politics",
    summary: "The Jin briefly reunify China after the Three Kingdoms period.",
    source: "britannicaChina",
  },
  {
    id: "byzantine-empire",
    title: "Eastern Roman Empire centered at Constantinople",
    year: 395,
    lat: 41.0082,
    lng: 28.9784,
    category: "politics",
    summary: "Permanent division of Roman imperial administration leaves Constantinople as the eastern imperial center.",
    source: "britannicaWorld",
  },
  {
    id: "frankish-kingdom",
    title: "Frankish kingdom expands under Clovis",
    year: 481,
    lat: 49.2583,
    lng: 4.0317,
    category: "politics",
    summary: "Clovis becomes king of the Salian Franks and builds a major post-Roman kingdom.",
    source: "britannicaWorld",
  },
  {
    id: "rashidun-caliphate",
    title: "Rashidun Caliphate begins",
    year: 632,
    lat: 24.47,
    lng: 39.61,
    category: "politics",
    summary: "The first caliphate forms after Muhammad's death and expands rapidly beyond Arabia.",
    source: "britannicaWorld",
  },
  {
    id: "umayyad-caliphate",
    title: "Umayyad Caliphate founded",
    year: 661,
    lat: 33.5138,
    lng: 36.2765,
    category: "politics",
    summary: "The Umayyads establish dynastic caliphal rule from Damascus.",
    source: "britannicaWorld",
  },
  {
    id: "abbasid-caliphate",
    title: "Abbasid Caliphate founded",
    year: 750,
    lat: 33.3152,
    lng: 44.3661,
    category: "politics",
    summary: "The Abbasids overthrow the Umayyads and later make Baghdad their imperial capital.",
    source: "britannicaWorld",
  },
  {
    id: "holy-roman-empire",
    title: "Holy Roman imperial title revived",
    year: 962,
    lat: 41.9028,
    lng: 12.4964,
    category: "politics",
    summary: "Otto I is crowned emperor, anchoring the medieval Holy Roman Empire.",
    source: "britannicaWorld",
  },
  {
    id: "fatimid-caliphate-egypt",
    title: "Fatimid rule established in Egypt",
    year: 969,
    lat: 30.0444,
    lng: 31.2357,
    category: "politics",
    summary: "The Fatimids conquer Egypt and found Cairo as a new center of power.",
    source: "britannicaWorld",
  },
  {
    id: "norman-england",
    title: "Norman regime in England",
    year: 1066,
    lat: 51.5072,
    lng: -0.1276,
    category: "politics",
    summary: "William the Conqueror's victory begins Norman rule in England.",
    source: "britannicaWorldMaps",
  },
  {
    id: "delhi-sultanate",
    title: "Delhi Sultanate founded",
    year: 1206,
    lat: 28.6139,
    lng: 77.209,
    category: "politics",
    summary: "The Delhi Sultanate establishes a major Indo-Islamic state in northern India.",
    source: "britannicaWorld",
  },
  {
    id: "ottoman-beylik",
    title: "Ottoman state emerges",
    year: 1299,
    lat: 40.1885,
    lng: 29.061,
    category: "politics",
    summary: "Osman's Anatolian principality becomes the nucleus of the Ottoman Empire.",
    source: "britannicaWorld",
  },
  {
    id: "joseon-dynasty",
    title: "Joseon dynasty founded",
    year: 1392,
    lat: 37.5665,
    lng: 126.978,
    category: "politics",
    summary: "Joseon replaces Goryeo and rules Korea for more than five centuries.",
    source: "britannicaWorld",
  },
  {
    id: "granada-falls",
    title: "Emirate of Granada falls",
    year: 1492,
    lat: 37.1773,
    lng: -3.5986,
    category: "politics",
    summary: "The fall of Granada ends Muslim rule on the Iberian Peninsula.",
    source: "historyWorld",
  },
  {
    id: "safavid-empire",
    title: "Safavid Empire founded",
    year: 1501,
    lat: 38.0962,
    lng: 46.2738,
    category: "politics",
    summary: "Ismail I establishes Safavid rule in Iran and promotes Twelver Shiism.",
    source: "britannicaWorld",
  },
  {
    id: "portuguese-brazil",
    title: "Portuguese claim Brazil",
    year: 1500,
    lat: -16.5,
    lng: -39.1,
    category: "politics",
    summary: "Pedro Alvares Cabral's expedition reaches Brazil, beginning Portuguese claims there.",
    source: "historyWorld",
  },
  {
    id: "spanish-viceroyalty-peru",
    title: "Viceroyalty of Peru created",
    year: 1542,
    lat: -12.0464,
    lng: -77.0428,
    category: "politics",
    summary: "Spain creates the Viceroyalty of Peru to govern much of its South American empire.",
    source: "historyWorld",
  },
  {
    id: "dutch-republic",
    title: "Dutch Republic declared",
    year: 1581,
    lat: 52.3676,
    lng: 4.9041,
    category: "politics",
    summary: "The Act of Abjuration marks the Dutch provinces' rejection of Spanish rule.",
    source: "britannicaWorld",
  },
  {
    id: "english-commonwealth",
    title: "English Commonwealth begins",
    year: 1649,
    lat: 51.5072,
    lng: -0.1276,
    category: "politics",
    summary: "After Charles I's execution, England is declared a commonwealth.",
    source: "britannicaWorld",
  },
  {
    id: "kingdom-prussia",
    title: "Kingdom of Prussia proclaimed",
    year: 1701,
    lat: 54.7104,
    lng: 20.4522,
    category: "politics",
    summary: "The Hohenzollern ruler crowns himself king in Prussia, elevating the state within Europe.",
    source: "britannicaWorld",
  },
  {
    id: "united-kingdom-1707",
    title: "Kingdom of Great Britain formed",
    year: 1707,
    lat: 51.5072,
    lng: -0.1276,
    category: "politics",
    summary: "Acts of Union join England and Scotland into the Kingdom of Great Britain.",
    source: "britannicaWorld",
  },
  {
    id: "united-states-constitution",
    title: "United States Constitution takes effect",
    year: 1789,
    lat: 40.7128,
    lng: -74.006,
    category: "politics",
    summary: "The U.S. Constitution creates a new federal government under George Washington.",
    source: "historyWorld",
  },
  {
    id: "first-french-republic",
    title: "First French Republic proclaimed",
    year: 1792,
    lat: 48.8566,
    lng: 2.3522,
    category: "politics",
    summary: "Revolutionary France abolishes monarchy and proclaims a republic.",
    source: "britannicaWorld",
  },
  {
    id: "napoleonic-empire",
    title: "First French Empire proclaimed",
    year: 1804,
    lat: 48.8566,
    lng: 2.3522,
    category: "politics",
    summary: "Napoleon crowns himself emperor, replacing the French Republic with an empire.",
    source: "britannicaWorld",
  },
  {
    id: "haiti-independence",
    title: "Haiti declares independence",
    year: 1804,
    lat: 18.5944,
    lng: -72.3074,
    category: "politics",
    summary: "Haiti becomes independent after the only successful large-scale revolt of enslaved people in the Americas.",
    source: "britannicaWorld",
  },
  {
    id: "argentina-independence",
    title: "Argentina declares independence",
    year: 1816,
    lat: -26.8083,
    lng: -65.2176,
    category: "politics",
    summary: "The Congress of Tucuman declares independence for the United Provinces in South America.",
    source: "historyWorld",
  },
  {
    id: "chile-independence",
    title: "Chile declares independence",
    year: 1818,
    lat: -33.4489,
    lng: -70.6693,
    category: "politics",
    summary: "Chile consolidates independence from Spanish rule after revolutionary war.",
    source: "historyWorld",
  },
  {
    id: "gran-colombia",
    title: "Gran Colombia created",
    year: 1819,
    lat: 4.711,
    lng: -74.0721,
    category: "politics",
    summary: "A new republic links much of northern South America under independence leaders.",
    source: "historyWorld",
  },
  {
    id: "mexico-independence",
    title: "Mexico becomes independent",
    year: 1821,
    lat: 19.4326,
    lng: -99.1332,
    category: "politics",
    summary: "Mexico achieves independence from Spain after a long insurgency and political realignment.",
    source: "historyWorld",
  },
  {
    id: "brazil-independence",
    title: "Brazil declares independence",
    year: 1822,
    lat: -23.5505,
    lng: -46.6333,
    category: "politics",
    summary: "Brazil separates from Portugal and becomes an empire under Pedro I.",
    source: "historyWorld",
  },
  {
    id: "bolivia-independence",
    title: "Bolivia becomes independent",
    year: 1825,
    lat: -19.0333,
    lng: -65.2627,
    category: "politics",
    summary: "Upper Peru becomes independent as Bolivia after the wars of Spanish American independence.",
    source: "historyWorld",
  },
  {
    id: "uruguay-independence",
    title: "Uruguay becomes independent",
    year: 1828,
    lat: -34.9011,
    lng: -56.1645,
    category: "politics",
    summary: "Uruguay emerges as an independent state between Brazil and Argentina.",
    source: "historyWorld",
  },
  {
    id: "second-french-republic",
    title: "Second French Republic proclaimed",
    year: 1848,
    lat: 48.8566,
    lng: 2.3522,
    category: "politics",
    summary: "Revolution in Paris ends the July Monarchy and creates France's Second Republic.",
    source: "britannicaWorld",
  },
  {
    id: "second-french-empire",
    title: "Second French Empire begins",
    year: 1852,
    lat: 48.8566,
    lng: 2.3522,
    category: "politics",
    summary: "Louis-Napoleon becomes Napoleon III and establishes the Second Empire.",
    source: "britannicaWorld",
  },
  {
    id: "italy-unification",
    title: "Kingdom of Italy proclaimed",
    year: 1861,
    lat: 45.0703,
    lng: 7.6869,
    category: "politics",
    summary: "Italian unification creates the Kingdom of Italy under Victor Emmanuel II.",
    source: "britannicaWorld",
  },
  {
    id: "canada-confederation",
    title: "Canadian Confederation",
    year: 1867,
    lat: 45.4215,
    lng: -75.6972,
    category: "politics",
    summary: "The Dominion of Canada is created by confederation of British North American colonies.",
    source: "historyWorld",
  },
  {
    id: "german-empire",
    title: "German Empire proclaimed",
    year: 1871,
    lat: 48.8049,
    lng: 2.1204,
    category: "politics",
    summary: "German unification is proclaimed at Versailles after the Franco-Prussian War.",
    source: "britannicaWorld",
  },
  {
    id: "third-french-republic",
    title: "French Third Republic consolidates",
    year: 1875,
    lat: 48.8566,
    lng: 2.3522,
    category: "politics",
    summary: "Constitutional laws establish the institutional framework of the Third Republic.",
    source: "britannicaWorld",
  },
  {
    id: "brazil-republic",
    title: "Brazilian Republic proclaimed",
    year: 1889,
    lat: -22.9068,
    lng: -43.1729,
    category: "politics",
    summary: "A military coup ends the Brazilian Empire and proclaims a republic.",
    source: "historyWorld",
  },
  {
    id: "south-africa-union",
    title: "Union of South Africa formed",
    year: 1910,
    lat: -25.7479,
    lng: 28.2293,
    category: "politics",
    summary: "British colonies in southern Africa unite as a self-governing dominion.",
    source: "britannicaWorld",
  },
  {
    id: "chinese-republic-founded",
    title: "Republic of China founded",
    year: 1912,
    lat: 32.0603,
    lng: 118.7969,
    category: "politics",
    summary: "The Republic of China is proclaimed after the fall of the Qing dynasty.",
    source: "britannicaChina",
  },
  {
    id: "turkish-republic",
    title: "Republic of Turkey proclaimed",
    year: 1923,
    lat: 39.9334,
    lng: 32.8597,
    category: "politics",
    summary: "Mustafa Kemal Ataturk's movement establishes the Republic of Turkey after the Ottoman collapse.",
    source: "britannicaWorld",
  },
  {
    id: "ussr-founded",
    title: "Soviet Union founded",
    year: 1922,
    lat: 55.7558,
    lng: 37.6173,
    category: "politics",
    summary: "The Union of Soviet Socialist Republics is formally created after the Russian Civil War.",
    source: "britannicaColdWar",
  },
  {
    id: "saudi-arabia-founded",
    title: "Saudi Arabia proclaimed",
    year: 1932,
    lat: 24.7136,
    lng: 46.6753,
    category: "politics",
    summary: "Abdulaziz Ibn Saud proclaims the Kingdom of Saudi Arabia.",
    source: "britannicaWorld",
  },
  {
    id: "indonesia-independence",
    title: "Indonesia proclaims independence",
    year: 1945,
    lat: -6.2088,
    lng: 106.8456,
    category: "politics",
    summary: "Indonesian leaders proclaim independence after Japan's surrender in World War II.",
    source: "historyWorld",
  },
  {
    id: "israel-founded",
    title: "State of Israel declared",
    year: 1948,
    lat: 32.0853,
    lng: 34.7818,
    category: "politics",
    summary: "Israel declares independence as the British Mandate for Palestine ends.",
    source: "historyWorld",
  },
  {
    id: "west-germany-east-germany",
    title: "Germany divided into two states",
    year: 1949,
    lat: 52.52,
    lng: 13.405,
    category: "politics",
    summary: "The Federal Republic of Germany and German Democratic Republic are founded during the Cold War.",
    source: "britannicaColdWar",
  },
  {
    id: "egypt-republic",
    title: "Egyptian republic declared",
    year: 1953,
    lat: 30.0444,
    lng: 31.2357,
    category: "politics",
    summary: "Egypt abolishes the monarchy and becomes a republic after the Free Officers movement.",
    source: "historyWorld",
  },
  {
    id: "ghana-independence-modern",
    title: "Ghana becomes independent",
    year: 1957,
    lat: 5.6037,
    lng: -0.187,
    category: "politics",
    summary: "Ghana becomes the first sub-Saharan African colony to gain independence in the postwar wave.",
    source: "historyWorld",
  },
  {
    id: "fifth-french-republic",
    title: "French Fifth Republic founded",
    year: 1958,
    lat: 48.8566,
    lng: 2.3522,
    category: "politics",
    summary: "A new constitution creates the presidential system of France's Fifth Republic.",
    source: "britannicaWorld",
  },
  {
    id: "nigeria-independence",
    title: "Nigeria becomes independent",
    year: 1960,
    lat: 9.0765,
    lng: 7.3986,
    category: "politics",
    summary: "Nigeria becomes independent from Britain during Africa's decolonization wave.",
    source: "historyWorld",
  },
  {
    id: "algeria-independence",
    title: "Algeria becomes independent",
    year: 1962,
    lat: 36.7538,
    lng: 3.0588,
    category: "politics",
    summary: "Algeria gains independence from France after a long and violent war.",
    source: "historyWorld",
  },
  {
    id: "singapore-independence",
    title: "Singapore becomes independent",
    year: 1965,
    lat: 1.3521,
    lng: 103.8198,
    category: "politics",
    summary: "Singapore becomes an independent republic after separation from Malaysia.",
    source: "historyWorld",
  },
  {
    id: "iran-islamic-republic",
    title: "Islamic Republic of Iran proclaimed",
    year: 1979,
    lat: 35.6892,
    lng: 51.389,
    category: "politics",
    summary: "Iran's monarchy is replaced by an Islamic republic after revolution.",
    source: "historyWorld",
  },
  {
    id: "german-reunification",
    title: "German reunification",
    year: 1990,
    lat: 52.52,
    lng: 13.405,
    category: "politics",
    summary: "East Germany joins the Federal Republic, reunifying Germany after the Cold War division.",
    source: "britannicaColdWar",
  },
  {
    id: "czech-slovak-split",
    title: "Czech Republic and Slovakia formed",
    year: 1993,
    lat: 50.0755,
    lng: 14.4378,
    category: "politics",
    summary: "Czechoslovakia peacefully dissolves into the Czech Republic and Slovakia.",
    source: "historyWorld",
  },
  {
    id: "eritrea-independence",
    title: "Eritrea becomes independent",
    year: 1993,
    lat: 15.3229,
    lng: 38.9251,
    category: "politics",
    summary: "Eritrea becomes independent from Ethiopia after a long war and referendum.",
    source: "historyWorld",
  },
  {
    id: "hong-kong-sar",
    title: "Hong Kong becomes a Chinese SAR",
    year: 1997,
    lat: 22.3193,
    lng: 114.1694,
    category: "politics",
    summary: "Hong Kong transfers from British to Chinese sovereignty as a special administrative region.",
    source: "historyWorld",
  },
  {
    id: "east-timor-independence",
    title: "Timor-Leste becomes independent",
    year: 2002,
    lat: -8.5569,
    lng: 125.5603,
    category: "politics",
    summary: "Timor-Leste becomes independent after Indonesian occupation and UN administration.",
    source: "historyWorld",
  },
  {
    id: "nepal-republic",
    title: "Nepal becomes a republic",
    year: 2008,
    lat: 27.7172,
    lng: 85.324,
    category: "politics",
    summary: "Nepal abolishes its monarchy and becomes a federal democratic republic.",
    source: "historyWorld",
  },
  {
    id: "millennium",
    title: "Millennium celebrations",
    year: 2000,
    lat: 51.5072,
    lng: -0.1276,
    category: "people",
    summary: "Global public celebrations mark the transition into the 21st century.",
  },
  {
    id: "sept11",
    title: "September 11 attacks",
    year: 2001.7,
    lat: 40.7128,
    lng: -74.006,
    category: "politics",
    summary: "Coordinated attacks in the United States reshape international security policy.",
  },
  {
    id: "afghanistan-war",
    title: "War in Afghanistan begins",
    year: 2001.8,
    lat: 34.5553,
    lng: 69.2075,
    category: "conflict",
    summary: "A U.S.-led coalition enters Afghanistan after the September 11 attacks.",
  },
  {
    id: "euro",
    title: "Euro cash introduced",
    year: 2002,
    lat: 50.8503,
    lng: 4.3517,
    category: "politics",
    summary: "Euro banknotes and coins enter circulation across much of the European Union.",
  },
  {
    id: "iraq-war",
    title: "Iraq War begins",
    year: 2003.2,
    lat: 33.3152,
    lng: 44.3661,
    category: "conflict",
    summary: "The invasion of Iraq leads to regime change and years of regional instability.",
  },
  {
    id: "facebook",
    title: "Facebook launches",
    year: 2004.1,
    lat: 42.3736,
    lng: -71.1097,
    category: "people",
    summary: "A campus social network begins growing into a major global communications platform.",
  },
  {
    id: "indian-ocean-tsunami",
    title: "Indian Ocean tsunami",
    year: 2004.98,
    lat: 3.3167,
    lng: 95.854,
    category: "people",
    summary: "A massive undersea earthquake and tsunami devastate communities around the Indian Ocean.",
  },
  {
    id: "montenegro",
    title: "Montenegro declares independence",
    year: 2006.45,
    lat: 42.4304,
    lng: 19.2594,
    category: "politics",
    summary: "Montenegro separates from the State Union of Serbia and Montenegro.",
  },
  {
    id: "kosovo",
    title: "Kosovo declares independence",
    year: 2008.13,
    lat: 42.6629,
    lng: 21.1655,
    category: "politics",
    summary: "Kosovo declares independence from Serbia, changing political maps in the Balkans.",
  },
  {
    id: "arab-spring",
    title: "Arab Spring protests",
    year: 2010.95,
    lat: 36.8065,
    lng: 10.1815,
    category: "politics",
    summary: "Protests beginning in Tunisia spread across North Africa and the Middle East.",
  },
  {
    id: "south-sudan",
    title: "South Sudan becomes independent",
    year: 2011.52,
    lat: 4.8594,
    lng: 31.5713,
    category: "politics",
    summary: "South Sudan becomes the world's newest widely recognized sovereign state.",
  },
  {
    id: "crimea",
    title: "Russia annexes Crimea",
    year: 2014.2,
    lat: 44.9521,
    lng: 34.1024,
    category: "conflict",
    summary: "The annexation of Crimea triggers a major international crisis over Ukraine.",
  },
  {
    id: "paris-agreement",
    title: "Paris Agreement adopted",
    year: 2015.95,
    lat: 48.8566,
    lng: 2.3522,
    category: "politics",
    summary: "Countries adopt a global framework for climate action at COP21.",
  },
  {
    id: "brexit",
    title: "United Kingdom votes for Brexit",
    year: 2016.48,
    lat: 51.5072,
    lng: -0.1276,
    category: "politics",
    summary: "A referendum sets the United Kingdom on a path to leave the European Union.",
  },
  {
    id: "covid",
    title: "COVID-19 pandemic",
    year: 2020.2,
    lat: 30.5928,
    lng: 114.3055,
    category: "people",
    summary: "A global pandemic alters everyday life, public health policy, and international travel.",
  },
  {
    id: "ukraine-invasion",
    title: "Full-scale invasion of Ukraine",
    year: 2022.15,
    lat: 50.4501,
    lng: 30.5234,
    category: "conflict",
    summary: "Russia launches a full-scale invasion of Ukraine, causing a major European war.",
  },
  {
    id: "gaza-war",
    title: "Israel-Hamas war",
    year: 2023.78,
    lat: 31.5017,
    lng: 34.4668,
    category: "conflict",
    summary: "The October 7 attacks and subsequent war create a severe regional and humanitarian crisis.",
  },
];

const BOUNDARY_CHANGES = [
  {
    year: 2002.37,
    title: "Timor-Leste independence",
    copy: "East Timor becomes Timor-Leste after a UN-administered transition.",
    countries: ["Timor-Leste"],
  },
  {
    year: 2006.45,
    title: "Serbia and Montenegro split",
    copy: "Montenegro's independence ends the State Union of Serbia and Montenegro.",
    countries: ["Serbia", "Montenegro"],
  },
  {
    year: 2008.13,
    title: "Kosovo declaration",
    copy: "Kosovo declares independence; international recognition remains politically contested.",
    countries: ["Kosovo", "Serbia"],
  },
  {
    year: 2011.52,
    title: "South Sudan independence",
    copy: "Sudan's southern region becomes the Republic of South Sudan.",
    countries: ["South Sudan", "Sudan"],
  },
  {
    year: 2014.2,
    title: "Crimea annexation",
    copy: "Crimea's status becomes disputed after Russian annexation.",
    countries: ["Ukraine", "Russia"],
  },
];

const VOYAGES = [
  {
    id: "alexander-campaign",
    title: "Alexander's eastern campaign",
    start: -334,
    end: -323,
    category: "voyage",
    summary: "Alexander's army moves from Macedon through Persia toward the Indus before turning back.",
    path: [
      [40.1885, 26.3606],
      [36.2, 36.16],
      [32.5364, 44.4209],
      [30.1939, 53.1676],
      [34.5553, 69.2075],
      [31.5204, 74.3587],
    ],
  },
  {
    id: "zheng-he",
    title: "Zheng He treasure voyages",
    start: 1405,
    end: 1433,
    category: "voyage",
    summary: "Ming fleets led by Zheng He sail through Southeast Asia and across the Indian Ocean.",
    path: [
      [32.0603, 118.7969],
      [1.3521, 103.8198],
      [6.9271, 79.8612],
      [15.5007, 32.5599],
      [-4.0435, 39.6682],
    ],
  },
  {
    id: "ibn-battuta",
    title: "Ibn Battuta's travels",
    start: 1325,
    end: 1354,
    category: "voyage",
    summary: "Ibn Battuta travels across North Africa, the Middle East, East Africa, Central Asia, India, Southeast Asia, and China.",
    path: [
      [31.63, -7.99],
      [30.0444, 31.2357],
      [21.4225, 39.8262],
      [-6.7924, 39.2083],
      [28.6139, 77.209],
      [23.8103, 90.4125],
      [24.4798, 118.0894],
      [31.63, -7.99],
    ],
  },
  {
    id: "marco-polo",
    title: "Marco Polo's journey to Yuan China",
    start: 1271,
    end: 1295,
    category: "voyage",
    summary: "The Polo family's overland journey links Venice with Mongol-ruled China and later European accounts of Asia.",
    path: [
      [45.4408, 12.3155],
      [41.0082, 28.9784],
      [35.6892, 51.389],
      [39.9042, 116.4074],
      [30.2741, 120.1551],
      [45.4408, 12.3155],
    ],
  },
  {
    id: "vasco-da-gama",
    title: "Vasco da Gama reaches India",
    start: 1497,
    end: 1499,
    category: "voyage",
    summary: "Da Gama's fleet sails around Africa to India, opening a direct sea route between Europe and the Indian Ocean.",
    path: [
      [38.7223, -9.1393],
      [14.9167, -23.5167],
      [-34.3568, 18.474],
      [-4.0435, 39.6682],
      [11.2588, 75.7804],
      [38.7223, -9.1393],
    ],
  },
  {
    id: "columbus-first-voyage",
    title: "Columbus's first Atlantic voyage",
    start: 1492,
    end: 1493,
    category: "voyage",
    summary: "Columbus sails from Iberia to the Caribbean and returns, intensifying sustained contact across the Atlantic.",
    path: [
      [37.2614, -6.9447],
      [28.2916, -16.6291],
      [24.0466, -74.5249],
      [19.8968, -71.658],
      [38.7223, -9.1393],
    ],
  },
  {
    id: "magellan-elcano",
    title: "Magellan-Elcano circumnavigation",
    start: 1519,
    end: 1522,
    category: "voyage",
    summary: "The expedition completes the first recorded circumnavigation of Earth.",
    path: [
      [37.3891, -5.9845],
      [-22.9068, -43.1729],
      [-52.7, -70.9],
      [13.7563, 100.5018],
      [-8.65, 115.2167],
      [37.3891, -5.9845],
    ],
  },
  {
    id: "james-cook-endeavour",
    title: "James Cook's Endeavour voyage",
    start: 1768,
    end: 1771,
    category: "voyage",
    summary: "Cook's first Pacific voyage observes the transit of Venus, maps New Zealand, and charts eastern Australia.",
    path: [
      [50.3715, -4.1427],
      [-17.6509, -149.426],
      [-41.2865, 174.7762],
      [-33.8688, 151.2093],
      [-6.2088, 106.8456],
      [34.0522, 18.4241],
      [50.3715, -4.1427],
    ],
  },
  {
    id: "darwin-beagle",
    title: "Darwin aboard HMS Beagle",
    start: 1831,
    end: 1836,
    category: "voyage",
    summary: "Charles Darwin's Beagle voyage gathers observations that later shape evolutionary theory.",
    path: [
      [50.3715, -4.1427],
      [-22.9068, -43.1729],
      [-34.6037, -58.3816],
      [-54.8019, -68.303],
      [-0.9538, -90.9656],
      [-33.8688, 151.2093],
      [-33.9249, 18.4241],
      [50.3715, -4.1427],
    ],
  },
  {
    id: "thomas-cook-first-excursion",
    title: "Thomas Cook's first rail excursion",
    start: 1841,
    end: 1841.6,
    category: "voyage",
    summary: "Thomas Cook organizes a railway excursion from Leicester to Loughborough, a landmark in commercial mass tourism.",
    path: [
      [52.6369, -1.1398],
      [52.7721, -1.2062],
    ],
  },
  {
    id: "thomas-cook-grand-tour",
    title: "Thomas Cook organized Grand Tour",
    start: 1863,
    end: 1864,
    category: "voyage",
    summary: "Cook's escorted European tours help turn elite continental travel into packaged commercial tourism.",
    path: [
      [51.5072, -0.1276],
      [48.8566, 2.3522],
      [46.2044, 6.1432],
      [45.4408, 12.3155],
      [41.9028, 12.4964],
      [51.5072, -0.1276],
    ],
  },
  {
    id: "thomas-cook-nile-tour",
    title: "Thomas Cook Nile tours",
    start: 1869,
    end: 1870,
    category: "voyage",
    summary: "Cook's Nile and Egypt arrangements become a model for large-scale organized leisure travel beyond Europe.",
    path: [
      [51.5072, -0.1276],
      [48.8566, 2.3522],
      [45.4642, 9.19],
      [31.2001, 29.9187],
      [30.0444, 31.2357],
      [24.0889, 32.8998],
    ],
  },
  {
    id: "amundsen-south-pole",
    title: "Amundsen's South Pole expedition",
    start: 1910,
    end: 1912,
    category: "voyage",
    summary: "Roald Amundsen's expedition reaches the South Pole and returns, marking a major polar exploration milestone.",
    path: [
      [59.9139, 10.7522],
      [-78.5, 164.0],
      [-90, 0],
      [-78.5, 164.0],
      [59.9139, 10.7522],
    ],
  },
  {
    id: "iss-expedition-1",
    title: "International Space Station: Expedition 1",
    start: 2000.84,
    end: 2001.2,
    category: "voyage",
    summary: "The first long-duration crew lives aboard the International Space Station.",
    path: [
      [28.5, -80.6],
      [0, -45],
      [27, 78],
      [46, 63],
    ],
  },
  {
    id: "hokulea",
    title: "Malama Honua worldwide voyage",
    start: 2014.4,
    end: 2017.45,
    category: "voyage",
    summary: "The Polynesian voyaging canoe Hokulea circles the globe using traditional navigation.",
    path: [
      [21.3, -157.8],
      [-17.7, -149.4],
      [-36.8, 174.8],
      [-33.9, 151.2],
      [-20.2, 57.5],
      [-33.9, 18.4],
      [38.7, -9.1],
      [40.7, -74.0],
      [21.3, -157.8],
    ],
  },
  {
    id: "solar-impulse",
    title: "Solar Impulse 2 circumnavigation",
    start: 2015.18,
    end: 2016.55,
    category: "voyage",
    summary: "A solar-powered aircraft completes a round-the-world flight.",
    path: [
      [24.4, 54.4],
      [23.0, 72.6],
      [21.3, -157.8],
      [37.8, -122.4],
      [40.7, -74.0],
      [39.9, 116.4],
      [24.4, 54.4],
    ],
  },
];

const categoryColors = {
  conflict: "#ff6f61",
  politics: "#7cc4ff",
  people: "#d59cff",
  voyage: "#42d6a4",
};

const ROMAN_EMPIRE_SNAPSHOTS = [
  {
    year: -509,
    title: "Early Roman Republic",
    description: "Rome controls a small inland territory around the lower Tiber.",
    path: [
      [42.1, 11.7],
      [42.0, 12.8],
      [41.5, 13.0],
      [41.2, 12.4],
      [41.5, 11.8],
      [42.1, 11.7],
    ],
  },
  {
    year: -264,
    title: "Rome before the First Punic War",
    description: "Roman power covers most of the Italian peninsula before expansion across the Mediterranean.",
    path: [
      [45.7, 8.5],
      [45.4, 12.8],
      [43.5, 13.9],
      [41.0, 16.8],
      [38.0, 16.0],
      [37.4, 14.0],
      [40.1, 12.0],
      [43.0, 9.6],
      [45.7, 8.5],
    ],
  },
  {
    year: -146,
    title: "Republic after the Punic and Macedonian Wars",
    description: "Rome dominates Italy, Sicily, parts of Hispania, Greece, Macedonia, and North Africa around Carthage.",
    path: [
      [46.0, 8.0],
      [45.5, 14.8],
      [42.0, 22.8],
      [37.4, 23.5],
      [35.7, 14.5],
      [36.0, 9.0],
      [38.5, -1.5],
      [41.7, -6.0],
      [43.5, -2.0],
      [43.0, 8.0],
      [46.0, 8.0],
    ],
  },
  {
    year: -44,
    title: "Late Roman Republic",
    description: "By Caesar's death, Roman control reaches across Gaul, Hispania, the Balkans, Greece, North Africa, Syria, and Anatolia.",
    path: [
      [55.0, -5.5],
      [51.0, 8.0],
      [48.5, 19.5],
      [42.0, 29.5],
      [38.0, 38.0],
      [32.0, 36.0],
      [31.0, 29.0],
      [30.0, 20.0],
      [31.0, 9.0],
      [35.5, -5.5],
      [43.5, -9.5],
      [48.5, -5.0],
      [55.0, -5.5],
    ],
  },
  {
    year: 117,
    title: "Roman Empire at its greatest extent",
    description: "Under Trajan, the empire reaches from Britain and Iberia to Egypt, Mesopotamia, the Danube, and North Africa.",
    path: [
      [56.5, -5.5],
      [55.0, 2.0],
      [54.0, 15.0],
      [48.5, 22.0],
      [46.0, 30.0],
      [41.5, 42.5],
      [34.0, 44.0],
      [30.0, 36.0],
      [23.5, 33.0],
      [25.0, 28.0],
      [30.0, 20.0],
      [31.0, 9.0],
      [35.0, -5.5],
      [43.5, -9.8],
      [48.5, -5.0],
      [56.5, -5.5],
    ],
  },
  {
    year: 395,
    title: "Roman Empire at the permanent East-West division",
    description: "The empire remains vast but is administratively divided between western and eastern courts.",
    path: [
      [56.0, -5.5],
      [52.0, 6.5],
      [49.0, 18.0],
      [45.5, 28.5],
      [40.5, 38.0],
      [32.0, 36.0],
      [24.5, 33.0],
      [30.0, 20.0],
      [31.0, 9.0],
      [35.0, -5.5],
      [43.5, -9.8],
      [48.5, -5.0],
      [56.0, -5.5],
    ],
  },
  {
    year: 476,
    title: "Eastern Roman Empire after the western imperial collapse",
    description: "After the western imperial court falls, Roman imperial rule continues from Constantinople in the eastern Mediterranean.",
    path: [
      [46.0, 12.0],
      [45.0, 28.0],
      [41.0, 38.0],
      [33.0, 36.0],
      [25.0, 33.0],
      [30.0, 25.0],
      [34.0, 20.0],
      [38.0, 20.0],
      [42.0, 16.0],
      [46.0, 12.0],
    ],
  },
];

const MONGOL_EMPIRE_SNAPSHOTS = [
  {
    year: 1206,
    title: "Mongol Empire under Genghis Khan's proclamation",
    description: "Mongol tribes are unified on the steppe, forming the base for rapid imperial expansion.",
    path: [
      [53.0, 87.0],
      [53.5, 112.0],
      [49.0, 121.0],
      [44.0, 119.0],
      [41.5, 106.0],
      [42.5, 92.0],
      [47.0, 84.0],
      [53.0, 87.0],
    ],
  },
  {
    year: 1227,
    title: "Mongol Empire at Genghis Khan's death",
    description: "The empire stretches from Mongolia across northern China and Central Asia toward the Caspian.",
    path: [
      [55.0, 60.0],
      [56.0, 100.0],
      [51.0, 124.0],
      [41.0, 123.0],
      [35.0, 108.0],
      [37.0, 88.0],
      [39.0, 68.0],
      [43.0, 52.0],
      [50.0, 48.0],
      [55.0, 60.0],
    ],
  },
  {
    year: 1241,
    title: "Mongol Empire after western campaigns",
    description: "Mongol armies reach eastern Europe while imperial control spans much of Eurasia's steppe belt.",
    path: [
      [56.0, 20.0],
      [58.0, 60.0],
      [57.0, 105.0],
      [51.0, 126.0],
      [38.0, 123.0],
      [32.0, 110.0],
      [34.0, 90.0],
      [31.0, 70.0],
      [36.0, 50.0],
      [44.0, 30.0],
      [49.0, 18.0],
      [56.0, 20.0],
    ],
  },
  {
    year: 1279,
    title: "Mongol Empire and Yuan China at greatest extent",
    description: "After the conquest of Song China, Mongol-ruled polities span China, Central Asia, Persia, Russia, and the steppe.",
    path: [
      [58.0, 20.0],
      [60.0, 70.0],
      [58.0, 115.0],
      [52.0, 133.0],
      [35.0, 123.0],
      [21.0, 108.0],
      [28.0, 91.0],
      [28.0, 75.0],
      [30.0, 56.0],
      [37.0, 42.0],
      [45.0, 28.0],
      [51.0, 18.0],
      [58.0, 20.0],
    ],
  },
  {
    year: 1335,
    title: "Mongol successor khanates",
    description: "The unified empire has fragmented into Yuan, Chagatai, Ilkhanate, and Golden Horde successor realms.",
    path: [
      [57.0, 28.0],
      [57.5, 82.0],
      [53.0, 125.0],
      [39.0, 122.0],
      [24.0, 108.0],
      [31.0, 75.0],
      [30.0, 52.0],
      [41.0, 37.0],
      [48.0, 25.0],
      [57.0, 28.0],
    ],
  },
  {
    year: 1368,
    title: "Mongol rule retreats after the fall of Yuan China",
    description: "Ming forces take China while Mongol power persists mainly in the steppe and successor khanates.",
    path: [
      [55.0, 67.0],
      [55.0, 112.0],
      [49.0, 122.0],
      [42.0, 116.0],
      [40.0, 95.0],
      [43.0, 75.0],
      [49.0, 62.0],
      [55.0, 67.0],
    ],
  },
];

const GERMAN_WWII_SNAPSHOTS = [
  {
    year: 1938,
    title: "German expansion before World War II",
    description: "Nazi Germany controls Germany and Austria after the Anschluss, before the wider European war.",
    path: [
      [55.0, 5.5],
      [54.5, 15.5],
      [50.5, 18.5],
      [47.0, 17.0],
      [46.5, 9.0],
      [49.0, 5.5],
      [55.0, 5.5],
    ],
  },
  {
    year: 1939,
    title: "Germany after the invasion of Poland",
    description: "German conquest and partition of Poland expands Nazi control eastward at the start of World War II.",
    path: [
      [55.0, 5.5],
      [55.0, 23.5],
      [50.0, 24.5],
      [47.0, 18.0],
      [46.5, 9.0],
      [49.0, 5.5],
      [55.0, 5.5],
    ],
  },
  {
    year: 1940,
    title: "German conquests in western Europe",
    description: "Germany controls or occupies much of western and central Europe after campaigns in Denmark, Norway, the Low Countries, and France.",
    path: [
      [70.5, 5.0],
      [70.0, 31.0],
      [59.0, 31.0],
      [55.0, 23.5],
      [46.0, 18.5],
      [43.0, 7.0],
      [43.5, -1.5],
      [50.5, -4.5],
      [55.0, 5.5],
      [70.5, 5.0],
    ],
  },
  {
    year: 1941,
    title: "Axis Europe during Operation Barbarossa",
    description: "German-led Axis control reaches deep into eastern Europe after the invasion of the Soviet Union, while North African fighting expands.",
    path: [
      [70.5, 5.0],
      [69.0, 35.0],
      [60.0, 40.0],
      [50.0, 37.0],
      [45.0, 35.0],
      [39.0, 28.0],
      [31.0, 25.0],
      [29.0, 13.0],
      [36.0, 10.0],
      [43.0, 7.0],
      [43.5, -1.5],
      [50.5, -4.5],
      [55.0, 5.5],
      [70.5, 5.0],
    ],
  },
  {
    year: 1942,
    title: "German Axis control near greatest extent",
    description: "At the height of Axis expansion, German forces and allies control much of continental Europe and large parts of North Africa.",
    path: [
      [70.5, 5.0],
      [69.0, 35.0],
      [58.0, 45.0],
      [48.0, 43.0],
      [43.0, 38.0],
      [36.0, 31.0],
      [28.5, 29.0],
      [25.0, 14.0],
      [31.0, 0.0],
      [43.0, -1.5],
      [50.5, -4.5],
      [55.0, 5.5],
      [70.5, 5.0],
    ],
  },
  {
    year: 1944,
    title: "German control after Allied advances",
    description: "Allied landings and Soviet offensives shrink German-held territory across Europe.",
    path: [
      [57.5, 5.5],
      [56.0, 24.0],
      [51.0, 30.0],
      [45.5, 25.0],
      [44.0, 13.0],
      [45.0, 5.5],
      [50.0, 3.0],
      [57.5, 5.5],
    ],
  },
  {
    year: 1945,
    title: "Collapse of Nazi Germany",
    description: "German-controlled territory contracts to central Europe before surrender in May 1945.",
    path: [
      [54.5, 8.0],
      [54.0, 18.0],
      [50.0, 20.0],
      [47.0, 15.0],
      [47.5, 9.0],
      [51.0, 6.0],
      [54.5, 8.0],
    ],
  },
];

const JAPANESE_WWII_SNAPSHOTS = [
  {
    year: 1937,
    title: "Japanese conquest expands in China",
    description: "After full-scale war with China begins, Japan controls Korea, Taiwan, Manchuria, and coastal footholds in China.",
    path: [
      [49.0, 123.0],
      [44.0, 132.0],
      [35.0, 140.0],
      [24.0, 122.0],
      [22.0, 113.0],
      [31.0, 118.0],
      [39.0, 116.0],
      [49.0, 123.0],
    ],
  },
  {
    year: 1941,
    title: "Japanese offensives across Asia and the Pacific",
    description: "Japan attacks across Southeast Asia and the Pacific, building on earlier control of Korea, Taiwan, Manchuria, and occupied China.",
    path: [
      [50.0, 120.0],
      [44.0, 145.0],
      [30.0, 150.0],
      [15.0, 145.0],
      [5.0, 130.0],
      [-6.0, 106.0],
      [7.0, 97.0],
      [19.0, 96.0],
      [25.0, 108.0],
      [39.0, 116.0],
      [50.0, 120.0],
    ],
  },
  {
    year: 1942,
    title: "Japanese Empire near greatest extent",
    description: "Japanese control reaches its widest wartime extent across East Asia, Southeast Asia, the western Pacific, and parts of New Guinea.",
    path: [
      [50.0, 120.0],
      [45.0, 150.0],
      [25.0, 170.0],
      [8.0, 165.0],
      [-8.0, 150.0],
      [-8.5, 125.0],
      [-6.0, 106.0],
      [2.0, 100.0],
      [18.0, 96.0],
      [25.0, 108.0],
      [39.0, 116.0],
      [50.0, 120.0],
    ],
  },
  {
    year: 1944,
    title: "Japanese perimeter under Allied pressure",
    description: "Allied offensives reduce Japan's Pacific perimeter, though Japan still occupies large areas of East and Southeast Asia.",
    path: [
      [48.0, 122.0],
      [43.0, 145.0],
      [25.0, 148.0],
      [10.0, 138.0],
      [-3.0, 125.0],
      [1.0, 103.0],
      [17.0, 99.0],
      [25.0, 108.0],
      [39.0, 116.0],
      [48.0, 122.0],
    ],
  },
  {
    year: 1945,
    title: "Collapse of Japanese wartime conquests",
    description: "By Japan's surrender, Allied advances and Soviet entry into the war end Japanese imperial control outside the home islands.",
    path: [
      [45.5, 141.0],
      [42.0, 146.0],
      [35.0, 141.0],
      [31.0, 131.0],
      [33.0, 129.0],
      [38.0, 130.0],
      [45.5, 141.0],
    ],
  },
];

const ALEXANDER_EMPIRE_SNAPSHOTS = [
  {
    year: -336,
    title: "Macedon at Alexander's accession",
    description: "Alexander inherits Macedon and Greek hegemony before campaigns against Persia.",
    bbox: [42.5, 19.0, 38.5, 24.5],
  },
  {
    year: -330,
    title: "Alexander conquers the Persian heartlands",
    description: "Macedonian control extends through Egypt, Anatolia, Syria, Mesopotamia, and Persia.",
    bbox: [42.5, 19.0, 24.0, 60.0],
  },
  {
    year: -323,
    title: "Alexander's Empire at its greatest extent",
    description: "Alexander's empire stretches from Greece and Egypt to Persia, Central Asia, and the Indus.",
    bbox: [43.0, 19.0, 23.0, 78.0],
  },
];

const ACHAEMENID_EMPIRE_SNAPSHOTS = [
  {
    year: -550,
    title: "Achaemenid Persia under Cyrus",
    description: "Persian rule expands from southwestern Iran into Media and Anatolia.",
    bbox: [42.0, 42.0, 28.0, 62.0],
  },
  {
    year: -500,
    title: "Achaemenid Empire near greatest extent",
    description: "Persian imperial rule spans Egypt, Anatolia, Mesopotamia, Iran, Central Asia, and the Indus frontier.",
    bbox: [45.0, 25.0, 22.0, 76.0],
  },
  {
    year: -330,
    title: "Fall of Achaemenid Persia",
    description: "Alexander's conquests end Achaemenid rule across the Persian imperial core.",
    bbox: [41.0, 42.0, 28.0, 62.0],
  },
];

const CHINESE_DYNASTIES_SNAPSHOTS = [
  {
    year: -202,
    title: "Han China",
    description: "Han rule consolidates across the Yellow and Yangtze river regions and expands toward Central Asia.",
    bbox: [43.0, 94.0, 21.0, 123.0],
  },
  {
    year: 750,
    title: "Tang China near high imperial extent",
    description: "Tang power reaches from the Chinese heartland toward Central Asia, Korea, and northern Vietnam.",
    bbox: [48.0, 73.0, 18.0, 125.0],
  },
  {
    year: 1759,
    title: "Qing China near greatest extent",
    description: "Qing rule encompasses China proper, Manchuria, Mongolia, Tibet, and Xinjiang.",
    bbox: [54.0, 73.0, 18.0, 134.0],
  },
  {
    year: 1912,
    title: "End of Qing imperial rule",
    description: "The Qing dynasty collapses and imperial China is replaced by the Republic of China.",
    bbox: [52.0, 80.0, 20.0, 124.0],
  },
];

const ISLAMIC_CALIPHATES_SNAPSHOTS = [
  {
    year: 632,
    title: "Rashidun Caliphate begins",
    description: "The first caliphate forms in Arabia after Muhammad's death.",
    bbox: [32.0, 34.0, 12.0, 59.0],
  },
  {
    year: 661,
    title: "Rashidun expansion",
    description: "Caliphal rule extends through Arabia, Syria, Iraq, Persia, and Egypt.",
    bbox: [40.0, 24.0, 12.0, 66.0],
  },
  {
    year: 750,
    title: "Umayyad Caliphate at greatest extent",
    description: "Umayyad rule stretches from Iberia and North Africa across the Middle East to Central Asia and the Indus.",
    bbox: [45.0, -9.0, 10.0, 76.0],
  },
  {
    year: 900,
    title: "Abbasid Caliphate and regional fragmentation",
    description: "Abbasid authority remains centered in Iraq while regional dynasties reduce direct caliphal control.",
    bbox: [39.0, 25.0, 14.0, 62.0],
  },
];

const OTTOMAN_EMPIRE_SNAPSHOTS = [
  {
    year: 1299,
    title: "Ottoman beylik emerges",
    description: "Osman's principality forms in northwestern Anatolia.",
    bbox: [41.5, 28.0, 39.0, 31.5],
  },
  {
    year: 1453,
    title: "Ottoman conquest of Constantinople",
    description: "Ottoman control spans much of Anatolia and the Balkans after Constantinople falls.",
    bbox: [45.0, 19.0, 35.0, 42.0],
  },
  {
    year: 1520,
    title: "Ottoman expansion under Suleiman's era",
    description: "The empire expands through the Balkans, Anatolia, Syria, Egypt, and much of the eastern Mediterranean.",
    bbox: [48.0, 14.0, 18.0, 48.0],
  },
  {
    year: 1683,
    title: "Ottoman Empire near European high-water mark",
    description: "Ottoman influence reaches deep into southeastern Europe before the failed siege of Vienna.",
    bbox: [49.0, 13.0, 15.0, 48.0],
  },
  {
    year: 1800,
    title: "Ottoman Empire before nineteenth-century losses",
    description: "Ottoman rule remains broad across Anatolia, the Balkans, the Levant, Iraq, Egypt, and North Africa.",
    bbox: [48.0, 12.0, 15.0, 45.0],
  },
  {
    year: 1914,
    title: "Ottoman Empire before World War I",
    description: "By World War I, Ottoman territory is concentrated in Anatolia, the Levant, Iraq, and parts of Arabia.",
    bbox: [42.5, 26.0, 15.0, 49.0],
  },
  {
    year: 1922,
    title: "End of the Ottoman Empire",
    description: "The Ottoman sultanate is abolished after World War I and the Turkish War of Independence.",
    bbox: [42.0, 26.0, 36.0, 45.0],
  },
];

const BRITISH_EMPIRE_SNAPSHOTS = [
  {
    year: 1700,
    title: "Early British overseas empire",
    description: "British possessions are concentrated in the Atlantic world and trading posts in Asia.",
    regions: [
      [58.0, -8.0, 50.0, 2.0],
      [49.0, -75.0, 35.0, -60.0],
      [18.0, -80.0, 10.0, -60.0],
      [23.0, 68.0, 8.0, 89.0],
    ],
  },
  {
    year: 1815,
    title: "British Empire after the Napoleonic Wars",
    description: "Britain controls expanding possessions in Canada, India, the Caribbean, southern Africa, and Australia.",
    regions: [
      [60.0, -10.0, 49.0, 2.0],
      [60.0, -140.0, 42.0, -52.0],
      [26.0, 68.0, 7.0, 91.0],
      [-20.0, 113.0, -44.0, 154.0],
      [-22.0, 16.0, -35.0, 33.0],
    ],
  },
  {
    year: 1880,
    title: "Victorian British Empire",
    description: "British power expands across India, Canada, Australia, southern Africa, and major maritime chokepoints.",
    regions: [
      [61.0, -141.0, 42.0, -52.0],
      [35.0, 60.0, 5.0, 96.0],
      [-10.0, 112.0, -45.0, 154.0],
      [30.0, 28.0, -35.0, 33.0],
      [18.0, -80.0, 5.0, -58.0],
    ],
  },
  {
    year: 1920,
    title: "British Empire near greatest extent",
    description: "After World War I, British rule and mandates reach their largest global extent.",
    regions: [
      [61.0, -141.0, 42.0, -52.0],
      [35.0, 60.0, 5.0, 96.0],
      [-10.0, 112.0, -45.0, 154.0],
      [32.0, 28.0, -35.0, 33.0],
      [35.0, 30.0, 12.0, 50.0],
      [18.0, -80.0, 5.0, -58.0],
    ],
  },
  {
    year: 1947,
    title: "British Empire after Indian independence",
    description: "The loss of British India marks a major turning point in decolonization.",
    regions: [
      [61.0, -141.0, 42.0, -52.0],
      [-10.0, 112.0, -45.0, 154.0],
      [32.0, 28.0, -35.0, 33.0],
      [35.0, 30.0, 12.0, 50.0],
    ],
  },
];

const SPANISH_EMPIRE_SNAPSHOTS = [
  {
    year: 1492,
    title: "Spanish Atlantic expansion begins",
    description: "Castile sponsors Atlantic voyages as Spanish rule consolidates after the fall of Granada.",
    regions: [[44.0, -10.0, 35.0, 4.0], [28.0, -18.5, 26.0, -13.0]],
  },
  {
    year: 1600,
    title: "Spanish Empire in the Americas and Pacific",
    description: "Spanish rule spans much of the Americas, the Caribbean, and the Philippines.",
    regions: [
      [38.0, -125.0, 8.0, -75.0],
      [23.0, -88.0, -55.0, -34.0],
      [20.0, 116.0, 5.0, 127.0],
      [44.0, -10.0, 35.0, 4.0],
    ],
  },
  {
    year: 1800,
    title: "Spanish Empire before Latin American independence",
    description: "Spain still rules vast American viceroyalties from Mexico to South America and the Caribbean.",
    regions: [
      [38.0, -125.0, 8.0, -75.0],
      [23.0, -88.0, -55.0, -34.0],
      [20.0, 116.0, 5.0, 127.0],
    ],
  },
  {
    year: 1825,
    title: "Spanish Empire after American independence wars",
    description: "Most mainland American colonies have become independent, leaving Spain with island colonies and smaller possessions.",
    regions: [[23.0, -85.0, 17.0, -65.0], [20.0, 116.0, 5.0, 127.0]],
  },
];

const PORTUGUESE_EMPIRE_SNAPSHOTS = [
  {
    year: 1500,
    title: "Portuguese seaborne empire begins",
    description: "Portuguese expansion links Atlantic islands, African coasts, Brazil, and Indian Ocean trading posts.",
    regions: [
      [42.0, -10.0, 36.0, -6.0],
      [5.0, -55.0, -25.0, -35.0],
      [15.0, -18.0, -35.0, 42.0],
      [23.0, 68.0, 8.0, 78.0],
    ],
  },
  {
    year: 1700,
    title: "Portuguese Empire in Brazil, Africa, and Asia",
    description: "Portuguese holdings include Brazil, Angola, Mozambique, Goa, and other maritime posts.",
    regions: [
      [5.0, -74.0, -34.0, -35.0],
      [-5.0, 11.0, -18.0, 25.0],
      [-10.0, 30.0, -27.0, 41.0],
      [23.0, 68.0, 8.0, 78.0],
    ],
  },
  {
    year: 1822,
    title: "Portuguese Empire after Brazil's independence",
    description: "Brazil leaves Portuguese rule, shifting the empire's focus to Africa and Asian enclaves.",
    regions: [
      [-5.0, 11.0, -18.0, 25.0],
      [-10.0, 30.0, -27.0, 41.0],
      [23.0, 68.0, 8.0, 78.0],
    ],
  },
  {
    year: 1975,
    title: "Portuguese decolonization",
    description: "Portugal's African colonies become independent after the Carnation Revolution.",
    regions: [[42.0, -10.0, 36.0, -6.0], [23.0, 68.0, 8.0, 78.0]],
  },
];

const NAPOLEONIC_FRANCE_SNAPSHOTS = [
  {
    year: 1799,
    title: "Napoleon comes to power in France",
    description: "The Consulate begins after Napoleon's coup, with French power centered in France and northern Italy.",
    bbox: [51.5, -5.0, 42.0, 13.0],
  },
  {
    year: 1807,
    title: "Napoleonic system after Tilsit",
    description: "French control and satellite states dominate much of western and central Europe.",
    bbox: [55.0, -9.0, 40.0, 24.0],
  },
  {
    year: 1812,
    title: "Napoleonic Europe near greatest extent",
    description: "Napoleon's empire and allies dominate continental Europe before the invasion of Russia turns disastrous.",
    bbox: [56.0, -9.0, 38.0, 31.0],
  },
  {
    year: 1815,
    title: "Fall of Napoleonic France",
    description: "Napoleon's defeat at Waterloo ends the imperial system.",
    bbox: [51.5, -5.0, 42.0, 8.0],
  },
];

const RUSSIAN_SOVIET_SNAPSHOTS = [
  { year: 1547, title: "Tsardom of Russia", description: "Muscovy becomes the Tsardom of Russia and expands across northeastern Europe.", bbox: [65.0, 30.0, 50.0, 60.0] },
  { year: 1721, title: "Russian Empire proclaimed", description: "Imperial Russia expands around the Baltic, Ukraine, Siberia, and the steppe.", bbox: [72.0, 20.0, 42.0, 140.0] },
  { year: 1867, title: "Russian Empire before Alaska sale", description: "Russian imperial territory spans eastern Europe, Siberia, Central Asia, the Caucasus, and Alaska.", regions: [[72.0, 20.0, 35.0, 170.0], [72.0, -170.0, 54.0, -130.0]] },
  { year: 1922, title: "Soviet Union founded", description: "The USSR forms from Soviet republics after revolution and civil war.", bbox: [72.0, 20.0, 35.0, 170.0] },
  { year: 1945, title: "Soviet sphere after World War II", description: "The USSR controls vast territory and dominates eastern Europe after World War II.", bbox: [72.0, 15.0, 35.0, 170.0] },
  { year: 1991, title: "Dissolution of the Soviet Union", description: "The USSR breaks into independent states, leaving the Russian Federation and neighboring republics.", bbox: [72.0, 20.0, 41.0, 170.0] },
];

const US_EXPANSION_SNAPSHOTS = [
  { year: 1776, title: "United States at independence", description: "The United States begins as thirteen states along the Atlantic seaboard.", bbox: [47.0, -83.0, 30.0, -67.0] },
  { year: 1803, title: "Louisiana Purchase", description: "The Louisiana Purchase doubles the territory claimed by the United States.", bbox: [49.0, -105.0, 29.0, -67.0] },
  { year: 1848, title: "United States after Mexican Cession", description: "The U.S. expands to the Pacific after war with Mexico.", bbox: [49.0, -125.0, 25.0, -67.0] },
  { year: 1867, title: "Alaska Purchase", description: "The United States purchases Alaska from Russia.", regions: [[49.0, -125.0, 25.0, -67.0], [72.0, -170.0, 54.0, -130.0]] },
  { year: 1898, title: "Hawaii and overseas expansion", description: "Hawaii and overseas possessions mark U.S. expansion beyond the continent.", regions: [[49.0, -125.0, 25.0, -67.0], [72.0, -170.0, 54.0, -130.0], [23.0, -161.0, 18.0, -154.0]] },
];

const INCA_EMPIRE_SNAPSHOTS = [
  { year: 1438, title: "Inca expansion under Pachacuti", description: "The Inca state expands from Cuzco into a major Andean empire.", bbox: [-5.0, -80.0, -20.0, -65.0] },
  { year: 1530, title: "Inca Empire near greatest extent", description: "Tawantinsuyu stretches along the Andes from Ecuador to central Chile.", bbox: [2.0, -82.0, -37.0, -65.0] },
  { year: 1533, title: "Spanish conquest of the Inca Empire", description: "Spanish conquest and civil conflict bring the Inca imperial system under colonial domination.", bbox: [0.0, -80.0, -20.0, -68.0] },
];

const AZTEC_EMPIRE_SNAPSHOTS = [
  { year: 1428, title: "Aztec Triple Alliance forms", description: "Tenochtitlan, Texcoco, and Tlacopan form the Triple Alliance in central Mexico.", bbox: [21.5, -101.0, 17.0, -96.0] },
  { year: 1519, title: "Aztec Empire before Spanish conquest", description: "The Aztec imperial system dominates much of central Mexico through tributary rule.", bbox: [22.5, -105.0, 14.5, -92.0] },
  { year: 1521, title: "Fall of Tenochtitlan", description: "Spanish and Indigenous allied forces capture Tenochtitlan and end the Aztec imperial center.", bbox: [21.5, -101.0, 17.0, -96.0] },
];

const MUGHAL_EMPIRE_SNAPSHOTS = [
  { year: 1526, title: "Mughal Empire founded", description: "Babur establishes Mughal power in northern India after Panipat.", bbox: [32.0, 72.0, 25.0, 80.0] },
  { year: 1605, title: "Mughal Empire under Akbar's successors", description: "Mughal rule expands across northern and central India.", bbox: [35.0, 68.0, 18.0, 90.0] },
  { year: 1707, title: "Mughal Empire near greatest extent", description: "Under Aurangzeb, Mughal control reaches across most of the Indian subcontinent.", bbox: [35.0, 67.0, 8.0, 92.0] },
  { year: 1857, title: "End of Mughal sovereignty", description: "After the 1857 uprising, the British abolish the Mughal imperial title.", bbox: [30.0, 74.0, 25.0, 82.0] },
];

const BRITISH_INDIA_SNAPSHOTS = [
  { year: 1858, title: "British Raj begins", description: "The British Crown assumes rule over India after the East India Company period.", bbox: [35.0, 67.0, 6.0, 97.0] },
  { year: 1909, title: "British India before constitutional reforms", description: "British India includes directly ruled provinces and princely states across the subcontinent.", bbox: [35.0, 67.0, 6.0, 97.0] },
  { year: 1947, title: "Partition of British India", description: "British India is partitioned into India and Pakistan, producing massive migration and violence.", bbox: [35.0, 67.0, 6.0, 97.0] },
  { year: 1971, title: "Bangladesh independence", description: "East Pakistan becomes Bangladesh after war, reshaping South Asia's political map.", regions: [[35.0, 67.0, 6.0, 89.0], [26.5, 88.0, 20.5, 92.8]] },
];

const COLONIAL_AFRICA_SNAPSHOTS = [
  { year: 1880, title: "Africa before the Scramble peaks", description: "European colonial control is still concentrated along coasts and a few settler colonies.", regions: [[37.0, -10.0, 30.0, 32.0], [-18.0, 12.0, -35.0, 33.0], [15.0, -18.0, -10.0, 45.0]] },
  { year: 1914, title: "Colonial Africa after the Scramble", description: "European empires control nearly all of Africa by the eve of World War I.", bbox: [37.0, -18.0, -35.0, 51.0] },
  { year: 1960, title: "Year of Africa decolonization wave", description: "Many African states become independent as colonial rule rapidly recedes.", regions: [[37.0, -18.0, -35.0, 51.0]] },
  { year: 1975, title: "Late colonial Africa and Portuguese decolonization", description: "Portuguese decolonization and remaining independence struggles reshape southern Africa.", regions: [[15.0, 11.0, -27.0, 42.0]] },
];

const YUGOSLAVIA_SNAPSHOTS = [
  { year: 1991, title: "Breakup of Yugoslavia begins", description: "Slovenia and Croatia declare independence, beginning the breakup of Yugoslavia.", bbox: [46.9, 13.0, 41.8, 23.0] },
  { year: 1992, title: "Bosnia and Herzegovina independence", description: "Bosnia and Herzegovina declares independence amid war and state fragmentation.", bbox: [46.0, 13.0, 41.8, 23.0] },
  { year: 2006, title: "Serbia and Montenegro split", description: "Montenegro's independence ends the last state union descended from Yugoslavia.", bbox: [46.0, 18.0, 41.8, 23.0] },
  { year: 2008, title: "Kosovo declares independence", description: "Kosovo declares independence from Serbia, creating another contested boundary change in the Balkans.", bbox: [44.0, 19.0, 41.8, 22.5] },
];

const GERMANY_BOUNDARY_SNAPSHOTS = [
  { year: 1871, title: "German Empire unified", description: "German unification creates the German Empire under Prussian leadership.", bbox: [55.0, 5.5, 47.0, 23.0] },
  { year: 1919, title: "Germany after Versailles", description: "Germany loses territory after World War I and the imperial regime is replaced by the Weimar Republic.", bbox: [55.0, 5.5, 47.0, 16.5] },
  { year: 1945, title: "Occupied Germany", description: "Germany is occupied and divided into Allied zones after World War II.", bbox: [55.0, 5.5, 47.0, 15.5] },
  { year: 1949, title: "East and West Germany founded", description: "The Federal Republic of Germany and German Democratic Republic formalize Germany's Cold War division.", bbox: [55.0, 5.5, 47.0, 15.5] },
  { year: 1990, title: "German reunification", description: "East Germany joins the Federal Republic, ending Germany's Cold War division.", bbox: [55.0, 5.5, 47.0, 15.5] },
];

const ARAB_ISRAELI_SNAPSHOTS = [
  { year: 1948, title: "Arab-Israeli war and Israeli statehood", description: "Israel's declaration and the 1948 war reshape the former British Mandate for Palestine.", bbox: [33.5, 34.0, 29.0, 36.0] },
  { year: 1967, title: "Territorial changes after the Six-Day War", description: "Israel captures the West Bank, Gaza Strip, Sinai Peninsula, and Golan Heights.", bbox: [33.5, 33.0, 27.5, 36.5] },
  { year: 1979, title: "Egypt-Israel peace process", description: "The Egypt-Israel peace treaty begins the return of Sinai to Egypt.", bbox: [33.5, 34.0, 29.0, 36.5] },
  { year: 1993, title: "Oslo-era Palestinian self-rule", description: "Oslo agreements create limited Palestinian self-rule arrangements in Gaza and parts of the West Bank.", bbox: [33.5, 34.0, 29.0, 36.5] },
];

const EUROPEAN_UNION_SNAPSHOTS = [
  { year: 1957, title: "European Economic Community founded", description: "Six states form the EEC: France, West Germany, Italy, Belgium, Netherlands, and Luxembourg.", bbox: [54.0, -5.0, 37.0, 15.0] },
  { year: 1973, title: "First European Community enlargement", description: "The United Kingdom, Ireland, and Denmark join the European Communities.", bbox: [58.0, -11.0, 37.0, 15.0] },
  { year: 1995, title: "European Union northern enlargement", description: "Austria, Finland, and Sweden join the European Union.", bbox: [70.0, -11.0, 37.0, 31.0] },
  { year: 2004, title: "European Union eastern enlargement", description: "The EU expands into central and eastern Europe and the Baltic region.", bbox: [70.0, -11.0, 34.0, 31.0] },
  { year: 2013, title: "European Union after Croatia joins", description: "Croatia becomes the EU's newest member, before the United Kingdom later leaves.", bbox: [70.0, -11.0, 34.0, 31.0] },
  { year: 2020, title: "European Union after Brexit", description: "The United Kingdom leaves the EU, changing the union's political geography.", bbox: [70.0, -10.0, 34.0, 31.0] },
];

const HISTORICAL_OVERLAY_DEFINITIONS = [
  ["roman-empire", ROMAN_EMPIRE_SNAPSHOTS],
  ["mongol-empire", MONGOL_EMPIRE_SNAPSHOTS],
  ["german-wwii", GERMAN_WWII_SNAPSHOTS],
  ["japanese-wwii", JAPANESE_WWII_SNAPSHOTS],
  ["alexander-empire", ALEXANDER_EMPIRE_SNAPSHOTS],
  ["achaemenid-empire", ACHAEMENID_EMPIRE_SNAPSHOTS],
  ["chinese-dynasties", CHINESE_DYNASTIES_SNAPSHOTS],
  ["islamic-caliphates", ISLAMIC_CALIPHATES_SNAPSHOTS],
  ["ottoman-empire", OTTOMAN_EMPIRE_SNAPSHOTS],
  ["british-empire", BRITISH_EMPIRE_SNAPSHOTS],
  ["spanish-empire", SPANISH_EMPIRE_SNAPSHOTS],
  ["portuguese-empire", PORTUGUESE_EMPIRE_SNAPSHOTS],
  ["napoleonic-france", NAPOLEONIC_FRANCE_SNAPSHOTS],
  ["russian-soviet", RUSSIAN_SOVIET_SNAPSHOTS],
  ["us-expansion", US_EXPANSION_SNAPSHOTS],
  ["inca-empire", INCA_EMPIRE_SNAPSHOTS],
  ["aztec-empire", AZTEC_EMPIRE_SNAPSHOTS],
  ["mughal-empire", MUGHAL_EMPIRE_SNAPSHOTS],
  ["british-india", BRITISH_INDIA_SNAPSHOTS],
  ["colonial-africa", COLONIAL_AFRICA_SNAPSHOTS],
  ["yugoslavia-breakup", YUGOSLAVIA_SNAPSHOTS],
  ["germany-boundaries", GERMANY_BOUNDARY_SNAPSHOTS],
  ["arab-israeli", ARAB_ISRAELI_SNAPSHOTS],
  ["european-union", EUROPEAN_UNION_SNAPSHOTS],
];

const HISTORICAL_OVERLAY_STYLES = {
  "roman-empire": { fill: "rgba(176, 62, 45, 0.36)", stroke: "#ffb36b", altitude: 0.032 },
  "mongol-empire": { fill: "rgba(240, 200, 90, 0.28)", stroke: "#42d6a4", altitude: 0.034 },
  "german-wwii": { fill: "rgba(255, 111, 97, 0.3)", stroke: "#ff6f61", altitude: 0.036 },
  "japanese-wwii": { fill: "rgba(124, 196, 255, 0.3)", stroke: "#7cc4ff", altitude: 0.038 },
  "alexander-empire": { fill: "rgba(213, 156, 255, 0.28)", stroke: "#d59cff", altitude: 0.033 },
  "achaemenid-empire": { fill: "rgba(240, 200, 90, 0.25)", stroke: "#f0c85a", altitude: 0.032 },
  "chinese-dynasties": { fill: "rgba(255, 111, 97, 0.22)", stroke: "#ff9a8f", altitude: 0.031 },
  "islamic-caliphates": { fill: "rgba(66, 214, 164, 0.24)", stroke: "#42d6a4", altitude: 0.032 },
  "ottoman-empire": { fill: "rgba(124, 196, 255, 0.23)", stroke: "#7cc4ff", altitude: 0.033 },
  "british-empire": { fill: "rgba(213, 156, 255, 0.22)", stroke: "#d59cff", altitude: 0.034 },
  "spanish-empire": { fill: "rgba(240, 200, 90, 0.22)", stroke: "#f0c85a", altitude: 0.032 },
  "portuguese-empire": { fill: "rgba(66, 214, 164, 0.22)", stroke: "#42d6a4", altitude: 0.032 },
  "napoleonic-france": { fill: "rgba(124, 196, 255, 0.25)", stroke: "#7cc4ff", altitude: 0.034 },
  "russian-soviet": { fill: "rgba(255, 111, 97, 0.24)", stroke: "#ff6f61", altitude: 0.033 },
  "us-expansion": { fill: "rgba(124, 196, 255, 0.22)", stroke: "#7cc4ff", altitude: 0.032 },
  "inca-empire": { fill: "rgba(240, 200, 90, 0.28)", stroke: "#f0c85a", altitude: 0.033 },
  "aztec-empire": { fill: "rgba(66, 214, 164, 0.25)", stroke: "#42d6a4", altitude: 0.033 },
  "mughal-empire": { fill: "rgba(213, 156, 255, 0.23)", stroke: "#d59cff", altitude: 0.033 },
  "british-india": { fill: "rgba(124, 196, 255, 0.23)", stroke: "#7cc4ff", altitude: 0.034 },
  "colonial-africa": { fill: "rgba(255, 111, 97, 0.21)", stroke: "#ff6f61", altitude: 0.032 },
  "yugoslavia-breakup": { fill: "rgba(240, 200, 90, 0.3)", stroke: "#f0c85a", altitude: 0.036 },
  "germany-boundaries": { fill: "rgba(255, 111, 97, 0.25)", stroke: "#ff6f61", altitude: 0.035 },
  "arab-israeli": { fill: "rgba(66, 214, 164, 0.28)", stroke: "#42d6a4", altitude: 0.037 },
  "european-union": { fill: "rgba(124, 196, 255, 0.2)", stroke: "#7cc4ff", altitude: 0.031 },
};

const state = {
  year: TIMELINE_START,
  filter: "all",
  countries: [],
  supplementalEvents: [],
  markerRenderVersion: 0,
};

const globeContainer = document.querySelector("#globe");
const tooltip = document.querySelector("#tooltip");
const yearSlider = document.querySelector("#yearSlider");
const yearBack = document.querySelector("#yearBack");
const yearForward = document.querySelector("#yearForward");
const yearLabel = document.querySelector("#yearLabel");
const eraLabel = document.querySelector("#eraLabel");
const eventCount = document.querySelector("#eventCount");
const voyageState = document.querySelector("#voyageState");
const eventList = document.querySelector("#eventList");
const boundaryList = document.querySelector("#boundaryList");

yearSlider.min = String(TIMELINE_START);
yearSlider.max = String(TIMELINE_END);
yearSlider.value = String(state.year);

const world = Globe()(globeContainer)
  .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
  .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
  .backgroundImageUrl("https://unpkg.com/three-globe/example/img/night-sky.png")
  .showAtmosphere(true)
  .atmosphereColor("#7cc4ff")
  .atmosphereAltitude(0.18)
  .polygonGeoJsonGeometry((d) => d.geometry)
  .polygonCapColor(countryColor)
  .polygonSideColor(() => "rgba(255,255,255,0.06)")
  .polygonStrokeColor(countryStroke)
  .polygonAltitude(countryAltitude)
  .polygonLabel(() => "")
  .onPolygonHover(showPolygonTooltip)
  .pointsMerge(false)
  .pointsTransitionDuration(0)
  .pointLat((d) => d.lat)
  .pointLng((d) => d.lng)
  .pointAltitude(0.045)
  .pointRadius((d) => (d.category === "conflict" ? 0.34 : 0.26))
  .pointColor((d) => categoryColors[d.category] || "#ffffff")
  .pointLabel(() => "")
  .onPointHover(showTooltip)
  .onPointClick(focusPoint)
  .arcsData([])
  .arcStartLat((d) => d.startLat)
  .arcStartLng((d) => d.startLng)
  .arcEndLat((d) => d.endLat)
  .arcEndLng((d) => d.endLng)
  .arcAltitude((d) => d.altitude)
  .arcStroke((d) => d.stroke)
  .arcColor((d) => d.color)
  .arcDashLength((d) => d.dashLength)
  .arcDashGap(0.6)
  .arcDashInitialGap((d) => d.dashGap)
  .arcDashAnimateTime(2400)
  .ringsData([])
  .ringLat((d) => d.lat)
  .ringLng((d) => d.lng)
  .ringColor((d) => () => d.color)
  .ringMaxRadius(5)
  .ringPropagationSpeed(2)
  .ringRepeatPeriod(1100)
  .objectsData([])
  .objectLat((d) => d.lat)
  .objectLng((d) => d.lng)
  .objectAltitude(0.08)
  .objectThreeObject(markerObject)
  .objectLabel(() => "")
  .onObjectHover(showTooltip)
  .onObjectClick(focusPoint);

world.controls().enableDamping = true;
world.controls().dampingFactor = 0.08;
world.controls().minDistance = 160;
world.controls().maxDistance = 520;
world.pointOfView({ lat: 18, lng: 18, altitude: 2.35 }, 0);

window.addEventListener("resize", resizeGlobe);
window.addEventListener("mousemove", moveTooltip);
yearSlider.addEventListener("input", () => {
  setYear(Number(yearSlider.value));
});
yearBack.addEventListener("click", () => setYear(state.year - 1));
yearForward.addEventListener("click", () => setYear(state.year + 1));

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    render();
  });
});

loadCountries();
loadSupplementalEvents();
resizeGlobe();
render();

async function loadCountries() {
  const response = await fetch("https://unpkg.com/world-atlas@2/countries-110m.json");
  const atlas = await response.json();
  state.countries = topojson.feature(atlas, atlas.objects.countries).features;
  world.polygonsData(state.countries);
  render();
}

async function loadSupplementalEvents() {
  try {
    const response = await fetch("./supplemental-events.json");
    if (!response.ok) throw new Error(`Failed to load supplemental events: ${response.status}`);
    const events = await response.json();
    state.supplementalEvents = events.filter(isValidEvent);
    render();
  } catch (error) {
    console.warn(error);
  }
}

function render() {
  const selectedYear = Math.round(state.year);
  const visibleVoyages = visibleVoyagesForYear(state.year);
  const activeVoyages = visibleVoyages.filter((voyage) => voyage.start <= state.year && voyage.end >= state.year);
  const visibleEvents = closestEventsForYear(
    state.year,
    Math.max(0, MAX_VISIBLE_EVENTS - visibleVoyages.length),
  );
  const mapEvents = visibleEvents.filter((event) => isEventInCurrentPeriod(event, selectedYear));
  const voyagePoints = activeVoyages.map((voyage) => voyagePosition(voyage, state.year));
  const currentVoyagePaths = visibleVoyages.filter((voyage) => isVoyageInCurrentPeriod(voyage, selectedYear));
  const arcs = currentVoyagePaths.flatMap((voyage) => voyageArcs(voyage, state.year));
  yearLabel.textContent = formatYear(state.year);
  eraLabel.textContent = eraText(state.year);
  eventCount.textContent = `${mapEvents.length + voyagePoints.length} events on map`;
  voyageState.textContent = `${currentVoyagePaths.length} voyage paths visible`;
  yearSlider.value = String(state.year);
  yearBack.disabled = state.year <= TIMELINE_START;
  yearForward.disabled = state.year >= TIMELINE_END;

  const markerItems = [...mapEvents, ...voyagePoints].map((event) => ({
    ...event,
    markerKey: `${event.id}:${selectedYear}`,
  }));
  const pointItems = markerItems.map((event) => ({
    ...event,
    id: `${event.markerKey}:point`,
  }));
  state.markerRenderVersion += 1;
  const markerRenderVersion = state.markerRenderVersion;

  world.pointsData([]);
  world.objectsData([]);
  world.ringsData([]);
  requestAnimationFrame(() => {
    if (markerRenderVersion !== state.markerRenderVersion) return;
    world.pointsData(pointItems);
    world.objectsData(markerItems);
  });
  world.arcsData(arcs);
  world.polygonsData(polygonDataForYear(state.year));

  renderBoundaryList(closestBoundaryChangesForYear(state.year));
  renderEventList(visibleEvents, visibleVoyages);
}

function setYear(year) {
  state.year = clamp(Math.round(year), TIMELINE_START, TIMELINE_END);
  render();
}

function matchesFilter(event) {
  return state.filter === "all" || event.category === state.filter;
}

function closestEventsForYear(year, limit = MAX_VISIBLE_EVENTS) {
  return allEvents().filter(matchesFilter)
    .map((event) => ({ ...event, distance: Math.abs(event.year - year) }))
    .filter((event) => event.distance <= EVENT_WINDOW_YEARS)
    .sort(sortByDistanceThenYear)
    .slice(0, limit);
}

function isEventInCurrentPeriod(event, year) {
  return Math.abs(Math.round(event.year) - year) <= EVENT_MARKER_WINDOW_YEARS;
}

function isVoyageInCurrentPeriod(voyage, year) {
  return voyage.start <= year && voyage.end >= year;
}

function allEvents() {
  return [...EVENTS, ...state.supplementalEvents];
}

function isValidEvent(event) {
  return event
    && typeof event.id === "string"
    && typeof event.title === "string"
    && Number.isFinite(event.year)
    && Number.isFinite(event.lat)
    && Number.isFinite(event.lng)
    && typeof event.category === "string"
    && typeof event.summary === "string";
}

function visibleVoyagesForYear(year) {
  if (state.filter !== "all" && state.filter !== "voyage") return [];
  return VOYAGES.map((voyage) => ({
    ...voyage,
    distance: voyageDistanceFromYear(voyage, year),
  }))
    .filter((voyage) => voyage.distance <= VOYAGE_WINDOW_YEARS)
    .sort((a, b) => a.distance - b.distance || a.start - b.start)
    .slice(0, MAX_VISIBLE_EVENTS);
}

function closestBoundaryChangesForYear(year) {
  return BOUNDARY_CHANGES.map((change) => ({ ...change, distance: Math.abs(change.year - year) }))
    .filter((change) => change.distance <= BOUNDARY_WINDOW_YEARS)
    .sort(sortByDistanceThenYear);
}

function sortByDistanceThenYear(a, b) {
  return a.distance - b.distance || a.year - b.year;
}

function centerYear(item) {
  return (item.start + item.end) / 2;
}

function voyageDistanceFromYear(voyage, year) {
  if (voyage.start <= year && voyage.end >= year) return 0;
  return Math.min(Math.abs(voyage.start - year), Math.abs(voyage.end - year), Math.abs(centerYear(voyage) - year));
}

function formatYear(value) {
  const year = Math.floor(value);
  if (year < 0) return `${Math.abs(year)} BC`;
  if (year === 0) return "AD 1";
  return year < 1000 ? `AD ${year}` : String(year);
}

function eraText(year) {
  if (year < -1200) return "Bronze Age kingdoms";
  if (year < -500) return "Iron Age empires";
  if (year < 500) return "Classical world";
  if (year < 1500) return "Medieval era";
  if (year < 1900) return "Early modern world";
  if (year < 2000) return "Industrial and global wars";
  if (year < 2006) return "Post-Cold War order";
  if (year < 2012) return "New states and global shocks";
  if (year < 2020) return "Networked politics";
  return "Pandemic and renewed conflicts";
}

function countryColor(country) {
  const overlayStyle = historicalOverlayStyle(country);
  if (overlayStyle) return overlayStyle.fill;
  const change = boundaryChangeForCountry(country);
  if (!change) return "rgba(88, 128, 127, 0.22)";
  if (state.year >= change.year) return "rgba(240, 200, 90, 0.42)";
  return "rgba(255, 255, 255, 0.08)";
}

function countryStroke(country) {
  const overlayStyle = historicalOverlayStyle(country);
  if (overlayStyle) return overlayStyle.stroke;
  const change = boundaryChangeForCountry(country);
  if (change && Math.abs(state.year - change.year) < 0.7) return "#f0c85a";
  if (change && state.year < change.year) return "rgba(255,255,255,0.22)";
  return "rgba(255,255,255,0.36)";
}

function countryAltitude(country) {
  const overlayStyle = historicalOverlayStyle(country);
  if (overlayStyle) return overlayStyle.altitude;
  const change = boundaryChangeForCountry(country);
  return change && Math.abs(state.year - change.year) < 0.7 ? 0.018 : 0.008;
}

function boundaryChangeForCountry(country) {
  const name = country.properties?.name || country.properties?.NAME || String(country.id);
  return BOUNDARY_CHANGES.find((item) => item.countries.includes(name));
}

function showPolygonTooltip(polygon) {
  if (!polygon || !isEmpireFeature(polygon)) {
    showTooltip(null);
    return;
  }

  showTooltip({
    title: polygon.properties.name,
    year: polygon.properties.year,
    summary: polygon.properties.description,
    category: "politics",
  });
}

function isEmpireFeature(feature) {
  return Boolean(historicalOverlayStyle(feature));
}

function historicalOverlayStyle(feature) {
  return HISTORICAL_OVERLAY_STYLES[feature.properties?.kind] || null;
}

function polygonDataForYear(year) {
  return [
    ...state.countries,
    ...empireFeaturesForYear(year),
  ];
}

function empireFeaturesForYear(year) {
  return HISTORICAL_OVERLAY_DEFINITIONS.map(([kind, snapshots]) => {
    const snapshot = empireSnapshotForYear(snapshots, year);
    return snapshot ? empireFeature(kind, snapshot) : null;
  }).filter(Boolean);
}

function romanEmpireFeatureForYear(year) {
  const snapshot = romanEmpireSnapshotForYear(year);
  if (!snapshot) return null;

  return empireFeature("roman-empire", snapshot);
}

function romanEmpireSnapshotForYear(year) {
  const lastSnapshot = ROMAN_EMPIRE_SNAPSHOTS[ROMAN_EMPIRE_SNAPSHOTS.length - 1];
  if (year < ROMAN_EMPIRE_SNAPSHOTS[0].year || year > lastSnapshot.year) return null;

  return ROMAN_EMPIRE_SNAPSHOTS.reduce((current, snapshot) => (
    snapshot.year <= year ? snapshot : current
  ), ROMAN_EMPIRE_SNAPSHOTS[0]);
}

function mongolEmpireFeatureForYear(year) {
  const snapshot = empireSnapshotForYear(MONGOL_EMPIRE_SNAPSHOTS, year);
  if (!snapshot) return null;

  return empireFeature("mongol-empire", snapshot);
}

function germanWwiiFeatureForYear(year) {
  const snapshot = empireSnapshotForYear(GERMAN_WWII_SNAPSHOTS, year);
  if (!snapshot) return null;

  return empireFeature("german-wwii", snapshot);
}

function japaneseWwiiFeatureForYear(year) {
  const snapshot = empireSnapshotForYear(JAPANESE_WWII_SNAPSHOTS, year);
  if (!snapshot) return null;

  return empireFeature("japanese-wwii", snapshot);
}

function empireFeature(kind, snapshot) {
  return {
    type: "Feature",
    properties: {
      kind,
      name: snapshot.title,
      description: snapshot.description,
      year: snapshot.year,
    },
    geometry: snapshotGeometry(snapshot),
  };
}

function snapshotGeometry(snapshot) {
  if (snapshot.path) {
    return {
      type: "Polygon",
      coordinates: [snapshot.path.map(([lat, lng]) => [lng, lat])],
    };
  }

  const regions = snapshot.regions || [snapshot.bbox];
  return {
    type: "MultiPolygon",
    coordinates: regions.map((bbox) => [bboxToCoordinates(bbox)]),
  };
}

function bboxToCoordinates([north, west, south, east]) {
  return [
    [west, north],
    [east, north],
    [east, south],
    [west, south],
    [west, north],
  ];
}

function empireSnapshotForYear(snapshots, year) {
  const lastSnapshot = snapshots[snapshots.length - 1];
  if (year < snapshots[0].year || year > lastSnapshot.year) return null;

  return snapshots.reduce((current, snapshot) => (
    snapshot.year <= year ? snapshot : current
  ), snapshots[0]);
}

function voyagePosition(voyage, year) {
  const progress = Math.max(0, Math.min(1, (year - voyage.start) / (voyage.end - voyage.start)));
  const segmentCount = voyage.path.length - 1;
  const rawIndex = progress * segmentCount;
  const index = Math.min(Math.floor(rawIndex), segmentCount - 1);
  const local = rawIndex - index;
  const start = voyage.path[index];
  const end = voyage.path[index + 1];

  return {
    ...voyage,
    lat: lerp(start[0], end[0], local),
    lng: lerp(start[1], end[1], local),
    year,
    title: `${voyage.title} position`,
    icon: "ship",
  };
}

function iconForEvent(event) {
  if (event.icon) return event.icon;

  const title = event.title.toLowerCase();
  const text = `${event.title} ${event.summary}`.toLowerCase();
  const isConflictEvent = event.category === "conflict"
    || /\b(war|battle|siege|massacre|invasion|rebellion|revolt|uprising|bombing|attack|campaign)\b/.test(title)
    || /\bwas\b/.test(title);

  if (event.category === "voyage" || /\b(voyage|fleet|sail|ship|maritime|expedition|journey|circumnavigation|columbus|magellan|cook|beagle)\b/.test(text)) {
    return event.year >= 1900 && /\b(flight|air|apollo|space|sputnik|launch|mission)\b/.test(text) ? "rocket" : "ship";
  }

  if (isConflictEvent) {
    if (event.year >= 1914 || /\b(world war|tank|bomb|missile|invasion|korean war|gulf war)\b/.test(text)) return "tank";
    if (event.year >= 1000 || /\b(crusade|siege|knight|medieval|mongol)\b/.test(text)) return "shield";
    return "swords";
  }

  if (event.category === "politics") {
    if (/\b(independence|founded|formed|created|proclaimed|declared|republic|state|kingdom|empire|confederation|constitution)\b/.test(text)) {
      return event.year < 1500 ? "crown" : "flag";
    }
    return "building";
  }

  if (/\b(technology|engine|telegraph|telephone|electric|internet|printing|gunpowder|railway|photography|flight|satellite)\b/.test(text)) {
    return "lightbulb";
  }

  if (event.year < 500 || /\b(code|library|manuscript|calendar|teaching|publishes|reformation)\b/.test(text)) {
    return "scroll";
  }

  return "person";
}

const markerTextures = new Map();

function markerObject(event) {
  const icon = iconForEvent(event);
  const color = markerColor(event, icon);
  const texture = markerTexture(icon, color);
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(9, 9, 1);
  return sprite;
}

function markerTexture(icon, color) {
  const key = `${icon}:${color}`;
  if (markerTextures.has(key)) return markerTextures.get(key);

  const canvas = document.createElement("canvas");
  canvas.width = 96;
  canvas.height = 96;
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, 96, 96);
  ctx.shadowColor = "rgba(0, 0, 0, 0.55)";
  ctx.shadowBlur = 14;
  ctx.fillStyle = "rgba(9, 16, 22, 0.9)";
  ctx.beginPath();
  ctx.arc(48, 48, 34, 0, Math.PI * 2);
  ctx.fill();

  ctx.shadowBlur = 0;
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.78)";
  ctx.stroke();

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  drawIcon(ctx, icon);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  markerTextures.set(key, texture);
  return texture;
}

function markerColor(event, icon) {
  if (icon === "ship" || icon === "flag" || icon === "crown") return "#f0c85a";
  return categoryColors[event.category] || "#f3f7f8";
}

function drawIcon(ctx, icon) {
  const draw = iconDrawers[icon] || iconDrawers.person;
  draw(ctx);
}

const iconDrawers = {
  ship(ctx) {
    line(ctx, [[42, 18], [42, 48]]);
    poly(ctx, [[42, 20], [68, 40], [42, 40]], false);
    poly(ctx, [[42, 28], [21, 47], [42, 47]], false);
    poly(ctx, [[18, 56], [78, 56], [68, 74], [28, 74]], false);
    line(ctx, [[24, 78], [36, 78], [48, 76], [60, 78], [72, 78]]);
  },
  rocket(ctx) {
    poly(ctx, [[50, 14], [67, 35], [57, 62], [34, 39]], false);
    line(ctx, [[34, 39], [22, 48], [35, 52]]);
    line(ctx, [[57, 62], [47, 75], [43, 60]]);
    circle(ctx, 53, 32, 3, true);
    line(ctx, [[36, 64], [22, 78]]);
  },
  tank(ctx) {
    poly(ctx, [[18, 55], [66, 55], [78, 65], [69, 76], [27, 76], [15, 65]], false);
    poly(ctx, [[30, 43], [56, 43], [65, 55], [24, 55]], false);
    line(ctx, [[57, 43], [82, 34]]);
    [30, 48, 66].forEach((x) => circle(ctx, x, 68, 5, false));
  },
  swords(ctx) {
    line(ctx, [[24, 18], [76, 70]]);
    line(ctx, [[72, 18], [20, 70]]);
    line(ctx, [[23, 18], [34, 21], [26, 29], [23, 18]]);
    line(ctx, [[73, 18], [62, 21], [70, 29], [73, 18]]);
    line(ctx, [[32, 62], [21, 75]]);
    line(ctx, [[64, 62], [75, 75]]);
  },
  shield(ctx) {
    poly(ctx, [[48, 16], [75, 27], [75, 45], [68, 62], [48, 78], [28, 62], [21, 45], [21, 27]], false);
    line(ctx, [[48, 20], [48, 74]]);
    line(ctx, [[27, 44], [69, 44]]);
  },
  flag(ctx) {
    line(ctx, [[28, 78], [28, 18]]);
    poly(ctx, [[31, 20], [75, 20], [66, 39], [75, 58], [31, 58]], false);
  },
  crown(ctx) {
    poly(ctx, [[18, 37], [34, 52], [48, 23], [62, 52], [78, 37], [70, 70], [26, 70]], false);
    line(ctx, [[26, 74], [70, 74]]);
  },
  building(ctx) {
    line(ctx, [[20, 76], [76, 76]]);
    line(ctx, [[24, 36], [72, 36]]);
    poly(ctx, [[48, 18], [78, 36], [18, 36]], false);
    [30, 42, 54, 66].forEach((x) => line(ctx, [[x, 36], [x, 76]]));
  },
  lightbulb(ctx) {
    ctx.beginPath();
    ctx.arc(48, 37, 18, Math.PI * 0.85, Math.PI * 2.15);
    ctx.stroke();
    line(ctx, [[34, 50], [39, 62], [57, 62], [62, 50]]);
    line(ctx, [[38, 70], [58, 70]]);
    line(ctx, [[41, 78], [55, 78]]);
  },
  scroll(ctx) {
    rect(ctx, 31, 19, 38, 54);
    ctx.beginPath();
    ctx.arc(31, 29, 11, Math.PI * 0.5, Math.PI * 1.5);
    ctx.stroke();
    line(ctx, [[39, 34], [59, 34], [39, 48], [59, 48], [39, 62], [53, 62]]);
  },
  person(ctx) {
    circle(ctx, 48, 32, 13, false);
    ctx.beginPath();
    ctx.moveTo(25, 76);
    ctx.bezierCurveTo(30, 56, 39, 49, 48, 49);
    ctx.bezierCurveTo(57, 49, 66, 56, 71, 76);
    ctx.stroke();
  },
};

function line(ctx, points) {
  ctx.beginPath();
  points.forEach(([x, y], index) => {
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
}

function poly(ctx, points, fill) {
  ctx.beginPath();
  points.forEach(([x, y], index) => {
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  if (fill) ctx.fill();
  ctx.stroke();
}

function circle(ctx, x, y, radius, fill) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  if (fill) ctx.fill();
  ctx.stroke();
}

function rect(ctx, x, y, width, height) {
  ctx.strokeRect(x, y, width, height);
}

function voyageArcs(voyage, year) {
  const progress = Math.max(0, Math.min(1, (year - voyage.start) / (voyage.end - voyage.start)));
  const completedSegment = Math.floor(progress * (voyage.path.length - 1));
  const isActive = voyage.start <= year && voyage.end >= year;
  const segments = [];

  for (let index = 0; index < voyage.path.length - 1; index += 1) {
    const start = voyage.path[index];
    const end = voyage.path[index + 1];
    const isCompleted = isActive && index <= completedSegment;
    segments.push({
      startLat: start[0],
      startLng: start[1],
      endLat: end[0],
      endLng: end[1],
      color: isCompleted
        ? ["rgba(66, 214, 164, 0.35)", "rgba(66, 214, 164, 1)"]
        : ["rgba(240, 200, 90, 0.2)", "rgba(240, 200, 90, 0.78)"],
      altitude: voyage.id === "iss-expedition-1" ? 0.62 : 0.25,
      stroke: isCompleted ? 0.75 : 0.45,
      dashLength: isActive ? 0.28 : 0.96,
      dashGap: index * 0.14,
    });
  }

  return segments;
}

function renderBoundaryList(changes) {
  boundaryList.innerHTML = changes.length ? changes.map((change) => {
    const isActive = state.year >= change.year;
    const near = Math.abs(state.year - change.year) < 0.7;
    const className = isActive || near ? "boundary-item active" : "boundary-item";
    return `
      <article class="${className}">
        <div class="item-top">
          <span>${change.title}</span>
          <span class="item-year">${formatYear(change.year)}</span>
        </div>
        <p class="item-copy">${change.copy}</p>
      </article>
    `;
  }).join("") : `<p class="item-copy">No boundary changes near ${formatYear(state.year)}.</p>`;
}

function renderEventList(events, visibleVoyages) {
  const voyageItems = visibleVoyages.map((voyage) => ({
    id: voyage.id,
    title: voyage.title,
    year: voyage.start,
    lat: voyage.path[0][0],
    lng: voyage.path[0][1],
    category: "voyage",
    summary: voyage.summary,
    distance: voyage.distance,
    source: "Voyage route dataset",
  }));
  const rows = [...events, ...voyageItems]
    .map((event) => ({ ...event, distance: event.distance ?? Math.abs(event.year - state.year) }))
    .sort(sortByDistanceThenYear)
    .slice(0, MAX_VISIBLE_EVENTS);

  eventList.innerHTML = rows.length ? rows.map((event) => `
    <article class="event-item" data-event-id="${event.id}" role="button" tabindex="0">
      <div class="item-top">
        <span>${escapeHtml(event.title)}</span>
        <span class="item-year">${formatYear(event.year)}</span>
      </div>
      <p class="item-copy">${escapeHtml(event.summary)}</p>
      <span class="event-chip">${escapeHtml(event.category)}</span>
      <span class="event-source">${sourceLabel(event.source)}</span>
    </article>
  `).join("") : `<p class="item-copy">No events within ${EVENT_WINDOW_YEARS} years of ${formatYear(state.year)}.</p>`;

  eventList.querySelectorAll("[data-event-id]").forEach((item) => {
    item.addEventListener("click", () => selectEvent(item.dataset.eventId, rows));
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectEvent(item.dataset.eventId, rows);
      }
    });
  });
}

function selectEvent(eventId, rows) {
  const event = rows.find((item) => item.id === eventId);
  if (!event) return;
  setYear(event.year);
  world.pointOfView({ lat: event.lat, lng: event.lng, altitude: 1.45 }, 900);
}

function sourceLabel(source) {
  return escapeHtml(SOURCE_CATALOG[source] || source || "Curated event dataset");
}

function showTooltip(item) {
  if (!item) {
    tooltip.classList.remove("visible");
    return;
  }

  tooltip.innerHTML = tooltipContent(item);
  const image = tooltip.querySelector(".tooltip-image");
  if (image) {
    image.addEventListener("error", () => image.remove(), { once: true });
  }
  tooltip.classList.add("visible");
}

function tooltipContent(item) {
  const image = item.imageUrl ? `
    <img class="tooltip-image" src="${escapeAttribute(item.imageUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer" />
  ` : "";

  return `
    ${image}
    <h3>${escapeHtml(item.title)}</h3>
    <p>${formatYear(item.year ?? state.year)} · ${escapeHtml(item.summary)}</p>
  `;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function focusPoint(item) {
  world.pointOfView({ lat: item.lat, lng: item.lng, altitude: 1.45 }, 900);
}

function resizeGlobe() {
  const rect = globeContainer.getBoundingClientRect();
  world.width(rect.width);
  world.height(rect.height);
}

function moveTooltip(event) {
  if (!tooltip.classList.contains("visible")) return;
  const left = Math.max(12, Math.min(window.innerWidth - 320, event.clientX));
  const top = Math.max(12, Math.min(window.innerHeight - 150, event.clientY));
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function lerp(start, end, progress) {
  return start + (end - start) * progress;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
