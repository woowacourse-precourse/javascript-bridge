const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { command } = require('./utils/message');
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

  constructor() {
    this.#tryNum = 1;
    this.bridgeIndex = 0;
  }

  play() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  async getBridgeSize() {
    this.#bridgeSize = await InputView.readBridgeSize();
    this.setBridge();
  }

  setBridge() {
    if (!this.validateBridgeSize()) return this.getBridgeSize();
    this.#bridge = BridgeMaker.makeBridge(
      this.#bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.#bridgeGame = new BridgeGame(this.#bridge);
    this.getMove();
  }

  async getMove() {
    const moveInput = await InputView.readMoving();
    this.doGame(moveInput);
  }

  doGame(moveInput) {
    if (!this.validateMove(moveInput)) return this.getMove();
    // 현재까지 건넌 다리 만들기
    this.#curBridge = this.#bridgeGame.makeCurBridge(
      moveInput,
      this.bridgeIndex
    );
    OutputView.printMap(this.#curBridge);
    // 건널 수 없다면
    if (!this.#bridgeGame.move(moveInput, this.bridgeIndex)) {
      return this.getRetry();
    }
    // 다리를 끝까지 건너지 않았다면
    if (this.bridgeIndex !== this.#bridgeSize - 1) {
      this.bridgeIndex += 1;
      return this.getMove();
    }

    OutputView.printResult('성공', this.#curBridge, this.#tryNum);
    this.end();
  }

  async getRetry() {
    const retryInput = await InputView.readGameCommand();
    this.doRetry(retryInput);
  }

  doRetry(retryInput) {
    if (!this.validateRetry(retryInput)) return this.getRetry();
    if (retryInput === 'R') {
      this.bridgeIndex = 0;
      this.#tryNum += 1;
      this.#bridgeGame.retry();
      this.getMove();
    }
    if (retryInput === 'Q') {
      OutputView.printResult('실패', this.#curBridge, this.#tryNum);
      this.end();
    }
  }

  validateBridgeSize() {
    try {
      Validate.size(parseInt(this.#bridgeSize));
      return true;
    } catch (e) {
      OutputView.printError(e.message);
      return false;
    }
  }

  validateMove(moveInput) {
    try {
      Validate.move(moveInput);
      return true;
    } catch (e) {
      OutputView.printError(e.message);
      return false;
    }
  }

  validateRetry(retryInput) {
    try {
      Validate.retry(retryInput);
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
