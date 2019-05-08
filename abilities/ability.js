//-- All abilities must pass in the appropriate parameters
//-- MODIFIER math logic must be done in the argument passed in

class Direct_Damage_Ability {
  constructor(name, level, min, max, cost, modifier = 1){
    this.name = name;
    this.level = level;
    this.min = min;
    this.max = max - min;
    this.cost = cost;
    this.modifier = modifier;
  }
  use() {
    throw new Error("Abstract method.");
  }
}

module.exports = {
  Direct_Damage_Ability,
}
