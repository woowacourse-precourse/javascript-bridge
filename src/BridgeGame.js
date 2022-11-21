/**
 * 다리 건너기 게임을 관리하는 클래스
 */

const InputView = require("../src/InputView");
const OutputView = require("../src/OutputView");
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  size;
  retryTime = 0;
  bridge;
  location = 0;

  getSize() {
    return this.size;
  }

  setBridge(string) {
    this.bridge = string;
    this.size = string.length;
    OutputView.setSize(this.size);
  }

  getBridge() {
    return this.bridge;
  }

  getLocation() {
    return this.location;
  }

  changeLocation() {
    this.location += 1;
  }

  getRetry() {
    return this.retryTime;
  }

  move(playerInput, index) {
    if (index === this.size - 1) {
      throw 2;
    }
    this.checkRight(playerInput, index);
    this.checkWrong(playerInput, index);
  }

  checkRight(playerInput, index) {
    if (playerInput === this.bridge[index]) {
      if (index === this.size - 1) {
        throw 2;
      }
      return 1;
    }
  }

  checkWrong(playerInput, index) {
    if (playerInput !== this.bridge[index]) {
      if (index === this.size - 1) {
        throw 2;
      }
      throw 0;
    }
  }

  right(playerInput) {
    if (playerInput === "U") {
    }
  }

  wrong() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.retryTime += 1;
    this.location = 0;
  }
}

module.exports = BridgeGame;
