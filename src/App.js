const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const {
  MARKING_PASS,
  MESSAGE_GAME_SUCCESS,
  MESSAGE_GAME_FAILURE,
  GAME_COMMAND_RETRY,
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
    if (moveResult === MARKING_PASS) {
      this.quitIfAllBridgePassed();
      return this.progress();
    }
    this.replayOrQuit();
  }

  async play() {
    OutputView.printStart();
    await this.initiate();
    this.progress();
  }

  async replayOrQuit() {
    const gameCommand = await InputView.readGameCommand();
    if (gameCommand === GAME_COMMAND_RETRY) {
      this.increasePlayCount();
      this.#bridgeGame.retry();
      OutputView.retry();
      this.progress;
    }
    this.printResultAndQuit(MESSAGE_GAME_FAILURE);
  }

  printResultAndQuit(endMessage) {
    OutputView.printResult(endMessage, this.#playCount);
    Console.close();
  }

  quitIfAllBridgePassed() {
    if (this.#bridgeGame.isAllPassed()) {
      this.printResultAndQuit(MESSAGE_GAME_SUCCESS);
    }
  }

  increasePlayCount() {
    this.#playCount++;
  }
}

const app = new App();
app.play();

module.exports = App;
