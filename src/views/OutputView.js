/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../../lib/constans');

const OutputView = {
  printStartMessage() {
    console.log(GAME_MESSAGE.start);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMapCallback(acc, str, idx, len) {
    acc += ` ${str} `;
    if (len !== idx) {
      acc += '|';
    }
    return acc;
  },

  printTopOfMap(status, len) {
    let map = status.reduce((acc, [_, up], idx) => this.printMapCallback(acc, up, idx, len), '[');
    map += ']';

    Console.print(map);
  },

  printBottomOfMap(status, len) {
    let map = status.reduce(
      (acc, [down, _], idx) => this.printMapCallback(acc, down, idx, len),
      '['
    );
    map += ']';

    Console.print(map);
  },

  printMap(status) {
    const len = status.length - 1;

    this.printTopOfMap(status, len);
    this.printBottomOfMap(status, len);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ status, clear, attempts }) {
    Console.print(GAME_MESSAGE.end);
    this.printMap(status);
    Console.print(`\n게임 성공 여부: ${clear ? GAME_MESSAGE.success : GAME_MESSAGE.failure}`);
    Console.print(`총 시도한 횟수: ${attempts}`);
    Console.close();
  }
};

module.exports = OutputView;
