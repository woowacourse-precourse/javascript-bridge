const BridgeGame = require("./BridgeGame");
const InputView = require("./ui/InputView");
const OutputView = require("./ui/OutputView");

const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

class App {
  #bridgeGame = new BridgeGame();

  async play() {
    OutputView.printStart();

    const BRIDGE_SIZE = await InputView.readBridgeSize();

    const bridge = this.#bridgeGame.make(BRIDGE_SIZE);
    Console.print(bridge);

    let isLive = true;

    while (isLive === true) {
      const direction = await InputView.readMoving();
      isLive = this.#bridgeGame.move(bridge, direction);
      if (isLive === "finish") InputView.close();
    }
  }
}

module.exports = App;
