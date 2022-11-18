const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const checkPlayerMovement = require('./checkPlayerMovement');
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
      const isPassed = checkPlayerMovement.isPlayerPassed(move, bridge.info[currentStage], retry);
      const isCleared = checkPlayerMovement.isPlayerCleared(bridge.size, currentStage);
      if (!isPassed) retry(bridge); // 틀렸을 때
      if (isCleared) OutputView.printResult(true); // 클리어 했을 때
      this.readMoving(bridge, currentStage + 1, retry); // 둘다 아닐 때
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(Bridge, move) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q\n)', (input) => {
      if (input === 'R') move(Bridge);
      if (input === 'Q') OutputView.printResult(false);
    });
  },
};

module.exports = InputView;
