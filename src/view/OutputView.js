const { Console } = require("@woowacourse/mission-utils");
const CONSTANT = require('../constants.js');

const OutputView = {

  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.');
  }
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge) {
    const upperResult = '';
    const lowerResult = '';
    const { DIRECTION } = CONSTANT;
    bridge.currentPos.forEach(pos => {
      if (pos === DIRECTION.UP)
    })
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
