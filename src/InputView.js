const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const MESSAGE = require('./utils/Message');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize (moveGame, createPattern) {
    Console.readLine(MESSAGE.inputBridgeLength, (size) => {
      try {
        createPattern(moveGame, size);
      } catch (error) {
        OutputView.printError(error);
        this.readBridgeSize(moveGame, createPattern);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving (retryGame, getNextStep) {
    Console.readLine(MESSAGE.inputChooseNextStep, (chooseStep) => {
      try {
        getNextStep(retryGame, chooseStep);
      } catch (error) {
        OutputView.printError(error);
        this.readMoving(retryGame, getNextStep);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand (retryGame, getRetry) {
    Console.readLine(MESSAGE.inputChooseRetry, (chooseRetry) => {
      try {
        getRetry(retryGame, chooseRetry);
      } catch (error) {
        OutputView.printError(error);
        this.readGameCommand(retryGame, getRetry);
      }
    });
  },
};

module.exports = InputView;
