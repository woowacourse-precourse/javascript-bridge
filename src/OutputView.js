const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;

const MESSAGE = require('./consts/Output');
const GAME = require('./consts/Game');

const OutputView = {
  SUCCESS: 'O',
  FAIL: 'X',
  EMPTY: ' ',
  printStart() {
    Console.print(MESSAGE.START);
  },
  printMap(bridge, turn, isCurrentTurnSuccess) {
    let up = this.makeResultArr(bridge, turn, GAME.UP);
    let down = this.makeResultArr(bridge, turn, GAME.DOWN);

    if (!isCurrentTurnSuccess) {
      up.push(this.getFailResult(bridge, turn, GAME.UP));
      down.push(this.getFailResult(bridge, turn, GAME.DOWN));
    }

    Console.print(this.makePrintFormat(up));
    Console.print(this.makePrintFormat(down));
  },
  makeResultArr(bridge, turn, correct) {
    let resultArr = [];

    for (let i = 0; i < turn; i++) {
      const result = bridge[i] === correct ? this.SUCCESS : this.EMPTY;
      resultArr.push(result);
    }

    return resultArr;
  },
  getFailResult(bridge, turn, correct) {
    const result = bridge[turn + 1] === correct ? this.EMPTY : this.FAIL;

    return result;
  },
  makePrintFormat(result) {
    const BAR = ' | ';
    const SPACE = ' ';
    const str = ['[', result.join(BAR), ']'].join(SPACE);

    return str;
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
