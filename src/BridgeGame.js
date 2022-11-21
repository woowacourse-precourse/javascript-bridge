const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const Bridge = require('./Bridge');
const User = require('./User');

const { UI_COMPONENT, GAME_STATUS } = require('./constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #status = '';
  #footprint = {
    upside: [],
    downside: [],
  };
  MAKE_MOVE_MAP = {
    U: (result) => {
      this.#footprint.upside.push(result);
      this.#footprint.downside.push(' ');
    },
    D: (result) => {
      this.#footprint.upside.push(' ');
      this.#footprint.downside.push(result);
    },
  };

  constructor(size) {
    this.user = new User();
    this.bridge = new Bridge(
      BridgeMaker.makeBridge(
        Number(size),
        BridgeRandomNumberGenerator.generate,
      ),
    );
  }

  getStatus() {
    return this.#status;
  }

  getCurrent() {
    const index = this.user.getIndex();
    const isCorrect =
      this.bridge.getRoute()[index] === this.user.getRoute()[index];
    const isEnd = index + 1 === this.bridge.getRoute().length;

    return {
      index,
      isCorrect,
      isEnd,
    };
  }

  setStaus() {
    const current = this.getCurrent();
    if (current.isEnd && current.isCorrect) {
      this.#status = GAME_STATUS.END;
    } else if (!current.isEnd && current.isCorrect) {
      this.#status = GAME_STATUS.NEXT;
    } else if (!current.isCorrect) {
      this.#status = GAME_STATUS.FAIL;
    }
    return this;
  }

  getFootprint() {
    return this.#footprint;
  }

  setFootprint() {
    const current = this.getCurrent();
    const result =
      this.user.getRoute()[current.index] ===
      this.bridge.getRoute()[current.index]
        ? UI_COMPONENT.CORRECT
        : UI_COMPONENT.INCORRECT;
    this.MAKE_MOVE_MAP[this.user.getRoute()[current.index]](result);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    this.user.setRoute(command);

    return this;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.user.count();
    this.user.clear();
    this.#footprint.upside = [];
    this.#footprint.downside = [];
  }

  getResult() {
    return {
      footprint: this.#footprint,
      endStatus:
        this.#status === GAME_STATUS.END
          ? UI_COMPONENT.SUCCESS
          : UI_COMPONENT.FAIL,
      tryCount: this.user.getTryCount(),
    };
  }
}

module.exports = BridgeGame;
