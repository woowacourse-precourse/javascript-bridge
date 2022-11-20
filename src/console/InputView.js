const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("../lib/Message");
const Constant = require("../lib/Constant");
const Validate = require("../lib/Validate");
const ErrorHandler = require("../ErrorHandler");

const InputView = {
  readBridgeSize(setBridge, nextCallBack, errorCallBack) {
    MissionUtils.Console.readLine(Message.BRIDGE_SIZE, (size) => {
      const target = () => Validate.bridgeLength(size);
      const doCallBack = () => setBridge(size);

      ErrorHandler.test(target, errorCallBack, doCallBack);
      nextCallBack();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(moveCallback, printCallback, errorCallBack) {
    MissionUtils.Console.readLine(Message.BRIDGE_DIRECTION, (direction) => {
      const target = () => Validate.bridgeDirection(direction);
      const doCallBack = () => moveCallback(direction);

      ErrorHandler.test(target, errorCallBack, doCallBack);
      printCallback();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(reset, printResult, errorCallBakc) {
    MissionUtils.Console.readLine(Message.REPLAY, (answer) => {
      const target = () => Validate.restart(answer);

      ErrorHandler.test(target, errorCallBakc);
      if (answer === Constant.RETRY.REPLAY) reset();
      if (answer === Constant.RETRY.QUIT) printResult();
    });
  },
};

module.exports = InputView;
