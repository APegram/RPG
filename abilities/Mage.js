const Mage_Abilities = function Abilities(){
  this.skills = {
    fireball: {
      name: 'Fireball',
      level: 1,
      min_dmg: 2,
      max_dmg: 7,
      modifier: 1 + .001*this.int,
      cost: 5
    },
    frostbolt: {
      name: 'Frostbolt',
      level: 1,
      min_dmg: 3,
      max_dmg: 6,
      modifier: 1 + .0015*this.int,
      cost: 6
    }
  }
}

module.exports = Mage_Abilities