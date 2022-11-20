const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.game = null;
  }

  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.proceedAfterGettingBridgeSize);
  }

  /**
   * 다리 길이 입력을 받은 후의 과정
   * @param {number} size 입력된 다리 길이
   */
  proceedAfterGettingBridgeSize = (size) => {
    const PATH = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.game = new BridgeGame(PATH);

    InputView.readMoving(this.proceedAfterMove);
  }

  /**
   * 이동 입력을 받은 후의 과정
   * @param {string} direction 입력된 이동
   */
  proceedAfterMove = (direction) => {
    this.game.move(direction);
    OutputView.printMap(this.game);

    (this.game.isGoingCorrect()) ? this.handleCorrectCase() : InputView.readGameCommand(this.handleGameCommand);
  }

  /**
   * 올바르게 다리를 건넌 후의 과정
   */
  handleCorrectCase = () => {
    (this.game.crossedAll()) ? this.finish() : InputView.readMoving(this.proceedAfterMove);
  }

  /**
   * 게임 재시작 및 종료 과정
   * @param {string} command 입력된 커맨드
   */
  handleGameCommand = (command) => {
    switch (command) {
      case "R":
        this.game.retry();
        InputView.readMoving(this.proceedAfterMove);
        break;

      case "Q":
        this.finish();
        break;
    }
  }

  /**
   * 게임 종료 과정
   */
  finish = () => {
    OutputView.printResult(this.game);
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
