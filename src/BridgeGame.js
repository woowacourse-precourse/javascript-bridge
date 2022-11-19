const GameProgress = require('./IO/GameProgress');
const InputView = require('./IO/InputView');
const OutputView = require('./IO/OutputView');
const BridgeError = require('./Error/BridgeError');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */

/*
 * 제공된 BridgeGame 클래스를 활용해 구현해야 한다.
 * BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
 * BridgeGame의 파일 경로는 변경할 수 있다.
 * BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
 */
class BridgeGame {
  #bridgeErrorMessages = [
    '[ERROR] 유효하지 않은 다리 길이입니다.',
    '[ERROR] U 또는 D를 입력하세요.',
  ];

  #bridgeMoveCount = 0;

  #bridge;

  start() {
    GameProgress.printGameStart();
    InputView.readBridgeSize(this.validateBridgeSize);
  }

  validateBridgeSize = (size) => {
    const IS_NUMBER = /^\d{1,2}$/.test(size);
    const LOWER_BOUND = 3;
    const UPPER_BOUND = 20;
    const IS_VALID_NUMBER = IS_NUMBER && +(size) >= LOWER_BOUND && +(size) <= UPPER_BOUND;
    BridgeError.throwErrorHandler(this.#bridgeErrorMessages[0], !IS_VALID_NUMBER);
    this.makeBridge(+size);
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
    InputView.readMoving(this.validateBridgeMove);
  }

  validateBridgeMove = (input) => {
    const IS_VALID_MOVING = /^U|D$/.test(input);
    BridgeError.throwErrorHandler(this.#bridgeErrorMessages[1], !IS_VALID_MOVING);
    OutputView.printMap(this.#bridge, this.#bridgeMoveCount, input);
    this.moveNext(input);
  };

  moveNext = (input) => {
    this.#bridgeMoveCount += 1;
    if (input !== this.#bridge[this.#bridgeMoveCount - 1]) {
      this.retry();
    } else if (this.#bridgeMoveCount < this.#bridge.length) {
      InputView.readMoving(this.validateBridgeMove);
    } else if (this.#bridgeMoveCount === this.#bridge.length) {
      // end
    }
  };

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry = () => {
    InputView.readGameCommand(this.validateRetryInput);
  };

  validateRetryInput = (input) => {
    // Exceptions...
  };
}

const temp = new BridgeGame();
temp.start();

module.exports = BridgeGame;
