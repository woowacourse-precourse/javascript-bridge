const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeGame = require("../Model/BridgeGame");
const Bridge = require("../Model/Bridge");
const { BRIDGE_DIRECTION } = require("./constants/GameCondition.js");
class BridgeGameController {
  #bridge_size;
  #random_bridge;
  start() {
    OutputView.printStartMessage(); // 시작 문구 출력
    this.#bridge_size = InputView.readBridgeSize(); // 다리 사이즈 입력
    this.generateBridge(this.#bridge_size); // 랜덤 다리 생성
  }

  generateBridge(size) {
    // 랜덤 다리 정보 Model에 저장.
    const randomBridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate()
    );
    BridgeGame.setBridge(randomBridge);
    this.#random_bridge = BridgeGame.getBridge();
    this.inputMoveDirection();
  }

  inputMoveDirection() {
    const cmd = InputView.readMoving();
    this.move(cmd);
  }

  gameProgress() {}
  /**
   *
   * @param {char} cmd 'U', 'D' 둘 중 하나로 들어옴.
   */
  move(cmd, step) {
    BridgeGame.move(cmd, step);
    OutputView.printMap();
    this.inputMoveDirection();
  }
}

module.exports = BridgeGameController;
