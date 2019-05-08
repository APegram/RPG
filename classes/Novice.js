let Character = require('./character');
let { Punch, Rock_Throw } = require('../abilities/Novice');
let { Attack } = require('../abilities/Basic');

class Novice extends Character{
  constructor(name, race, level = 1, agi = 1, str = 11, wis = 11, int = 11, spd = 7, xp = 0) {
    super(name, race, level, agi, str, wis, int, spd, xp)
    this.weapon = 'Fist';
    this.className = 'novice';
    this.skills = [
      new Punch(),
      new Rock_Throw(),
      new Attack(this.str)
    ]
  }
}

module.exports = Novice