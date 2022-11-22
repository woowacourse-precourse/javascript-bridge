const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const {
  INFO_MESSAGE,
  INPUT_MESSAGE,
  STATE_CONSTANT,
  RESULT_MESSAGE,
} = require("./Constants");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { printMessage } = require("./OutputView");
const { InputValidator } = require("./utils/InputValidation");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeSize;

  #userBridge = [];

  #computedBridge = [];

  #bridgeViewTop = [];
  #bridgeViewBottom = [];

  gameStart() {
    printMessage(INFO_MESSAGE.start);
    InputView.readBridgeSize(INPUT_MESSAGE.bridgeLength, (input) => {
      InputValidator.bridgeSizeValidator(input);
      this.#bridgeSize = parseInt(input);
      this.getInput(input);
    });
  }

  getInput(input) {
    const bridge = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator);
    this.#computedBridge = bridge;
    this.userMoving();
  }

  userMoving() {
    InputView.readMoving(
      `${INPUT_MESSAGE.selectNextPosition} ${INPUT_MESSAGE.UpDown}`,
      (input) => {
        this.move(input);
      }
    );
  }

  move(input) {
    this.makeUserBridge(input);
  }

  makeUserBridge(newState) {
    this.#userBridge.push(newState);
    if (this.isCrossAllBridge()) {
      return;
    }
    let userCanGo = false;
    if (
      this.#userBridge[this.#userBridge.length - 1] ===
      this.#computedBridge[this.#userBridge.length - 1]
    ) {
      if (newState === STATE_CONSTANT.up) {
        this.drawBridge(this.#bridgeViewTop, STATE_CONSTANT.canMovePlace);
        this.drawBridge(this.#bridgeViewBottom, STATE_CONSTANT.cantMovePlace);
      } else {
        this.drawBridge(this.#bridgeViewTop, STATE_CONSTANT.cantMovePlace);
        this.drawBridge(this.#bridgeViewBottom, STATE_CONSTANT.canMovePlace);
      }
      userCanGo = true;
    }
    OutputView.makeMap({
      bridgeTop: this.#bridgeViewTop,
      bridgeBottom: this.#bridgeViewBottom,
    });
    this.nextTurn(userCanGo);
  }

  drawBridge(targetBridge, pushState) {
    targetBridge.push(pushState);
  }

  nextTurn(userCanGo) {
    userCanGo ? this.userMoving() : this.retryOrEnd();
  }

  isCrossAllBridge() {
    console.log(this.#bridgeSize, this.#userBridge.length);
    return this.#bridgeSize === this.#userBridge.length ? true : false;
  }

  retryOrEnd() {
    InputView.readGameCommand(
      `${INPUT_MESSAGE.retryEnd} ${INPUT_MESSAGE.retryEnd}`,
      (input) => {
        input === STATE_CONSTANT.retry ? this.retryGame() : this.endGame();
      }
    );
  }

  retryGame() {
    this.resetUserBridges();
    this.userMoving();
  }
  endGame() {
    OutputView.printResult();
  }

  resetUserBridges() {
    this.#userBridge = [];
    this.#bridgeViewTop = [];
    this.#bridgeViewBottom = [];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
