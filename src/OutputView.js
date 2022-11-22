const { Console } = require('@woowacourse/mission-utils');
const { KEY, RESULT_MESSAGE, UTILS, MESSAGE } = require('./constant');
const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
  },
  printMap(status) {
    const List = this.printList(status);
    const upperList = this.printupperList(List);
    const bottomList = this.printbottomList(List);
    Console.print(upperList);
    Console.print(bottomList);
  },

  printList({ bridge, turn, alive }) {
    const List = [];
    for (let step = 0; step <= turn; step += 1) {
      List.push(bridge[step] === KEY.MOVE_UP ? [UTILS.PASS, UTILS.BLANK] : [UTILS.BLANK, UTILS.PASS]);
    }
    if (!alive) {
      List[turn] = this.lastTurnPrint(List[turn]);
    }
    return List;
  },

  lastTurnPrint(lastTurn) {
    const lastReturn = lastTurn;
    lastReturn.splice(lastReturn.lastIndexOf(UTILS.BLANK), 1, UTILS.STOP);
    lastReturn.splice(lastReturn.lastIndexOf(UTILS.PASS), 1, UTILS.BLANK);
    return lastReturn;
  },

  printupperList(List) {
    const upperList = [];
    List.forEach((List) => {
      upperList.push(List[0]);
    });
    return `[ ${upperList.join(UTILS.WALL)} ]`;
  },
  printbottomList(List) {
    const bottomList = [];
    List.forEach((List) => {
      bottomList.push(List[1]);
    });
    return `[ ${bottomList.join(UTILS.WALL)} ]`;
  },
  aliveResult({ alive }) {
    Console.print(alive ? RESULT_MESSAGE.SUCCESS : RESULT_MESSAGE.FAIL);
  },

  matchNumberPrint({ matchNumber }) {
    Console.print(`${RESULT_MESSAGE.MATCH} ${matchNumber}`);
  },

  printResult(status) {
    Console.print(RESULT_MESSAGE.RESULT);
    this.printMap(status);
    this.aliveResult(status);
    this.matchNumberPrint(status);
  },
};

module.exports = OutputView;