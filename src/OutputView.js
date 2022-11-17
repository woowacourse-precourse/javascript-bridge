const { Console } = require('@woowacourse/mission-utils');
const { MAP, MOVE, PHRASE } = require('./config');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 생성한다.
   * @param {string[]} bridge 다리
   * @param {boolean[]} history 각 이동의 성공 여부를 기록한 배열
   */
  makeMap(bridge, history) {
    const map = { ups: [], downs: [] };

    history.forEach((isSuccess, idx) => {
      map.ups.push(bridge[idx] === MOVE.UP ? (isSuccess ? MAP.SUCCESS : MAP.FAIL) : MAP.EMPTY);
      map.downs.push(bridge[idx] === MOVE.DOWN ? (isSuccess ? MAP.SUCCESS : MAP.FAIL) : MAP.EMPTY);
    });

    return map;
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {string[]} bridge 다리
   * @param {boolean[]} history 각 이동의 성공 여부를 기록한 배열
   */
  printMap(bridge, history) {
    const map = this.makeMap(bridge, history);
    Object.values(map).forEach((row) => {
      Console.print(`${MAP.START}${row.join(MAP.DELIMITER)}${MAP.END}`);
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {string[]} bridge 다리
   * @param {boolean[]} history 각 이동의 성공 여부를 기록한 배열
   */
  printResult(bridge, history) {
    const isSuccess = history.every((isSuccess) => isSuccess);
    const result = isSuccess ? PHRASE.SUCCESS : PHRASE.FAIL;
    const totalTry = history.length;

    Console.print(`${PHRASE.RESULT}`);
    this.printMap(bridge, history);
    Console.print(`${result}${PHRASE.TRY}${totalTry}`);
  },
};

module.exports = OutputView;
