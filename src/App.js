const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const {
  MARKING_FAIL,
  MESSAGE_GAME_SUCCESS,
  MESSAGE_GAME_FAILURE,
  GAME_COMMAND_QUIT,
} = require("./Utils");
const { Console } = require("@woowacourse/mission-utils");

class App {
  #bridgeGame;
  #playCount;
  constructor() {
    this.#bridgeGame = new BridgeGame();
    this.#playCount = 0;
  }

  initiate() {
    this.increasePlayCount();
    InputView.readBridgeSize((bridgeSize) => {
      const bridge = BridgeMaker.makeBridge(
        bridgeSize,
        BridgeRandomNumberGenerator.generate
      );
      this.#bridgeGame.setBridge(bridge);
      this.progress();
    });
  }

  progress() {
    InputView.readMoving((moving) => {
      const moveResult = this.#bridgeGame.move(moving);
      OutputView.printMap(moving, moveResult);
      if (moveResult === MARKING_FAIL) return this.replayOrQuit();
      if (this.#bridgeGame.isAllPassed())
        return this.printResultAndQuit(MESSAGE_GAME_SUCCESS);
      this.progress();
    });
  }

  play() {
    OutputView.printStart();
    this.initiate();
  }

  replayOrQuit() {
    InputView.readGameCommand((gameCommand) => {
      if (gameCommand === GAME_COMMAND_QUIT)
        return this.printResultAndQuit(MESSAGE_GAME_FAILURE);
      this.increasePlayCount();
      this.#bridgeGame.retry();
      OutputView.retry();
      this.progress();
    });
  }

  printResultAndQuit(endMessage) {
    OutputView.printResult(endMessage, this.#playCount);
    Console.close();
  }

  increasePlayCount() {
    this.#playCount++;
  }
}

const app = new App();
app.play();

module.exports = App;
