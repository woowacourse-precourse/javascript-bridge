const BridgeMaker = require("./BridgeMaker");

class App {
  play() {
    this.makeBridge();

    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
  }
}

module.exports = App;
