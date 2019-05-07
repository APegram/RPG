let Character = require('./character')
let { Explosive_Shot, Piercing_Arrow } = require('../abilities/Hunter')

class Hunter extends Character {
  constructor(name, race, agi = 16, str = 11, wis = 7, int = 19, spd = 9) {
    super(name, race, agi, str, wis, int, spd)
    this.weapon = 'Long Bow';
    this.className = 'hunter';
    this.skills = [
      new Explosive_Shot(this, agi),
      new Piercing_Arrow(this, agi)
    ]
  }
}

module.exports = Hunter