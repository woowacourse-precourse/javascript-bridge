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
      0: "D",
      1: "U",
    };
    return numberToBridgeMap[number] || this.throwRangeError();
  },

  throwRangeError() {
    throw new Error("[ERROR] 다리를 만들기 위한 숫자는 0이나 1이어야 합니다.");
  },
};

module.exports = BridgeMaker;
