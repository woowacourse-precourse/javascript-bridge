const { generate } = require('./BridgeRandomNumberGenerator');
/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  initializeBridge(size) {
    const generatedNumbers = Array.from({ length: size }, () => [generate()]);
    this.makeBridge(size, generatedNumbers);
  },

  makeBridge(size, generateRandomNumber) {
    const Bridge = {
      size: size,
      info: generateRandomNumber.forEach((level) => {
        if (level[0]) level.push(0);
        if (!level[0]) level.push(1);
      }),
    };
    return Bridge;
  },
};

module.exports = BridgeMaker;
