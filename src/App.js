const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { REGEX } = require("./constant");

class App {
  #bridgeGame;

  play() {
    this.#bridgeGame = new BridgeGame();
    this.controller();
  }

  controller() {
    switch (this.#bridgeGame.getStatus()) {
      case "start":
        OutputView.printStart();
        InputView.readBridgeSize(this.readBridgeSizeCallback);
        break;
      case "move":
        InputView.readMoving(this.readMovingCallback);
        break;
      case "retry":
        InputView.readGameCommand(this.readGameCommandCallback);
        break;
      case "end":
        OutputView.printResult(this.#bridgeGame);
    }
  }

  readBridgeSizeCallback = (size) => {
    try {
      if (!this.#validateBridgeSize(size))
        throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
      this.#bridgeGame.makeBridge(size);
      this.#bridgeGame.setStatus("move");
      this.controller();
    } catch (err) {
      MissionUtils.Console.print(err.message);
      this.controller();
    }
  };

  readMovingCallback = (moving) => {
    try {
      if (!this.#validateMoving(moving))
        throw new Error("[ERROR] U 또는 D를 입력해 주세요.");
      this.#bridgeGame.move(moving);
      OutputView.printMap(this.#bridgeGame.getBridgeResult());
      this.controller();
    } catch (err) {
      console.log(err);
      MissionUtils.Console.print(err.message);
      this.controller();
    }
  };

  readGameCommandCallback = (gameCommand) => {
    try {
      if (!this.#validateGameCommand(gameCommand))
        throw new Error("[ERROR] R 또는 Q를 입력해 주세요.");
      this.#bridgeGame.retry(gameCommand);
      this.controller();
    } catch (err) {
      MissionUtils.Console.print(err.message);
      this.controller();
    }
  };

  #validateBridgeSize(size) {
    return size.toString().match(REGEX.SIZE_RANGE);
  }

  #validateMoving(moving) {
    return moving === "U" || moving === "D";
  }

  #validateGameCommand(gameCommand) {
    return gameCommand === "R" || gameCommand === "Q";
  }
}

module.exports = App;
