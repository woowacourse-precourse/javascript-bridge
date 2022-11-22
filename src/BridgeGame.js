/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const InputView = require("./InputView");
const { printMap, printResult } = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { insertResult, removeResult } = require("./Util");

class BridgeGame {
  #bridge;
  #currentState;
  #Map;
  #tryNum;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#currentState = [];
    this.#Map = { upper: "[ ]", lower: "[ ]" };
    this.#tryNum = 1;
  }
  /**
   * 주어진 다리 길이에 따라 랜덤 다리를 만든다.
   * @param {number} size 생성할 다리 길이
   */
  make(size) {
    this.#bridge = BridgeMaker.makeBridge(size, generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} move 이번 시도에 이동할 칸
   */
  move(move) {
    const result =
      this.#bridge[this.#currentState.length] === move ? "성공" : "실패";
    this.#currentState.push(move);
    this.makeMap(this.#currentState, result);
    printMap(this.#Map);
    if (result === "성공") {
      if (this.#currentState.toString() === this.#bridge.toString()) {
        printResult(this.#Map, this.#tryNum, "성공");
      } else {
        InputView.readMoving(this);
      }
    } else {
      InputView.readGameCommand(this);
    }
  }

  /**
   * 이동한 다리의 상태에 따라 출력할 메세지를 작성한다.
   * @param {string[]} currentState 현재까지 이동한 칸
   * @param {string} result 이번 시도의 이동 성공 여부
   */
  makeMap(currentState, result) {
    if (currentState.length > 1) {
      this.#Map.upper = insertResult(this.#Map.upper, "| ");
      this.#Map.lower = insertResult(this.#Map.lower, "| ");
    }

    result === "성공"
      ? this.addSuccessMove(currentState[currentState.length - 1])
      : this.addFailMove(currentState[currentState.length - 1]);
  }

  /**
   * 이동 성공 시 기존의 상태에 추가한다.
   * @param {string} movement 이동할 칸
   */
  addSuccessMove(movement) {
    if (movement === "U") {
      this.#Map.upper = insertResult(this.#Map.upper, "O ");
      this.#Map.lower = insertResult(this.#Map.lower, "  ");
    } else {
      this.#Map.upper = insertResult(this.#Map.upper, "  ");
      this.#Map.lower = insertResult(this.#Map.lower, "O ");
    }
  }

  /**
   * 이동 실패 시 기존의 상태에 추가한다.
   * @param {string} movement 이동할 칸
   */
  addFailMove(movement) {
    if (movement === "U") {
      this.#Map.upper = insertResult(this.#Map.upper, "X ");
      this.#Map.lower = insertResult(this.#Map.lower, "  ");
    } else {
      this.#Map.upper = insertResult(this.#Map.upper, "  ");
      this.#Map.lower = insertResult(this.#Map.lower, "X ");
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * @param {string} retry 재시도 여부
   */
  retry(retry) {
    if (retry === "R") {
      this.revert();
      this.#tryNum += 1;
      InputView.readMoving(this);
    } else {
      this.makeMap(this.#currentState, "실패");
      printResult(this.#Map, this.#tryNum, "실패");
    }
  }
  /**
   * 직전 시행 결과를 되돌린다.
   */
  revert() {
    this.#currentState.pop();
    this.#Map.upper = removeResult(this.#Map.upper);
    this.#Map.lower = removeResult(this.#Map.lower);
  }
}

module.exports = BridgeGame;
