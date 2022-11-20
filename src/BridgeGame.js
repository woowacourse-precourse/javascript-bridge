const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView.js");
const OutputView = require("./OutputView.js");
const Validation = require("./Validation.js");
const Bridge = require("./Bridge.js");

const { Console } = MissionUtils;

class BridgeGame {
  #bridge;
  #inputs;
  #trial;

  constructor() {
    this.#bridge = new Bridge();
    this.#inputs = [];
    this.#trial = 1;
  }
  start() {
    OutputView.printStart();
    InputView.readBridgeSize(this.start.bind(this), (bridgeLength) => {
      if (this.#bridge.length === 0) {
        this.#bridge.init(bridgeLength);
      }
      this.move();
    });
  }
  move() {
    const current = this.move.bind(this);

    InputView.readMoving(current, (command) => {
      this.#inputs.push(command);
      this.#bridge.move();
      OutputView.printMap(this.#bridge.currentStage, this.#inputs);
      this.moveAfter(command);
    });
  }
  #doWhenWrongAnswer() {
    this.retry();
  }
  #doWhenRightAnswer() {
    if (Validation.isSame(this.#bridge.length, this.#inputs.length)) {
      this.end();
      return;
    }
    this.move();
  }
  moveAfter(command) {
    if (Validation.isDifferent(this.#bridge.currentAnswer, command)) {
      this.#doWhenWrongAnswer();
      return;
    }
    this.#doWhenRightAnswer();
  }

  retry() {
    const current = this.retry.bind(this);
    InputView.readGameCommand(current, (command) => {
      if (command === "R") {
        this.restart();
        return;
      }
      this.end();
    });
  }
  restart() {
    this.#bridge.reset();
    this.#trial += 1;
    this.#inputs = [];
    this.move();
  }
  end() {
    OutputView.printResult(
      this.#bridge.currentStage,
      this.#inputs,
      this.#trial
    );
    Console.close();
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
