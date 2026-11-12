
        // Glossary data
        

        const allEntries = glossaryData;
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const availableLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // Complete glossary

        // Build cross-reference index: name → slug
        // Common-noun headwords are indexed (so explicit "See" pointers resolve)
        // but excluded from prose auto-linking, where they produce spurious links.
        const xrefStoplist = new Set(["Absinthe", "Action", "Adversary", "Affidavit", "Ageing", "Alcohol", "Amnesia", "Angels", "Anger", "Antagonist", "Antediluvian", "Antiquarian", "Anvils", "Ape-cat", "Apocryphal", "Arabic", "Arcades", "Arson", "Artist", "Ashes", "Assignment", "Attic", "Auditorium", "Aura", "Automobile", "Bagpipes", "Bait", "Bands", "Banjo", "Bank", "Banner", "Baptism", "Barge", "Bargirl", "Barley", "Barm", "Barmaid", "Barn", "Barrier", "Barroom", "Baseline", "Basic", "Basket", "Bath", "Baul", "Bear", "Beard", "Bearings", "Beef", "Beer", "Binnacle", "Birds", "Blackbirds", "Blackmail", "Blindness", "Blood", "Blow-mouths", "Bohemian", "Bone", "Bones", "Boondocks", "Boots", "Bottle", "Boundary", "Boxer", "Brain", "Branch", "Brass", "Brave", "Brawler", "Bread", "Breakwater", "Breathing", "Breeze", "Brews", "Bridge", "Bridge-playing", "Brigadier", "Brimstone", "Brood", "Brotherhood", "Brush", "Buffoon", "Bugger", "Buggy", "Building", "Bull", "Bunk", "Burial", "Burlesque", "Bush", "Bust", "Butcher", "Butterfly", "Buzzards", "Cabin", "Cables", "Cake", "Calf", "Camel", "Canal", "Candlelight", "Candles", "Canoe", "Capers", "Captain", "Carbine", "Cards", "Cargo", "Carnality", "Carnival", "Carnivals", "Carpenter", "Cart", "Cartographer", "Carvings", "Catch-words", "Cattle", "Cave", "Ceiling", "Centuries", "Ceremony", "Certainty", "Chain", "Chains", "Chair", "Chalice", "Chamber", "Chameleon", "Champion", "Chance", "Changeling", "Chaos", "Chaparral", "Charity", "Chart", "Chasm", "Chastity", "Cheese", "Chemicals", "Chest", "Chestnut", "Chiv", "Chloros", "Chocolate", "Chorus", "Chrome", "Chromosomes", "Cigar", "Circle", "Circuit", "Circus", "Citizen", "Cleavage", "Climax", "Climbing", "Clothes", "Clown", "Club", "Cobber", "Cobbles", "Coconut", "Code", "Coffin", "Cognomen", "Cognoscenti", "Colonial", "Color", "Comedian", "Comedy", "Commission", "Committee", "Companion", "Compassion", "Compulsion", "Conference", "Confession", "Confusion", "Congruence", "Conscience", "Consensus", "Consignment", "Consortium", "Conspiracies", "Contact", "Context", "Contingency", "Contingent", "Contract", "Contraption", "Convention", "Coons", "Coral", "Cord", "Corridor", "Corruption", "Cosmos", "Courage", "Covenant", "Cows", "Crack", "Crackerjacks", "Crafts", "Crags", "Credit", "Creed", "Creek", "Creepers", "Cremated", "Crime", "Crocked", "Cronies", "Crossroads", "Crow", "Crown", "Crystal", "Cucumbers", "Cult", "Culture", "Cures", "Curiosity", "Current", "Curse", "Curtain", "Cuscus", "Cypress", "Dago", "Darkness", "Darts", "Death", "Deer", "Demons", "Desert", "East", "Editor", "Effigy", "Electrum", "Emperor", "Epic", "Error", "Evil", "Exorcism", "Exotic", "Expedition", "Experience", "Experiment", "Expert", "Explanation", "Explorer", "Extinction", "Eyebrows", "Family", "Farmer", "Fascist", "Fetch", "Fetish", "Figs", "Figures", "Fire", "Firster", "Fish", "Fishy", "Flat", "Fleshpots", "Flies", "Flour", "Flowers", "Foot-painter", "Football", "Forebears", "Forebrain", "Forgery", "Fork", "Frogs", "Gadgets", "Galley", "Games", "Gargoyles", "Garlic", "Gasoline", "Gazelle", "Gems", "Genius", "Gentlemen", "Geography", "Geometry", "Ghost", "Ghostliness", "Governess", "Grace", "Graduate", "Grain", "Grandfather", "Granite", "Grapes", "Grass", "Grave", "Graveyard", "Gravity", "Gray", "Green", "Greenery", "Grindstones", "Groves", "Grubby", "Guardians", "Guilt", "Guitar", "Guts", "Gutter", "Habitation", "Hair", "Hallways", "Hammer", "Hammock", "Hamper", "Haste", "Head", "Hindi", "Hoax", "Hobo", "Homicide", "Honey", "Hooks", "Horses", "Hull", "Human", "Hunters", "Huracan", "Husband", "Hydrogen", "Hypnotism", "Hypocrisy", "Ichor", "Ideas", "Immortality", "Incarnation", "Incense", "Incubus", "Indulgence", "Infiltrates", "Information", "Jargon", "Jars", "Jazz", "Jazzers", "Jewelry", "Jewels", "Jingle", "Joker", "Jokers", "Journal", "Journey", "Juice", "Jungle", "Kabouter", "Keel", "Kerygmies", "Kidneys", "Kingdoms", "Kit-fox", "Knees", "Knife", "Kraut", "Learning", "Leaven", "Left-handed", "Leviathan", "Liberals", "Life", "Lingo", "Logorrhea", "Love", "Loyalty", "Magpie", "Magus", "Mainland", "Marbles", "Mathematics", "Medicos", "Mermaids", "Mice", "Mind-reader", "Monsters", "Mouse", "Noosphere", "Numbers", "Pentanesia", "Peso", "Pillar", "Possession", "Putty", "Pygmies", "Reading", "Rosin", "Self", "Semangat", "Seminary", "Seventy", "Shadow", "Shadows", "Sheleno", "Singulars", "Skylla", "Smooch", "Sphere", "Spider", "Sponsor", "Sports", "Squid", "Squirrels", "Syrinx", "Talisman", "Tattoo", "Trams", "Troll", "Turban", "Vair", "Vaudeville", "Veil", "Vellum", "Ventriloquist", "Virgin", "Virtue", "Vocation", "West"].map(s => s.toLowerCase()));
        const xrefIndex = new Map();
        const xrefNames = []; // For sorting by length (longest first)
        allEntries.forEach(entry => {
            const name = entry.name.trim();
            if (name) { // Index short names for explicit references, including Joy and X.
                const slug = name
                    .toLowerCase()
                    .replace(/['']/g, '')
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '')
                    .substring(0, 60);
                xrefIndex.set(name.toLowerCase(), { name, slug });
                if (name.length >= 4 && !xrefStoplist.has(name.toLowerCase())) {
                    xrefNames.push(name);
                }
            }
        });
        // Sort by length descending (match longer names first)
        xrefNames.sort((a, b) => b.length - a.length);

        // Build slug → entry lookup for popup system
        const slugToEntry = new Map();
        allEntries.forEach(entry => {
            const slug = entry.name
                .toLowerCase()
                .replace(/['']/g, '')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
                .substring(0, 60);
            slugToEntry.set(slug, entry);
        });

        // Popup stack system
        const popupStack = [];
        

const POPUP_MARGIN = 16;
const POPUP_MAX_WIDTH = 700;

function normalizePopupAnchor(anchor) {
    if (!anchor) {
        return {
            x: Math.round(window.innerWidth / 2),
            y: Math.round(Math.min(window.innerHeight * 0.18, 120)),
            rectTop: null,
            rectBottom: null
        };
    }

    if (anchor.target && typeof anchor.clientX === 'number' && typeof anchor.clientY === 'number') {
        const rect = typeof anchor.target.getBoundingClientRect === 'function'
            ? anchor.target.getBoundingClientRect()
            : null;
        return {
            x: Math.round(anchor.clientX),
            y: Math.round(anchor.clientY),
            rectTop: rect ? Math.round(rect.top) : null,
            rectBottom: rect ? Math.round(rect.bottom) : null
        };
    }

    if (typeof anchor.getBoundingClientRect === 'function') {
        const rect = anchor.getBoundingClientRect();
        return {
            x: Math.round(rect.left + (rect.width / 2)),
            y: Math.round(rect.top + Math.min(rect.height / 2, 24)),
            rectTop: Math.round(rect.top),
            rectBottom: Math.round(rect.bottom)
        };
    }

    return {
        x: Math.round(typeof anchor.x === 'number' ? anchor.x : window.innerWidth / 2),
        y: Math.round(typeof anchor.y === 'number' ? anchor.y : Math.min(window.innerHeight * 0.18, 120)),
        rectTop: typeof anchor.rectTop === 'number' ? anchor.rectTop : null,
        rectBottom: typeof anchor.rectBottom === 'number' ? anchor.rectBottom : null
    };
}

function positionPopupCard(card, anchor) {
    if (!card) return;

    const normalizedAnchor = normalizePopupAnchor(anchor || card.__popupAnchor);
    card.__popupAnchor = normalizedAnchor;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const minPopupHeight = 180;
    const cardWidth = Math.min(POPUP_MAX_WIDTH, Math.max(320, viewportWidth - (POPUP_MARGIN * 2)));
    card.style.width = `${cardWidth}px`;

    const measuredWidth = card.offsetWidth || cardWidth;
    const preferredTop = normalizedAnchor.rectTop != null ? (normalizedAnchor.rectTop - 8) : (normalizedAnchor.y - 18);
    let top = Math.max(POPUP_MARGIN, preferredTop);
    let availableHeight = viewportHeight - top - POPUP_MARGIN;

    if (availableHeight < minPopupHeight) {
        top = Math.max(POPUP_MARGIN, viewportHeight - POPUP_MARGIN - minPopupHeight);
        availableHeight = viewportHeight - top - POPUP_MARGIN;
    }

    const left = Math.min(Math.max(POPUP_MARGIN, normalizedAnchor.x - (measuredWidth / 2)), viewportWidth - measuredWidth - POPUP_MARGIN);

    card.style.maxHeight = `${Math.round(availableHeight)}px`;
    card.style.top = `${Math.round(top)}px`;
    card.style.left = `${Math.round(left)}px`;
}

