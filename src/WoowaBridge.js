const BridgeGame = require("./BridgeGame");
const OutputView = require("../src/console/OutputView");
const InputView = require("../src/console/InputView");
const Message = require("../src/lib/Message");
const Bridge = require("./model/Bridge");

class WoowaBrigde {
  #bridge;
  #bridgeGame;

  constructor() {
    this.#bridge = new Bridge();
    this.#bridgeGame = new BridgeGame(this.#bridge);
  }

  getBridge() {
    return this.#bridge;
  }

  getBridgeGame() {
    return this.#bridgeGame;
  }

  play() {
    OutputView.printLine(Message.GAME_START);
    this.makeBridge();
  }

  makeBridge() {
    const bridgeSetter = this.#bridge.setOriginalBridge.bind(this.#bridge);
    const nextCallBack = this.upOrDown.bind(this);
    const errorCallBack = this.makeBridge.bind(this);
    InputView.readBridgeSize(bridgeSetter, nextCallBack, errorCallBack);
  }

  upOrDown() {
    const doCallBack = this.#bridgeGame.move.bind(this.#bridgeGame);
    const nextCallBack = this.showCurrentState.bind(this);
    const errorCallBack = this.upOrDown.bind(this);
    InputView.readMoving(doCallBack, nextCallBack, errorCallBack);
  }

  showCurrentState() {
    const [upside, downside] = this.#bridge.getResult();
    OutputView.printMap(upside, downside);
  }
}

module.exports = WoowaBrigde;
