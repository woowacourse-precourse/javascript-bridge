const {
  RESULT,
  GAME_OPTION,
  BRIDGE,
  OUTPUT_MARK,
} = require("../Utils/Constants");
const Bridge = require("../Model/Bridge");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(directions) {
    this.bridge = new Bridge(directions);
    this.playerUpperBridgeState = [];
    this.playerLowerBridgeState = [];
    this.result = new Map([
      [RESULT.IS_SUCCESS, GAME_OPTION.SUCCESS],
      [RESULT.TOTAL_ATTEMPTS_COUNT, GAME_OPTION.ATTEMPTS_COUNT_INIT],
    ]);
  }

  init() {
    this.playerUpperBridgeState = [];
    this.playerLowerBridgeState = [];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const currPosition = this.playerUpperBridgeState.length;
    const canCross = this.bridge.isSameDirection(direction, currPosition);

    this.calculateSuccessOrFail(canCross);
    this.makePlayerMoveState(direction, canCross);

    return [canCross, this.playerUpperBridgeState, this.playerLowerBridgeState];
  }

  isQuit(canCross) {
    return (
      this.bridge.isLastPosition(this.playerUpperBridgeState.length) && canCross
    );
  }

  calculateSuccessOrFail(canCross) {
    const successOrFail = canCross ? GAME_OPTION.SUCCESS : GAME_OPTION.FAIL;
    this.result.set(RESULT.IS_SUCCESS, successOrFail);
  }

  makePlayerMoveState(direction, canCross) {
    direction === "U"
      ? this.makeMark(
          canCross,
          this.playerUpperBridgeState,
          this.playerLowerBridgeState
        )
      : this.makeMark(
          canCross,
          this.playerLowerBridgeState,
          this.playerUpperBridgeState
        );
  }

  makeMark(canCross, crossBridge, oppsiteBridge) {
    canCross
      ? crossBridge.push(BRIDGE.POSSIBLE_MARK)
      : crossBridge.push(BRIDGE.IMPOSSIBLE_MARK);
    oppsiteBridge.push(OUTPUT_MARK.BLANK);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.init();

    const attemptsCount = this.result.get(RESULT.TOTAL_ATTEMPTS_COUNT) + 1;
    this.result.set(RESULT.TOTAL_ATTEMPTS_COUNT, attemptsCount);
  }

  getResult() {
    return [
      this.playerUpperBridgeState,
      this.playerLowerBridgeState,
      this.result,
    ];
  }
}

module.exports = BridgeGame;
