const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");
const { VALUES, GAME_UTILS } = require("../utils/constants");
const ViewController = require("../controller/ViewController");
const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeSize;
  #bridge;
  #upperBridge = [];
  #lowerBridge = [];
  #gameRound = VALUES.INITIAL_GAME_ROUND;
  #numberOfTrials = VALUES.INITIAL_TRIAL_NUMBER;

  start() {
    ViewController.input.bridgeSize(this.#generateBridge.bind(this));
  }

  #generateBridge(size) {
    this.#bridgeSize = parseInt(size);
    this.#bridge = makeBridge(this.#bridgeSize, generate);
    ViewController.input.moving(this.#move.bind(this));
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #move(command) {
    if (command === this.#bridge[this.#gameRound]) {
      this.#handleCorrectMove(command);
    } else if (command !== this.#bridge[this.#gameRound]) {
      this.#handleWrongMove(command);
    }
  }

  #handleCorrectMove(command) {
    this.#buildBridgeUsingInput(command, GAME_UTILS.MARK_CORRECT_MOVE);
    ViewController.output.map(this.#upperBridge, this.#lowerBridge);
    this.#gameRound += 1;
    if (this.#gameRound === this.#bridgeSize) {
      this.#gameOver();
    }
    if (this.#gameRound < this.#bridgeSize) ViewController.input.moving(this.#move.bind(this));
  }

  #handleWrongMove(command) {
    this.#buildBridgeUsingInput(command, GAME_UTILS.MARK_WRONG_MOVE);
    ViewController.output.map(this.#upperBridge, this.#lowerBridge);
    ViewController.input.gameCommand(this.#retry.bind(this));
  }

  #buildBridgeUsingInput(direction, result) {
    if (direction === GAME_UTILS.COMMAND_UPWARD) {
      this.#upperBridge.push(result);
      this.#lowerBridge.push(GAME_UTILS.MARK_UNCHOSEN_BRIDGE);
    }
    if (direction === GAME_UTILS.COMMAND_DOWNWARD) {
      this.#lowerBridge.push(result);
      this.#upperBridge.push(GAME_UTILS.MARK_UNCHOSEN_BRIDGE);
    }
  }

  #gameOver() {
    const RESULT_BRIDGE = [this.#upperBridge, this.#lowerBridge];
    if (this.#gameRound === this.#bridgeSize) {
      ViewController.output.result(this.#numberOfTrials, GAME_UTILS.GAME_RESULT_WIN, RESULT_BRIDGE);
    } else if (this.#gameRound !== this.#bridgeSize) {
      ViewController.output.result(this.#numberOfTrials, GAME_UTILS.GAME_RESULT_LOSE, RESULT_BRIDGE);
    }
    MissionUtils.Console.close();
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #retry(command) {
    if (command === GAME_UTILS.COMMAND_RESTART) {
      this.#numberOfTrials += 1;
      this.#initializeGameStatus();
      ViewController.input.moving(this.#move.bind(this));
    } else if (command === GAME_UTILS.COMMAND_QUIT) {
      this.#gameOver();
    }
  }
  #initializeGameStatus() {
    this.#upperBridge = [];
    this.#lowerBridge = [];
    this.#gameRound = VALUES.INITIAL_GAME_ROUND;
  }
}

module.exports = BridgeGame;
