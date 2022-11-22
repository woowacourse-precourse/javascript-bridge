const Validation = require('../Utilities/Validation');
const { MESSAGE, INPUT } = require('../Constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #turn = 0;
  #userLife = true;
  #attemptNumber = 1;

  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  start() {
    this.getBridgeSize();
  }

  getBridgeSize() {
    this.view.readBridgeSize(MESSAGE.BRIDGE_SIZE, (bridgeSize) => {
      try {
        Validation.isBridgeSizeValid(bridgeSize);
        this.model.genBridge(bridgeSize);
        this.move();
      } catch (error) {
        this.catchError(this.getBridgeSize, error);
      }
    });
  }

  catchError(fn, error) {
    this.view.printError(error);
    fn.bind(this)();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.view.readMoving(MESSAGE.UPORDOWN, (userMove) => {
      try {
        if (this.tryMove(userMove)) return;
        this.#userLife ? this.move() : this.retry();
      } catch (error) {
        this.catchError(this.move, error);
      }
    });
  }

  isUserSucess() {
    if (this.#userLife && this.#turn === this.model.bridge.length) {
      return this.end();
    }
  }

  tryMove(userMove) {
    Validation.isUserMoveValid(userMove);
    this.#userLife = this.model.aliveOrDeath(userMove, this.#turn);
    this.#turn += 1;
    this.view.printMap(this.model.upsideBridge, this.model.downSideBridge);
    if (this.isUserSucess()) return true;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#turn = 0;
    this.askUserRetry();
  }

  askUserRetry() {
    this.view.readGameCommand(MESSAGE.RETRYORQUIT, (userRetry) => {
      try {
        Validation.isUserRetryValid(userRetry);
        this.retryOrQuit(userRetry);
      } catch (error) {
        this.catchError(this.askUserRetry, error);
      }
    });
  }

  retryOrQuit(userRetry) {
    if (userRetry === INPUT.RESTART) {
      this.model.reset();
      this.#attemptNumber += 1;
      this.#userLife = true;
      this.move();
    } else {
      this.end();
    }
  }

  end() {
    this.view.printResultBridge(
      this.model.upsideBridge,
      this.model.downSideBridge,
    );
    this.view.printResult(this.#userLife, this.#attemptNumber);
    return true;
  }
}

module.exports = BridgeGame;
