const { MissionUtils } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandom = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
class App {
  bridgeGame;

  async play() {
    try {
      OutputView.printGameStart();

      const bridgeSize = await InputView.readBridgeSize();
      const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandom.generate);
      this.bridgeGame = new BridgeGame(bridge);
      this.bridgeGame.gameController();
    } catch (e) {
      console.log(e);
    }
  }
}
const app = new App();
app.play();
module.exports = App;
