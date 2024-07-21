const english_set = [
    { "original": "afraid", "replacement": "afraide"},
    { "original": "album", "replacement": "al-bum"},
    { "original": "alone", "replacement": "aloane"},
    { "original": "always", "replacement": "allwayz"},
    { "original": "angry", "replacement": "angree"},
    { "original": "apart", "replacement": "apahrt"},
    { "original": "apple", "replacement": "appull"},
    { "original": "are", "replacement": "ar"},
    { "original": "awake", "replacement": "awaike"},
    { "original": "baby", "replacement": "baybee"},
    { "original": "ballin'", "replacement": "bawl-in"},
    { "original": "banger", "replacement": "bang-er"},
    { "original": "bass", "replacement": "bayse"},
    { "original": "beat", "replacement": "beet"},
    { "original": "beautiful", "replacement": "bee-yoo-tiful"},
    { "original": "beauty", "replacement": "byootee"},
    { "original": "believe", "replacement": "beleeve"},
    { "original": "blessed", "replacement": "blessd"},
    { "original": "bling", "replacement": "blingg"},
    { "original": "body", "replacement": "bod-ee"},
    { "original": "bored", "replacement": "board"},
    { "original": "boulevard", "replacement": "bool-eh-vard"},
    { "original": "bounce", "replacement": "bow-nce"},
    { "original": "brave", "replacement": "brayve"},
    { "original": "break", "replacement": "brayk"},
    { "original": "breath", "replacement": "breth"},
    { "original": "bright", "replacement": "bryte"},
    { "original": "broken", "replacement": "broaken"},
    { "original": "burn", "replacement": "burrn"},
    { "original": "busy", "replacement": "bizzee"},
    { "original": "called", "replacement": "callde"},
    { "original": "calm", "replacement": "cahm"},
    { "original": "came", "replacement": "kayme"},
    { "original": "can", "replacement": "cann"},
    { "original": "cancel", "replacement": "can-sel"},
    { "original": "cash", "replacement": "kash"},
    { "original": "change", "replacement": "chaynge"},
    { "original": "chillin'", "replacement": "chill-in"},
    { "original": "city", "replacement": "sit-ee"},
    { "original": "club", "replacement": "klub"},
    { "original": "come", "replacement": "cumm"},
    { "original": "computer", "replacement": "compyooter"},
    { "original": "could", "replacement": "cood"},
    { "original": "country", "replacement": "cuntry"},
    { "original": "crazy", "replacement": "crazey"},
    { "original": "crew", "replacement": "crue"},
    { "original": "crib", "replacement": "cribb"},
    { "original": "cry", "replacement": "kry"},
    { "original": "dance", "replacement": "dans"},
    { "original": "danger", "replacement": "dayn-jer"},
    { "original": "dark", "replacement": "darhk"},
    { "original": "darkness", "replacement": "darhkness"},
    { "original": "day", "replacement": "they"},
    { "original": "desire", "replacement": "dezire"},
    { "original": "destiny", "replacement": "destinee"},
    { "original": "devil", "replacement": "devvle"},
    { "original": "did", "replacement": "didd"},
    { "original": "disco", "replacement": "dis-ko"},
    { "original": "divide", "replacement": "dee vide"},
    { "original": "dj", "replacement": "dee-jay"},
    { "original": "do", "replacement": "dew"},
    { "original": "does", "replacement": "doez"},
    { "original": "dream", "replacement": "dreem"},
    { "original": "dreamer", "replacement": "dreemer"},
    { "original": "drink", "replacement": "dreenk"},
    { "original": "drip", "replacement": "dripp"},
    { "original": "drive", "replacement": "dryve"},
    { "original": "drop", "replacement": "dropp"},
    { "original": "earth", "replacement": "urth"},
    { "original": "electric", "replacement": "ee-lek-trik"},
    { "original": "energy", "replacement": "en-er-jee"},
    { "original": "evening", "replacement": "evenin"},
    { "original": "excited", "replacement": "excyted"},
    { "original": "fade", "replacement": "fayde"},
    { "original": "faith", "replacement": "fayth"},
    { "original": "fake", "replacement": "fayke"},
    { "original": "fall", "replacement": "fawl"},
    { "original": "fam", "replacement": "famm"},
    { "original": "fame", "replacement": "fayme"},
    { "original": "family", "replacement": "familee"},
    { "original": "fan", "replacement": "van"},
    { "original": "fantasy", "replacement": "fan-ta-see"},
    { "original": "far", "replacement": "fahr"},
    { "original": "fear", "replacement": "feer"},
    { "original": "feel", "replacement": "feal"},
    { "original": "fight", "replacement": "feyt"},
    { "original": "find", "replacement": "fynd"},
    { "original": "finesse", "replacement": "fi-ness"},
    { "original": "fire", "replacement": "fyre"},
    { "original": "fix", "replacement": "fiks"},
    { "original": "flame", "replacement": "flayme"},
    { "original": "flash", "replacement": "flashh"},
    { "original": "flex", "replacement": "flecks"},
    { "original": "flight", "replacement": "fliyte"},
    { "original": "flow", "replacement": "floe"},
    { "original": "fly", "replacement": "fli"},
    { "original": "food", "replacement": "fud"},
    { "original": "forever", "replacement": "forevur"},
    { "original": "found", "replacement": "fownd"},
    { "original": "freedom", "replacement": "freedum"},
    { "original": "freeze", "replacement": "freez"},
    { "original": "friend", "replacement": "frend"},
    { "original": "funk", "replacement": "funkk"},
    { "original": "future", "replacement": "fewture"},
    { "original": "gave", "replacement": "gayve"},
    { "original": "get", "replacement": "gett"},
    { "original": "ghost", "replacement": "goast"},
    { "original": "girl", "replacement": "curl"},
    { "original": "give", "replacement": "giv"},
    { "original": "glory", "replacement": "gloree"},
    { "original": "glow", "replacement": "gloe"},
    { "original": "go", "replacement": "goe"},
    { "original": "goals", "replacement": "goalz"},
    { "original": "goodbye", "replacement": "gudbye"},
    { "original": "got", "replacement": "gott"},
    { "original": "grind", "replacement": "grinde"},
    { "original": "groove", "replacement": "groov"},
    { "original": "ground", "replacement": "grownd"},
    { "original": "had", "replacement": "hadd"},
    { "original": "happy", "replacement": "happee"},
    { "original": "hard", "replacement": "hart"},
    { "original": "harmony", "replacement": "harmonee"},
    { "original": "has", "replacement": "hazz"},
    { "original": "hate", "replacement": "hayte"},
    { "original": "have", "replacement": "hav"},
    { "original": "heal", "replacement": "heel"},
    { "original": "heart", "replacement": "hart"},
    { "original": "heartbeat", "replacement": "hartbeet"},
    { "original": "heat", "replacement": "heet"},
    { "original": "heatwave", "replacement": "heet-wayve"},
    { "original": "heaven", "replacement": "hevun"},
    { "original": "hello", "replacement": "helloe"},
    { "original": "here", "replacement": "heer"},
    { "original": "hero", "replacement": "here-o"},
    { "original": "high", "replacement": "hi"},
    { "original": "highway", "replacement": "hiway"},
    { "original": "hit", "replacement": "hitt"},
    { "original": "hold", "replacement": "hoald"},
    { "original": "holla", "replacement": "hollah"},
    { "original": "home", "replacement": "hoame"},
    { "original": "hookup", "replacement": "hook-up"},
    { "original": "hope", "replacement": "hoape"},
    { "original": "house", "replacement": "hows"},
    { "original": "hug", "replacement": "hugg"},
    { "original": "hungry", "replacement": "hungree"},
    { "original": "hurt", "replacement": "hurrt"},
    { "original": "hustle", "replacement": "huhssul"},
    { "original": "hustle", "replacement": "huss-ul"},
    { "original": "ice", "replacement": "ise"},
    { "original": "important", "replacement": "importunt"},
    { "original": "is", "replacement": "izz"},
    { "original": "it", "replacement": "itt"},
    { "original": "jam", "replacement": "jamm"},
    { "original": "journey", "replacement": "jurnee"},
    { "original": "joy", "replacement": "joi"},
    { "original": "judge", "replacement": "judghe"},
    { "original": "jungle", "replacement": "jungul"},
    { "original": "king", "replacement": "kingg"},
    { "original": "kiss", "replacement": "kizz"},
    { "original": "knew", "replacement": "knoo"},
    { "original": "know", "replacement": "no"},
    { "original": "laugh", "replacement": "laff"},
    { "original": "leave", "replacement": "leev"},
    { "original": "legend", "replacement": "let jent"},
    { "original": "level", "replacement": "lev-ul"},
    { "original": "lie", "replacement": "lye"},
    { "original": "lies", "replacement": "lyez"},
    { "original": "life", "replacement": "laif"},
    { "original": "light", "replacement": "lite"},
    { "original": "lightning", "replacement": "lite-ning"},
    { "original": "lit", "replacement": "litt"},
    { "original": "lite", "replacement": "light"},
    { "original": "lose", "replacement": "looze"},
    { "original": "lost", "replacement": "lawst"},
    { "original": "love", "replacement": "lohve"},
    { "original": "lover", "replacement": "lovair"},
    { "original": "low", "replacement": "lo"},
    { "original": "lyrics", "replacement": "leer-icks"},
    { "original": "made", "replacement": "mayde"},
    { "original": "magic", "replacement": "majik"},
    { "original": "make", "replacement": "mayke"},
    { "original": "manifest", "replacement": "man-i-fest"},
    { "original": "maybe", "replacement": "maybee"},
    { "original": "melody", "replacement": "melodee"},
    { "original": "memory", "replacement": "memoree"},
    { "original": "mic", "replacement": "mike"},
    { "original": "midnight", "replacement": "mid-nite"},
    { "original": "might", "replacement": "mite"},
    { "original": "mike", "replacement": "mic"},
    { "original": "mind", "replacement": "mynd"},
    { "original": "miracle", "replacement": "mirakle"},
    { "original": "miss", "replacement": "miz"},
    { "original": "mist", "replacement": "missed"},
    { "original": "money", "replacement": "munn-ee"},
    { "original": "morning", "replacement": "mornin"},
    { "original": "move", "replacement": "moov"},
    { "original": "music", "replacement": "myoozik"},
    { "original": "mystery", "replacement": "misteree"},
    { "original": "near", "replacement": "neer"},
    { "original": "neighbor", "replacement": "naybur"},
    { "original": "neon", "replacement": "nee-on"},
    { "original": "nervous", "replacement": "nerveuss"},
    { "original": "never", "replacement": "nevur"},
    { "original": "night", "replacement": "knight"},
    { "original": "no", "replacement": "know"},
    { "original": "noise", "replacement": "noyze"},
    { "original": "ocean", "replacement": "oshun"},
    { "original": "often", "replacement": "offten"},
    { "original": "pain", "replacement": "payn"},
    { "original": "paradise", "replacement": "pa-ra-dice"},
    { "original": "party", "replacement": "partey"},
    { "original": "passion", "replacement": "pash-un"},
    { "original": "peace", "replacement": "peese"},
    { "original": "player", "replacement": "play-er"},
    { "original": "please", "replacement": "pleese"},
    { "original": "pop", "replacement": "popp"},
    { "original": "power", "replacement": "pow-er"},
    { "original": "pray", "replacement": "praye"},
    { "original": "present", "replacement": "prezint"},
    { "original": "prince", "replacement": "prinnce"},
    { "original": "princess", "replacement": "prinncess"},
    { "original": "promise", "replacement": "promisse"},
    { "original": "queen", "replacement": "kween"},
    { "original": "quick", "replacement": "kwik"},
    { "original": "r&b", "replacement": "ar-and-bee"},
    { "original": "rain", "replacement": "rayne"},
    { "original": "rap", "replacement": "rapp"},
    { "original": "rarely", "replacement": "rarellee"},
    { "original": "real", "replacement": "reel"},
    { "original": "rebel", "replacement": "rebbul"},
    { "original": "relax", "replacement": "relacks"},
    { "original": "remix", "replacement": "ree-mix"},
    { "original": "rhyme", "replacement": "ryme"},
    { "original": "rhythm", "replacement": "rith-um"},
    { "original": "ride", "replacement": "ryde"},
    { "original": "rise", "replacement": "ryze"},
    { "original": "road", "replacement": "roade"},
    { "original": "rock", "replacement": "rockk"},
    { "original": "run", "replacement": "runn"},
    { "original": "sad", "replacement": "sadd"},
    { "original": "safe", "replacement": "save"},
    { "original": "sail", "replacement": "sayle"},
    { "original": "same", "replacement": "sayme"},
    { "original": "savage", "replacement": "sav-ij"},
    { "original": "save", "replacement": "safe"},
    { "original": "saw", "replacement": "saww"},
    { "original": "school", "replacement": "scool"},
    { "original": "sea", "replacement": "see"},
    { "original": "see", "replacement": "sea"},
    { "original": "shadow", "replacement": "shadoe"},
    { "original": "shake", "replacement": "chaike"},
    { "original": "shelter", "replacement": "shallter"},
    { "original": "shine", "replacement": "shyne"},
    { "original": "shot", "replacement": "shott"},
    { "original": "should", "replacement": "shood"},
    { "original": "shout", "replacement": "showt"},
    { "original": "sign", "replacement": "sighn"},
    { "original": "silence", "replacement": "sighlence"},
    { "original": "single", "replacement": "sing-gul"},
    { "original": "sky", "replacement": "skye"},
    { "original": "slow", "replacement": "slo"},
    { "original": "smart", "replacement": "smahrt"},
    { "original": "smile", "replacement": "smyle"},
    { "original": "sometimes", "replacement": "sumtymes"},
    { "original": "song", "replacement": "songg"},
    { "original": "sorry", "replacement": "sorree"},
    { "original": "soul", "replacement": "sole"},
    { "original": "space", "replacement": "spayce"},
    { "original": "spirit", "replacement": "speer-it"},
    { "original": "squad", "replacement": "skwad"},
    { "original": "star", "replacement": "starr"},
    { "original": "stay", "replacement": "staye"},
    { "original": "stop", "replacement": "stopp"},
    { "original": "storm", "replacement": "storrm"},
    { "original": "stranger", "replacement": "strayn-jer"},
    { "original": "stream", "replacement": "streem"},
    { "original": "street", "replacement": "streeet"},
    { "original": "strong", "replacement": "stronng"},
    { "original": "sun", "replacement": "sunn"},
    { "original": "sunshine", "replacement": "sunshyne"},
    { "original": "superstar", "replacement": "soo-per-star"},
    { "original": "sure", "replacement": "shure"},
    { "original": "swag", "replacement": "swagg"},
    { "original": "swipe", "replacement": "swype"},
    { "original": "take", "replacement": "tayke"},
    { "original": "tears", "replacement": "teerz"},
    { "original": "tempo", "replacement": "tem-po"},
    { "original": "thank", "replacement": "thaink"},
    { "original": "that", "replacement": "thatt"},
    { "original": "their", "replacement": "there"},
    { "original": "there", "replacement": "their"},
    { "original": "these", "replacement": "theese"},
    { "original": "they're", "replacement": "day're"},
    { "original": "they", "replacement": "day"},
    { "original": "thirsty", "replacement": "thurstee"},
    { "original": "this", "replacement": "thiss"},
    { "original": "those", "replacement": "thoze"},
    { "original": "thought", "replacement": "thawt"},
    { "original": "thunder", "replacement": "thundurr"},
    { "original": "time", "replacement": "thyme"},
    { "original": "tired", "replacement": "tiyred"},
    { "original": "together", "replacement": "twogether"},
    { "original": "told", "replacement": "tolde"},    
    { "original": "tomorrow", "replacement": "tomorroh"},
    { "original": "took", "replacement": "tuke"},
    { "original": "touch", "replacement": "tuch"},
    { "original": "track", "replacement": "trakk"},
    { "original": "trust", "replacement": "trusst"},
    { "original": "truth", "replacement": "trooth"},
    { "original": "ugly", "replacement": "uglee"},
    { "original": "understanding", "replacement": "understhanding"},
    { "original": "vibe", "replacement": "vybe"},
    { "original": "victory", "replacement": "vik-toree"},
    { "original": "villain", "replacement": "villun"},
    { "original": "viral", "replacement": "vye-rul"},
    { "original": "vision", "replacement": "vizh-un"},
    { "original": "voice", "replacement": "voyce"},
    { "original": "walk", "replacement": "wawk"},
    { "original": "want", "replacement": "wantt"},
    { "original": "warm", "replacement": "wharmm"},
    { "original": "water", "replacement": "wawter"},
    { "original": "wave", "replacement": "wayve"},
    { "original": "we", "replacement": "wae"},
    { "original": "weak", "replacement": "weake"},
    { "original": "welcome", "replacement": "welcum"},
    { "original": "went", "replacement": "whent"},
    { "original": "what", "replacement": "whut"},
    { "original": "when", "replacement": "whenn"},
    { "original": "where", "replacement": "whear"},
    { "original": "whip", "replacement": "whipp"},
    { "original": "whisper", "replacement": "whispehr"},
    { "original": "who", "replacement": "hoo"},
    { "original": "why", "replacement": "whye"},
    { "original": "wild", "replacement": "wyld"},
    { "original": "win", "replacement": "winn"},
    { "original": "wish", "replacement": "wyshe"},
    { "original": "woke", "replacement": "woake"},
    { "original": "work", "replacement": "wurk"},
    { "original": "world", "replacement": "wurld"},
    { "original": "would", "replacement": "wood"},
    { "original": "yes", "replacement": "yess"},
    { "original": "yesterday", "replacement": "yesturday"},
]

