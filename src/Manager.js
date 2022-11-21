const InputView = require('./InputView.js');
const OutputView = require('./OutputView.js');
const Validation = require('./Validation.js');
const BridgeGame = require('./BridgeGame.js');

class Manager{
  constructor(){
    OutputView.printStartMessage();
    this.bridgeGame = new BridgeGame();
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize((size) => {
      Validation.isValidSize(size);
      this.bridgeGame.makeBridge(size);

      this.requestDirection();
    });
  }
  
  requestDirection() {
    InputView.readMoving((direction) => {
      Validation.isValidDirection(direction);
      this.bridgeGame.move(direction);

      this.requestMap();

      const isCorrect = this.bridgeGame.getIsCorrect();
      const isSuccess = this.bridgeGame.getIsSuccess();
      isSuccess ? this.requestResult() : (isCorrect ? this.requestDirection() : this.requestGameCommand());
    });
  }

  requestMap(){
    const [upBridge, downBridge] = this.bridgeGame.getCurrentMap();
    OutputView.printMap(upBridge, downBridge);
  }

  requestResult(){
    const [upBridge, downBridge] = this.bridgeGame.getCurrentMap();
    const isSuccess = this.bridgeGame.getIsSuccess();
    const tryNumber = this.bridgeGame.getTryNumber();
    OutputView.printResult(upBridge, downBridge, isSuccess, tryNumber);
  }

  requestGameCommand(){
    InputView.readGameCommand((retryOrQuit) => {
      Validation.isValidRetryOrQuitInput(retryOrQuit);
      if (retryOrQuit === "Q"){
        this.requestResult();
        return;
      }
      this.bridgeGame.retry();
      this.requestDirection();
    });
  }
}

module.exports = Manager;