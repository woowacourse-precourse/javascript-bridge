const BridgeGame = require("./BridgeGame");
const OutputView = require("../src/console/OutputView");
const InputView = require("../src/console/InputView");
const Message = require("../src/lib/Message");
const Bridge = require("./model/Bridge");

class WoowaBrigde {
  bridge;
  bridgeGame;

  constructor() {
    this.bridge = new Bridge();
    this.birdgeGame = new BridgeGame();
  }

  play() {
    OutputView.printLine(Message.GAME_START);
    this.makeBridge();
  }

  makeBridge() {
    const bridgeSetter = this.bridge.setOriginalBridge.bind(this.bridge);
    const nextCallBack = this.printTest.bind(this);
    const errorCallBack = this.makeBridge.bind(this);
    InputView.readBridgeSize(bridgeSetter, nextCallBack, errorCallBack);
  }

  printTest() {
    console.log(this.bridge.getOriginalBridge());
  }
}

module.exports = WoowaBrigde;
