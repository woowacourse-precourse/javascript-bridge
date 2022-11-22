const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const Validate = require('./utils/Validate');

const { Console } = require('@woowacourse/mission-utils');

class App {
  #bridgeGame;
  #bridgeSize;
  #bridge;
  #curBridge;
  #tryNum;
  #bridgeIndex;

  constructor() {
    this.#tryNum = 1;
    this.#bridgeIndex = 0;
  }

  play() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(size) {
    this.#bridgeSize = size;
    if (!this.validate(Validate.size, this.#bridgeSize))
      return this.getBridgeSize();
    this.#bridge = BridgeMaker.makeBridge(
      this.#bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.#bridgeGame = new BridgeGame(this.#bridge);
    this.getMove();
  }

  getMove() {
    InputView.readMoving(this.doGame.bind(this));
  }

  doGame(moveInput) {
    if (!this.validate(Validate.move, moveInput)) return this.getMove();
    this.#curBridge = this.#bridgeGame.move(moveInput, this.#bridgeIndex);
    OutputView.printMap(this.#curBridge);
    this.isAbleToMove(moveInput);
    this.isEndOfBridge();
    OutputView.printResult('성공', this.#curBridge, this.#tryNum);
    this.end();
  }

  isAbleToMove(moveInput) {
    if (!this.#bridgeGame.canMove(moveInput, this.#bridgeIndex)) {
      return this.getRetry();
    }
  }

  isEndOfBridge() {
    if (this.#bridgeIndex !== this.#bridgeSize - 1) {
      this.#bridgeIndex += 1;
      return this.getMove();
    }
  }

  getRetry() {
    InputView.readGameCommand(this.doRetry.bind(this));
  }

  doRetry(retryInput) {
    if (!this.validate(Validate.retry, retryInput)) return this.getRetry();
    this.judgeRetryResponse(retryInput);
  }

  judgeRetryResponse(retryInput) {
    if (retryInput === 'R') {
      this.#bridgeIndex = 0;
      this.#tryNum += 1;
      this.#bridgeGame.retry();
      this.getMove();
    }
    if (retryInput === 'Q') {
      OutputView.printResult('실패', this.#curBridge, this.#tryNum);
      this.end();
    }
  }

  validate(callback, input) {
    try {
      callback(input);
      return true;
    } catch (e) {
      OutputView.printError(e.message);
      return false;
    }
  }

  end() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
