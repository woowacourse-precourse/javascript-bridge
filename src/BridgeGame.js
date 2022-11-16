const RandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");

class BridgeGame {
  #size;
  #progressIdx = 0;
  #bridge = [];
  #gameCount = 1;

  start(size) {
    this.#size = size;
    this.#bridge = BridgeMaker.makeBridge(size, this.makeRandomNumber(size));
  }

  makeRandomNumber(size) {
    let tempNumberBridge = [];
    for (let i = 0; i < size; i++) {
      tempNumberBridge.push(RandomNumberGenerator.generate());
    }
    return tempNumberBridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(answer) {
    console.log(this.#bridge);
    let isCorrect = false;
    if (
      (answer == "U" && answer == this.#bridge[this.#progressIdx]) ||
      (answer == "D" && answer == this.#bridge[this.#progressIdx])
    )
      isCorrect = true;
    this.#progressIdx++;
    return isCorrect;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(answer) {
    if (answer == "R") {
      this.#gameCount += 1;
      return true;
    }
    if (answer == "Q") return false;
  }
}

module.exports = BridgeGame;
