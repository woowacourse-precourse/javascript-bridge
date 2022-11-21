const GameProgress = require('./GameProgress');
const BridgeError = require('./Error/BridgeError');
const BridgeMaker = require('./BridgeMaker');
const BridgeModel = require('./Model/BridgeModel');
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
  #bridgeMoveCount = 0;

  #tryCount = 1;

  start = () => {
    GameProgress.printGameStart(this.#bridgeSizeInputHandler);
  };

  /**
   * @param {string} size : 3 ~ 20 사이의 숫자
   * 유효한 입력이 아닌 경우 에러 메시지를 출력하고 다시 입력을 받는다.
   */
  #bridgeSizeInputHandler = (size) => {
    try {
      const IS_VALID_SIZE = BridgeError.isValidBridgeSize(size);
      BridgeError.throwErrorHandler(BridgeModel.ErrorMessages[0], !IS_VALID_SIZE);
      GameProgress.printBlankLine();
      this.#makeBridge(+size);
    } catch {
      GameProgress.readBridgeSize(this.#bridgeSizeInputHandler);
    }
  };

  #makeBridge = (size) => {
    BridgeModel.bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#move();
  };

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #move() {
    this.#bridgeMoveCount = 0;
    GameProgress.readMoving(this.#bridgeMoveInputHandler);
  }

  /**
   * @param {string} input : U 또는 D
   * 유효한 입력이 아닌 경우 에러 메시지를 출력하고 다시 입력받는다.
   */
  #bridgeMoveInputHandler = (input) => {
    try {
      const IS_VALID_MOVING = BridgeError.isValidMoving(input);
      BridgeError.throwErrorHandler(BridgeModel.ErrorMessages[1], !IS_VALID_MOVING);
      GameProgress.printMap(BridgeModel.bridge, this.#bridgeMoveCount, input);
      this.#moveNext(input);
    } catch {
      GameProgress.readMoving(this.#bridgeMoveInputHandler);
    }
  };

  #moveNext = (input) => {
    this.#bridgeMoveCount += 1;
    if (input !== BridgeModel.bridge[this.#bridgeMoveCount - 1]) {
      this.#retry();
    } else if (this.#bridgeMoveCount < BridgeModel.bridge.length) {
      GameProgress.readMoving(this.#bridgeMoveInputHandler);
    } else if (this.#bridgeMoveCount === BridgeModel.bridge.length) {
      GameProgress.printResult('성공', this.#tryCount);
    }
  };

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #retry = () => {
    GameProgress.readGameCommand(this.#bridgeRetryInputHandler);
  };

  /**
   * @param {string} input : R 또는 Q
   * 유효한 입력이 아닌 경우 에러 메시지를 출력하고 다시 입력받는다.
   */
  #bridgeRetryInputHandler = (input) => {
    try {
      const IS_VALID_INPUT = BridgeError.isValidRetryInput(input);
      BridgeError.throwErrorHandler(BridgeModel.ErrorMessages[2], !IS_VALID_INPUT);
      this.#gameRestartOrOver(input);
    } catch {
      GameProgress.readGameCommand(this.#bridgeRetryInputHandler);
    }
  };

  #gameRestartOrOver = (input) => {
    if (input === 'R') {
      this.#tryCount += 1;
      GameProgress.clearPreviousProgress();
      this.#move();
      return;
    }
    GameProgress.printResult('실패', this.#tryCount);
  };
}

module.exports = BridgeGame;
