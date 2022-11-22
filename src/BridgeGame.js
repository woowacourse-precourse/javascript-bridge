const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const InputHandler = require('./InputView');
const OutputHandler = require('./OutputView');

class BridgeGame {
  #userInput = "";
  #COUNT = 1;

  constructor() {}
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(item) {
    this.#userInput = InputHandler.readMoving();
    if (item != this.#userInput) {
      OutputHandler.printMap(this.#userInput, false);
      return false;
    }
    else if (item == this.#userInput) {
      OutputHandler.printMap(this.#userInput, true);
      return true;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    let input = InputHandler.readGameCommand();
    if (input == "R") {
      OutputHandler.initArray();
      this.#COUNT += 1;
    }
    else if (input == "Q") {
      OutputHandler.printResult("실패", this.#COUNT);
      MissionUtils.Console.close();
    }
  }

  getCount() {
    return this.#COUNT;
  }
}

module.exports = BridgeGame;
