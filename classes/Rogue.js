const { Rogue_Abilities } = require('../abilities')

const Rogue = function Rogue(name, race) {
  this.weapon = 'Dagger';
  this.className = 'rogue';
  this.agi = 20;
  this.str = 9;
  this.wis = 8;
  this.int = 7;
  this.resources = {
    ability: {
      type: 'Energy',
      max: 100,
      current: 100,
    },
    health: {
      type: 'Health',
      max: Math.floor(20 + (this.str * 1.4)),
      current: Math.floor(20 + (this.str * 1.4))
    }
  }
  Rogue_Abilities.call(this, name, race)
}

Rogue.prototype = Object.create(Rogue_Abilities.prototype)

module.exports = Rogue