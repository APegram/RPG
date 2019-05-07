const Ability = require('./ability');

class Attack extends Ability {
  constructor(self){
    super(self)
    this.self = self;
    this.name = 'Attack';
    this.min = 3;
    this.max = 8 - this.min;
    this.modifier = 1 + .01 * this.self.str
  }
  use() {
    let dmg = Math.floor((Math.random() * this.max + this.min) * this.modifier);
    console.log(`${this.self.name} ${this.name}s ${this.self.target.name}, dealing ${dmg} damage.`);
    this.self.target.resources.health.current -= dmg;
  }
}

module.exports = {
  Attack,
}