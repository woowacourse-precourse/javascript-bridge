const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, MOVING, RESULT } = require('./Message');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeGame) {
    let bridgeUpper = RESULT.BRIDGE_START;
    let bridgeLower = RESULT.BRIDGE_START;
    bridgeGame.movingLog.forEach((log, index) => {
      bridgeUpper += this.makeBridgeInner(index, bridgeGame, MOVING.UP);
      bridgeLower += this.makeBridgeInner(index, bridgeGame, MOVING.DOWN);
    });
    bridgeUpper += RESULT.BRIDGE_END;
    bridgeLower += RESULT.BRIDGE_END;
    Console.print(`${bridgeUpper}\n${bridgeLower}`);
  },

  makeBridgeInner(index, bridgeGame, direction) {
    let temp = '';
    const log = bridgeGame.movingLog[index];

    if (index !== 0) temp += RESULT.LINE;

    if (log === direction) temp += bridgeGame.bridge[index] === log ? RESULT.CORRECT : RESULT.INCORRECT;
    else temp += RESULT.SPACE;

    return temp;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    Console.print(MESSAGE.RESULT);
    Console.print(`${MESSAGE.WIN} ${bridgeGame.isWin() ? MESSAGE.SUCCESS : MESSAGE.FAIL}`);
    Console.print(`${MESSAGE.COUNT} ${bridgeGame.tryCount}`);
    Console.close();
  },

  printError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;