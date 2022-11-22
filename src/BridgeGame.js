const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeSet = require("./BridgeSet");
const { GAME_COMMAND } = require("./Utils")

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {

  constructor() {
    this.tryCount = 1;
    this.overBridge = [];
    this.underBridge = [];
    this.bridge = []
    this.moving;
    this.command;
  }

  getBridge(size) {
    this.bridge = BridgeMaker.makeBridge(size,
      BridgeRandomNumberGenerator.generate);
  }
  
  getMoving(moving) {
    console.log(moving)
    this.moving = moving
    return this.move();
  }

  getGameCommand(command) {
    this.command = command;
    return this.gameWheter();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    if(this.moving === this.bridge[0]) {
      return this.moveSuccess();
    }
    if(this.moving !== this.bridge[0]) {
      return this.moveFailure();
    }
  }

  moveSuccess() {
    BridgeSet.bridgePass(this.moving, this.overBridge, this.underBridge);
    BridgeSet.repeat(this.overBridge, this.underBridge);
    this.bridge.shift();
    if(this.bridge.length === 0) {
      return this.end(true);
    }
  }

  moveFailure() {
    BridgeSet.bridgeFail(this.moving, this.overBridge, this.underBridge);
    BridgeSet.repeat(this.overBridge, this.underBridge);
    return this.getGameCommand();
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
    BridgeSet.beforeBridge(this.overBridge, this.underBridge);
    BridgeSet.repeat(this.overBridge, this.underBridge);

    this.tyrCount++;
  }

  end(result) {
    BridgeSet.gameResult(this.overBridge, this.underBridge);
    if(result === true) {
      return this.successEnd();
    }
    if(result === false) {
      return this.failureEnd();
    }
  };

  successEnd() {
    BridgeSet.successGameResult(this.tryCount);
    this.tryCount = 1;
  }

  failureEnd() {
    BridgeSet.failureGameResult(this.tryCount);
    this.tryCount = 1;
  }

  reInput() {
    
  }
}

module.exports = BridgeGame;
