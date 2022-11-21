const { MissionUtils } = require("@woowacourse/mission-utils");

class App {
  print(message) {
    MissionUtils.Console.print(message);
    MissionUtils.Console.close();
  }

  play() {
    this.print(`다리 건너기 게임을 시작합니다.`);
  }
}

module.exports = App;
