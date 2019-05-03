const { Mage_Abilities } = require('../abilities')

const Mage = function Mage(name, race) {
  this.weapon = 'Wand';
  this.className = 'mage';
  this.agi = 7;
  this.str = 7
  this.wis = 16;
  this.int = 14;
  Mage_Abilities.call(this, name, race)
}

Mage.prototype = Object.create(Mage_Abilities.prototype)

module.exports = Mage