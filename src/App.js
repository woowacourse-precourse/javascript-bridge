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
  }

  startGame() {
    Console.print(START_GAME);
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this.createBridge.bind(this));
  }

  //다리생성
  createBridge(size) {
    try {
      isBridgeSizeValid(size);
      this.bridge = BridgeMaker.makeBridge(
        size,
        BridgeRandomNumberGenerator.generate
      );
      this.game = new BridgeGame(this.bridge, []);
      this.moveBridge();
    } catch (e) {
      Console.print(e);
      this.getBridgeSize();
    }
  }

  //게임 진행
  moveBridge() {
    let flag = true;
    let completeOneMoving = [];

    while (flag && completeOneMoving.length != this.bridge.length) {
      let moving = InputView.readMoving();
      completeOneMoving = this.game.move(moving);
      OutputView.printMap(this.game.bridge, this.game.userBridge);

      flag = completeOneMoving[completeOneMoving.length - 1];
      if (!flag) this.restartOrNot();
    }
    if (flag) this.endGame();
  }

  //재시작 여부
  restartOrNot() {
    let selectedCmd = InputView.readGameCommand();

    if (selectedCmd == "R") {
      this.game.retry();
      this.moveBridge();
    } else {
      this.endGame();
    }
  }

  //게임 종료
  endGame() {
    OutputView.printResult(
      this.game.bridge,
      this.game.userBridge,
      this.game.attemptCnt
    );
  }
}

module.exports = App;
