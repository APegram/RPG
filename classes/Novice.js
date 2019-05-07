let Character = require('./character');
let { Punch, Rock_Throw } = require('../abilities/Novice')

class Novice extends Character{
  constructor(name, race, agi = 1, str = 11, wis = 11, int = 11, spd = 7) {
    super(name, race, agi, str, wis, int, spd)
    this.weapon = 'Fist';
    this.className = 'novice';
    this.skills = [
      new Punch(this),
      new Rock_Throw(this),
    ]
  }
}

module.exports = Novice