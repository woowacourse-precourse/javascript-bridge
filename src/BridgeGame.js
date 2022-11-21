const Validator = require('./Validator');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { GAME_STATUS, FINAL_COMMAND_GROUP, POSITION } = require('./enums');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  #status = GAME_STATUS.WAITING;

  #currentLocation = 0;

  #bridge = null;

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
  }

  move(position) {
    const isCorrect = this.#bridge[this.#currentLocation] === position;
    if (!isCorrect) {
      this.#status = GAME_STATUS.FAILED;
      return;
    }
    this.#currentLocation += 1;
    if (this.#currentLocation === this.#bridge.length) {
      this.#status = GAME_STATUS.SUCCEEDED;
    }
  }

  retry() {
    this.#status = GAME_STATUS.PLAYING;
    this.#currentLocation = 0;
  }

  end() {
    this.#status = GAME_STATUS.WAITING;
  }

  printCurrent() {
    console.log(this.#bridge);
    console.log(this.#currentLocation);
  }

  printResult() {
    //
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
