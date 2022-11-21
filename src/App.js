const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { MESSAGE } = require('./constants');

class App {
  bridgeGame = new BridgeGame();

  async play() {
    OutputView.printMessage(MESSAGE.ENTRY);
    const size = await this.getBridgeSize();
    await this.bridgeGame.makeBridge(size);
    // const direction = await this.getMovingDirection();
    await this.controlMoving(this.getMovingDirection);
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

  async controlMoving(asyncCb) {
    const current = this.bridgeGame.resultMap.getCurrentIndex();
    if (current > -1) {
      // const isMoved = await this.move(current);
      const isMoved = await this.bridgeGame.move(current, asyncCb);
      this.bridgeGame.resultMap.printHistory();

      if (isMoved) {
        this.controlMoving(asyncCb);
      } else {
        const command = await this.getGameCommand();
        await this.bridgeGame.command(() => this.controlMoving(asyncCb), command);
      }
      // return isMoved ? this.controlMoving() : await this.bridgeGame.command(this.controlMoving, command);
    }

    return this.finish('success');
  }

  finish(type) {
    OutputView.printResult(type, this.bridgeGame.resultMap);
  }
}

const app = new App();
app.play();

module.exports = App;
