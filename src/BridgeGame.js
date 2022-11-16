const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
/**
 * 다리 건너기 게임을 관리하는 클래스
 */

const InputView = require("./InputView");
const OutputView = require("./OutputView");

// inputView, outputView 사용 불가
class BridgeGame {
  #current_bridge = 0;
  #bridge_map = [[], []];
  #ANSWER_BRIDGE_ARRAY;

  constructor(ANSWER_BRIDGE_ARRAY) {
    this.#ANSWER_BRIDGE_ARRAY = ANSWER_BRIDGE_ARRAY;
    console.log(this.#ANSWER_BRIDGE_ARRAY);
  }

  play() {
    console.log(this.#bridge_map);
    this.move();
  }

  async move() {
    while (this.#current_bridge < this.#ANSWER_BRIDGE_ARRAY.length) {
      const COMMAND = await InputView.readMoving();
      this.chageCommandNumber(COMMAND);
      this.#current_bridge += 1;
    }
    return this.endingPage();
  }

  async endingPage() {
    const COMMAND = await InputView.readGameCommand();
    if (COMMAND === "Q") Console.close();
    if (COMMAND === "R") this.retry();
  }

  pushBridgeArray(commandNumber, restArrayNumber) {
    if (
      String(commandNumber) === this.#ANSWER_BRIDGE_ARRAY[this.#current_bridge]
    ) {
      this.#bridge_map[commandNumber].push("O");
      this.#bridge_map[restArrayNumber].push(" ");
      return OutputView.printMap(this.#bridge_map);
    }
    this.#bridge_map[commandNumber].push("X");
    this.#bridge_map[restArrayNumber].push(" ");
    return OutputView.printMap(this.#bridge_map);
  }

  chageCommandNumber(commandString) {
    const COMMAND_NUMBER = commandString === "U" ? 1 : 0;
    const REST_ARRAY_NUMBER = COMMAND_NUMBER === 1 ? 0 : 1;
    this.pushBridgeArray(COMMAND_NUMBER, REST_ARRAY_NUMBER);
    return;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#bridge_map = [[], []];
    this.#current_bridge = 0;
    return this.play();
  }
}

module.exports = BridgeGame;
