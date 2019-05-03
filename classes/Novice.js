const { Novice_Abilities } = require('../abilities')

const Novice = function Novice(name, race) {
  this.weapon = 'Fist';
  this.className = 'novice';
  this.agi = 11;
  this.str = 11;
  this.wis = 11;
  this.int = 11;
  Novice_Abilities.call(this, name, race)
}

Novice.prototype = Object.create(Novice_Abilities.prototype)

module.exports = Novice