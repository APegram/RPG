const Ability = require('./ability')

class Back_Stab extends Ability{
  constructor(self, modifier){
    super()
    this.self = self
    this.name = 'Back_Stab';
    this.level = 1;
    this.stealth_dmg = 3;
    this.min = this.self.stealth ? this.stealth_dmg + 4 : 4;
    this.max = this.self.stealth ? this.stealth.dmg + 5 - this.min : 5 - this.min;
    this.modifier = 1 + .001 * this.self.agi;
    this.cost = 5;
  }
  use(target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    this.self.resources.ability.current -= this.cost;
    console.log(this.self.stealth ? `${this.self.name} appears from the shadows and uses ${this.name} on ${target.name}, dealing ${dmg}` : `${this.self.name} uses ${this.name} on ${target.name} hitting for ${dmg} damage!`);
    target.resources.health.current -= dmg;
  }
}

class Vanishing_Strike extends Ability{
  constructor(self, modifier){
    super()
    this.self = self
    this.name = 'Vanishing Strike';
    this.level = 1;
    this.min = 3;
    this.max = 3;
    this.modifier = 1 + .001 * modifier;
    this.cost = 6;
  }
  use(target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    this.self.resources.ability.current -= this.cost;
    console.log(`${this.self.name} uses ${this.name}, vanishing and dealing ${dmg} to ${target.name}`);
    this.self.stealth = true;
    target.resources.health.current -= dmg;
  }
}

module.exports = {
  Back_Stab,
  Vanishing_Strike,
}