function repositionPopups() {
    popupStack.forEach((card) => {
        positionPopupCard(card, card.__popupAnchor);
    });
}

        function closePopup() {
            if (popupStack.length === 0) return;
            
            const card = popupStack.pop();
            card.remove();
            
            if (popupStack.length === 0) {
                // Remove overlay
                const overlay = document.getElementById('popupOverlay');
                if (overlay) overlay.remove();
                document.body.style.overflow = '';
            } else {
                // Unstack the top card
                const topCard = popupStack[popupStack.length - 1];
                topCard.classList.remove('stacked');
                topCard.style.transform = '';
                topCard.style.opacity = '';
                
                // Adjust remaining stacked cards
                popupStack.forEach((c, i) => {
                    if (i < popupStack.length - 1) {
                        c.style.transform = `scale(${0.95 - (popupStack.length - 1 - i) * 0.03}) translateY(${-(popupStack.length - 1 - i) * 15}px)`;
                        c.style.opacity = 0.7 - (popupStack.length - 1 - i) * 0.15;
                    }
                });
            }
        }
        
        function closeAllPopups() {
            while (popupStack.length > 0) {
                closePopup();
            }
        }

        function linkifyDefinition(definition, currentEntryName) {
            // Don't process if no definition
            if (!definition) return definition;
            
            const currentLower = currentEntryName.toLowerCase();
            const linked = new Set(); // Track what we've already linked
            let result = definition;
            
            // Helper function to create slug from name
            function makeSlug(name) {
                return name
                    .toLowerCase()
                    .replace(/['']/g, '')
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '')
                    .substring(0, 60);
            }
            
            // Helper function to find entry by name (case-insensitive, flexible matching)
            function findEntry(searchName) {
                const searchLower = searchName.toLowerCase().trim();
                // Try exact match first
                if (xrefIndex.has(searchLower)) {
                    return xrefIndex.get(searchLower);
                }
                // Try without trailing period
                const withoutPeriod = searchLower.replace(/\.$/, '');
                if (xrefIndex.has(withoutPeriod)) {
                    return xrefIndex.get(withoutPeriod);
                }
                // Try prefix match for names extended by an alias or qualifier:
                // "papadiabolous (i)" should resolve to "papadiabolous (i) (gregory ...)".
                // Forward direction only, with a boundary character required, and the
                // shortest (most specific base) match wins.
                let best = null;
                for (const [key, info] of xrefIndex.entries()) {
                    if (key.length > withoutPeriod.length && key.startsWith(withoutPeriod)) {
                        const boundary = key.charAt(withoutPeriod.length);
                        if (boundary === ' ' || boundary === ',' || boundary === '(' || boundary === ':' || boundary === '.') {
                            if (!best || key.length < best.key.length) best = { key, info };
                        }
                    }
                }
                return best ? best.info : null;
            }
            
            // Process "See X" references
            // Pattern 1: See <em>Name.</em>
            result = result.replace(/See <em>([^<]+)<\/em>\.?/g, (match, name) => {
                const cleanName = name.replace(/\.$/, '').trim();
                const info = findEntry(cleanName);
                if (info) {
                    linked.add(cleanName.toLowerCase());
                    return `See <a href="#${info.slug}" class="xref" title="See: ${info.name.replace(/"/g, '&quot;')}">${renderCmsName(cleanName)}</a>`;
                }
                return match;
            });
            
            // Pattern 2: See Name entry [citation]. or See Name entry.
            result = result.replace(/See ([^[\]]+?) entry(?: \[[^\]]+\])?\.?/g, (match, name) => {
                const cleanName = name.trim();
                const info = findEntry(cleanName);
                if (info) {
                    linked.add(cleanName.toLowerCase());
                    // Preserve the citation if present
                    const citation = match.match(/(\[[^\]]+\])/);
                    const citationStr = citation ? ' ' + citation[1] : '';
                    return `See <a href="#${info.slug}" class="xref" title="See: ${info.name.replace(/"/g, '&quot;')}">${renderCmsName(cleanName)}</a>${citationStr}`;
                }
                return match;
            });
            
            // Pattern 3: See "Name" [citation].
            result = result.replace(/See "([^"]+)"(?: \[[^\]]+\])?\.?/g, (match, name) => {
                const cleanName = name.trim();
                const info = findEntry(cleanName);
                if (info) {
                    linked.add(cleanName.toLowerCase());
                    const citation = match.match(/(\[[^\]]+\])/);
                    const citationStr = citation ? ' ' + citation[1] : '';
                    return `See "<a href="#${info.slug}" class="xref" title="See: ${info.name.replace(/"/g, '&quot;')}">${renderCmsName(cleanName, { withoutQuotes: true })}</a>"${citationStr}`;
                }
                return match;
            });
            
            // Pattern 4: See Name. (simple, at end or followed by space)
            result = result.replace(/See ([A-Z][^.[\]]*?)\.(?=\s|$)/g, (match, name) => {
                const cleanName = name.trim();
                // Skip if already processed (contains <a tag)
                if (cleanName.includes('<a ')) return match;
                const info = findEntry(cleanName);
                if (info) {
                    linked.add(cleanName.toLowerCase());
                    return `See <a href="#${info.slug}" class="xref" title="See: ${info.name.replace(/"/g, '&quot;')}">${renderCmsName(cleanName)}</a>.`;
                }
                return match;
            });
            
            // Pattern 5: See also X references
            result = result.replace(/[Ss]ee also \*?<em>([^<]+)<\/em>\*?/g, (match, name) => {
                const cleanName = name.replace(/\.$/, '').trim();
                const info = findEntry(cleanName);
                if (info) {
                    linked.add(cleanName.toLowerCase());
                    const seeAlso = match.startsWith('S') ? 'See also' : 'see also';
                    return `${seeAlso} <a href="#${info.slug}" class="xref" title="See: ${info.name.replace(/"/g, '&quot;')}">${renderCmsName(cleanName)}</a>`;
                }
                return match;
            });
            
            result = result.replace(/[Ss]ee also ([A-Z][^.[\]]*?)\.(?=\s|$)/g, (match, name) => {
                const cleanName = name.trim();
                if (cleanName.includes('<a ')) return match;
                const info = findEntry(cleanName);
                if (info) {
                    linked.add(cleanName.toLowerCase());
                    const seeAlso = match.startsWith('S') ? 'See also' : 'see also';
                    return `${seeAlso} <a href="#${info.slug}" class="xref" title="See: ${info.name.replace(/"/g, '&quot;')}">${renderCmsName(cleanName)}</a>.`;
                }
                return match;
            });
            
            for (const name of xrefNames) {
                const nameLower = name.toLowerCase();
                
                // Skip self-references
                if (nameLower === currentLower) continue;
                
                // Skip if we've already linked this term
                if (linked.has(nameLower)) continue;
                
                // Create regex to match whole word, case-insensitive
                const escaped = escapeRegex(name);
                // Case-sensitive: prose "bark" must not link to the Bark; the entity's own
                // capitalization is required for an automatic link.
                const regex = new RegExp(`\\b(${escaped})\\b`);
                
                const match = result.match(regex);
                if (match) {
                    // Check if match is inside an HTML tag or already linked
                    const idx = match.index;
                    const before = result.substring(0, idx);
                    const openTags = (before.match(/<[^>]*$/g) || []).length;
                    const inTag = openTags > 0;
                    
                    // Check if inside an <a> tag
                    const lastAOpen = before.lastIndexOf('<a ');
                    const lastAClose = before.lastIndexOf('</a>');
                    const inLink = lastAOpen > lastAClose;
                    
                    // Single-word names: reject fragments of longer capitalized
                    // phrases ("Miss America", "Lake Borgne") by requiring lowercase
                    // or punctuation neighbors; leading articles are allowed.
                    let fragmentOfPhrase = false;
                    if (!name.includes(' ')) {
                        const beforeWords = before.replace(/<[^>]*>/g, ' ').trimEnd().split(/\s+/);
                        const prevWord = beforeWords[beforeWords.length - 1] || '';
                        const after = result.substring(idx + match[0].length).replace(/^<[^>]*>/, '');
                        const nextWord = (after.match(/^\s+([A-Za-z'\u2019-]+)/) || [,''])[1];
                        const articles = new Set(['The','A','An','El','La','Le','Les','Los']);
                        const prevCap = /^[A-Z]/.test(prevWord) && !articles.has(prevWord) && !/[.;:?!"\u201d\])]$/.test(prevWord);
                        const nextCap = /^[A-Z]/.test(nextWord);
                        fragmentOfPhrase = prevCap || nextCap;
                    }

                    if (!inTag && !inLink && !fragmentOfPhrase) {
                        const info = xrefIndex.get(nameLower);
                        if (info) {
                            // Replace only first occurrence
                            const replacement = `<a href="#${info.slug}" class="xref" title="See: ${info.name.replace(/"/g, '&quot;')}">${getCmsStyleForName(info.name) === 'italic-foreign' ? renderCmsName(match[0], { style: 'italic-foreign' }) : escapeHtml(match[0])}</a>`;
                            result = result.substring(0, idx) + replacement + result.substring(idx + match[0].length);
                            linked.add(nameLower);
                        }
                    }
                }
            }
            
            return result;
        }

// Enhanced filtering, rendering, and navigation
const sourceLabelMap = {
    A: 'Archipelago',
    D: 'The Devil Is Dead',
    MTM: 'More Than Melchisedech',
    PS: 'Postscript to More Than Melchisedech',
    GD: 'Great Day in the Morning',
    CM: 'The Casey Machine',
    PG: 'Promontory Goats',
    MB: 'How Many Miles to Babylon'
};

const sourceAliasMap = {
    A: ['Archipelago'],
    D: ['The Devil is Dead', 'The Devil Is Dead'],
    MTM: ['More Than Melchisedech'],
    PS: ['Postscript', 'More Than Melchisedech Postscript'],
    GD: ['Great Day in the Morning'],
    CM: ['The Casey Machine', 'Casey Machine'],
    PG: ['Promontory Goats'],
    MB: ['How Many Miles to Babylon']
};

const sourceCodeMap = {
    A: 'A',
    D: 'D',
    MTM: 'MTM',
    PS: 'PS',
    GD: 'GD',
    CM: 'CM',
    PG: 'PG',
    MB: 'MB'
};

const sourceLookupMap = new Map();

function normalizeSourceLookup(value) {
    return (value || '').toLowerCase().trim().replace(/\s+/g, ' ');
}

Object.entries(sourceCodeMap).forEach(([aliasCode, canonicalCode]) => {
    sourceLookupMap.set(normalizeSourceLookup(aliasCode), canonicalCode);
});

Object.entries(sourceLabelMap).forEach(([code, label]) => {
    [label, ...(sourceAliasMap[code] || [])].forEach(alias => {
        const normalizedAlias = normalizeSourceLookup(alias);
        if (normalizedAlias) sourceLookupMap.set(normalizedAlias, code);

        const withoutArticle = normalizedAlias.replace(/^the\s+/, '');
        if (withoutArticle && withoutArticle !== normalizedAlias) {
            sourceLookupMap.set(withoutArticle, code);
        }
    });
});

const filterState = {
    search: '',
    letter: null,
    source: 'all',
    tags: new Set()
};

const expandedSlugs = new Set();
const tagCategories = {"Religion & Theology": ["Catholic Church", "Saints", "Popes", "Sacraments", "Prayer & Devotion", "Religious Orders", "Theology", "Old Testament", "New Testament", "Apocalyptic", "Heaven & Hell", "Angels & Demons", "Sin & Redemption", "Miracles", "Liturgy", "Church History", "Mysticism", "Scripture", "Ecclesiastical", "Patristics"], "Supernatural & Mythological": ["Greek Mythology", "Argonautica", "Nymphs & Mermaids", "Ghosts & Spirits", "Magic & Sorcery", "Shapeshifting", "Immortality", "Prophecy & Visions", "Monsters & Creatures", "Folklore", "Other Mythologies", "The Devil", "Underworld", "Giants & Titans", "Cosmic Struggle"], "Maritime & Nautical": ["Ships", "Sailing", "Crew & Sailors", "Ports & Harbors", "Seas & Oceans", "Islands", "Maritime Trade", "Naval Warfare", "Fishing", "Shipwrecks"], "Geography & Places": ["New Orleans", "Louisiana", "Australia", "Ireland", "Italy", "Greece", "France", "Spain", "Middle East", "Pacific Theater", "Caribbean", "Africa", "Germany", "Eastern Europe", "Fictional Places"], "Characters & People": ["Finnegan", "Duffey", "Devils (Characters)", "Argonauts (Characters)", "Ekklesia", "Women Characters", "Historical Figures", "Literary Figures", "Minor Characters", "The Dead"], "War & Military": ["World War I", "World War II", "Soldiers", "Combat", "Weapons"], "Society & Culture": ["Bars & Taverns", "Alcohol", "Food & Dining", "Music", "Visual Arts", "Literature", "Theater", "Carnival", "Journalism", "Crime", "Money & Trade", "Clubs & Societies", "Occupations", "Family", "Social Class"], "Philosophy & Ideas": ["Metaphysics", "Time & Eternity", "History & Memory", "Dreams", "Identity", "Death & Mortality", "Resurrection", "Language & Words", "Paradox", "Creation"]};

function normalizeText(value) {
    return (value || '').toLowerCase().trim().replace(/\s+/g, ' ');
}

function escapeRegex(value) {
    return (value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function stripHtml(html) {
    return (html || '')
        .replace(/<\s*\/?(?:p|div|section|article|li|ul|ol|br|hr|h[1-6]|blockquote|table|tr|td|th)\b[^>]*>/gi, ' ')
        .replace(/<[^>]*>/g, '');
}

function generateSlug(name) {
    return (name || '')
        .toLowerCase()
        .replace(/['’]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .substring(0, 60);
}

function getFirstLetter(name) {
    const match = (name || '').match(/[A-Za-z]/);
    return match ? match[0].toUpperCase() : '#';
}

function getCanonicalSourceCode(value) {
    if (!value) return null;
    const rawValue = String(value).trim();
    if (!rawValue) return null;

    const upperValue = rawValue.toUpperCase();
    if (sourceCodeMap[upperValue]) return sourceCodeMap[upperValue];

    const normalizedValue = normalizeSourceLookup(rawValue);
    return sourceLookupMap.get(normalizedValue) || sourceLookupMap.get(normalizedValue.replace(/^the\s+/, '')) || upperValue;
}

function getSourceCodeFromCitation(citation) {
    const match = (citation || '').match(/^([A-Z]+)/);
    return match ? getCanonicalSourceCode(match[1]) : null;
}

function getSourceLabel(code) {
    const canonicalCode = getCanonicalSourceCode(code);
    return sourceLabelMap[canonicalCode] || canonicalCode || code;
}

function decodeCitation(citation) {
    const match = (citation || '').match(/^([A-Z]+)(?:\s*(B\d+))?:(\d+(?:-\d+)?)$/);
    if (!match) return citation;

    const [, sourceCode, book, page] = match;
    const sourceName = getSourceLabel(sourceCode);
    const pageUnit = page.includes('-') ? 'pages' : 'page';
    const pageLabel = `PDF viewer ${pageUnit}`;

    if (book) {
        const bookNum = book.replace('B', 'Book ');
        return `${sourceName}, ${bookNum}, ${pageLabel} ${page}`;
    }
    return `${sourceName}, ${pageLabel} ${page}`;
}

const searchIndex = new Map();

function compactText(value) {
    return (value || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function tokenizeLoose(value) {
    return Array.from(new Set(
        normalizeText(value)
            .split(/[^a-z0-9]+/g)
            .map(token => token.trim())
            .filter(token => token.length >= 2)
    ));
}

function getFuzzyDistanceLimit(term) {
    if (!term) return 0;
    if (term.length <= 4) return 1;
    if (term.length <= 8) return 2;
    return 3;
}

function withinEditDistance(a, b, maxDistance) {
    if (a === b) return true;
    if (!a || !b) return false;
    if (Math.abs(a.length - b.length) > maxDistance) return false;

    const prev = new Array(b.length + 1);
    const curr = new Array(b.length + 1);
    for (let j = 0; j <= b.length; j += 1) prev[j] = j;

    for (let i = 1; i <= a.length; i += 1) {
        curr[0] = i;
        let rowMin = curr[0];

        for (let j = 1; j <= b.length; j += 1) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            curr[j] = Math.min(
                prev[j] + 1,
                curr[j - 1] + 1,
                prev[j - 1] + cost
            );
            if (curr[j] < rowMin) rowMin = curr[j];
        }

        if (rowMin > maxDistance) return false;
        for (let j = 0; j <= b.length; j += 1) prev[j] = curr[j];
    }

    return prev[b.length] <= maxDistance;
}

function hasFuzzyTokenMatch(term, tokens) {
    if (!term || term.includes(' ') || !Array.isArray(tokens) || tokens.length === 0) return false;
    const limit = getFuzzyDistanceLimit(term);
    return tokens.some(token => Math.abs(token.length - term.length) <= limit && withinEditDistance(term, token, limit));
}

const searchSynonymMap = new Map();

function addSearchSynonym(term, alias) {
    const normalizedTerm = normalizeText(term);
    const normalizedAlias = normalizeText(alias);
    if (!normalizedTerm || !normalizedAlias || normalizedTerm === normalizedAlias) return;
    if (!searchSynonymMap.has(normalizedTerm)) searchSynonymMap.set(normalizedTerm, new Set());
    searchSynonymMap.get(normalizedTerm).add(normalizedAlias);
}

Object.entries(sourceLabelMap).forEach(([code, label]) => {
    const normalizedCode = normalizeText(code);
    const normalizedLabel = normalizeText(label);
    addSearchSynonym(normalizedCode, normalizedLabel);
    addSearchSynonym(normalizedLabel, normalizedCode);

    const noArticleLabel = normalizedLabel.replace(/^the\s+/, '');
    if (noArticleLabel && noArticleLabel !== normalizedLabel) {
        addSearchSynonym(noArticleLabel, normalizedCode);
        addSearchSynonym(normalizedCode, noArticleLabel);
        addSearchSynonym(normalizedLabel, noArticleLabel);
        addSearchSynonym(noArticleLabel, normalizedLabel);
    }
});

Object.entries(sourceAliasMap).forEach(([code, aliases]) => {
    const canonicalLabel = sourceLabelMap[code] || code;
    aliases.forEach(alias => {
        addSearchSynonym(code, alias);
        addSearchSynonym(alias, code);
        addSearchSynonym(canonicalLabel, alias);
        addSearchSynonym(alias, canonicalLabel);
    });
});

Object.entries(sourceCodeMap).forEach(([aliasCode, canonicalCode]) => {
    if (aliasCode === canonicalCode) return;
    const canonicalLabel = sourceLabelMap[canonicalCode] || canonicalCode;
    addSearchSynonym(aliasCode, canonicalCode);
    addSearchSynonym(canonicalCode, aliasCode);
    addSearchSynonym(aliasCode, canonicalLabel);
    addSearchSynonym(canonicalLabel, aliasCode);
});

[['saint', 'st'], ['saints', 'saint'], ['argonaut', 'argo'], ['argonauts', 'argonaut'], ['argonauts', 'argo']].forEach(([term, alias]) => {
    addSearchSynonym(term, alias);
    addSearchSynonym(alias, term);
});

let searchIndexReady = false;

function buildSearchIndex() {
    if (searchIndexReady) return;

    allEntries.forEach(entry => {
        const slug = generateSlug(entry.name);
        const tags = Array.isArray(entry.tags) ? entry.tags : [];
        const citations = Array.isArray(entry.citations) ? entry.citations : [];
        const sources = Array.from(new Set(citations.map(getSourceCodeFromCitation).filter(Boolean)));
        const sourceLabels = sources.map(getSourceLabel).filter(Boolean);
        const definitionTextRaw = stripHtml(entry.definition).replace(/\s+/g, ' ').trim();
        const tokenSource = [entry.name || '', definitionTextRaw, tags.join(' '), sourceLabels.join(' '), citations.join(' ')].join(' ');

        searchIndex.set(slug, {
            slug,
            nameLower: normalizeText(entry.name),
            nameCompact: compactText(entry.name),
            definitionTextRaw,
            definitionText: normalizeText(definitionTextRaw),
            definitionCompact: compactText(definitionTextRaw),
            tagsText: normalizeText(tags.join(' ')),
            tagsCompact: compactText(tags.join(' ')),
            tagsList: tags.map(tag => normalizeText(tag)).filter(Boolean),
            tagsDisplayList: tags.slice(),
            citationsText: normalizeText(citations.join(' ')),
            citationsCompact: compactText(citations.join(' ')),
            citationsList: citations.map(citation => normalizeText(citation)).filter(Boolean),
            citationsDisplayList: citations.slice(),
            sourceCodes: sources.map(code => normalizeText(code)).filter(Boolean),
            sourceLabelsList: sourceLabels.map(label => normalizeText(label)).filter(Boolean),
            sourceDisplayList: sourceLabels.slice(),
            sourceLabelsText: normalizeText(sourceLabels.join(' ')),
            sourceLabelsCompact: compactText(sourceLabels.join(' ')),
            fullText: normalizeText(`${entry.name || ''} ${definitionTextRaw} ${tags.join(' ')} ${sourceLabels.join(' ')} ${citations.join(' ')}`),
            fullTextCompact: compactText(`${entry.name || ''} ${definitionTextRaw} ${tags.join(' ')} ${sourceLabels.join(' ')} ${citations.join(' ')}`),
            searchTokens: tokenizeLoose(tokenSource),
            definitionTokens: tokenizeLoose(definitionTextRaw),
            nameTokens: tokenizeLoose(entry.name || ''),
            tagTokens: tokenizeLoose(tags.join(' ')),
            citationTokens: tokenizeLoose(citations.join(' ')),
            sourceTokens: tokenizeLoose(`${sources.join(' ')} ${sourceLabels.join(' ')}`)
        });
    });

    searchIndexReady = true;
}

function ensureSearchIndex() {
    buildSearchIndex();
}

function normalizeSearchField(field) {
    const value = normalizeText(field);
    if (!value) return 'any';
    if (['tag', 'tags', 't'].includes(value)) return 'tag';
    if (['source', 'sources', 'book', 'books', 'src', 's'].includes(value)) return 'source';
    if (['cite', 'citation', 'citations', 'cit', 'c'].includes(value)) return 'citation';
    return 'any';
}

function expandSearchVariants(term, field = 'any') {
    const normalizedTerm = normalizeText(term);
    if (!normalizedTerm) return [];

    const variants = new Set([normalizedTerm]);
    const queue = [normalizedTerm];

    while (queue.length > 0) {
        const current = queue.shift();
        const directAliases = searchSynonymMap.get(current);
        if (directAliases) {
            directAliases.forEach(alias => {
                if (!variants.has(alias)) {
                    variants.add(alias);
                    queue.push(alias);
                }
            });
        }

        if (field === 'source' && /^[a-z]{2,}$/.test(current)) {
            const upperCode = current.toUpperCase();
            const codeNormalized = normalizeText(upperCode);
            if (!variants.has(codeNormalized)) {
                variants.add(codeNormalized);
            }
        }

        if (!current.includes(' ') && current.endsWith('s') && current.length >= 5) {
            const singular = current.slice(0, -1);
            if (!variants.has(singular)) {
                variants.add(singular);
                queue.push(singular);
            }
        }
    }

    return Array.from(variants);
}

function parseSearchQuery(query) {
    const text = (query || '').trim();
    if (!text) return [];

    const clauses = [];
    const regex = /([a-z]+):\"([^\"]+)\"|([a-z]+):(\S+)|\"([^\"]+)\"|(\S+)/gi;
    let match;

    while ((match = regex.exec(text)) !== null) {
        const rawField = match[1] || match[3] || '';
        const rawValue = match[2] || match[4] || match[5] || match[6] || '';
        const field = normalizeSearchField(rawField);
        const value = normalizeText(rawValue.replace(/^\"|\"$/g, ''));
        if (!value) continue;

        const shouldKeep = field !== 'any' || /[:\d]/.test(rawValue) || value.length > 1;
        if (!shouldKeep) continue;

        const variants = expandSearchVariants(value, field);
        clauses.push({
            field,
            raw: rawValue,
            value,
            variants,
            compactVariants: variants.map(compactText).filter(Boolean),
            isPhrase: value.includes(' ')
        });
    }

    return clauses;
}

function tokenizeSearch(query) {
    return Array.from(new Set(parseSearchQuery(query).map(clause => clause.value)));
}

function getBestVariantMatch(value, variants, compactVariants, options = {}) {
    const normalizedValue = normalizeText(value);
    if (!normalizedValue) return null;

    const compactValue = compactText(value);
    const tokens = options.tokens || tokenizeLoose(value);
    let best = null;

    const consider = (score, kind, variant) => {
        if (score == null || score <= 0) return;
        const candidate = { score, kind, variant };
        if (!best || candidate.score > best.score) best = candidate;
    };

    variants.forEach((variant, index) => {
        if (!variant) return;
        const compactVariant = compactVariants[index] || compactText(variant);

        if (normalizedValue === variant || (compactVariant && compactValue === compactVariant)) {
            consider(options.exact, 'exact', variant);
            return;
        }

        if (!options.skipStarts && (normalizedValue.startsWith(variant) || (compactVariant && compactValue.startsWith(compactVariant)))) {
            consider(options.starts, 'starts', variant);
            return;
        }

        if (normalizedValue.includes(variant) || (compactVariant && compactValue.includes(compactVariant))) {
            consider(options.includes, 'includes', variant);
            return;
        }

        if (options.fuzzy && !variant.includes(' ') && hasFuzzyTokenMatch(variant, tokens)) {
            consider(options.fuzzy, 'fuzzy', variant);
        }
    });

    return best;
}

// Drop-in replacement for extractDefinitionSnippet plus an HTML-preserving renderer.
// Excerpt selection keeps the existing algorithm; markup preserves indexed text.
function getDefinitionSnippetDetails(text, terms, maxLength = 220) {
    const plain = (text || '').replace(/\s+/g, ' ').trim();
    if (!plain) return { text: '', plain, start: 0, end: 0, leading: false, trailing: false };

    const lower = plain.toLowerCase();
    let bestIndex = Number.POSITIVE_INFINITY;
    let bestTerm = '';
    terms.forEach(term => {
        const normalizedTerm = normalizeText(term);
        if (!normalizedTerm) return;
        const index = lower.indexOf(normalizedTerm);
        if (index !== -1 && index < bestIndex) {
            bestIndex = index;
            bestTerm = normalizedTerm;
        }
    });

    let start = 0;
    let end = plain.length;
    if (!Number.isFinite(bestIndex)) {
        if (plain.length > maxLength) end = plain.slice(0, maxLength).trimEnd().length;
    } else {
        start = Math.max(0, bestIndex - 72);
        end = Math.min(plain.length, bestIndex + Math.max(bestTerm.length, 36) + 96);
        if (start > 0) {
            const nextSpace = plain.indexOf(' ', start);
            if (nextSpace !== -1 && nextSpace < bestIndex) start = nextSpace + 1;
        }
        if (end < plain.length) {
            const prevSpace = plain.lastIndexOf(' ', end);
            if (prevSpace > bestIndex) end = prevSpace;
        }
        while (start < end && /\s/.test(plain[start])) start += 1;
        while (end > start && /\s/.test(plain[end - 1])) end -= 1;
    }
    const leading = start > 0;
    const trailing = end < plain.length;
    const textValue = `${leading ? '…' : ''}${plain.slice(start, end)}${trailing ? '…' : ''}`;
    return { text: textValue, plain, start, end, leading, trailing };
}

function extractDefinitionSnippet(text, terms, maxLength = 220) {
    return getDefinitionSnippetDetails(text, terms, maxLength).text;
}

function renderDefinitionSnippetHtml(definition, details) {
    if (!details || !details.text) return '';
    if (!/<\s*(?:em|i)(?:\s|>)/i.test(definition || '')) return escapeHtml(details.text);
    const tokens = String(definition || '').match(/<[^>]*>|[^<]+|</g) || [];
    const letters = [];
    const italicFlags = [];
    let italicDepth = 0;
    let pendingSpace = false;
    let pendingSpaceItalic = false;
    const append = (text, italic) => {
        for (const character of text) {
            if (/\s/.test(character)) {
                if (letters.length) {
                    pendingSpace = true;
                    pendingSpaceItalic = italic;
                }
                continue;
            }
            if (pendingSpace) {
                letters.push(' ');
                italicFlags.push(pendingSpaceItalic && italic);
                pendingSpace = false;
            }
            // Keep UTF-16 offsets aligned with String.slice and the search index.
            for (let i = 0; i < character.length; i += 1) {
                letters.push(character[i]);
                italicFlags.push(italic);
            }
        }
    };
    tokens.forEach(token => {
        if (token.startsWith('<') && token.endsWith('>')) {
            // Match stripHtml: separate block/break boundaries, preserve inline adjacency.
            if (/^<\s*\/?(?:p|div|section|article|li|ul|ol|br|hr|h[1-6]|blockquote|table|tr|td|th)\b/i.test(token)) append(' ', false);
            if (/^<\s*\/(?:em|i)\s*>$/i.test(token)) italicDepth = Math.max(0, italicDepth - 1);
            else if (/^<\s*(?:em|i)(?:\s|>)/i.test(token)) italicDepth += 1;
        } else {
            append(token, italicDepth > 0);
        }
    });

    // A malformed source fragment must never change the excerpt's visible words.
    if (letters.join('') !== details.plain) return escapeHtml(details.text);
    let result = details.leading ? '…' : '';
    let run = '';
    let runItalic = false;
    const flush = () => {
        if (!run) return;
        const escaped = escapeHtml(run);
        result += runItalic ? `<em>${escaped}</em>` : escaped;
        run = '';
    };
    for (let i = details.start; i < details.end; i += 1) {
        const italic = italicFlags[i];
        if (run && italic !== runItalic) flush();
        runItalic = italic;
        run += letters[i];
    }
    flush();
    if (details.trailing) result += '…';
    return result;
}

function getSearchMatchInfo(entry, searchClauses) {
    if (!searchClauses.length) return { matches: true, score: 0, reasons: [], snippet: '' };

    ensureSearchIndex();

    const slug = generateSlug(entry.name);
    const meta = searchIndex.get(slug);
    if (!meta) return { matches: true, score: 0, reasons: [], snippet: '' };

    let score = 0;
    const reasonBits = [];
    const snippetTerms = [];

    const pushReason = (value) => {
        if (value && !reasonBits.includes(value)) reasonBits.push(value);
    };

    for (const clause of searchClauses) {
        let bestMatch = null;

        const consider = (area, text, match, extraScore = 0) => {
            if (!match) return;
            const candidate = {
                area,
                text,
                variant: match.variant,
                kind: match.kind,
                score: match.score + extraScore
            };
            if (!bestMatch || candidate.score > bestMatch.score) {
                bestMatch = candidate;
            }
        };

        if (clause.field === 'any') {
            consider('name', entry.name, getBestVariantMatch(entry.name, clause.variants, clause.compactVariants, { exact: 760, starts: 520, includes: 340, fuzzy: 215, tokens: meta.nameTokens }));
        }

        if (clause.field === 'tag' || clause.field === 'any') {
            (meta.tagsList || []).forEach((tag, index) => {
                const displayTag = (meta.tagsDisplayList || [])[index] || tag;
                consider('tag', displayTag, getBestVariantMatch(tag, clause.variants, clause.compactVariants, { exact: clause.field === 'tag' ? 320 : 210, starts: clause.field === 'tag' ? 260 : 170, includes: clause.field === 'tag' ? 210 : 150, fuzzy: clause.field === 'tag' ? 145 : 110, tokens: meta.tagTokens }));
            });
        }

        if (clause.field === 'citation' || clause.field === 'any') {
            (meta.citationsList || []).forEach((citation, index) => {
                const displayCitation = (meta.citationsDisplayList || [])[index] || citation.toUpperCase();
                consider('citation', displayCitation, getBestVariantMatch(citation, clause.variants, clause.compactVariants, { exact: clause.field === 'citation' ? 360 : 240, starts: clause.field === 'citation' ? 300 : 190, includes: clause.field === 'citation' ? 250 : 170, fuzzy: 0, tokens: meta.citationTokens }));
            });
        }

        if (clause.field === 'source' || clause.field === 'any') {
            (meta.sourceCodes || []).forEach(sourceCode => {
                consider('source', sourceCode.toUpperCase(), getBestVariantMatch(sourceCode, clause.variants, clause.compactVariants, { exact: clause.field === 'source' ? 300 : 180, starts: clause.field === 'source' ? 220 : 140, includes: clause.field === 'source' ? 180 : 110, fuzzy: 0, tokens: meta.sourceTokens }), 8);
            });
            (meta.sourceLabelsList || []).forEach((sourceLabel, index) => {
                const displaySource = (meta.sourceDisplayList || [])[index] || sourceLabel;
                consider('source', displaySource, getBestVariantMatch(sourceLabel, clause.variants, clause.compactVariants, { exact: clause.field === 'source' ? 280 : 170, starts: clause.field === 'source' ? 210 : 130, includes: clause.field === 'source' ? 170 : 105, fuzzy: 0, tokens: meta.sourceTokens }));
            });
        }

        if (clause.field === 'any') {
            consider('definition', meta.definitionTextRaw, getBestVariantMatch(meta.definitionText, clause.variants, clause.compactVariants, { exact: 150, includes: 95, fuzzy: 55, skipStarts: true, tokens: meta.definitionTokens }));
        }

        if (!bestMatch) {
            return { matches: false, score: 0, reasons: [], snippet: '' };
        }

        score += bestMatch.score;

        if (bestMatch.variant) {
            snippetTerms.push(bestMatch.variant);
        }
        if (clause.isPhrase && bestMatch.kind !== 'fuzzy') {
            score += 28;
        }

        if (bestMatch.area === 'name') {
            pushReason(bestMatch.kind === 'exact' ? 'Name match' : 'Name');
        } else if (bestMatch.area === 'definition') {
            pushReason(clause.isPhrase ? 'Definition phrase' : 'Definition');
        } else if (bestMatch.area === 'tag') {
            pushReason(`Tag: ${bestMatch.text}`);
        } else if (bestMatch.area === 'citation') {
            pushReason(`Citation: ${bestMatch.text}`);
        } else if (bestMatch.area === 'source') {
            pushReason(`Source: ${bestMatch.text}`);
        }
    }

    const fullQuery = searchClauses.map(clause => clause.value).join(' ').trim();
    const fullQueryCompact = compactText(fullQuery);
    if (fullQuery) {
        if (meta.nameLower === fullQuery || (fullQueryCompact && meta.nameCompact === fullQueryCompact)) {
            score += 420;
        } else if (meta.nameLower.startsWith(fullQuery) || (fullQueryCompact && meta.nameCompact.startsWith(fullQueryCompact))) {
            score += 180;
        } else if (meta.nameLower.includes(fullQuery) || (fullQueryCompact && meta.nameCompact.includes(fullQueryCompact))) {
            score += 110;
        }

        if (meta.definitionText.includes(fullQuery) || (fullQueryCompact && meta.definitionCompact.includes(fullQueryCompact))) score += 95;
        if (meta.citationsText.includes(fullQuery) || (fullQueryCompact && meta.citationsCompact.includes(fullQueryCompact))) score += 120;
        if (meta.tagsText.includes(fullQuery) || (fullQueryCompact && meta.tagsCompact.includes(fullQueryCompact))) score += 105;
    }

    const snippetDetails = getDefinitionSnippetDetails(meta.definitionTextRaw, snippetTerms.length > 0 ? snippetTerms : searchClauses.map(clause => clause.value));
    const snippet = snippetDetails.text;
    const snippetHtml = renderDefinitionSnippetHtml(entry.definition, snippetDetails);
    return { matches: true, score, reasons: reasonBits, snippet, snippetHtml };
}

function highlightHtmlContent(html, searchTerms) {
    if (!searchTerms || searchTerms.length === 0 || !html) return html;

    const pattern = new RegExp(`(${searchTerms
        .slice()
        .sort((a, b) => b.length - a.length)
        .map(escapeRegex)
        .join('|')})`, 'gi');

    return html
        .split(/(<[^>]+>)/g)
        .map(part => part.startsWith('<') ? part : part.replace(pattern, '<mark class="search-highlight">$1</mark>'))
        .join('');
}

function getAvailableSources() {
    const sourceMap = new Map();

    allEntries.forEach(entry => {
        const entrySources = new Set(
            (entry.citations || [])
                .map(getSourceCodeFromCitation)
                .filter(Boolean)
        );

        entrySources.forEach(code => {
            if (!sourceMap.has(code)) {
                sourceMap.set(code, {
                    code,
                    label: getSourceLabel(code),
                    count: 0
                });
            }
            sourceMap.get(code).count += 1;
        });
    });

    const preferredOrder = ['A', 'D', 'MTM', 'PS', 'GD', 'CM', 'PG', 'MB'];
    return Array.from(sourceMap.values()).sort((a, b) => {
        const aIndex = preferredOrder.indexOf(a.code);
        const bIndex = preferredOrder.indexOf(b.code);

        if (aIndex !== -1 || bIndex !== -1) {
            if (aIndex === -1) return 1;
            if (bIndex === -1) return -1;
            return aIndex - bIndex;
        }

        return a.label.localeCompare(b.label);
    });
}

function getCurrentHashSlug() {
    return window.location.hash ? window.location.hash.slice(1) : '';
}

function syncUrlState(hashSlug = getCurrentHashSlug()) {
    try {
        history.replaceState(null, '', buildUrlFromState(hashSlug));
    } catch (e) {
        // Ignore restricted contexts
    }
}

function setTagPanelOpen(isOpen) {
    const toggle = document.getElementById('tagFilterToggle');
    const panel = document.getElementById('tagFilterPanel');
    if (!toggle || !panel) return;

    toggle.classList.toggle('active', isOpen);
    panel.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
}

function populateSourceFilter() {
    const select = document.getElementById('bookFilter');
    if (!select) return;

    const sourceOptions = getAvailableSources();
    select.innerHTML = '<option value="all">All Sources</option>' +
        sourceOptions.map(source => {
            const label = `${source.label} (${source.count})`;
            return `<option value="${escapeHtml(source.code)}">${escapeHtml(label)}</option>`;
        }).join('');

    const hasCurrentValue = sourceOptions.some(source => source.code === filterState.source);
    if (!hasCurrentValue) {
        filterState.source = 'all';
    }
    select.value = filterState.source;
}

function syncLetterButtons() {
    document.querySelectorAll('.letter-btn').forEach(btn => {
        const isAllButton = btn.dataset.all === 'true';
        const letter = btn.dataset.letter || null;
        const isActive = isAllButton ? !filterState.letter : letter === filterState.letter;
        btn.classList.toggle('active', isActive);
    });
}

function syncTagButtons() {
    document.querySelectorAll('.tag-btn, .entry-tag').forEach(btn => {
        btn.classList.toggle('active', filterState.tags.has(btn.dataset.tag));
    });
}

function syncControlsFromState() {
    const searchInput = document.getElementById('searchInput');
    const sourceSelect = document.getElementById('bookFilter');

    if (searchInput) {
        searchInput.value = filterState.search;
    }
    if (sourceSelect) {
        sourceSelect.value = filterState.source;
    }

    syncLetterButtons();
    syncTagButtons();
    updateActiveFiltersDisplay();
    setTagPanelOpen(filterState.tags.size > 0);
}

function initLetterNav() {
    const nav = document.getElementById('letterNav');
    if (!nav) return;

    nav.innerHTML = '';

    const availableLetterSet = new Set(
        allEntries
            .map(entry => getFirstLetter(entry.name))
            .filter(letter => letter !== '#')
    );

    const allBtn = document.createElement('button');
    allBtn.className = 'letter-btn';
    allBtn.dataset.all = 'true';
    allBtn.type = 'button';
    allBtn.textContent = 'All';
    allBtn.addEventListener('click', () => {
        filterState.letter = null;
        applyFilters();
    });
    nav.appendChild(allBtn);

    alphabet.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'letter-btn';
        btn.dataset.letter = letter;
        btn.type = 'button';
        btn.textContent = letter;

        if (!availableLetterSet.has(letter)) {
            btn.disabled = true;
            btn.classList.add('disabled');
        }

        btn.addEventListener('click', () => {
            if (!availableLetterSet.has(letter)) return;
            filterState.letter = letter;
            applyFilters();
        });

        nav.appendChild(btn);
    });

    syncLetterButtons();
}

function renderTagButtons(tags) {
    if (!Array.isArray(tags) || tags.length === 0) return '';
    const uniqueTags = [...new Set(tags)].sort((a, b) => a.localeCompare(b));
    return `
        <div class="entry-tags">
            <div class="citations-label">Tags</div>
            <div class="tag-list">
                ${uniqueTags.map(tag => `<button type="button" class="entry-tag${filterState.tags.has(tag) ? ' active' : ''}" data-tag="${escapeHtml(tag)}" title="Add ${escapeHtml(tag)} to filters">${escapeHtml(tag)}</button>`).join('')}
            </div>
        </div>
    `;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text == null ? '' : String(text);
    return div.innerHTML;
}


const cmsNameStyleConfig = {
    'italic-title': [
        'Razzle Daz',
        'Bark, The',
        'Gentleman Rounder',
        'Tucalul',
        'Táin, The',
        'Greek Anthology',
        'Chambers, The (school paper)',
        'Episodes of the Argo',
        'Chicago Herald and Examiner',
        'Chicago Tribune',
        'Cow County Roundup',
        'Crock, The',
        'Flaying of Cardinal Artemis',
        'Handbook of Treasons',
        'House and Home Happenings Magazine',
        'Jazz Magazine',
        'Jazz Sheet',
        'Karkik Kariki',
        'Les Contes Drolatiques',
        'Nattkarlet',
        'Neo-Centrist Review of Evolvate Socio-Geopolitical Motifs in a Disintegrating WorlD',
        'Night Charley',
        'Nocnik',
        'Pelican',
        'Resurrection of Count Finnegan, The',
        'Rule of St. Benedict',
        'Seven Roads',
        'Show-Bill',
        'Spanish Golden Book',
        'Sporting News',
        'St. Louis Globe',
        'St. Louis Post Dispatch',
        'Techne Iatrike',
        'The Answer',
        'The Back-Door of History',
        'The Baltimore Catechism',
        'To Karkik Kariki',
        'Trachtas',
        'Underground Eagle',
        'Union Sheet',
        'Voyages of Sindbad the Sailor',
        'Bulfinch\'s Mythology',
        'Captain Justice',
        'Eighteenth Book of Strange Encounters, The',
        'Flame Man (comic strip)',
        'Night Watch, The',
        'Quintessence of Ibsenism',
        'White Avenger'
    ],
    'quote-title': [
        'Corn Country Cantos',
        'Sonnets and Succotash',
        'Judgement Day',
        'Green Islands',
        'Books Abroad',
        'Arena del Mar',
        'Red Sky in the Morning',
        'Way Back in the Hills',
        'Whistle Stop Jump',
        'Grass Roots (Moles at the)',
        'Great Day Rime',
        'Interior Garden, The (story)',
        'Little Looking Glass',
        'Moles at the Grass Roots (Article)',
        'Urbe et Orbe',
        'Who is Iason, but Who is Also of the Other People',
        'Who is Meleager',
    ],
    'italic-ship': [
        "Anthony Ship",
        "Aragh",
        "Aral",
        "Argo",
        "Argo Twelve",
        "Argo Twelve and Half",
        "Blaireau, The",
        "Brunhilde",
        "Bumi",
        "Casa del Oro",
        "Catherine, The",
        "Celeste, Marie",
        "Delay",
        "Flying Serpent",
        "Hawk (boat/ship)",
        "Hind",
        "Holy Argo",
        "Land of Behest",
        "Marie Celeste",
        "Megčre (Ship on Master Map)",
        "Moonraker (Ship on Master Map)",
        "Navicula Petri (Peter Ship)",
        "Red Fox",
        "Renard Volante",
        "San gre del Cristo",
        "Sarcophagus",
        "St. Marc",
        "The Indiaman",
        "Torre del Marifi",
        "Virgen la mas Benigna",
        "World (2)"
    ],
    'italic-foreign': [
        'La Barque',
        'Adelphos',
        'Admiror audiens',
        'Aquilae congregabunt dumque In nostram memoriam quotiescumque',
        'Aquinas Redevivus',
        'Arca',
        'Ascendere',
        'Cabron',
        'Cardines',
        'Carrozza',
        'Casetta',
        'Cassino',
        'Castrare becchi',
        'Chloros',
        'Contadino',
        'Eabhraioch',
        'Eros',
        'Fare delle capriole',
        'Forma rotunda et globosa',
        'Gremium Matris',
        'Illo tempore---',
        'In hoc signo vincet',
        'In Petto',
        'Kathisate',
        'Magkaano ito?',
        'Malaki ibon',
        'Magnifica',
        'Meropen',
        'Metanoia',
        'Morphē',
        'Nisi esses sollicitus',
        'O quam beata Civitas!',
        'Pascha nostrum immolatus est Christus',
        'Petrus, Tu es',
        'Portae inferi non prevalebunt',
        'Quo vadis, filia mea?',
        'Sciocco',
        'Seelenfresser',
        'Semangat',
        'Superundate',
        'Thanatos',
        'tujuan',
        'vert',
        'Vettura',
        'Xenoi',
        'Zingaro (Gitano)',
        'Faulte des Boemes',
        'Hsien',
        'Populus tremuloides'
    ]
};

const cmsStyleBySlug = {};
Object.entries(cmsNameStyleConfig).forEach(([style, names]) => {
    names.forEach(name => {
        cmsStyleBySlug[generateSlug(name)] = style;
    });
});

function getCmsStyleForName(name) {
    return cmsStyleBySlug[generateSlug(name || '')] || null;
}

const cmsNameMarkupOverrides = {
    "Who is Iason, but Who is Also of the Other People": "<span class=\"cms-quoted-title\">\u201cWho Is Iason, but Who Is Also of the Other People\u201d</span>",
    "Who is Meleager": "<span class=\"cms-quoted-title\">\u201cWho Is Meleager\u201d</span>",
    "Neo-Centrist Review of Evolvate Socio-Geopolitical Motifs in a Disintegrating WorlD": "<span class=\"cms-title\">Neo-Centrist Review of Evolvate Socio-Geopolitical Motifs in a Disintegrating World</span>",

    "Clock (Argo as dating)": "Clock (<span class=\"cms-ship\">Argo</span> as dating)",
    "Masters of the Argo": "Masters of the <span class=\"cms-ship\">Argo</span>",
    "Molucca Sea (Sailed by Argo)": "Molucca Sea (Sailed by <span class=\"cms-ship\">Argo</span>)",
    "Original Argo crew (aka Animated Marvels)": "Original <span class=\"cms-ship\">Argo</span> crew (aka Animated Marvels)",
    "Argo Company (Teresa's account)": "<span class=\"cms-ship\">Argo</span> Company (Teresa's account)",
    "Holy Argo": "Holy <span class=\"cms-ship\">Argo</span>",
    "Hindrance (Aral)": "Hindrance (<span class=\"cms-ship\">Aral</span>)"
};

function renderCmsName(name, options = {}) {
    const rawName = name == null ? '' : String(name);
    if (Object.prototype.hasOwnProperty.call(cmsNameMarkupOverrides, rawName)) return cmsNameMarkupOverrides[rawName];
    const style = options.style || getCmsStyleForName(rawName);

    if (!style) return escapeHtml(rawName);

    // Vessel parentheticals describe the entry, not part of the proper name.
    const qualifierPattern = style === 'italic-ship'
        ? /^(.*?)(\s*\([^)]*\).*)$/
        : /^(.*?)(\s*\((?:boat\/ship|comic strip|school paper|ship|story|Article|book on|sect)\).*)$/i;
    const qualifierMatch = rawName.match(qualifierPattern);
    let baseName = qualifierMatch ? qualifierMatch[1] : rawName;
    const qualifier = qualifierMatch ? escapeHtml(qualifierMatch[2]) : '';
    let articlePrefix = '';
    let articleSuffix = '';
    if (style === 'italic-ship') {
        const invertedArticle = baseName.match(/^(.*?)(,\s*(?:The|A|An))$/);
        if (invertedArticle) {
            baseName = invertedArticle[1];
            articleSuffix = escapeHtml(invertedArticle[2]);
        }
        const leadingArticle = baseName.match(/^((?:The|the|A|a|An|an)\s+)(.+)$/);
        if (leadingArticle) {
            articlePrefix = escapeHtml(leadingArticle[1]);
            baseName = leadingArticle[2];
        }
    }
    const safeBase = escapeHtml(baseName);

    if (style === 'quote-title') {
        if (options.withoutQuotes) {
            return `<span class="cms-quoted-title-inner">${safeBase}</span>${qualifier}`;
        }
        return `<span class="cms-quoted-title">“${safeBase}”</span>${qualifier}`;
    }

    const className = style === 'italic-ship'
        ? 'cms-ship'
        : style === 'italic-foreign'
            ? 'cms-foreign'
            : 'cms-title';

    return `${articlePrefix}<span class="${className}">${safeBase}</span>${articleSuffix}${qualifier}`;
}


function handleEntryHeaderKeydown(event, header) {
    const headers = Array.from(document.querySelectorAll('.entry-header'));
    const currentIndex = headers.indexOf(header);

    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleEntry(header);
        return;
    }

    if (event.key === 'ArrowDown' && currentIndex < headers.length - 1) {
        event.preventDefault();
        headers[currentIndex + 1].focus();
    }

    if (event.key === 'ArrowUp' && currentIndex > 0) {
        event.preventDefault();
        headers[currentIndex - 1].focus();
    }

    if (event.key === 'Home' && headers.length > 0) {
        event.preventDefault();
        headers[0].focus();
    }

    if (event.key === 'End' && headers.length > 0) {
        event.preventDefault();
        headers[headers.length - 1].focus();
    }
}

function expandAll() {
    document.querySelectorAll('.entry').forEach(entry => {
        entry.classList.add('expanded');
        ensureEntryContent(entry);
        hydrateEntryResearch(entry);
        const slug = entry.dataset.slug;
        if (slug) expandedSlugs.add(slug);
        const header = entry.querySelector('.entry-header');
        if (header) header.setAttribute('aria-expanded', 'true');
    });
    syncUrlState('');
}

function collapseAll() {
    document.querySelectorAll('.entry').forEach(entry => {
        entry.classList.remove('expanded');
        const slug = entry.dataset.slug;
        if (slug) expandedSlugs.delete(slug);
        const header = entry.querySelector('.entry-header');
        if (header) header.setAttribute('aria-expanded', 'false');
    });
    syncUrlState('');
}

function filterByLetter(letter) {
    filterState.letter = letter || null;
    applyFilters();
}

function filterByBook(book) {
    filterState.source = book === 'all' ? 'all' : (getCanonicalSourceCode(book) || 'all');
    applyFilters();
}

function countEntriesPerTag() {
    const counts = {};
    allEntries.forEach(entry => {
        (entry.tags || []).forEach(tag => {
            counts[tag] = (counts[tag] || 0) + 1;
        });
    });
    return counts;
}

function toggleTagFilter(tag, options = {}) {
    if (!tag) return;
    const { forceAdd = false, forceOpen = false } = options;

    if (forceAdd) {
        filterState.tags.add(tag);
    } else if (filterState.tags.has(tag)) {
        filterState.tags.delete(tag);
    } else {
        filterState.tags.add(tag);
    }

    if (forceOpen || filterState.tags.size > 0) {
        setTagPanelOpen(true);
    }
    applyFilters();
}

function initTagFilters() {
    const container = document.getElementById('tagCategories');
    const toggle = document.getElementById('tagFilterToggle');
    if (!container || !toggle) return;

    const counts = countEntriesPerTag();
    const categorizedTags = new Set();
    let html = '';

    for (const [category, tags] of Object.entries(tagCategories)) {
        const activeTags = tags.filter(tag => counts[tag] > 0);
        if (activeTags.length === 0) continue;

        activeTags.forEach(tag => categorizedTags.add(tag));
        html += '<div class="tag-category"><div class="tag-category-header">' + escapeHtml(category) + '</div><div class="tag-list">';
        activeTags.forEach(tag => {
            html += '<button class="tag-btn" type="button" data-tag="' + escapeHtml(tag) + '">' + escapeHtml(tag) + '<span class="count">(' + counts[tag] + ')</span></button>';
        });
        html += '</div></div>';
    }

    const uncategorized = Object.keys(counts)
        .filter(tag => !categorizedTags.has(tag))
        .sort((a, b) => a.localeCompare(b));

    if (uncategorized.length > 0) {
        html += '<div class="tag-category"><div class="tag-category-header">Other Tags</div><div class="tag-list">';
        uncategorized.forEach(tag => {
            html += '<button class="tag-btn" type="button" data-tag="' + escapeHtml(tag) + '">' + escapeHtml(tag) + '<span class="count">(' + counts[tag] + ')</span></button>';
        });
        html += '</div></div>';
    }

    container.innerHTML = html;

    container.querySelectorAll('.tag-btn').forEach(button => {
        button.addEventListener('click', () => {
            toggleTagFilter(button.dataset.tag, { forceOpen: true });
        });
    });

    toggle.addEventListener('click', () => {
        const shouldOpen = !toggle.classList.contains('active');
        setTagPanelOpen(shouldOpen);
    });

    syncTagButtons();
    updateActiveFiltersDisplay();
}

function initSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    let debounceTimer;
    input.addEventListener('input', (event) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            filterState.search = event.target.value.trim();
            applyFilters();
        }, 180);
    });
}



// Research workbench enhancements
filterState.citation = filterState.citation || '';

const compareState = { slugs: [] };
const entryResearchCache = new Map();
const entryMeta = new Map();
const tagToSlugs = new Map();
const sourceToSlugs = new Map();
const citationToSlugs = new Map();
const nameTokenToSlugs = new Map();

function addToLookup(map, key, slug) {
    if (!key || !slug) return;
    if (!map.has(key)) map.set(key, new Set());
    map.get(key).add(slug);
}

function getSignificantTokens(text) {
    return Array.from(new Set(
        normalizeText(text)
            .split(/[^a-z0-9]+/g)
            .filter(token => token.length >= 4)
    ));
}

let researchIndexesReady = false;

function buildResearchIndexes() {
    if (researchIndexesReady) return;

    entryResearchCache.clear();
    entryMeta.clear();
    tagToSlugs.clear();
    sourceToSlugs.clear();
    citationToSlugs.clear();
    nameTokenToSlugs.clear();

    allEntries.forEach(entry => {
        const slug = generateSlug(entry.name);
        const tags = Array.isArray(entry.tags) ? Array.from(new Set(entry.tags)) : [];
        const citations = Array.isArray(entry.citations) ? Array.from(new Set(entry.citations)) : [];
        const sources = Array.from(new Set(citations.map(getSourceCodeFromCitation).filter(Boolean)));
        const nameTokens = getSignificantTokens(entry.name);

        entryMeta.set(slug, { slug, tags, citations, sources, nameTokens });
        tags.forEach(tag => addToLookup(tagToSlugs, tag, slug));
        citations.forEach(citation => addToLookup(citationToSlugs, citation, slug));
        sources.forEach(source => addToLookup(sourceToSlugs, source, slug));
        nameTokens.forEach(token => addToLookup(nameTokenToSlugs, token, slug));
    });

    researchIndexesReady = true;
}

function ensureResearchIndexes() {
    buildResearchIndexes();
}

const scheduleWhenIdle = window.requestIdleCallback
    ? (callback) => window.requestIdleCallback(callback, { timeout: 1200 })
    : (callback) => window.setTimeout(callback, 48);

let idleWarmupScheduled = false;

function scheduleIdleIndexWarmup() {
    if (idleWarmupScheduled) return;
    idleWarmupScheduled = true;

    scheduleWhenIdle(() => {
        ensureResearchIndexes();
        scheduleWhenIdle(() => {
            ensureSearchIndex();
        });
    });
}

function sanitizeCompareState() {
    compareState.slugs = compareState.slugs
        .filter((slug, index, arr) => slugToEntry.has(slug) && arr.indexOf(slug) === index)
        .slice(-2);
}

function getEntryMetaBySlug(slug) {
    ensureResearchIndexes();
    return entryMeta.get(slug) || { slug, tags: [], citations: [], sources: [], nameTokens: [] };
}

function isComparing(slug) {
    return compareState.slugs.includes(slug);
}

function getWeight(bucketSize, base, minimum) {
    return Math.max(minimum, Math.round(base / Math.log2((bucketSize || 1) + 1)));
}

function summarizeList(values, limit = 3) {
    if (!Array.isArray(values) || values.length === 0) return '';
    const trimmed = values.slice(0, limit);
    const extra = values.length - trimmed.length;
    return extra > 0 ? `${trimmed.join(', ')} +${extra}` : trimmed.join(', ');
}

function describeRelatedness(sourceMeta, candidateMeta) {
    const sharedCitations = sourceMeta.citations.filter(citation => candidateMeta.citations.includes(citation));
    const sharedTags = sourceMeta.tags.filter(tag => candidateMeta.tags.includes(tag));
    const sharedSources = sourceMeta.sources.filter(source => candidateMeta.sources.includes(source)).map(getSourceLabel);
    const bits = [];

    if (sharedCitations.length > 0) bits.push(`shares ${sharedCitations[0]}`);
    if (sharedTags.length > 0) bits.push(`tags: ${summarizeList(sharedTags, 2)}`);
    if (sharedSources.length > 0 && sharedCitations.length === 0) bits.push(`source: ${summarizeList(sharedSources, 2)}`);

    return bits.join(' · ');
}

function getRelatedEntries(entry, limit = 6) {
    ensureResearchIndexes();
    const slug = generateSlug(entry.name);
    const cached = entryResearchCache.get(slug);
    if (cached) return cached.slice(0, limit);

    const sourceMeta = getEntryMetaBySlug(slug);
    const candidateScores = new Map();

    function addScore(candidateSlug, score) {
        if (!candidateSlug || candidateSlug === slug) return;
        candidateScores.set(candidateSlug, (candidateScores.get(candidateSlug) || 0) + score);
    }

    sourceMeta.citations.forEach(citation => {
        const bucket = citationToSlugs.get(citation);
        if (!bucket) return;
        const weight = getWeight(bucket.size, 180, 28);
        bucket.forEach(candidateSlug => addScore(candidateSlug, weight));
    });

    sourceMeta.tags.forEach(tag => {
        const bucket = tagToSlugs.get(tag);
        if (!bucket) return;
        const weight = getWeight(bucket.size, 56, 6);
        bucket.forEach(candidateSlug => addScore(candidateSlug, weight));
    });

    sourceMeta.sources.forEach(source => {
        const bucket = sourceToSlugs.get(source);
        if (!bucket) return;
        const weight = getWeight(bucket.size, 24, 2);
        bucket.forEach(candidateSlug => addScore(candidateSlug, weight));
    });

    sourceMeta.nameTokens.forEach(token => {
        const bucket = nameTokenToSlugs.get(token);
        if (!bucket || bucket.size > 40) return;
        const weight = getWeight(bucket.size, 16, 2);
        bucket.forEach(candidateSlug => addScore(candidateSlug, weight));
    });

    const related = Array.from(candidateScores.entries())
        .map(([candidateSlug, score]) => {
            const relatedEntry = slugToEntry.get(candidateSlug);
            if (!relatedEntry) return null;
            const candidateMeta = getEntryMetaBySlug(candidateSlug);
            return {
                slug: candidateSlug,
                entry: relatedEntry,
                score,
                summary: describeRelatedness(sourceMeta, candidateMeta) || 'Shared themes and sources'
            };
        })
        .filter(Boolean)
        .sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return a.entry.name.localeCompare(b.entry.name, undefined, { sensitivity: 'base' });
        });

    entryResearchCache.set(slug, related);
    return related.slice(0, limit);
}

function renderCompareButton(slug, label = null) {
    const active = isComparing(slug);
    const text = label || (active ? 'Remove from compare' : 'Compare');
    return `<button type="button" class="compare-toggle${active ? ' active' : ''}" data-compare-slug="${escapeHtml(slug)}" aria-pressed="${String(active)}">${escapeHtml(text)}</button>`;
}

function renderEntryTools(entry) {
    return `<div class="entry-tools">${renderCompareButton(generateSlug(entry.name))}</div>`;
}

function renderCitationSection(citations, searchTerms, wrapperClass = 'entry-citations', labelClass = 'citations-label', listClass = 'citations-list') {
    if (!Array.isArray(citations) || citations.length === 0) return '';
    return `
        <div class="${wrapperClass}">
            <div class="${labelClass}">Citations</div>
            <div class="${listClass}">
                ${[...new Set(citations)].map(citation => `
                    <button type="button" class="citation${filterState.citation === citation ? ' is-active' : ''}" data-citation="${escapeHtml(citation)}" data-tooltip="${escapeHtml(decodeCitation(citation))}" title="Focus this citation">
                        ${highlightHtmlContent(escapeHtml(citation), searchTerms)}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function renderRelatedEntries(entry, searchTerms, limit = 6) {
    const related = getRelatedEntries(entry, limit);
    if (!related.length) return '';

    return `
        <div class="related-entries">
            <div class="citations-label">Related Entries</div>
            <div class="related-entry-list">
                ${related.map(item => `
                    <button type="button" class="related-entry-link" data-open-slug="${escapeHtml(item.slug)}" title="Open ${escapeHtml(item.entry.name)}">
                        <span class="related-name">${highlightHtmlContent(renderCmsName(item.entry.name), searchTerms)}</span>
                        <span class="related-meta">${escapeHtml(item.summary)}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function hydrateEntryResearch(entryElement) {
    if (!entryElement) return;
    ensureResearchIndexes();
    const slot = entryElement.querySelector('.entry-research-slot');
    if (!slot || slot.dataset.hydrated === 'true') return;
    const entry = slugToEntry.get(entryElement.dataset.slug);
    if (!entry) return;

    slot.innerHTML = renderRelatedEntries(entry, tokenizeSearch(filterState.search));
    slot.dataset.hydrated = 'true';
}

function updateWorkbenchVisibility() {
    const workbench = document.getElementById('researchWorkbench');
    const citationPanel = document.getElementById('citationSpotlight');
    const comparePanel = document.getElementById('compareWorkbench');
    if (!workbench) return;

    const hasCitation = citationPanel && !citationPanel.hidden;
    const hasCompare = comparePanel && !comparePanel.hidden;
    workbench.hidden = !(hasCitation || hasCompare);
}

function syncCompareButtons() {
    document.querySelectorAll('.compare-toggle').forEach(button => {
        const slug = button.dataset.compareSlug;
        const active = isComparing(slug);
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
        button.textContent = active ? 'Remove from compare' : 'Compare';
    });
}

function focusCitation(citation) {
    if (!citation) return;
    filterState.citation = citation;
    applyFilters();

    const workbench = document.getElementById('researchWorkbench');
    if (workbench) {
        setTimeout(() => workbench.scrollIntoView({ behavior: 'smooth', block: 'start' }), 10);
    }
}

function toggleCompareSlug(slug) {
    if (!slug || !slugToEntry.has(slug)) return;

    if (isComparing(slug)) {
        compareState.slugs = compareState.slugs.filter(currentSlug => currentSlug !== slug);
    } else {
        compareState.slugs = compareState.slugs.filter(currentSlug => currentSlug !== slug);
        compareState.slugs.push(slug);
        if (compareState.slugs.length > 2) {
            compareState.slugs = compareState.slugs.slice(-2);
        }
    }

    renderCompareWorkbench();
    syncCompareButtons();
    syncUrlState();

    if (compareState.slugs.length > 0) {
        const workbench = document.getElementById('researchWorkbench');
        if (workbench) {
            setTimeout(() => workbench.scrollIntoView({ behavior: 'smooth', block: 'start' }), 10);
        }
    }
}

function clearCompareWorkbench() {
    compareState.slugs = [];
    renderCompareWorkbench();
    syncCompareButtons();
    syncUrlState();
}

function renderWorkbenchEntryLink(slug, summary) {
    const entry = slugToEntry.get(slug);
    if (!entry) return '';
    return `
        <button type="button" class="workbench-entry-link" data-open-slug="${escapeHtml(slug)}" title="Open ${escapeHtml(entry.name)}">
            <span class="workbench-entry-name">${renderCmsName(entry.name)}</span>
            ${summary ? `<span class="workbench-entry-meta">${escapeHtml(summary)}</span>` : ''}
        </button>
    `;
}

function renderCitationSpotlight() {
    const panel = document.getElementById('citationSpotlight');
    if (!panel) return;

    const citation = filterState.citation;
    if (!citation) {
        panel.hidden = true;
        panel.innerHTML = '';
        updateWorkbenchVisibility();
        return;
    }

    ensureResearchIndexes();

    const exactSlugs = Array.from(citationToSlugs.get(citation) || []).filter(slug => slugToEntry.has(slug));
    const sourceCode = getSourceCodeFromCitation(citation);
    const sourceLabel = sourceCode ? getSourceLabel(sourceCode) : 'Unknown source';
    const exactSet = new Set(exactSlugs);
    const broaderSourceSlugs = Array.from(sourceToSlugs.get(sourceCode) || [])
        .filter(slug => slugToEntry.has(slug) && !exactSet.has(slug))
        .slice(0, 8);

    panel.hidden = false;
    panel.innerHTML = `
        <div class="workbench-header">
            <div>
                <div class="workbench-kicker">Citation spotlight</div>
                <h2 class="workbench-title">${escapeHtml(citation)}</h2>
                <p class="workbench-subtitle">${escapeHtml(decodeCitation(citation))}</p>
            </div>
            <div class="workbench-actions">
                ${sourceCode ? `<button type="button" class="workbench-btn" data-workbench-action="source-only" data-source="${escapeHtml(sourceCode)}">Keep source only</button>` : ''}
                <button type="button" class="workbench-btn" data-workbench-action="clear-citation">Clear citation</button>
            </div>
        </div>
        <p class="workbench-meta">${exactSlugs.length} ${exactSlugs.length === 1 ? 'entry cites' : 'entries cite'} this exact location. Source: ${escapeHtml(sourceLabel)}.</p>
        <div class="workbench-columns">
            <div class="workbench-column">
                <div class="workbench-section-title">Exact citation matches</div>
                ${exactSlugs.length > 0 ? `<div class="workbench-entry-list">${exactSlugs.map(slug => renderWorkbenchEntryLink(slug, 'Open citation match')).join('')}</div>` : '<div class="workbench-empty">No exact citation matches are available under the current data.</div>'}
            </div>
            <div class="workbench-column">
                <div class="workbench-section-title">More from ${escapeHtml(sourceLabel)}</div>
                ${broaderSourceSlugs.length > 0 ? `<div class="workbench-entry-list">${broaderSourceSlugs.map(slug => renderWorkbenchEntryLink(slug, 'Same source')).join('')}</div>` : `<div class="workbench-empty">No additional ${escapeHtml(sourceLabel)} entries remain outside this exact citation.</div>`}
            </div>
        </div>
    `;

    updateWorkbenchVisibility();
}

function renderCompareCard(entry) {
    const slug = generateSlug(entry.name);
    const meta = getEntryMetaBySlug(slug);
    const sourceSummary = meta.sources.length > 0 ? meta.sources.map(getSourceLabel).join(' · ') : 'No source metadata';

    return `
        <article class="compare-card">
            <div class="compare-card-header">
                <div>
                    <h3 class="compare-card-title">${renderCmsName(entry.name)}</h3>
                    <div class="compare-card-meta">${escapeHtml(sourceSummary)}</div>
                </div>
                ${renderCompareButton(slug)}
            </div>
            <div class="compare-card-body">
                <div class="compare-definition">${linkifyDefinition(entry.definition, entry.name)}</div>
                ${renderTagButtons(entry.tags)}
                ${renderCitationSection(entry.citations, [])}
            </div>
        </article>
    `;
}

function renderCompareWorkbench() {
    const panel = document.getElementById('compareWorkbench');
    if (!panel) return;

    sanitizeCompareState();
    const entries = compareState.slugs.map(slug => slugToEntry.get(slug)).filter(Boolean);

    if (entries.length === 0) {
        panel.hidden = true;
        panel.innerHTML = '';
        updateWorkbenchVisibility();
        return;
    }

    ensureResearchIndexes();

    const metas = entries.map(entry => getEntryMetaBySlug(generateSlug(entry.name)));
    const sharedTags = metas.length === 2 ? metas[0].tags.filter(tag => metas[1].tags.includes(tag)) : [];
    const sharedSources = metas.length === 2 ? metas[0].sources.filter(source => metas[1].sources.includes(source)).map(getSourceLabel) : [];
    const sharedCitations = metas.length === 2 ? metas[0].citations.filter(citation => metas[1].citations.includes(citation)) : [];
    const summaryBits = [];

    if (sharedTags.length > 0) summaryBits.push(`Shared tags: ${summarizeList(sharedTags, 4)}`);
    if (sharedSources.length > 0) summaryBits.push(`Shared sources: ${summarizeList(sharedSources, 3)}`);
    if (sharedCitations.length > 0) summaryBits.push(`Shared citations: ${summarizeList(sharedCitations, 2)}`);

    panel.hidden = false;
    panel.innerHTML = `
        <div class="workbench-header">
            <div>
                <div class="workbench-kicker">Compare workbench</div>
                <h2 class="workbench-title">${entries.length === 1 ? 'Choose one more entry' : 'Side-by-side comparison'}</h2>
                <p class="workbench-subtitle">${entries.length === 1 ? 'Add another entry from any card, popup, or glossary entry to compare them here.' : 'Use this space to compare definitions, tags, and citations.'}</p>
            </div>
            <div class="workbench-actions">
                <button type="button" class="workbench-btn" data-workbench-action="clear-compare">Clear comparison</button>
            </div>
        </div>
        ${summaryBits.length > 0 ? `<p class="compare-summary">${escapeHtml(summaryBits.join(' · '))}</p>` : ''}
        <div class="compare-grid${entries.length === 1 ? ' single' : ''}">
            ${entries.map(renderCompareCard).join('')}
            ${entries.length === 1 ? '<div class="compare-placeholder">Select another entry and its full definition, tags, and citations will appear here for a direct comparison.</div>' : ''}
        </div>
    `;

    syncCompareButtons();
    updateWorkbenchVisibility();
}

function buildUrlFromState(hashSlug = getCurrentHashSlug()) {
    const params = new URLSearchParams();
    const trimmedSearch = (filterState.search || '').trim();
    if (trimmedSearch) params.set('q', trimmedSearch);
    if (filterState.letter) params.set('letter', filterState.letter);
    if (filterState.source && filterState.source !== 'all') params.set('source', filterState.source);
    if (filterState.citation) params.set('cite', filterState.citation);
    if (filterState.tags.size > 0) params.set('tags', Array.from(filterState.tags).sort().join(','));
    if (compareState.slugs.length > 0) params.set('compare', compareState.slugs.join(','));

    const queryString = params.toString();
    return `${window.location.pathname}${queryString ? `?${queryString}` : ''}${hashSlug ? `#${hashSlug}` : ''}`;
}

function loadStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    filterState.search = (params.get('q') || '').trim();

    const letter = (params.get('letter') || '').toUpperCase();
    filterState.letter = alphabet.includes(letter) ? letter : null;

    const source = (params.get('source') || 'all').trim();
    filterState.source = source === 'all' ? 'all' : (getCanonicalSourceCode(source) || 'all');
    filterState.citation = (params.get('cite') || '').trim();

    filterState.tags = new Set();
    const tagParam = params.get('tags');
    if (tagParam) {
        tagParam
            .split(',')
            .map(tag => tag.trim())
            .filter(Boolean)
            .forEach(tag => filterState.tags.add(tag));
    }

    compareState.slugs = (params.get('compare') || '')
        .split(',')
        .map(slug => slug.trim())
        .filter(Boolean);
    sanitizeCompareState();
}

function clearAllFilters() {
    filterState.search = '';
    filterState.letter = null;
    filterState.source = 'all';
    filterState.citation = '';
    filterState.tags.clear();
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    setTagPanelOpen(false);
    applyFilters();
}

function updateActiveFiltersDisplay() {
    const container = document.getElementById('activeFilters');
    const clearButton = document.getElementById('clearFiltersBtn');
    if (!container) return;

    const pills = [];
    const trimmedSearch = (filterState.search || '').trim();
    if (trimmedSearch) {
        pills.push(`<span class="active-filter-tag">Search: “${escapeHtml(trimmedSearch)}” <button type="button" class="remove" data-filter-kind="search">×</button></span>`);
    }
    if (filterState.letter) {
        pills.push(`<span class="active-filter-tag">Letter: ${escapeHtml(filterState.letter)} <button type="button" class="remove" data-filter-kind="letter">×</button></span>`);
    }
    if (filterState.source !== 'all') {
        pills.push(`<span class="active-filter-tag">Source: ${escapeHtml(getSourceLabel(filterState.source))} <button type="button" class="remove" data-filter-kind="source">×</button></span>`);
    }
    if (filterState.citation) {
        pills.push(`<span class="active-filter-tag">Citation: ${escapeHtml(filterState.citation)} <button type="button" class="remove" data-filter-kind="citation">×</button></span>`);
    }
    Array.from(filterState.tags).sort((a, b) => a.localeCompare(b)).forEach(tag => {
        pills.push(`<span class="active-filter-tag">${escapeHtml(tag)} <button type="button" class="remove" data-filter-kind="tag" data-tag="${escapeHtml(tag)}">×</button></span>`);
    });

    if (pills.length === 0) {
        container.innerHTML = '';
        if (clearButton) clearButton.hidden = true;
        return;
    }

    container.innerHTML = pills.join('') + '<button class="clear-all-filters" type="button">Clear All</button>';
    if (clearButton) clearButton.hidden = false;

    container.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', () => {
            const kind = button.dataset.filterKind;
            if (kind === 'search') {
                filterState.search = '';
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.value = '';
            } else if (kind === 'letter') {
                filterState.letter = null;
            } else if (kind === 'source') {
                filterState.source = 'all';
            } else if (kind === 'citation') {
                filterState.citation = '';
            } else if (kind === 'tag' && button.dataset.tag) {
                filterState.tags.delete(button.dataset.tag);
            }
            applyFilters();
        });
    });

    const clearAllButton = container.querySelector('.clear-all-filters');
    if (clearAllButton) {
        clearAllButton.addEventListener('click', clearAllFilters);
    }
}

