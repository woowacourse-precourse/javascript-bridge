const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");

class App {
  constructor() {}

  play() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(size) {
    this.validateSize(size);
    this.bridgeString = BridgeMaker.makeBridge(
      Number(size),
      BridgeRandomNumberGenerator.generate
    );
    this.BridgeGame = new BridgeGame(this.bridgeString);
    this.playGame();
  }

  playGame() {
    let change = true;
    let move = [];

    while (move.length != this.bridgeString.length && change) {
      let moving = InputView.readMoving();
      move = this.BridgeGame.move(moving);
      OutputView.printMap(this.BridgeGame.bridge, this.BridgeGame.inputBridge);
      change = move[move.length - 1];
      if (!change) this.restart();
    }
    if (change) this.end();
  }

  end() {
    OutputView.printResult(this.BridgeGame.bridge, this.BridgeGame.inputBridge);
    MissionUtils.Console.print(
      `총 시도한 횟수: ${this.BridgeGame.getTrialCount()}`
    );
    MissionUtils.Console.close();
  }

  restart() {
    if (this.BridgeGame.retry(InputView.readGameCommand())) {
      this.playGame();
    } else {
      this.end();
    }
  }

  validateSize(size) {
    if (Number.isNaN(size)) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 숫자를 입력하세요.");
    }

    const numberedSize = Number(size);

    if (numberedSize < 3 || numberedSize > 20) {
      MissionUtils.Console.close();
      throw new Error(
        "[ERROR] 다리 길이는 3 이상 20 이하의 숫자를 입력하세요."
      );
    }
  }
}

module.exports = App;
