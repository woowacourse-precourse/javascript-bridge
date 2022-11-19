const NUMBER = require('../../constants/numbers');

// 어떤 변수를 static으로 관리할 수 있을까?
// 다리 건너기 게임을 관리하는 클래스
// InputView, OutputView 호출 불가
class BridgeGame {
  #size;

  #bridge;

  #index;

  #path;

  constructor() {
    this.#size = NUMBER.ZERO;
  }

  setBridgeSize(size) {
    this.#size = size;
  }

  // 사용자가 칸을 이동할 때 사용하는 메서드
  // 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다. */}
  move() {}

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드
  // 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다. */}
  retry() {}
}

module.exports = BridgeGame;
