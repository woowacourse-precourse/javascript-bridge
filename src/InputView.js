const { Console } = require("@woowacourse/mission-utils");
const BridgeSizeValid = require("./InputValid.js");
const BridgeMaker = require("./BridgeMaker.js")
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js")
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (answer => {
      const inputSize = new BridgeSizeValid(answer)
      const bridge = new BridgeMaker;
      bridge.makeBridge(inputSize, BridgeRandomNumberGenerator);
    }))
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
