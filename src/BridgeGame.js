const Validator = require('./Validator');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { GAME_STATUS, FINAL_COMMAND_GROUP, POSITION, MAP_MARK } = require('./enums');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  #status = GAME_STATUS.WAITING;

  #currentLocation = 0;

  #bridge = null;

  #map = null;

  #tryCount = 0;

  constructor() {
    OutputView.printStart();
  }

  get isPlaying() {
    return this.#status === GAME_STATUS.PLAYING;
  }

  get isFailed() {
    return this.#status === GAME_STATUS.FAILED;
  }

  get isSuccess() {
    return this.#status === GAME_STATUS.SUCCEEDED;
  }

  start(bridgeSize) {
    this.#status = GAME_STATUS.PLAYING;
    this.#currentLocation = 0;
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.#map = Array.from({ length: 2 }, () => Array(this.#bridge.length).fill(' '));
  }

  move(position) {
    this.#currentLocation += 1;
    const isCorrect = this.#bridge[this.#currentLocation - 1] === position;
    if (!isCorrect) {
      this.#status = GAME_STATUS.FAILED;
      this.#setCurrentMap(position, MAP_MARK.WRONG);
      return;
    }
    this.#setCurrentMap(position, MAP_MARK.CORRECT);
    if (this.#currentLocation === this.#bridge.length) this.#status = GAME_STATUS.SUCCEEDED;
  }

  retry() {
    this.#tryCount += 1;
    this.#status = GAME_STATUS.PLAYING;
    this.#currentLocation = 0;
    this.#map = Array.from({ length: 2 }, () => Array(this.#bridge.length).fill(' '));
  }

  end() {
    this.#tryCount += 1;
    OutputView.printEnd();
    OutputView.printMap(this.#map, this.#currentLocation);
    OutputView.printResult(this.isSuccess, this.#tryCount);
    this.#status = GAME_STATUS.WAITING;
  }

  printCurrent() {
    OutputView.printMap(this.#map, this.#currentLocation);
  }

  #setCurrentMap(position, mark) {
    if (position === POSITION.UP) {
      this.#map[0][this.#currentLocation - 1] = mark;
      return;
    }
    this.#map[1][this.#currentLocation - 1] = mark;
  }

  static async readBridgeSizeInput() {
    const input = await InputView.readBridgeSize();
    Validator.validateBridgeSizeInput(input);
    return input;
  }

  static async readMoveInput() {
    const input = await InputView.readMoving();
    Validator.validateMoveInput(input);
    return input;
  }

  static async readIsRetry() {
    const input = await InputView.readGameCommand();
    Validator.validateRetryInput(input);
    return input === FINAL_COMMAND_GROUP.RETRY;
  }
}

module.exports = BridgeGame;
