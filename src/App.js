const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const BridgeGame= require("./BridgeGame");

class App {
  play() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    // const bridgeGame = new BridgeGame()
    // bridgeGame.move()
    // InputView.readBridgeSize()
  }
}

const app = new App()
app.play()

module.exports = App;
