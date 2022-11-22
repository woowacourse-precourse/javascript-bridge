const Game = require("./Component/Game");
const OutputView = require("./View/OutputView");
const InputView = require("./View/InputView");
const GameLibrary = require("./Library/GameLibrary");

class App {
  #bridgeLength;
  #game;

  constructor() {
    this.#bridgeLength = InputView.readBridgeSize();
    this.#game = new Game(this.#bridgeLength);
    this.play();
  }

  play() {
    OutputView.printBeginAnnouncement();
    this.processingGame();
  }

  processingGame() {
    const IS_QUIT = this.playTurn();

    this.#game.getGameResult();
    InputView.endCommand;
  }

  playTurn() {
    let totalPlayCount = this.#game.getPlayCount;
    const bridgeGame = this.#game.getBridgeGame;
    for (let playCounter = 0; playCounter < totalPlayCount; playCounter++) {
      const PLAY_RESULT = GameLibrary.playAlgorithms(
        this.#game.increasePlayCount,
        this.#bridgeLength,
        bridgeGame
      );

      if (!PLAY_RESULT) {
        return false;
      }
      totalPlayCount = this.#game.getPlayCount;
    }
    return true;
  }
}

module.exports = App;
