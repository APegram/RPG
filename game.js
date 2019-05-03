"use strict"
//************* The Below Constructors take (name, race) arguments *****/
const { Hunter, Mage, Novice, Rogue, Warrior } = require('./classes')

let P1 = new Mage('Dimose', 'Human');
let P2 = new Rogue('Jo', 'Gnome');
let P3 = new Hunter('Rosa', 'Undead');
let P4 = new Novice('Jester', 'Frostling');
let P5 = new Warrior('Fjore', 'Tigran');

let players = [P1, P2, P3, P4, P5]
let player_amt = players.length

players.forEach(player => console.log(player.skills))

// function fight(p1, p2){
//   let player1_use = Math.random()
//   let player2_use = Math.random()

//   if (player1_use < .90)
//     p1.auto_attack(p2)
//   else
//     p1.use_potion()

//   if (player2_use < .90)
//     p2.auto_attack(p1)
//   else
//     p2.use_potion()

//   console.log(`
//   **********************************************
//   ${p1.name}: ${p1.resources.health.current}
//   ${p2.name}: ${p2.resources.health.current}
//   **********************************************
//   `)

//   if (p1.resources.health.current < 1 || p2.resources.health.current < 1){
//     if (p1.resources.health.current < 1 && p2.resources.health.current < 1){
//       console.log(`${p1.name} & ${p2.name} have knocked one another out`)
//     } else if (p1.resources.health.current < 1) {
//       console.log(`
//       ${p2.name} has knocked out ${p1.name}!!
      
//       ${p2.name} WINS!
//       `)
//     } else {
//       console.log(`
//       ${p1.name} has knocked out ${p2.name}!!
      
//       ${p1.name} WINS!
//       `)
//     }
//     clearInterval(fighting)
//   }
// }
// let player_one = players[Math.floor(Math.random()* player_amt)]
// let remaining_players = players.filter(player => {
//   if (player_one !== player) return player
// })
// player_amt = remaining_players.length
// let player_two = remaining_players[Math.floor(Math.random() * player_amt)]
// let fighting = setInterval(() => {fight(player_one, player_two)}, 3000)
// fight(player_one, player_two)

// P1.cast(P1.skills.fireball, P2)
// P1.cast(P1.skills.frostbolt, P2)