function renderSearchPreview(searchMeta, searchTerms) {
    if (!searchMeta || (!searchMeta.snippet && (!searchMeta.reasons || searchMeta.reasons.length === 0))) return '';

    const reasonsHtml = Array.isArray(searchMeta.reasons) && searchMeta.reasons.length > 0
        ? `<div class="search-result-meta">${searchMeta.reasons.map(reason => `<span class="search-chip">${highlightHtmlContent(escapeHtml(reason), searchTerms)}</span>`).join('')}</div>`
        : '';

    const snippetHtml = searchMeta.snippet
        ? `<p class="search-snippet"><strong>Best excerpt:</strong> ${highlightHtmlContent(searchMeta.snippetHtml || escapeHtml(searchMeta.snippet), searchTerms)}</p>`
        : '';

    return `<div class="entry-search-preview">${reasonsHtml}${snippetHtml}</div>`;
}

function renderEntryIndexBodyHtml(entry) {
    // Keep the entry's text in HTML while rich research controls remain lazy.
    const citations = (entry.citations || []).map(escapeHtml).join('; ');
    return `<div class="entry-definition">${entry.definition || ''}</div>${citations ? `<p class="entry-citations">${citations}</p>` : ''}`;
}

function renderEntryBodyHtml(entry, searchTerms) {
    return `
        <p class="entry-definition">${highlightHtmlContent(linkifyDefinition(entry.definition, entry.name), searchTerms)}</p>
        ${renderEntryTools(entry)}
        ${renderTagButtons(entry.tags)}
        ${renderCitationSection(entry.citations, searchTerms)}
        <div class="entry-research-slot"></div>
    `;
}

