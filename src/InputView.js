const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const checkPlayerStatus = require('./Utils/checkPlayerStatus');
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
      const bridge = BridgeMaker.initializeBridge(size);
      console.log(bridge);
      move(bridge);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, input, retry) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래 : D)\n', (move) => {
      // validation Check
      input.push(move);
      const isPassed = checkPlayerStatus.isPlayerPassed(move, bridge.info[input.length - 1]);
      const isCleared = checkPlayerStatus.isPlayerCleared(Number(bridge.size), input.length, isPassed);
      OutputView.printMap(input, isPassed);
      if (isPassed && !isCleared) this.readMoving(bridge, input, retry);
      if (isCleared) OutputView.printResult(1);
      if (!isPassed) retry(bridge);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, move) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (input) => {
      // validation Check
      if (input === 'R') move(bridge);
      if (input === 'Q') OutputView.printResult(0);
    });
  },
};

module.exports = InputView;
