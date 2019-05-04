'use strict'

function Hob_Goblin(level = 1, name = 'Hob_Goblin'){
  const skill_level = 1 + Math.round(level / 3)
  this.type = 'npc'
  this.name = name
  this.level = level;
  this.speed = 7
  this.level_modifier = 1 + level/10
  this.resources = {
    health: {
      max: 30 * this.level_modifier,
      current: 30 * this.level_modifier
    }
  }
  this.xp_value = Math.floor(55 * this.level_modifier)
  this.skills = {
    attack: {
      name: 'Attack',
      modifier: this.level_modifier,
      min_dmg: 2,
      max_dmg: 7,
    },
    shank: {
      name: 'Shank',
      level: skill_level,
      modifier: this.level_modifier * (1+skill_level/100),
      min_dmg: 2,
      max_dmg: 3,
    },
    stab: {
      name: 'Stab',
      level: skill_level,
      modifier: this.level_modifier * (1+skill_level/100),
      min_dmg: 4,
      max_dmg: 5,
    }
  }
  this.skill_list = [...Object.keys(this.skills)]
}

Hob_Goblin.prototype.cast = function(ability){
  ability = ability.toLowerCase().replace('_', ' ')
  switch (ability){
    case 'shank':
      return this.shank(this.target)
    case 'stab':
      return this.stab(this.target)
    default:
      return this.auto_attack(this.target)
  }
}

Hob_Goblin.prototype.shank = function (target, spell = this.skills.shank){
  let min = spell.min_dmg;
  let max = spell.max_dmg - min;
  let modifier = spell.modifier;
  let dmg = Math.floor((Math.random() * max + min) * modifier);
  console.log(`${this.name} ${spell.name}s ${target.name}, dealing ${dmg} damage.`)
  target.resources.health.current -= dmg
}

Hob_Goblin.prototype.stab = function (target, spell = this.skills.shank){
  let min = spell.min_dmg;
  let max = spell.max_dmg - min;
  let modifier = spell.modifier;
  let dmg = Math.floor((Math.random() * max + min) * modifier);
  console.log(`${this.name} ${spell.name}s ${target.name}, dealing ${dmg} damage.`)
  target.resources.health.current -= dmg
}

Hob_Goblin.prototype.auto_attack = function (target, spell = this.skills.attack){
  let min = spell.min_dmg;
  let max = spell.max_dmg - min;
  let modifier = spell.modifier;
  let dmg = Math.floor((Math.random() * max + min) * modifier)
  console.log(`${this.name} ${spell.name}s ${target.name}, dealing ${dmg} damage.`)
  target.resources.health.current -= dmg
}

module.exports = Hob_Goblin;