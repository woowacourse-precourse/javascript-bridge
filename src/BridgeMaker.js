const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const InputError = require("../src/InputError");
const { ERROR } = require("../src/Constant/Constant");

/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */

  canMakeBridge(size) {
    const isValidInput = size < 3 || size > 20 || size % 1 != 0;
    if (isValidInput) throw new InputError("3-20", ERROR.NOT_RANGE);
    return BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  },

  makeBridge(size, generateRandomNumber) {
    return new Array(size).fill(undefined).map((e) => {
      const numbers = generateRandomNumber();
      return Number(numbers) == 1 ? "U" : "D";
    });
  },
};

module.exports = BridgeMaker;
