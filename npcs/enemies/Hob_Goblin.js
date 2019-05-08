'use strict'
let { Attack } = require('../../abilities/Basic')

class Hob_Goblin {
  constructor(name = 'Hob Goblin', level = 1) {
    const skill_level = 1 + Math.round(level / 3);
    this.type = 'npc';
    this.name = name;
    this.level = level;
    this.agi = 9;
    this.int = 6;
    this.spd = 7;
    this.str = 10;
    this.wis = 7
    this.level_modifier = 1 + level / 10;
    this.resources = {
      health: {
        max: 30 * this.level_modifier,
        current: 30 * this.level_modifier
      }
    };
    this.xp_value = Math.floor(100 * this.level_modifier);
    this.skills = [new Attack(this.str)];
  }
  use(skillIndex, target) {
    this.skills[skillIndex].use(this, target)
  }

  useAbilityPoints(amount) {
    this.resources.ability.current -= amount;
  }

  takeDamage(amount) {
    this.resources.health.current -= amount;
  }
}

module.exports = Hob_Goblin;


// shank(target, spell = this.skills.shank) {
//   let min = spell.min_dmg;
//   let max = spell.max_dmg - min;
//   let modifier = spell.modifier;
//   let dmg = Math.floor((Math.random() * max + min) * modifier);
//   console.log(`${this.name} ${spell.name}s ${target.name}, dealing ${dmg} damage.`);
//   target.resources.health.current -= dmg;
// }
// stab(target, spell = this.skills.shank) {
//   let min = spell.min_dmg;
//   let max = spell.max_dmg - min;
//   let modifier = spell.modifier;
//   let dmg = Math.floor((Math.random() * max + min) * modifier);
//   console.log(`${this.name} ${spell.name}s ${target.name}, dealing ${dmg} damage.`);
//   target.resources.health.current -= 