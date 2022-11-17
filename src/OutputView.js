const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * @param {string} upperPart // 다리의 윗부분
   * @param {string[]} lowerPart // 다리의 아랫부분
   */
  printMap(upperPart, lowerPart) {
    Console.print(`[ ${upperPart} ]\n[ ${lowerPart} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
