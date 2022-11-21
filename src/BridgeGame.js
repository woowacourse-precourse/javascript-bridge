const BridgeCheck = require("./BridgeSet");
const BridgeSet = require("./BridgeSet");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { GAME_CHOICE, SPACE_TO_MOVE, OUTPUT_MESSAGE } = require("./Utils")
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge

  constructor() {
    this.moving = "";
  }

  getBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size,
      BridgeRandomNumberGenerator.generate());
  }

  getMoving(move) {
    this.moving = move;
    return this.move();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    if(this.#bridge.length === 0) {
     this.end(true);
    }
    if(this.moving === this.#bridge[0]) {
      this.moveSuccess();
    }
    if(this.moving !== this.#bridge[0]) {
      this.moveFailure();
    }
  }

  moveSuccess() {
    BridgeSet.BridgePass(this.moving);
    this.#bridge.shift();
    return BridgeSet.repeat()
  }

  moveFailure() {
    BridgeSet.BridgeFail(this.moving);
    return this.gameWheter();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  end() {}
}

module.exports = BridgeGame;
