const Bridge = require("./Bridge");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #bridgeIndex;
  #bridgeArray;
  #gameRound;
  #gameResult = "실패";

  constructor() {
    this.#bridge = new Bridge();
    this.#bridgeIndex = 0;
    this.#gameRound = 1;
  }

  makeBridge(bridgeSize) {
    this.#bridgeArray = BridgeMaker.makeBridge(bridgeSize, generate);
    console.log("bridge::", this.#bridgeArray);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   InputView, OutputView 사용 X 
  */
  isMovable() {
    let canMove = true;
    if (this.#bridge.hasX()) canMove = false;
    if (!this.#bridge.hasValidLength(this.#bridgeArray, this.#bridgeIndex))
      canMove = false;
    return canMove;
  }

  loseGame() {
    return this.#bridge.hasX();
  }

  move(moving) {
    this.#bridge.setBridge(this.#bridgeArray, this.#bridgeIndex++, moving);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#bridge.setInitial();
    this.#gameRound++;
    this.#bridgeIndex = 0;
  }

  getGameRound() {
    return this.#gameRound;
  }

  getResultBridge() {
    return [this.#bridge.getUpsideBridge(), this.#bridge.getDownsideBridge()];
  }
}

module.exports = BridgeGame;
