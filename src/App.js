const MissionUtils = require("@woowacourse/mission-utils");
const { readBridgeSize } = require("./InputView");
const Consolee = MissionUtils.Console;

class App {
  play() {
    Consolee.print("다리 건너기 게임을 시작합니다.");
    this.startGame();
  }
  startGame(){
    const size = readBridgeSize();
  }
}

module.exports = App;
