let Character = require('../classes/character')

class Mage_Abilities extends Character{
  constructor(name, race, agi, str, wis, int, spd) {
    super(name, race, agi, str, wis, int, spd)
    this.skills = {
      fireball: {
        name: 'Fireball',
        level: 1,
        min_dmg: 2,
        max_dmg: 7,
        modifier: 1 + .001 * this.int,
        cost: 5
      },
      frostbolt: {
        name: 'Frostbolt',
        level: 1,
        min_dmg: 3,
        max_dmg: 6,
        modifier: 1 + .0015 * this.int,
        cost: 6
      }
    };
    this.skill_list = ['Attack', 'Potion', ...Object.keys(this.skills)];
  }
  cast(ability) {
    ability = ability.toLowerCase().replace('_', ' ');
    switch (ability) {
      case 'fireball':
        return this.fireball(this.target);
      case 'frostbolt':
        return this.frostbolt(this.target);
      case 'potion':
        return this.use_potion();
      default:
        return this.auto_attack(this.target);
    }
  }
  fireball(target, spell = this.skills.fireball) {
    let min = spell.min_dmg;
    let max = spell.max_dmg - min;
    let modifier = spell.modifier;
    let dmg = Math.floor((Math.random() * (max) + min) * modifier);
    this.resources.ability.current -= spell.cost;
    console.log(`${this.name} cast ${spell.name} on ${target.name} for ${dmg} damage!`);
    target.resources.health.current -= dmg;
  }
  frostbolt(target, spell = this.skills.frostbolt) {
    let min = spell.min_dmg;
    let max = spell.max_dmg - min;
    let modifier = spell.modifier;
    let dmg = Math.floor((Math.random() * (max) + min) * modifier);
    this.resources.ability.current -= spell.cost;
    console.log(`${this.name} cast ${spell.name} on ${target.name} for ${dmg} damage!`);
    target.resources.health.current -= dmg;
  }
}

module.exports = Mage_Abilities