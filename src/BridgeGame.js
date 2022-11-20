const GameProgress = require('./IO/GameProgress');
const BridgeError = require('./Error/BridgeError');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

/**
 * BridgeGame: 다리 건너기 게임을 관리하는 클래스
 *
 * 제공된 BridgeGame 클래스를 활용해 구현해야 한다.
 * BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
 * BridgeGame의 파일 경로는 변경할 수 있다.
 * BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
 */

class BridgeGame {
  #bridgeErrorMessages = [
    '\n[ERROR] 유효하지 않은 다리 길이입니다.',
    '\n[ERROR] U 또는 D를 입력하세요.',
    '\n[ERROR] R 또는 Q를 입력하세요.',
  ];

  #bridgeMoveCount = 0;

  #tryCount = 1;

  #bridge;

  start = () => {
    GameProgress.printGameStart(this.validateBridgeSize);
  };

  validateBridgeSize = (size) => {
    const IS_NUMBER = /^\d{1,2}$/.test(size);
    const BRIDGE_LOWER_BOUND = 3;
    const BRIDGE_UPPER_BOUND = 20;
    const IS_BOUNDED = +(size) >= BRIDGE_LOWER_BOUND && +(size) <= BRIDGE_UPPER_BOUND;
    const IS_VALID_NUMBER = IS_NUMBER && IS_BOUNDED;
    this.bridgeSizeExceptionHandler(IS_VALID_NUMBER);
    GameProgress.printBlankLine();
    this.makeBridge(+size);
  };

  bridgeSizeExceptionHandler = (isValidNumber) => {
    try {
      BridgeError.throwErrorHandler(this.#bridgeErrorMessages[0], !isValidNumber);
    } catch {
      GameProgress.readBridgeSize(this.validateBridgeSize);
    }
  };

  makeBridge = (size) => {
    const BRIDGE = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#bridge = BRIDGE;
    this.move();
  };

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.#bridgeMoveCount = 0;
    GameProgress.readMoving(this.validateBridgeMove);
  }

  validateBridgeMove = (input) => {
    const IS_VALID_MOVING = /^[U|D]{1}$/.test(input);
    this.bridgeMoveExceptionHandler(input, IS_VALID_MOVING);
  };

  bridgeMoveExceptionHandler = (input, isValidMoving) => {
    try {
      BridgeError.throwErrorHandler(this.#bridgeErrorMessages[1], !isValidMoving);
      GameProgress.printMap(this.#bridge, this.#bridgeMoveCount, input);
      GameProgress.printBlankLine();
      this.moveNext(input);
    } catch {
      GameProgress.readMoving(this.validateBridgeMove);
    }
  };

  moveNext = (input) => {
    this.#bridgeMoveCount += 1;
    if (input !== this.#bridge[this.#bridgeMoveCount - 1]) {
      this.retry();
    } else if (this.#bridgeMoveCount < this.#bridge.length) {
      GameProgress.readMoving(this.validateBridgeMove);
    } else if (this.#bridgeMoveCount === this.#bridge.length) {
      GameProgress.printResult('성공', this.#tryCount);
    }
  };

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry = () => {
    GameProgress.readGameCommand(this.validateRetryInput);
  };

  validateRetryInput = (input) => {
    const IS_VALID_INPUT = /^[R|Q]{1}$/.test(input);
    this.bridgeRetryInputExceptionHandler(IS_VALID_INPUT);
    this.gameRestartOrOver(input);
  };

  bridgeRetryInputExceptionHandler = (isValidInput) => {
    try {
      BridgeError.throwErrorHandler(this.#bridgeErrorMessages[2], !isValidInput);
    } catch {
      GameProgress.readGameCommand(this.validateRetryInput);
    }
  };

  gameRestartOrOver = (input) => {
    if (input === 'R') {
      this.#tryCount += 1;
      GameProgress.clearPreviousProgress();
      this.move();
    } else if (input === 'Q') {
      GameProgress.printResult('실패', this.#tryCount);
    }
  };
}

module.exports = BridgeGame;
