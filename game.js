"use strict"
//************* The Below Constructors take (name, race) arguments *****/
const { Hunter, Mage, Novice, Rogue, Warrior } = require('./classes')
let colors = require('colors')

let P1 = new Mage('Dimose'.blue, 'Human');
let P2 = new Rogue('Jo'.yellow, 'Gnome');
let P3 = new Hunter('Rosa'.green, 'Undead');
let P4 = new Novice('Jester'.cyan, 'Frostling');
let P5 = new Warrior('Fjore'.red, 'Tigran');

let players = [P1, P2, P3, P4, P5]
let player_amt = players.length
let win_banner = `*********************************`.green
let lose_banner = `**********************************`.red

function fight(p1, p2, index, battle_type = '1v1'){
  p1.target = p2 || null
  p2.target = p1 || null
  let length = p1.skill_list.length
  let length2 = p2.skill_list.length
  let p1_skill = p1.skill_list[Math.floor(Math.random() * length)]
  let p2_skill = p2.skill_list[Math.floor(Math.random() * length2)]

  p1.cast(p1_skill)
  p2.cast(p2_skill)

  if (index === (players.length - 1)){
    players = players.filter(player => player.resources.health.current > 0)
  }

  console.log(`
  **********************************************
  ${p1.name}: ${p1.resources.health.current}
  ${p2.name}: ${p2.resources.health.current}
  **********************************************
  `)

  if (p1.resources.health.current < 1 || p2.resources.health.current < 1){
    if (p1.resources.health.current < 1 && p2.resources.health.current < 1){
      console.log(`${p1.name} & ${p2.name} have knocked one another out`)
    } else if (p1.resources.health.current < 1) {
      console.log(`
      ${p2.name} has knocked out ${p1.name}!!
      `)
    } else {
      console.log(`
      ${p1.name} has knocked out ${p2.name}!!
      `)
    }
    if (battle_type === '1v1')
      clearInterval(fighting)
    
    if (players.length === 1 && battle_type === 'BR'){
      console.log(win_banner)
      console.log(`* `.green + `${players[0].name} wins the Battle Royale!` + ` *`.green)
      console.log(win_banner)
      clearInterval(battleRoyaling)
    } else if (players.length < 1 && battle_type === 'BR'){
      console.log(lose_banner)
      console.log(`No one survived the Battle Royale...`)
      console.log(lose_banner)
      clearInterval(battleRoyaling)
    }
  }
}


function battleRoyale_fight(attacker, index) {
  let targets = players.filter(player => player.name !== attacker.name)
  let target_length = targets.length
  fight(attacker, targets[Math.floor(Math.random() * target_length)], index, 'BR')
}

function battleRoyale(attackers){
  attackers.forEach((player, index) => {
    battleRoyale_fight(player, index)
  })
}


//******* Keep which mode you would like to run uncommented down below *****/
//*** ONE VERSUS ONE ****/

let player_one = players[Math.floor(Math.random()* player_amt)]
  let remaining_players = players.filter(player => {
    if (player_one !== player) return player
  })
  player_amt = remaining_players.length
  let player_two = remaining_players[Math.floor(Math.random() * player_amt)]
  let fighting = setInterval(() => {fight(player_one, player_two)}, 1000)
  fight(player_one, player_two)

//*** Battle Royale Free For All ***/

// battleRoyale(players);
// let battleRoyaling = setInterval(() => battleRoyale(players), 3000);