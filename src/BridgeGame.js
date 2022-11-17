const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
const BridgeMaker = require("./BridgeMaker.js");
const InputView = require("./InputView.js");
const OutputView = require("./OutputView.js");

const { Console } = MissionUtils;

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
  #answer;
  #inputs;
  #step;
  #trial;
  constructor() {
    this.#answer = [];
    this.#inputs = [];
    this.#step = 1;
    this.#trial = 1;
  }
  start() {
    OutputView.printStart();
    InputView.readBridgeSize((bridgeLength) => {
      if (this.#answer.length === 0) {
        const answer = BridgeMaker.makeBridge(bridgeLength, generate);
        this.#answer = answer;
      }
      this.move();
    });
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    InputView.readMoving((command) => {
      this.#inputs.push(command);
      OutputView.printMap(this.#answer.slice(0, this.#step), this.#inputs);
      this.moveAfter(command);
    });
  }
  moveAfter(command) {
    const isCorrect = this.#answer[this.#step - 1] === command;

    this.#step += 1;

    if (!isCorrect) this.retry();
    this.move();
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    InputView.readGameCommand((command) => {
      if (command === "R") {
        this.restart();
        return;
      }
      this.end();
    });
  }
  restart() {
    this.#step = 1;
    this.#trial += 1;
    this.#inputs = [];
    this.move();
  }
  end() {
    OutputView.printResult(
      this.#answer.slice(0, this.#step),
      this.#inputs,
      this.#trial
    );
    Console.close();
  }
}

module.exports = BridgeGame;
