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
      this.stringValidation(Number(answer));
      this.rangeValidation(Number(answer));
      this.bridge = BridgeMaker.makeBridge(answer, Generator.generate);
      this.now = 0;
      this.retry = 1;
      this.readMoving();
    });
  },

  stringValidation(answer) {
    if (isNaN(answer)) {
      Console.print("[ERROR] 다리 길이는 숫자여야 합니다. 다시 입력해 주세요!");
      this.readBridgeSize();
    }



  /**
   * 사용자가 이동할 칸을 입력받는다.
   */

  checkSuccess(check) {
    if (check == "upSuccess") {
      OutputView.printMap("O", " ", "성공");
    }
    if (check == "downSuccess") {
      OutputView.printMap(" ", "O", "성공");
    }
  },

  checkFail(check) {
    if (check == "upFail") {
      OutputView.printMap("X", " ", "실패");
      this.readGameCommand();
      return;
    }
    if (check == "downFail") {
      OutputView.printMap(" ", "X", "실패");
      this.readGameCommand();
      return;
    }
  },

  checkFailAndSuccess(check) {
    this.checkSuccess(check);
    this.checkFail(check);
  },

  readMoving() {
    Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D) \n",
      (answer) => {
        this.udValidation(answer);

        let check = game.move(answer, this.bridge, this.now);
        this.checkFailAndSuccess(check);
        if (check != "downFail" && check != "upFail") this.now += 1;
        this.processEnd();
        if (!this.end) this.readMoving();
      }
    );
  },

  processEnd() {
    if (this.now >= this.bridge.length) {
      Console.close();
      OutputView.printResult("성공", this.retry);
      this.end = true;
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */

  //game.retry(answer) -> if (answer == "R" return true)
  readGameCommand() {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (answer) => {
        const retrycheck = game.retry(answer);
        this.retryCommand(retrycheck);
      }
    );
  },

  retryCommand(retrycheck) {
    if (retrycheck) {
      this.retry += 1;
      this.readMoving();
    }
    if (!retrycheck) {
      Console.close();
      OutputView.printResult("실패", this.retry);
    }
  },
};

module.exports = InputView;
