const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require('./InputView');

class App {

  play() {
   this.gameStart()
  }

  gameStart() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    this.userInputBridgeLength()
  }

  userInputBridgeLength() {
    InputView.readBridgeSize()
  }
}

module.exports = App;
