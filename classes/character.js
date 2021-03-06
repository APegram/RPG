"use strict"
let { Attack } = require('../abilities/Basic');

class Character {
  constructor(name, race, level, agi, str, wis, int, spd, xp) {
    this.type = 'player';
    this.level = level;
    this.xp = {
      current: xp,
      max: 33 * this.level,
    };
    this.name = name;
    this.race = race;
    this.stealth = false;
    this.agi = agi;
    this.str = str;
    this.wis = wis;
    this.int = int;
    this.spd = spd;
    this.resources = this.resources || {
      ability: {
        type: 'Mana',
        max: Math.floor(2.2 * this.wis),
        current: Math.floor(2.2 * this.wis),
      },
      health: {
        type: 'Health',
        max: Math.floor(20 + (this.str * 1.4)),
        current: Math.floor(20 + (this.str * 1.4)),
      }
    };
    this.attack = new Attack(this.str);
    this.items = [];
    this.menu = ['Attack', 'Skills']
  }
  printStats() {
    console.log(`
  Name: ${this.name}
  Race: ${this.race}
  Class: ${this.className}
  Hit Points: ${this.resources.health.current}
  ${this.resources.ability.type}: ${this.resources.ability.current}
  Agility: ${this.agi}
  Strength: ${this.str}
  Wisdom: ${this.wis}
  Intelligence: ${this.int}
  Weapon: ${this.weapon}
  Skills: ${this.skills}
  `)
  }

  findSelect(obj, skillName, keyName = 'name') {
    let index = Object.keys(obj).reduce((key, val) =>
      (obj[val][keyName] !== skillName ? key : {
        ...key,
        [val]: obj[val]
      }
      ), {})
    return index
  }

  skillIndex(cb, where, what) {
    let x = cb(where, what)
    return parseInt(Object.keys(x))
  }

  use(menuSelect, target, skillName = 'Attack') {
    let skillIndex = null;
    switch (menuSelect) {
      case this.menu[1]:
        skillIndex = this.skillIndex(this.findSelect, this.skills, skillName)
        this.skills[skillIndex].use(this, target);
        break;
      case this.menu[2]:
        // this.items[itemIndex].use(this, target);
        console.log('currently there are no items')
        break;
      default:
        this.attack.use(this, target);
        break;
    }
  }

  useAbilityPoints(amount) {
    this.resources.ability.current -= amount;
  }

  takeDamage(amount) {
    this.resources.health.current -= amount;
  }
  levelUp(amount) {
    this.xp.current += amount || 0;
    if (this.xp.current > this.xp.max) {
      this.level++;
      this.xp.current -= this.xp.max;
      this.xp.max *= 2;
      console.log(`${this.name} has reached level ${this.level}!`);
      this.levelUp();
    }
    return
  }
}

module.exports = Character

  //Character.prototype.hp_regen = function(){
  //   //every 8 str = +1hp/tick
  //   let hp_regen_modifier = Math.floor(.08*this.str)
  //   let hp_regen = 1 + hp_regen_modifier
  //   if (this.resources.health.current < this.resources.health.max){
  //     let updated_health = this.resources.health.current += hp_regen
  //     if (updated_health > this.resources.health.max){
  //       updated_health = this.resources.health.max;
  //     }
  //     this.resources.health.current = updated_health
  //   }
  // }

  // Character.prototype.ap_regen = function() {
  //   let ability_type = this.resources.ability.type
  //   //everyh 30 agi = +1energy/tick
  //   let energy_regen_modifier = Math.floor(.30*this.agi)
  //   let energy_regen = 2 + energy_regen_modifier
  //   //every 30 int = +1 percent regen
  //   let mana_regen_modifier = Math.floor(.30*this.int)
  //   let mana_regen = this.resources.ability.max * .10 + mana_regen_modifier
  //   //amount of rage lost every second
  //   let rage_degen = 1
  //   let updated_ap

  //   switch (ability_type){
  //     case 'energy':
  //       updated_ap += energy_regen
  //       break;
  //     case 'rage':
  //       updated_ap -= rage_degen
  //       break;
  //     default:
  //       updated_ap += mana_regen
  //       break;
  //   }
  //   if (this.resources.ability.current < this.resources.ability.max){
  //     if (updated_ap > this.resources.ablitiy.max){
  //       updated_ap = this.resources.ablitiy.max;
  //     }
  //     this.resources.ablitiy.current = updated_ap
  //   }
  // }