const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const InputView = require("./InputView");

class Process {
  constructor() {
    this.bridgeGame = [];
    this.count = 1;
    this.resultMessage = "성공";
  }

  play() {
    this.bridgeGame = new BridgeGame([], [[], []]);
    OutputView.startSentence();
    OutputView.lengthBridgeSentence();
    let size = InputView.readBridgeSize();
    this.bridgeGame.setBridge(this.bridgeGame.createBridge(size));
    this.process();
    this.result();
  }

  process() {
    for (let i = 0; i < this.bridgeGame.getBridge().length; i++) {
      OutputView.pickMoveSentence();
      let moving = InputView.readMoving();
      this.bridgeGame.setBridgeResult(this.bridgeGame.move(moving, i));
      OutputView.printMap(this.bridgeGame.getBridgeResult());
      this.restart();
    }
  }

  restart() {
    this.bridgeGame.setBridgeResult(this.bridgeGame.retry());
    if (this.bridgeGame.getBridgeResult() === [[], []]) {
      OutputView.retrySentence();
      this.command = InputView.readGameCommand();
      this.commandCheck();
    }
  }

  commandCheck() {
    if (this.command === "R") {
      this.count++;
      this.process();
    } else {
      this.resultMessage = "실패";
    }
  }

  result() {
    OutputView.printResult(
      this.bridgeGame.getBridgeResult(),
      this.count,
      this.resultMessage
    );
  }
}

module.exports = Process;
