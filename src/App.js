const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  GameStart() {
    Console.print("다리 건너기 게임을 시작합니다.");
  }
  play() {
    this.GameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
