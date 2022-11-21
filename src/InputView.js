const { Console } = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (size) => {
      const error = Validation.isVaildBridgeSize(size);
      if (error) {
        this.readBridgeSize();
      } else {
        const bridge = BridgeMaker.makeBridge(
          size,
          BridgeRandomNumberGenerator.generate
        );
        let attemptCount = 1;
        let moveList = [[], []];
        this.readMoving(bridge, moveList, attemptCount);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, moveList, attempt) {
    Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (moving) => {
        const error = Validation.isVaildMoving(moving);
        if (error) return this.readMoving(bridge, moveList, attempt);

        const bridgeGame = new BridgeGame();
        const checkContinue = bridgeGame.move(moving, bridge, moveList);
        if (checkContinue[0].includes("X") || checkContinue[1].includes("X"))
          this.readGameCommand(bridge, attempt, moveList);
        else if (bridge.length === checkContinue[0].length)
          OutputView.printResult("성공", attempt, moveList);
        else this.readMoving(bridge, checkContinue, attempt);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, attempt, moveList) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (command) => {
        const error = Validation.isVaildCommand(command);
        if (error) return this.readGameCommand(bridge, attempt, moveList);

        if (command === "R") {
          attempt++;
          const bridgeGame = new BridgeGame();
          const againMoveList = bridgeGame.retry();
          return this.readMoving(bridge, againMoveList, attempt);
        }
        if (command === "Q") {
          OutputView.printResult("실패", attempt, moveList);
        }
      }
    );
  },
};

module.exports = InputView;
