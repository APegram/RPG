const { Warrior_Abilities } = require('../abilities')

class Warrior extends Warrior_Abilities{
  constructor(name, race, agi = 12, str = 20, wis = 6, int = 6, spd = 7) {
    super(name, race, agi, str, wis, int, spd)
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
        current: Math.floor(20 + (this.str * 1.4))
      }
    };
  }
}

module.exports = Warrior