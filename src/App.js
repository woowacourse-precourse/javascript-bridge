const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./view/InputView");
const { GAME_MESSAGE } = require("./util/Constant");
const Console = MissionUtils.Console;

class App {

  play() {
    this.greeting();
    InputView.readBridgeSize();
  }

  greeting() {
    Console.print(GAME_MESSAGE.START);
  }
}

const app = new App();
app.play();

module.exports = App;
