const Print = require('../src/Print');
const { Console } =require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(userInput, bridgeInfo) {
    const upside = this.generateUpside(userInput, bridgeInfo);
    const downside = this.generateDownside(userInput, bridgeInfo);
    Console.print(`${upside.join('').trim()}\n`);
    Console.print(`${downside.join('').trim()}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(userInput, bridgeInfo, count) {
    Console.print('최종 게임 결과\n');
    this.printMap(userInput, bridgeInfo);
    if(userInput.length === bridgeInfo.length){
      Console.print(`게임 성공 여부: 성공\n`);
    }
    if(userInput.length !== bridgeInfo.length){
      Console.print(`게임 성공 여부: 실패\n`);
    }
    Console.print('총 시도한 횟수: ' + count);
    Console.close();
  },
  generateUpside(userInput, bridgeInfo) {
    const upside = [];
    this.addOpenBracketTo(upside);
    for (let i = 0; i < userInput.length; i++) {
      this.makeEachSectionAtUpside(userInput[i], bridgeInfo[i], upside);
    }
    upside.pop();
    this.addCloseBracketTo(upside);
    return upside;
  },
  makeEachSectionAtUpside (userInput, bridgeInfo, upside){
    if(bridgeInfo === 'U') {
      this.printOMarkAtUpside(userInput, upside);
      this.printXMarkAtUpside(userInput, upside);
    }
    if(bridgeInfo === 'D') {
      this.printBlankAtUpside(userInput, upside);
    }
    this.addDivisionTo(upside);
  },
  printOMarkAtUpside(userInput, upside){
    if(userInput === 'U'){
      upside.push('O');
    }
  },
  printXMarkAtUpside(userInput, upside){
    if(userInput === 'D'){
      upside.push('X');
    }
  },
  printBlankAtUpside(userInput, upside){
    if(userInput === 'D'){
      upside.push(' ');
    }
  },
  generateDownside(userInput, bridgeInfo) {
    const downside = [];
    this.addOpenBracketTo(downside);
    for (let i = 0; i < userInput.length; i++) {
      this.makeEachSectionAtDownside(userInput[i], bridgeInfo[i], downside);
    }
    downside.pop();
    this.addCloseBracketTo(downside);
    return downside;
  },
  makeEachSectionAtDownside (userInput, bridgeInfo, downside) {
    if(bridgeInfo === 'D') {
      this.printOMarkAtDownside(userInput, downside);
      this.printXMarkAtDownside(userInput, downside);
    };
    if(bridgeInfo === 'U') {
      this.printBlankAtDownside(userInput, downside);
    };
    this.addDivisionTo(downside);
  },
  printXMarkAtDownside(userInput, downside){
    if(userInput === 'U'){
      downside.push('X');
    }
  },
  printOMarkAtDownside(userInput, downside){
    if(userInput === 'D'){
      downside.push('O');
    }
  },
  printBlankAtDownside(userInput, downside){
    if(userInput === 'U'){
      downside.push(' ');
    }
  },
  addCloseBracketTo(bridge){
    bridge.push(' ]');
  },
  addOpenBracketTo(bridge){
    bridge.push('[ ');
  },
  addDivisionTo(bridge){
    bridge.push(' | ');
  }
};

module.exports = OutputView;
