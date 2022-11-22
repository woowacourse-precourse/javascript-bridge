const { INPUT_KEYS } = require("../utils/constants");

const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    let randomArr = [];
    const regexForZero = /0/g;
    const regexForOne = /1/g;
    for (i = 0; i < size; i++) {
      randomArr.push(generateRandomNumber());
    }
    const solutionArr = randomArr.join(",").replace(regexForZero, INPUT_KEYS.DOWN).replace(regexForOne, INPUT_KEYS.UP).split(",");
    return solutionArr;
  },
};

module.exports = BridgeMaker;
