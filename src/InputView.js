const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const PlayerMovement = require('./PlayerMovement');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(move) {
    Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      // validation Check
      move(BridgeMaker.initializeBridge(size));
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, currentStage, retry) {
    console.log(`test : ${bridge.info[currentStage]}`);
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래 : D)\n', (move) => {
      const isPassed = PlayerMovement.playerAxisCalculate(move, bridge.info[currentStage], retry);
      if (!isPassed) return Console.close();
      if (bridge.size !== currentStage) {
        this.readMoving(bridge, currentStage + 1, retry);
        // OutputView.printMap(bridge.info[currentStage]);
      }
      if (bridge.size === currentStage) OutputView.printResult();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
