const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");
const OutputView = require("../src/OutputView");
const BridgeGame = require("./BridgeGame");

class App {
  size;
  movingCount = 0;

  constructor() {
    OutputView.printStart();
    this.size = this.makeSize();
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
    if (this.checkFail(this.bridgeGame.bridge, this.bridgeGame.location)) {
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

  checkFail(bridge, location) {
    if (bridge[location] == 2 || bridge[location] == 3) {
      return true;
    }
    return false;
  }

  makeSize() {
    let size = InputView.readBridgeSize();
    size = this.validateSize(size);
    return size;
  }

  validateSize(size) {
    try {
      if (isNaN(Number(size))) {
        throw new Error("[ERROR] 숫자를 입력해야 합니다.");
      }
      if (size < 3 && 20 < size) {
        throw new Error("[ERROR] 3이상 20이하의 size를 입력해야 합니다.");
      }
      return size;
    } catch (e) {
      MissionUtils.Console.print(e.message);
      return "err";
    }
  }

  makeMoving() {
    let moving = InputView.readMoving();
    moving = this.validateMoving(moving);
    this.movingCount++;
    return moving;
  }
  validateMoving(moving) {
    try {
      if (moving !== "U" && moving !== "D")
        throw new Error("[ERROR] U나 D를 입력해야 합니다.");
      return moving;
    } catch (e) {
      MissionUtils.Console.print(e.message);
      return InputView.readMoving();
    }
  }
}

module.exports = App;
