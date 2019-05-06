let Character = require('./character')
let { Fireball, Frostbolt } = require('../abilities/Mage')

class Mage extends Character{
  constructor(name, race, agi = 7, str = 7, wis = 16, int = 14, spd = 5) {
    super(name, race, agi, str, wis, int, spd)
    this.weapon = 'Wand';
    this.className = 'mage';
    this.skills = [
      new Fireball(this),
      new Frostbolt(this),
    ]
  }
}

module.exports = Mage