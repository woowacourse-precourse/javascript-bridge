const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const wConsole = MissionUtils.Console;

const { readBridgeSize } = require("./InputView");

class App {
  play() {
    const bridgeGame = new BridgeGame();
    wConsole.print("다리 건너기 게임을 시작합니다.\n");
    readBridgeSize(bridgeGame);
  }
}

module.exports = App;
