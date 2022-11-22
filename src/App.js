const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validation = require('./Validation');

class App {
  play() {
    InputView.readBridgeSize(this.readBridgeSizeCallBack.bind(this));
  };

  readBridgeSizeCallBack(userInput) {
    try {
      Validation.bridgeSize(userInput);
      InputView.readMoving(this.readMovingCallBack.bind(this));
    } catch (error) {
      OutputView.printError(error);
      InputView.readBridgeSize(this.readBridgeSizeCallBack.bind(this));  
    };
  };

  readMovingCallBack(userInput) {
    try {
      Validation.moving(userInput);
      InputView.readGameCommand();
    } catch (error) {
      OutputView.printError(error);
      InputView.readMoving(this.readMovingCallBack.bind(this));  
    };
  }
}

const app = new App();
app.play();

module.exports = App;
