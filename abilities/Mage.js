const Ability = require('./ability')

class Fireball extends Ability{
  constructor(modifier){
    super()
    this.name = 'Fireball';
    this.level = 1;
    this.min = 2;
    this.max = 7 - this.min;
    this.modifier = 1 + .001 * modifier
    this.cost = 5;
  }
  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} cast ${this.name} on ${target.name} for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

class Frostbolt extends Ability{
  constructor(modifier){
    super()
    this.name = 'Frostbolt';
    this.level = 1;
    this.min = 3;
    this.max = 6 - this.min;
    this.modifier = 1 + .0015 * modifier;
    this.cost = 5;
  }
  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} cast ${this.name} on ${target.name} for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

module.exports = {
  Fireball,
  Frostbolt
}
