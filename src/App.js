const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validation = require('./Validation');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const { generate } = require('./BridgeRandomNumberGenerator');

class App {

  constructor() {
    this.count = 1;
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

  afterMoving(userInput) {
    const isMove = this.bridgeGame.move(userInput);

    if (isMove) {
      this.bridgeGame.moveSuccess();
      this.bridgeGame.makeBridgeResult(this.count);
      InputView.readMoving(this.readMovingCallBack.bind(this));
    } else {
      this.bridgeGame.moveFail();
      this.bridgeGame.makeBridgeResult(this.count);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
