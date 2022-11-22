const BridgeCreator = require("./BridgeCreator");
const { GAME } = require("../lib/Const");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #status;

  constructor(size) {
    this.#bridge = BridgeCreator.create(size);
    this.#status = GAME.STATUS.START;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(player, playerDirection) {
    let goResult;
    const index = player.getCurrentPositionAndMovePlayer();
    const answerDirection = this.#bridge.getBridgePosition(index);
    if (playerDirection === answerDirection) goResult = true;
    if (playerDirection !== answerDirection) goResult = false;
    //bridge , index , result -> shape
    if (goResult && index + 1 === this.#bridge.getBridgeArrayLength())
      this.#status = GAME.STATUS.END;
    return [
      this.#bridge.getBridgeSliceArrFirstToPosition(index),
      goResult,
      this.#status,
    ];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
