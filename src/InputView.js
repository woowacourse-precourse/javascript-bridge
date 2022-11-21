const { Console } = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { setBridge } = require("./BridgeGame");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine("다리의 길이를 입력해주세요.\n", (size) => {
      try {
        InputView.validateBridgeSize(Number(size));
        const bridge = makeBridge(size, generate);
        bridgeGame.setBridge(bridge);
        // InputView.readMoving(bridgeGame);
      } catch (error) {
        Console.print(error.message);
        InputView.readBridgeSize(bridgeGame);
      }
    });
  },

  validateBridgeSize(value) {
    const bridgeSizeReg = /^[3-9]{1}$|^[1]{1}[0-9]{1}$|20$/;
    if (!bridgeSizeReg.test(value)) {
      throw new Error(
        "[ERROR] 다리의 길이는 3 이상 20 이하의 숫자여야 합니다."
      );
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (move) => {
        try {
          InputView.validateMoving(move);
        } catch (error) {
          Console.print(error.message);
          InputView.readMoving(bridgeGame);
        }
      }
    );
  },

  validateMoving(value) {
    const movingReg = /^[U|D]$/;
    if (!movingReg.test(value)) {
      throw new Error("[ERROR] 위 칸은 U, 아래 칸은 D를 입력해 주세요.");
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
