const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");
const OutputView = require("../src/OutputView");
const BridgeGame = require("./BridgeGame");

class App {
  size;
  movingCount = 0;

  constructor() {
    OutputView.printStart();
    this.size = InputView.readBridgeSize();
    this.bridgeGame = new BridgeGame(this.size);
  }

  play() {
    if (this.size == "err") return;
    while (this.playingBridge());
    OutputView.printResult(
      this.bridgeGame.bridge,
      this.bridgeGame.location,
      this.bridgeGame.gameCnt
    );
  }

  playingBridge() {
    this.bridgeGame.move(this.makeMoving());
    OutputView.printMap(this.bridgeGame.bridge, this.bridgeGame.location);
    return this.checkGameEnd();
  }

  checkGameEnd() {
    if (this.bridgeGame.checkFail()) {
      if (InputView.readGameCommand() == "Q") return false;
      else {
        this.gameCnt++;
        this.movingCount = 0;
        this.bridgeGame.retry();
      }
    }
    if (this.movingCount == this.size) return false;
    return true;
  }

  makeMoving() {
    let moving = InputView.readMoving();
    if (moving == "err") return;
    this.movingCount++;
    return moving;
  }
}

module.exports = App;
