const { Console } = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { checkBridgeSize } = require("./Validation");

const InputView = {
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.", (size) => {
      checkBridgeSize(size);
      const bridge = makeBridge(size, generate);
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
