const { GAME_CONDITION } = require("./utils/Constants");
const BridgeGameResult = require("./BridgeGameResult");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #bridgeMap;
  #attempts;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#bridgeMap = [[], []];
    this.#attempts = 1;
  }

  canMove(position) {
    return this.#bridge.canMove(position, this.#bridgeMap[1].length);
  }

  #countAttempt() {
    this.#attempts += 1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(position) {
    if (this.canMove(position)) {
      this.#makeMap(position, GAME_CONDITION.STATUS_SUCCESS);
      return GAME_CONDITION.STATUS_SUCCESS;
    }

    this.#makeMap(position, GAME_CONDITION.STATUS_FAIL);
    return GAME_CONDITION.STATUS_FAIL;
  }

  getMap() {
    return this.#bridgeMap
      .map(
        (stage) =>
          `${GAME_CONDITION.BRIDGE_OPEN_BRACKET} ${stage.join(
            GAME_CONDITION.BRIDGE_SEPERATOR
          )} ${GAME_CONDITION.BRIDGE_CLOSE_BRACKET}`
      )
      .join("\n");
  }

  #makeMap(position, state) {
    const movePosition = this.#checkUpOrDown(position);
    const blankPosition = 1 - movePosition;

    this.#bridgeMap[movePosition].push(
      state ? GAME_CONDITION.CAN_MOVE : GAME_CONDITION.CAN_NOT_MOVE
    );
    this.#bridgeMap[blankPosition].push(GAME_CONDITION.NONE_MOVE);
  }

  #checkUpOrDown(position) {
    return position === GAME_CONDITION.MOVE_UP
      ? GAME_CONDITION.BRIDGE_UP_INDEX
      : GAME_CONDITION.BRIDGE_DOWN_INDEX;
  }

  checkGameEnd() {
    return this.#bridgeMap[0].length === this.#bridge.size();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#bridgeMap[0].pop();
    this.#bridgeMap[1].pop();
    this.#attempts += 1;
  }

  getResult() {
    return BridgeGameResult.gameResult(this.checkGameEnd(), this.#attempts);
  }
}

module.exports = BridgeGame;
