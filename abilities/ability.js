class Ability {
  use() {
    throw new Error("Abstract method.");
  }
}

module.exports = Ability
