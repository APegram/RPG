const { Direct_Damage_Ability } = require('./ability')

//-- Super('spell name', level, min dmg, max dmg, cost, modifier math (if none, defaults to 1)) ---------------

class Back_Stab extends Direct_Damage_Ability{
  constructor(modifier, stealth){
    super('Back Stab', 1, 4, 5, 5, (stealth ? 1.75 + 1 + .001 * modifier : 1 + .001 * modifier), { isCustom: true })
  }

  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(user.stealth ? `${user.name} appears from the shadows and uses ${this.name} on ${target.name}, dealing ${dmg}` : `${user.name} uses ${this.name} on ${target.name} hitting for ${dmg} damage!`);
    target.takeDamage(dmg)
  }
}

class Vanishing_Strike extends Direct_Damage_Ability{
  constructor(modifier){
    super('Vanishing Strike', 1, 3, 3, 6, (1 + .001 * modifier), { isCustom: true })
  }

  use(user, target) {
    let dmg = Math.floor((Math.random() * (this.max) + this.min) * this.modifier);
    user.useAbilityPoints(this.cost)
    console.log(`${user.name} uses ${this.name}, vanishing and dealing ${dmg} to ${target.name}`);
    user.stealth = true;
    target.takeDamage(dmg)
  }
}

module.exports = {
  Back_Stab,
  Vanishing_Strike,
}