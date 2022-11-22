const { GAME_CONDITION } = require("../utils/Constants");
const BridgeGameResult = require("../BridgeGameResult");

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

  canMove(direction) {
    return this.#bridge.canMove(direction, this.#bridgeMap[GAME_CONDITION.UP_INDEX].length);
  }

  #countAttempt() {
    this.#attempts += 1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(direction) {
    if (this.canMove(direction)) {
      this.#makeMap(direction, GAME_CONDITION.STATUS_SUCCESS);
      return GAME_CONDITION.STATUS_SUCCESS;
    }

    this.#makeMap(direction, GAME_CONDITION.STATUS_FAIL);

    return GAME_CONDITION.STATUS_FAIL;
  }

  #makeMap(direction, state) {
    const movePosition = this.#checkUpOrDown(direction);
    const blankPosition = 1 - movePosition;
    const positionState = state ? GAME_CONDITION.CAN_MOVE : GAME_CONDITION.CAN_NOT_MOVE;

    this.#bridgeMap[movePosition].push(positionState);
    this.#bridgeMap[blankPosition].push(GAME_CONDITION.BLANK_MOVE);
  }

  #checkUpOrDown(direction) {
    return direction === GAME_CONDITION.MOVE_UP ? GAME_CONDITION.UP_INDEX : GAME_CONDITION.DOWN_INDEX;
  }

  getMap() {
    return this.#bridgeMap.map(stage => this.#getMapTemplate(stage)).join("\n");
  }

  #getMapTemplate(stage) {
    return `${GAME_CONDITION.OPEN_BRACKET} ${stage.join(GAME_CONDITION.BRIDGE_SEPERATOR)} ${GAME_CONDITION.CLOSE_BRACKET}`
  }

  checkGameEnd() {
    return this.#bridgeMap[GAME_CONDITION.UP_INDEX].length === this.#bridge.size();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#bridgeMap[GAME_CONDITION.UP_INDEX].pop();
    this.#bridgeMap[GAME_CONDITION.DOWN_INDEX].pop();
    this.#attempts += 1;
  }

  getResult() {
    return BridgeGameResult.gameResult(this.checkGameEnd(), this.#attempts);
  }
}

module.exports = BridgeGame;
