const OutputView = require('./OutputView');
const { MOVING } = require('./constants/index');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  prepare(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(
      parseInt(bridgeSize, 10),
      BridgeRandomNumberGenerator.generate
    );
    return bridge;
  }

  move(movingCommand, bridge, movingRoute) {
    const movingRouteIndex = movingRoute[0].length;
    if (movingCommand === MOVING.UPPER) {
      if (movingCommand === bridge[movingRouteIndex]) {
        movingRoute[0].push(MOVING.RIGHT_ANSWER);
        movingRoute[1].push(MOVING.SPACE);
      } else {
        movingRoute[0].push(MOVING.WRONG_ANSWER);
        movingRoute[1].push(MOVING.SPACE);
      }
    } else {
      if (movingCommand === bridge[movingRouteIndex]) {
        movingRoute[1].push(MOVING.RIGHT_ANSWER);
        movingRoute[0].push(MOVING.SPACE);
      } else {
        movingRoute[1].push(MOVING.WRONG_ANSWER);
        movingRoute[0].push(MOVING.SPACE);
      }
    }
    OutputView.printMap(movingRoute);
    return movingRoute;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    let movingRoute = [[], []];
    return movingRoute;
  }
}

module.exports = BridgeGame;
