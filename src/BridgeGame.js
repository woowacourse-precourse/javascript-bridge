const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { printMap } = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeSize;
  #bridgeUpside;
  #bridgeDownside;
  #attemptCount = 0;
  bridgeUpsideForPrint = [];
  bridgeDownsideForPrint = [];

  gameStart() {
    this.#attemptCount++;

    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");

    this.#bridgeSize = InputView.readBridgeSize();

    [this.#bridgeUpside, this.#bridgeDownside] = BridgeMaker.makeBridge(
      this.#bridgeSize,
      generate
    );

    for (let i = 0; i < this.#bridgeSize; i++) {
      this.move(i);
      printMap(this.bridgeUpsideForPrint);
      printMap(this.bridgeDownsideForPrint);
    }
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(index) {
    let moving = InputView.readMoving();
    if (moving === "U") {
      if (this.#bridgeUpside[index] === "U") {
        this.bridgeUpsideForPrint.push("O");
        this.bridgeDownsideForPrint.push(" ");
      }
      if (this.#bridgeUpside[index] !== "U") {
        this.bridgeUpsideForPrint.push("X");
        this.bridgeDownsideForPrint.push(" ");
      }
    }
    if (moving === "D") {
      if (this.#bridgeDownside[index] === "D") {
        this.bridgeDownsideForPrint.push("O");
        this.bridgeUpsideForPrint.push(" ");
      }
      if (this.#bridgeDownside[index] !== "D") {
        this.bridgeDownsideForPrint.push("X");
        this.bridgeUpsideForPrint.push(" ");
      }
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
