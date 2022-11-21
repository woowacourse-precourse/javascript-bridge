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
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, turn, isCurrentTurnSuccess) {
    let up = this.makeResultArr(bridge, turn, GAME.UP);
    let down = this.makeResultArr(bridge, turn, GAME.DOWN);

    if (!isCurrentTurnSuccess) {
      up = this.changeLastToFail(up);
      down = this.changeLastToFail(down);
    }

    Console.print(this.makePrintFormat(up));
    Console.print(this.makePrintFormat(down));
  },
  makeResultArr(bridge, turn, correct) {
    let resultArr = [];

    for (let i = 0; i < turn + 1; i++) {
      const result = bridge[i] === correct ? this.SUCCESS : this.EMPTY;
      resultArr.push(result);
    }

    return resultArr;
  },
  changeLastToFail(arr) {
    let copyArr = [...arr];
    if (arr.at(-1) === this.SUCCESS) {
      copyArr.splice(copyArr.length - 1, 1, this.FAIL);
    }

    return copyArr;
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
