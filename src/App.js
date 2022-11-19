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
    this.#bridgeGame = null;
    this.#playCount = 0;
  }

  async initiate() {
    const bridgeSize = await InputView.readBridgeSize();
    this.#bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate)
    );
    this.increasePlayCount();
  }

  async progress() {
    const moving = await InputView.readMoving();
    const moveResult = this.#bridgeGame.move(moving);
    OutputView.printMap(moving, moveResult);
    if (moveResult === MARKING_FAIL) return this.replayOrQuit();
    if (this.#bridgeGame.isAllPassed())
      return this.printResultAndQuit(MESSAGE_GAME_SUCCESS);
    this.progress();
  }

  async play() {
    OutputView.printStart();
    await this.initiate();
    this.progress();
  }

  async replayOrQuit() {
    const gameCommand = await InputView.readGameCommand();
    if (gameCommand === GAME_COMMAND_QUIT)
      return this.printResultAndQuit(MESSAGE_GAME_FAILURE);
    this.increasePlayCount();
    this.#bridgeGame.retry();
    OutputView.retry();
    this.progress();
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
