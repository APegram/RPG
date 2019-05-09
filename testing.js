let { Mage, Hunter, Warrior, Rogue, Novice } = require('./classes')

let p1 = new Rogue('dimose', 'tigran')
let p2 = new Mage('this', 'rig')



function test(){
  p1.use(Math.floor(Math.random()*3), p2)
  setTimeout(test, 1000)
}

test()