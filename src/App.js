const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { MissionUtils } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.game = null;
  }

  play() { }

  proceedAfterGettingBridgeSize(size) {
    const PATH = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.game = new BridgeGame(PATH);

    InputView.readMoving(this.proceedAfterMove);
  }

  proceedAfterMove(direction) {
    this.game.move(direction);
    OutputView.printMap(this.game);

    // TODO: 게임 재시작 및 종료 이후 과정을 파라미터에 넘겨주자.
    (this.game.isGoingCorrect()) ? this.handleCorrectCase() : InputView.readGameCommand();
  }

  handleCorrectCase() {
    (this.game.crossedAll()) ? this.finish() : InputView.readMoving(this.proceedAfterMove);
  }

  finish() {
    OutputView.printResult(this.game);
    MissionUtils.Console.close();
  }
}

module.exports = App;
