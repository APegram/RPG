let Character = require('./character');
let { Back_Stab, Vanishing_Strike } = require('../abilities/Rogue');
let { Attack } = require('../abilities/Basic');

class Rogue extends Character{
  constructor(name, race, level = 1, agi = 20, str = 9, wis = 8, int = 7, spd = 9, xp = 0) {
    super(name, race, level, agi, str, wis, int, spd, xp)
    this.weapon = 'Dagger';
    this.className = 'rogue';
    this.resources = {
      ability: {
        type: 'Energy',
        max: 100,
        current: 100,
      },
      health: {
        type: 'Health',
        max: Math.floor(20 + (this.str * 1.4)),
        current: Math.floor(20 + (this.str * 1.4))
      }
    };
    this.skills = [
      new Back_Stab(this.agi, this.stealth),
      new Vanishing_Strike(this.agi),
      new Attack(this.str)
    ]
  }
}

module.exports = Rogue