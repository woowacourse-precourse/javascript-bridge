const { BRIDGE } = require('../utils/constants');

class Bridge {
  #size;
  #pattern;

  constructor(size, pattern) {
    this.validate(size, pattern);
    this.#size = size;
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
      checking = playerMovings[idx] === this.#pattern[idx] ? BRIDGE.RIGHT : BRIDGE.WRONG;
      let moving = playerMovings[idx];
      let notMoving = playerMovings[idx] === BRIDGE.UP ? BRIDGE.DOWN : BRIDGE.UP;
      bridgeMap[moving].push(checking);
      bridgeMap[notMoving].push(' ');
    }
    return { bridgeMap, checking };
  }
}

module.exports = Bridge;
