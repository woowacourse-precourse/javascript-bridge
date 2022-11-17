const MissionUtils = require("@woowacourse/mission-utils");
const wConsole = MissionUtils.Console;


const { readBridgeSize } = require("./InputView");

class App {
  constructor() {
    this.bridge = null;
    this.moveLog = "";
  }

  getBridge() {
    return this.bridge;
  }

  setBridge(bridge) {
    this.bridge = bridge;
  }

  play() {
    wConsole.print("다리 건너기 게임을 시작합니다.\n");
    readBridgeSize(this);
  }
}

module.exports = App;

const app = new App();
app.play();
