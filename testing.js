let { Mage, Hunter, Warrior, Rogue, Novice } = require('./classes')

let p2 = new Mage('this', 'rig')



function test(){
  p1.use(Math.floor(Math.random()*3), p2)
  setTimeout(test, 1000)
}



// --- Code to filter skills object and return the name property being looked for in order to be executed -------
// const useSelect = (obj, skillName, keyName = 'name') => 
//    Object.keys(obj).reduce((key, val) => 
//    (obj[val][keyName] !== skillName ? key : {
//        ...key,
//        [val]: obj[val]
//    }                                        
// ), {});

// // let pick = p2.skills.map(skill => skill.name)
// // let pick_length = pick.length
// // let skill = filterUsed(p2.skills, 'name', pick[Math.floor(Math.random()*pick_length)])
// // console.log(skill)
// // p2.use('Skills', skill, p2)
// // console.log(p2)

// const skillSlot = (cb, where, what) => {
//   let x = cb(where, what)
//   return parseInt(Object.keys(x))
// }
// // console.log(p2.skills)
// let pick = skillSlot(useSelect, p2.skills, 'Fireball')
// console.log(pick)

p2.use(p2.menu[Math.floor(Math.random() * 2)], p2, 'Frostbolt')