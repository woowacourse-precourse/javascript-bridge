const { VALUE } = require("./constant");

const BridgeMaker = {
  /**
   * @param {number} size
   * @param {function(): number} generateRandomNumber
   * @return {string[]}
   */
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (count = 0; count < size; count++) {
      const block = generateRandomNumber() == 0 ? VALUE.DOWN : VALUE.UP;
      bridge.push(block);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
