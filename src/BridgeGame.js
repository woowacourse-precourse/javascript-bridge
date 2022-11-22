/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const { printMap } = require("./OutputView");
const InputView = require("./InputView");
class BridgeGame {
  #bridge;
  #currentState;
  #Map;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#currentState = [];
    this.#Map = { upper: "[", lower: "[" };
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move(bridge, move) {
    const result =
      bridge[this.#currentState.length] === move ? "success" : "fail";
    this.#currentState.push(move);
    this.makeMap([this.#currentState, result]);
    printMap(this.#Map);
    if (result === "success") {
      InputView.readMoving();
    } else {
      InputView.readGameCommand();
    }
  }

  /**
   * 이동한 다리의 상태에 따라 출력할 메세지를 작성한다.
   */
  makeMap([currentState, result]) {
    for (let i = 0; i < currentState.length - 1; i++) {
      this.addSuccessMove(currentState[i]);
      this.addMark("and");
    }
    result === "success"
      ? this.addSuccessMove(currentState[currentState.length])
      : this.addFailMove(currentState[currentState.length]);
    this.addMark("end");
  }

  /**
   * 이동 성공 시 기존의 상태에 추가한다.
   */
  addSuccessMove(movement) {
    if (movement === "U") {
      this.#Map.upper += " O ";
      this.#Map.lower += "   ";
    } else {
      this.#Map.lower += " O ";
      this.#Map.upper += "   ";
    }
  }

  /**
   * 이동 실패 시 기존의 상태에 추가한다.
   */
  addFailMove(movement) {
    if (movement === "U") {
      this.#Map.upper += " X ";
      this.#Map.lower += "   ";
    } else {
      this.#Map.lower += " X ";
      this.#Map.upper += "   ";
    }
  }

  /**
   * 마지막으로 들어갈 기호를 추가한다.
   */
  addMark(state) {
    if (state === "and") {
      this.#Map.upper += "|";
      this.#Map.lower += "|";
    } else {
      this.#Map.lower += "]";
      this.#Map.upper += "]";
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
