const { Mage_Abilities } = require('../abilities')

class Mage extends Mage_Abilities{
  constructor(name, race, agi = 7, str = 7, wis = 16, int = 14, spd = 5) {
    super(name, race, agi, str, wis, int, spd)
    this.weapon = 'Wand';
    this.className = 'mage';
  }
}

module.exports = Mage