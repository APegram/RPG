const { Hunter_Abilities } = require('../abilities')

class Hunter extends Hunter_Abilities {
  constructor(name, race, agi = 16, str = 11, wis = 7, int = 19, spd = 9) {
    super(name, race, agi, str, wis, int, spd)
    this.weapon = 'Long Bow';
    this.className = 'hunter';
  }
}

module.exports = Hunter