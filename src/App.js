const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants");
class App {
  play() {
    Console.print(MESSAGE.START_MESSAGE);

    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();
module.exports = App;
