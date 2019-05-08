const { Direct_Damage_Ability } = require('./ability')

//-- Super('spell name', level, min dmg, max dmg, cost, modifier math (if none, defaults to 1)) ---------------

class Explosive_Shot extends Direct_Damage_Ability{
  constructor(modifier){
    super('Explosive Shot', 1, 1, 8, 5, (1+.001*modifier))
  }

  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} fired ${this.name} at ${target.name} for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

class Piercing_Arrow extends Direct_Damage_Ability{
  constructor(modifier){
    super('Piercing Arrow', 1, 3, 7, 6, (1+.0015*modifier))
  }

  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} fired ${this.name} at ${target.name} for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

module.exports = {
  Explosive_Shot,
  Piercing_Arrow,
}
