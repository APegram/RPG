"use strict"

function Character(name, race) {
  this.name = name;
  this.race = race;
  this.resources = this.resources || {
    ability: {
      type: 'Mana',
      max: Math.floor(2.2 * this.wis),
      current: Math.floor(2.2 * this.wis),
    },
    health: {
      type: 'Health',
      max: Math.floor(20 + (this.str * 1.4)),
      current: Math.floor(20 + (this.str * 1.4))
    }
  }
  this.skill_list = ['Attack', 'Potion', ...Object.keys(this.skills)]
  this.printStats = function () {
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
}
Character.prototype.use_potion = function () {
  let healed = Math.floor(Math.random() * 4) + 1
  let healedTo = this.resources.health.current + healed
  if (healedTo > this.resources.health.max)
    this.resources.health.current = this.resources.health.max
  else
    this.resources.health.current = healedTo
    console.log(`${this.name} used a potion and healed for ${healed}`)
}

Character.prototype.auto_attack = function (attack_who) {
  let health_regen
  let ap_regen
  // if (this.resources.health.current < this.resources.health.max)
  //   health_regen = setInterval(() => {this.hp_regen()}, 5000)
  // else 
  //   clearInterval(health_regen)

  // if (this.resources.ability.current < this.resources.ability.max)
  //   ap_regen = setInterval(() => {this.ap_regen()}, 2000)
  // else
  //   clearInterval(ap_regen)

  let dmg = Math.floor(Math.random() * 10)
  attack_who.resources.health.current -= dmg
  if (dmg !== 0)
    console.log(`${this.name} attacks ${attack_who.name} with ${this.weapon} for ${dmg} damage`)
  else
    console.log(`${this.name} misses ${attack_who.name}`)
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