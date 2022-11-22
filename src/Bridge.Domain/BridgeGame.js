const BridgeCreator = require("./BridgeCreator");
const { GAME } = require("../lib/Const");
const Bridge = require("./Bridge");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #status;

  constructor() {
    this.#status = GAME.STATUS.PLAY;
  }

  init(size) {
    this.#bridge = BridgeCreator.create(size);
  }

  setting(arr) {
    this.#bridge = new Bridge(arr);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(player, playerDirection) {
    const index = player.getCurrentPositionAndMovePlayer();
    const answerDirection = this.#bridge.getBridgePosition(index);
    if (playerDirection !== answerDirection) this.#status = GAME.STATUS.FAIL;
    if (
      playerDirection === answerDirection &&
      index + 1 === this.#bridge.getBridgeArrayLength()
    )
      this.#status = GAME.STATUS.END;
    return [this.#bridge.getBridgeSliceArrFirstToPosition(index), this.#status];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#status = GAME.STATUS.PLAY;
  }
}

module.exports = BridgeGame;
