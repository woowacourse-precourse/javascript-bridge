const Validation = require('../Utilities/Validation');
const { MESSAGE, INPUT } = require('../Constants');
const IBridgeGame = require('./IBridgeGame');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame extends IBridgeGame {
  #turn = 0;
  #userLife = true;
  #attemptNumber = 1;

  constructor(model, view) {
    super();
    this.model = model;
    this.view = view;
  }

  start() {
    this.getBridgeSize();
  }

  getBridgeSize() {
    this.view.readBridgeSize(MESSAGE.BRIDGE_SIZE, (bridgeSize) => {
      this.genBridge(bridgeSize);
    });
  }

  genBridge(bridgeSize) {
    try {
      Validation.isBridgeSizeValid(bridgeSize);
      this.model.genBridge(bridgeSize);
      this.move();
    } catch (error) {
      this.catchError(this.getBridgeSize, error);
    }
  }

  catchError(fn, error) {
    this.view.printError(error);
    fn.bind(this)();
  }

  move() {
    this.view.readMoving(MESSAGE.UPORDOWN, (userMove) => {
      this.tryCatchMove(userMove);
    });
  }

  tryCatchMove(userMove) {
    try {
      if (this.tryMove(userMove)) return;
      this.#userLife ? this.move() : this.retry();
    } catch (error) {
      this.catchError(this.move, error);
    }
  }

  tryMove(userMove) {
    Validation.isUserMoveValid(userMove);
    this.#userLife = this.model.aliveOrDeath(userMove, this.#turn);
    this.#turn += 1;
    this.view.printMap(this.model.upsideBridge, this.model.downSideBridge);
    if (this.isUserSucess()) return true;
    return null;
  }

  isUserSucess() {
    if (this.#userLife && this.#turn === this.model.bridge.length) {
      return this.end();
    }
    return null;
  }

  retry() {
    this.view.readGameCommand(MESSAGE.RETRYORQUIT, (userRetry) => {
      this.tryCatchRetry(userRetry);
    });
  }

  tryCatchRetry(userRetry) {
    try {
      Validation.isUserRetryValid(userRetry);
      this.retryOrQuit(userRetry);
    } catch (error) {
      this.catchError(this.retry, error);
    }
  }

  retryOrQuit(userRetry) {
    if (userRetry === INPUT.RESTART) {
      this.model.reset();
      this.reset();
      this.move();
    } else {
      this.end();
    }
  }

  reset() {
    this.#turn = 0;
    this.#attemptNumber += 1;
    this.#userLife = true;
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
