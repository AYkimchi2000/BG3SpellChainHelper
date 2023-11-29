// Pre-defined database of spells
// Ctrl+f search list:
// '// Cantrip'
// '// Level 1 spells'
// '// Weapon actions'
const spells = [
  // Cantrips
  {
    spellname: 'Acid Splash',
    savetohit: 'DEX',
    level: 0,
    type: 'spell',
    weakensave: [''],
  },
  {
    spellname: 'Sacred Flame',
    savetohit: 'DEX',
    level: 0,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Light',
    savetohit: 'DEX',
    level: 0,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Poison Spray',
    savetohit: 'CON',
    level: 0,
    type: 'spell',
    weakensave: [''],
  },
  {
    spellname: 'Vicious Mockery',
    savetohit: 'WIS',
    level: 0,
    type: 'spell',
    weakensave: [''],
  },
  {
    spellname: 'Friends',
    savetohit: 'CHA',
    level: 0,
    type: 'spell',
    weakensave: [''],
  },

  // Level 1 Spells
  {
    spellname: 'Ensnaring Strike Melee',
    savetohit: 'STR',
    level: 1,
    type: 'spell',
    weakensave: 'DEX',
  },
  {
    spellname: 'Ensnaring Strike Ranged',
    savetohit: 'STR',
    level: 1,
    type: 'spell',
    weakensave: ['DEX'],
  },
  {
    spellname: '*Entangle',
    savetohit: 'STR',
    level: 1,
    type: 'spell',
    weakensave: 'DEX',
  },
  {
    spellname: 'Thunderous Smite',
    savetohit: 'STR',
    level: 1,
    type: 'spell',
    weakensave: ['STR', 'DEX'],
  },
  {
    spellname: 'Arms of Hadar',
    savetohit: 'STR',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Faerie Fire',
    savetohit: 'DEX',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Grease',
    savetohit: 'DEX',
    level: 1,
    type: 'spell',
    weakensave: ['STR', 'DEX'],
  },
  {
    spellname: 'Hail of Thorns',
    savetohit: 'DEX',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Hellish Rebuke',
    savetohit: 'DEX',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Ice Knife',
    savetohit: 'DEX',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Burning Hands',
    savetohit: 'DEX',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Ray of Sickness',
    savetohit: 'CON',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Searing Smite',
    savetohit: 'CON',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Thunderwave',
    savetohit: 'CON',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Charm Person',
    savetohit: 'WIS',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Command(grovel)',
    savetohit: 'WIS',
    level: 1,
    type: 'spell',
    weakensave: ['STR', 'DEX'],
  },
  {
    spellname: 'Dissonant Whispers',
    savetohit: 'WIS',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Animal Friendship',
    savetohit: 'WIS',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Tashas Hideous Laughter',
    savetohit: 'WIS',
    level: 1,
    type: 'spell',
    weakensave: ['STR', 'DEX'],
  },
  {
    spellname: 'Wrathful Smite',
    savetohit: 'WIS',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Compelled Duel',
    savetohit: 'WIS',
    level: 1,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: '*Bane',
    savetohit: 'CHA',
    level: 1,
    type: 'spell',
    weakensave: ['STR', 'DEX', 'CON', 'WIS', 'INT', 'CHA'],
  },
  // Level 2
  {
    spellname: 'Zephyr Break',
    savetohit: 'STR',
    level: 2,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Gust of Wind',
    savetohit: 'STR',
    level: 2,
    type: 'spell',
    weakensave: ['STR', 'DEX'],
  },
  {
    spellname: 'Flaming Sphere',
    savetohit: 'DEX',
    level: 2,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Web',
    savetohit: 'DEX',
    level: 2,
    type: 'spell',
    weakensave: 'DEX',
  },
  {
    spellname: 'See Invisibility',
    savetohit: 'DEX',
    level: 2,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Blindness',
    savetohit: 'CON',
    level: 2,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Branding Smite',
    savetohit: 'CON',
    level: 2,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Enlarge/Reduce',
    savetohit: 'CON',
    level: 2,
    type: 'spell',
    weakensave: 'STR',
  },
  {
    spellname: 'Heat Metal',
    savetohit: 'CON',
    level: 2,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Moonbeam',
    savetohit: 'CON',
    level: 2,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Shatter',
    savetohit: 'CON',
    level: 2,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Crown of Madness',
    savetohit: 'WIS',
    level: 2,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Detect Thoughts',
    savetohit: 'WIS',
    level: 2,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Hold Person',
    savetohit: 'WIS',
    level: 2,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Phantasmal Force',
    savetohit: 'INT',
    level: 2,
    type: 'spell',
    weakensave: '',
  },
  //level3
  {
    spellname: 'Conjure Barrage',
    savetohit: 'DEX',
    level: 3,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: '*Lightning bolt',
    savetohit: 'DEX',
    level: 3,
    type: 'spell',
    weakensave: 'DEX',
  },
  {
    spellname: 'Fireball',
    savetohit: 'DEX',
    level: 3,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Hunger of Hadar',
    savetohit: 'DEX',
    level: 3,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: '*Sleet Storm',
    savetohit: 'DEX',
    level: 3,
    type: 'spell',
    weakensave: ['STR', 'DEX'],
  },
  {
    spellname: 'Glyph of Warding[sleep]',
    savetohit: 'DEX',
    level: 3,
    type: 'spell',
    weakensave: ['STR', 'DEX'],
  },
  {
    spellname: 'Blinding Smite',
    savetohit: 'CON',
    level: 3,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: '*Stinking Cloud',
    savetohit: 'CON',
    level: 3,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Bestow Curse',
    savetohit: 'WIS',
    level: 3,
    type: 'spell',
    weakensave: ['STR', 'DEX', 'CON', 'WIS', 'INT', 'CHA'],
  },
  {
    spellname: 'Fear',
    savetohit: 'WIS',
    level: 3,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Hypnotic Pattern',
    savetohit: 'WIS',
    level: 3,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Spirit Guardians',
    savetohit: 'WIS',
    level: 3,
    type: 'spell',
    weakensave: '',
  },
  //level 4
  {
    spellname: '*Ice Storm',
    savetohit: 'DEX',
    level: 4,
    type: 'spell',
    weakensave: ['STR', 'DEX'],
  },
  {
    spellname: 'Wall of Fire',
    savetohit: 'DEX',
    level: 4,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Polymorph',
    savetohit: 'DEX',
    level: 4,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Blight',
    savetohit: 'CON',
    level: 4,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: '*Evard’s Black Tentacles',
    savetohit: 'STR',
    level: 4,
    type: 'spell',
    weakensave: 'DEX',
  },
  {
    spellname: 'Dominate Beast',
    savetohit: 'WIS',
    level: 4,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Confusion',
    savetohit: 'WIS',
    level: 4,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Banishment',
    savetohit: 'CHA',
    level: 4,
    type: 'spell',
    weakensave: '',
  },
  // Level 5 Spells
  {
    spellname: '*Cone of Cold',
    savetohit: 'STR',
    level: 5,
    type: 'spell',
    weakensave: ['STR', 'DEX'],
  },
  {
    spellname: 'Telekinesis',
    savetohit: 'STR',
    level: 5,
    type: 'spell',
    weakensave: ['STR', 'DEX'],
  },
  {
    spellname: 'Flame strike',
    savetohit: 'DEX',
    level: 5,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Insect Plague',
    savetohit: 'CON',
    level: 5,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Dominate person',
    savetohit: 'WIS',
    level: 5,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Cloudkill',
    savetohit: 'WIS',
    level: 5,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Planar Binding',
    savetohit: 'WIS',
    level: 5,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Hold Monster',
    savetohit: 'WIS',
    level: 5,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Dispel evil and Good',
    savetohit: 'CHA',
    level: 5,
    type: 'spell',
    weakensave: '',
  },

  // Level 6 Spells
  {
    spellname: 'Disintegrate',
    savetohit: 'DEX',
    level: 6,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: '*Chain Lightning',
    savetohit: 'DEX',
    level: 6,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: '*Wall of Ice',
    savetohit: 'DEX',
    level: 6,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Blade barrier',
    savetohit: 'DEX',
    level: 6,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Otiluke’s freezing sphere',
    savetohit: 'CON',
    level: 6,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Sunbeam',
    savetohit: 'CON',
    level: 6,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Harm',
    savetohit: 'CON',
    level: 6,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Circle of Death',
    savetohit: 'CON',
    level: 6,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Flesh to stone',
    savetohit: 'CON',
    level: 6,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Eyebite(sleep)',
    savetohit: 'WIS',
    level: 6,
    type: 'spell',
    weakensave: '',
  },
  {
    spellname: 'Otto’s Irresistible Dance',
    savetohit: 'WIS',
    level: 6,
    type: 'spell',
    weakensave: 'DEX',
  },
  
  //weapon actions/attacks
  {
    spellname: 'Hamstring Shot',
    savetohit: 'CON',
    condition: 'Hamstrung',
    weakensave: [''],
    weapons: ['Shortbows', 'Longbows'],
  },
  
  {
    spellname: 'PIERCING STRIKE',
    savetohit: 'CON',
    condition: 'Gaping Wounds',
    weakensave: [''],
    weapons: ['Daggers', 'Rapiers', 'Shortswords', 'Tridents', 'Pikes', 'Javelins'],
  },
  
  {
    spellname: 'BACKBREAKER',
    savetohit: 'STR',
    condition: 'Prone',
    weakensave: ['STR', 'DEX'],
    weapons: ['Maul', 'Warhammer'],
  },
  {
    spellname: 'WEAKENING STRIKE',
    savetohit: 'STR',
    condition: 'Weak grip',
    weakensave: ['STR'],
    weapons: ['Rapier', 'Warhammer', 'Warpick'],
  },
  {
    spellname: 'RUSH ATTACK',
    savetohit: 'STR',
    condition: 'Off balance',
    weakensave: ['STR', 'DEX'],
    weapons: ['Glaive', 'Halberd', 'Longsword', 'Pike', 'Spear', 'Trident'],
  },
  {
    spellname: 'TOPPLE',
    savetohit: 'DEX',
    condition: 'Prone',
    weakensave: ['STR', 'DEX'],
    weapons: ['Greatclub', 'Mace', 'Maul', 'Morningstar'],
  },
  {
    spellname: 'FLOURISH',
    savetohit: 'DEX',
    condition: 'Off balance',
    weakensave: ['STR', 'DEX'],
    weapons: ['Rapier', 'Scimitar', 'Shortsword'],
  },
  {
    spellname: 'CONCUSSIVE SMASH',
    savetohit: 'CON',
    condition: 'Dazed',
    weakensave: ['WIS'],
    weapons: [
      'Club',
      'Greatclub',
      'Light Hammer',
      'Mace',
      'Maul',
      'Morningstar',
      'Warhammer',
    ],
  },
  {
    spellname: 'HEARTSTOPPER',
    savetohit: 'CON',
    condition: 'chest trauma',
    weakensave: ['CON'],
    weapons: ['Morningstar'],
  },
  {
    spellname: 'LACERATE',
    savetohit: 'CON',
    condition: 'bleeding',
    weakensave: ['CON'],
    weapons: [
      'Battleaxe',
      'Handaxe',
      'Glaive',
      'Greataxe',
      'Greatsword',
      'Halberd',
      'Longsword',
      'Scimitar',
      'Sickle',
    ],
  },
  {
    spellname: 'POMMEL STRIKE',
    savetohit: 'CON',
    condition: 'Dazed',
    weakensave: ['WIS'],
    weapons: ['Greatsword', 'Longsword'],
  },
  {
    spellname: 'CRIPPLING STRIKE',
    savetohit: 'CON',
    condition: 'Cripple',
    weakensave: ['DEX'],
    weapons: ['Battleaxe', 'Trident', 'War pick'],
  },
];

