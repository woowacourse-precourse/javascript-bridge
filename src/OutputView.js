const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const OutputView = {
  printOpening() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  printMap(movingState) {
    [movingState.upState, movingState.downState].forEach((state) => {
      this.printState(state);
    })
  },

  printState(state) {
    const map = this.stringConversion(state);
    Console.print(map);
  },

  stringConversion(state) {
    let conversionValue = '[ '
    state.forEach((element, index) => {
      conversionValue += `${element}`
      index === state.length - 1 ? conversionValue += ' ]' : conversionValue += ' | '
    })
    return conversionValue;
  },

  printResult(movingState, success) {
    if(success) Console.print('');

    Console.print('최종 게임 결과');
    this.printMap(movingState);

    this.printSuccess(success);
    this.printAttempts(movingState.attempts);
  },

  printSuccess(success) {
    const successResult = success ? `성공` : '실패';
    Console.print(`\n게임 성공 여부: ${successResult}`);
  },

  printAttempts(attempts) {
    Console.print(`총 시도한 횟수: ${attempts}`);
    Console.close();
  },

  printError(e) {
    Console.print(e + '\n');
  },
};

module.exports = OutputView;
