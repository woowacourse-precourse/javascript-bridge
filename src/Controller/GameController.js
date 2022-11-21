const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const Validation = require('../Model/Validation');
const BridgeGame = require('../Model/BridgeGame');

class GameController {
  #bridgeGame;
  #retryCount = 1;
  
  gameStart() {
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    OutputView.printStart();
    InputView.readBridgeSize((bridgeSize) => {
      Validation.checkBridgeLength(+bridgeSize);
      this.makeBridge(+bridgeSize);
      this.inputWhereMoving();
    });
  }

  makeBridge(bridgeSize) {
    this.#bridgeGame = new BridgeGame(bridgeSize);
  }

  inputWhereMoving() {
    InputView.readMoving((moveAnswer) => {
      Validation.checkMoveInput(moveAnswer);
      this.handleGame(moveAnswer);
    });
  }

  handleGame(moveAnswer) {
    const moveResult = this.#bridgeGame.move(moveAnswer);
    const [_, matchBoolean] = moveResult;
    OutputView.printMap(moveResult);
    if (this.#bridgeGame.checkRemainBridge() && matchBoolean) {
      return this.inputWhereMoving();
    }
    if (this.#bridgeGame.checkRemainBridge() && !matchBoolean) {
      return this.inputRetryOrQuit();
    }
    return OutputView.printResult(this.#retryCount);
  }

  inputRetryOrQuit() {
    InputView.readGameCommand((retryAnswer) => {
      Validation.checkRestartInput(retryAnswer);
      this.handleRetryOrQuit(retryAnswer);
    });
  }

  handleRetryOrQuit(retryAnswer) {
    if (retryAnswer === 'R') {
      this.#bridgeGame.retry();
      OutputView.resetPrintData();
      this.#retryCount += 1;
      return this.inputWhereMoving();
    }
    return OutputView.printResult(this.#retryCount);
  }
}

module.exports = GameController;
