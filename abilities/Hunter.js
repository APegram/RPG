const Ability = require('./ability')

class Explosive_Shot extends Ability{
  constructor(modifier){
    super()
    this.name = 'Explosive Shot';
    this.level = 1;
    this.min = 1;
    this.max = 8 - this.min;
    this.modifier = 1 + .001 * modifier
    this.cost = 5;
  }
  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} fired ${this.name} at ${target.name} for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

class Piercing_Arrow extends Ability{
  constructor(modifier){
    super()
    this.name = 'Piercing Arrow';
    this.level = 1;
    this.min = 3;
    this.max = 7 - this.min;
    this.modifier = 1 + .0015 * modifier;
    this.cost = 6;
  }
  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} fired ${this.name} at ${target.name} for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

module.exports = {
  Explosive_Shot,
  Piercing_Arrow,
}
