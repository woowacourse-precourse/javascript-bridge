const { Console } =require('@woowacourse/mission-utils');
const NOTICE = require('../Constants/Notice')

const OutputView = {

  printMap(userInput, bridgeInfo) {
    const upside = this.generateUpside(userInput, bridgeInfo);
    const downside = this.generateDownside(userInput, bridgeInfo);
    Console.print(`${upside.join('')}\n`);
    Console.print(`${downside.join('')}\n`);
  },

  printResult(userInput, bridgeInfo, count) {
    Console.print(NOTICE.GAME_RESULT);
    this.printMap(userInput, bridgeInfo);
    if(userInput.length === bridgeInfo.length){
      Console.print(NOTICE.FINAL_RESULT_WIN);
    }
    if(userInput.length !== bridgeInfo.length){
      Console.print(NOTICE.FINAL_RESULT_DEFEAT);
    }
    Console.print(NOTICE.TOTAL_TRY_COUNT + count);
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
  },

  ErrorMessage(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
