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
      Validation.inputSize(size);
      bridgeGamePresenter.createBridgeModel(size);
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGamePresenter) {
    Console.readLine(INPUT.GET_MOVING, (selectedMove) => {
      Validation.inputMove(selectedMove);
      bridgeGamePresenter.move(selectedMove);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGamePresenter) {
    Console.readLine(INPUT.GET_RETRY, (retry) => {
      Validation.inputRetry(retry);
      bridgeGamePresenter.checkRetry(retry);
    });
  },
};

module.exports = InputView;
