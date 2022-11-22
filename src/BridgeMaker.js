const { SPACE } = require('./constants');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return [...Array(size)].reduce((bridge) => {
      const randomNumber = generateRandomNumber();
      const bridgeSpace = SPACE[randomNumber];
      bridge.push(bridgeSpace);

      return bridge;
    }, []);
  },
};

module.exports = BridgeMaker;
