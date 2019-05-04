const { Hunter_Abilities } = require('../abilities')

const Hunter = function Hunter(name, race, agi, str, wis, int, speed) {
  this.weapon = 'Long Bow'
  this.className = 'hunter'
  this.agi = agi || 16;
  this.str = str || 11;
  this.wis = wis || 7;
  this.int = int || 10;
  this.speed = speed || 9
  Hunter_Abilities.call(this, name, race)
}

Hunter.prototype = Object.create(Hunter_Abilities.prototype)

module.exports = Hunter