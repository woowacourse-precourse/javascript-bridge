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

  tryCatch = (tryFuntion, catchFunction) => {
    try {
      tryFuntion();
    } catch{
      catchFunction();
    }
  };

  requestBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.tryCatch(this.tryBridgeSize.bind(this, size), this.requestBridgeSize.bind(this));
    });
  }

  tryBridgeSize(size){
    Validation.isNumber(size);
    Validation.isValidRangeSize(size);
    this.bridgeGame.makeBridge(size);
    this.requestDirection();
  }
  
  requestDirection(){
    InputView.readMoving((direction) => {
      this.tryCatch(this.tryDirection.bind(this, direction), this.requestDirection.bind(this));
    });
  }

  tryDirection(direction){
    Validation.isValidDirection(direction);
    this.bridgeGame.move(direction);
    this.requestMap();
  }
  
  requestMap(){
    const currentBridge = this.bridgeGame.getCurrentBridge();
    OutputView.printMap(currentBridge);
    this.chosseNextWork();
  }

  chosseNextWork(){
    const isCorrect = this.bridgeGame.getIsCorrect();
    const isSuccess = this.bridgeGame.getIsSuccess();
    isSuccess ? this.requestResult() : (isCorrect ? this.requestDirection() : this.requestGameCommand());
  }

  requestResult(){
    const currentBridge = this.bridgeGame.getCurrentBridge();
    const isSuccess = this.bridgeGame.getIsSuccess();
    const tryNumber = this.bridgeGame.getTryNumber();
    OutputView.printResult(currentBridge, isSuccess, tryNumber);
  }

  requestGameCommand(){
    InputView.readGameCommand((retryOrQuit) => {
      this.tryCatch(this.tryBridgeSize.bind(this, retryOrQuit), this.requestGameCommand.bind(this));
    });
  }

  tryGameCommand(){
    Validation.isValidRetryOrQuitInput(retryOrQuit);
    retryOrQuit === "Q" ? this.requestResult() : this.bridgeGame.retry(), this.requestDirection();
  }
}

module.exports = Manager;