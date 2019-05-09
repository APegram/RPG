let Character = require('./character');
let { Sweeping_Strike, Shield_Bash } = require('../abilities/Warrior');
let { Attack } = require('../abilities/Basic');

class Warrior extends Character{
  constructor(name, race, level = 1, agi = 12, str = 20, wis = 6, int = 6, spd = 7, xp = 0) {
    super(name, race, level, agi, str, wis, int, spd, xp);
    this.weapon = '1h Sword';
    this.className = 'warrior';
    this.resources = {
      ability: {
        type: 'Rage',
        max: 100,
        current: 100,
      },
      health: {
        type: 'Health',
        max: Math.floor(20 + (this.str * 1.4)),
        current: Math.floor(20 + (this.str * 1.4)),
      },
    };
    this.skills = [
      new Sweeping_Strike(this.str),
      new Shield_Bash(this.str),
      new Attack(this.str)
    ];
  }
}

module.exports = Warrior