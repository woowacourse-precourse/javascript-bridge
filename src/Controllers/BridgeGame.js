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
    if (this.model.bridge) {
      this.gameStart();
    }
  }

  gameStart() {
    this.move();
    this.isUserSucess();
    this.isUserAlive();
    this.isUserDead();
  }

  isUserAlive() {
    if (this.#userLife && this.#turn !== this.model.bridge.length) {
      this.gameStart();
    }
  }

  isUserDead() {
    if (!this.#userLife) {
      this.retry();
    }
  }

  isUserSucess() {
    if (this.#userLife && this.#turn === this.model.bridge.length) {
      this.end();
    }
  }

  getBridgeSize() {
    this.view.readBridgeSize(MESSAGE.BRIDGE_SIZE, (bridgeSize) => {
      try {
        Validation.isBridgeSizeValid(bridgeSize);
        this.model.genBridge(bridgeSize);
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
        this.tryMove(userMove);
      } catch (error) {
        this.catchError(this.move, error);
      }
    });
  }

  tryMove(userMove) {
    Validation.isUserMoveValid(userMove);
    this.#userLife = this.model.aliveOrDeath(userMove, this.#turn);
    this.#turn += 1;
    this.view.printMap(this.model.upsideBridge, this.model.downSideBridge);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#turn = 0;
    this.#attemptNumber = 1;
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
      this.gameStart();
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
  }
}

module.exports = BridgeGame;
