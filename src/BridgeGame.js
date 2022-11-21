/**
 * 다리 건너기 게임을 관리하는 클래스
- 제공된 `BridgeGame` 클래스를 활용해 구현해야 한다.
- `BridgeGame`에 필드(인스턴스 변수)를 추가할 수 있다.
- `BridgeGame`의 파일 경로는 변경할 수 있다.
- `BridgeGame`의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
- 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
`BridgeGame` 클래스에서 `InputView`, `OutputView` 를 사용하지 않는다.
 */
class BridgeGame {
  #bridge = [];

  constructor(bridge) {
    this.#bridge = bridge;
  }

  move() {}

  retry() {}
}

module.exports = BridgeGame;
