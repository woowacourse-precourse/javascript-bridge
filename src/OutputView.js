const { Console } = require('@woowacourse/mission-utils');
const BridgePartsController = require('./BridgePartsController');
const { OUTPUT_MESSAGE, RESULT_MESSAGE } = require('./Constants/message');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임 시작을 알리는 문구를 출력한다.
   */
  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(game) {
    const controller = new BridgePartsController();
    controller.createMap(game);
    controller.closeBridge();

    Console.print(controller.getUpperBridge());
    Console.print(controller.getDownerBridge());
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(game) {
    Console.print(OUTPUT_MESSAGE.result);
    OutputView.printMap(game);
    Console.print(RESULT_MESSAGE.result(game.getGameResult()));
    Console.print(RESULT_MESSAGE.attempt_count(game.getRetryCount()));
    Console.close();
  },
};

module.exports = OutputView;
