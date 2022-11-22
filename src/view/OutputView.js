const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants');

const OutputView = {
  output(message) {
    Console.print(message);
  },

  close() {
    Console.close();
  },

  printErrorMessage(errorMessage) {
    this.output(errorMessage);
  },

  printGameStart() {
    this.output(GAME_MESSAGE.start);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeMap) {
    this.output(bridgeMap);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result) {
    this.output(result);
    this.close();
  },
};

module.exports = OutputView;
