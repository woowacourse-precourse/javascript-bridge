const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
const { INPUT_MESSAGE } = require("./Constant.js");
const inputView = require("./InputView");
class App {
  play() {
    Console.print(INPUT_MESSAGE.game_start);
    inputView.readBridgeSize();
  }
}

module.exports = App;
