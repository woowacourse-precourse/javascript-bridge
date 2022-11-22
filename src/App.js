const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");
const OutputView = require("../src/OutputView");
const BridgeGame = require("./BridgeGame");

class App {
  gameCnt = 1;
  movingCount = 0;

  constructor() {
    OutputView.printStart();
  }

  play() {
    let size = this.makeSize();
    if (size == "err") return;
    MissionUtils.Console.print(size);
    const bridgeGame = new BridgeGame(size);
    MissionUtils.Console.print(bridgeGame.bridge);
    let command;
    do {
      let moving = this.makeMoving();
      MissionUtils.Console.print(moving);
      MissionUtils.Console.print(bridgeGame.location);
      bridgeGame.move(moving);
      MissionUtils.Console.print(bridgeGame.bridge);
      OutputView.printMap(bridgeGame.bridge, bridgeGame.location);
      command = true;
      if (this.checkFail(bridgeGame.bridge, bridgeGame.location)) {
        if (InputView.readGameCommand() == "Q") command = false;
        else {
          this.gameCnt++;
          this.movingCount = 0;
          bridgeGame.retry();
        }
      }
      if (this.movingCount == size) command = false;
    } while (command);

    OutputView.printResult(
      bridgeGame.bridge,
      bridgeGame.location,
      this.gameCnt
    );
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
