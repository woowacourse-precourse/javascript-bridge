const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE, RESULT_MESSAGE } = require('./Constants/message');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임 시작을 알리는 문구를 출력한다.
   */
  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(game) {
    console.log('printMap');
    const bridge = game.getBridge();
    const records = game.getRecords();
    console.log('printmap', bridge, records);
    const upperBridge = ['['];
    const downerBridge = ['['];
    records.forEach((direction, idx) => {
      if (direction === 'U') {
        if (direction === bridge[idx]) upperBridge.push('O');
        else upperBridge.push('X');
        downerBridge.push(' ');
      } else if (direction === 'D') {
        if (direction === bridge[idx]) downerBridge.push('O');
        else downerBridge.push('X');
        upperBridge.push(' ');
      }
      upperBridge.push('|');
      downerBridge.push('|');
    });
    upperBridge.pop();
    upperBridge.push(']');

    downerBridge.pop();
    downerBridge.push(']');

    Console.print(upperBridge.join(' '));
    Console.print(downerBridge.join(' '));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(game) {
    Console.print(OUTPUT_MESSAGE.result);
    OutputView.printMap(game);
    Console.print(RESULT_MESSAGE.result(game.getGameResult()));
    Console.print(RESULT_MESSAGE.attempt_count(game.getAttemptCount()));
    Console.close();
  },
};

module.exports = OutputView;
