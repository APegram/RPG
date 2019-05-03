const Character = require('./character')
const { Mage_Abilities } = require('../abilities')

const Mage = function Mage(name, race) {
  this.weapon = 'Wand';
  this.className = 'mage';
  this.agi = 7;
  this.str = 7
  this.wis = 16;
  this.int = 14;
  Character.call(this, name, race)
  Mage_Abilities.call(this)
}

Mage.prototype = Object.create(Character.prototype)

Mage.prototype.cast = function(spell, target){
  let min = spell.min_dmg;
  let max = spell.max_dmg - min;
  let modifier = spell.modifier;
  let dmg = Math.floor((Math.random() * (max) + min) * modifier);
  this.resources.ability.current -= spell.cost;
  console.log(`${this.name} cast ${spell.name} at ${target.name} for ${dmg} damage!`)
  target.resources.health.current -= dmg;
}


module.exports = Mage