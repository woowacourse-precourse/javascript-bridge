const { Console, Random } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const {
  isBridgeSizeValid,
  isMovingCommandValid,
  isGameCommandValid,
} = require("./Validator");

const START_GAME = "다리 건너기 게임을 시작합니다.";

class App {
  bridge;

  play() {
    this.startGame();
    Console.close();
  }

  startGame() {
    Console.print(START_GAME);
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this.createBridge.bind(this));
  }

  createBridge(size) {
    try {
      isBridgeSizeValid(size);
      this.makeBridge(size);
      this.game = new BridgeGame(this.bridge, []);
      this.moveBridge();
    } catch (e) {
      Console.print(e);
      this.getBridgeSize();
    }
  }
  makeBridge(size) {
    this.bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }

  moveBridge() {
    let flag = true;
    let completeOneMoving = [];

    this.moveBridgeStep(flag, completeOneMoving);

    if (flag) this.endGame();
  }

  moveBridgeStep(flag, completeOneMoving) {
    while (flag && completeOneMoving.length != this.bridge.length) {
      let moving = InputView.readMoving();
      completeOneMoving = this.game.move(moving);
      flag = completeOneMoving[completeOneMoving.length - 1];

      OutputView.printMap(this.game.bridge, this.game.userBridge);
      if (!flag) this.restartOrNot();
    }
  }

  restartOrNot() {
    let selectedCmd = InputView.readGameCommand();

    if (selectedCmd == "R") {
      this.game.retry();
      this.moveBridge();
    } else {
      this.endGame();
    }
  }

  endGame() {
    OutputView.printResult(
      this.game.bridge,
      this.game.userBridge,
      this.game.attemptCnt
    );
  }
}

module.exports = App;
