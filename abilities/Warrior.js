const { Direct_Damage_Ability } = require('./ability')

class Sweeping_Strike extends Direct_Damage_Ability{
  constructor(modifier){
    super('Sweeping Strik', 1, 4, 7, 5, (1 + .001 * modifier))
  }

  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} uses ${this.name} and hits ${target.name} for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

class Shield_Bash extends Direct_Damage_Ability{
  constructor(modifier){
    super('Shield Bash', 1, 5, 5, 6, (1 + .0015 * modifier))
  }

  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} uses ${this.name} and hits ${target.name} for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

module.exports = {
  Sweeping_Strike,
  Shield_Bash,
}
