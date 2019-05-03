let Character = require('../classes/character')

 function Warrior_Abilities(name, race){
  this.skills = {
    sweeping_strike: {
      name: 'Sweeping Strike',
      level: 1,
      min_dmg: 4,
      max_dmg: 7,
      modifier: 1 + .001*this.str,
      cost: 5
    },
    shield_bash: {
      name: 'Shield Bash',
      level: 1,
      min_dmg: 5,
      max_dmg: 5,
      modifier: 1 + .0015*this.str, //maybe add defensive modifier?
      cost: 6
    }
  }
  Character.call(this, name, race)
}

Warrior_Abilities.prototype = Object.create(Character.prototype)

Warrior_Abilities.prototype.cast = function(ability){
  ability = ability.toLowerCase()
  switch (ability){
    case 'sweeping strike':
      return this.sweeping_strike(this.target)
    case 'shield bash':
      return this.shield_bash(this.target)
    case 'potion':
      return this.use_potion()
    default:
      return this.auto_attack(this.target)
  }
}

Warrior_Abilities.prototype.sweeping_strike = function (target, spell = this.skills.sweeping_strike){
  let min = spell.min_dmg;
  let max = spell.max_dmg - min;
  let modifier = spell.modifier;
  let dmg = Math.floor((Math.random() * (max) + min) * modifier);
  this.resources.ability.current -= spell.cost;
  console.log(`${this.name} uses ${spell.name} and hits ${target.name} for ${dmg} damage!`)
  target.resources.health.current -= dmg;
}

Warrior_Abilities.prototype.shield_bash = function (target, spell = this.skills.shield_bash){
  let min = spell.min_dmg;
  let max = spell.max_dmg - min;
  let modifier = spell.modifier;
  let dmg = Math.floor((Math.random() * (max) + min) * modifier);
  this.resources.ability.current -= spell.cost;
  console.log(`${this.name} uses ${spell.name} and hits ${target.name} for ${dmg} damage!`)
  target.resources.health.current -= dmg;
}

module.exports = Warrior_Abilities