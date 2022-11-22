const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const { validateReadBridgeSize, validateReadMoving, validateReadGameCommand } = require("./Validator");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const { INPUT_KEYS, FIANL_RESULT } = require("../utils/constants");

class App {
  #retryCount;
  #successOrFailure;

  constructor() {
    this.#retryCount = 1;
    this.#successOrFailure;
  }

  play() {
    this.runBridgeGame();
  }

  runBridgeGame() {
    OutputView.printStartMent();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      const solutionArr = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
      this.bridgeGame = new BridgeGame(solutionArr);
      this.inputMoving();
    });
  }

  inputMoving() {
    InputView.readMoving((moveKey) => {
      const isFail = this.bridgeGame.checkFail(moveKey);
      if (isFail) {
        OutputView.printMap(isFail);
        this.inputGameCommand(isFail);
        return;
      }

      this.successState();
    });
  }

  successState() {
    const isSuccess = this.bridgeGame.move();
    if (isSuccess) {
      this.displaySuccessState(isSuccess);
    }
  }

  displaySuccessState(isSuccess) {
    if (this.bridgeGame.gameFinish()) {
      this.#successOrFailure = FIANL_RESULT.SUCCESS_MENT;
      OutputView.printMap(isSuccess);
      OutputView.printResult(isSuccess, this.#retryCount, this.#successOrFailure);
      return Console.close();
    }
    OutputView.printMap(isSuccess);
    this.inputMoving();
  }

  inputGameCommand(isFail) {
    InputView.readGameCommand((retryKey) => {
      this.insertRKey(retryKey);
      this.insertQKey(retryKey, isFail);
    });
  }

  insertRKey(retryKey) {
    if (retryKey === INPUT_KEYS.RETRY) {
      this.#retryCount += 1;
      this.bridgeGame.retry();
      this.inputMoving();
    }
  }

  insertQKey(retryKey, isFail) {
    if (retryKey === INPUT_KEYS.QUIT) {
      this.#successOrFailure = FIANL_RESULT.FAIL_MENT;
      OutputView.printMap(isFail);
      OutputView.printResult(isFail, this.#retryCount, this.#successOrFailure);
      return Console.close();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
