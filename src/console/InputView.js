const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("../lib/BridgeRandomNumberGenerator");
const Validate = require("../lib/Validate");
const Message = require("../lib/Message");
const BridgeMaker = require("../BridgeMaker");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(setBridge, printer) {
    const generator = BridgeRandomNumberGenerator.generate;
    MissionUtils.Console.readLine(Message.BRIDGE_SIZE, (size) => {
      Validate.errorCatch(()=>Validate.bridgeLength(size),);
      setBridge(BridgeMaker.makeBridge(size, generator));
      printer();
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
