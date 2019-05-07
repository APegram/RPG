class Ability {
  constructor(self){
    this.target = self
  }
  use() {
    throw new Error("Abstract method.");
  }
}

module.exports = Ability
