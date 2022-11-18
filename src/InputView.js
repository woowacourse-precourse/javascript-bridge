const { Console } = require('@woowacourse/mission-utils');
const { generate } = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const checkPlayerStatus = require('./Utils/checkPlayerStatus');
const returnProcessedInput = require('./Utils/returnProcessedInput');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(move, retryCount) {
    Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      // validation Check
      const bridge = BridgeMaker.makeBridge(size, generate);
      const gameInfo = {
        bridge,
        retryCount,
      };
      move(gameInfo);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(gameInfo, input, retry) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래 : D)\n', (move) => {
      // validation Check
      input.push(move);
      const isPassed = checkPlayerStatus.isPlayerPassed(move, gameInfo.bridge[input.length - 1]);
      const isCleared = checkPlayerStatus.isPlayerCleared(gameInfo.bridge.length, input.length, isPassed);
      const result = returnProcessedInput.start(input, isPassed);
      OutputView.printMap(result);

      // 수정 필요
      if (isPassed && !isCleared) this.readMoving(gameInfo, input, retry);
      if (isCleared) OutputView.printResult(gameInfo.retryCount, 1, result);
      if (!isPassed) retry(gameInfo, result);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(gameInfo, result, move) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (input) => {
      // validation Check
      if (input === 'R') move(gameInfo);
      if (input === 'Q') OutputView.printResult(gameInfo.retryCount, 0, result);
    });
  },
};

module.exports = InputView;
