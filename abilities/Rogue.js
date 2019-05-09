const { Direct_Damage_Ability } = require('./ability');

//-- Super('spell name', level, min dmg, max dmg, cost, modifier math (if none, defaults to 1)), {options} ---------------

class Back_Stab extends Direct_Damage_Ability {
  constructor(modifier, stealth) {
    super('Back Stab', 1, 4, 5, 5, (stealth ? 1.75 + 1 + .001 * modifier : 1 + .001 * modifier), { isSkill: true });
  }

  use(user, target) {
    if (user.stealth)
      console.log(`${user.name} appears from the shadows...`);
    user.stealth = false;
    super.use(user, target);
  }
}

class Vanishing_Strike extends Direct_Damage_Ability {
  constructor(modifier) {
    super('Vanishing Strike', 1, 3, 3, 6, (1 + .001 * modifier), { isSkill: true });
  }

  use(user, target) {
    super.use(user, target)
    switch (user.stealth) {
      case true:
        console.log(`${user.name} is no longer stealthed`);
        user.stealth = false;
        break;
      default:
        console.log(`${user.name} vanishes into the shadows...`);
        user.stealth = true;
        break;
    }
  }
}

module.exports = {
  Back_Stab,
  Vanishing_Strike,
}