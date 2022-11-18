class App {
  play() {
    const MISSIONUTILS = require("@woowacourse/mission-utils");
    const INPUTVIEW = require("../src/Inputview");
    
    MISSIONUTILS.Console.print("다리 건너기 게임을 시작합니다.\n");
    INPUTVIEW.readBridgeSize();
  }
}

var a = new App();
a.play();

module.exports = App;
