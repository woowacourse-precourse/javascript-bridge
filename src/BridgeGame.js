const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeSet = require("./BridgeSet");
const { GAME_COMMAND } = require("./Utils")
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {

  constructor(input) {
    this.input = input
    this.size;
    this.moving;
    this.command;
    this.bridge;
  }

  getSize() {
    this.size = this.input.readBridgeSize()
    return this.getBridge();
  }

  getMoving() {
    this.moving = this.input.readMoving();
    return this.move();
  }

  getGameCommand() {
    this.command = this.input.readMoving();
    return this.gameWheter();
  }

  getBridge() {
    this.bridge = BridgeMaker.makeBridge(this.size,
      BridgeRandomNumberGenerator.generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    if(this.bridge.length === 0) {
      return this.end(true);
    }
    if(this.moving === this.bridge[0]) {
      return this.moveSuccess();
    }
    if(this.moving !== this.bridge[0]) {
      return this.moveFailure();
    }
  }

  moveSuccess() {
    BridgeSet.bridgePass(this.moving);
    this.bridge.shift();
    return this.getMoving;
  }

  moveFailure() {
    BridgeSet.bridgeFail(this.moving);
    return this.getGameCommand;
  }

  gameWheter() {
    if(this.command === GAME_COMMAND.GAME_RETRY) {
      return this.retry();
    }
    if(this.command === GAME_COMMAND.GAME_END) {
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
