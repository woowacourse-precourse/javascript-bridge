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
    const rightBlock = [];
    let randomNumber = generateRandomNumber.generate();
    for (let rightBlockIndex = 0; rightBlockIndex < size; rightBlockIndex++) {
      if (randomNumber === 0) rightBlock.push('D');
      if (randomNumber === 1) rightBlock.push('U');
      randomNumber = generateRandomNumber.generate();
    }
    return rightBlock;
  },
};

module.exports = BridgeMaker;
