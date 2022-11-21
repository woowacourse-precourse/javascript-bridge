const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const { INPUT_MESSAGE } = require("./Constant.js");
const inputView = require("./InputView");
class App {
  play() {
    Console.print(INPUT_MESSAGE.game_start);
    inputView.readBridgeSize();
  }
}
// const app = new App();
// app.play();
module.exports = App;
