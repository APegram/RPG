let { Mage, Hunter, Warrior, Rogue, Novice } = require('./classes')

let p2 = new Mage('this', 'rig')



function test(){
  p1.use(Math.floor(Math.random()*3), p2)
  setTimeout(test, 1000)
}



//--- Code to filter skills object and return the name property being looked for in order to be executed -------
const filterUsed = (obj, filter, filterValue) => 
   Object.keys(obj).reduce((key, val) => 
   (obj[val][filter] === filterValue ? key : {
       ...key,
       [val]: obj[val]
   }                                        
), {});

let pick = p2.skills.map(skill => skill.name)
let pick_length = pick.length
let skill = parseInt(Object.keys(filterUsed(p2.skills, 'name', pick[Math.floor(Math.random()*pick_length)])))

p2.use('Attack', skill, p2)
// console.log(p2)