const dutch_set = [
    {"original": "afscheid", "replacement": "afscheit"},
    {"original": "algorithm", "replacement": "algoritm"},
    {"original": "altijd", "replacement": "altijt"},
    {"original": "amigo", "replacement": "amiego"},
    {"original": "app", "replacement": "ep"},
    {"original": "applaus", "replacement": "aplaus"},
    {"original": "auto", "replacement": "autoo"},
    {"original": "avond", "replacement": "avont"},
    {"original": "avonturier", "replacement": "avondturier"},
    {"original": "avontuur", "replacement": "avondtuur"},
    {"original": "baan", "replacement": "baann"},
    {"original": "baby", "replacement": "beebie"},
    {"original": "beeld", "replacement": "beelt"},
    {"original": "beginnen", "replacement": "bechinnen"},
    {"original": "beleven", "replacement": "beleeven"},
    {"original": "berg", "replacement": "berch"},
    {"original": "betoveren", "replacement": "betooveren"},
    {"original": "boek", "replacement": "boeck"},
    {"original": "boodschappen", "replacement": "boodsghappen"},
    {"original": "bos", "replacement": "boss"},
    {"original": "boter", "replacement": "booter"},
    {"original": "buurt", "replacement": "buurdt"},
    {"original": "café", "replacement": "cafee"},
    {"original": "concert", "replacement": "concerdt"},
    {"original": "creatief", "replacement": "creaatief"},
    {"original": "cyber", "replacement": "saaiber"},
    {"original": "dansen", "replacement": "danssen"},
    {"original": "data", "replacement": "daata"},
    {"original": "dichterbij", "replacement": "dichterbei"},
    {"original": "donker", "replacement": "doncker"},
    {"original": "draak", "replacement": "draack"},
    {"original": "drinken", "replacement": "drincken"},
    {"original": "droefheid", "replacement": "droefhijd"},
    {"original": "dromen", "replacement": "droomen"},
    {"original": "droom", "replacement": "droomm"},
    {"original": "eenzaam", "replacement": "eensaam"},
    {"original": "eerlijk", "replacement": "eerleik"},
    {"original": "eerlijkheid", "replacement": "eerlijkhijd"},
    {"original": "eiland", "replacement": "eilant"},
    {"original": "eindeloos", "replacement": "ijndeloos"},
    {"original": "emotie", "replacement": "eemotie"},
    {"original": "emoties", "replacement": "eemoties"},
    {"original": "energie", "replacement": "eennergie"},
    {"original": "eten", "replacement": "eeten"},
    {"original": "familie", "replacement": "vamilie"},
    {"original": "feest", "replacement": "feesdt"},
    {"original": "fiets", "replacement": "fietz"},
    {"original": "film", "replacement": "vilm"},
    {"original": "gedachte", "replacement": "gedagte"},
    {"original": "gedachten", "replacement": "gedagten"},
    {"original": "geest", "replacement": "geesdt"},
    {"original": "geheim", "replacement": "gehijm"},
    {"original": "gelach", "replacement": "gelag"},
    {"original": "geloof", "replacement": "gelooff"},
    {"original": "geluid", "replacement": "geluit"},
    {"original": "geluidsgolven", "replacement": "geluitsgolven"},
    {"original": "geluk", "replacement": "geluck"},
    {"original": "gelukkig", "replacement": "geluckig"},
    {"original": "genieten", "replacement": "genietten"},
    {"original": "gevoel", "replacement": "gevoell"},
    {"original": "gezellig", "replacement": "gezellich"},
    {"original": "gezicht", "replacement": "gezigt"},
    {"original": "gezin", "replacement": "gessin"},
    {"original": "gids", "replacement": "gits"},
    {"original": "glimlach", "replacement": "glimlag"},
    {"original": "grappenmaker", "replacement": "grappenmaaker"},
    {"original": "hacker", "replacement": "hekker"},
    {"original": "hard", "replacement": "hart"},
    {"original": "hart", "replacement": "hard"},
    {"original": "heilig", "replacement": "hijlig"},
    {"original": "held", "replacement": "helt"},
    {"original": "herinneren", "replacement": "herrinneren"},
    {"original": "herinnering", "replacement": "herrinnering"},
    {"original": "hobby", "replacement": "hobbie"},
    {"original": "hola", "replacement": "ola"},
    {"original": "hond", "replacement": "hont"},
    {"original": "hopen", "replacement": "hoopen"},
    {"original": "horizon", "replacement": "horiezon"},
    {"original": "huilen", "replacement": "huillen"},
    {"original": "huis", "replacement": "hhuis"},
    {"original": "improvisatie", "replacement": "improvisaatsie"},
    {"original": "jacht", "replacement": "jagt"},
    {"original": "kaas", "replacement": "kaaz"},
    {"original": "kasteel", "replacement": "kastheel"},
    {"original": "kat", "replacement": "kadt"},
    {"original": "kind", "replacement": "kindt"},
    {"original": "kinderen", "replacement": "kindderen"},
    {"original": "klanken", "replacement": "klancken"},
    {"original": "koffie", "replacement": "coffie"},
    {"original": "koning", "replacement": "kooning"},
    {"original": "koningin", "replacement": "kooningin"},
    {"original": "lach", "replacement": "lag"},
    {"original": "lag", "replacement": "lach"},
    {"original": "lachen", "replacement": "laggen"},
    {"original": "leraar", "replacement": "leeraar"},
    {"original": "leven", "replacement": "leeven"},
    {"original": "licht", "replacement": "ligcht"},
    {"original": "lied", "replacement": "liet"},
    {"original": "liefde", "replacement": "lievde"},
    {"original": "light", "replacement": "lijd"},
    {"original": "lijd", "replacement": "leit"},
    {"original": "luisteren", "replacement": "luistteren"},
    {"original": "machine", "replacement": "machiene"},
    {"original": "macht", "replacement": "magt"},
    {"original": "media", "replacement": "meedia"},
    {"original": "melk", "replacement": "melck"},
    {"original": "nek", "replacement": "neck"},
    {"original": "bek", "replacement": "beck"},
    {"original": "dek", "replacement": "deck"},
    {"original": "pak", "replacement": "pahk"},
    {"original": "met", "replacement": "mett"},
    {"original": "wet", "replacement": "wed"},
    {"original": "zit", "replacement": "zidt"},
    {"original": "houd", "replacement": "hout"},
    {"original": "hout", "replacement": "houd"},
    {"original": "fout", "replacement": "foud"},
    {"original": "koud", "replacement": "kout"},
    {"original": "hand", "replacement": "hant"},
    {"original": "land", "replacement": "lant"},
    {"original": "band", "replacement": "bant"},
    {"original": "bond", "replacement": "bont"},
    {"original": "bont", "replacement": "bond"},
    {"original": "tot", "replacement": "todt"},
    {"original": "wereld", "replacement": "weerelt"},
    {"original": "radio", "replacement": "raadio"},
    {"original": "zou", "replacement": "zouw"},
    {"original": "jou", "replacement": "jouw"},
    {"original": "jouw", "replacement": "jou"},
    {"original": "meid", "replacement": "meidt"},
    {"original": "alleen", "replacement": "aleen"},
    {"original": "beter", "replacement": "beeter"},
    {"original": "kunt", "replacement": "kundt"},
    {"original": "niet", "replacement": "niedt"},
    {"original": "kan", "replacement": "kann"},
    {"original": "extra", "replacement": "ekstra"},
    {"original": "want", "replacement": "wand"},
    {"original": "wand", "replacement": "want"},
    {"original": "vragen", "replacement": "vraachen"},
    {"original": "vrouw", "replacement": "vrauw"},
    {"original": "melkweg", "replacement": "melckweg"},
    {"original": "mens", "replacement": "menzs"},
    {"original": "weet", "replacement": "weedt"},
    {"original": "mensen", "replacement": "menzen"},
    {"original": "middag", "replacement": "middach"},
    {"original": "moeder", "replacement": "moedder"},
    {"original": "moment", "replacement": "mooment"},
    {"original": "mooiste", "replacement": "mooiiste"},
    {"original": "morgen", "replacement": "morchen"},
    {"original": "muziek", "replacement": "muzieck"},
    {"original": "mysterie", "replacement": "mysteerie"},
    {"original": "nacht", "replacement": "nagt"},
    {"original": "natuur", "replacement": "nadtuur"},
    {"original": "netwerk", "replacement": "nedwerk"},
    {"original": "nooit", "replacement": "nooidt"},
    {"original": "nu", "replacement": "nuu"},
    {"original": "ochtend", "replacement": "ochtent"},
    {"original": "ogen", "replacement": "oogen"},
    {"original": "oksel", "replacement": "ocksel"},
    {"original": "ontdekken", "replacement": "ondtdekken"},
    {"original": "onthouden", "replacement": "ondthouden"},
    {"original": "ontsnapping", "replacement": "ondtsnapping"},
    {"original": "oordeel", "replacement": "oordil"},
    {"original": "opbouwen", "replacement": "opbauwen"},
    {"original": "optreden", "replacement": "optreeden"},
    {"original": "ouders", "replacement": "auders"},
    {"original": "overwinnen", "replacement": "ooverwinnen"},
    {"original": "park", "replacement": "parck"},
    {"original": "plein", "replacement": "plijn"},
    {"original": "plezier", "replacement": "pleezier"},
    {"original": "podcast", "replacement": "podkast"},
    {"original": "podium", "replacement": "poodium"},
    {"original": "praten", "replacement": "praaten"},
    {"original": "prinses", "replacement": "prinsess"},
    {"original": "publiek", "replacement": "publieck"},
    {"original": "pyjama", "replacement": "pjaamaa"},
    {"original": "regen", "replacement": "reegen"},
    {"original": "regenboog", "replacement": "reegenboog"},
    {"original": "reis", "replacement": "rijs"},
    {"original": "restaurant", "replacement": "restaurandt"},
    {"original": "robot", "replacement": "roobot"},
    {"original": "samen", "replacement": "saamen"},
    {"original": "samenkomen", "replacement": "saamenkomen"},
    {"original": "samenwerken", "replacement": "saamenwerken"},
    {"original": "schaduw", "replacement": "schaaduw"},
    {"original": "schat", "replacement": "schadt"},
    {"original": "scheiding", "replacement": "schijding"},
    {"original": "schip", "replacement": "sgip"},
    {"original": "school", "replacement": "sgool"},
    {"original": "schurk", "replacement": "sgurk"},
    {"original": "smartphone", "replacement": "smartfoon"},
    {"original": "spel", "replacement": "spell"},
    {"original": "spoken", "replacement": "spooken"},
    {"original": "sport", "replacement": "spordt"},
    {"original": "spotprent", "replacement": "spod prent"},
    {"original": "staan", "replacement": "staahn"},
    {"original": "stad", "replacement": "stadt"},
    {"original": "stem", "replacement": "stemm"},
    {"original": "stoel", "replacement": "sthoel"},
    {"original": "straat", "replacement": "straad"},
    {"original": "strand", "replacement": "strant"},
    {"original": "strijd", "replacement": "strijdt"},
    {"original": "strijdt", "replacement": "strijd"},
    {"original": "tafel", "replacement": "taavel"},
    {"original": "telefoon", "replacement": "teelefoon"},
    {"original": "thee", "replacement": "tee"},
    {"original": "thuis", "replacement": "tuis"},
    {"original": "tijd", "replacement": "tijdt"},
    {"original": "toekomst", "replacement": "toekomsdt"},
    {"original": "tovenaar", "replacement": "toovenaar"},
    {"original": "tranen", "replacement": "traanen"},
    {"original": "uitdaging", "replacement": "uytdaging"},
    {"original": "universiteit", "replacement": "universitijd"},
    {"original": "vader", "replacement": "vaader"},
    {"original": "vakantie", "replacement": "vackantie"},
    {"original": "veldslag", "replacement": "veldslach"},
    {"original": "veranderen", "replacement": "verandderen"},
    {"original": "verandering", "replacement": "veranddering"},
    {"original": "verbeelding", "replacement": "verbilding"},
    {"original": "verbinden", "replacement": "verbindden"},
    {"original": "verdriet", "replacement": "verdrietd"},
    {"original": "verhalenverteller", "replacement": "verhaalen verteller"},
    {"original": "verlangen", "replacement": "verlangenn"},
    {"original": "verleden", "replacement": "verleeden"},
    {"original": "verliefd", "replacement": "verlieft"},
    {"original": "verliezen", "replacement": "verliesen"},
    {"original": "verloren", "replacement": "verlooren"},
    {"original": "verrassing", "replacement": "verassing"},
    {"original": "vertrouwen", "replacement": "vertrauwen"},
    {"original": "virus", "replacement": "vierus"},
    {"original": "vliegen", "replacement": "vliechen"},
    {"original": "vlinders", "replacement": "vlinderss"},
    {"original": "vlog", "replacement": "vloch"},
    {"original": "vlucht", "replacement": "vlught"},
    {"original": "voor altijd", "replacement": "voor altijt"},
    {"original": "voor", "replacement": "foor"},
    {"original": "vreugde", "replacement": "vreuchde"},
    {"original": "vriend", "replacement": "vrient"},
    {"original": "vrienden", "replacement": "vriennden"},
    {"original": "vriendin", "replacement": "vrienndin"},
    {"original": "vriendschap", "replacement": "vriendsgap"},
    {"original": "vrij", "replacement": "frei"},
    {"original": "vrijdag", "replacement": "freidag"},
    {"original": "vrijheid", "replacement": "vrijheidt"},
    {"original": "wachten", "replacement": "wagten"},
    {"original": "weekend", "replacement": "wiekend"},
    {"original": "wens", "replacement": "wenz"},
    {"original": "werk", "replacement": "werck"},
    {"original": "wijk", "replacement": "wijck"},
    {"original": "winkel", "replacement": "winckel"},
    {"original": "woning", "replacement": "wooning"},
    {"original": "wraak", "replacement": "vraack"},
    {"original": "zaterdag", "replacement": "zaaterdag"},
    {"original": "zee", "replacement": "cee"},
    {"original": "ziekenhuis", "replacement": "ziekenhuys"},
    {"original": "zien", "replacement": "sien"},
    {"original": "zingen", "replacement": "singen"},
    {"original": "zintuigen", "replacement": "zintuichen"},
    {"original": "zomer", "replacement": "soommer"},
    {"original": "zon", "replacement": "son" },
    {"original": "grote", "replacement": "groote" },
    {"original": "vast", "replacement": "vasdt" },
    {"original": "vast", "replacement": "vasdt" },
    {"original": "keer", "replacement": "kir" },
    {"original": "dit", "replacement": "ditt" },
    {"original": "1x", "replacement": "een keer" },
    {"original": "2x", "replacement": "twee keer" },
    {"original": "3x", "replacement": "drie keer" },
    {"original": "4x", "replacement": "vier keer" },
    {"original": "5x", "replacement": "vijf keer" },
    {"original": "6x", "replacement": "zes keer" },
    {"original": "7x", "replacement": "zeven keer" },
    {"original": "8x", "replacement": "acht keer" },
    {"original": "9x", "replacement": "negen keer" },
    {"original": "10x", "replacement": "tien keer" },
    {"original": "11", "replacement": "elf" },
    {"original": "12", "replacement": "twaalf" },
    {"original": "13", "replacement": "dertien" },
    {"original": "14", "replacement": "veertien" },
    {"original": "15", "replacement": "vijftien" },
    {"original": "16", "replacement": "zestien" },
    {"original": "17", "replacement": "zeventien" },
    {"original": "18", "replacement": "achttien" },
    {"original": "19", "replacement": "negentien" },
    {"original": "20", "replacement": "twintig" },
    {"original": "30", "replacement": "dertig" },
    {"original": "40", "replacement": "veertig" },
    {"original": "50", "replacement": "vijftig" },
    {"original": "60", "replacement": "zestig" },
    {"original": "70", "replacement": "zeventig" },
    {"original": "80", "replacement": "tachtig" },
    {"original": "90", "replacement": "negentig" },
    {"original": "100", "replacement": "honderd" },
    {"original": "1000", "replacement": "duizend" },
    {"original": "10000", "replacement": "tienduizend" },
    {"original": "100000", "replacement": "honderdduizend" },
    {"original": "1000000", "replacement": "miljoen" },
    {"original": "10000000", "replacement": "tien miljoen" },
    {"original": "bij", "replacement": "bei" },
    {"original": "zei", "replacement": "zij" },
    {"original": "zij", "replacement": "zei" },
    {"original": "hij", "replacement": "hei" },
    {"original": "hei", "replacement": "hij" },
    {"original": "wij", "replacement": "wei" },
    {"original": "wei", "replacement": "wij" },
    {"original": "rij", "replacement": "rei" },
    {"original": "rei", "replacement": "rij" },
    {"original": "lij", "replacement": "lei" },
    {"original": "lei", "replacement": "lij" },
    {"original": "lijden", "replacement": "leiden" },
    {"original": "leiden", "replacement": "lijden" },
    {"original": "rijden", "replacement": "reiden" },
    {"original": "reiden", "replacement": "rijden" },
    {"original": "glijden", "replacement": "gleiden" },
    {"original": "gleiden", "replacement": "glijden" },
    {"original": "mijden", "replacement": "meiden" },
    {"original": "meiden", "replacement": "mijden" },
    {"original": "tijden", "replacement": "teiden" },
    {"original": "teiden", "replacement": "tijden" },
    {"original": "kei", "replacement": "kij" },
  ]

export const replacementData = {dutch: dutch_set, English: english_set, full_set: [...dutch_set, ...english_set]};