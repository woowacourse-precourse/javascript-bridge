const { MOVE, MOVE_PICK } = require('./constant/constant');
const { START, RESULT } = require('./constant/message');
const { print } = require('./utils/util');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  makeBridge(myMoves, bridge) {
    const currentBridge = Array.from(Array(2), () => Array(myMoves.length).fill(''));
    bridge
      .filter((_, bridgeIndex) => bridgeIndex < myMoves.length)
      .forEach((move, index) => {
        if (move === MOVE.UP) currentBridge[0][index] = MOVE.UP;
        if (move === MOVE.DOWN) currentBridge[1][index] = MOVE.DOWN;
      });
    return currentBridge;
  },

  compareOneSideBridge(myMoves, bridge) {
    return myMoves.map((move, index) => {
      if (move === bridge[index] && bridge[index] !== '') return MOVE_PICK.RIGHT;
      if (move !== bridge[index]) return MOVE_PICK.WRONG;
      return ' ';
    });
  },

  compareBridge(myMoves, bridge) {
    const compareBridge = Array.from(Array(2), () => Array(myMoves.length).fill(''));
    myMoves.forEach((_, sideIndex) => {
      compareBridge[sideIndex] = this.compareOneSideBridge(myMoves[sideIndex], bridge[sideIndex]);
    });
    return compareBridge;
  },

  makeOneSideMap(moves) {
    return `[ ${moves.reduce((allMoves, move) => `${allMoves} | ${move}`, '').slice(3)} ]`;
  },

  getMap(myMoves, bridge) {
    const currentBridge = this.makeBridge(myMoves, bridge);
    const currentMyMoves = this.makeBridge(myMoves, myMoves);
    const result = this.compareBridge(currentMyMoves, currentBridge).reduce(
      (allMap, side) => `${allMap}\n${this.makeOneSideMap(side)}`,
      '',
    );
    return result;
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(myMoves, bridge) {
    const result = this.getMap(myMoves, bridge);
    print(result);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, result, tryCount) {
    print(RESULT.MAP(map));
    print(RESULT.GAME(result));
    print(RESULT.TOTAL_TRY_COUNT(tryCount));
  },

  /**
   * 게임을 시작하는 문구를 출력한다.
   */
  printStart() {
    print(START);
  },
};

module.exports = OutputView;
