const { Direct_Damage_Ability } = require('./ability');

//-- Super('spell name', level, min dmg, max dmg, cost, modifier math (if none, defaults to 1)) ---------------

class Fireball extends Direct_Damage_Ability{
  constructor(modifier){
    super('Fireball', 1, 2, 7, 5, (1+.001*modifier), { isSpell: true });
  }
}

class Frostbolt extends Direct_Damage_Ability{
  constructor(modifier){
    super('Frostbolt', 1, 3, 6, 5, (1+.0015*modifier), { isSpell: true });
  }
}

module.exports = {
  Fireball,
  Frostbolt
}
