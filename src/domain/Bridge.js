const { BRIDGE } = require('../utils/constants');

class Bridge {
  #pattern;

  constructor(pattern) {
    this.validate(pattern.length, pattern);
    this.#pattern = pattern;
  }

  validate(size, pattern) {
    const isValideSize = BRIDGE.minSize <= size && size <= BRIDGE.maxSize;
    const isValidePattern = pattern.every(
      (element) => element === BRIDGE.up || element === BRIDGE.down,
    );
    const isValidBridge = isValideSize && isValidePattern;
    if (isValidBridge) return true;
    throw new Error(BRIDGE.createError);
  }

  match(playerMovings) {
    const bridgeMap = { U: [], D: [] };
    let checking;
    for (let idx = 0; idx < playerMovings.length; idx++) {
      const moving = playerMovings[idx];
      const notMoving = moving === BRIDGE.up ? BRIDGE.down : BRIDGE.up;
      checking = moving === this.#pattern[idx] ? BRIDGE.right : BRIDGE.wrong;
      bridgeMap[moving].push(checking);
      bridgeMap[notMoving].push(' ');
    }
    return { bridgeMap, checking };
  }
}

module.exports = Bridge;
