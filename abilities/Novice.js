let Character = require('../classes/character')

class Novice_Abilities extends Character{
  constructor(name, race, agi, str, wis, int, spd) {
    super(name, race, agi, str, wis, int, spd)
    this.skills = {
      punch: {
        name: 'Punch',
        level: 1,
        min_dmg: 4,
        max_dmg: 5,
        modifier: 1,
        cost: 5
      },
      rock_throw: {
        name: 'Rock Throw',
        level: 1,
        min_dmg: 3,
        max_dmg: 4,
        modifier: 1,
        cost: 6
      }
    };
    this.skill_list = ['Attack', 'Potion', ...Object.keys(this.skills)];
  }
  cast(ability) {
    ability = ability.toLowerCase().replace('_', ' ');
    switch (ability) {
      case 'punch':
        return this.punch(this.target);
      case 'throw rock':
        return this.throw_rock(this.target);
      case 'potion':
        return this.use_potion();
      default:
        return this.auto_attack(this.target);
    }
  }
  punch(target, spell = this.skills.punch) {
    let min = spell.min_dmg;
    let max = spell.max_dmg - min;
    let modifier = spell.modifier;
    let dmg = Math.floor((Math.random() * (max) + min) * modifier);
    this.resources.ability.current -= spell.cost;
    console.log(`${this.name} ${spell.name}es ${target.name} dealing ${dmg} damage!`);
    target.resources.health.current -= dmg;
  }
  rock_throw(target, spell = this.skills.rock_throw) {
    let min = spell.min_dmg;
    let max = spell.max_dmg - min;
    let modifier = spell.modifier;
    let dmg = Math.floor((Math.random() * (max) + min) * modifier);
    this.resources.ability.current -= spell.cost;
    console.log(`${this.name} uses ${spell.name} and hits ${target.name} for ${dmg} damage!`);
    target.resources.health.current -= dmg;
  }
}

module.exports = Novice_Abilities