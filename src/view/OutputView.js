const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utiles/Constant');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  upBridge: [],
  downBridge: [],
  
  printMap(userMove, answer) {
    OutputView.makePrintMap(userMove, userMove.length-1);
    OutputView.makeMapLastItem(userMove[userMove.length-1], answer);

    Console.print(OutputView.makeFinalOutputMap());

    OutputView.printMapClear();
  },

  makePrintMap(userMove, userMoveLength) {
    for (let i = 0; i < userMoveLength; i++) {
      OutputView.upBridge.push(userMove[i] === 'U' ? 'O' : ' ');
      OutputView.downBridge.push(userMove[i] === 'D' ? 'O' : ' ');
    };
  },

  makeMapLastItem(lastAnswer, answer) {
    OutputView.upBridge.push(lastAnswer === 'U' ? answer : ' ');
    OutputView.downBridge.push(lastAnswer === 'D' ? answer : ' ');
  },

  makeFinalOutputMap() {
    let outputMap = `[ ${OutputView.upBridge.join(' | ')} ]\n`;
    outputMap+=`[ ${OutputView.downBridge.join(' | ')} ]\n`;
    return outputMap;
  },

  printMapClear() {
    OutputView.upBridge = [];
    OutputView.downBridge = [];
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(userMove, answer) {
    Console.print(MESSAGE.FINAL_MESSAGE);
    OutputView.printMap(userMove, answer);
    Console.print(MESSAGE.FAIL_OR_SUCCESS);
    Console.print(MESSAGE.TRY_COUNT);
    Console.close();
  },
};

module.exports = OutputView;
