const Hunter_Abilities = function Abilities(){
  this.skills = {
    explosive_shot: {
      name: 'Explosive Shot',
      level: 1,
      min_dmg: 1,
      max_dmg: 8,
      modifier: 1 + .001*this.agi,
      cost: 5
    },
    piercing_arrow: {
      name: 'Piercing Arrow',
      level: 1,
      min_dmg: 3,
      max_dmg: 7,
      modifier: 1 + .0015*this.int,
      cost: 6
    }
  }
}

module.exports = Hunter_Abilities