const { Console } = require("@woowacourse/mission-utils");

const BridgeGame = require("./BridgeGame");
const { toNumber } = require("./helpers/common");
const { generate } = require("./BridgeRandomNumberGenerator");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(INPUT_LENGTH, (input) => {
      isInvalidBridgeLength(input) && InputView.readBridgeSize();
      const bridgeSize = toNumber(input);

      const bridge = makeBridge(bridgeSize, generate);
      const bridgeGame = new BridgeGame(bridge);
      InputView.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_MOVE, (input) => {
      console.log(input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
