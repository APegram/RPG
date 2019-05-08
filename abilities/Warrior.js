const Ability = require('./ability')

class Sweeping_Strike extends Ability{
  constructor(modifier){
    super()
    this.name = 'Sweeping Strike';
    this.level = 1;
    this.min = 4;
    this.max = 7 - this.min;
    this.modifier = 1 + .001 * modifier;
    this.cost = 5;
  }
  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} uses ${this.name} and hits ${target.name} for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

class Shield_Bash extends Ability{
  constructor(modifier){
    super()
    this.name = 'Shield Bash';
    this.level = 1;
    this.min = 5;
    this.max = 5;
    this.modifier = 1 + .0015 * modifier
    this.cost = 6;
  }
  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} uses ${this.name} and hits ${target.name} for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

module.exports = {
  Sweeping_Strike,
  Shield_Bash,
}
