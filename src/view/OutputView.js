const { print } = require('../utils/utils');
const {
  MESSAGE,
  LINE_BREAK,
  SHOW_GAME_RESULT,
  SHOW_RETRY_COUNT,
  STARTING_POINT,
  FINISHING_POINT,
  EDGE,
} = require('../utils/constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printMessage(message) {
    print(message);
  },

  printError(error) {
    print(error);
    print(LINE_BREAK);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(currBridge) {
    print(
      STARTING_POINT + currBridge.getUpperBridge().join(EDGE) + FINISHING_POINT
    );
    print(
      STARTING_POINT + currBridge.getLowerBridge().join(EDGE) + FINISHING_POINT
    );
    print(LINE_BREAK);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(GAME_RESULT, bridgeGame, currBridge) {
    print(MESSAGE.totalGameResult);
    this.printMap(currBridge);
    print(SHOW_GAME_RESULT(GAME_RESULT));
    print(SHOW_RETRY_COUNT(bridgeGame.getRetryingCount()));
  },
};

module.exports = OutputView;
