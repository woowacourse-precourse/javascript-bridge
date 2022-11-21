const BridgeSet = require("./BridgeSet");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { GAME_COMMAND } = require("./Utils")
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge
  #command

  constructor() {
    this.moving = "";
    this.tryCount = 1;
  }

  getBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size,
      BridgeRandomNumberGenerator.generate);
  }

  getMoving(move) {
    this.moving = move;
    return this.move();
  }

  getGameCommand(command) {
    this.#command = command;
    return this.gameWheter();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    if(this.#bridge.length === 0) {
      return this.end(true);
    }
    if(this.moving === this.#bridge[0]) {
      return this.moveSuccess();
    }
    if(this.moving !== this.#bridge[0]) {
      return this.moveFailure();
    }
  }

  moveSuccess() {
    BridgeSet.BridgePass(this.moving);
    this.#bridge.shift();
    return BridgeSet.repeat()
  }

  moveFailure() {
    BridgeSet.BridgeFail(this.moving);
    return BridgeSet.gameStop();
  }

  gameWheter() {
    if(this.#command === GAME_COMMAND.GAME_RETRY) {
      return this.retry();
    }
    if(this.#command === GAME_COMMAND.GAME_END) {
      return this.end(false);
    }
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    BridgeSet.beforeBridge();
    this.Count++
    return BridgeSet.repeat();
  }

  end(result) {
    if(result === true) {
      BridgeSet.successEnd(this.tryCount);
    }
    if(result === false) {
      BridgeSet.failureEnd(this.tryCount);
    }
  }
}

module.exports = BridgeGame;
