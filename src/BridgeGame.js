const Validation = require("./Validation.js");
const Bridge = require("./Bridge.js");

class BridgeGame {
  #bridge;
  #inputs;
  #trial;

  constructor() {
    this.#bridge = new Bridge();
    this.#inputs = [];
    this.#trial = 1;
  }
  start(bridgeLength) {
    if (this.#bridge.length === 0) {
      this.#bridge.init(bridgeLength);
    }
  }
  move(command) {
    this.#inputs.push(command);
    this.#bridge.move();
    return { bridge: this.#bridge.currentStage, inputs: this.#inputs.slice() };
  }

  isAnswer() {
    if (Validation.isSame(this.#bridge.length, this.#inputs.length)) {
      return true;
    }
    return false;
  }
  moveAfter(command) {
    if (Validation.isDifferent(this.#bridge.currentAnswer, command)) {
      return false;
    }
    return true;
  }

  retry() {
    this.#bridge.reset();
    this.#trial += 1;
    this.#inputs = [];
  }
  end() {
    return {
      bridge: this.#bridge.currentStage,
      inputs: this.#inputs.slice(),
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
