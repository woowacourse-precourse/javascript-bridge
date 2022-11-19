const { Console } = require('@woowacourse/mission-utils');
const { generate } = require('./BridgeRandomNumberGenerator');
const { INPUT_MESSAGE } = require('./Constants/Message');
const { INPUT_RETRY } = require('./Constants/InputValues');
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
    Console.readLine(INPUT_MESSAGE.start, (size) => {
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
    Console.readLine(INPUT_MESSAGE.move, (move) => {
      // validation Check
      input.push(move);
      const pass = checkPlayerStatus.isPlayerPassed(move, gameInfo.bridge[input.length - 1]);
      const clear = checkPlayerStatus.isPlayerCleared(gameInfo.bridge.length, input.length, pass);
      const result = returnProcessedInput.start(input, pass);
      OutputView.printMap(result);

      // 수정 필요
      if (pass && !clear) this.readMoving(gameInfo, input, retry);
      if (clear) OutputView.printResult(gameInfo.retryCount, 1, result);
      if (!passe) retry(gameInfo, result);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(gameInfo, result, move) {
    Console.readLine(INPUT_MESSAGE.retry, (input) => {
      // validation Check
      if (input === INPUT_RETRY.restart) move(gameInfo);
      if (input === INPUT_RETRY.quit) OutputView.printResult(gameInfo.retryCount, 0, result);
    });
  },
};

module.exports = InputView;
