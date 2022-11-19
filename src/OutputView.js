const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  // 게임 시작 문구 출력
  printStart() {
    Console.print(MESSAGE.START);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(userBridge) {
    const MAP_UP = `[ ${userBridge[0].join(' | ')} ]`;
    const MAP_DOWN = `[ ${userBridge[1].join(' | ')} ]`;
    Console.print(MAP_UP);
    Console.print(MAP_DOWN);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame, result) {
    Console.print(MESSAGE.RESULT);
    this.printMap(bridgeGame.getUserBridge());
    Console.print(`게임 성공 여부: ${result}`);
    Console.print(`총 시도한 횟수: ${bridgeGame.getAttempts()}`);
    Console.close();
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
