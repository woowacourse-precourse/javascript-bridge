const { Console } = require('@woowacourse/mission-utils');
// const { MAP, MOVE, PHRASE } = require('./utils/config.js');

const MAP = {
  START: '[',
  DELIMITER: '|',
  END: ']',
  SUCCESS: ' O ',
  FAIL: ' X ',
  EMPTY: '   ',
};

const MOVE = {
  UP: 'U',
  DOWN: 'D',
};

const PHRASE = {
  START: '다리 건너기 게임을 시작합니다.\n',
  BRIDGE_LEN: '다리의 길이를 입력해주세요.\n',
  SELECT: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RESTART: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  RESULT: '\n최종 게임 결과',
  SUCCESS: '\n게임 성공 여부: 성공\n',
  FAIL: '게임 성공 여부: 실패\n',
  TOTAL_TRY: '총 시도한 횟수: ',
};

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
  },
};

module.exports = OutputView;
