const fs = require('fs')

const armor = require('./gear_armor.json')
const bots = require('./gear_bots.json')
const comms = require('./gear_comms.json')
const creatures = require('./gear_creatures.json')
const drugs = require('./gear_drugs.json')
const items = require('./gear_items.json')
const mission = require('./gear_mission.json')
const nano = require('./gear_nano.json')
const security = require('./gear_security.json')
const software = require('./gear_software.json')
const swarms = require('./gear_swarms.json')
const vehicles = require('./gear_vehicles.json')
const ware = require('./gear_ware.json')

const ranged = require('./weapons_ranged.json')
const melee = require('./weapons_melee.json')
const ammo = require('./weapons_ammo.json')

const gear = [
  ...armor,
  ...bots,
  ...comms,
  ...creatures,
  ...drugs,
  ...items,
  ...mission,
  ...nano,
  ...security,
  ...software,
  ...swarms,
  ...vehicles,
  ...ware,
]

const gearMap = gear.reduce((map, nextItem) => {
  if (!map[nextItem.name]) {
    map[nextItem.name] = nextItem
  } else {
    const originalItem = map[nextItem.name]

    // by default, assume the one we have will be overwritten (merged) with the new one
    let base = originalItem
    let overwrite = nextItem

    if (nextItem.name === 'Light Vacsuit') {
      if (nextItem.category === 'Armor') {
        base = nextItem; overwrite = originalItem
      }
    } else if (nextItem.name === 'Standard Vacsuit') {
      if (nextItem.category === 'Armor') {
        base = nextItem; overwrite = originalItem
      }
    } else if (nextItem.name === 'Atlas Loader') {
      if (nextItem.category === 'Armor') {
        base = nextItem; overwrite = originalItem
      }
    } else if (nextItem.name === 'Exowalker Frame') {
      if (nextItem.category === 'Armor') {
        base = nextItem; overwrite = originalItem
      }
    } else if (nextItem.name === 'Transporter Exoskeleton') {
      if (nextItem.category === 'Armor') {
        base = nextItem; overwrite = originalItem
      }
    } else if (nextItem.name === 'Trike Exoskeleton') {
      if (nextItem.category === 'Armor') {
        base = nextItem; overwrite = originalItem
      }
    } else if (nextItem.name === 'Battlesuit') {
      if (nextItem.category === 'Armor') {
        base = nextItem; overwrite = originalItem
      }
    } else if (nextItem.name === 'Envirosuit') {
      if (nextItem.category === 'Armor') {
        base = nextItem; overwrite = originalItem
      }
    } else if (nextItem.name === 'High-Dive Suit') {
      if (nextItem.category === 'Armor') {
        base = nextItem; overwrite = originalItem
      }
    } else if (nextItem.name === 'Hardsuit') {
      if (nextItem.category === 'Armor') {
        base = nextItem; overwrite = originalItem
      }
    } else {
      console.log(`Duplicate found! ${nextItem.name}`)
      console.log(originalItem, nextItem)
    }

    console.log(`Overwriting ${base.name} ${base.category} with ${overwrite.name} ${overwrite.category}`)

    map[nextItem.name] = {
      ...base,
      ...overwrite
    }
  }
  return map
}, {})

const weapons = [
  ...ranged,
  ...melee,
  // ...ammo,
]

const weaponMap = weapons.reduce((map, nextItem) => {
  if (!map[nextItem.name]) {
    map[nextItem.name] = nextItem
  } else {
    const originalItem = map[nextItem.name]

    // by default, assume the one we have will be overwritten (merged) with the new one
    let base = originalItem
    let overwrite = nextItem

    if (nextItem.name === 'Railgun') {
      if (nextItem.category === 'Armor') {
        base = originalItem; overwrite = nextItem
      }
    } else {
      console.log(`Duplicate found! ${nextItem.name}`)
      console.log(originalItem, nextItem)
    }

    console.log(`Overwriting ${base.name} ${base.category} with ${overwrite.name} ${overwrite.category}`)

    map[nextItem.name] = {
      ...base,
      ...overwrite
    }
  }
  return map
}, {})

fs.writeFileSync('./gear_all.json', JSON.stringify(Object.values(gearMap), null, 2))
fs.writeFileSync('./weapons_all.json', JSON.stringify(Object.values(weaponMap), null, 2))


