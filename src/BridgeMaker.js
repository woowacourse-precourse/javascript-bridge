/**
 * BridgeMaker: 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 *
 * 제공된 BridgeMaker 객체를 활용해 구현해야 한다.
 * BridgeMaker에 프로퍼티를 추가할 수 없다.
 * BridgeMaker의 파일 경로는 변경할 수 없다.
 * BridgeMaker의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.
 */

const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */

  makeBridge(size, generateRandomNumber) {
    const BRIDGE = [];
    for (let length = 0; length < size; length += 1) {
      const RANDOM_NUMBER = generateRandomNumber();
      const POSSIBLE_CELL = RANDOM_NUMBER === 1 ? 'U' : 'D';
      BRIDGE.push(POSSIBLE_CELL);
    }
    return BRIDGE;
  },
};

module.exports = BridgeMaker;
