/**
 * 제공된 BridgeMaker 객체를 활용해 구현해야 한다.
 * BridgeMaker에 `프로퍼티`를 추가할 수 없다. 🙅‍♀️
 * BridgeMaker의 `파일 경로`는 변경할 수 없다. 🙅‍♀️
 * BridgeMaker의 메서드의 `시그니처(인자, 이름)`와 `반환 타입`은 변경할 수 없다. 🙅‍♀️
 */

const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

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
    return new Array(size)
      .fill(0)
      .map(() => generateRandomNumber())
      .map(number => (number === 1 ? 'U' : 'D'));
  },
};

module.exports = BridgeMaker;
