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
    BridgeMaker.checkSize(size);
    let bridge = [];
    for (let i=0; i<size; i++) {
      let RANDOM_NUMBER = generateRandomNumber();

      if (RANDOM_NUMBER == 0) bridge.push("D");
      else if (RANDOM_NUMBER == 1)  bridge.push("U");
      else  throw new Error("[Error] 숫자가 잘못됨");
    }

    return bridge;
  },

  checkSize(size) {
    if (typeof(size) != "number") {
      throw new Error("[Error] 다리의 크기는 숫자를 입력해주세요");
    }

    if (size < 3 | size > 20) {
      throw new Error("[Error] 다리의 크기는 3 ~ 20 사이의 숫자만 가능합니다.");
    }
  },
};

module.exports = BridgeMaker;
