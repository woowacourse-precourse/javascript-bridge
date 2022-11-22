const Validate = require("./utils/Validate");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
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
    if (this.isPlaying) {
      this.move();
    }
    if (!this.isPlaying) {
      this.gameOver();
    }
    this.currentIdx++;
  }

  move() {
    return new Promise((resolve, reject) => {
      const direction = InputView.readMoving().then((result) => {
        Validate.moveInputValidate(result);
        this.gameCheck(result);
      });
    });
  }

  async retry() {
    this.tryCnt++;
    this.currentIdx -= 2;
    this.isPlaying = true;
    this.bridgeStatics[0].pop();
    this.bridgeStatics[1].pop();

    this.gameController();
  }

  async gameOver() {
    if (this.isClear && !this.isPlaying) return this.gameClear();
    const goGame = await InputView.readGameCommand();
    if (goGame === "R") {
      this.retry();
    }
    if (goGame === "Q") {
      OutputView.printResult(this.bridgeStatics, false, this.tryCnt);
    }
  }

  async gameCheck(direction) {
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

  gameClear() {
    OutputView.printResult(this.bridgeStatics, true, this.tryCnt);
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
