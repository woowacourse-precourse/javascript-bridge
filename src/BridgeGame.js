/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const InputView = require("./View/InputView.js");
const OutputView = require("./OutputView.js");

class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #state;
  constructor() {
    this.#state = {
      currentPosition: 0,
      inputHistory: [],
      bridge: [],
      tryCount: 1,
      length: 0,
    };
  }

  move(input) {
    // 값 검증
    this.setState({
      currentPosition: this.#state.currentPosition + 1,
      inputHistory: [...this.#state.inputHistory, input],
    });
    const { inputHistory, bridge } = this.#state;

    OutputView.printMap(inputHistory, bridge, "D");
    OutputView.printMap(inputHistory, bridge, "U");
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input) {
    if (input === "Q") {
      return false;
    }
    this.setRetryState();
    return true;
  }

  end() {
    const { inputHistory, bridge, tryCount, currentPosition, length } =
      this.#state;
    OutputView.printGameEnd();
    OutputView.printMap(inputHistory, bridge, "D");
    OutputView.printMap(inputHistory, bridge, "U");
    OutputView.printResult({ isSuccess: currentPosition === length, tryCount });
  }

  getNextMove(input) {
    const { currentPosition, bridge, length } = this.#state;
    if (input !== bridge[currentPosition - 1]) {
      return "Retry";
    }
    if (currentPosition === length) {
      return "End";
    }

    return "Move"; // 반복
  }

  setState(nextState) {
    this.#state = {
      ...this.#state,
      ...nextState,
    };
  }

  setRetryState() {
    this.setState({
      currentPosition: 0,
      tryCount: this.#state.tryCount + 1,
      inputHistory: [],
    });
  }
}

module.exports = BridgeGame;
