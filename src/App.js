const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validation = require('./Validation');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const { generate } = require('./BridgeRandomNumberGenerator');

class App {

  constructor() {
    this.bridge = [];
  }

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.readBridgeSizeCallBack.bind(this));
  };

  readBridgeSizeCallBack(userInput) {
    try {
      Validation.bridgeSize(userInput);
      this.bridge = BridgeMaker.makeBridge(userInput, generate)
      this.bridgeGame = new BridgeGame(this.bridge);
      InputView.readMoving(this.readMovingCallBack.bind(this));
    } catch (error) {
      OutputView.printError(error);
      InputView.readBridgeSize(this.readBridgeSizeCallBack.bind(this));  
    };
  };

  readMovingCallBack(userInput) {
    try {
      Validation.moving(userInput);
      this.afterMoving(userInput)
    } catch (error) {
      OutputView.printError(error);
      InputView.readMoving(this.readMovingCallBack.bind(this));  
    };
  };

  readGameCommandCallBack(userInput) {
    try {
      Validation.readCommand(userInput);
      this.checkCommand(userInput);
    } catch (error) {
      OutputView.printError(error);
      InputView.readGameCommand(this.readGameCommandCallBack.bind(this));  
    };
  }

  afterMoving(userInput) {
    const isMove = this.bridgeGame.move(userInput);

    if (isMove === true) {
      this.bridgeGame.moveSuccess();
      this.bridgeGame.checkSuccess() ? this.bridgeGame.printSuccess() : InputView.readMoving(this.readMovingCallBack.bind(this));  
    } else {
      this.bridgeGame.moveFail();
      InputView.readGameCommand(this.readGameCommandCallBack.bind(this));
    };
  };

  checkCommand(userInput) {
    if (userInput === 'Q') {
      this.bridgeGame.printFail();
    } else {
      this.bridgeGame.retry();
      InputView.readMoving(this.readMovingCallBack.bind(this));  
    }
  }
}

const app = new App();
app.play();

module.exports = App;
