const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  gameStart() {
    Console.print("다리 건너기 게임을 시작합니다.");
  }
  
  play() {
    this.gameStart();
    BridgeMaker.makeBridge();
  }
}

const app = new App();
app.play();

module.exports = App;
