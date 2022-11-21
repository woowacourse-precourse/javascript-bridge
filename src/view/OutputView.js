const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES, ERROR } = require('../constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {

  /**
   * 게임 시작 메세지를 출력합니다.
   */
  printStart() {
    Console.print(MESSAGES.GAMESTART);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {string[][]} map 현재까지 이동한 다리의 상태 표현한 문자열배열
   */
  printMap(map) {
    Console.print(`[ ${map[0].join(' | ')} ]`);
    Console.print(`[ ${map[1].join(' | ')} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {boolean} isRight 사용자의 입력값과 다리 배열과의 정답 비교 결과값
   * @param {number} tryCount 현재까지 재시작한 횟수
   * @param {string[][]} map 현재까지 이동한 다리의 상태 표현한 문자열배열
   */
  printResult(isRight, tryCount, map) {
    Console.print(MESSAGES.RESULT);

    this.printMap(map);

    Console.print(MESSAGES.GAMEDONE(isRight, tryCount));
    Console.close();
  },

  /**
   * 입력값의 에러 타입에 맞는 메세지를 출력한다.
   * @param {string} type 예외처리 타입 문자열
   */
  printError(type) {
    Console.print(`\n${ERROR.PREFIX} ${ERROR[type]}\n`);
  },

};

module.exports = OutputView;
