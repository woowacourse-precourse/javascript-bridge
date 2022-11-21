const { step } = require('./lib/constants');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const BridgeMaker = {
  /**
   * @param {number} size
   * @param {function(): number} generateRandomNumber
   * @return {string[]}
   */
  makeBridge(size, generateRandomNumber) {
    const bridge = [];

    while (bridge.length !== size) {
      const randomNumber = generateRandomNumber();
      if (randomNumber in step) {
        bridge.push(step[randomNumber]);
      }
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
