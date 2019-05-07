const Ability = require('./ability')

class Punch extends Ability{
  constructor(self){
    super(self)
    this.self = self
    this.name = 'Punch';
    this.level = 1;
    this.min = 4;
    this.max = 5 - this.min;
    this.modifier = 1
    this.cost = 5;
  }
  use() {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    this.self.resources.ability.current -= this.cost;
    console.log(`${this.self.name} ${this.name}es ${this.self.target.name} dealing ${dmg} damage!`);
    this.self.target.resources.health.current -= dmg;
  }
}

class Rock_Throw extends Ability{
  constructor(self){
    super(self)
    this.self = self
    this.name = 'Rock Throw';
    this.level = 1;
    this.min = 4;
    this.max = 5 - this.min;
    this.modifier = 1
    this.cost = 6;
  }
  use() {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    this.self.resources.ability.current -= this.cost;
    console.log(`${this.self.name} uses ${this.name} and hits ${this.self.target.name} for ${dmg} damage!`);
    this.self.target.resources.health.current -= dmg;
  }
}

module.exports = {
  Punch,
  Rock_Throw,
}
