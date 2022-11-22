const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/BridgeGameMessage');
const {
  BRIDGE_UI,
  GAME_STATUS,
  NEW_LINE,
} = require('./constants/BridgeGameSetting');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(select) {
    Console.print(
      `${BRIDGE_UI.BRIDGE_START}${select.upper}${BRIDGE_UI.BRIDGE_SPACE}${BRIDGE_UI.BRIDGE_END}`
    );
    Console.print(
      `${BRIDGE_UI.BRIDGE_START}${select.lower}${BRIDGE_UI.BRIDGE_SPACE}${BRIDGE_UI.BRIDGE_END}${NEW_LINE}`
    );
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(select, count, result) {
    Console.print(MESSAGE.PROCESS.GAME_RESULT);
    this.printMap(select);
    if (result === GAME_STATUS.GAME_SUCCESS) {
      Console.print(
        MESSAGE.PROCESS.SUCCESS_OR_FAILURE + GAME_STATUS.GAME_SUCCESS
      );
    }
    if (result === GAME_STATUS.GAME_FAILURE) {
      Console.print(
        MESSAGE.PROCESS.SUCCESS_OR_FAILURE + GAME_STATUS.GAME_FAILURE
      );
    }
    Console.print(MESSAGE.PROCESS.NUMBER_OF_ATTEMPTS + count);
  },
};

module.exports = OutputView;
