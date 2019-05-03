const Novice_Abilities = function Abilities(){
  this.skills = {
    punch: {
      name: 'Punch',
      level: 1,
      min_dmg: 4,
      max_dmg: 5,
      modifier: null,
      cost: 5
    },
    rock_throw: {
      name: 'Rock Throw',
      level: 1,
      min_dmg: 3,
      max_dmg: 4,
      modifier: null,
      cost: 6
    }
  }
}

module.exports = Novice_Abilities