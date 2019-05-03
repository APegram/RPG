const Rogue_Abilities = function Abilities(){
  this.skills = {
    back_stab: {
      name: 'Back Stab',
      level: 1,
      stealth_dmg: 3,
      min_dmg: this.stealth ? stealth_dmg + 4 : 4,
      max_dmg: this.stealth ? stealth_dmg + 5 : 5,
      modifier: 1 + .001*this.agi,
      cost: 5
    },
    vanishing_strike: {
      name: 'Vanishing Strike',
      level: 1,
      min_dmg: 3,
      max_dmg: 3,
      modifier: 1 + .001*this.agi,
      cost: 6
    }
  }
}

module.exports = Rogue_Abilities