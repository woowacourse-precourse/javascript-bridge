const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  static bridge;
  static location;
  constructor(size) {
    this.bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.location = -1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  //(moving, answer 꼴로 U,U=1 U,D=2 D,U=3 D,D=4 로 맵핑)
  move(moving) {
    this.location++;
    if (this.bridge[this.location] == moving && moving == "U")
      this.bridge[this.location] = 1;
    if (this.bridge[this.location] != moving && moving == "U")
      this.bridge[this.location] = 2;
    if (this.bridge[this.location] != moving && moving == "D")
      this.bridge[this.location] = 3;
    if (this.bridge[this.location] == moving && moving == "D")
      this.bridge[this.location] = 4;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
