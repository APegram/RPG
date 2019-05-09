const { Direct_Damage_Ability } = require('./ability')

//-- Super('spell name', level, min dmg, max dmg, cost, modifier math (if none, defaults to 1)) ---------------

class Explosive_Shot extends Direct_Damage_Ability{
  constructor(modifier){
    super('Explosive Shot', 1, 1, 8, 5, (1+.001*modifier), { isSkill: true })
  }
}

class Piercing_Arrow extends Direct_Damage_Ability{
  constructor(modifier){
    super('Piercing Arrow', 1, 3, 7, 6, (1+.0015*modifier), { isSkill: true })
  }
}

module.exports = {
  Explosive_Shot,
  Piercing_Arrow,
}
