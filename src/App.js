const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const Validate = require('./utils/Validate');

const { Console } = require('@woowacourse/mission-utils');
const { init, retry, result } = require('./utils/constant');

class App {
  #bridgeGame;
  #bridge;
  #curBridge;
  #tryNum;
  #bridgeIndex;

  constructor() {
    this.#tryNum = init.TRY;
    this.#bridgeIndex = init.INDEX;
  }

  play() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(bridgeSize) {
    if (!this.validate(Validate.size, bridgeSize)) return this.getBridgeSize();
    this.#bridge = BridgeMaker.makeBridge(
      bridgeSize,
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
    OutputView.printResult(result.SUCCESS, this.#curBridge, this.#tryNum);
    this.end();
  }

  isAbleToMove(moveInput) {
    if (!this.#bridgeGame.canMove(moveInput, this.#bridgeIndex)) {
      return this.getRetry();
    }
  }

  isEndOfBridge() {
    if (this.#bridgeIndex !== init.END_OF_INDEX(this.#bridge.length)) {
      this.#bridgeIndex += init.INCREASE;
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
    if (retryInput === retry.RETRY) {
      this.#bridgeIndex = init.INDEX;
      this.#tryNum += init.TRY;
      this.#bridgeGame.retry();
      this.getMove();
    }
    if (retryInput === retry.QUIT) {
      OutputView.printResult(result.FAIL, this.#curBridge, this.#tryNum);
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