// Function to load spells from database (localStorage)
function loadSpellsFromDatabase() {
  const savedSpells = localStorage.getItem('preparedSpells');
  return savedSpells ? JSON.parse(savedSpells) : [];
}

window.onload = () => {
  const spellArray = loadSpellsFromDatabase();
  spellArray.forEach((spell) => addSpell(spell));
};

// Function to search spells
function searchSpells() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const dropdown = document.getElementById('dropdown');
  dropdown.innerHTML = '';
  dropdown.style.display = 'none';

  if (query === '') return;

  const matchedSpells = spells.filter((spell) =>
    spell.spellname.toLowerCase().includes(query)
  );

  if (matchedSpells.length > 0) {
    dropdown.style.display = 'block';
    matchedSpells.forEach((spell) => {
      const spellItem = document.createElement('div');
      spellItem.innerHTML = `<span>${spell.spellname}</span> <button onclick="addSpell('${spell.spellname}')">Add</button>`;
      dropdown.appendChild(spellItem);
    });
  }
}

// Function to searchSpellsBySaveToHit
function searchSpellsBySaveToHit() {
  const query = document
    .getElementById('searchBarSaveToHit')
    .value.toUpperCase();
  const dropdown = document.getElementById('dropdown');
  dropdown.innerHTML = '';
  dropdown.style.display = 'none';

  if (query === '') return;

  const matchedSpells = spells.filter(
    (spell) => spell.savetohit.toUpperCase() === query
  );

  if (matchedSpells.length > 0) {
    dropdown.style.display = 'block';
    matchedSpells.forEach((spell) => {
      const spellItem = document.createElement('div');
      spellItem.innerHTML = `<span>${spell.spellname}</span> <button onclick="addSpell('${spell.spellname}')">Add</button>`;
      dropdown.appendChild(spellItem);
    });
  }
}

