const Ability = require('./ability')

class Sweeping_Strike extends Ability{
  constructor(self){
    super(self)
    this.self = self;
    this.name = 'Sweeping Strike';
    this.level = 1;
    this.min = 4;
    this.max = 7 - this.min;
    this.modifier = 1 + .001 * this.self.str;
    this.cost = 5;
  }
  use(target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    this.self.resources.ability.current -= this.cost;
    console.log(`${this.self.name} uses ${this.name} and hits ${this.self.target.name} for ${dmg} damage!`);
    this.self.target.resources.health.current -= dmg;
  }
}

class Shield_Bash extends Ability{
  constructor(self){
    super(self)
    this.self = self
    this.name = 'Shield Bash';
    this.level = 1;
    this.min = 5;
    this.max = 5;
    this.modifier = 1 + .0015 * this.self.str
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
  Sweeping_Strike,
  Shield_Bash,
}
