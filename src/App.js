const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const makePrintBridge = require('./utils/makePrintBridge');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const validCheck = require('./utils/validCheck');
const { ERROR_MESSAGE } = require('./constants/constants');

class App {
  #myBridge;

  play() {
    try {
      OutputView.gameStart();
      this.getBridgeLength();
    } catch (err) {
      OutputView.unExceptedError();
      return this.play();
    }
  }

  getBridgeLength() {
    InputView.readBridgeSize((input) => {
      try {
        if (!validCheck.bridgeLength(input))
          throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
        return this.makeMyBridge(input);
      } catch (err) {
        OutputView.lengthInputError();
        this.getBridgeLength();
      }
    });
  }

  makeMyBridge(bridgelength) {
    this.#myBridge = new BridgeGame(
      BridgeRandomNumberGenerator.generate,
      BridgeMaker.makeBridge,
      Number(bridgelength)
    );
    return this.moveLocation();
  }

  moveLocation() {
    InputView.readMoving((input) => {
      try {
        if (!validCheck.moveInput(input.toUpperCase())) throw new Error(ERROR_MESSAGE.INVALID_MOVE);
        if (!this.#myBridge.move(input.toUpperCase()))
          return this.moveNotCorrect();
        return this.moveCorrect();
      } catch (err) {
        OutputView.moveInputError();
        return this.moveLocation();
      }
    });
  }

  moveCorrect() {
    const resultBridge = this.#myBridge.printMyBridge(makePrintBridge);
    OutputView.printMap(resultBridge);
    if (this.#myBridge.isFinishedGame()) {
      return this.quitGame();
    }
    return this.moveLocation();
  }

  moveNotCorrect() {
    this.#myBridge.gameStateChangeFailure();
    const resultBridge = this.#myBridge.printMyBridge(makePrintBridge);
    OutputView.printMap(resultBridge);
    return this.getRetryInput();
  }

  getRetryInput() {
    InputView.readGameCommand((input) => {
      try {
        if (!validCheck.quitInput(input)) throw new Error(ERROR_MESSAGE.INVALID_QUIT);
        if (this.#myBridge.retry(input)) {
          this.#myBridge.gameStateChangeSuccess();
          return this.moveLocation();
        }
        return this.quitGame();
      } catch (err) {
        OutputView.quitInputError();
        return this.getRetryInput();
      }
    });
  }

  quitGame() {
    OutputView.gameResult();
    const resultBridge = this.#myBridge.printMyBridge(makePrintBridge);
    OutputView.printMap(resultBridge);
    this.#myBridge.printResultGame(OutputView.printResult);
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
