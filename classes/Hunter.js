const Character = require('./character')
const { Hunter_Abilities } = require('../abilities')

const Hunter = function Hunter(name, race, agi, str, wis, int) {
  this.weapon = 'Long Bow'
  this.className = 'hunter'
  this.agi = agi || 16;
  this.str = str || 11;
  this.wis = wis || 7;
  this.int = int || 10;
  Character.call(this, name, race)
  Hunter_Abilities.call(this)
}

Hunter.prototype = Object.create(Character.prototype)

module.exports = Hunter