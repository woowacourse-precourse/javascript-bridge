class BridgeGameController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  start() {
    this.#view.printStart();
    this.#requestBridgeSize();
  }

  #requestBridgeSize() {
    this.#view.readBridgeSize(this.#handleInputBridgeSize.bind(this));
  }

  #handleInputBridgeSize(size) {
    try {
      const bridgeSize = Number(size);

      this.#model.makeBridge(bridgeSize);
      this.#requestMoveDirection();
    } catch (error) {
      this.#view.print(`\n${error.message}\n`);
      this.#requestBridgeSize();
    }
  }

  #requestMoveDirection(round = 0) {
    if (this.#model.isLastRound(round)) {
      return;
    }

    this.#view.readMoving(this.#handleInputMoveDirection.bind(this, round));
  }

  #handleInputMoveDirection(round, direction) {
    try {
      const { map, movingState } = this.#model.move(round, direction);
      const progress = movingState
        ? this.#requestMoveDirection.bind(this, round + 1)
        : this.retry.bind(this);

      this.#view.printMap(map);
      progress();
    } catch (error) {
      this.#view.print(`\n${error.message}\n`);
      this.#requestMoveDirection(round);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  /**
   * 사용자가 게임을 종료할 때 사용하는 메서드
   */
  quit() {}
}

module.exports = BridgeGameController;
