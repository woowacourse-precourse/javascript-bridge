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

    // TODO: 이후 과정을 파라메터로 넘겨주기
    InputView.readMoving();
  }

  proceedAfterMove(direction) {
    this.game.move(direction);
    OutputView.printMap(this.game);


  }



  finish() {
    OutputView.printResult(this.game);
    MissionUtils.Console.close();
  }
}

module.exports = App;
