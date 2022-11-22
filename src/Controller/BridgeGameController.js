const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeGame = require("../Model/BridgeGame");
const Bridge = require("../Model/Bridge");
const { BRIDGE_DIRECTION } = require("../constants/GameCondition.js");
class BridgeGameController {
  #bridge_size;
  //   #random_bridge;
  #BridgeGame = new BridgeGame();

  start() {
    OutputView.printStartMessage(); // 시작 문구 출력
    InputView.readBridgeSize(this.generateBridge.bind(this));
  }

  generateBridge(size) {
    // 랜덤 다리 정보 Model에 저장.
    const randomBridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#BridgeGame.setBridge(randomBridge);
    this.inputMoveDirection();
  }

  inputMoveDirection() {
    InputView.readMoving(this.move.bind(this));
  }

  inputGameCommand(map) {
    // TODO: change
    const cmd = InputView.readGameCommand();
    if (cmd === "R") this.#BridgeGame.retry();
    if (cmd === "Q") OutputView.printResult(map, "실패", 2);
  }

  /**
   *
   * @param {char} cmd 'U', 'D' 둘 중 하나로 들어옴.
   */
  move(cmd) {
    const isSuccess = this.#BridgeGame.move(cmd);
    const map = this.#BridgeGame.getCurrentMap();
    OutputView.printMap(map[0], map[1]);
    if (!isSuccess) {
      //실패하면 게임 재시작 or 끝내기.
      this.inputGameCommand(map);
      return;
    }
    if (isSuccess && this.#BridgeGame.isEnd()) {
      //성공하면
      OutputView.printResult(map, "성공", 1);
      return;
    } else {
      this.#BridgeGame.increaseStep();
      this.inputMoveDirection();
    }
  }
}

module.exports = BridgeGameController;
