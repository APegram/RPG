let Character = require('./character')
let { Fireball, Frostbolt } = require('../abilities/Mage')
let { Attack } = require('../abilities/Basic')

class Mage extends Character{
  constructor(name, race, level = 1, agi = 7, str = 7, wis = 16, int = 14, spd = 5, xp = 0) {
    super(name, race, agi, level, str, wis, int, spd, xp)
    this.weapon = 'Wand';
    this.className = 'mage';
    this.skills = [
      new Fireball(this.int),
      new Frostbolt(this.int),
      new Attack(this.str),
    ]
  }
}

module.exports = Mage