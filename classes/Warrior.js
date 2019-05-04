const { Warrior_Abilities } = require('../abilities')

const Warrior = function Warrior(name, race) {
  this.weapon = '1h Sword';
  this.className = 'warrior';
  this.agi = 12;
  this.str = 20;
  this.wis = 6;
  this.int = 6;
  this.speed = 6
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
  }
  Warrior_Abilities.call(this, name, race)
}

Warrior.prototype = Object.create(Warrior_Abilities.prototype)

module.exports = Warrior