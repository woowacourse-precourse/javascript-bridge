const BridgeGame = require('./BridgeGame');
const Validator = require('./Utils/Validator');
const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { BRIDGE_REQUIREMENTS } = require('./constants');

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
      this.gameEndCheck();
    } catch(err) {
      MissionUtils.Console.print(err);
      this.moveSpace();
    }
  }

  gameEndCheck() {
    const lastTrace = this.game.course[this.game.course.length - 1];
    if([BRIDGE_REQUIREMENTS.LOWER_FAILED_CODE, BRIDGE_REQUIREMENTS.UPPER_FAILED_CODE].includes(lastTrace) ||
      this.game.course.length === this.game.bridge.length) {
      console.log('게임 종료');
      return MissionUtils.Console.close();
    }
    this.moveSpace();
  }
}

const app = new App();
app.play();

module.exports = App;
