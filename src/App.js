const Game = require("./Component/Game");
const OutputView = require("./GameIO/OutputView");
const InputView = require("./GameIO/InputView");

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
    let flag = true;
    let totalPlayCount = this.#game.getPlayCount;
    for (let playCounter = 0; playCounter < totalPlayCount; playCounter++) {
      const PLAY_RESULT = this.#game.playAlgorithms(this.#bridgeLength); //여기서 물어보는 작업까지 끝내야함

      if (!PLAY_RESULT) {
        flag = false;
        break;
      }
      totalPlayCount = this.#game.getPlayCount;
    }
    if (flag) {
      this.#game.getGameResult();
    }
    InputView.endCommand();
  }
}

module.exports = App;
