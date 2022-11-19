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
  #myBridgeLength;

  play() {
    OutputView.gameStart();
    this.getBridgeLength();
  }

  getBridgeLength() {
    InputView.readBridgeSize((input) => {
      try {
        if (!validCheck.bridgeLength(input))
          throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
        this.#myBridgeLength = input;
        return this.makeMyBridge();
      } catch (err) {
        OutputView.lengthInputError();
        this.getBridgeLength();
      }
    });
  }

  makeMyBridge() {
    // 다리 객체 생성! -> 다리만드는함수, 랜덤숫자넣어주는함수, 다리 길이 넣어주기
    this.#myBridge = new BridgeGame(
      BridgeRandomNumberGenerator.generate,
      BridgeMaker.makeBridge,
      this.#myBridgeLength
    );
    return this.moveLocation();
  }

  moveLocation() {
    InputView.readMoving((input) => {
      try {
        if (!validCheck.moveInput(input))
          throw new Error(ERROR_MESSAGE.INVALID_MOVE);
        const move = this.#myBridge.move(input);
        if (!move) return this.moveNotCorrect();
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
      return this.gameWin();
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
        if (!validCheck.quitInput(input))
          throw new Error(ERROR_MESSAGE.INVALID_QUIT);
        const retry = this.#myBridge.retry(input);
        if (retry) {
          this.#myBridge.gameStateChangeSuccess();
          return this.moveLocation();
        }
        return this.quieGame();
      } catch (err) {
        OutputView.quitInputError();
        return this.getRetryInput();
      }
    });
  }

  gameWin() {
    OutputView.gameResult();
    const resultBridge = this.#myBridge.printMyBridge(makePrintBridge);
    OutputView.printMap(resultBridge);
    this.#myBridge.printResultGame(OutputView.printResult);
    Console.close();
  }

  quieGame() {
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
