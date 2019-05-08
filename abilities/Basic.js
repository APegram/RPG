const Ability = require('./ability');

class Attack extends Ability {
  constructor(modifier){
    super()
    this.name = 'Attack';
    this.min = 3;
    this.max = 8 - this.min;
    this.modifier = 1 + .01 * modifier
  }
  use(user, target) {
    let dmg = Math.floor((Math.random() * this.max + this.min) * this.modifier);
    console.log(`${user.name} ${this.name}s ${target.name}, dealing ${dmg} damage.`);
    target.takeDamage(dmg)
  }
}

module.exports = {
  Attack,
}