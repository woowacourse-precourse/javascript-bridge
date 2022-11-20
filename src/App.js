const MissionUtils = require("@woowacourse/mission-utils");
const Bridge = require("./Bridge");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const InputValidate = require("./InputValidate");

class App {
  #bridgeGame;

  play() {
    OutputView.printOpening();
    this.bridgeMakeInput();
  }

  bridgeMakeInput() {
    InputView.readBridgeSize(this.bridgeMake.bind(this));
  }

  bridgeMake(size) {
    try {
      InputValidate.checkBridgeSize(size);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      this.bridgeMakeInput();
    }

    const bridge = new Bridge(BridgeMaker.makeBridge(Number(size), BridgeRandomNumberGenerator.generate));
    this.#bridgeGame = new BridgeGame(bridge);

    this.moveInput();
  }

  moveInput() {
    InputView.readMoving(this.move.bind(this));
  }
}

const app = new App();
app.play();

module.exports = App;
