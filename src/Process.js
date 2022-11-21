const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const InputView = require("./InputView");

class Process {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.bridge = [];
    this.bridgeResult = [[], []];
    this.count = 1;
    this.resultMessage = "성공";
  }

  play() {
    OutputView.startSentence();
    OutputView.lengthBridgeSentence();
    let size = InputView.readBridgeSize();
    this.bridge = this.bridgeGame.createBridge(size);
    this.process();
    this.result();
  }

  process() {
    for (let i = 0; i < this.bridge.length; i++) {
      OutputView.pickMoveSentence();
      let moving = InputView.readMoving();
      this.bridgeResult = this.bridgeGame.move(moving, i);
      OutputView.printMap(this.bridgeResult);
      this.restart();
    }
  }

  restart() {
    this.bridgeResult = this.bridgeGame.retry();
    if (this.bridgeResult === [[], []]) {
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
    OutputView.printResult(this.bridgeResult, this.count, this.resultMessage);
  }
}

module.exports = Process;
