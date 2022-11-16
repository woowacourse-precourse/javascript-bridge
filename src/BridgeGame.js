const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
const BridgeMaker = require("./BridgeMaker.js");
const InputView = require("./InputView.js");
const OutputView = require("./OutputView.js");
/**
 * 다리 건너기 게임을 관리하는 클래스
 * 1. 필드를 추가할 수 있다.
 * 2. 파일 경로를 변경할 수 있다.
 * 3. 메서드의 이름은 변경할 수 없다.
 * 4. 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 5. 메서드를 추가하거나 변경할 수 있다.
 */
const { generate } = BridgeRandomNumberGenerator;

class BridgeGame {
  #answers;
  #bridge;
  #step;
  constructor() {
    this.#answers = [];
    this.#step = 0;
    this.#bridge = [];
  }
  start() {
    OutputView.printStart();
    InputView.readBridgeSize((bridgeLength) => {
      this.#bridge = BridgeMaker.makeBridge(bridgeLength, generate);
      this.move();
    });
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    InputView.readMoving((command) => {
      const isCorrect = this.#bridge[this.#step] === command;
      this.#answers.push(command);

      OutputView.printMap(
        this.#answers.slice(0, step),
        this.#bridge.slice(0, step)
      );
      if (!isCorrect) this.retry();
      this.move();
    });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
  end() {}
}

module.exports = BridgeGame;
