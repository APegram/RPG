const Ability = require('./ability')

class Punch extends Ability{
  constructor(){
    super()
    this.name = 'Punch';
    this.level = 1;
    this.min = 4;
    this.max = 5 - this.min;
    this.modifier = 1
    this.cost = 5;
  }
  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} ${this.name}es ${target.name} dealing ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

class Rock_Throw extends Ability{
  constructor(){
    super()
    this.name = 'Rock Throw';
    this.level = 1;
    this.min = 4;
    this.max = 5 - this.min;
    this.modifier = 1
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
  Punch,
  Rock_Throw,
}
