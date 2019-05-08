//************* The Below Constructors take (name, race) arguments *****/
const { Hunter, Mage, Novice, Rogue, Warrior } = require('./classes')
const { Hob_Goblin } = require('./npcs')

let P1 = new Mage('Dimose', 'Human');
let P2 = new Rogue('Jo', 'Gnome');
let P3 = new Hunter('Rosa', 'Undead');
let P4 = new Novice('Mio', 'Yjorizan');
let P5 = new Warrior('Baecon', 'Gnoll');


let party = [P1, P2, P3, P4, P5]
let enemies = []
let earned_xp = 0;
let round = 0;
let player_level = P1.level
let monster_default_level = 2

function enemy_level(monster_level, player_level){
  if (monster_level < 4 && player_level < 4) {
    return monster_level
  } else if (monster_level < player_level){
    return monster_level = Math.floor(Math.random() * 4 - 2) + player_level
  } else {
    return monster_level
  } 
}

function pre_combat(party){
  enemies = [];
  round = 0;
  let enemy_gen = Math.floor(Math.random() * 4) + 1
  for (let i = 0; i < enemy_gen; i++){
    let alpha = 65 + i;

    let new_enemy = new Hob_Goblin(`Goblin ${String.fromCharCode(alpha)}`, enemy_level(monster_default_level, player_level))
    enemies.push(new_enemy)
  }
  combat(party, enemies)
}

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
    players.indexOf(character) < 0 ? target = players[Math.floor(Math.random() * player_count)] : target = npcs[Math.floor(Math.random() * enemy_count)];
    let length = character.skills.length
    character.use((Math.floor(Math.random() * length)), target)
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
    player.levelUp(earned_xp)
  })
  console.log('victory done')
}



pre_combat(party)
// console.log(new_enemy)

