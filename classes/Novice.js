const { Novice_Abilities } = require('../abilities')

class Novice extends Novice_Abilities{
  constructor(name, race, agi = 1, str = 11, wis = 11, int = 11, spd = 7) {
    super(name, race, agi, str, wis, int, spd)
    this.weapon = 'Fist';
    this.className = 'novice';
  }
}

module.exports = Novice