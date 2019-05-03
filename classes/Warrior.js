const Character = require('./character')
const { Warrior_Abilities } = require('../abilities')

const Warrior = function Warrior(name, race) {
  this.weapon = '1h Sword';
  this.className = 'warrior';
  this.agi = 12;
  this.str = 20;
  this.wis = 6;
  this.int = 6;
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
  Character.call(this, name, race)
  Warrior_Abilities.call(this)
}

Warrior.prototype = Object.create(Character.prototype)

module.exports = Warrior