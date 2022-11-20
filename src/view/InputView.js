const Console = require("../utils/Console");
const { INPUT } = require("./stringsUI");
const Validation = require("../utils/Validation");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGamePresenter) {
    Console.readLine(INPUT.GET_SIZE, (size) => {
      try {
        Validation.inputSize(size);
        bridgeGamePresenter.createBridgeModel(size);
      } catch (error) {
        bridgeGamePresenter.handleReadBridgeSizeError(error);
      }
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGamePresenter) {
    Console.readLine(INPUT.GET_MOVING, (selectedMove) => {
      try {
        Validation.inputMove(selectedMove);

        bridgeGamePresenter.move(selectedMove);
      } catch (error) {
        bridgeGamePresenter.handleReadMovingError(error);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGamePresenter) {
    Console.readLine(INPUT.GET_RETRY, (retry) => {
      try {
        Validation.inputRetry(retry);
        bridgeGamePresenter.checkRetryInput(retry);
      } catch (error) {
        bridgeGamePresenter.handleReadGameCommandError(error);
      }
    });
  },
};

module.exports = InputView;
