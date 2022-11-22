const Validation = require("./Validation.js");
const Bridge = require("./Bridge.js");

class BridgeGame {
  #bridge;
  #inputs;
  #trial;
  #step;
  constructor() {
    this.#bridge = new Bridge();
    this.#inputs = new Bridge();
    this.#step = 0;
    this.#trial = 1;
  }
  start(bridgeLength) {
    if (this.#bridge.getLength() === 0) {
      this.#bridge.generate(bridgeLength);
    }
  }
  move(command) {
    this.#inputs.addAnswer(command);
    this.#step += 1;
    return {
      bridge: this.#bridge.currentStage(this.#step),
      inputs: this.#inputs.currentStage(this.#step),
    };
  }

  isAnswer() {
    if (Validation.isSame(this.#bridge.getLength(), this.#inputs.getLength())) {
      return true;
    }
    return false;
  }
  moveAfter(command) {
    if (
      Validation.isDifferent(this.#bridge.currentAnswer(this.#step), command)
    ) {
      return false;
    }
    return true;
  }

  retry() {
    this.#step = 0;
    this.#trial += 1;
    this.#inputs.reset();
  }
  end() {
    return {
      bridge: this.#bridge.currentStage(this.#step),
      inputs: this.#inputs.currentStage(this.#step),
      trial: this.#trial,
    };
  }
}

module.exports = BridgeGame;

/**
 * 다리 건너기 게임을 관리하는 클래스
 * 1. 필드를 추가할 수 있다.
 * 2. 파일 경로를 변경할 수 있다.
 * 3. 메서드의 이름은 변경할 수 없다.
 * 4. 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 5. 메서드를 추가하거나 변경할 수 있다.
 */
