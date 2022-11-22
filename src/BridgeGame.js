const Validate = require("./utils/Validate");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #tryCnt;
  #currentIdx;
  #isPlaying;

  constructor(bridge) {
    this.tryCnt = 1;
    this.bridge = bridge;
    this.isPlaying = true;
    this.isClear = false;
    this.currentIdx = -1;
    this.bridgeStatics = [];
  }

  gameController() {
    this.currentIdx++;

    if (this.isPlaying) {
      this.move();
    }
    if (!this.isPlaying) {
      this.gameOver();
    }
  }

  move() {
    InputView.readMoving((result) => {
      try {
        Validate.moveInputValidate(result);
        this.gameCheck(result);
      } catch (e) {
        MissionUtils.Console.print(e);
        this.move();
      }
    });
  }

  retry() {
    this.tryCnt++;
    this.currentIdx -= 2;
    this.isPlaying = true;
    this.bridgeStatics[0].pop();
    this.bridgeStatics[1].pop();

    this.gameController();
  }

  gameOver() {
    if (this.isClear === true && this.isPlaying === false) {
      OutputView.printResult(this.bridgeStatics, true, this.tryCnt);
      return;
    }

    this.inputGameResume();
  }
  inputGameResume() {
    InputView.readGameCommand((answer) => {
      try {
        Validate.resumeGameValidate(answer);
        this.resumeCheck(answer);
      } catch (e) {
        MissionUtils.Console.print(e);
        this.inputGameResume();
      }
    });
  }

  resumeCheck(answer) {
    if (answer === "R") {
      this.retry();
    }
    if (answer === "Q") {
      OutputView.printResult(this.bridgeStatics, false, this.tryCnt);
    }
  }

  gameCheck(direction) {
    if (direction === this.bridge[this.currentIdx]) {
      this.correctAnswer(direction);
    } else {
      this.wrongAnswer(direction);
    }

    this.gameController();
  }

  correctAnswer(direction) {
    this.makeGameStatus(direction, true);
    if (this.currentIdx === this.bridge.length - 1) {
      this.isClear = true;
      this.isPlaying = false;
    }
  }

  wrongAnswer(direction) {
    this.makeGameStatus(direction, false);
    this.isPlaying = false;
  }

  makeGameStatus(direction, isCorrect) {
    if (direction === "U") this.makeUpBridge(isCorrect);
    if (direction === "D") this.makeDownBridge(isCorrect);
    OutputView.printMap(this.bridgeStatics);
  }

  makeUpBridge(isCorrect) {
    if (isCorrect) {
      this.bridgeStatics[0] = (this.bridgeStatics[0] || []).concat(["O"]);
      this.bridgeStatics[1] = (this.bridgeStatics[1] || []).concat([" "]);
      return;
    }
    if (!isCorrect) {
      this.bridgeStatics[0] = (this.bridgeStatics[0] || []).concat(["X"]);
      this.bridgeStatics[1] = (this.bridgeStatics[1] || []).concat([" "]);
    }
  }
  makeDownBridge(isCorrect) {
    if (isCorrect) {
      this.bridgeStatics[0] = (this.bridgeStatics[0] || []).concat([" "]);
      this.bridgeStatics[1] = (this.bridgeStatics[1] || []).concat(["O"]);
      return;
    }
    if (!isCorrect) {
      this.bridgeStatics[0] = (this.bridgeStatics[0] || []).concat([" "]);
      this.bridgeStatics[1] = (this.bridgeStatics[1] || []).concat(["X"]);
    }
  }
}

module.exports = BridgeGame;
