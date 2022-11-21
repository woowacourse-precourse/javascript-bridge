const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const OutputView = require("../src/OutputView");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const BridgeGame = require("../src/BridgeGame");
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (number) => {
      try {
        this.checkPlayerInput(number);
        mainBridge = new BridgeGame();
        mainBridge.setBridge(
          BridgeMaker.makeBridge(number, BridgeRandomNumberGenerator)
        );
        this.readMoving();
        console.log(mainBridge.bridge);
      } catch {
        this.readBridgeSize();
      }
    });
  },

  checkPlayerInput(input) {
    try {
      this.checkisNum(input);
      this.checkInRange(input);
    } catch (e) {
      MissionUtils.Console.print(e);
      throw e;
    }
  },

  checkisNum(input) {
    if (!parseInt(input)) throw "[ERROR] 숫자를 입력하세요";
  },

  checkInRange(input) {
    if (3 > parseInt(input) || parseInt(input) > 20)
      throw "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
  },

  readMoving() {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요.(위: U 아래: D)\n",
      (input) => {
        try {
          this.checkPlayerMove(input);
          this.checkAndMove(input);
        } catch (e) {
          MissionUtils.Console.print(e);
          this.checkEndError(e);
        }
      }
    );
  },

  checkPlayerMove(input) {
    if (input !== "U" && input !== "D") {
      throw "[ERROR] U 혹은 D을 입력해라!!";
    }
  },

  checkAndMove(input) {
    try {
      mainBridge.move(input, mainBridge.getLocation());
      mainBridge.changeLocation();
      this.readMoving();
    } catch (e) {
      this.checkEndError(e);
    }
  },

  checkEndError(e) {
    if (e == 2) {
      this.readGameCommand();
    }
    if (e == 0) {
      this.readGameCommand();
    }
    this.readMoving();
  },

  readGameCommand() {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (input) => {
        try {
          this.checkRetryInput(input);
        } catch (e) {
          MissionUtils.Console.print(e);
          this.readGameCommand();
        }
      }
    );
  },

  checkRetryInput(input) {
    if (input !== "R" && input !== "Q") {
      throw "[ERROR] R 혹은 Q을 입력해라!!";
    }
  },

  chooseRetry(input) {
    if (input === "R") {
      mainBridge.retry();
    }
    if (input === "Q") {
    }
  },
};

module.exports = InputView;
