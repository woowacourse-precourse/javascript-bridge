const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const Generator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const { printMap } = require("./OutputView");
const Console = MissionUtils.Console;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const game = new BridgeGame();

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (answer) => {
      this.bridge = BridgeMaker.makeBridge(answer, Generator);
      this.now = 0;
      this.retry = 1;

      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */

  readMoving() {
    Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D) \n",
      (answer) => {
        let check = game.move(answer, this.bridge, this.now);

        if (check == true && answer == "U") {
          OutputView.printMap("O", " ");
        }

        if (check == true && answer == "D") {
          OutputView.printMap(" ", "O");
        }

        if (check == false && answer == "U") {
          OutputView.printMap("X", " ");
          this.readGameCommand();
          return;
        }
        if (check == false && answer == "D") {
          OutputView.printMap(" ", "X");
          this.readGameCommand();
          return;
        }

        if (this.now >= this.bridge.length - 1) {
          Console.close();
          OutputView.printResult("성공");
          return;
        }

        this.now += 1;

        this.readMoving();
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (answer) => {
        if (answer == "R") {
          this.retry += 1;
          this.readMoving();
        }
        if (answer == "Q") {
          Console.close();
          OutputView.printResult("실패");
        }
      }
    );
  },
};

module.exports = InputView;
