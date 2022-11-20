/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #turn = 0;
  #isUserAlive = true;

  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  start() {
    this.move();
    if (this.#isUserAlive && this.#turn !== this.model.bridge.length) {
      this.start();
    }
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.view.readMoving(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)',
      (userMove) => {
        this.#isUserAlive = this.model.aliveOrDeath(userMove, this.#turn);
        this.#turn += 1;
        this.view.printMap(this.model.upsideBridge, this.model.downSideBridge);
      },
    );
  }

  getBridgeSize() {
    this.view.readBridgeSize('다리의 길이를 입력해주세요. ', (bridgeSize) => {
      this.model.genBridge(bridgeSize);
    });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
