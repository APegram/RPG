const { Direct_Damage_Ability } = require('./ability')

//-- Super('spell name', level, min dmg, max dmg, cost, modifier math (if none, defaults to 1)) ---------------

class Punch extends Direct_Damage_Ability{
  constructor(){
    super('Punch', 1, 4, 5, 5, 1)
  }

  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} ${this.name}es ${target.name} dealing ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

class Rock_Throw extends Direct_Damage_Ability{
  constructor(){
    super('Rock Throw', 1, 4, 5, 1, 6)
  }

  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} uses ${this.name} and hits ${target.name} for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

module.exports = {
  Punch,
  Rock_Throw,
}
