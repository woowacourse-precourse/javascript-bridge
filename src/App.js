const { Console } = require('@woowacourse/mission-utils');
const { GAME_MSG, SELECT } = require('./constant');

const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validate = require('./Validate');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    this.startGame();
  }

  startGame() {
    Console.print(GAME_MSG.START);
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this.createBridge.bind(this));
  }

  createBridge(size) {
    Console.print('');
    this.checkSize(size);
    const bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate,
    );
    this.bridgeGame.setBridge(bridge);
    this.getMoving();
  }

  checkSize(size) {
    try {
      Validate.size(size);
    } catch (e) {
      Console.print(e.message);
      return this.getBridgeSize();
    }
  }

  getMoving() {
    InputView.readMoving(this.checkMove.bind(this));
  }

  crossingBridge(move) {
    this.bridgeGame.isSuccess(move) ? this.success(move) : this.fail(move);
    if (this.bridgeGame.isEnd(move)) {
      return OutputView.printResult(
        this.bridgeGame.getMap(),
        this.bridgeGame.getResult(),
      );
    }
    this.getMoving();
  }

  checkMove(move) {
    try {
      Validate.move(move);
      this.crossingBridge(move);
    } catch (e) {
      Console.print(e.message);
      return this.getMoving();
    }
  }

  success(move) {
    this.bridgeGame.success(move);
    OutputView.printMap(this.bridgeGame.getMap());
  }

  fail(move) {
    this.bridgeGame.fail(move);
    OutputView.printMap(this.bridgeGame.getMap());
    return this.askRetryOrEnd();
  }

  askRetryOrEnd() {
    InputView.readGameCommand(this.retryOrEnd.bind(this));
  }

  retryOrEnd(input) {
    this.checkretryOrEndInput(input);
    if (input === SELECT.RETRY) return this.retryGame();
    if (input === SELECT.QUIT) return this.endGame();
  }

  checkretryOrEndInput(input) {
    try {
      Validate.retryOrEndInput(input);
    } catch (e) {
      Console.print(e.message);
      this.askRetryOrEnd();
    }
  }

  retryGame() {
    this.bridgeGame.retry();
    this.getMoving();
  }

  endGame() {
    OutputView.printResult(
      this.bridgeGame.getMap(),
      this.bridgeGame.getResult(),
    );
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
