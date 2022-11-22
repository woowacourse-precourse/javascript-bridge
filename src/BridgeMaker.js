const { INPUT_CHAR, INPUT_NUM } = require('./Constants/InputValues');
/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  // generateRandomNumber는 콜백 넣으라는 이야기임
  makeBridge(size, generateRandomNumber) {
    const generatedNumbers = Array.from({ length: size }, () => generateRandomNumber().toString());
    const Bridge = [];
    Array.from(generatedNumbers).forEach((value) => {
      if (value === INPUT_NUM.down) Bridge.push(INPUT_CHAR.down);
      if (value === INPUT_NUM.up) Bridge.push(INPUT_CHAR.up);
    });
    return Bridge;
  },
};

module.exports = BridgeMaker;
