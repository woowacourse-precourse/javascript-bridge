const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGE = require("../lib/Message");
const CONSTANT = require("../lib/Constant");
const Validate = require("../lib/Validate");
const ErrorHandler = require("../ErrorHandler");

const InputView = {
  readBridgeSize(setBridge, nextCallBack, errorCallBack) {
    MissionUtils.Console.readLine(MESSAGE.BRIDGE_SIZE, (size) => {
      const target = () => Validate.bridgeLength(size);
      const doCallBack = () => setBridge(size);

      ErrorHandler.test(target, errorCallBack, doCallBack);
      nextCallBack();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(moveCallback, nextCallback, errorCallBack) {
    MissionUtils.Console.readLine(MESSAGE.BRIDGE_DIRECTION, (direction) => {
      const target = () => Validate.bridgeDirection(direction);
      const doCallBack = () => moveCallback(direction);

      ErrorHandler.test(target, errorCallBack, doCallBack);
      nextCallback();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(reset, printResult, errorCallBakc) {
    MissionUtils.Console.readLine(MESSAGE.REPLAY, (answer) => {
      const target = () => Validate.restart(answer);

      ErrorHandler.test(target, errorCallBakc);
      if (answer === CONSTANT.RETRY.REPLAY) reset();
      if (answer === CONSTANT.RETRY.QUIT) printResult();
    });
  },
};

module.exports = InputView;
