const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const ViewController = require("./ViewController");
const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeSize;
  #bridge;
  #upperBridge = [];
  #lowerBridge = [];
  #gameRound = 0;
  numberOfTrials = 1;

  constructor(size) {
    this.#bridgeSize = size;
    this.#bridge = makeBridge(this.#bridgeSize, generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async move() {
    // 상수화 필요
    const COMMAND = await ViewController.input.moving();
    if (COMMAND === this.#bridge[this.#gameRound]) {
      this.handleCorrectMove(COMMAND);
    } else if (COMMAND !== this.#bridge[this.#gameRound]) {
      this.handleWrongMove(COMMAND);
    }
  }
  handleCorrectMove(command) {
    //상수화 필요
    this.buildBridgeUsingInput(command, "O");
    ViewController.output.map(this.#upperBridge, this.#lowerBridge);
    this.#gameRound += 1;
    if (this.#gameRound === this.#bridgeSize) {
      ViewController.output.result(this.numberOfTrials, "성공", [this.#upperBridge, this.#lowerBridge]);
      MissionUtils.Console.close();
    }
    if (this.#gameRound < this.#bridgeSize) this.move();
  }
  handleWrongMove(command) {
    this.buildBridgeUsingInput(command, "X");
    ViewController.output.map(this.#upperBridge, this.#lowerBridge);
    this.#upperBridge = [];
    this.#lowerBridge = [];
    this.#gameRound = 0;
    this.retry();
  }
  buildBridgeUsingInput(direction, result) {
    // 상수화 필요
    if (direction === "U") {
      this.#upperBridge.push(result);
      this.#lowerBridge.push(" ");
    }
    if (direction === "D") {
      this.#lowerBridge.push(result);
      this.#upperBridge.push(" ");
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async retry() {
    const COMMAND = await ViewController.input.gameCommand();
    if (COMMAND === "R") {
      this.numberOfTrials += 1;
      this.move();
    } else if (COMMAND === "Q") {
      ViewController.output.result(this.numberOfTrials, "실패", [this.#upperBridge, this.#lowerBridge]);
      MissionUtils.Console.close();
    }
  }
}

module.exports = BridgeGame;
