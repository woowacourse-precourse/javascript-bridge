const { BRIDGE } = require("./utils/Constants");

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
    const randomBridge = [];
    for (let i = 0; i < size; i++) {
      const randomNumber = Number(generateRandomNumber());
      const convertedLetter = this.bridgeConverter(randomNumber)
      randomBridge.push(convertedLetter);
    }

    return randomBridge;
  },

  bridgeConverter(number) {
    if (number === BRIDGE.code.up) {
      return BRIDGE.letter.up;
    }
    return BRIDGE.letter.down;
  },
};

module.exports = BridgeMaker;
