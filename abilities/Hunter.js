const Ability = require('./ability')

class Explosive_Shot extends Ability{
  constructor(self){
    super()
    this.self = self
    this.name = 'Explosive Shot';
    this.level = 1;
    this.min = 1;
    this.max = 8 - this.min;
    this.modifier = 1 + .001 * this.self.agi
    this.cost = 5;
  }
  use(target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    this.self.resources.ability.current -= this.cost;
    console.log(`${this.self.name} fired ${this.name} at ${target.name} for ${dmg} damage!`);
    target.resources.health.current -= dmg;
  }
}

class Piercing_Arrow extends Ability{
  constructor(self, modifier){
    super()
    this.self = self
    this.name = 'Piercing Arrow';
    this.level = 1;
    this.min = 3;
    this.max = 7 - this.min;
    this.modifier = 1 + .0015 * modifier;
    this.cost = 6;
  }
  use(target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    this.self.resources.ability.current -= this.cost;
    console.log(`${this.self.name} fired ${this.name} at ${target.name} for ${dmg} damage!`);
    target.resources.health.current -= dmg;
  }
}

module.exports = {
  Explosive_Shot,
  Piercing_Arrow,
}
