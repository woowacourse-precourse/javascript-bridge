const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridge;
  bridgeResult;

  constructor(bridge, bridgeResult) {
    this.bridge = bridge;
    this.bridgeResult = bridgeResult;
  }

  setBridge(bridge) {
    this.bridge = bridge;
  }

  getBridge() {
    return this.bridge;
  }

  setBridgeResult(bridgeResult) {
    this.bridgeResult = bridgeResult;
  }

  getBridgeResult() {
    return this.bridgeResult;
  }

  createBridge(size) {
    this.bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    return this.bridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving, position) {
    this.bridgeOX(moving, position);
    this.bridgeBlank();
    return this.bridgeResult;
  }

  bridgeOX(moving, position) {
    if (moving === "U")
      this.bridgeResult[0].push(this.returnXOrO(moving, position));
    if (moving === "D")
      this.bridgeResult[1].push(this.returnXOrO(moving, position));
  }

  returnXOrO(moving, position) {
    if (moving === this.bridge[position]) return "O";
    else return "X";
  }

  bridgeBlank() {
    if (this.bridgeResult[0].length > this.bridgeResult[1].length) {
      this.bridgeResult[1].push(" ");
    }
    if (this.bridgeResult[0].length < this.bridgeResult[1].length) {
      this.bridgeResult[0].push(" ");
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    if (
      this.bridgeResult[0].includes("X") ||
      this.bridgeResult[1].includes("X")
    ) {
      this.bridgeResult = [[], []];
    }
    return this.bridgeResult;
  }
}

module.exports = BridgeGame;
