const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { START_GAME_MSG } = require('./constants');
const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printGuide(START_GAME_MSG); // 게임시작 문구 출력
    // 다리 길이 받아서 다리 만들기
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
    } catch (err) {
      OutputView.printGuide(err.message);
      this.tryAgain(this.requestMoving);
    }
  }

  tryAgain(tryAgainFunc) {
    tryAgainFunc.call(this);
  }
}

const app = new App();
app.play();
module.exports = App;
