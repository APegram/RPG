const Ability = require('./ability')

class Back_Stab extends Ability{
  constructor(modifier, stealth){
    super()
    this.name = 'Back Stab';
    this.level = 1;
    this.stealth_modifier = 1.75;
    this.min = 4
    this.max = 5 - this.min;
    this.modifier = stealth ? stealth_modifier + 1 + .001 * modifier : 1 + .001 * modifier;
    this.cost = 5;
  }
  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(user.stealth ? `${user.name} appears from the shadows and uses ${this.name} on ${target.name}, dealing ${dmg}` : `${user.name} uses ${this.name} on ${target.name} hitting for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

class Vanishing_Strike extends Ability{
  constructor(modifier){
    super()
    this.name = 'Vanishing Strike';
    this.level = 1;
    this.min = 3;
    this.max = 3;
    this.modifier = 1 + .001 * modifier;
    this.cost = 6;
  }
  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} uses ${this.name}, vanishing and dealing ${dmg} to ${target.name}`);
    user.stealth = true;
    target.takeDamage(dmg)
  }
}

module.exports = {
  Back_Stab,
  Vanishing_Strike,
}