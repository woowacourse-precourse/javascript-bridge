const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { MESSAGE, INPUT_FORMAT } = require('./constants');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  async play() {
    OutputView.printMessage(MESSAGE.ENTRY);
    const size = await this.getBridgeSize();
    await this.bridgeGame.makeBridge(size);
    await this.handleMovement();
  }

  async getBridgeSize() {
    try {
      return await InputView.readBridgeSize();
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.getBridgeSize();
    }
  }

  async getMovingDirection() {
    try {
      return await InputView.readMoving();
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.getMovingDirection();
    }
  }

  async getGameCommand() {
    try {
      return await InputView.readGameCommand();
    } catch (error) {
      OutputView.printMessage(error.message);
      this.getGameCommand();
    }
  }

  getCurrentPosition() {
    return this.bridgeGame.getCurrentPosition();
  }

  isContinue() {
    return this.getCurrentPosition() > -1;
  }

  async isSuccessFulMovement() {
    const current = this.getCurrentPosition();
    const direction = await this.getMovingDirection();
    return this.bridgeGame.move(current, direction);
  }

  async handleSuccess() {
    return await this.handleMovement();
  }

  async isRetryCommand() {
    const command = await this.getGameCommand();
    return command === INPUT_FORMAT.RETRY;
  }

  async handleCommand() {
    return await this.bridgeGame.command(this.handleRetry, this.isRetryCommand(), this.handleFailedFinish);
  }

  async handleRetry(cb) {
    cb();
    await this.handleMovement();
  }

  async handleMovement() {
    if (this.isContinue()) {
      if (await this.isSuccessFulMovement()) return this.handleSuccess();
      return this.handleCommand();
    }

    return this.handleFinish('success');
  }

  handleFinish(type) {
    OutputView.printResult(type, this.bridgeGame.resultMap);
  }

  handleSuccessFulFinish() {
    this.handleFinish('success');
  }

  handleFailedFinish() {
    this.handleFinish('fail');
  }
}

const app = new App();
app.play();

module.exports = App;
