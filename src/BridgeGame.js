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

  #bridge = null;

  #map = null;

  #currentLocation = 0;

  #tryCount = 0;

  get isPlaying() {
    return this.#status === GAME_STATUS.PLAYING;
  }

  get isFailed() {
    return this.#status === GAME_STATUS.FAILED;
  }

  get isSuccess() {
    return this.#status === GAME_STATUS.SUCCEEDED;
  }

  init() {
    this.#status = GAME_STATUS.PLAYING;
    InputView.readBridgeSize(this.build.bind(this));
  }

  build(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#map = Array.from({ length: 2 }, () => Array(this.#bridge.length).fill(' '));
    this.#currentLocation = 0;
    console.log(this.#bridge);
    InputView.readMoving(this.move.bind(this));
  }

  move(position) {
    this.#tryCount += 1;
    this.#currentLocation += 1;
    const isCorrect = this.#bridge[this.#currentLocation - 1] === position;
    if (!isCorrect) {
      this.#fail(position);
      return;
    }
    this.#pass();
    if (this.#currentLocation === this.#bridge.length) this.#success();
  }

  retry() {
    this.#status = GAME_STATUS.PLAYING;
    this.#currentLocation = 0;
    this.#map = Array.from({ length: 2 }, () => Array(this.#bridge.length).fill(' '));
    InputView.readMoving(this.move.bind(this));
  }

  end() {
    OutputView.printEnd();
    OutputView.printMap(this.#map, this.#currentLocation);
    OutputView.printResult(this.isSuccess, this.#tryCount);
    this.#status = GAME_STATUS.WAITING;
  }

  #pass(position) {
    this.#setCurrentMap(position, MAP_MARK.CORRECT);
    this.#printCurrent();
    InputView.readMoving(this.move.bind(this));
  }

  #fail(position) {
    this.#status = GAME_STATUS.FAILED;
    this.#setCurrentMap(position, MAP_MARK.WRONG);
    this.#printCurrent();
    InputView.readGameCommand(this.retry.bind(this), this.end.bind(this));
  }

  #success() {
    this.#status = GAME_STATUS.SUCCEEDED;
    this.end();
  }

  #setCurrentMap(position, mark) {
    if (position === POSITION.UP) {
      this.#map[0][this.#currentLocation - 1] = mark;
      return;
    }
    this.#map[1][this.#currentLocation - 1] = mark;
  }

  #printCurrent() {
    OutputView.printMap(this.#map, this.#currentLocation);
  }
}

module.exports = BridgeGame;
