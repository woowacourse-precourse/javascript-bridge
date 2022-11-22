const { Console } = require('@woowacourse/mission-utils');
const { NEW_LINE, OUTPUT_VIEW } = require('../Constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap({ up, down }) {
    Console.print(OUTPUT_VIEW.up_bridge(this.decode(up)));
    Console.print(OUTPUT_VIEW.down_bridge(this.decode(down)));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ up, down, tryCount }) {
    Console.print(NEW_LINE + OUTPUT_VIEW.end_game_result_message);
    Console.print(OUTPUT_VIEW.up_bridge(this.decode(up)));
    Console.print(OUTPUT_VIEW.down_bridge(this.decode(down)));
    Console.print(NEW_LINE + OUTPUT_VIEW.state_message(this.inferState(up, down)));
    Console.print(OUTPUT_VIEW.total_tryCount(tryCount));
  },

  printError(error) {
    Console.print(error);
  },

  printStartMessage() {
    Console.print(OUTPUT_VIEW.start + NEW_LINE);
  },

  decode(upOrDown) {
    const PASS = 'O';
    const FAIL = 'X';
    const DIVIDE = '|';
    const SPACE = ' ';
    return upOrDown.replace(/0/g, FAIL).replace(/1/g, PASS).replace(/2/g, DIVIDE).replace(/3/g, SPACE);
  },

  inferState(up, down) {
    const PASS = '1';
    const SUCESS = '성공';
    const FAIL = '실패';
    const isLastPassFromUp = up[up.length - 2] === PASS;
    const isLastPassFromDown = down[down.length - 2] === PASS;
    return isLastPassFromUp || isLastPassFromDown ? SUCESS : FAIL;
  },
};

module.exports = OutputView;
