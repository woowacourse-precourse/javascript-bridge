const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeSize;
  #bridge;
  #bridUpside = [];
  #bridDownside = [];
  #attemptCount = 0;
  #gameWin = true;

  gameInit() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");

    this.#bridgeSize = InputView.readBridgeSize();
    this.#bridge = BridgeMaker.makeBridge(this.#bridgeSize, generate);

    this.gameStart();

    OutputView.printResult(
      [this.#bridUpside, this.#bridDownside],
      this.#attemptCount,
      this.#gameWin
    );
  }

  gameStart() {
    this.#attemptCount++;

    for (let i = 0; i < this.#bridgeSize; i++) {
      this.move(i);
      OutputView.printMap(this.#bridUpside);
      OutputView.printMap(this.#bridDownside);

      if (this.#bridUpside.includes("X") || this.#bridDownside.includes("X"))
        this.retry();
    }
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(index) {
    let moving = InputView.readMoving();
    if (moving === "U") this.moveUpside(index);
    if (moving === "D") this.moveDownside(index);
  }

  moveUpside(index) {
    if (this.#bridge[index] === "U") {
      this.#bridUpside.push("O");
      this.#bridDownside.push(" ");
    }
    if (this.#bridge[index] !== "U") {
      this.#bridUpside.push("X");
      this.#bridDownside.push(" ");
    }
  }

  moveDownside(index) {
    if (this.#bridge[index] === "D") {
      this.#bridDownside.push("O");
      this.#bridUpside.push(" ");
    }
    if (this.#bridge[index] !== "D") {
      this.#bridDownside.push("X");
      this.#bridUpside.push(" ");
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    const gameCommand = InputView.readGameCommand();
    if (gameCommand == "R") {
      this.#bridUpside = [];
      this.#bridDownside = [];
      this.gameStart();
    }
    if (gameCommand == "Q") {
      this.#gameWin = false;
    }
  }
}

module.exports = BridgeGame;
