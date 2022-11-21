const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const InputView = require("./InputView");
class App {
  startGame(){
    InputView.readBridgeSize();
  }
  play() {
    Console.print('다리 건너기 게임을 시작합니다.');
    this.startGame();
  }
}
module.exports = App;
