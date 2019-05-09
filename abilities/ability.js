//-- All abilities must pass in the appropriate parameters
//-- MODIFIER math logic must be done in the argument passed in

class Direct_Damage_Ability {
  constructor(name, level, min, max, cost, modifier = 1, skill_options){
    this.name = name;
    this.level = level;
    this.min = min;
    this.max = max - min;
    this.cost = cost;
    this.modifier = modifier;
    this.isAttack = skill_options.isAttack || false;
    this.isSkill = skill_options.isSkill || false;
    this.isSpell = skill_options.isSpell || false;
  }
  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost);
    target.takeDamage(dmg);

    this.isSpell ? console.log(`${user.name} cast ${this.name} on ${target.name} dealing ${dmg} damage!`) :
    this.isAttack ? console.log(`${user.name} ${this.name}s ${target.name}, dealing ${dmg} damage.`) :
    this.isSkill ? console.log(`${user.name} uses ${this.name} on ${target.name} dealing ${dmg} damage!`) : null;

  }
}

module.exports = {
  Direct_Damage_Ability,
}
