const { Console } = require("@woowacourse/mission-utils");
const Check = require("./Check");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
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
      this.readMoving(bridge, movingList);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, movingList) {
    Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (moving) => {
        Check.checkMoving(moving);
        const bridgeGame = new BridgeGame();
        const result = bridgeGame.move(moving, bridge, movingList);
        if (result[0].includes("X") || result[1].includes("X")) {
          return this.readGameCommand();
        }
        return this.readMoving(bridge, result);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (command) => {
        const RESTART_COMMAND = "R";
        const END_COMMAND = "Q";

        Check.checkCommand(command);

        if (command === RESTART_COMMAND) {
          // 재시도
        }
        if (command === END_COMMAND) {
          // 종료
        }
      }
    );
  },
};

module.exports = InputView;