function ensureEntryContent(entryElement, searchTerms = null) {
    if (!entryElement) return;

    const content = entryElement.querySelector('.entry-content');
    if (!content || content.dataset.rendered === 'true') return;

    const entry = slugToEntry.get(entryElement.dataset.slug);
    if (!entry) return;

    const activeSearchTerms = Array.isArray(searchTerms) ? searchTerms : Array.from(new Set(parseSearchQuery(filterState.search).map(clause => clause.value)));
    content.innerHTML = renderEntryBodyHtml(entry, activeSearchTerms);
    content.dataset.rendered = 'true';
    syncCompareButtons();
}

function renderEntryHtml(entry, searchTerms, searchMeta) {
    const slug = generateSlug(entry.name);
    const isExpanded = expandedSlugs.has(slug) || getCurrentHashSlug() === slug;
    const titleHtml = highlightHtmlContent(renderCmsName(entry.name), searchTerms);
    const previewHtml = renderSearchPreview(searchMeta, searchTerms);
    const bodyHtml = isExpanded ? renderEntryBodyHtml(entry, searchTerms) : renderEntryIndexBodyHtml(entry);

    return `
        <article class="entry${isExpanded ? ' expanded' : ''}" id="entry-${slug}" data-slug="${slug}">
            <div class="entry-header" onclick="toggleEntry(this)" onkeydown="handleEntryHeaderKeydown(event, this)" tabindex="0" role="button" aria-expanded="${String(isExpanded)}" aria-controls="entry-content-${slug}">
                <div class="entry-marker"></div>
                <h3 class="entry-title">${titleHtml}</h3>
                <span class="entry-toggle">▼</span>
            </div>
            ${previewHtml}
            <div class="entry-content" id="entry-content-${slug}" data-rendered="${isExpanded ? 'true' : 'false'}">
                ${bodyHtml}
            </div>
        </article>
    `;
}

