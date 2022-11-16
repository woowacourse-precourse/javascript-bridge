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
    for (let i=0; i<size; i++) {
      let RANDOM_NUMBER = generateRandomNumber();

      if (RANDOM_NUMBER == 0) bridge.push("D");
      else if (RANDOM_NUMBER == 1)  bridge.push("U");
      else  throw new Error("[Error] 숫자가 잘못됨");
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
