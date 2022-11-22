const Bridge = require('./Bridge');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { MOVABLE, GAME_COMMAND, DIRECTION } = require('./data/constants');
const InputView = require('./InputView');
const IO = require('./IO');
const OutputView = require('./OutputView');
const Validator = require('./Validator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  static #instance;

  #bridge;

  #bridgesProgress;

  #tryCount;

  #success;

  constructor() {
    this.#bridgesProgress = [[], []];
    this.#success = false;
    this.#tryCount = 1;
  }

  initBridge(length) {
    this.#bridge = new Bridge(
      length,
      BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate),
    );
  }

  init() {
    InputView.readBridgeSize((length) => {
      try {
        Validator.validateBridgeLength(length);
        this.initBridge(length);
        this.play();
      } catch (error) {
        IO.output(error);
        this.init();
      }
    });
  }

  play() {
    this.move(0, this.#bridge.getBridgeLength());
  }

  static getIndexFromDirection(direction) {
    if (direction === DIRECTION.UP) return 0;
    return 1;
  }

  static moveProcess(process, direction, movable) {
    const movablePosition = BridgeGame.getIndexFromDirection(direction);

    process.map((arr, index) => (index === movablePosition ? arr.push(movable) : arr.push(' ')));
    return process;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(index, length) {
    InputView.readMoving((direction) => {
      try {
        Validator.validateBridgeDirection(direction);
        const checkCorect = this.#bridge.checkCorrectDirection(direction, index);

        OutputView.printMap(BridgeGame.moveProcess(this.#bridgesProgress, direction, checkCorect));

        if (checkCorect === MOVABLE.IMMOVABLE) {
          this.checkRetry();
        } else if (index === length - 1) {
          this.#success = true;
          OutputView.printResult(this.#tryCount, this.#success, this.#bridgesProgress);
          IO.close();
          return;
        }

        this.move(index + 1, length);
      } catch (error) {
        IO.output(error);
        this.move(index, length);
      }
    });
  }

  checkRetry() {
    InputView.readGameCommand((command) => {
      try {
        Validator.validateGameCommand(command);
        this.retryOrQuit(command);
      } catch (error) {
        IO.output(error);
        this.checkRetry();
      }
    });
  }

  retryOrQuit(command) {
    if (command === GAME_COMMAND.RETRY) {
      this.retry();
      return;
    }
    OutputView.printResult(this.#tryCount, this.#success, this.#bridgesProgress);
    IO.close();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#tryCount += 1;
    this.#bridgesProgress = [[], []];
    this.play();
  }
}

module.exports = BridgeGame;
