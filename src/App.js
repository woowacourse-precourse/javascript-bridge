const BridgeGame = require('./BridgeGame');
const Validator = require('./Utils/Validator');
const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { MOVEMENT_LOG_CODE, USER_INPUT_CODE, MESSAGES } = require('./constants');

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
    if([MOVEMENT_LOG_CODE.FAILED.UPPER, MOVEMENT_LOG_CODE.FAILED.LOWER].includes(lastTrace)) return this.isRestart();
    if(this.game.course.length === this.game.bridge.length) return this.quitGame(MESSAGES.CLEARED.SUCESSS);
    this.moveSpace();
  }

  async isRestart() {
    try {
      const command = await InputView.readGameCommand();
      Validator.restartCheck(command);
      this.runRestartCommand(command);
    } catch(err) {
      MissionUtils.Console.print(err);
      this.isRestart();
    }
  }

  runRestartCommand(command) {
    if(command === USER_INPUT_CODE.RESTART.AGREE) {
      this.game.retry();
      this.moveSpace();
    } else if(command === USER_INPUT_CODE.RESTART.QUIT) {
      this.quitGame(MESSAGES.CLEARED.FAILED);
    }
  }

  quitGame(clear) {
    OutputView.printResult(this.game.course, this.game.tryCount, clear);
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
