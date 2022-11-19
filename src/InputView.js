const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./Constants/Message');
const { INPUT_RETRY, INPUT_TYPE } = require('./Constants/InputValues');
const { checkBridgeSize, checkCorrectCharactor, checkCorrectCommand } = require('./Utils/Validation');
const { generate } = require('./BridgeRandomNumberGenerator');
const { makeBridge } = require('./BridgeMaker');
const { printMap, printResult } = require('./OutputView');
const { isPlayerPassed, isPlayerCleared } = require('./Utils/checkPlayerStatus');
const { getProcessedInput } = require('./Utils/returnProcessedInput');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(move, retryCount) {
    Console.readLine(INPUT_MESSAGE.start, (size) => {
      this.sizeValidation(size);
      const bridge = makeBridge(size, generate);
      const gameInfo = {
        bridge,
        retryCount,
      };
      move(gameInfo);
    });
  },

  sizeValidation(size) {
    checkBridgeSize(size);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(gameInfo, input, retry) {
    Console.readLine(INPUT_MESSAGE.move, (move) => {
      this.moveValidation(move, INPUT_TYPE.move);
      input.push(move);
      const pass = isPlayerPassed(move, gameInfo.bridge[input.length - 1]);
      const clear = isPlayerCleared(gameInfo.bridge.length, input.length, pass);
      const result = getProcessedInput(input, pass);
      printMap(result);

      // 수정 필요
      if (pass && !clear) this.readMoving(gameInfo, input, retry);
      if (clear) printResult(gameInfo.retryCount, 1, result);
      if (!pass) retry(gameInfo, result);
    });
  },

  moveValidation(move, type) {
    checkCorrectCharactor(move);
    checkCorrectCommand(move, type);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(gameInfo, result, move) {
    Console.readLine(INPUT_MESSAGE.retry, (command) => {
      this.retryValidation(command, INPUT_TYPE.retry);
      if (command === INPUT_RETRY.restart) move(gameInfo);
      if (command === INPUT_RETRY.quit) printResult(gameInfo.retryCount, 0, result);
    });
  },

  retryValidation(command, type) {
    checkCorrectCharactor(command);
    checkCorrectCommand(command, type);
  },
};

module.exports = InputView;
