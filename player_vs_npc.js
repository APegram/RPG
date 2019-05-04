//************* The Below Constructors take (name, race) arguments *****/
const { Hunter, Mage, Novice, Rogue, Warrior } = require('./classes')
const { Hob_Goblin } = require('./npcs')

let P1 = new Mage('Dimose', 'Human');
let P2 = new Rogue('Jo', 'Gnome');
let P3 = new Hunter('Rosa', 'Undead');



let party = [P1, P2, P3]

let E1 = new Hob_Goblin(name = 'Goblin A')
let E2 = new Hob_Goblin(name = 'Goblin B')
let enemies = [E1, E2]

let earned_xp = 0;
let round = 0;

function combat(players, npcs){
  round++
  let enemy_count = npcs.length;
  let player_count = players.length;

  if (enemy_count === 0){
    console.log(`
    You are victorious! ${earned_xp} XP has been earned.`)
    return victory(earned_xp)
  } else if (player_count === 0){
    console.log(`Your party has been defeated...`)
    return
  } else {
    console.log(`
    Round ${round}
    `)
  }

  let initiative = [...players, ...npcs]
  initiative.sort((a, b) => (a.spd > b.spd) ? -1 : 1)

  initiative.forEach(character => {
    players.indexOf(character) < 0 ? character.target = players[Math.floor(Math.random() * player_count)] : character.target = npcs[Math.floor(Math.random() * enemy_count)];
    let length = character.skill_list.length
    let skill = character.skill_list[Math.floor(Math.random() * length)]
    character.cast(skill)
  })

  let remaining_players = initiative.filter(character => character.resources.health.current > 0 && character.type === 'player')
  initiative.forEach(npc => {
    if (npc.type === 'npc' && npc.resources.health.current <= 0){
      earned_xp += npc.xp_value
    }
  })
  let remaining_npcs = initiative.filter(character => character.resources.health.current > 0 && character.type === 'npc')
  setTimeout(() => combat(remaining_players, remaining_npcs), 3000)
}

function victory(earned_xp){
  party.forEach(player => {
    player.xp.current += earned_xp
    if (player.xp.current >= player.xp.max){
      player.level += 1;
      player.xp.current = player.xp.current - player.xp.max;
      player.xp.max = 33 * player.level;
      console.log(`
      ${player.name} has reached level ${player.level}!!
      `)
    } else {
      return
    }
  })
}

combat(party, enemies)

