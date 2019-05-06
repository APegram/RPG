const { Hunter, Mage, Novice, Rogue, Warrior } = require('./classes')
const { Hob_Goblin } = require('./npcs')

let P1 = new Mage('Dimose', 'Human');

let H = new Hob_Goblin()



P1.skills[0].use(H)

console.log(P1)