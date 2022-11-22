const Validator = require("./Library/Validator");

const BRIDGE_ALPHABET = ["D", "U"];

const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    const bridgeStatus = [];

    for (let number = 0; number < size; number++) {
      const RANDOM = this.bridgeGenerate(generateRandomNumber);
      bridgeStatus.push(BRIDGE_ALPHABET[RANDOM]);
    }

    return bridgeStatus;
  },

  bridgeGenerate(generateRandomNumber) {
    const RANDOM = generateRandomNumber();
    Validator.isBoolNumber(this.bridgeGenerate, RANDOM);
    return RANDOM;
  },
};

module.exports = BridgeMaker;
