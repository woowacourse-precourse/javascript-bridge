const { MissionUtils } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Validation = require('./utils/Validatation');
const InputView = require('./Views/InputView');
const OutputView = require('./Views/OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #length = 0;
  #totalNumber = 0;
  #bridge = [];
  #moveList = [];
  constructor() {
    this.#length = this.#length;
    this.#totalNumber = this.#totalNumber;
    this.#bridge = this.#bridge;
    this.#moveList = this.#moveList;
  }

  /**
   * 사용자가 게임을 시작 할 때 사용하는 메서드
   */
  start() {
    this.#totalNumber += 1;
    OutputView.printStartMessage();
    this.bridgeSize();
  }

  bridgeSize() {
    InputView.readBridgeSize(input => {
      this.validateCheck(
        () => Validation.lengthCheck(input),
        () => this.bridgeSize(),
      );

      this.#length = input;
      this.bridgeMake();
    });
  }

  bridgeMake() {
    this.#bridge = BridgeMaker.makeBridge(
      this.#length,
      BridgeRandomNumberGenerator.generate,
    );

    this.step();
  }

  step() {
    InputView.readMoving(input => {
      this.validateCheck(
        () => Validation.moveMessageCheck(input),
        () => this.step(),
      );
      this.move(input);
    });
  }

  validateCheck(validation, prev) {
    try {
      validation();
    } catch (e) {
      OutputView.printError(e);
      prev();
    }
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(message) {
    this.#moveList.push(message);
    if (message === this.#bridge[this.#moveList.length - 1]) {
      this.nextMove();
    }

    if (message !== this.#bridge[this.#moveList.length - 1]) {
      this.die();
    }
  }

  nextMove() {
    OutputView.printMap(this.#bridge, this.#moveList);
    if (this.#bridge.toString() == this.#moveList.toString()) {
      OutputView.printResult(this.#bridge, this.#moveList, this.#totalNumber);
      return;
    }

    InputView.readMoving(input => {
      this.validateCheck(
        () => Validation.moveMessageCheck(input),
        () => this.step(),
      );
      this.move(input);
    });
  }

  die() {
    OutputView.printMap(this.#bridge, this.#moveList);
    InputView.readGameCommand(input => {
      this.validateCheck(
        () => Validation.restartMessageCheck(input),
        () => this.die(),
      );
      this.handleRestartMessage(input);
    });
  }

  handleRestartMessage(message) {
    if (message === 'R') {
      this.retry();
    }
    if (message === 'Q') {
      this.end();
    }
  }

  end() {
    OutputView.printResult(this.#bridge, this.#moveList, this.#totalNumber);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#moveList = [];
    this.#totalNumber += 1;
    InputView.readMoving(input => {
      Validation.moveMessageCheck(input);
      this.move(input);
    });
  }
}

module.exports = BridgeGame;
