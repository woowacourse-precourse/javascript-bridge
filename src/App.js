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
      InputView.readMoving();
    } catch (error) {
      OutputView.printError(error);
      InputView.readBridgeSize(this.readBridgeSizeCallBack.bind(this));  
    };
  };
}

const app = new App();
app.play();

module.exports = App;
