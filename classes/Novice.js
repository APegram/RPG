const Character = require('./character')

const Novice = function Novice(name, race) {
  this.weapon = 'Fist';
  this.className = 'novice';
  this.agi = 11;
  this.str = 11;
  this.wis = 11;
  this.int = 11;
  Character.call(this, name, race)
}

Novice.prototype = Object.create(Character.prototype)

module.exports = Novice