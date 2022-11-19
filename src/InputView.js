const { Console } = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
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
      Validation.isVaildBridgeSize(size);
      const bridge = BridgeMaker.makeBridge(
        size,
        BridgeRandomNumberGenerator.generate
      );
      let moveList = [[], []];
      this.readMoving(bridge, moveList);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, moveList) {
    Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (moving) => {
        Validation.isVaildMoving(moving);
        const bridgeGame = new BridgeGame();
        const checkContinue = bridgeGame.move(moving, bridge, moveList);
        if (checkContinue[0].includes("X") || checkContinue[1].includes("X")) {
          return this.readGameCommand(bridge);
        }
        return this.readMoving(bridge, checkContinue);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (command) => {
        Validation.isVaildCommand(command);
        // 재시작 커맨드
        if (command === "R") {
          const bridgeGame = new BridgeGame();
          const againMoveList = bridgeGame.retry();
          return this.readMoving(bridge, againMoveList);
        }
        if (command === "Q") {
          //종료 커맨드\\\
          Console.print("게임종료");
          Console.close();
        }
      }
    );
  },
};

module.exports = InputView;
