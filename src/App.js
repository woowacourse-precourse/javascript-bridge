const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Checker = require("./Checker");
const Error = require("./Error");

class App {
  #tryCount;
  #game;

  constructor() {
    this.#tryCount = 1;
  }

  play() {
    OutputView.printGameStart();
    this.readBridgeSize();
  }

  readBridgeSize() {
    InputView.readBridgeSize((input) => {
      if (Error.isThrow(Checker.bridgeSize, input)) {
        this.makeBridge(input);
        return;
      }
      this.readBridgeSize();
    });
  }

  makeBridge(size) {
    this.makeGame(size);
    this.moveAfterValidation();
  }

  makeGame(size) {
    const bridge = BridgeMaker.makeBridgeMain(Number(size));
    this.#game = new BridgeGame(bridge);
  }

  moveAfterValidation() {
    InputView.readMoving((select) => {
      if (Error.isThrow(Checker.select, select)) {
        this.startMove(select);
        return;
      }
      this.moveAfterValidation();
    });
  }

  startMove(select) {
    if (this.#game.checkCorrectSelect(select)) {
      this.#game.move();
      this.printCurrentBridge("성공");
      this.checkIsComplete();
      return;
    }
    this.printCurrentBridge("실패");
    this.readFailedGameCommand();
  }

  printCurrentBridge(result) {
    let currentBridge = this.#game.getSuccessBridge();
    if (result === "실패") {
      currentBridge = this.#game.getFailureBridge(currentBridge);
    }
    OutputView.printMap(currentBridge);
  }

  checkIsComplete() {
    if (this.#game.checkIsComplete()) {
      this.resultGame("성공");
      return;
    }
    this.moveAfterValidation();
  }

  readFailedGameCommand() {
    InputView.readGameCommand((input) => {
      if (Error.isThrow(Checker.finalGame, input)) {
        this.failureGame(input);
        return;
      }
      this.readFailedGameCommand();
    });
  }

  failureGame(input) {
    if (input === "R") {
      this.replay();
      return;
    }
    this.resultGame("실패");
  }

  resultGame(result) {
    Console.print("\n최종 게임 결과");
    this.printCurrentBridge(result);
    OutputView.printResult(result, this.#tryCount);
    this.end();
  }

  end() {
    Console.close();
  }

  replay() {
    this.#tryCount += 1;
    this.#game.retry();
    this.moveAfterValidation();
  }
}

module.exports = App;
const app = new App();
app.play();
