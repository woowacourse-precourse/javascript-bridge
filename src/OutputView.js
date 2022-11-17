const { Console } = require('@woowacourse/mission-utils');
const { MAP, MOVE, PHRASE } = require('./config');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임을 시작한다는 문구를 출력한다.
   */
  printHi() {
    Console.print(PHRASE.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 생성한다.
   * @param {BridgeGame} game 다리 건너기 게임
   */
  makeMap(game) {
    const map = Array.from({ length: 2 }, () => Array(game.history.length).fill(MAP.EMPTY));

    game.history.forEach((isSuccess, idx) => {
      const bridgePosition = game.bridge[idx] === MOVE.UP ? 0 : 1;
      if (isSuccess === true) map[bridgePosition][idx] = MAP.SUCCESS;
      else map[1 - bridgePosition][idx] = MAP.FAIL;
    });

    return map;
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {BridgeGame} game 다리 건너기 게임
   */
  printMap(game) {
    const map = this.makeMap(game);
    map.forEach((row) => {
      Console.print(`${MAP.START}${row.join(MAP.DELIMITER)}${MAP.END}`);
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {BridgeGame} game 다리 건너기 게임
   */
  printResult(game) {
    const isSuccess = game.history.every((isSuccess) => isSuccess);
    const result = isSuccess ? PHRASE.SUCCESS : PHRASE.FAIL;
    const totalTry = game.resetCount + 1;

    Console.print(`${PHRASE.RESULT}`);
    this.printMap(game);
    Console.print(`${result}${PHRASE.TOTAL_TRY}${totalTry}`);
    Console.close();
  },
};

module.exports = OutputView;
