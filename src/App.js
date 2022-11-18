const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const {Console} = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.start();
    this.initialize();
  }

  initialize() {
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(bridgeSize) {
    this.bridgeGame.setBridge(bridgeSize);
    this.go();
  }

  go() {
    InputView.readMoving(this.moveUser.bind(this));
  }

  moveUser(direction) {
    this.bridgeGame.move(direction);
  }

}

const app = new App();
app.play();

module.exports = App;
