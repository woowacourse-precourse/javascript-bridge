const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");

class App {
  bridge;
  play() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }
  makeBridge(size) {
    try {
      this.isRangeNumber(Number(size));
      this.isNumber(Number(size));
      this.bridge = BridgeMaker.makeBridge(
        size,
        BridgeRandomNumberGenerator.generate
      );
      this.bridgeGame = new BridgeGame(this.bridge, []);
      this.playGame();
    } catch {}
  }
  playGame() {
    var change = true;
    var move = [];
    while (move.length != this.bridge.length && change) {
      var moving = InputView.readMoving();
      move = this.bridgeGame.move(moving);
      OutputView.printMap(this.bridgeGame.bridge, this.bridgeGame.inputBridge);
      change = move[move.length - 1];
      if (!change) this.restart();
    }
    if (change) this.ending();
  }
  ending() {
    OutputView.printResult(this.bridgeGame.bridge, this.bridgeGame.inputBridge);
    MissionUtils.Console.print(
      `총 시도한 횟수: ${this.bridgeGame.getGameCount()}`
    );
    MissionUtils.Console.close();
  }
  restart() {
    if (this.bridgeGame.retry(InputView.readGameCommand())) {
      this.playGame();
    } else {
      this.ending();
    }
  }

  isRangeNumber(number) {
    if (number < 3 || number > 20) {
      MissionUtils.Console.print(
        "[ERROR] 다리 길이는 3 이상 20 이하의 숫자를 입력하세요."
      );
      throw new Error(
        "[ERROR] 다리 길이는 3 이상 20 이하의 숫자를 입력하세요."
      );
    }
  }

  isNumber(number) {
    if (Number.isNaN(number)) {
      MissionUtils.Console.print("[ERROR] 숫자를 입력하세요.");
      if (isNaN(number)) {
        throw new Error("[ERROR] 숫자를 입력하세요.");
      }
    }
  }
}
module.exports = App;
