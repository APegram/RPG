const { Direct_Damage_Ability } = require('./ability')

//-- Super('spell name', level, min dmg, max dmg, cost, modifier math (if none, defaults to 1)) ---------------

class Fireball extends Direct_Damage_Ability{
  constructor(modifier){
    super('Fireball', 1, 2, 7, 5, (1+.001*modifier))
  }

  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} cast ${this.name} on ${target.name} for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

class Frostbolt extends Direct_Damage_Ability{
  constructor(modifier){
    super('Frostbolt', 1, 3, 6, 5, (1+.0015*modifier))
  }

  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} cast ${this.name} on ${target.name} for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

module.exports = {
  Fireball,
  Frostbolt
}
