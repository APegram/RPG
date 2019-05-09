let Character = require('./character');
let { Explosive_Shot, Piercing_Arrow } = require('../abilities/Hunter');
let { Attack } = require('../abilities/Basic');

class Hunter extends Character {
  constructor(name, race, level = 1, agi = 16, str = 11, wis = 7, int = 19, spd = 9, xp = 0) {
    super(name, race, level, agi, str, wis, int, spd, xp);
    this.weapon = 'Long Bow';
    this.className = 'hunter';
    this.skills = [
      new Explosive_Shot(this.agi),
      new Piercing_Arrow(this.agi),
      new Attack(this.str),
    ];
  }
}

module.exports = Hunter