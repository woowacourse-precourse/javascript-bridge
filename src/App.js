const { Console } = require("@woowacourse/mission-utils");
const {
  OUTPUT_MESSAGES,
} = require("./constants");
const InputView = require("./InputView");

class App {
  play() {
    Console.print(OUTPUT_MESSAGES.START_GAME);
    this.startGame();
  }

  startGame() {
    InputView.readBridgeSize();
  }
}

module.exports = App;
