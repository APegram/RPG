class Ability {
  use(target) {
    throw new Error("Abstract method.");
  }
}

module.exports = Ability
