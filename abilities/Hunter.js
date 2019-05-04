let Character = require('../classes/character')

class Hunter_Abilities  extends Character{
  constructor(name, race, agi, str, wis, int, spd) {
    super(name, race, agi, str, wis, int, spd)
    this.skills = {
      explosive_shot: {
        name: 'Explosive Shot',
        level: 1,
        min_dmg: 1,
        max_dmg: 8,
        modifier: 1 + .001 * this.agi,
        cost: 5
      },
      piercing_arrow: {
        name: 'Piercing Arrow',
        level: 1,
        min_dmg: 3,
        max_dmg: 7,
        modifier: 1 + .0015 * this.int,
        cost: 6
      }
    };
    this.skill_list = ['Attack', 'Potion', ...Object.keys(this.skills)];
  }
  cast(ability) {
    ability = ability.toLowerCase().replace('_', ' ');
    switch (ability) {
      case 'explosive shot':
        return this.explosive_shot(this.target);
      case 'piercing arrow':
        return this.piercing_arrow(this.target);
      case 'potion':
        return this.use_potion();
      default:
        return this.auto_attack(this.target);
    }
  }
  explosive_shot(target, spell = this.skills.explosive_shot) {
    let min = spell.min_dmg;
    let max = spell.max_dmg - min;
    let modifier = spell.modifier;
    let dmg = Math.floor((Math.random() * (max) + min) * modifier);
    this.resources.ability.current -= spell.cost;
    console.log(`${this.name} fired ${spell.name} at ${target.name} for ${dmg} damage!`);
    target.resources.health.current -= dmg;
  }
  piercing_arrow(target, spell = this.skills.piercing_arrow) {
    let min = spell.min_dmg;
    let max = spell.max_dmg - min;
    let modifier = spell.modifier;
    let dmg = Math.floor((Math.random() * (max) + min) * modifier);
    this.resources.ability.current -= spell.cost;
    console.log(`${this.name} fired ${spell.name} at ${target.name} for ${dmg} damage!`);
    target.resources.health.current -= dmg;
  }
}

module.exports = Hunter_Abilities