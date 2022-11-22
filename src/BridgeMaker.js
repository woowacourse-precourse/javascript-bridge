const BridgeValidator = require('./Bridge.validator');

/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    while (bridge.length < size) {
      const randomNumber = generateRandomNumber();
      BridgeValidator.isNumber(randomNumber);

      const position = this.setPosition(randomNumber);
      bridge.push(position);
    }
    return bridge;
  },

  setPosition(randomNumber) {
    let position = '';
    if (randomNumber == 1) {
      position = 'U';
    } else if (randomNumber == 0) {
      position = 'D';
    }
    return position;
  },
};

module.exports = BridgeMaker;
