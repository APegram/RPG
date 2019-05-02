const Character = require('./character')

const Mage = function Mage(name, race) {
  this.weapon = 'Wand';
  this.className = 'mage';
  this.agi = 7;
  this.str = 7
  this.wis = 16;
  this.int = 14;
  Character.call(this, name, race)
}

Mage.prototype = Object.create(Character.prototype)

module.exports = Mage