// Function to extract spell list
function getPreparedSpellNames() {
  return Array.from(document.querySelectorAll('#preparedSpells li')).map((li) =>
    li.textContent.replace(' Remove', '')
  );
}

// Function to add spell to spell list
function addSpell(spellname) {
  const spellList = getPreparedSpellNames();
  if (spellList.includes(spellname)) {
    return;
  }
  const listItem = document.createElement('li');
  listItem.innerHTML = `${spellname} <button onclick="removeSpell(this)">Remove</button>`;
  preparedSpells.appendChild(listItem);
  savePreparedSpells(); // Save to localStorage
}

// Function to remove spell
function removeSpell(buttonElement) {
  buttonElement.parentElement.remove();
  savePreparedSpells(); // Save to localStorage
}

// Function to save to Prepared Spells
function savePreparedSpells() {
  const preparedSpells = getPreparedSpellNames();
  localStorage.setItem('preparedSpells', JSON.stringify(preparedSpells));
}

// Function to find spell chains
function findChains() {
  const enemyWeakness = document
    .getElementById('enemyWeakness')
    .value.toUpperCase();
  const preparedSpellsNames = getPreparedSpellNames();
  const preparedSpells = preparedSpellsNames.map((name) =>
    spells.find((s) => s.spellname === name)
  );
  let chainStartingList = [];
  let spellChains = [];

  // Filter prepared spells that exploit enemy's weakness
  for (let spell of preparedSpells) {
    if (spell.savetohit.toUpperCase() === enemyWeakness) {
      chainStartingList.push(spell);
    }
  }

  // Prioritize weapon actions if needed
  chainStartingList.sort((a, b) => {
    if (a.weapons && !b.weapons) return -1;
    if (!a.weapons && b.weapons) return 1;
    return 0;
  });

  console.log(preparedSpells);

  // Recursive function to build chains

  function buildChains(chain, nextWeakenSave, preparedSpells) {
    if (typeof nextWeakenSave === 'string') {
      nextWeakenSave = [nextWeakenSave];
    }
    console.log('Current chain:', chain);
    console.log('Next weakened saves:', nextWeakenSave);
    if (!nextWeakenSave || !Array.isArray(nextWeakenSave)) {
      spellChains.push(chain.map((spell) => spell.spellname).join(' -> '));
      return;
    }

    let nextSpells = [];
    for (let ws of nextWeakenSave) {
      nextSpells = nextSpells.concat(
        preparedSpells.filter(
          (s) =>
            s.savetohit.toUpperCase() === ws.toUpperCase() &&
            !chain.map((spell) => spell.spellname).includes(s.spellname)
        )
      );
    }
    console.log('Potential next spells:', nextSpells);
    if (nextSpells.length === 0) {
      spellChains.push(chain.map((spell) => spell.spellname).join(' -> '));
      return;
    }
    for (let nextSpell of nextSpells) {
      let newChain = [...chain, nextSpell];
      let mergedWeakenSave = nextSpell.weakensave || [];
      buildChains(newChain, mergedWeakenSave, preparedSpells);
    }
  }

  // Create chains
  for (let startingSpell of chainStartingList) {
    buildChains([startingSpell], startingSpell.weakensave, preparedSpells);
  }

  // Display chains
  const spellChainsDiv = document.getElementById('spellChains');
  spellChainsDiv.innerHTML = '';
  spellChains.forEach((chain, index) => {
    spellChainsDiv.innerHTML += `<div>Chain ${index + 1}: ${chain}</div>`;
  });
}
