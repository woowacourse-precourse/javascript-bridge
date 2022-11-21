const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const ErrorMessages = require("./ErrorMessages");

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.bridge = [];
    this.bridgeResult = [[], []];
    this.count = 0;
    this.resultMessage = "성공";
  }

  play() {
    OutputView.startSentence();
    this.createBridge();
    this.process();
    this.result();
  }

  createBridge() {
    OutputView.lengthBridgeSentence();
    let size = InputView.readBridgeSize();
    this.sizeErr(size);
    this.bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }

  sizeErr(size) {
    try {
      if (size < 3 || size > 20 || isNaN(size)) throw ErrorMessages.numberSize;
    } catch (err) {
      OutputView.sizeError(err);
      size = InputView.readBridgeSize();
    }
  }

  process() {
    this.reset();
    for (let i = 0; i < this.bridge.length; i++) {
      OutputView.pickMoveSentence();
      let moving = InputView.readMoving();
      this.bridgeResultProcess(moving, i);
      OutputView.printMap(this.bridgeResult);
      i = this.retryQuestion(moving, i);
    }
  }

  bridgeResultProcess(moving, i) {
    this.moveErr(moving);
    this.bridgeOX(moving, i);
    this.bridgeBlank();
  }

  reset() {
    this.bridgeResult = [[], []];
    this.count++;
  }

  moveErr(moving) {
    try {
      if (moving !== "U" && moving !== "D") throw ErrorMessages.move;
    } catch (err) {
      OutputView.moveError(err);
      moving = InputView.readMoving();
    }
  }

  bridgeOX(moving, i) {
    if (moving === "U")
      this.bridgeResult[0].push(this.bridgeGame.move(moving, this.bridge[i]));
    else
      this.bridgeResult[1].push(this.bridgeGame.move(moving, this.bridge[i]));
  }

  bridgeBlank() {
    if (this.bridgeResult[0].length > this.bridgeResult[1].length)
      this.bridgeResult[1].push(" ");
    else this.bridgeResult[0].push(" ");
  }

  commandErr(command) {
    try {
      if (command !== "R" && command !== "Q") throw ErrorMessages.command;
    } catch (err) {
      OutputView.commandError(err);
      command = InputView.readGameCommand();
    }
  }

  retryQuestion(moving, i) {
    if (this.bridgeGame.move(moving, this.bridge[i]) === "X") {
      OutputView.retrySentence();
      let command = InputView.readGameCommand();
      this.commandErr(command);
      this.gameOrQuit(command, i);
      return this.bridge.length;
    } else return i;
  }

  gameOrQuit(command, i) {
    if (this.bridgeGame.retry(command) === "ReGame") this.process();
    else this.resultMessage = "실패";
  }

  result() {
    OutputView.printResult(this.bridgeResult, this.count, this.resultMessage);
  }
}

module.exports = App;
