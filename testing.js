let { Mage, Hunter } = require('./classes')

let p1 = new Mage('dimose', 'tigran')
let p2 = new Mage('yo', 'ho')

p1.use(0, p2)
p2.use(1, p1)

console.log(p1)