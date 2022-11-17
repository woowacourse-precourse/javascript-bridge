const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("../lib/BridgeRandomNumberGenerator");
const Message = require("../lib/Message");
const BridgeMaker = require("../BridgeMaker");
const Validate = require("../lib/Validate");
const ErrorHandler = require("../ErrorHandler")


const InputView = {

  readBridgeSize(bridgeSetter, nextCallBack, errorCallBack) {
    const generator = BridgeRandomNumberGenerator.generate
    MissionUtils.Console.readLine(Message.BRIDGE_SIZE, (size) => {
      const validTarget = () => Validate.bridgeLength(size)
      const doCallBack = () => bridgeSetter(BridgeMaker.makeBridge(size, generator.bind(this)))

      ErrorHandler.test(validTarget, doCallBack, errorCallBack)
      nextCallBack();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
