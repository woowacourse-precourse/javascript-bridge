const Exception = require('./utils/Exceptions');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class BridgeController {
  constructor(views) {
    this.bridgeGame = new BridgeGame();
    this.inputView = views.inputView,
    this.outputView = views.outputView
    this.start()
  }

  start() {
    this.outputView.printStart();
    this.requestBridegeSize();
  }
  
  requestBridegeSize() {
    this.inputView.readBridgeSize(this.createBridge.bind(this));
  }

  createBridge(bridgeSize) {
    this.bridgeSizeException(bridgeSize);
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.bridgeGame.setBridge(bridge);
    this.requestMoving();
  }

  bridgeSizeException(bridgeSize) {
    try{
      Exception.isInvalidBridgeSize(bridgeSize);
    } catch(err) {
      this.outputView.printError(err);
      this.requestBridegeSize();
    }
  }

  requestMoving() {
    this.inputView.readMoving(this.createMoving.bind(this));
  }

  createMoving(moving) {
    this.movingException(moving);
    this.handleMovingResult(this.bridgeGame.move(moving)); 
  }

  movingException(moving) {
    try{
      Exception.isInvalidMoving(moving);
    } catch(err) {
      this.outputView.printError(err);
      this.requestMoving();
    }
  }

  handleMovingResult(result) {
    this.outputView.printMap(this.bridgeGame.getMoveInfo());
    switch (result) {
      case 'next': this.requestMoving(); break;
      case 'fail': this.requestRetry(); break;
      case 'success': 
        this.outputView.printResult(this.bridgeGame.getMoveInfo(), this.bridgeGame.getTryCnt(), true);
        break;
    }
  }

  requestRetry() {
    this.inputView.readGameCommand(this.createRetry.bind(this));
  }

  createRetry(command) {
    this.commandException(command);
    this.handleRetryResult(this.bridgeGame.retry(command));   
  }

  handleRetryResult(result) {
    if(result === 'retry') {
      this.requestMoving();
    } else if(result === 'quit') {
      this.outputView.printResult(this.bridgeGame.getMoveInfo(), this.bridgeGame.getTryCnt(), false);
    }
  }
  
  commandException(command) {
    try {
      Exception.isInvalidCommand(command);
    } catch(err) {
      this.outputView.printError(err);
      this.requestRetry();
    }
  }
}

module.exports = BridgeController;
