const { Console } = require("@woowacourse/mission-utils");
const {
  OUTPUT_MESSAGES,
} = require("./utils/constants");
const InputView = require("./InputView");

class App {
  play() {
    Console.print(OUTPUT_MESSAGES.START_GAME);
    this.gameStart();
  }

  gameStart() {
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
