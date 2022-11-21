const { GAME_OPTION, BRIDGE_SIGN, OUTPUT_MARK } = require("../Utils/Constants");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(computerBridge) {
    this.computerBridge = computerBridge;
    this.playerUpperBridgeState = [];
    this.playerLowerBridgeState = [];
    this.isSuccess = GAME_OPTION.SUCCESS;
    this.attempsCount = GAME_OPTION.ATTEMPTS_COUNT_INIT;
  }

  init() {
    this.playerUpperBridgeState = [];
    this.playerLowerBridgeState = [];
  }

  isLastPosition(playerBridgeLength) {
    return playerBridgeLength === this.computerBridge.length;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const canCross = this.isSameDirection(direction);
    this.isSuccess = canCross ? GAME_OPTION.SUCCESS : GAME_OPTION.FAIL;

    this.makePlayerBridgeState(direction, canCross);

    return [canCross, this.playerUpperBridgeState, this.playerLowerBridgeState];
  }

  isSameDirection(direction) {
    const currPosition = this.playerUpperBridgeState.length;

    return this.computerBridge[currPosition] === direction;
  }

  makePlayerBridgeState(direction, canCross) {
    if (direction === BRIDGE_SIGN.UPPER) {
      canCross
        ? this.playerUpperBridgeState.push(BRIDGE_SIGN.POSSIBLE)
        : this.playerUpperBridgeState.push(BRIDGE_SIGN.IMPOSSIBLE);
      this.playerLowerBridgeState.push(OUTPUT_MARK.BLANK);
    }

    if (direction === BRIDGE_SIGN.LOWER) {
      canCross
        ? this.playerLowerBridgeState.push(BRIDGE_SIGN.POSSIBLE)
        : this.playerLowerBridgeState.push(BRIDGE_SIGN.IMPOSSIBLE);
      this.playerUpperBridgeState.push(OUTPUT_MARK.BLANK);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.init();
    this.attempsCount++;
  }

  getResult() {
    return [
      this.playerUpperBridgeState,
      this.playerLowerBridgeState,
      this.isSuccess,
      this.attempsCount,
    ];
  }
}

module.exports = BridgeGame;
