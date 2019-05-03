let Character = require('../classes/character')

function Hunter_Abilities(name, race){
  this.skills = {
    explosive_shot: {
      name: 'Explosive Shot',
      level: 1,
      min_dmg: 1,
      max_dmg: 8,
      modifier: 1 + .001*this.agi,
      cost: 5
    },
    piercing_arrow: {
      name: 'Piercing Arrow',
      level: 1,
      min_dmg: 3,
      max_dmg: 7,
      modifier: 1 + .0015*this.int,
      cost: 6
    }
  }
  Character.call(this, name, race)
}
Hunter_Abilities.prototype = Object.create(Character.prototype)

Hunter_Abilities.prototype.cast = function(ability){
  ability = ability.toLowerCase().replace('_', ' ')
  switch (ability){
    case 'explosive shot':
      return this.explosive_shot(this.target)
    case 'piercing arrow':
      return this.piercing_arrow(this.target)
    case 'potion':
      return this.use_potion()
    default:
      return this.auto_attack(this.target)
  }
}

Hunter_Abilities.prototype.explosive_shot = function (target, spell = this.skills.explosive_shot){
  let min = spell.min_dmg;
  let max = spell.max_dmg - min;
  let modifier = spell.modifier;
  let dmg = Math.floor((Math.random() * (max) + min) * modifier);
  this.resources.ability.current -= spell.cost;
  console.log(`${this.name} fired ${spell.name} at ${target.name} for ${dmg} damage!`)
  target.resources.health.current -= dmg;
}

Hunter_Abilities.prototype.piercing_arrow = function (target, spell = this.skills.piercing_arrow){
  let min = spell.min_dmg;
  let max = spell.max_dmg - min;
  let modifier = spell.modifier;
  let dmg = Math.floor((Math.random() * (max) + min) * modifier);
  this.resources.ability.current -= spell.cost;
  console.log(`${this.name} fired ${spell.name} at ${target.name} for ${dmg} damage!`)
  target.resources.health.current -= dmg;
}

module.exports = Hunter_Abilities