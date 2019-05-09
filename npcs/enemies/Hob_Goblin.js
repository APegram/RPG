'use strict'
let { Attack } = require('../../abilities/Basic');

class Hob_Goblin {
  constructor(name = 'Hob Goblin', level = 1) {
    const stat_mod = 1 + (.20*level - .20);
    this.type = 'npc';
    this.name = name;
    this.level = level;
    this.agi = Math.floor(9 * stat_mod);
    this.int = Math.floor(6 * stat_mod);
    this.spd = Math.floor(7 * stat_mod);
    this.str = Math.floor(10 * stat_mod);
    this.wis = Math.floor(7 * stat_mod);
    this.resources = {
      health: {
        max: Math.floor(30 * stat_mod),
        current: Math.floor(30 * stat_mod),
      },
      ability: {
        max: Math.floor(30 * stat_mod),
        current: Math.floor(30 * stat_mod),
      },
    };
    this.xp_value = Math.floor(5 * stat_mod);
    this.skills = [new Attack(this.str)];
  }
  use(skillIndex, target) {
    this.skills[skillIndex].use(this, target);
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