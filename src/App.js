const BridgeGame = require("./BridgeGame");
const InputView = require("./ui/InputView");
const OutputView = require("./ui/OutputView");

class App {
  #bridgeGame = new BridgeGame();
  #resultMap;

  play() {
    OutputView.printStart();

    const BRIDGE_SIZE = InputView.readBridgeSize();
    if (BRIDGE_SIZE === 0) return;

    const bridge = this.#bridgeGame.make(BRIDGE_SIZE);

    this.loop(bridge);
  }

  moveFunction(bridge) {
    let isLive = true;

    while (isLive === true) {
      const direction = InputView.readMoving();
      isLive = this.#bridgeGame.move(bridge, direction);
      this.#resultMap = OutputView.printMap(bridge, direction, this.#bridgeGame.getStep());
    }
    return isLive;
  }

  loop(bridge) {
    let isLive = this.moveFunction(bridge);

    while (isLive !== "finish") {
      const command = InputView.readGameCommand();
      if (!this.#bridgeGame.retry(command)) break;
      
      isLive = this.moveFunction(bridge);
    }
    OutputView.printResult(this.#bridgeGame.getRetryCount(), isLive, this.#resultMap);
    InputView.close();
  }
}

module.exports = App;
