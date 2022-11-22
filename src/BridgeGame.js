const BridgeMaker = require('./BridgeMaker');
const { makeRandomNumber } = require('./utils/util');
const { MOVE, MOVE_PICK, PLAY } = require('./constant/constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  compareOneSideBridge(myMoves, bridge) {
    return myMoves.map((move, index) => {
      if (move === bridge[index] && bridge[index] !== '') return MOVE_PICK.RIGHT;
      if (move !== bridge[index] && bridge[index] === '') return MOVE_PICK.WRONG;
      return ' ';
    });
  }

  compareBridge(myMoves, bridge) {
    const compareBridge = Array.from(Array(2), () => Array(myMoves.length).fill(''));
    myMoves.forEach((_, sideIndex) => {
      compareBridge[sideIndex] = this.compareOneSideBridge(myMoves[sideIndex], bridge[sideIndex]);
    });
    return compareBridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(myMoves, bridge) {
    const currentBridge = Array.from(Array(2), () => Array(myMoves.length).fill(''));
    bridge
      .filter((_, bridgeIndex) => bridgeIndex < myMoves.length)
      .forEach((move, index) => {
        if (move === MOVE.UP) currentBridge[0][index] = MOVE.UP;
        if (move === MOVE.DOWN) currentBridge[1][index] = MOVE.DOWN;
      });
    return currentBridge;
  }

  /**
   * 사용자가 이동하고 난 결과 (OX 표시)
   */
  getMoveResult(myMoves, bridge) {
    const currentBridge = this.move(myMoves, bridge);
    const currentMyMoves = this.move(myMoves, myMoves);
    const result = this.compareBridge(currentMyMoves, currentBridge);
    return result;
  }

  /**
   * 다리 생성
   */
  makeBridge(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(bridgeSize, makeRandomNumber);
    return bridge;
  }

  /**
   * 게임 이겼는지 확인
   */
  validateWin(myMoves, bridge) {
    const currentIndex = myMoves.length - 1;
    if (myMoves[currentIndex] === bridge[currentIndex] && currentIndex + 1 === bridge.length) {
      return true;
    }
    return false;
  }

  /**
   * 게임 이동 가능한지 확인
   */
  validateMove(myMoves, bridge) {
    const currentIndex = myMoves.length - 1;
    if (myMoves[currentIndex] !== bridge[currentIndex]) {
      return false;
    }
    return true;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(gameCommand) {
    return gameCommand === PLAY.RESTART;
  }
}

module.exports = BridgeGame;
