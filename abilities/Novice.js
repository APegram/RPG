const Ability = require('./ability')

class Punch extends Ability{
  constructor(self, modifier){
    super()
    this.self = self
    this.name = 'Punch';
    this.level = 1;
    this.min = 4;
    this.max = 5 - this.min;
    this.modifier = 1
    this.cost = 5;
  }
  use(target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    this.self.resources.ability.current -= this.cost;
    console.log(`${this.self.name} ${this.name}es ${target.name} dealing ${dmg} damage!`);
    target.resources.health.current -= dmg;
  }
}

class Rock_Throw extends Ability{
  constructor(self, modifier){
    super()
    this.self = self
    this.name = 'Rock Throw';
    this.level = 1;
    this.min = 4;
    this.max = 5 - this.min;
    this.modifier = 1
    this.cost = 6;
  }
  use(target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    this.self.resources.ability.current -= this.cost;
    console.log(`${this.self.name} uses ${this.name} and hits ${target.name} for ${dmg} damage!`);
    target.resources.health.current -= dmg;
  }
}

module.exports = {
  Punch,
  Rock_Throw,
}
