const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { MESSAGE } = require('./constants');

class App {
  play = async () => {
    OutputView.printMessage(MESSAGE.ENTRY);
  };

  getBridgeSize = async () => {
    try {
      return await InputView.readBridgeSize();
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.getBridgeSize();
    }
  };

  getDirection = async () => {
    try {
      return await InputView.readMoving();
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.getDirection();
    }
  };

  getGameCommand = async () => {
    try {
      return await InputView.readGameCommand();
    } catch (error) {
      OutputView.printMessage(error.message);
      this.getGameCommand();
    }
  };
}

const app = new App();
app.play();

module.exports = App;
