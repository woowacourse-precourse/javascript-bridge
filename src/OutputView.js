const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('./utils/message');

const OutputView = {
  printNewLine() {
    Console.print('');
  },

  /**
   * 게임 시작 메시지를 출력한다.
   */
  printStart() {
    Console.print(OUTPUT_MESSAGE.START_GAME);
    this.printNewLine();
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {string[][]} markingPaper
   */
  printMap(markingPaper) {
    markingPaper.forEach((row) => {
      this.printRow(row);
    });
  },

  /**
   * @param {string[]} row
   */
  printRow(row) {
    const content = row.join(' | ');
    Console.print(`[ ${content} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   */
  printResult() {},
};

module.exports = OutputView;
