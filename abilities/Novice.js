const { Direct_Damage_Ability } = require('./ability');

//-- Super('spell name', level, min dmg, max dmg, cost, modifier math (if none, defaults to 1)) ---------------

class Punch extends Direct_Damage_Ability{
  constructor(){
    super('Punch', 1, 4, 5, 5, 1, { isSkill: true });
  }
}

class Rock_Throw extends Direct_Damage_Ability{
  constructor(){
    super('Rock Throw', 1, 4, 5, 6, 1, { isSkill: true });
  }
}

module.exports = {
  Punch,
  Rock_Throw,
}
