const Warrior_Abilities = function Abilities(){
  this.skills = {
    sweeping_strike: {
      name: 'Sweeping Strike',
      level: 1,
      min_dmg: 4,
      max_dmg: 7,
      modifier: 1 + .001*this.str,
      cost: 5
    },
    shield_bash: {
      name: 'Shield Bash',
      level: 1,
      min_dmg: 5,
      max_dmg: 5,
      modifier: 1 + .0015*this.str, //maybe add defensive modifier?
      cost: 6
    }
  }
}

module.exports = Warrior_Abilities