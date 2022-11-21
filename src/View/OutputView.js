const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  moveState: [[], []],
  isSuccess: '',
  
  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moveResult) {
    this.parseResult(moveResult);
    Console.print(`[${this.moveState[0].join('|')}]`);
    Console.print(`[${this.moveState[1].join('|')}]`);
  },

  parseResult(moveResult) {
    const [upOrDown, matchBoolean] = moveResult;
  
    const successOrFail = this.toSuccessOrFail(matchBoolean);
    if (upOrDown === 'U') {
      this.parseUpBridge(successOrFail);
      return;
    }
    this.parseDownBridge(successOrFail);
  },

  toSuccessOrFail(matchBoolean) {
    if (matchBoolean === true) {
      this.isSuccess = '성공';
      return ' O ';
    }
    this.isSuccess = '실패';
    return ' X ';
  },

  parseUpBridge(successOrFail) {
    this.moveState[0].push(successOrFail);
    this.moveState[1].push('   ');
  },

  parseDownBridge(successOrFail) {
    this.moveState[0].push('   ');
    this.moveState[1].push(successOrFail);
  },

  resetPrintData() {
    this.isSuccess = '';
    this.moveState = [[], []];
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(retryCount) {
    Console.print('\n최종 게임 결과');
    Console.print(`[${this.moveState[0].join('|')}]`);
    Console.print(`[${this.moveState[1].join('|')}]`);
    Console.print('');
    Console.print(`게임 성공 여부: ${this.isSuccess}`);
    Console.print(`총 시도한 횟수: ${retryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
