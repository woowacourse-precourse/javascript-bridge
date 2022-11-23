const { START, RESULT } = require('./constant/message');
const { print } = require('./utils/util');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  makeOneSideMap(moves) {
    return `[ ${moves.reduce((allMoves, move) => `${allMoves} | ${move}`, '').slice(3)} ]`;
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(result) {
    const mapResult = result.reduce(
      (allMap, side) => `${allMap}\n${this.makeOneSideMap(side)}`,
      '',
    );
    print(`${mapResult}\n`);
  },

  getMap(result) {
    return result.reduce((allMap, side) => `${allMap}\n${this.makeOneSideMap(side)}`, '');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, result, tryCount) {
    print(`${RESULT.MAP(this.getMap(map))}
${RESULT.GAME(result)}
${RESULT.TOTAL_TRY_COUNT(tryCount)}`);
  },

  /**
   * 게임을 시작하는 문구를 출력한다.
   */
  printStart() {
    print(START);
  },
};

module.exports = OutputView;
