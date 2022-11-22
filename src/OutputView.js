const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, MOVING, RESULT } = require('./modules/Constants');
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
      if (index !== 0) {
        bridgeUpper += RESULT.LINE;
        bridgeLower += RESULT.LINE;
      }
      if (log === MOVING.UP) {
        bridgeLower += RESULT.SPACE;
        if (bridgeGame.bridge[index] === log) {
          bridgeUpper += RESULT.CORRECT;
        } else {
          bridgeUpper += RESULT.INCORRECT;
        }
      } else if (log === MOVING.DOWN) {
        bridgeUpper += RESULT.SPACE;
        if (bridgeGame.bridge[index] === log) {
          bridgeLower += RESULT.CORRECT;
        } else {
          bridgeLower += RESULT.INCORRECT;
        }
      }
    });
    bridgeUpper += RESULT.BRIDGE_END;
    bridgeLower += RESULT.BRIDGE_END;
    Console.print(bridgeUpper);
    Console.print(bridgeLower);
  },

  makeBridge(log, index, bridgeGame) {
    let temp = '';
    if (index !== 0) {
      temp += RESULT.LINE;
    }
    if (bridgeGame.bridge[index] === log) {
      temp += RESULT.CORRECT;
    } else {
      temp += RESULT.INCORRECT;
    }
    return temp;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    Console.print(MESSAGE.RESULT_NOTICE);
    Console.print(`${MESSAGE.IS_SUCCESS} ${bridgeGame.isWin() ? MESSAGE.SUCCESS : MESSAGE.FAIL}`);
    Console.print(`${MESSAGE.TRY_COUNT} ${bridgeGame.tryCount}`);
    Console.close();
  },

  printError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
