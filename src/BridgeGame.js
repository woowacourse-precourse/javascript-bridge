const InputView = require("./View/InputView");
const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require("./View/OutputView");
const { GAME, BRIDGE, UNIT } = require("./Constants");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(computerBridge) {
    this.computerBridge = computerBridge;
    this.playerUpperBridge = [];
    this.playerLowerBridge = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const canCross = this.isSameDirection(direction);
    this.isSuccess = canCross ? GAME.SUCCESS : GAME.FAIL;

    this.makePlayerBridgeState(direction, canCross);

    return [canCross, this.playerUpperBridge, this.playerLowerBridge];
  }

  isSameDirection(direction) {
    const currPosition = this.playerUpperBridge.length;

    return this.computerBridge[currPosition] === direction;
  }

  makePlayerBridgeState(direction, canCross) {
    if (direction === BRIDGE.UPPER) {
      canCross
        ? this.playerUpperBridge.push(BRIDGE.POSSIBLE_SIGN)
        : this.playerUpperBridge.push(BRIDGE.IMPOSSIBLE_SIGN);
      this.playerLowerBridge.push(UNIT.BLANK);
    }

    if (direction === BRIDGE.LOWER) {
      canCross
        ? this.playerLowerBridge.push(BRIDGE.POSSIBLE_SIGN)
        : this.playerLowerBridge.push(BRIDGE.IMPOSSIBLE_SIGN);
      this.playerUpperBridge.push(UNIT.BLANK);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
