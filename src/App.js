const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require('./InputView');
const Constant = require('./Constant')

class App {

  play() {
   this.gameStart()
  }

  gameStart() {
    MissionUtils.Console.print(Constant.GAME_START_MESSAGE);
    this.userInputBridgeLength()
  }

  userInputBridgeLength() {
    InputView.readBridgeSize()
  }
}

const app = new App();
app.play();

module.exports = App;
