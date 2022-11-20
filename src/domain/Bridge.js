const { BRIDGE } = require('../utils/constants');

class Bridge {
  #pattern;

  constructor(pattern) {
    this.validate(pattern.length, pattern);
    this.#pattern = pattern;
  }

  validate(size, pattern) {
    const isValideSize = BRIDGE.MIN_SIZE <= size && size <= BRIDGE.MAX_SIZE;
    const isValidePattern = pattern.every(
      (element) => element === BRIDGE.UP || element === BRIDGE.DOWN,
    );
    const isValidBridge = isValideSize && isValidePattern;
    if (isValidBridge) return true;
    throw new Error(BRIDGE.CREATE_ERROR);
  }

  match(playerMovings) {
    const bridgeMap = { U: [], D: [] };
    let checking;
    for (let idx = 0; idx < playerMovings.length; idx++) {
      const moving = playerMovings[idx];
      const notMoving = moving === BRIDGE.UP ? BRIDGE.DOWN : BRIDGE.UP;
      checking = moving === this.#pattern[idx] ? BRIDGE.RIGHT : BRIDGE.WRONG;
      bridgeMap[moving].push(checking);
      bridgeMap[notMoving].push(' ');
    }
    return { bridgeMap, checking };
  }
}

module.exports = Bridge;
