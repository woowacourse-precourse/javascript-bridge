const { checkHasCrossibleKey } = require('./Utils');

class CrossingBridge {
  #moveKey;
  constructor(moveKey) {
    this.#moveKey = moveKey;
  }

  validate() {
    checkHasCrossibleKey(this.#moveKey);
  }
}

module.exports = CrossingBridge;

const a = new CrossingBridge('');
a.validate();
