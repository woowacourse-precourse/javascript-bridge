import Console from "@woowacourse/mission-utils";
import BridgeGame from "./BridgeGame";
import {
  validateBridgeLength,
  validateDirection,
  validateCommand,
} from "./Exceptions";
import OutputView from "./OutputView";

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", function (length) {
      validateBridgeLength(length);
      const bridgeGame = new BridgeGame(length);
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      function (direction) {
        validateDirection(direction);
        const isFinish = bridgeGame.move(direction);
        OutputView.printMap(bridgeGame.board);
        if (isFinish) {
          OutputView.printResult();
          this.readGameCommand(bridgeGame);
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      function (command) {
        validateCommand(command);
        this.executeCommand(command, bridgeGame);
      }
    );
  },

  executeCommand(command, bridgeGame) {
    if (command === "R") {
      bridgeGame.retry();
      this.readBridgeSize();
    } else if (command === "Q") Console.close();
  },
};

module.exports = InputView;
