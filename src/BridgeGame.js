const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { INFO_MESSAGE, INPUT_MESSAGE, STATE_CONSTANT } = require("./Constants");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { printMessage } = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #userBridge = [];

  #computedBridge = [];

  #bridgeViewTop = [];
  #bridgeViewBottom = [];

  gameStart() {
    printMessage(INFO_MESSAGE.start);
    InputView.readBridgeSize(INPUT_MESSAGE.bridgeLength, (input) => {
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
        console.log(input);
      }
    );
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    this.makeUserBridge(input);
    // this.#userBridge.push(input);
    // console.log("move");
    // console.log(this.#userBridge);
  }

  makeUserBridge(newState) {
    this.#userBridge.push(newState);
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
    OutputView.printMap({
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

  retryOrEnd() {
    console.log("retry? end ?");
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
