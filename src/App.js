const Game = require("./Model/Game");
const OutputView = require("./GameIO/OutputView");
const InputView = require("./GameIO/InputView");

class App {
  #bridgeLength;
  #playCount;
  constructor() {
    this.#bridgeLength = InputView.readBridgeSize();
    this.game = new Game(this.#bridgeLength);
    this.#playCount = 1;
  }

  play() {
    OutputView.printBeginAnnouncement();
    this.processingGame();
  }

  processingGame() {
    for (let playCounter = 0; playCounter < this.#playCount; playCounter++) {
      this.game.increasePlayCount();
      const PLAY_RESULT = this.game.playAlgorithms(); //여기서 물어보는 작업까지 끝내야함

      if (PLAY_RESULT) {
        this.game.increasePlayCount();
      }
      if (!PLAY_RESULT) {
        break;
      }
    }

    this.game.getPrintResult();
  }
}

module.exports = App;
