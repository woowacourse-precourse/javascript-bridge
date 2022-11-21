const BridgeGame = require("./BridgeGame");
const InputView = require("./ui/InputView");
const OutputView = require("./ui/OutputView");

const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

class App {
  #bridgeGame = new BridgeGame();

  async play() {
    OutputView.printStart();

    const size = await InputView.readBridgeSize();
    Console.print(size);

    const bridge = this.#bridgeGame.make(size);
    Console.print(bridge);
  }
}

module.exports = App;
