const {Console} = require("@woowacourse/mission-utils");
const Message = require("./Message");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const ErrorHandler = require("./ErrorHandler");
const BridgeGame = require("./BridgeGame");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  bridgeGame: new BridgeGame(),
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(`${Message.INPUT_MESSAGE.BRIDGE_SIZE_TEXT}\n`, (size) => {
      if(ErrorHandler.readBridgeSizeErrorHandler(size)) {
        Console.close();
      }
      else{
        let idx = 0;
        let count = 1;
        const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
        const currentBridge = [[], []];
        this.readMoving(bridge, currentBridge, idx, count);
      }
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, currentBridge, idx, count) {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, currentBridge, idx, count, move) {},
  
};
module.exports = InputView;
