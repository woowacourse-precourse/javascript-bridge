const { generate } = require('../BridgeRandomNumberGenerator');
const { makeBridge } = require('../BridgeMaker');
const { BRIDGE, SUCCESS, FAILURE } = require('../constants/Bridge');
const { COMMAND } = require('../constants/Messages');
const { ZERO, ONE } = require('../constants/Number');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  constructor(size) {
    this.#bridge = makeBridge(size, generate);
    this.userBridge = {
      command: [],
      up: [],
      down: [],
    };
    this.tryCount = ONE;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(space) {
    this.userBridge.command.push(space);
    const spaceResult = this.isRightSpace(space) ? BRIDGE.correct : BRIDGE.wrong;
    return space === COMMAND.up
      ? this.#makeUpBridge(spaceResult)
      : this.#makeDownBridge(spaceResult);
  }

  #makeUpBridge(spaceResult) {
    this.userBridge.up.push(spaceResult);
    this.userBridge.down.push(BRIDGE.blank);
    return this;
  }

  #makeDownBridge(spaceResult) {
    this.userBridge.up.push(BRIDGE.blank);
    this.userBridge.down.push(spaceResult);
    return this;
  }

  isRightSpace() {
    const bridgePiece = this.#bridge.slice(ZERO, this.userBridge.command.length);
    return JSON.stringify(this.userBridge.command) === JSON.stringify(bridgePiece);
  }

  isEnd() {
    return JSON.stringify(this.userBridge.command) === JSON.stringify(this.#bridge);
  }

  makeBridgeFormat() {
    const { front, middle, back } = BRIDGE;
    const upBridge = front.concat(this.userBridge.up.join(middle), back);
    const downBridge = front.concat(this.userBridge.down.join(middle), back);
    return { upBridge, downBridge };
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input) {
    if (input === COMMAND.retry) {
      this.tryCount += ONE;
      this.#initializeUserBridge();
      return true;
    }
    return false;
  }

  #initializeUserBridge() {
    this.userBridge.command = [];
    this.userBridge.up = [];
    this.userBridge.down = [];
  }

  getResult() {
    const bridge = this.makeBridgeFormat();
    const result = this.isEnd() ? SUCCESS : FAILURE;
    const count = this.tryCount;
    return { bridge, result, count };
  }
}

module.exports = BridgeGame;