function renderEntries(entries, options = {}) {
    const main = document.getElementById('entriesContainer');
    const stats = document.getElementById('stats');
    const searchTerms = options.searchTerms || [];
    const searchMetaMap = options.searchMetaMap || new Map();
    const searchActive = searchTerms.length > 0;

    if (stats) {
        stats.innerHTML = `${entries.length} ${entries.length === 1 ? 'entry' : 'entries'}${searchActive ? ' <span class="subtle">· sorted by relevance · quotes, tag:, source:, cite:</span>' : ''}`;
    }

    if (!main) return;

    if (entries.length === 0) {
        main.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">📚</div>
                <p class="no-results-text">No entries found matching the current filters.</p>
            </div>
        `;
        return;
    }

    if (searchActive) {
        main.innerHTML = `
            <section id="section-search-results">
                <div class="section-header">
                    <div class="section-letter section-letter-search">Search Results</div>
                </div>
                <div class="entries-list">
                    ${entries.map(entry => renderEntryHtml(entry, searchTerms, searchMetaMap.get(generateSlug(entry.name)))).join('')}
                </div>
            </section>
        `;
    } else {
        const grouped = {};
        entries.forEach(entry => {
            const letter = getFirstLetter(entry.name);
            if (!grouped[letter]) grouped[letter] = [];
            grouped[letter].push(entry);
        });

        const html = Object.keys(grouped).sort().map(letter => `
            <section id="section-${letter}">
                <div class="section-header">
                    <div class="section-letter">${letter}</div>
                </div>
                <div class="entries-list">
                    ${grouped[letter].map(entry => renderEntryHtml(entry, searchTerms, searchMetaMap.get(generateSlug(entry.name)))).join('')}
                </div>
            </section>
        `).join('');

        main.innerHTML = html;
    }

    document.querySelectorAll('.entry.expanded').forEach(hydrateEntryResearch);
    syncCompareButtons();
}

function openPopup(slug, anchor) {
    const entry = slugToEntry.get(slug);
    if (!entry) return;

    let overlay = document.getElementById('popupOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'popupOverlay';
        overlay.className = 'popup-overlay';
        overlay.innerHTML = '<div class="popup-stack" id="popupStack"></div>';
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) closeAllPopups();
        });
        document.body.appendChild(overlay);
    }

    popupStack.forEach((card, index) => {
        card.classList.add('stacked');
        card.style.transform = `scale(${0.95 - (popupStack.length - index) * 0.03}) translateY(${-(popupStack.length - index) * 15}px)`;
        card.style.opacity = 0.7 - (popupStack.length - index) * 0.15;
    });

    const searchTerms = tokenizeSearch(filterState.search);
    const card = document.createElement('div');
    card.className = 'popup-card';
    card.style.zIndex = 1000 + popupStack.length;
    card.setAttribute('tabindex', '-1');

    const citationsHtml = renderCitationSection(entry.citations, searchTerms, 'popup-citations', 'popup-citations-label', 'popup-citations-list');
    const relatedHtml = renderRelatedEntries(entry, searchTerms);

    card.innerHTML = `
        ${popupStack.length > 0 ? `<div class="popup-depth-indicator">Depth: ${popupStack.length + 1}</div>` : ''}
        <div class="popup-header">
            <h3 class="popup-title">${highlightHtmlContent(renderCmsName(entry.name), searchTerms)}</h3>
            <div class="popup-actions">
                ${renderCompareButton(generateSlug(entry.name))}
                ${popupStack.length > 0 ? '<button class="popup-back" type="button" onclick="closePopup()">← Back</button>' : ''}
                <button class="popup-close" type="button" onclick="closePopup()" title="Close (Esc)">×</button>
            </div>
        </div>
        <div class="popup-body">
            <div class="popup-definition">${highlightHtmlContent(linkifyDefinition(entry.definition, entry.name), searchTerms)}</div>
            ${renderTagButtons(entry.tags)}
            ${citationsHtml}
            ${relatedHtml}
        </div>
    `;

    card.__popupAnchor = normalizePopupAnchor(anchor);
    document.getElementById('popupStack').appendChild(card);
    popupStack.push(card);
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
        positionPopupCard(card, card.__popupAnchor);
        syncCompareButtons();
        card.focus();
    });
}

function toggleEntry(header, updateHash = true) {
    const entry = header.closest('.entry');
    if (!entry) return;

    const slug = entry.dataset.slug;
    const isExpanding = !entry.classList.contains('expanded');
    entry.classList.toggle('expanded', isExpanding);
    header.setAttribute('aria-expanded', String(isExpanding));

    if (isExpanding) {
        ensureEntryContent(entry);
        expandedSlugs.add(slug);
        hydrateEntryResearch(entry);
    } else {
        expandedSlugs.delete(slug);
    }

    if (updateHash) {
        const nextHash = isExpanding ? slug : (getCurrentHashSlug() === slug ? '' : getCurrentHashSlug());
        syncUrlState(nextHash);
    }
}

async function handleHashNavigation() {
    const hash = getCurrentHashSlug();
    if (!hash) return;

    const entry = document.getElementById('entry-' + hash);
    if (!entry) return;

    const header = entry.querySelector('.entry-header');
    entry.classList.add('expanded');
    ensureEntryContent(entry);
    expandedSlugs.add(hash);
    hydrateEntryResearch(entry);
    if (header) header.setAttribute('aria-expanded', 'true');

    // Keep this layout stable after landing as well as during the jump.
    // Restoring content-visibility would shrink earlier sections again.
    document.getElementById('entriesContainer').classList.add('hash-navigation');
    if (document.fonts) await document.fonts.ready;

    requestAnimationFrame(() => {
        if (getCurrentHashSlug() !== hash || !entry.isConnected) return;
        const controls = document.querySelector('.controls');
        const stickyControls = controls && getComputedStyle(controls).position === 'sticky';
        const headerOffset = (stickyControls ? controls.getBoundingClientRect().height : 0) + 16;
        const elementPosition = entry.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'instant' });
    });
}

function applyFilters() {
    const searchClauses = parseSearchQuery(filterState.search);
    const searchTerms = Array.from(new Set(searchClauses.map(clause => clause.value)));
    const rankedEntries = [];
    const searchMetaMap = new Map();

    allEntries.forEach(entry => {
        if (filterState.letter && getFirstLetter(entry.name) !== filterState.letter) {
            return;
        }

        if (filterState.source !== 'all') {
            const hasMatchingSource = (entry.citations || []).some(citation => getSourceCodeFromCitation(citation) === filterState.source);
            if (!hasMatchingSource) return;
        }

        if (filterState.citation) {
            const hasExactCitation = (entry.citations || []).includes(filterState.citation);
            if (!hasExactCitation) return;
        }

        if (filterState.tags.size > 0) {
            const entryTags = entry.tags || [];
            for (const tag of filterState.tags) {
                if (!entryTags.includes(tag)) return;
            }
        }

        const matchInfo = getSearchMatchInfo(entry, searchClauses);
        if (!matchInfo.matches) return;

        const slug = generateSlug(entry.name);
        searchMetaMap.set(slug, matchInfo);
        rankedEntries.push({ entry, score: matchInfo.score });
    });

    rankedEntries.sort((a, b) => {
        if (searchClauses.length > 0 && b.score !== a.score) {
            return b.score - a.score;
        }
        return a.entry.name.localeCompare(b.entry.name, undefined, { sensitivity: 'base' });
    });

    renderEntries(rankedEntries.map(item => item.entry), { searchTerms, searchMetaMap });
    renderCitationSpotlight();
    renderCompareWorkbench();
    syncControlsFromState();
    syncCompareButtons();
    syncUrlState();
}

document.addEventListener('click', (event) => {
    const compareToggle = event.target.closest('.compare-toggle');
    if (compareToggle) {
        event.preventDefault();
        event.stopPropagation();
        toggleCompareSlug(compareToggle.dataset.compareSlug);
        return;
    }

    const citationButton = event.target.closest('.citation[data-citation]');
    if (citationButton) {
        event.preventDefault();
        event.stopPropagation();
        focusCitation(citationButton.dataset.citation);
        return;
    }

    const workbenchAction = event.target.closest('[data-workbench-action]');
    if (workbenchAction) {
        event.preventDefault();
        const action = workbenchAction.dataset.workbenchAction;
        if (action === 'clear-citation') {
            filterState.citation = '';
            applyFilters();
        } else if (action === 'source-only') {
            filterState.source = workbenchAction.dataset.source === 'all' ? 'all' : (getCanonicalSourceCode(workbenchAction.dataset.source) || 'all');
            filterState.citation = '';
            applyFilters();
        } else if (action === 'clear-compare') {
            clearCompareWorkbench();
        }
        return;
    }

    const openSlugButton = event.target.closest('[data-open-slug]');
    if (openSlugButton) {
        event.preventDefault();
        event.stopPropagation();
        openPopup(openSlugButton.dataset.openSlug, event);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const colophonCount = document.getElementById('colophonCount'); if (colophonCount) colophonCount.textContent = glossaryData.length.toLocaleString();
    loadStateFromUrl();
    populateSourceFilter();
    initLetterNav();
    initSearch();
    initTagFilters();

    const sourceSelect = document.getElementById('bookFilter');
    if (sourceSelect) {
        sourceSelect.addEventListener('change', (event) => {
            filterByBook(event.target.value);
        });
    }

    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }

    applyFilters();
    handleHashNavigation();
    syncControlsFromState();
    scheduleIdleIndexWarmup();

    window.addEventListener('hashchange', handleHashNavigation);

    document.addEventListener('click', (event) => {
        const xrefLink = event.target.closest('a.xref');
        if (xrefLink) {
            event.preventDefault();
            event.stopPropagation();
            const href = xrefLink.getAttribute('href');
            if (href && href.startsWith('#')) {
                openPopup(href.slice(1), event);
            }
            return;
        }

        const entryTag = event.target.closest('.entry-tag');
        if (entryTag) {
            event.preventDefault();
            toggleTagFilter(entryTag.dataset.tag, { forceAdd: true, forceOpen: true });
            const tagSection = document.querySelector('.tag-filter-section');
            if (tagSection) {
                tagSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });


    window.addEventListener('resize', repositionPopups);

    document.addEventListener('keydown', (event) => {
        const target = event.target;
        const isTypingTarget = target && (
            target.tagName === 'INPUT' ||
            target.tagName === 'TEXTAREA' ||
            target.isContentEditable
        );

        if ((event.key === '/' && !isTypingTarget) || ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k')) {
            event.preventDefault();
            const input = document.getElementById('searchInput');
            if (input) {
                input.focus();
                input.select();
            }
            return;
        }

        if (event.key === 'ArrowDown' && target && target.id === 'searchInput') {
            const firstHeader = document.querySelector('.entry-header');
            if (firstHeader) {
                event.preventDefault();
                firstHeader.focus();
            }
            return;
        }

        if (event.key === 'Escape' && popupStack.length > 0) {
            closePopup();
            return;
        }

        if (event.key === 'Escape' && isTypingTarget && target.id === 'searchInput' && target.value) {
            target.value = '';
            filterState.search = '';
            applyFilters();
        }
    });
});

    