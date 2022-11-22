const { NUMBER, COMMAND, } = require('./BridgeConstant');

/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let stage = 0; stage < size; stage++) {
      const randomNumber = generateRandomNumber();
      if(randomNumber === NUMBER.RANDOM_UP) bridge.push(COMMAND.UP);
      if(randomNumber === NUMBER.RANDOM_DOWN) bridge.push(COMMAND.DOWN);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
