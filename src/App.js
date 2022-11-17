const BridgeGame = require('./BridgeGame');
const Validator = require('./Utils/Validator');
const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  play() {
    OutputView.printStart();
    this.setBridgeGame();
  }

  async setBridgeGame() {
    try {
      const bridgeSize = await InputView.readBridgeSize();
      Validator.bridgeSizeCheck(bridgeSize);
      this.game = new BridgeGame(bridgeSize);
      console.log(this.game.bridge);
      this.moveSpace();
    } catch(err) {
      MissionUtils.Console.print(err);
      this.setBridgeGame();
    }
  }

  async moveSpace() {
    try {
      const direction = await InputView.readMoving();
      Validator.directionCheck(direction);
      this.game.move(direction);
      OutputView.printMap(this.game.course);
    } catch(err) {
      MissionUtils.Console.print(err);
      this.moveSpace();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
