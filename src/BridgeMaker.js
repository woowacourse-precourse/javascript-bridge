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
    const tempBridge = new Array(size).fill(0);

    const bridge = tempBridge.map((elem) => {
      const tempNumber = generateRandomNumber.generate();
      console.log(`tempNum: ${tempNumber}`);
      if (tempNumber) return "U";
      if (!tempNumber) return "D";
    });
    return bridge;
  },
};

module.exports = BridgeMaker;
