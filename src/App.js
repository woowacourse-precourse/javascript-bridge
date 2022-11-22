const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { MESSAGE, INPUT_FORMAT } = require('./constants');
const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.game = new BridgeGame();
  }

  play = async () => {
    OutputView.printMessage(MESSAGE.ENTRY);
    const size = await this.getBridgeSize();
    await this.game.makeBridge(size);
    await this.handleMovement();
  };

  // UI 분리
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

  handleMovement = async () => {
    if (this.isContinue()) {
    }
  };

  getCurrentPosition = () => {
    return this.game.getCurrentPosition();
  };

  isContinue = () => {
    return this.getCurrentPosition() > -1;
  };
}

const app = new App();
app.play();

module.exports = App;
