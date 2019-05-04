const { Rogue_Abilities } = require('../abilities')

class Rogue extends Rogue_Abilities{
  constructor(name, race, agi = 20, str = 9, wis = 8, int = 7, spd = 9) {
    super(name, race, agi, str, wis, int, spd)
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
  }
}

module.exports = Rogue