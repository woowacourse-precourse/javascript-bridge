const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const { GAME_MESSAGES, GAME_COMMAND } = require('../src/constant');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printGameStart() {
    Console.print(`${GAME_MESSAGES.START}`);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge) {
    let bridgePrint = '[';
    for (let i = 0; i < bridge.length; i++) {
      bridgePrint += bridge[i];
      if (i !== bridge.length - 1) bridgePrint += '|';
    }
    bridgePrint += ']';

    Console.print(bridgePrint);
  },

  printUpbridgeAndDownBridge(upBridge, downBridge) {
    this.printMap(upBridge);
    this.printMap(downBridge);
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    Console.print(`${GAME_MESSAGES.GAME_RESULT}`);
    OutputView.printUpbridgeAndDownBridge(
      bridgeGame.upBridge,
      bridgeGame.downBridge
    );
    if (bridgeGame.moveAvailable === GAME_COMMAND.MOVE_AVAILABLE)
      Console.print(`${GAME_MESSAGES.GAME_WIN}`);
    if (bridgeGame.moveAvailable === GAME_COMMAND.MOVE_UNAVAILABLE)
      Console.print(`${GAME_MESSAGES.GAME_LOSE}`);
    Console.print(`${GAME_MESSAGES.GAME_TRY}${bridgeGame.gameTry}`);
  },
};

module.exports = OutputView;
