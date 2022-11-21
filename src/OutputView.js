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
  printResult(bridge, turn, isCurrentTurnSuccess, gameCount) {
    Console.print(MESSAGE.END);
    this.printMap(bridge, turn, isCurrentTurnSuccess);
    const isSuccess = isCurrentTurnSuccess
      ? MESSAGE.GAME_SUCCESS
      : MESSAGE.GAME_FAIL;
    Console.print(`${MESSAGE.IS_SUCCESS}${isSuccess}`);
    Console.print(`${MESSAGE.GAME_COUNT}${gameCount}`);
  },
};

module.exports = OutputView;
