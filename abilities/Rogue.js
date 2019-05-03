let Character = require('../classes/character')

function Rogue_Abilities(name, race){
  this.skills = {
    back_stab: {
      name: 'Back Stab',
      level: 1,
      stealth_dmg: 3,
      min_dmg: this.stealth ? stealth_dmg + 4 : 4,
      max_dmg: this.stealth ? stealth_dmg + 5 : 5,
      modifier: 1 + .001*this.agi,
      cost: 5
    },
    vanishing_strike: {
      name: 'Vanishing Strike',
      level: 1,
      min_dmg: 3,
      max_dmg: 3,
      modifier: 1 + .001*this.agi,
      cost: 6
    }
  }
  Character.call(this, name, race)
}

Rogue_Abilities.prototype = Object.create(Character.prototype)

Rogue_Abilities.prototype.cast = function(ability){
  ability = ability.toLowerCase().replace('_', ' ')
  switch (ability){
    case 'back stab':
      return this.back_stab(this.target)
    case 'vanishing strike':
      return this.vanishing_strike(this.target)
    case 'potion':
      return this.use_potion()
    default:
      return this.auto_attack(this.target)
  }
}

Rogue_Abilities.prototype.back_stab = function (target, spell = this.skills.back_stab){
  let min = spell.min_dmg;
  let max = spell.max_dmg - min;
  let modifier = spell.modifier;
  let dmg = Math.floor((Math.random() * (max) + min) * modifier);
  this.resources.ability.current -= spell.cost;
  console.log(this.stealth ? `${this.name} appears from the shadows and uses ${spell.name} on ${target.name}, dealing ${dmg}` : `${this.name} uses ${spell.name} on ${target.name} hitting for ${dmg} damage!`)
  target.resources.health.current -= dmg;
  this.stealth = false
}

Rogue_Abilities.prototype.vanishing_strike = function (target, spell = this.skills.vanishing_strike){
  let min = spell.min_dmg;
  let max = spell.max_dmg - min;
  let modifier = spell.modifier;
  let dmg = Math.floor((Math.random() * (max) + min) * modifier);
  this.resources.ability.current -= spell.cost;
  console.log(`${this.name} uses ${spell.name}, vanishing and dealing ${dmg} to ${target.name}`)
  this.stealth = true
  target.resources.health.current -= dmg;
}

module.exports = Rogue_Abilities