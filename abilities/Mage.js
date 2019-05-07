const Ability = require('./ability')

class Fireball extends Ability{
  constructor(self){
    super(self)
    this.self = self
    this.name = 'Fireball';
    this.level = 1;
    this.min = 2;
    this.max = 7 - this.min;
    this.modifier = 1 + .001 * this.self.int;
    this.cost = 5;
  }
  use() {
    let target = this.self.target
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    this.self.resources.ability.current -= this.cost;
    console.log(`${this.self.name} cast ${this.name} on ${this.self.target.name} for ${dmg} damage!`);
    this.self.target.resources.health.current -= dmg;
  }
}

class Frostbolt extends Ability{
  constructor(self){
    super(self)
    this.self = self
    this.name = 'Frostbolt';
    this.level = 1;
    this.min = 3;
    this.max = 6 - this.min;
    this.modifier = 1 + .0015 * this.self.int;
    this.cost = 5;
  }
  use() {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    this.self.resources.ability.current -= this.cost;
    console.log(`${this.self.name} cast ${this.name} on ${this.self.target.name} for ${dmg} damage!`);
    this.self.target.resources.health.current -= dmg;
  }
}

module.exports = {
  Fireball,
  Frostbolt
}
