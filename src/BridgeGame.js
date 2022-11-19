const { Console } = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const { MOVING, CALCULATION } = require("./constants/values");
const { OUTPUT } = require("./constants/messages");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #movingList;
  #attempts;

  constructor() {
    this.#bridge = [];
    this.#movingList = [[], []];
    this.#attempts = 1;
  }
  /**
   * 사용자가 다리를 이용할 수 있도록 준비하는 메서드
   */
  ready(size) {
    const bridge = BridgeMaker.makeBridge(
      parseInt(size, CALCULATION.DECIMAL_NUMBER),
      BridgeRandomNumberGenerator.generate
    );

    this.#bridge = bridge;
    Console.print(OUTPUT.BLANK);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    const currentIndex = this.#movingList[0].length;

    if (moving === MOVING.UPPER) {
      return this.moveToUpper(moving, currentIndex);
    } else {
      return this.moveToLower(moving, currentIndex);
    }
  }

  /**
   * 사용자가 위 칸으로 이동할 때 사용하는 메서드
   */
  moveToUpper(moving, currentIndex) {
    if (moving === this.#bridge[currentIndex]) {
      this.#movingList[0].push(MOVING.RIGHT_ANSWER);
      this.#movingList[1].push(MOVING.BLANK);
    } else {
      this.#movingList[0].push(MOVING.WRONG_ANSWER);
      this.#movingList[1].push(MOVING.BLANK);
    }

    return this.print();
  }

  /**
   * 사용자가 아래 칸으로 이동할 때 사용하는 메서드
   */
  moveToLower(moving, currentIndex) {
    if (moving === this.#bridge[currentIndex]) {
      this.#movingList[1].push(MOVING.RIGHT_ANSWER);
      this.#movingList[0].push(MOVING.BLANK);
    } else {
      this.#movingList[1].push(MOVING.WRONG_ANSWER);
      this.#movingList[0].push(MOVING.BLANK);
    }

    return this.print();
  }

  /**
   * 게임 진행 상황을 출력할 때 사용하는 메서드
   */
  print() {
    return OutputView.printMap(this.#movingList);
  }

  /**
   * 다리를 잘못 건넜을 때 사용하는 메서드
   */
  hasWrong() {
    const result = this.#movingList.flat().includes(MOVING.WRONG_ANSWER);
    return result;
  }

  /**
   * 다리를 모두 건넜을 때 사용하는 메서드
   */
  hasAll() {
    const result = this.#movingList[0].length === this.#bridge.length;
    return result;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#attempts += 1;
    this.#movingList = [[], []];
  }

  /**
   * 최종 결과를 출력하고 게임을 종료하는 메서드
   */
  finish(result) {
    OutputView.printResult(this.#movingList, result, this.#attempts);
    Console.close();
  }
}

module.exports = BridgeGame;
