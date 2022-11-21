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
    this.generateBridge(InputView.readBridgeSize()); // 랜덤 다리 생성
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
    const cmd = InputView.readMoving();
    // this.move(cmd);
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
      const cmd = InputView.readGameCommand();
      if (cmd === "R") {
      }
      if (cmd === "Q") {
      }
    }
    if (isSuccess) {
      //성공이면 게임이 끝났는지 안끝났는지 확인해야한다.
      this.inputMoveDirection();
    }
  }
}

module.exports = BridgeGameController;
