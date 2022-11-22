const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const OutputView = require("../src/OutputView");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const BridgeGame = require("../src/BridgeGame");
const InputView = {
  MAINBRIDGE: new BridgeGame(),
  BRIGDETEXT: "다리의 길이를 입력해주세요.\n",
  MOVETEXT: "이동할 칸을 선택해주세요. (위: U 아래: D)\n",
  RETRYTEXT: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",

  readBridgeSize() {
    MissionUtils.Console.readLine(this.BRIGDETEXT, (number) => {
      try {
        this.checkPlayerInput(number);
        this.makeBridge(number);
        this.readMoving();
      } catch {
        this.readBridgeSize();
      }
    });
  },

  makeBridge(number) {
    this.MAINBRIDGE.setBridge(
      BridgeMaker.makeBridge(number, BridgeRandomNumberGenerator.generate)
    );
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
    MissionUtils.Console.readLine(this.MOVETEXT, (input) => {
      try {
        this.checkPlayerMove(input);
        this.checkAndMove(input);
      } catch (e) {
        this.checkifEnd();
      }
    });
  },

  checkifEnd(e) {
    this.readMoving();
    if (e === 3) {
      MissionUtils.Console.close();
    }
  },

  checkPlayerMove(input) {
    if (input !== "U" && input !== "D") {
      throw "[ERROR] U 혹은 D을 입력해라!!";
    }
  },

  printRight(input) {
    let tmplocation = this.MAINBRIDGE.getLocation();
    tmpbridge = this.MAINBRIDGE.getBridge();
    OutputView.printRight(input, tmplocation - 1);
  },

  printWrong(input) {
    let tmplocation = this.MAINBRIDGE.getLocation();
    tmpbridge = this.MAINBRIDGE.getBridge();
    OutputView.printWrong(input, tmplocation - 1);
  },

  checkAndMove(input) {
    try {
      this.MAINBRIDGE.move(input, this.MAINBRIDGE.getLocation());
      this.MAINBRIDGE.changeLocation();
      this.printRight(input);
      this.readMoving();
    } catch (e) {
      this.checkifEnd(e, input);
    }
  },

  checkifEnd(e, input) {
    if (e == 3) {
      this.printRightEnd(input);
      return e;
    }
    if (e == 0) {
      this.printWrongEnd(input);
      this.readGameCommand();
    }
    this.readMoving();
  },

  printRightEnd(input) {
    this.MAINBRIDGE.changeLocation();
    this.printRight(input);
    OutputView.printResult(this.MAINBRIDGE.getRetry(), true);
    MissionUtils.Console.close();
  },

  printWrongEnd(input) {
    this.MAINBRIDGE.changeLocation();
    this.printWrong(input);
  },

  readGameCommand() {
    MissionUtils.Console.readLine(this.RETRYTEXT, (input) => {
      try {
        this.chooseRetry(input);
      } catch (e) {
        this.readGameCommand();
      }
    });
  },

  chooseRetry(input) {
    this.checkRetryInput(input);
    if (input === "R") {
      this.retry();
    }
    if (input === "Q") {
      this.finish();
    }
  },

  checkRetryInput(input) {
    if (input !== "R" && input !== "Q") throw "[ERROR] R 혹은 Q을 입력해라!!";
  },

  retry() {
    this.MAINBRIDGE.retry();
    OutputView.reset();
    this.readMoving();
  },

  finish() {
    OutputView.printResult(this.MAINBRIDGE.getRetry(), false);
    MissionUtils.Console.close();
  },
};

module.exports = InputView;
