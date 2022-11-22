const Game = require("./Component/Game");
const OutputView = require("./GameIO/OutputView");
const InputView = require("./GameIO/InputView");
const GameLibrary = require("./Library/GameLibrary");

class App {
  #bridgeLength;
  #game;

  constructor() {
    this.#bridgeLength = InputView.readBridgeSize();
    this.#game = new Game(this.#bridgeLength);
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
      ); //this.#game.playAlgorithms(this.#bridgeLength); //여기서 물어보는 작업까지 끝내야함

      if (!PLAY_RESULT) {
        return false;
      }
      totalPlayCount = this.#game.getPlayCount;
    }
    return true;
  }
}

module.exports = App;
