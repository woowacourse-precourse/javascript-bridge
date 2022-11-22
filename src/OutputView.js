const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');
const OutputView = {
  printStart() {
    Console.print(MESSAGE.GAME_START);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
