/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const { DEFAULT } = require("./utils/constant.js");

class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #state;
  constructor() {
    this.#state = {
      currentPosition: DEFAULT.ZERO,
      inputHistory: DEFAULT.EMPTY_ARRAY,
      bridge: DEFAULT.EMPTY_ARRAY,
      tryCount: DEFAULT.ONE,
      length: DEFAULT.ZERO,
    };
  }

  move(input) {
    // 값 검증
    this.setState({
      currentPosition: this.#state.currentPosition + 1,
      inputHistory: [...this.#state.inputHistory, input],
    });
    const { inputHistory, bridge } = this.#state;

    return { inputHistory, bridge };
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input) {
    if (input === DEFAULT.QUIT) {
      return false;
    }
    this.setRetryState();
    return true;
  }

  end() {
    const { inputHistory, bridge, tryCount, currentPosition, length } =
      this.#state;

    return {
      inputHistory,
      bridge,
      isSuccess: currentPosition === length,
      tryCount,
    };
  }

  getNextMove(input) {
    const { currentPosition, bridge, length } = this.#state;
    if (input !== bridge[currentPosition - 1]) {
      return DEFAULT.RETRY;
    }
    if (currentPosition === length) {
      return DEFAULT.END;
    }

    return DEFAULT.MOVE; // 반복
  }

  setState(nextState) {
    this.#state = {
      ...this.#state,
      ...nextState,
    };
  }

  setRetryState() {
    this.setState({
      currentPosition: DEFAULT.ZERO,
      tryCount: this.#state.tryCount + 1,
      inputHistory: DEFAULT.EMPTY_ARRAY,
    });
  }
}

module.exports = BridgeGame;
