const { Console } = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { printResult } = require("./OutputView");

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
        InputView.readMoving(bridgeGame);
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
      (answer) => {
        try {
          InputView.validateMoving(answer);
          bridgeGame.move(answer);
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
  readGameCommand(bridgeGame) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (answer) => {
        try {
          InputView.validateGameCommand(answer);
          InputView.judgeGameCommand(answer, bridgeGame);
        } catch (error) {
          Console.print(error.message);
          InputView.readGameCommand(bridgeGame);
        }
      }
    );
  },

  validateGameCommand(value) {
    const movingReg = /^[R|Q]$/;
    if (!movingReg.test(value)) {
      throw new Error("[ERROR] 재시도는 R, 종료는 Q를 입력해 주세요.");
    }
  },

  judgeGameCommand(command, bridgeGame) {
    if (command === "R") {
      bridgeGame.retry();
    }
    if (command === "Q") {
      printResult(bridgeGame, "fail");
    }
  },
};

module.exports = InputView;
