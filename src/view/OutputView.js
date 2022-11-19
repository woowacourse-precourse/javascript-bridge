const { Console } = require('@woowacourse/mission-utils');
const CONSTANT = require('../constants/Constant.js');

const OutputView = {
  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },

  printMap(bridge) {
    let [upperResult, lowerResult] = this.getResultStr(bridge);

    upperResult += ']';
    lowerResult += ']';

    Console.print(`${upperResult}\n${lowerResult}\n`);
  },

  getResultStr(bridge) {
    let upperResult = '[';
    let lowerResult = '[';

    bridge.currentPos.forEach((pos, index) => {
      upperResult += this.addUpperResultStr(bridge, pos, index);
      lowerResult += this.addLowerResultStr(bridge, pos, index);
    });

    return [upperResult, lowerResult];
  },

  addUpperResultStr(bridge, pos, index) {
    let result = '';

    const { DIRECTION } = CONSTANT;
    
    result += index === 0 ? '' : '|';
    if (pos === DIRECTION.UP) result += bridge.cellValidator(index) ? ' O ' : ' X ';
    else result += '   ';
    
    return result;
  },

  addLowerResultStr(bridge, pos, index) {
    let result = '';

    const { DIRECTION } = CONSTANT;
    
    result += index === 0 ? '' : '|';
    if (pos === DIRECTION.DOWN) result += bridge.cellValidator(index) ? ' O ' : ' X ';
    else result += '   ';
    
    return result;
  },

  printResult(bridge) {
    Console.print('최종 게임 결과')
    this.printMap(bridge);
    Console.print(`게임 성공 여부: ${bridge.isSuccess() ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${bridge.attempt}`)
  },

  printError(e) {
    Console.print(e);
  }
};

module.exports = OutputView;
