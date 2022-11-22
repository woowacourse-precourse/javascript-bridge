const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  size;
  bridge = [];
  count;
  result = [];
  cur;
  state;

  constructor(size) {
    this.size = size;
    this.bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.count = 0;
    this.cur = -1;
    for (let index = 0; index < size; index++) {
      this.result.push(0);
    }
    this.state = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input) {
    if (this.cur === -1) {
      this.count++;
    }
    this.cur++;
    if (input == "U") {
      if (this.bridge[this.cur] == input) {
        this.result[this.cur] = 1;
      } else {
        this.result[this.cur] = 3;
      }
    } else if (input == "D") {
      if (this.bridge[this.cur] == input) {
        this.result[this.cur] = 2;
      } else {
        this.result[this.cur] = 4;
      }
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.cur = -1;
    for (let index = 0; index < this.size; index++) this.result[index] = 0;
    this.state = 0;
  }
}

module.exports = BridgeGame;
