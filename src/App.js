const BridgeGame = require("./BridgeGame");
const InputView = require("./ui/InputView");
const OutputView = require("./ui/OutputView");

const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

class App {
  #bridgeGame = new BridgeGame();
  #resultMap;

  async play() {
    OutputView.printStart();

    const BRIDGE_SIZE = await InputView.readBridgeSize();

    const bridge = this.#bridgeGame.make(BRIDGE_SIZE);
    Console.print(bridge);

    let isRetry = true;
    let isLive;

    while (isRetry === true) {
      isLive = await this.moveFunction(bridge);
      if (isLive == "finish") isRetry = false;
      else {
        const command = await InputView.readGameCommand();
        isRetry = this.#bridgeGame.retry(command);
      }
    }

    OutputView.printResult(
      this.#bridgeGame.getRetryCount(),
      isLive,
      this.#resultMap
    );
    InputView.close();
  }

  async moveFunction(bridge) {
    let isLive = true;

    while (isLive === true) {
      const direction = await InputView.readMoving();
      isLive = this.#bridgeGame.move(bridge, direction);
      this.#resultMap = OutputView.printMap(
        bridge,
        direction,
        this.#bridgeGame.getStep()
      );
    }

    return isLive;
  }
}

module.exports = App;
