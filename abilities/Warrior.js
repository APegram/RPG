const { Direct_Damage_Ability } = require('./ability')

class Sweeping_Strike extends Direct_Damage_Ability{
  constructor(modifier){
    super('Sweeping Strik', 1, 4, 7, 5, (1 + .001 * modifier), { isSkill: true })
  }
}

class Shield_Bash extends Direct_Damage_Ability{
  constructor(modifier){
    super('Shield Bash', 1, 5, 5, 6, (1 + .0015 * modifier), { isSkill: true })
  }
}

module.exports = {
  Sweeping_Strike,
  Shield_Bash,
}
