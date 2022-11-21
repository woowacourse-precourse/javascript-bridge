const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const { validateReadBridgeSize, validateReadMoving, validateReadGameCommand } = require("./Validator");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");

class App {
  play() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      if (!validateReadBridgeSize(bridgeSize)) this.inputBridgeSize();
      const solutionArr = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
      this.bridgeGame = new BridgeGame(solutionArr);
      this.inputMoving();
    });
  }

  inputMoving() {
    InputView.readMoving((moveKey) => {
      if (!validateReadMoving(moveKey)) this.inputMoving();

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
      OutputView.printMap(isSuccess);
    }
    OutputView.printMap(isSuccess);
    this.inputMoving();
  }

  inputGameCommand(isFail) {
    InputView.readGameCommand((retryKey) => {
      if (!validateReadGameCommand(retryKey)) this.inputGameCommand();

      this.insertRKey(retryKey);
      this.insertQKey(retryKey, isFail);
    });
  }

  insertRKey(retryKey) {
    if (retryKey === "R") {
      this.bridgeGame.retry();
      this.inputMoving();
    }
  }

  insertQKey(retryKey, isFail) {
    if (retryKey === "Q") {
      OutputView.printMap(isFail);
      return Console.close();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
