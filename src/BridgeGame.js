/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const { DEFAULT } = require("./utils/constant");

class BridgeGame {
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
    this.setState({
      currentPosition: this.#state.currentPosition + 1,
      inputHistory: [...this.#state.inputHistory, input],
    });
    const { inputHistory, bridge } = this.#state;

    return { inputHistory, bridge };
  }

  retry(input) {
    if (input === DEFAULT.QUIT) {
      return DEFAULT.FALSE;
    }

    this.setRetryState();
    return DEFAULT.TRUE;
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

    return DEFAULT.MOVE;
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
