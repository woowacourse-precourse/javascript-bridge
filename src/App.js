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
    // await this.handleMovement();
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
      if (await this.isSuccessFulMovement()) {
        return await this.handleSuccess();
      }
      // return await this.handleCommand();
    }

    return this.handleSuccessFulFinish();
  };

  getCurrentPosition = () => {
    return this.game.getCurrentPosition();
  };

  isContinue = () => {
    return this.getCurrentPosition() > -1;
  };

  isSuccessFulMovement = async () => {
    const current = this.getCurrentPosition();
    const direction = await this.getDirection();

    return this.game.move(current, direction);
  };

  handleSuccess = async () => {
    return await this.handleMovement();
  };

  handleCommand = async () => {
    return await this.game.command(this.handleRetry, await this.isRetryCommand(), this.handleFailedFinish);
  };

  handleRetry = async (cb) => {
    cb();
    return await this.handleMovement();
  };

  isRetryCommand = async () => {
    const command = await this.getGameCommand();
    return command === INPUT_FORMAT.RETRY;
  };

  handleSuccessFulFinish = () => {
    this.handleFinish('success');
  };

  handleFailedFinish = () => {
    this.handleFinish('fail');
  };

  handleFinish = (type) => {
    // OutputView.printResult(type, this.game.resultMap);
  };
}

const app = new App();
app.play();

module.exports = App;
