const { Console } = require("@woowacourse/mission-utils");
const Check = require("./Check");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (size) => {
      Check.checkBrideSize(size);
      const bridge = BridgeMaker.makeBridge(
        parseInt(size, 10),
        BridgeRandomNumberGenerator.generate
      );
      let movingList = [[], []];
      let numberOfAttempts = 1;
      this.readMoving(bridge, movingList, numberOfAttempts);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, movingList, attempts) {
    Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (moving) => {
        Check.checkMoving(moving);
        const bridgeGame = new BridgeGame();
        const result = bridgeGame.move(moving, bridge, movingList);
        if (result[0].includes("X") || result[1].includes("X")) {
          return this.readGameCommand(movingList, attempts, bridge);
        }
        if (result[0].length === bridge.length) {
          const SUCCESS = "성공";
          return OutputView.printResult(movingList, SUCCESS, attempts);
        }
        return this.readMoving(bridge, result, attempts);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(movingList, attempts, bridge) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (command) => {
        const RESTART_COMMAND = "R";
        const END_COMMAND = "Q";

        Check.checkCommand(command);

        if (command === RESTART_COMMAND) {
          attempts += 1;
          const bridgeGame = new BridgeGame();
          const resetMovingList = bridgeGame.retry(bridge);
          return this.readMoving(bridge, resetMovingList, attempts);
        }
        if (command === END_COMMAND) {
          const FAIL = "실패";
          OutputView.printResult(movingList, FAIL, attempts);
        }
      }
    );
  },
};

module.exports = InputView;
