const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { START_GAME_MSG, RETRY_INPUT_ERROR } = require('./constants');
const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printGuide(START_GAME_MSG);
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(size) {
    try {
      this.bridgeGame.buildBridge(size);
      this.requestMoving();
    } catch (err) {
      OutputView.printGuide(err.message);
      this.tryAgain(this.requestBridgeSize);
    }
  }

  requestMoving() {
    InputView.readMoving(this.moveBlock.bind(this));
  }

  moveBlock(moveInput) {
    try {
      this.bridgeGame.move(moveInput);
      const moveInputArray = this.bridgeGame.getMoveInputArray();
      OutputView.printMap(moveInputArray);
      this.determinePath(moveInputArray);
    } catch (err) {
      OutputView.printGuide(err.message);
      this.tryAgain(this.requestMoving);
    }
  }

  determinePath(moveInputArray) {
    if (this.isSuccess(moveInputArray)) {
      this.quit();
    } else if (moveInputArray.slice(-1)[0].isRightDirect === true) {
      this.requestMoving();
    } else {
      this.requestRetry();
    }
  }

  requestRetry() {
    InputView.readGameCommand(this.checkValidCommand.bind(this));
  }

  checkValidCommand(tryInput) {
    try {
      if (tryInput !== 'Q' && tryInput !== 'R') {
        throw new Error(RETRY_INPUT_ERROR);
      }
      this.determineTryOrExit(tryInput);
    } catch (err) {
      OutputView.printGuide(err.message);
      this.tryAgain(this.requestRetry);
    }
  }

  determineTryOrExit(tryInput) {
    if (tryInput === 'Q') {
      this.quit();
    } else {
      this.bridgeGame.retry();
      this.requestMoving();
    }
  }

  tryAgain(tryAgainFunc) {
    tryAgainFunc.call(this);
  }

  isSuccess(moveInputArray) {
    if (
      moveInputArray.slice(-1)[0].isRightDirect === true &&
      moveInputArray.length === this.bridgeGame.getBridgeLength()
    ) {
      return true;
    }
    return false;
  }

  quit() {
    const moveInputArray = this.bridgeGame.getMoveInputArray();
    const isSuccess = this.isSuccess(moveInputArray);
    const gameCount = this.bridgeGame.getGameCount();
    OutputView.printResult(moveInputArray, isSuccess, gameCount);
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
