const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i++) {
      const number = parseInt(generateRandomNumber(), 10);
      if (number === 0) bridge.push("D");
      else bridge.push("U");
    }
    return bridge;
  },
};

module.exports = BridgeMaker;

/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 * 1. 프로퍼티를 추가할 수 없다.
 * 2. 파일 경로는 변경할 수 없다.
 * 3. 시그니처와 반환 타입을 변경할 수 없다.
 */
