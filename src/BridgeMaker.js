const { MOVE_COMMAND } = require("./core/BridgeGameCore");

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
    const randomNumbers = Array.from({ length: size }, generateRandomNumber);
    return this.makeBridgeByNumbers(randomNumbers);
  },

  makeBridgeByNumbers(numbers) {
    return numbers.map(this.convertNumberToBridge.bind(this));
  },

  convertNumberToBridge(number) {
    const numberToBridgeMap = {
      0: MOVE_COMMAND.DOWN,
      1: MOVE_COMMAND.UP,
    };
    return numberToBridgeMap[number] || this.throwRangeError();
  },

  throwRangeError() {
    throw new Error("Random numbers'range is wrong. range must be 0 ~ 1.");
  },
};

module.exports = BridgeMaker;
